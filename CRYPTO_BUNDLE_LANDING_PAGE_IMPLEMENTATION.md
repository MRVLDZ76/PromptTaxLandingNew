# Crypto Tax Bundle Landing Page Implementation Guide

**Date:** December 30, 2025  
**Page Route:** `/crypto-bundle`  
**Source Template:** `services/v2`  
**Target:** Create high-converting landing page for Crypto Tax Bundle PDF + CPA Review Service

---

## 🎯 Project Overview

Transform the services/v2 template into a dedicated landing page for Prompt Tax's **Crypto Tax Bundle** offering, which includes:
1. **Form 8949 PDF Generation** (unlimited transactions, IRS-compliant)
2. **Schedule D Integration** (automatic gain/loss aggregation)
3. **Professional CPA Review Service** (optional add-on)
4. **1040 Tax Prep Continuation** (seamless integration with full tax filing)

---

## 📋 Implementation Steps

### Phase 1: Page Setup & Routing

#### 1.1 Duplicate Template
```bash
# Frontend (Next.js/React)
cp -r pages/services/v2 pages/crypto-bundle
# OR
cp -r app/services/v2 app/crypto-bundle

# Update page metadata
# File: pages/crypto-bundle/page.tsx (or index.tsx)
```

#### 1.2 Update Route Configuration
```typescript
// next.config.js or routing config
{
  path: '/crypto-bundle',
  component: 'CryptoBundleLandingPage',
  layout: 'marketing'
}
```

