# Blog Content Extraction Guide

## ✅ Completed Posts

1. **crypto-tax-nightmare-solved-2025** ✓ - Fully adapted with clean Bootstrap/React structure

## 📋 Remaining Legacy Posts to Adapt

Located in `src/pages/blog - copia/posts/`:

1. `ai-k1-generator-partnership-tax-revolution.tsx` (701 lines)
2. `crypto-tax-ai-automation-saves-15-hours.tsx` (1161 lines)
3. `simplify-k1-form-processing-crypto-tax-season.tsx` (1058 lines)

## 🎯 Adaptation Process

### Step 1: Extract Core Content

For each legacy post, extract:
- Main text content (paragraphs, headings)
- Key quotes and callouts
- Lists and bullet points
- **Remove:** Complex interactive JavaScript, custom CSS, calculators

### Step 2: Convert to Clean React/Bootstrap

Use this structure (see `crypto-tax-nightmare-solved-2025.tsx` as reference):

```tsx
import BlogPostTemplate from '@/components/BlogPostTemplate';
import { BlogPostMetadata } from '@/types/blog';
import { Card } from 'react-bootstrap';
import { BsQuote } from 'react-icons/bs';

interface YourPostProps {
  metadata: BlogPostMetadata;
}

export default function YourPost({ metadata }: YourPostProps) {
  return (
    <BlogPostTemplate metadata={metadata}>
      {/* Your clean content here */}
      <p className="lead">Opening paragraph...</p>
      
      <h2 className="mt-5">Section Title</h2>
      <p>Content...</p>
      
      {/* For quotes */}
      <Card as="blockquote" className="card-body bg-light overflow-hidden mt-5 p-sm-5">
        <div className="vr bg-primary h-100 position-absolute top-0 start-0" style={{ width: 3, opacity: '100%' }} />
        <span className="display-4 position-absolute top-0 start-0 opacity-1 mt-n3"><BsQuote /></span>
        <p className="fs-6 heading-color mb-0">Quote text...</p>
        <div className="blockquote-footer mb-0 lead mt-3">Attribution</div>
      </Card>
    </BlogPostTemplate>
  );
}
```

### Step 3: Available Bootstrap Components

Use these pre-styled components:
- `<p className="lead">` - Larger intro paragraphs
- `<h2 className="mt-5">`, `<h3 className="mt-4">` - Sections
- `<ul className="mb-4">`, `<li className="mb-2">` - Lists
- `<Card>` - Highlight boxes
- `<div className="bg-primary bg-opacity-10 border border-primary rounded p-4 my-4">` - Info boxes
- `<strong>`, `<em>` - Emphasis

### Step 4: What to Remove

From legacy posts, remove:
- ❌ `useEffect` hooks with JavaScript interactivity
- ❌ `<style>` tags with custom CSS
- ❌ Complex calculators and sliders
- ❌ Custom JavaScript event handlers
- ❌ State management (`useState`)

Keep:
- ✅ All text content
- ✅ Headings and structure
- ✅ Quotes and callouts
- ✅ Lists and key points
- ✅ Statistics and data

## 🚀 Quick Start for Next Post

1. Open a legacy post file
2. Copy the main content (skip the JavaScript/interactive parts)
3. Create new file in `src/pages/blog/posts/`
4. Use the template structure above
5. Paste and adapt content with Bootstrap classes
6. Test the route: `/blog/post-slug`

## 📝 Metadata Already Created

All post metadata is in `src/types/blog.ts`:
- crypto-tax-nightmare-solved-2025 ✓
- ai-k1-generator-partnership-tax-revolution
- simplify-k1-form-processing-crypto-tax-season  
- crypto-tax-ai-automation-saves-15-hours

## 🎨 Style Guide

Match existing Mizzle theme:
- Use Bootstrap utility classes
- Keep responsive design (`col-md-6`, etc.)
- Use theme colors (primary, secondary, muted)
- Maintain consistent spacing (`mt-5`, `mb-4`, etc.)

## 🔄 Workflow

For each post:
1. Read legacy content
2. Extract text and structure
3. Remove interactivity
4. Apply Bootstrap styling
5. Test in browser
6. Commit
