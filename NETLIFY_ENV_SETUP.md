# Netlify Environment Variables Setup

## Required Environment Variables

Add these in Netlify Dashboard → Site Settings → Environment Variables:

### Production Variables

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `VITE_BASE_URL` | `/` | Forces absolute asset paths (CRITICAL for shared links) |
| `NODE_VERSION` | `22` | Matches your local Node.js version |

## How to Add:

1. Go to: https://app.netlify.com/sites/YOUR-SITE/configuration/env
2. Click "Add a variable"
3. Add `VITE_BASE_URL` with value `/`
4. Save and trigger a new deploy

## Why This Fixes Blank Pages:

Without `VITE_BASE_URL=/`, Vite defaults to relative paths like `src/main.tsx`.

When users visit `/blog/post` from a shared link:
- Browser looks for: `/blog/src/main.tsx` ❌
- Gets: 404 or `index.html` instead of JS
- Result: Blank page

With `VITE_BASE_URL=/`, all assets use absolute paths like `/assets/main-abc123.js`:
- Browser looks for: `/assets/main-abc123.js` ✅
- Gets: Actual JavaScript file
- Result: Page loads correctly

## Verify After Deploy:

1. Visit your deployed site
2. View page source (Ctrl+U)
3. Check script tags - they should be:
   ```html
   <script type="module" crossorigin src="/assets/index-abc123.js"></script>
   ```
   NOT:
   ```html
   <script type="module" crossorigin src="assets/index-abc123.js"></script>
   ```

The leading `/` is critical!
