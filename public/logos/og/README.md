# Social Media OG Image Specifications

## Platform-Specific Image Requirements

### Facebook / Open Graph (General)
**Dimensions**: 1200 × 630 pixels  
**Aspect Ratio**: 1.91:1  
**Format**: JPG or PNG  
**Max File Size**: 8 MB (recommended < 300 KB)  
**Minimum**: 600 × 315 pixels  

**Naming Convention**: `{blog-slug}-og-1200x630.jpg`

**Safe Zones**:
- Top/Bottom: 50px padding
- Left/Right: 60px padding
- Keep text and logos within safe zones

**Examples**:
```
crypto-blog-og-1200x630.jpg
k1-blog-og-1200x630.jpg
```

---

### Twitter (X)
**Dimensions**: 1200 × 675 pixels  
**Aspect Ratio**: 16:9  
**Format**: JPG, PNG, or WebP  
**Max File Size**: 5 MB  

**Card Type**: `summary_large_image`

**Naming Convention**: `{blog-slug}-twitter-1200x675.jpg`

**Safe Zones**:
- Mobile crops to 2:1 ratio, so keep important content centered
- Avoid text near edges (50px padding minimum)

**Examples**:
```
crypto-blog-twitter-1200x675.jpg
k1-blog-twitter-1200x675.jpg
```

---

### LinkedIn
**Dimensions**: 1200 × 627 pixels  
**Aspect Ratio**: 1.91:1  
**Format**: JPG or PNG  
**Max File Size**: 5 MB  

**Naming Convention**: `{blog-slug}-linkedin-1200x627.jpg`

**Safe Zones**:
- Top/Bottom: 50px padding
- Left/Right: 60px padding
- Professional appearance required

**Examples**:
```
crypto-blog-linkedin-1200x627.jpg
k1-blog-linkedin-1200x627.jpg
```

---

### Instagram Stories (Optional)
**Dimensions**: 1080 × 1920 pixels  
**Aspect Ratio**: 9:16 (vertical)  
**Format**: JPG or PNG  

---

## Quick Reference Table

| Platform | Width | Height | Ratio | Max Size |
|----------|-------|--------|-------|----------|
| Facebook | 1200px | 630px | 1.91:1 | 8 MB |
| Twitter | 1200px | 675px | 16:9 | 5 MB |
| LinkedIn | 1200px | 627px | 1.91:1 | 5 MB |
| Instagram | 1080px | 1920px | 9:16 | N/A |

---

## Design Guidelines

### Typography
- **Headline**: 60-80pt font size
- **Subtext**: 30-40pt font size
- **Min Font Size**: Never below 24pt

### Colors
- **Primary Brand**: #0065a4 (Blue)
- **Text on Light**: #000000 or #1a1a1a
- **Text on Dark**: #ffffff
- **Contrast Ratio**: Minimum 4.5:1 for readability

### Layout
1. **Centered Text**: Most versatile for all crops
2. **Left-Aligned**: Works well for detail-heavy content
3. **Visual Hierarchy**: Title > Subtitle > CTA

### Brand Elements
- PromptTax logo (150-200px width)
- Position: Top-left or bottom-left
- Minimum 40px from edges

---

## File Organization

```
public/logos/og/
├── README.md (this file)
├── crypto-blog-og-1200x630.jpg       # Facebook/OG
├── crypto-blog-twitter-1200x675.jpg  # Twitter
├── crypto-blog-linkedin-1200x627.jpg # LinkedIn
├── k1-blog-og-1200x630.jpg
├── k1-blog-twitter-1200x675.jpg
├── k1-blog-linkedin-1200x627.jpg
└── template.psd (Photoshop/Figma template)
```

---

## Creating New Blog OG Images

### Step 1: Design
Use Canva, Figma, Photoshop, or similar tool with these templates:
- Facebook/LinkedIn: 1200×630px
- Twitter: 1200×675px

### Step 2: Export
- Format: JPG (85-90% quality) for photos
- Format: PNG for graphics with text
- Optimize with TinyPNG or ImageOptim

### Step 3: Upload
Place files in `public/logos/og/` directory

### Step 4: Update Metadata
Edit `client/blog/posts.ts`:

```typescript
{
  slug: 'your-blog-slug',
  // ... other fields
  seo: {
    ogImage: 'https://prompt.tax/logos/og/your-blog-og-1200x630.jpg',
    twitterImage: 'https://prompt.tax/logos/og/your-blog-twitter-1200x675.jpg',
    linkedinImage: 'https://prompt.tax/logos/og/your-blog-linkedin-1200x627.jpg',
  }
}
```

---

## Testing Checklist

### Before Publishing:
- [ ] All 3 image variants created (FB, Twitter, LinkedIn)
- [ ] Text is readable on mobile preview
- [ ] Logo visible and not cropped
- [ ] File sizes optimized (< 300 KB)
- [ ] Images uploaded to `public/logos/og/`
- [ ] URLs updated in `posts.ts`

### After Publishing:
- [ ] Test with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Test with [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [ ] Verify in Slack/Discord preview

---

## Common Issues & Solutions

### Image Not Showing
- **Cache Issue**: Use platform debuggers to force refresh
- **URL Issue**: Ensure full HTTPS URL, not relative path
- **File Size**: Check if image exceeds platform limits

### Image Cropped Incorrectly
- **Solution**: Keep content in safe zones (50-60px padding)
- **Mobile**: Design for mobile-first, test both orientations

### Low Quality Display
- **Solution**: Export at 2x resolution (2400×1260) then scale down
- **Compression**: Use 85-90% JPG quality, not lower

### Different Image Per Platform Not Working
- **Solution**: Clear browser cache
- **Fallback**: OG image will be used if platform-specific missing

---

## Tools & Resources

### Design Tools
- **Canva** - Easy templates: canva.com
- **Figma** - Professional design: figma.com
- **Photoshop** - Advanced editing

### Optimization Tools
- **TinyPNG** - Compress images: tinypng.com
- **ImageOptim** - Mac app for compression
- **Squoosh** - Google's web-based tool

### Testing Tools
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Inspector**: https://www.linkedin.com/post-inspector/
- **OpenGraph.xyz**: https://www.opengraph.xyz/

---

**Last Updated**: November 26, 2025  
**Maintained By**: PromptTax Team
