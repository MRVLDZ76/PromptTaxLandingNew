import BlogPostTemplate from '@/components/BlogPostTemplate';
import { BlogPostMetadata } from '@/blog/types';

interface ExamplePostProps {
  metadata: BlogPostMetadata;
}

export default function ExamplePost({ metadata }: ExamplePostProps) {
  // Your HTML content will go here
  const htmlContent = `
    <h2>Welcome to Our Blog</h2>
    
    <p>This is an example blog post showing how to structure your content. When you provide HTML content, it will be automatically styled to match the site's design system.</p>
    
    <h3>How This Works</h3>
    
    <p>Each blog post is a React component that:</p>
    
    <ul>
      <li>Receives metadata (title, date, author, etc.) as props</li>
      <li>Contains your HTML content as a string</li>
      <li>Gets automatically styled with TailwindCSS prose classes</li>
      <li>Integrates with the site's theme system</li>
    </ul>
    
    <h3>Supported Elements</h3>
    
    <p>You can use all standard HTML elements:</p>
    
    <blockquote>
      <p>This is a blockquote. It will be styled with accent colors and borders.</p>
    </blockquote>
    
    <p>You can include <strong>bold text</strong>, <em>italic text</em>, and <code>inline code</code>.</p>
    
    <h4>Code Blocks</h4>
    
    <pre><code>// Example code block
const greeting = "Hello, World!";
console.log(greeting);</code></pre>
    
    <h4>Lists</h4>
    
    <ol>
      <li>First ordered item</li>
      <li>Second ordered item</li>
      <li>Third ordered item</li>
    </ol>
    
    <h3>Next Steps</h3>
    
    <p>To add your own blog post:</p>
    
    <ol>
      <li>Add metadata to <code>client/blog/posts.ts</code></li>
      <li>Create a new component in <code>client/pages/blog/posts/your-slug.tsx</code></li>
      <li>Use this template as a starting point</li>
      <li>Replace the HTML content with your own</li>
    </ol>
    
    <p>That's it! The system handles routing, styling, SEO, and everything else automatically.</p>
  `;

  // Create the full post object with metadata and content
  const post = {
    ...metadata,
    content: htmlContent
  };

  return <BlogPostTemplate post={post} />;
}