#### 1.3 Remove Template Branding
- Remove/replace: Mizzle references, generic tech company branding
- Update: Color scheme to Prompt Tax green (#00D991) and purple (#7C3AED)
- Replace: Stock illustrations with crypto/tax-specific visuals

---

## 🎨 Content Replacement Strategy

### Section 1: Hero Section (Above the Fold)

**Current Template:**
```
"Discover the solutions we offer"
Generic tech services description
"More than 10k active users!"
```

**NEW CONTENT:**
```html
<div class="hero-section">
  <h1>Crypto Tax Made Simple</h1>
  <h2>IRS-Compliant Form 8949 + Schedule D Bundle</h2>
  
  <p class="hero-description">
    Generate unlimited Form 8949 pages with proper batch pagination, 
    automatic Schedule D aggregation, and optional professional CPA review. 
    Stop stressing about crypto taxes—we handle the complexity.
  </p>
  
  <div class="hero-cta">
    <button class="btn-primary">Generate Your Bundle Now</button>
    <button class="btn-secondary">See Sample PDF</button>
  </div>
  
  <div class="social-proof">
    <div class="stat">
      <span class="stat-number">50,000+</span>
      <span class="stat-label">Crypto transactions processed</span>
    </div>
    <div class="stat">
      <span class="stat-number">2,500+</span>
      <span class="stat-label">Tax returns filed</span>
    </div>
    <div class="stat">
      <span class="stat-number">100%</span>
      <span class="stat-label">IRS-compliant forms</span>
    </div>
  </div>
</div>
```

**Visual Elements:**
- **Illustration:** Replace generic figure with crypto-themed illustration (Bitcoin/Ethereum symbols, Form 8949 document preview, checkmarks)
- **Icons:** Tax forms, cryptocurrency symbols, CPA badge, IRS seal
- **Background:** Subtle gradient (purple to green) or clean white

---

### Section 2: Service Cards (6 Cards → 6 Features)

**Replace generic services with crypto tax bundle features:**

#### Card 1: 📄 **Unlimited Transactions**
```
Icon: Document with infinity symbol
Title: "Unlimited Transactions"
Description: "Process 100, 1,000, or 10,000 crypto transactions. Our batch pagination system automatically splits Form 8949 into properly formatted pages with 11 transactions each—no manual work required."
CTA: "Learn more →"
```

#### Card 2: 🎯 **IRS-Compliant Forms**
```
Icon: IRS seal/shield
Title: "Official IRS Templates"
Description: "We use the official 2025 IRS Form 8949 template (f8949.pdf) with precise field mapping. Every column (a-h) correctly populated, totals isolated to last page only—no footer collisions."
CTA: "View sample →"
```

#### Card 3: 🧮 **Schedule D Integration**
```
Icon: Calculator with chart
Title: "Automatic Schedule D"
Description: "Form 8949 totals automatically flow to Schedule D Lines 1b and 8b. Short-term and long-term gains calculated separately with wash sale adjustments included."
CTA: "See integration →"
```

#### Card 4: 👨‍💼 **Professional CPA Review**
```
Icon: CPA badge
Title: "Optional CPA Review"
Description: "Upgrade to have a licensed CPA review your crypto tax package before filing. Get professional verification, tax strategy advice, and peace of mind for $149."
CTA: "Add CPA review →"
```

#### Card 5: 🔗 **Seamless 1040 Integration**
```
Icon: Linked documents
Title: "Continue to Full 1040"
Description: "Your crypto gains automatically populate Form 1040 Line 7. Continue with our AI-powered tax prep to complete your entire return—W-2s, deductions, credits, and more."
CTA: "Complete your return →"
```

#### Card 6: 📊 **Smart CSV Parsing**
```
Icon: File upload with gears
Title: "Instant CSV Import"
Description: "Upload CSV exports from Coinbase, Binance, Kraken, or any exchange. Our AI parser identifies columns, maps data, and handles wash sales automatically."
CTA: "Upload CSV →"
```

---

### Section 3: How It Works (NEW SECTION - Insert Before CTA)

**Add step-by-step process visualization:**

```html
<section class="how-it-works">
  <h2>How It Works</h2>
  <p class="section-subtitle">From CSV to IRS-ready PDF in 3 simple steps</p>
  
  <div class="steps">
    <div class="step">
      <div class="step-number">1</div>
      <div class="step-icon">📤</div>
      <h3>Upload Your Transactions</h3>
      <p>Import CSV from your exchange or manually enter trades. We support Coinbase, Binance, Kraken, and custom formats.</p>
    </div>
    
    <div class="step">
      <div class="step-number">2</div>
      <div class="step-icon">🤖</div>
      <h3>AI Processes Everything</h3>
      <p>Our system calculates gains/losses, identifies wash sales, applies basis adjustments, and generates Form 8949 pages with correct field mapping.</p>
    </div>
    
    <div class="step">
      <div class="step-number">3</div>
      <div class="step-icon">📥</div>
      <h3>Download & File</h3>
      <p>Get your complete tax bundle: Form 8949 (all pages), Schedule D, and integration with Form 1040. Optional CPA review available.</p>
    </div>
  </div>
</section>
```

---

### Section 4: Pricing Tiers (NEW SECTION)

**Replace generic CTA with clear pricing:**

```html
<section class="pricing">
  <h2>Choose Your Package</h2>
  
  <div class="pricing-cards">
    <!-- FREE TIER -->
    <div class="pricing-card">
      <div class="badge">Try it free</div>
      <h3>Basic Bundle</h3>
      <div class="price">
        <span class="amount">$0</span>
        <span class="period">/ return</span>
      </div>
      <ul class="features">
        <li>✅ Up to 25 transactions</li>
        <li>✅ Form 8949 generation</li>
        <li>✅ Schedule D integration</li>
        <li>✅ Wash sale detection</li>
        <li>❌ CPA review</li>
        <li>❌ Priority support</li>
      </ul>
      <button class="btn-outline">Start Free</button>
    </div>
    
    <!-- PAID TIER -->
    <div class="pricing-card featured">
      <div class="badge">Most popular</div>
      <h3>Unlimited Bundle</h3>
      <div class="price">
        <span class="amount">$49</span>
        <span class="period">/ return</span>
      </div>
      <ul class="features">
        <li>✅ Unlimited transactions</li>
        <li>✅ Form 8949 generation</li>
        <li>✅ Schedule D integration</li>
        <li>✅ Wash sale detection</li>
        <li>✅ Advanced reporting</li>
        <li>✅ Email support</li>
      </ul>
      <button class="btn-primary">Get Started</button>
    </div>
    
    <!-- CPA REVIEW ADD-ON -->
    <div class="pricing-card">
      <div class="badge">Pro</div>
      <h3>Bundle + CPA Review</h3>
      <div class="price">
        <span class="amount">$198</span>
        <span class="period">/ return</span>
      </div>
      <ul class="features">
        <li>✅ Everything in Unlimited</li>
        <li>✅ Licensed CPA review</li>
        <li>✅ Tax strategy consultation</li>
        <li>✅ Audit support guidance</li>
        <li>✅ Priority phone support</li>
        <li>✅ 100% accuracy guarantee</li>
      </ul>
      <button class="btn-primary">Add CPA Review</button>
    </div>
  </div>
</section>
```

---

### Section 5: Technical Proof (NEW SECTION - Build Trust)

**Show technical competency to sophisticated crypto users:**

```html
<section class="technical-details">
  <h2>Built for Accuracy</h2>
  <p class="section-subtitle">See what makes our crypto tax bundle IRS-compliant</p>
  
  <div class="tech-features">
    <div class="tech-card">
      <h3>🎯 Precise Field Mapping</h3>
      <code>
        f1_03-10: Row 1 (columns a-h)
        f1_11-18: Row 2 (8-field stride)
        f1_92-95: Line 2 totals (isolated)
      </code>
      <p>Official IRS template with exact field names</p>
    </div>
    
    <div class="tech-card">
      <h3>📄 Smart Pagination</h3>
      <code>
        MAX_TRANSACTIONS_PER_PAGE = 11
        pages = (total + 11 - 1) // 11
        Fresh template per batch
      </code>
      <p>No footer collisions, clean page breaks</p>
    </div>
    
    <div class="tech-card">
      <h3>💰 Accurate Totals</h3>
      <code>
        Proceeds: Sum(all transactions)
        Basis: Sum(cost basis)
        Gain/Loss: Proceeds - Basis + Adj
      </code>
      <p>Totals calculated from ALL lots, not just last page</p>
    </div>
    
    <div class="tech-card">
      <h3>🔄 Wash Sale Engine</h3>
      <code>
        30-day window detection
        Basis adjustment propagation
        Code 'W' flag on Form 8949
      </code>
      <p>IRS-compliant wash sale identification</p>
    </div>
  </div>
</section>
```

---

### Section 6: CTA Section (Replace "Ready to elevate your business?")

**NEW CONTENT:**
```html
<section class="cta-section">
  <div class="cta-visual">
    <!-- Show Form 8949 PDF preview mockup -->
    <img src="/images/form-8949-preview.png" alt="Form 8949 Preview" />
  </div>
  
  <div class="cta-content">
    <h2>Stop Stressing About Crypto Taxes</h2>
    <p>
      Join 2,500+ crypto investors who trust Prompt Tax to handle 
      their Form 8949 generation. IRS-compliant, unlimited transactions, 
      optional CPA review—everything you need to file confidently.
    </p>
    
    <button class="btn-primary-large">Generate My Form 8949 Now</button>
    
    <div class="trust-badges">
      <img src="/badges/irs-compliant.svg" alt="IRS Compliant" />
      <img src="/badges/ssl-secure.svg" alt="SSL Secure" />
      <img src="/badges/cpa-reviewed.svg" alt="CPA Reviewed" />
    </div>
  </div>
</section>
```

**Replace company logos:**
- Remove: Greenish, Sitemark, LogoIpsum, PinPoint, Pogodigm
- Add: Coinbase logo, Binance logo, Kraken logo, IRS seal, "As featured in CoinDesk"

---

### Section 7: FAQ Section (Customize Questions)

**Replace template FAQs with crypto tax-specific questions:**

```javascript
const faqs = [
  {
    question: "How many transactions can I process?",
    answer: "Our Unlimited Bundle supports infinite transactions. We've successfully processed returns with 10,000+ trades. Our batch pagination system automatically splits Form 8949 into properly formatted pages with 11 transactions each, preventing footer collisions."
  },
  {
    question: "Is this IRS-compliant?",
    answer: "Yes. We use the official 2025 IRS Form 8949 template (f8949.pdf) with exact field mapping. Each column (a-h) is correctly populated, totals appear only on the last page, and all calculations follow IRS Publication 544 guidelines."
  },
  {
    question: "Do you handle wash sales?",
    answer: "Absolutely. Our wash sale engine detects substantially identical purchases within 30 days, calculates basis adjustments, propagates disallowed losses, and marks transactions with Code 'W' on Form 8949—exactly as the IRS requires."
  },
  {
    question: "What formats do you accept?",
    answer: "We accept CSV exports from all major exchanges (Coinbase, Binance, Kraken, Gemini, etc.). Our AI parser identifies columns automatically. You can also manually enter transactions or use our API for custom integrations."
  },
  {
    question: "What does CPA review include?",
    answer: "Our licensed CPAs verify all calculations, check for missing transactions, identify tax-saving opportunities, ensure IRS compliance, and provide a signed review letter. They're available for questions via email or phone consultation."
  },
  {
    question: "Can I use this with other tax software?",
    answer: "Yes. Download your Form 8949 and Schedule D as PDF, then upload to TurboTax, H&R Block, or give to your accountant. Or continue with Prompt Tax's full 1040 preparation for seamless integration."
  },
  {
    question: "What about NFT sales and staking income?",
    answer: "NFT sales are treated as capital gains (Form 8949). Staking rewards are ordinary income (Schedule 1). Our system handles both—crypto gains go to Form 8949, staking income to Schedule 1 Line 8z."
  },
  {
    question: "How long does generation take?",
    answer: "Instant. Upload your CSV, and we generate Form 8949 in 2-5 seconds (even for 1,000+ transactions). CPA review (if added) takes 24-48 hours during tax season, 12-24 hours off-season."
  }
];
```

---

## 🔍 SEO Optimization

### Meta Tags
```html
<!-- Primary Meta Tags -->
<title>Crypto Tax Form 8949 Generator | IRS-Compliant | Prompt Tax</title>
<meta name="title" content="Crypto Tax Form 8949 Generator | IRS-Compliant | Prompt Tax" />
<meta name="description" content="Generate IRS-compliant Form 8949 for unlimited crypto transactions. Automatic Schedule D integration, wash sale detection, optional CPA review. Free up to 25 transactions." />
<meta name="keywords" content="crypto tax, form 8949, schedule d, cryptocurrency taxes, bitcoin taxes, crypto tax software, IRS form 8949, wash sale, crypto CPA" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://prompt.tax/crypto-bundle" />
<meta property="og:title" content="Crypto Tax Form 8949 Generator | Prompt Tax" />
<meta property="og:description" content="IRS-compliant Form 8949 generation for unlimited crypto transactions. Automatic calculations, wash sale detection, CPA review available." />
<meta property="og:image" content="https://prompt.tax/images/crypto-bundle-og.jpg" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://prompt.tax/crypto-bundle" />
<meta property="twitter:title" content="Crypto Tax Form 8949 Generator | Prompt Tax" />
<meta property="twitter:description" content="Generate IRS-compliant Form 8949 for unlimited crypto transactions with optional CPA review." />
<meta property="twitter:image" content="https://prompt.tax/images/crypto-bundle-twitter.jpg" />

<!-- Canonical URL -->
<link rel="canonical" href="https://prompt.tax/crypto-bundle" />

<!-- Structured Data (Schema.org) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Prompt Tax Crypto Bundle",
  "applicationCategory": "FinanceApplication",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "0",
    "highPrice": "198",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "2500"
  },
  "description": "IRS-compliant Form 8949 generator for cryptocurrency taxes with unlimited transactions and optional CPA review."
}
</script>
```

### SEO Content Strategy

#### H1 Hierarchy
```
H1: Crypto Tax Made Simple (Hero)
H2: How It Works (Process section)
H2: Choose Your Package (Pricing)
H2: Built for Accuracy (Technical details)
H2: Stop Stressing About Crypto Taxes (CTA)
H2: You Have Questions, We Have Answers (FAQ)
```

#### Keyword Targets
- **Primary:** crypto tax, form 8949, cryptocurrency taxes
- **Secondary:** schedule d crypto, crypto tax software, bitcoin taxes
- **Long-tail:** form 8949 unlimited transactions, crypto wash sale calculator, IRS crypto tax forms

#### Internal Linking
```html
<!-- Link to related pages -->
<a href="/blog/crypto-tax-guide">Complete Crypto Tax Guide</a>
<a href="/blog/wash-sale-rules">Understanding Wash Sale Rules</a>
<a href="/1040">Continue to Full 1040 Tax Return</a>
<a href="/pricing">See All Pricing Options</a>
<a href="/cpa-review">Learn About CPA Review</a>
```

#### External Linking (Authority)
```html
<a href="https://www.irs.gov/forms-pubs/about-form-8949" rel="nofollow">IRS Form 8949 Instructions</a>
<a href="https://www.irs.gov/pub/irs-pdf/f8949.pdf" rel="nofollow">Download Official Form 8949 PDF</a>
<a href="https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" rel="nofollow">IRS Crypto Tax FAQ</a>
```

---

## 🎨 Design Components

### Color Scheme
```css
/* Primary Colors */
--primary-green: #00D991;
--primary-purple: #7C3AED;
--dark-bg: #1F2937;
--light-bg: #F9FAFB;

/* Accent Colors */
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
--info: #3B82F6;

/* Text Colors */
--text-primary: #111827;
--text-secondary: #6B7280;
--text-light: #9CA3AF;
```

### Typography
```css
/* Headings */
h1 { font-size: 3.5rem; font-weight: 800; line-height: 1.1; }
h2 { font-size: 2.5rem; font-weight: 700; line-height: 1.2; }
h3 { font-size: 1.75rem; font-weight: 600; line-height: 1.3; }

/* Body */
body { font-family: 'Inter', sans-serif; font-size: 1rem; line-height: 1.6; }
.lead { font-size: 1.25rem; color: var(--text-secondary); }
```

### Buttons
```css
.btn-primary {
  background: linear-gradient(135deg, #7C3AED 0%, #00D991 100%);
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.4);
}

.btn-secondary {
  background: white;
  color: #7C3AED;
  border: 2px solid #7C3AED;
  padding: 14px 30px;
  border-radius: 12px;
  font-weight: 600;
}
```

### Animations
```css
/* Fade in on scroll */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-on-scroll {
  animation: fadeInUp 0.6s ease-out;
}

/* Gradient shift for CTA */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.btn-primary {
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}
```

---

## 🖼️ Required Assets

### Images to Create
1. **Hero illustration:** Crypto coins + Form 8949 document + checkmark (800x600px)
2. **Form 8949 preview:** Screenshot of filled form (1200x1600px)
3. **Schedule D preview:** Screenshot showing integration (1200x1600px)
4. **CPA review badge:** Professional badge graphic (300x300px)
5. **Process diagram:** 3-step workflow illustration (1200x400px)
6. **OG image:** Social sharing graphic (1200x630px)
7. **Twitter card:** Social sharing graphic (1200x600px)

### Icons Needed
- Document with infinity symbol (unlimited transactions)
- IRS seal/shield (compliance)
- Calculator with chart (Schedule D)
- CPA badge (professional review)
- Linked documents (integration)
- File upload with gears (CSV import)
- Checkmark in circle (success states)
- Warning triangle (wash sales)

### Logo Integration
- Replace template logos with: Coinbase, Binance, Kraken, Gemini, "As Featured In" badges
- Add: IRS seal, CPA badge, SSL secure badge, money-back guarantee badge

---

## 📱 Mobile Optimization

### Responsive Breakpoints
```css
/* Mobile First */
@media (max-width: 640px) {
  h1 { font-size: 2rem; }
  .pricing-cards { flex-direction: column; }
  .hero-cta { flex-direction: column; width: 100%; }
}

/* Tablet */
@media (min-width: 641px) and (max-width: 1024px) {
  .service-cards { grid-template-columns: repeat(2, 1fr); }
  .pricing-cards { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop */
@media (min-width: 1025px) {
  .service-cards { grid-template-columns: repeat(3, 1fr); }
  .pricing-cards { display: flex; justify-content: center; gap: 24px; }
}
```

### Mobile-Specific Features
- Sticky "Get Started" button at bottom
- Tap-to-expand FAQ accordions
- Swipeable pricing cards
- Hamburger menu with quick links
- Click-to-call CPA phone number

---

## 🚀 Performance Optimization

### Image Optimization
```html
<!-- Use Next.js Image component -->
<Image
  src="/images/form-8949-preview.png"
  alt="Form 8949 Preview"
  width={1200}
  height={1600}
  loading="lazy"
  placeholder="blur"
/>
```

### Code Splitting
```javascript
// Lazy load non-critical components
const Pricing = dynamic(() => import('@/components/Pricing'), { ssr: false });
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: false });
const TechnicalDetails = dynamic(() => import('@/components/TechnicalDetails'), { ssr: false });
```

### Performance Targets
- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Lighthouse Score:** > 90

---

## 🧪 A/B Testing Ideas

### Test Variations
1. **CTA Button Text:**
   - "Generate My Form 8949 Now" (control)
   - "Get Started Free"
   - "Calculate My Crypto Taxes"

2. **Pricing Display:**
   - Three tiers side-by-side (control)
   - Two tiers (Basic + Bundle)
   - "Pay What You Save" slider

3. **Hero Headline:**
   - "Crypto Tax Made Simple" (control)
   - "File Crypto Taxes with Confidence"
   - "1,000+ Crypto Trades? No Problem."

4. **Social Proof:**
   - Transaction count (control)
   - Customer testimonials
   - Trust badges only

---

## 📊 Analytics & Tracking

### Event Tracking (Google Analytics 4)
```javascript
// Track page views
gtag('event', 'page_view', {
  page_title: 'Crypto Bundle Landing Page',
  page_location: '/crypto-bundle'
});

// Track CTA clicks
gtag('event', 'cta_click', {
  button_text: 'Generate My Form 8949 Now',
  button_location: 'hero'
});

// Track pricing interactions
gtag('event', 'view_pricing', {
  pricing_tier: 'unlimited'
});

// Track FAQ interactions
gtag('event', 'faq_expand', {
  question: 'How many transactions can I process?'
});

// Track conversions
gtag('event', 'conversion', {
  transaction_id: 'txn_123',
  value: 49.00,
  currency: 'USD',
  items: [{ item_name: 'Crypto Bundle Unlimited' }]
});
```

### Heatmap Tracking (Hotjar/Microsoft Clarity)
- Monitor scroll depth
- Track button clicks
- Identify drop-off points
- A/B test visual variations

---

## ✅ Pre-Launch Checklist

### Content
- [ ] All template text replaced with crypto tax content
- [ ] SEO meta tags updated
- [ ] Schema.org structured data added
- [ ] FAQ content customized
- [ ] Pricing tiers finalized
- [ ] Trust badges/logos added

### Design
- [ ] Brand colors applied (green/purple)
- [ ] All images optimized (WebP format)
- [ ] Mobile responsive tested
- [ ] Animations/transitions added
- [ ] Loading states implemented
- [ ] Error states designed

### Technical
- [ ] Route `/crypto-bundle` configured
- [ ] Analytics events implemented
- [ ] Performance optimized (Lighthouse > 90)
- [ ] SSL certificate verified
- [ ] Canonical URLs set
- [ ] Sitemap.xml updated

### Integration
- [ ] "Get Started" button links to actual CSV upload
- [ ] Pricing buttons link to Stripe checkout
- [ ] "Add CPA Review" upsell flow working
- [ ] "Continue to 1040" link configured
- [ ] Email capture form integrated

### Testing
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile testing (iOS Safari, Android Chrome)
- [ ] Form submissions tested
- [ ] Payment flow tested
- [ ] Email confirmations working

---

## 🎯 Post-Launch Marketing

### Announcement Strategy
1. **Email Campaign:** Send to existing users announcing crypto bundle
2. **Social Media:** Post on Twitter, LinkedIn, Reddit (r/CryptoCurrency, r/tax)
3. **Blog Post:** "Introducing Prompt Tax Crypto Bundle"
4. **Press Release:** Target crypto news sites (CoinDesk, Cointelegraph)
5. **Influencer Outreach:** Partner with crypto tax YouTubers/bloggers

### Paid Advertising
- **Google Ads:** Target keywords "crypto tax software", "form 8949 generator"
- **Facebook/Instagram Ads:** Target crypto investors, tax season (Jan-April)
- **Twitter Ads:** Target crypto Twitter accounts
- **Reddit Ads:** Target r/CryptoCurrency, r/tax, r/investing

### Content Marketing
- **Blog Posts:**
  - "Complete Guide to Crypto Taxes in 2025"
  - "How to Fill Out Form 8949 for Cryptocurrency"
  - "Wash Sale Rules for Crypto (What the IRS Doesn't Tell You)"
  - "Schedule D vs Form 8949: What's the Difference?"

- **YouTube Videos:**
  - "How to Generate Form 8949 for 1,000+ Crypto Trades"
  - "Crypto Tax Software Comparison (Prompt Tax vs Competitors)"
  - "I Filed My Crypto Taxes in 5 Minutes (Here's How)"

---

## 🔧 Technical Implementation Files

### File Structure
```
app/crypto-bundle/
├── page.tsx                 (Main landing page)
├── layout.tsx               (Page-specific layout)
├── components/
│   ├── Hero.tsx
│   ├── FeatureCards.tsx
│   ├── HowItWorks.tsx
│   ├── Pricing.tsx
│   ├── TechnicalDetails.tsx
│   ├── CTASection.tsx
│   └── FAQ.tsx
├── styles/
│   └── crypto-bundle.module.css
└── metadata.ts              (SEO metadata)
```

### Sample Component Code
```typescript
// app/crypto-bundle/components/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>Crypto Tax Made Simple</h1>
          <h2>IRS-Compliant Form 8949 + Schedule D Bundle</h2>
          
          <p className="hero-description">
            Generate unlimited Form 8949 pages with proper batch pagination, 
            automatic Schedule D aggregation, and optional professional CPA review.
          </p>
          
          <div className="hero-cta">
            <Link href="/upload-csv">
              <button className="btn-primary">
                Generate Your Bundle Now
              </button>
            </Link>
            <Link href="/sample-pdf">
              <button className="btn-secondary">
                See Sample PDF
              </button>
            </Link>
          </div>
          
          <div className="social-proof">
            <div className="stat">
              <span className="stat-number">50,000+</span>
              <span className="stat-label">Transactions processed</span>
            </div>
            <div className="stat">
              <span className="stat-number">2,500+</span>
              <span className="stat-label">Returns filed</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">IRS-compliant</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <Image
            src="/images/crypto-tax-hero.png"
            alt="Crypto Tax Bundle"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  );
}
```

---

## 📞 Support Integration

### Live Chat Widget
```html
<!-- Add Intercom or Tawk.to widget -->
<script>
  window.intercomSettings = {
    app_id: "YOUR_APP_ID",
    custom_launcher_selector: '#chat-button',
    hide_default_launcher: true
  };
</script>
```

### CPA Contact Form
```javascript
// components/CPAContactForm.tsx
export default function CPAContactForm() {
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Your name" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="phone" type="tel" placeholder="Phone (optional)" />
      <textarea name="question" placeholder="What would you like to discuss?" />
      <button type="submit">Schedule CPA Consultation</button>
    </form>
  );
}
```

---

## 🎁 Conversion Optimization

### Exit Intent Popup
```javascript
// Show popup when user is about to leave
document.addEventListener('mouseout', (e) => {
  if (e.clientY < 50 && !hasSeenPopup) {
    showExitIntentPopup({
      title: "Wait! Don't Stress About Crypto Taxes",
      message: "Get 20% off your first crypto bundle (expires in 10 minutes)",
      coupon: "CRYPTO20",
      cta: "Claim My Discount"
    });
  }
});
```

### Trust Indicators
- ✅ SSL badge in footer
- ✅ Money-back guarantee badge
- ✅ "IRS-Compliant" badge
- ✅ "CPA Reviewed" badge
- ✅ Customer reviews/testimonials
- ✅ "As Featured In" logos

### Urgency Elements
- "2,500+ customers filed this tax season"
- "Tax deadline in X days"
- "Limited CPA review slots available"
- Live transaction counter

---

## 📝 Legal & Compliance

### Disclaimers
```html
<div class="disclaimer">
  <p>
    <strong>Tax Disclaimer:</strong> Prompt Tax provides tax preparation software 
    and optional CPA review services. We are not a substitute for professional 
    tax advice. For complex tax situations, consult a licensed tax professional.
  </p>
  
  <p>
    <strong>IRS Compliance:</strong> Our Form 8949 generator uses official IRS 
    templates and follows IRS Publication 544 guidelines. However, you are 
    responsible for the accuracy of your reported transactions.
  </p>
  
  <p>
    <strong>Accuracy Guarantee:</strong> If our CPA-reviewed return contains 
    calculation errors resulting in IRS penalties, we'll reimburse penalty fees 
    up to $1,000 (terms apply).
  </p>
</div>
```

### Privacy Policy Link
```html
<footer>
  <a href="/privacy-policy">Privacy Policy</a>
  <a href="/terms-of-service">Terms of Service</a>
  <a href="/refund-policy">Refund Policy</a>
</footer>
```

---

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] Code review completed
- [ ] QA testing passed
- [ ] Staging environment tested
- [ ] Load testing completed
- [ ] Security scan passed

