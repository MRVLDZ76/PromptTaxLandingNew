import { Handler } from "@netlify/functions";

// Simple in-memory cache for the lifetime of the function container
const cache = new Map<string, any>();

const handler: Handler = async (event) => {
  // CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const brand = (event.queryStringParameters && event.queryStringParameters.brand) || "";

    if (!brand) {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "Missing brand query parameter" }),
      };
    }

    // Return cached result when available
    if (cache.has(brand)) {
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify(cache.get(brand)),
      };
    }

    const apiKey = process.env.BRANDFETCH_API_KEY;
    if (!apiKey) {
      // No API key: return a minimal object so frontend can fall back to local assets
      const minimal = { brand: { name: brand }, logos: [] };
      cache.set(brand, minimal);
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify(minimal),
      };
    }

    const url = `https://api.brandfetch.io/v2/brands/${encodeURIComponent(brand)}`;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
    });

    // Handle rate limiting gracefully: return cached if available, otherwise return a safe minimal response
    if (res.status === 429) {
      console.warn(`Brandfetch rate limited for ${brand}`);
      if (cache.has(brand)) {
        return {
          statusCode: 200,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
          body: JSON.stringify(cache.get(brand)),
        };
      }

      const minimal = { brand: { name: brand }, logos: [] };
      // Do NOT throw a 429 to the frontend — return 200 with minimal payload so the UI can fallback
      cache.set(brand, minimal);
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify(minimal),
      };
    }

    if (!res.ok) {
      const text = await res.text();
      console.error("Brandfetch returned error", res.status, text);
      const minimal = { brand: { name: brand }, logos: [] };
      cache.set(brand, minimal);
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify(minimal),
      };
    }

    const data = await res.json();

    // Cache result and return the data
    cache.set(brand, data);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(data),
    };
  } catch (error: any) {
    console.error("brandfetch error", error);
    const minimal = { brand: { name: (event.queryStringParameters && event.queryStringParameters.brand) || "" }, logos: [] };
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(minimal),
    };
  }
};

export { handler };
