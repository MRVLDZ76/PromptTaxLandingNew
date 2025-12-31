# Hero Section Content Replacement Instructions

## Target File
`client/pages/SaaSV3/Hero.tsx`

## Current Mizzle Content (to replace)

### Badge
- **Current**: "World's #1 SaaS agency 🚀"
- **Replace with**: "AI-Powered Tax Automation"
- **Icon**: Use `<BsRobot />` or `<FiCpu />` from React Icons before text

### Main Headline
- **Current**: "Deliver the perfect **solution** for your client"
- **Replace with**: "Automate Your Crypto & K-1 Tax Reporting in Minutes"
- **Note**: Keep the green highlight on "Crypto & K-1"

### Subheadline/Description
- **Current**: "Our friendly team members are always willing to help you with requirements and provide suggestions on your future needs."
- **Replace with**: "Let AI agents handle complex cryptocurrency gains and partnership K-1 forms while CPAs review everything. Save 95% of manual data entry time."

### Primary CTA Button
- **Current**: "Get started"
- **Replace with**: "Start Free Trial"
- **Keep the green background styling**

### Secondary CTA Button
- **Current**: "Watch a demo"
- **Replace with**: "See How It Works"
- **Keep the outline/ghost button styling**

### Feature Bullets (3 items below CTAs)
Replace the current bullets with icons from React Icons:

1. **Current**: "Run faster"
   **Replace with**: "Generate K-1s instantly"
   **Icon**: `<BsLightningChargeFill />` or `<FiZap />` (green color)
   
2. **Current**: "Lower costs"
   **Replace with**: "CPA-reviewed accuracy"
   **Icon**: `<BsShieldCheck />` or `<FiCheckCircle />` (green color)
   
3. **Current**: "Never breaks"
   **Replace with**: "Multi-exchange support"
   **Icon**: `<BsGrid3x3GapFill />` or `<FiGrid />` (green color)

## Statistics Section (below hero)

### Left Stat Card
- **Current**: "250K" with "Total users"
- **Replace with**: "50K+" with "Tax Returns Generated"
- **Keep the heart icons**

### Right Stat Card
- **Current**: "4.9" with "150K Reviews"
- **Replace with**: "4.8/5" with "CPA Satisfaction Score"
- **Keep the star rating visual**

### CTA Text Below Stats
- **Current**: "Join our community? Contact us now >"
- **Replace with**: "Ready to automate your taxes? Get Started >"

## Feature Showcase Section (below stats)

### Headline
- **Current**: "Easy project management that helps you win"
- **Replace with**: "Intelligent Tax Automation Built for Modern Portfolios"

### Description
- **Current**: "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience."
- **Replace with**: "PromptTax combines AI agents for cryptocurrency tracking across 15+ exchanges with automated K-1 partnership form generation. Every return is reviewed by licensed CPAs before filing."

### Logo/Integration Section
Replace the 4 logo placeholders with:
1. "Coinbase" text or logo placeholder
2. "Binance" text or logo placeholder
3. "Kraken" text or logo placeholder
4. "Uniswap" text or logo placeholder

**Note**: If actual exchange logos are available in the project, use those. Otherwise, use text badges with the exchange names styled similarly to the current logos.

## Hero Image/Mockup

### Current Image
The right side shows a dashboard mockup with graphs and a person working.

### Replacement Options
1. **Option 1**: Keep similar mockup style but show:
   - Tax form preview (K-1 Schedule K-1)
   - Cryptocurrency transaction list
   - Green/success indicators
   - "CPA Reviewed" badge visible

2. **Option 2**: Replace with:
   - Screenshot of actual PromptTax dashboard
   - Show crypto import interface
   - Display K-1 generation preview

3. **Option 3**: If no custom images available:
   - Keep current mockup temporarily
   - Add overlay badge: "Tax Dashboard Preview"

## Google Review Badge (top right)

### Current
- Shows "4.8/5.0" with star icons
- "500+ reviews on Google"

### Replace with
- "4.8/5.0" with star icons (keep existing star styling)
- "250+ CPA Reviews"
- Replace Google logo with a shield/checkmark icon from React Icons: `<BsShieldCheck />` or `<FiShield />`

## Styling Notes

1. **Keep all Bootstrap classes** - don't change the layout structure
2. **Maintain dark background** (#1a1d29 or similar)
3. **Keep green accent color** for CTAs and highlights
4. **Preserve all animations** and hover effects
5. **Keep responsive breakpoints** - should work on mobile/tablet/desktop

## Implementation Steps

1. Open `client/pages/SaaSV3/Hero.tsx`
2. Replace text content as specified above
3. Update data in `client/pages/SaaSV3/data.ts` if feature bullets/stats are stored there
4. Test on http://localhost:8081/saas-v3
5. Verify all text renders correctly
6. Check mobile responsiveness
7. Verify CTA buttons work (even if they don't navigate anywhere yet)

## Priority Order

1. **HIGH**: Main headline, subheadline, CTA buttons (this is what users see first)
2. **MEDIUM**: Feature bullets, statistics section
3. **LOW**: Logo placeholders, image replacement (can use temporary placeholders)

## Example Code Snippets

### Icon Imports
```tsx
import { BsRobot, BsLightningChargeFill, BsShieldCheck, BsGrid3x3GapFill } from 'react-icons/bs';
// Or from Feather Icons:
import { FiCpu, FiZap, FiCheckCircle, FiGrid, FiShield } from 'react-icons/fi';
```

### Badge Example
```tsx
<div className="badge">
  <BsRobot className="me-2" />
  AI-Powered Tax Automation
</div>
```

### Headline Example
```tsx
<h1 className="display-1 mb-0">
  Automate Your <span className="text-success">Crypto & K-1</span> Tax Reporting in Minutes
</h1>
```

### Subheadline Example
```tsx
<p className="lead mb-4">
  Let AI agents handle complex cryptocurrency gains and partnership K-1 forms 
  while CPAs review everything. Save 95% of manual data entry time.
</p>
```

### Stats Example
```tsx
<div className="counter">
  <h2 className="mb-0">50K+</h2>
  <p className="mb-0">Tax Returns Generated</p>
</div>
```

### Feature Bullet Example
```tsx
<div className="feature-item d-flex align-items-center">
  <BsLightningChargeFill className="text-success me-2" size={20} />
  <span>Generate K-1s instantly</span>
</div>
```

## Verification Checklist

After making changes, verify:
- [ ] Headline mentions "Crypto & K-1"
- [ ] Green color highlights key terms
- [ ] CTA buttons say "Start Free Trial" and "See How It Works"
- [ ] Feature bullets mention K-1s, CPA review, and exchanges
- [ ] Statistics show tax-focused metrics (50K+ returns, 4.8/5 CPA score)
- [ ] Dark background preserved
- [ ] All text is readable and professional
- [ ] No Mizzle-specific branding remains (SaaS agency, project management, etc.)

## Notes for Images

If you need to replace the hero image/mockup:
- Image path is likely in: `client/assets/images/`
- Current reference: probably `@/assets/images/about/` or similar
- Dimensions: Approximately 600-800px wide
- Format: JPG or PNG
- Show: Dashboard, tax forms, or crypto interface
- Style: Modern, professional, clean UI

---

**Ready to implement?** Start with the headline and CTAs (highest priority), then work through the rest of the content systematically.