### Deployment
- [ ] Database migrations run
- [ ] Environment variables set
- [ ] CDN cache invalidated
- [ ] DNS records updated
- [ ] SSL certificate verified

### Post-Deployment
- [ ] Smoke tests passed
- [ ] Analytics tracking verified
- [ ] Email notifications working
- [ ] Payment processing tested
- [ ] Monitor error logs (24 hours)

---

## 📈 Success Metrics

### KPIs to Track
1. **Traffic Metrics:**
   - Page views: Target 10,000/month
   - Unique visitors: Target 5,000/month
   - Avg. time on page: Target > 3 minutes
   - Bounce rate: Target < 40%

2. **Conversion Metrics:**
   - Free trial signups: Target 15% conversion
   - Paid bundle purchases: Target 5% conversion
   - CPA review upsell: Target 10% take rate
   - Email capture: Target 25% opt-in

3. **Revenue Metrics:**
   - Average order value (AOV): Target $75
   - Monthly recurring revenue (MRR): Target $50,000
   - Customer lifetime value (LTV): Target $200
   - Cost per acquisition (CPA): Target < $25

---

## ✨ Next Steps

1. **Week 1:** Duplicate template, update content, replace images
2. **Week 2:** Implement SEO, add analytics, test integrations
3. **Week 3:** QA testing, mobile optimization, performance tuning
4. **Week 4:** Soft launch to email list, gather feedback, iterate
5. **Week 5:** Full public launch with marketing campaign

---

## 📞 Questions?

**Project Lead:** [Your Name]  
**Email:** [email@prompttax.com]  
**Slack Channel:** #crypto-bundle-launch  
**Project Board:** [Notion/Jira Link]

---

**Document Version:** 1.0  
**Last Updated:** December 30, 2025  
**Status:** Ready for Implementation
