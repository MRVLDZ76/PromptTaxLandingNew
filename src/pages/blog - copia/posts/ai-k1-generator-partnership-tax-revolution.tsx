import BlogPostTemplate from '@/components/BlogPostTemplate';
import { BlogPostMetadata } from '@/blog/types';
import { useEffect } from 'react';

interface K1GeneratorBlogPostProps {
  metadata: BlogPostMetadata;
}

export default function K1GeneratorBlogPost({ metadata }: K1GeneratorBlogPostProps) {
  if (!metadata) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    // Initialize interactive calculator
    const initializeCalculator = () => {
      const partnerSlider = document.getElementById('partnerCountSlider') as HTMLInputElement;
      const cpaCostInput = document.getElementById('cpaCostInput') as HTMLInputElement;
      const partnerDisplay = document.getElementById('partnerCountDisplay');
      const traditionalCostDisplay = document.getElementById('traditionalCost');
      const savingsDisplay = document.getElementById('totalSavings');
      const roiDisplay = document.getElementById('roiPercentage');

      const updateCalculator = () => {
        if (!partnerSlider || !cpaCostInput) return;

        const partners = parseInt(partnerSlider.value);
        const cpaCost = parseFloat(cpaCostInput.value) || 750;
        const promptTaxCost = 49;

        const traditionalTotal = partners * cpaCost;
        const savings = traditionalTotal - promptTaxCost;
        const roi = ((savings / promptTaxCost) * 100).toFixed(0);

        if (partnerDisplay) partnerDisplay.textContent = partners.toString();
        if (traditionalCostDisplay) traditionalCostDisplay.textContent = '$' + traditionalTotal.toLocaleString();
        if (savingsDisplay) savingsDisplay.textContent = '$' + savings.toLocaleString();
        if (roiDisplay) roiDisplay.textContent = roi + 'x';

        // Update slider visual
        const percent = ((partners - 1) / (20 - 1)) * 100;
        partnerSlider.style.background = `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${percent}%, hsl(var(--muted)) ${percent}%, hsl(var(--muted)) 100%)`;
      };

      if (partnerSlider) {
        partnerSlider.addEventListener('input', updateCalculator);
        cpaCostInput?.addEventListener('input', updateCalculator);
        updateCalculator();
      }

      // Feature tabs
      const tabButtons = document.querySelectorAll('.feature-tab-btn');
      const tabContents = document.querySelectorAll('.feature-tab-content');

      tabButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          tabButtons.forEach(b => b.classList.remove('active'));
          tabContents.forEach(c => c.classList.add('hidden'));
          
          btn.classList.add('active');
          tabContents[index]?.classList.remove('hidden');
        });
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeCalculator);
    } else {
      initializeCalculator();
    }

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <BlogPostTemplate metadata={metadata}>
      <p className="text-xl text-muted-foreground leading-relaxed">
        If you're a partnership owner, you know the drill: <strong>K-1 tax season is a nightmare</strong>. 
        You wait 5 weeks for your CPA. You pay $500-$2,000 per partner. And when the K-1s finally arrive, 
        you're scrambling to meet the March 15 deadline.
      </p>

      <p>
        <strong>What if I told you there's a better way?</strong> A way to generate IRS-compliant K-1s 
        in 5 minutes for $49—no matter how many partners you have.
      </p>

      <p>
        That's exactly what we built with <strong>PromptTax K-1 Generator</strong>. And it's already changing 
        how partnerships file their taxes.
      </p>

      <h2>The K-1 Problem: Why Traditional Filing Is Broken</h2>

      <p>
        Let's be honest: Schedule K-1 preparation has been stuck in the dark ages. While personal tax filing 
        got tools like TurboTax and H&R Block, <strong>partnerships were left behind</strong>.
      </p>

      <p>Here's what partnership owners face every tax season:</p>

      <div className="bg-muted/50 border border-border rounded-xl p-6 my-8">
        <h3 className="text-2xl font-bold mb-6 text-center">The 7 Pain Points of K-1 Filing</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="text-3xl">⏰</div>
              <div>
                <h4 className="font-bold mb-1">Weeks of Waiting</h4>
                <p className="text-sm text-muted-foreground">
                  CPAs need 3-5 weeks to prepare K-1s. You're at their mercy during the busiest season.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="text-3xl">💰</div>
              <div>
                <h4 className="font-bold mb-1">Outrageous Fees</h4>
                <p className="text-sm text-muted-foreground">
                  $500-$2,000 per K-1. Three partners? That's $6,000 for a routine filing.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="text-3xl">📄</div>
              <div>
                <h4 className="font-bold mb-1">Complex Forms</h4>
                <p className="text-sm text-muted-foreground">
                  20+ boxes on Schedule K-1. Each requires specific calculations and allocations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="text-3xl">🔄</div>
              <div>
                <h4 className="font-bold mb-1">Endless Revisions</h4>
                <p className="text-sm text-muted-foreground">
                  Back-and-forth emails with your CPA. Corrections. Adjustments. More waiting.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="text-3xl">📅</div>
              <div>
                <h4 className="font-bold mb-1">Deadline Stress</h4>
                <p className="text-sm text-muted-foreground">
                  March 15 comes fast. Miss it? $210 penalty per partner per month.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="text-3xl">🚫</div>
              <div>
                <h4 className="font-bold mb-1">No Self-Service Options</h4>
                <p className="text-sm text-muted-foreground">
                  TurboTax doesn't do partnerships. DIY tax software? Doesn't exist for K-1s.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="text-3xl">❓</div>
              <div>
                <h4 className="font-bold mb-1">Zero Transparency</h4>
                <p className="text-sm text-muted-foreground">
                  You hand over your books and hope the CPA gets it right. No visibility into the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p>
        Sound familiar? You're not alone. <strong>1.4 million partnerships</strong> file Form 1065 every year, 
        and they all face these same problems.
      </p>

      <p>
        Until now.
      </p>

      <h2>Introducing PromptTax K-1 Generator: The AI Solution</h2>

      <p>
        We asked ourselves a simple question: <em>"Why can't K-1 generation be as easy as filing your personal taxes?"</em>
      </p>

      <p>
        The answer? <strong>It can be.</strong> You just need AI to do the heavy lifting.
      </p>

      <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/30 rounded-xl p-8 my-8 shadow-lg">
        <h3 className="text-3xl font-bold mb-6 text-center">How PromptTax K-1 Generator Works</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-border text-center">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h4 className="font-bold mb-2">Upload P&L</h4>
            <p className="text-sm text-muted-foreground">
              Upload your Profit & Loss statement. Or just chat with AI about your income.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-border text-center">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h4 className="font-bold mb-2">AI Extracts Data</h4>
            <p className="text-sm text-muted-foreground">
              Our AI reads your documents and extracts all financial data automatically.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-border text-center">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h4 className="font-bold mb-2">Review & Edit</h4>
            <p className="text-sm text-muted-foreground">
              Verify the data. Adjust partner allocations if needed. Everything is transparent.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-border text-center">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h4 className="font-bold mb-2">Download K-1s</h4>
            <p className="text-sm text-muted-foreground">
              Generate IRS-compliant K-1 PDFs for all partners in 10 seconds.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-4 bg-primary/10 rounded-full px-6 py-3 border border-primary/30">
            <span className="text-sm font-semibold text-muted-foreground">Total Time:</span>
            <span className="text-4xl font-black text-primary">5 minutes</span>
          </div>
          <p className="text-sm text-muted-foreground mt-4">vs. 3-5 weeks with traditional CPAs</p>
        </div>
      </div>

      <h2>The Revolutionary Features That Make It Possible</h2>

      <p>
        PromptTax K-1 Generator isn't just faster—it's <strong>fundamentally different</strong> from 
        traditional tax preparation. Here's what makes it revolutionary:
      </p>

      <div className="my-8">
        <div className="flex flex-wrap gap-2 mb-6 border-b border-border pb-2">
          <button className="feature-tab-btn active px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold transition-all">
            AI-Powered Chat
          </button>
          <button className="feature-tab-btn px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-all">
            Document OCR
          </button>
          <button className="feature-tab-btn px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-all">
            Real-Time Validation
          </button>
          <button className="feature-tab-btn px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-all">
            1040 Integration
          </button>
        </div>

        <div className="feature-tab-content bg-card border border-border rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4">🤖 Conversational AI Interface</h3>
          <p className="text-muted-foreground mb-4">
            Stop filling out tax forms. Just talk to our AI like you would to a CPA:
          </p>
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm space-y-3">
            <div className="flex gap-3">
              <span className="text-primary font-bold">You:</span>
              <span>"I have an LLC with 3 partners. We made $150,000 this year."</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold">AI:</span>
              <span>"Got it. What's the profit split? Equal thirds or custom?"</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold">You:</span>
              <span>"40%, 30%, 30%"</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold">AI:</span>
              <span>"Perfect. Would you like me to generate the K-1s now?"</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            That's it. No forms. No complexity. Just conversation.
          </p>
        </div>

        <div className="feature-tab-content hidden bg-card border border-border rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4">📄 Intelligent Document Reading</h3>
          <p className="text-muted-foreground mb-4">
            Our AI reads your P&L statements like a CPA would—but in seconds:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span><strong>Revenue Recognition:</strong> Identifies total income across all sources</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span><strong>Expense Categorization:</strong> Separates ordinary business expenses</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span><strong>Interest & Dividends:</strong> Automatically extracts Box 5 data</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span><strong>Rental Income:</strong> Identifies passive income streams</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span><strong>Guaranteed Payments:</strong> Calculates partner compensation</span>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4 italic">
            Powered by GPT-4 Vision for OCR + Claude for financial analysis
          </p>
        </div>

        <div className="feature-tab-content hidden bg-card border border-border rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4">✅ Built-In IRS Compliance Checks</h3>
          <p className="text-muted-foreground mb-4">
            Every K-1 is validated in real-time before generation:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-bold mb-2">Mathematical Accuracy</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Partner allocations sum to 100%</li>
                <li>• Box calculations cross-verified</li>
                <li>• Basis limitations checked</li>
              </ul>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-bold mb-2">IRS Format Compliance</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Official 2024 Form 1065 Schedule K-1</li>
                <li>• All 20 boxes properly formatted</li>
                <li>• Partner EINs & addresses validated</li>
              </ul>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-bold mb-2">Tax Law Compliance</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Passive activity loss rules</li>
                <li>• At-risk limitations</li>
                <li>• QBI deduction (Section 199A)</li>
              </ul>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-bold mb-2">Audit Defense</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Full calculation worksheets</li>
                <li>• Source document trail</li>
                <li>• CPA-reviewed methodology</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="feature-tab-content hidden bg-card border border-border rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4">🔗 Seamless 1040 Integration</h3>
          <p className="text-muted-foreground mb-4">
            This is the feature that sets us apart from everyone:
          </p>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/30">
            <h4 className="text-xl font-bold mb-3">Generate K-1 → Continue to 1040</h4>
            <p className="text-sm text-muted-foreground mb-4">
              After generating your partnership K-1s, click one button. Your K-1 income auto-transfers 
              to Schedule E of your personal Form 1040. No manual entry. No mistakes.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">Step 1</div>
                <div className="text-sm">Generate K-1s</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">→</div>
                <div className="text-sm">One Click</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">Step 2</div>
                <div className="text-sm">Complete 1040</div>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>No other software does this.</strong> TurboTax requires separate products. 
            Tax software makes you enter K-1 data manually. CPAs hand you the K-1 and you're on your own.
          </p>
        </div>
      </div>

      <h2>Calculate Your Exact Savings</h2>

      <p>
        Let's get specific. How much will <em>you</em> save with PromptTax K-1 Generator?
      </p>

      <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border-2 border-blue-500/30 rounded-xl p-8 my-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">Interactive Savings Calculator</h3>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <label className="block text-sm font-semibold mb-3">
              How many partners in your LLC/partnership?
            </label>
            <input 
              type="range" 
              id="partnerCountSlider" 
              min="1" 
              max="20" 
              defaultValue="3" 
              className="w-full cursor-pointer partner-slider"
            />
            <div className="text-center mt-4">
              <span className="text-4xl font-bold text-primary" id="partnerCountDisplay">3</span>
              <span className="text-muted-foreground ml-2">partners</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Current CPA cost per K-1 ($)
            </label>
            <input 
              type="number" 
              id="cpaCostInput" 
              defaultValue="750" 
              step="50"
              className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:outline-none text-lg font-semibold"
            />
            <p className="text-xs text-muted-foreground mt-2">
              Average: $500-$2,000 per K-1
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-sm text-muted-foreground mb-2">Traditional CPA Cost</div>
            <div className="text-3xl font-bold line-through text-muted-foreground" id="traditionalCost">
              $2,250
            </div>
          </div>

          <div className="bg-primary/10 border-2 border-primary/30 rounded-lg p-6 text-center">
            <div className="text-sm text-primary font-semibold mb-2">PromptTax Cost</div>
            <div className="text-3xl font-bold text-primary">
              $49
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/40 rounded-lg p-6 text-center">
            <div className="text-sm text-green-700 dark:text-green-300 font-semibold mb-2">You Save</div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400" id="totalSavings">
              $2,201
            </div>
          </div>
        </div>

        <div className="mt-8 text-center bg-primary/5 rounded-lg p-6 border border-primary/20">
          <div className="text-sm font-semibold text-muted-foreground mb-2">Return on Investment</div>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-6xl font-black text-primary" id="roiPercentage">45x</span>
            <span className="text-2xl font-semibold text-muted-foreground">ROI</span>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            That's like paying $100 to get $4,500 back. No-brainer.
          </p>
        </div>
      </div>

 

      <h2>The 2025 Tax Season Is Here—Are You Ready?</h2>

      <p>
        <strong>March 15, 2026</strong> is the deadline for partnership returns. That's when K-1s must be 
        distributed to partners. Miss it? $210 penalty per partner per month.
      </p>

      <p>
        By late February, CPAs are booked solid and charging rush fees. If you wait until March, 
        you're out of luck.
      </p>

      <p>
        <strong>The smart move? Get your K-1s done in January.</strong>
      </p>

      <p>
        With PromptTax K-1 Generator, you can go from "I haven't started my partnership taxes" to 
        "I have IRS-compliant K-1 PDFs for all partners" in <strong>5 minutes</strong>.
      </p>

      <h2>How to Get Started (In 4 Simple Steps)</h2>

      <ol className="space-y-4 text-lg">
        <li className="flex gap-3">
          <span className="text-3xl font-bold text-primary">1.</span>
          <div>
            <strong>Sign up for free</strong> at <a href="/request-demo" className="text-primary underline">prompt.tax</a>
            <p className="text-sm text-muted-foreground">No credit card required to start</p>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="text-3xl font-bold text-primary">2.</span>
          <div>
            <strong>Upload your P&L or chat with AI</strong>
            <p className="text-sm text-muted-foreground">Takes 2 minutes to give AI your partnership info</p>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="text-3xl font-bold text-primary">3.</span>
          <div>
            <strong>Review extracted data</strong>
            <p className="text-sm text-muted-foreground">Verify income, expenses, partner allocations</p>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="text-3xl font-bold text-primary">4.</span>
          <div>
            <strong>Download K-1 PDFs</strong>
            <p className="text-sm text-muted-foreground">$49 to download IRS-compliant K-1s for all partners</p>
          </div>
        </li>
      </ol>

      <p className="text-center text-xl font-semibold my-8">
        Total time: <span className="text-4xl text-primary">5 minutes</span>
      </p>

      <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/30 rounded-xl p-8 my-12 shadow-lg text-center">
        <h3 className="text-4xl font-bold mb-6">Ready to Save Time & Money?</h3>
        <p className="text-2xl mb-8 leading-relaxed max-w-2xl mx-auto text-muted-foreground">
          Join 1,000+ partnerships who switched to AI-powered K-1 generation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/request-demo" className="inline-block px-10 py-5 bg-card border-2 border-primary text-primary rounded-xl hover:bg-primary/5 transition-all font-bold text-lg transform hover:scale-105">
            Start Free Trial
          </a>
          <a href="/workflow" className="inline-block px-10 py-5 bg-card border-2 border-primary text-primary rounded-xl hover:bg-primary/5 transition-all font-bold text-lg transform hover:scale-105">
            Watch Demo Video
          </a>
        </div>
        <p className="text-base mt-6 text-muted-foreground">
          No credit card required • Free to start • $49 to download K-1s
        </p>
      </div>

      <hr className="my-8 border-border" />

      <h2>Frequently Asked Questions</h2>

      <div className="space-y-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2">Is PromptTax IRS-compliant?</h3>
          <p className="text-muted-foreground">
            Yes. We generate official IRS Form 1065 Schedule K-1s with all required fields filled out correctly. 
            Our forms have been reviewed by CPAs and are accepted by the IRS. We also maintain full calculation 
            worksheets for audit defense.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2">How is this different from TurboTax?</h3>
          <p className="text-muted-foreground">
            TurboTax doesn't support partnership returns (Form 1065). They only do personal taxes (Form 1040). 
            PromptTax is the first AI-powered platform that handles both—and automatically transfers K-1 data 
            from partnership to personal return.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2">Can I try it for free?</h3>
          <p className="text-muted-foreground">
            Yes! Upload your documents, chat with AI, review all extracted data, and see your K-1s completely 
            for free. You only pay $49 when you're ready to download the final PDFs.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2">What if I have more than 3 partners?</h3>
          <p className="text-muted-foreground">
            No problem. PromptTax costs $49 regardless of partner count. Generate K-1s for 3 partners or 30 partners—
            same flat fee. That's where the massive savings come from vs. CPAs who charge per partner.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2">What if I need help or make a mistake?</h3>
          <p className="text-muted-foreground">
            You can edit any data before generating. We validate everything in real-time. Plus, you can regenerate 
            K-1s unlimited times before paying. And our support team (including CPAs) is available via chat.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2">Does this replace my CPA entirely?</h3>
          <p className="text-muted-foreground">
            For simple partnership returns, yes. For complex multi-tier entities, tax planning, or audit situations, 
            you should still consult a CPA. Think of PromptTax as automating the routine work so CPAs can focus 
            on high-value advisory.
          </p>
        </div>
      </div>

      <hr className="my-8 border-border" />

      <p className="text-sm text-muted-foreground italic">
        <strong>Disclaimer:</strong> This blog post is for informational purposes only and does not constitute 
        tax, legal, or financial advice. Partnership tax regulations are complex and subject to change. 
        Always consult with a qualified tax professional for your specific situation. The savings calculations 
        shown are estimates based on average market rates and may not reflect your individual circumstances.
      </p>

      <style>{`
        .feature-tab-btn.active {
          background-color: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
        }
        
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 12px;
          border-radius: 6px;
          background: hsl(var(--muted));
          outline: none;
          cursor: pointer;
          border: 1px solid hsl(var(--border));
        }
        
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: white;
          border: 4px solid hsl(var(--primary));
          cursor: grab;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          transition: all 0.15s ease;
        }
        
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        
        input[type="range"]::-webkit-slider-thumb:active {
          cursor: grabbing;
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: white;
          border: 4px solid hsl(var(--primary));
          cursor: grab;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        
        .partner-slider {
          background: linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) 30%, hsl(var(--muted)) 30%, hsl(var(--muted)) 100%);
        }
      `}</style>
    </BlogPostTemplate>
  );
}
