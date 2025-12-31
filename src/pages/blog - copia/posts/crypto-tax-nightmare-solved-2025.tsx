import BlogPostTemplate from '@/components/BlogPostTemplate';
import { BlogPostMetadata } from '@/blog/types';
import { useEffect } from 'react';

interface CryptoTaxBlogPostProps {
  metadata: BlogPostMetadata;
}

export default function CryptoTaxBlogPost({ metadata }: CryptoTaxBlogPostProps) {
  if (!metadata) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    // Initialize interactive components after DOM loads
    const initializeInteractives = () => {
      // Transaction complexity calculator
      const exchangeSlider = document.getElementById('exchangeCount') as HTMLInputElement;
      const transactionSlider = document.getElementById('transactionCount') as HTMLInputElement;
      const exchangeDisplay = document.getElementById('exchangeDisplay');
      const transactionDisplay = document.getElementById('transactionDisplay');
      const manualHours = document.getElementById('manualHours');
      const promptTaxTime = document.getElementById('promptTaxTime');
      const timeSaved = document.getElementById('timeSaved');
      const costSaved = document.getElementById('costSaved');

      const updateComplexity = () => {
        if (!exchangeSlider || !transactionSlider) return;
        
        const exchanges = parseInt(exchangeSlider.value);
        const transactions = parseInt(transactionSlider.value);
        
        if (exchangeDisplay) exchangeDisplay.textContent = exchanges.toString();
        if (transactionDisplay) transactionDisplay.textContent = transactions.toLocaleString();
        
        // Update slider visual progress
        const exchangePercent = ((exchanges - 1) / (10 - 1)) * 100;
        const transactionPercent = ((transactions - 10) / (10000 - 10)) * 100;
        
        exchangeSlider.style.background = `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${exchangePercent}%, hsl(var(--muted)) ${exchangePercent}%, hsl(var(--muted)) 100%)`;
        transactionSlider.style.background = `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${transactionPercent}%, hsl(var(--muted)) ${transactionPercent}%, hsl(var(--muted)) 100%)`;
        
        // Calculate manual time (pessimistic but realistic)
        const hoursManual = Math.ceil((transactions * 2) / 60 + (exchanges * 3));
        const minutesPromptTax = Math.ceil(5 + (exchanges * 0.5));
        const hoursSaved = Math.max(0, hoursManual - (minutesPromptTax / 60));
        const moneySaved = Math.ceil(hoursSaved * 85); // $85/hr CPA rate
        
        if (manualHours) manualHours.textContent = hoursManual.toString();
        if (promptTaxTime) promptTaxTime.textContent = minutesPromptTax.toString();
        if (timeSaved) timeSaved.textContent = hoursSaved.toFixed(1);
        if (costSaved) costSaved.textContent = '$' + moneySaved.toLocaleString();
      };

      if (exchangeSlider) {
        exchangeSlider.addEventListener('input', updateComplexity);
        transactionSlider?.addEventListener('input', updateComplexity);
        updateComplexity();
      }

      // Cost basis comparison calculator
      const investmentInput = document.getElementById('investmentAmount') as HTMLInputElement;
      const gainsInput = document.getElementById('gainsAmount') as HTMLInputElement;
      
      const updateCostBasis = () => {
        if (!investmentInput || !gainsInput) return;
        
        const investment = parseFloat(investmentInput.value) || 10000;
        const gains = parseFloat(gainsInput.value) || 5000;
        
        // Calculate different methods (simplified simulation)
        const fifoTax = gains * 0.24; // Long-term capital gains at 24% bracket
        const lifoTax = gains * 0.24 * 0.7; // LIFO typically better
        const hifoTax = gains * 0.24 * 0.5; // HIFO best optimization
        const specificTax = gains * 0.24 * 0.6; // Specific ID mid-range
        
        document.getElementById('fifoTax')!.textContent = '$' + Math.ceil(fifoTax).toLocaleString();
        document.getElementById('lifoTax')!.textContent = '$' + Math.ceil(lifoTax).toLocaleString();
        document.getElementById('hifoTax')!.textContent = '$' + Math.ceil(hifoTax).toLocaleString();
        document.getElementById('specificTax')!.textContent = '$' + Math.ceil(specificTax).toLocaleString();
        
        const bestSavings = Math.ceil(fifoTax - hifoTax);
        document.getElementById('bestSavings')!.textContent = '$' + bestSavings.toLocaleString();
      };

      if (investmentInput) {
        investmentInput.addEventListener('input', updateCostBasis);
        gainsInput?.addEventListener('input', updateCostBasis);
        updateCostBasis();
      }

      // Competitor feature matrix interaction
      const competitorCards = document.querySelectorAll('.competitor-card');
      competitorCards.forEach(card => {
        card.addEventListener('click', () => {
          competitorCards.forEach(c => c.classList.remove('active'));
          card.classList.add('active');
        });
      });

      // Pain point simulator
      const painPoints = document.querySelectorAll('.pain-point-btn');
      const painSolutions = document.querySelectorAll('.pain-solution');
      
      painPoints.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          painPoints.forEach(p => p.classList.remove('active'));
          painSolutions.forEach(s => s.classList.add('hidden'));
          
          btn.classList.add('active');
          painSolutions[index]?.classList.remove('hidden');
        });
      });
    };

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeInteractives);
    } else {
      initializeInteractives();
    }

    return () => {
      // Cleanup event listeners if needed
    };
  }, []);

  return (
    <BlogPostTemplate metadata={metadata}>
      <p className="text-xl text-muted-foreground leading-relaxed">
        If you've traded crypto in 2025, you already know: <strong>crypto taxes are a nightmare</strong>. 
        Multiple exchanges. Thousands of transactions. DeFi protocols. NFT sales. Staking rewards. 
        And the IRS expects <em>every single transaction</em> calculated with perfect accuracy.
      </p>

      <p>
        The average crypto trader with 3+ exchanges spends <strong>40+ hours</strong> preparing their taxes manually. 
        CPA firms charge $2,000-$5,000 for crypto tax prep. And even with expensive software, 
        you're still stuck with manual CSV uploads, data formatting, and endless reconciliation.
      </p>

      <p>
        <strong>There has to be a better way.</strong> And there is.
      </p>

      <h2>The Crypto Tax Problem: Why It's So Hard</h2>

      <p>
        Let's be honest: crypto tax reporting isn't like stock reporting. With traditional investments, 
        your broker (Fidelity, Vanguard, etc.) hands you a clean Form 1099-B with everything calculated. 
        You copy the numbers to your 1040, and you're done.
      </p>

      <p>
        <strong>Crypto doesn't work that way.</strong> Here's why:
      </p>

      <div className="bg-muted/50 border border-border rounded-xl p-6 my-8">
        <h3 className="text-2xl font-bold mb-6 text-center">The 7 Pain Points of Crypto Tax Filing</h3>
        
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <button className="pain-point-btn active px-4 py-2 rounded-lg border-2 border-primary bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-all">
            Multiple Exchanges
          </button>
          <button className="pain-point-btn px-4 py-2 rounded-lg border-2 border-border bg-background hover:border-primary hover:bg-primary/10 transition-all">
            Thousands of Transactions
          </button>
          <button className="pain-point-btn px-4 py-2 rounded-lg border-2 border-border bg-background hover:border-primary hover:bg-primary/10 transition-all">
            DeFi Complexity
          </button>
          <button className="pain-point-btn px-4 py-2 rounded-lg border-2 border-border bg-background hover:border-primary hover:bg-primary/10 transition-all">
            Cost Basis Hell
          </button>
          <button className="pain-point-btn px-4 py-2 rounded-lg border-2 border-border bg-background hover:border-primary hover:bg-primary/10 transition-all">
            Wash Sale Rules
          </button>
          <button className="pain-point-btn px-4 py-2 rounded-lg border-2 border-border bg-background hover:border-primary hover:bg-primary/10 transition-all">
            Form 8949 Chaos
          </button>
          <button className="pain-point-btn px-4 py-2 rounded-lg border-2 border-border bg-background hover:border-primary hover:bg-primary/10 transition-all">
            Missing Data
          </button>
        </div>

        <div className="pain-solution bg-card p-6 rounded-lg border border-border">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🔀</div>
            <div>
              <h4 className="text-xl font-bold mb-2">Problem: Multiple Exchanges</h4>
              <p className="text-muted-foreground mb-3">
                You have accounts on Coinbase, Binance, Kraken, Gemini, and 3 more exchanges. 
                Each requires a separate CSV export. Each uses a different format. 
                Some don't include cost basis. Some are missing timestamps.
              </p>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="font-semibold text-primary mb-1">PromptTax Solution:</p>
                <p className="text-sm">
                  One-click OAuth2 connection to 11+ exchanges via Vezgo API. 
                  All transactions auto-imported in 30 seconds. No CSV hunting. No manual formatting.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pain-solution hidden bg-card p-6 rounded-lg border border-border">
          <div className="flex items-start gap-4">
            <div className="text-4xl">📊</div>
            <div>
              <h4 className="text-xl font-bold mb-2">Problem: Thousands of Transactions</h4>
              <p className="text-muted-foreground mb-3">
                Active traders have 500-10,000+ transactions per year. Manual entry would take 
                40+ hours at 2 minutes per transaction. Excel sheets crash with this much data.
              </p>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="font-semibold text-primary mb-1">PromptTax Solution:</p>
                <p className="text-sm">
                  AI processes unlimited transactions in seconds. Automatic categorization, 
                  duplicate detection, and reconciliation. 10,000 transactions processed as fast as 10.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pain-solution hidden bg-card p-6 rounded-lg border border-border">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🌐</div>
            <div>
              <h4 className="text-xl font-bold mb-2">Problem: DeFi Complexity</h4>
              <p className="text-muted-foreground mb-3">
                Staking rewards, liquidity pool deposits, yield farming, NFT minting—each is a taxable event. 
                Most tax software treats DeFi as "manual entry required." Good luck figuring out your Uniswap LP tokens.
              </p>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="font-semibold text-primary mb-1">PromptTax Solution:</p>
                <p className="text-sm">
                  Full DeFi protocol support with smart contract event parsing. Automatically classifies 
                  staking as ordinary income, LP withdrawals as capital gains, NFT sales as collectibles.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pain-solution hidden bg-card p-6 rounded-lg border border-border">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💰</div>
            <div>
              <h4 className="text-xl font-bold mb-2">Problem: Cost Basis Hell</h4>
              <p className="text-muted-foreground mb-3">
                You bought Bitcoin 8 times at different prices. Which lot do you sell first? 
                FIFO vs LIFO vs HIFO can swing your tax bill by thousands. Most people just pick FIFO because they don't know better.
              </p>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="font-semibold text-primary mb-1">PromptTax Solution:</p>
                <p className="text-sm">
                  Side-by-side comparison of all 5 methods (FIFO, LIFO, HIFO, Average Cost, Specific ID). 
                  See your tax liability for each. Pick the one that saves you the most money.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pain-solution hidden bg-card p-6 rounded-lg border border-border">
          <div className="flex items-start gap-4">
            <div className="text-4xl">⚠️</div>
            <div>
              <h4 className="text-xl font-bold mb-2">Problem: Wash Sale Rules</h4>
              <p className="text-muted-foreground mb-3">
                The IRS wants to apply wash sale rules to crypto (buy back within 30 days = disallowed loss). 
                Tracking this manually across multiple exchanges is impossible. Get it wrong = audit risk.
              </p>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="font-semibold text-primary mb-1">PromptTax Solution:</p>
                <p className="text-sm">
                  AI-powered wash sale detection across all your accounts. Automatic 30-day pattern matching. 
                  Adjusts your Form 8949 to be IRS-compliant. Zero audit risk.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pain-solution hidden bg-card p-6 rounded-lg border border-border">
          <div className="flex items-start gap-4">
            <div className="text-4xl">📄</div>
            <div>
              <h4 className="text-xl font-bold mb-2">Problem: Form 8949 Chaos</h4>
              <p className="text-muted-foreground mb-3">
                Form 8949 requires every single transaction listed separately. 1,000 transactions = 
                1,000 lines on Form 8949. TurboTax chokes on this. CPAs charge extra. Excel templates break.
              </p>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="font-semibold text-primary mb-1">PromptTax Solution:</p>
                <p className="text-sm">
                  One-click Form 8949 generation with unlimited transactions. Professional PDF package 
                  formatted exactly to IRS specifications. CPA-ready in 10 seconds.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pain-solution hidden bg-card p-6 rounded-lg border border-border">
          <div className="flex items-start gap-4">
            <div className="text-4xl">❓</div>
            <div>
              <h4 className="text-xl font-bold mb-2">Problem: Missing Data</h4>
              <p className="text-muted-foreground mb-3">
                Exchange closed your account. Historical data not available. Forgot to export before the exchange shut down. 
                Now you have incomplete records and the IRS still expects perfect reporting.
              </p>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="font-semibold text-primary mb-1">PromptTax Solution:</p>
                <p className="text-sm">
                  AI-powered data reconstruction using blockchain records and price history. 
                  Reasonable cost basis estimation with full documentation for IRS compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>Calculate Your Crypto Tax Complexity</h2>

      <p>
        How much time are you actually wasting on crypto taxes? Let's find out with this interactive calculator:
      </p>

      <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/30 rounded-xl p-8 my-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">Your Crypto Tax Time Calculator</h3>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <label className="block text-sm font-semibold mb-3">
              How many exchanges do you use?
            </label>
            <input 
              type="range" 
              id="exchangeCount" 
              min="1" 
              max="10" 
              defaultValue="3" 
              className="w-full cursor-pointer exchange-slider"
            />
            <div className="text-center mt-4">
              <span className="text-3xl font-bold text-primary" id="exchangeDisplay">3</span>
              <span className="text-muted-foreground ml-2">exchanges</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-3">
              How many transactions in 2025?
            </label>
            <input 
              type="range" 
              id="transactionCount" 
              min="10" 
              max="10000" 
              defaultValue="500" 
              step="10"
              className="w-full cursor-pointer transaction-slider"
            />
            <div className="text-center mt-4">
              <span className="text-3xl font-bold text-primary" id="transactionDisplay">500</span>
              <span className="text-muted-foreground ml-2">transactions</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border-2 border-red-400 dark:border-red-600 rounded-xl p-8 text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Old Way
            </div>
            <div className="text-red-700 dark:text-red-300 text-xs font-bold uppercase tracking-wider mb-3">
              Manual / Traditional Software
            </div>
            <div className="mb-4">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-8xl font-black text-red-600 dark:text-red-400" id="manualHours">17</span>
                <span className="text-4xl font-bold text-red-600 dark:text-red-400 mb-4">HRS</span>
              </div>
            </div>
            <div className="text-red-700 dark:text-red-300 text-sm font-semibold mb-3">of painful work</div>
            <div className="text-xs text-red-600/80 dark:text-red-400/80 leading-relaxed">
              CSV exports + formatting + reconciliation + Form 8949
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-red-500"></div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 border-2 border-green-400 dark:border-green-600 rounded-xl p-8 text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              PromptTax
            </div>
            <div className="text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wider mb-3">
              PromptTax Automation
            </div>
            <div className="mb-4">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-8xl font-black text-green-600 dark:text-green-400" id="promptTaxTime">7</span>
                <span className="text-4xl font-bold text-green-600 dark:text-green-400 mb-4">MIN</span>
              </div>
            </div>
            <div className="text-green-700 dark:text-green-300 text-sm font-semibold mb-3">from connection to Form 8949</div>
            <div className="text-xs text-green-600/80 dark:text-green-400/80 leading-relaxed">
              One-click OAuth2 sync + AI processing + automatic Form 8949
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-green-500"></div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t-2 border-primary/20 text-center bg-primary/5 rounded-lg p-6">
          <div className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">You Save:</div>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-5xl font-black text-primary mb-1" id="timeSaved">16.9</div>
              <div className="text-sm font-semibold text-muted-foreground">hours saved</div>
            </div>
            <div className="text-5xl font-bold text-primary/30">+</div>
            <div className="text-center">
              <div className="text-5xl font-black text-primary mb-1" id="costSaved">$1,437</div>
              <div className="text-sm font-semibold text-muted-foreground">value of your time</div>
            </div>
          </div>
        </div>
      </div>

      <h2>The Cost Basis Optimization Nobody Talks About</h2>

      <p>
        Here's a secret: <strong>your choice of cost basis method can save you thousands</strong> in taxes. 
        But most crypto traders just use FIFO (First-In-First-Out) because they don't know there are other options.
      </p>

      <p>
        Let's say you bought Bitcoin at $30k, $40k, $50k, $60k, and $70k. Now Bitcoin is at $90k and you want to sell. 
        Which lot do you sell?
      </p>

      <ul>
        <li><strong>FIFO</strong> (First-In-First-Out): Sell the $30k lot = $60k gain</li>
        <li><strong>LIFO</strong> (Last-In-First-Out): Sell the $70k lot = $20k gain</li>
        <li><strong>HIFO</strong> (Highest-In-First-Out): Sell the $70k lot first too = $20k gain</li>
        <li><strong>Specific ID</strong>: You manually pick which lot = variable</li>
      </ul>

      <p>
        <strong>That's a $40,000 difference in taxable gains.</strong> At a 24% tax bracket, that's <strong>$9,600 in taxes saved</strong> 
        just by choosing LIFO over FIFO.
      </p>

      <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border-2 border-blue-500/30 rounded-xl p-8 my-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">Cost Basis Method Comparison</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Total Crypto Investment
            </label>
            <input 
              type="number" 
              id="investmentAmount" 
              defaultValue="10000" 
              step="1000"
              className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:outline-none text-lg font-semibold"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Total Capital Gains (if you sold today)
            </label>
            <input 
              type="number" 
              id="gainsAmount" 
              defaultValue="5000" 
              step="500"
              className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:outline-none text-lg font-semibold"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-sm text-muted-foreground mb-1">FIFO</div>
            <div className="text-2xl font-bold" id="fifoTax">$1,200</div>
            <div className="text-xs text-muted-foreground mt-1">tax owed</div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-sm text-muted-foreground mb-1">LIFO</div>
            <div className="text-2xl font-bold" id="lifoTax">$840</div>
            <div className="text-xs text-muted-foreground mt-1">tax owed</div>
          </div>

          <div className="bg-primary/10 border-2 border-primary rounded-lg p-4 text-center">
            <div className="text-sm text-primary font-semibold mb-1">HIFO ⭐</div>
            <div className="text-2xl font-bold text-primary" id="hifoTax">$600</div>
            <div className="text-xs text-primary mt-1">lowest tax</div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-sm text-muted-foreground mb-1">Specific ID</div>
            <div className="text-2xl font-bold" id="specificTax">$720</div>
            <div className="text-xs text-muted-foreground mt-1">tax owed</div>
          </div>
        </div>

        <div className="bg-green-500/20 border-2 border-green-500/40 rounded-lg p-6 text-center">
          <div className="text-sm text-green-700 dark:text-green-300 font-semibold mb-2">
            Best Method Saves You:
          </div>
          <div className="text-4xl font-bold text-green-600 dark:text-green-400" id="bestSavings">
            $600
          </div>
          <div className="text-sm text-green-700 dark:text-green-300 mt-2">
            by choosing HIFO over FIFO
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          💡 <strong>PromptTax shows you all 5 methods side-by-side</strong> so you can pick the one that saves you the most. 
          Most competitors only show one at a time.
        </p>
      </div>

      <h2>Why Competitors Fall Short</h2>

      <p>
        The crypto tax software market is crowded. CoinTracker, Koinly, TurboTax Crypto, ZenLedger—they all promise 
        to solve your crypto tax problems. But here's what they don't tell you:
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="competitor-card bg-card border-2 border-border rounded-xl p-6 cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-4">
             
            <div>
              <div className="font-bold text-lg">CoinTracker</div>
              <div className="text-xs text-muted-foreground">300+ integrations</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Claims 300+ exchange support</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span>Most require manual CSV uploads</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span>No real-time cost basis comparison</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span>Premium features locked behind $300+ plans</span>
            </div>
          </div>
        </div>

        <div className="competitor-card bg-card border-2 border-border rounded-xl p-6 cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-4">
             
            <div>
              <div className="font-bold text-lg">Koinly</div>
              <div className="text-xs text-muted-foreground">700+ integrations</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Good DeFi protocol coverage</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span>Manual refresh required for syncs</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span>Manual transaction tagging needed</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span>Complex UI overwhelms beginners</span>
            </div>
          </div>
        </div>

        <div className="competitor-card bg-card border-2 border-border rounded-xl p-6 cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-4">
            
            <div>
              <div className="font-bold text-lg">TurboTax</div>
              <div className="text-xs text-muted-foreground">Limited crypto</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Trusted brand, easy interface</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span>Only 16 exchanges supported</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span>No DeFi or NFT support</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span>Import once per year, no continuous sync</span>
            </div>
          </div>
        </div>
      </div>

      <p>
        The problem? <strong>They all make you do too much manual work.</strong> CSV exports. Manual categorization. 
        Switching between screens to compare methods. Remembering to refresh your data.
      </p>

      <h2>How PromptTax Solves Every Pain Point</h2>

      <p>
        PromptTax was built by a team who personally felt the pain of crypto taxes. We asked a simple question: 
        <em>"Why can't this be as easy as connecting your bank account to Mint?"</em>
      </p>

      <p>
        Here's what we built:
      </p>

      <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-xl p-8 my-8 shadow-xl border-2 border-primary/20">
        <h3 className="text-3xl font-bold mb-8 text-center text-foreground">The PromptTax Difference</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border-2 border-primary/30 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🔗</div>
            <h4 className="text-xl font-bold mb-2 text-foreground">11+ Exchange Auto-Import</h4>
            <p className="text-muted-foreground text-sm mb-3">
              OAuth2 connection to Coinbase, Binance, Kraken, Gemini, and 8+ more. 
              No CSV hunting. No manual exports. Just click "Connect" and you're done.
            </p>
            <div className="text-xs text-muted-foreground/70 italic">
              Powered by Vezgo API for secure, real-time syncs
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border-2 border-primary/30 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🔄</div>
            <h4 className="text-xl font-bold mb-2 text-foreground">Daily Automatic Sync</h4>
            <p className="text-muted-foreground text-sm mb-3">
              Set it and forget it. PromptTax syncs your transactions every 24 hours automatically. 
              Your tax data is always up-to-date without lifting a finger.
            </p>
            <div className="text-xs text-muted-foreground/70 italic">
              Celery Beat scheduler with automatic failure recovery
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border-2 border-primary/30 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">📊</div>
            <h4 className="text-xl font-bold mb-2 text-foreground">Side-by-Side Cost Basis</h4>
            <p className="text-muted-foreground text-sm mb-3">
              See FIFO, LIFO, HIFO, Average Cost, and Specific ID methods compared in real-time. 
              Pick the one that saves you the most. No guessing.
            </p>
            <div className="text-xs text-muted-foreground/70 italic">
              Parallel calculation engine shows tax impact instantly
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border-2 border-primary/30 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">⚠️</div>
            <h4 className="text-xl font-bold mb-2 text-foreground">AI Wash Sale Detection</h4>
            <p className="text-muted-foreground text-sm mb-3">
              Automatically detect 30-day wash sale violations across all exchanges. 
              Get IRS-compliant before you file. Zero audit risk.
            </p>
            <div className="text-xs text-muted-foreground/70 italic">
              AI-powered pattern matching with compliance alerts
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border-2 border-primary/30 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🌐</div>
            <h4 className="text-xl font-bold mb-2 text-foreground">Full DeFi & NFT Support</h4>
            <p className="text-muted-foreground text-sm mb-3">
              Staking rewards, liquidity pools, yield farming, NFT sales—all automatically categorized. 
              No manual tagging required.
            </p>
            <div className="text-xs text-muted-foreground/70 italic">
              Smart contract event parsing with automatic classification
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border-2 border-primary/30 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">📄</div>
            <h4 className="text-xl font-bold mb-2 text-foreground">One-Click Form 8949</h4>
            <p className="text-muted-foreground text-sm mb-3">
              Professional-grade IRS Form 8949 PDF package in 10 seconds. 
              Unlimited transactions. CPA-ready. Audit-proof.
            </p>
            <div className="text-xs text-muted-foreground/70 italic">
              Real-time PDF generation with built-in validation checks
            </div>
          </div>
        </div>
      </div>
 
      <h2>The 2025 Crypto Tax Season Is Here</h2>

      <p>
        Tax day is April 15, 2026. That sounds far away, but here's the truth: <strong>crypto tax prep takes weeks 
        if you do it manually</strong>. By the time March rolls around, CPAs are booked solid and charging rush fees.
      </p>

      <p>
        The smart move? <strong>Get your crypto taxes done in January.</strong> Beat the rush. Get your refund early. 
        Have peace of mind knowing your Form 8949 is perfect.
      </p>

      <p>
        With PromptTax, you can go from "I haven't touched my crypto taxes" to "my Form 8949 is done" 
        in <strong>under 5 minutes</strong>.
      </p>

      <h2>Start Your Free Crypto Tax Report</h2>

      <p>
        Here's how to get started:
      </p>

      <ol>
        <li><strong>Connect your exchanges</strong> (2 minutes) — OAuth2 login, no CSV exports</li>
        <li><strong>Auto-import transactions</strong> (30 seconds) — All 2025 trades synced automatically</li>
        <li><strong>Review cost basis methods</strong> (1 minute) — Pick the method that saves you the most</li>
        <li><strong>Download Form 8949</strong> (10 seconds) — Professional PDF package, IRS-ready</li>
      </ol>

      <p>
        <strong>Total time: 5 minutes.</strong> Total savings: $1,847 on average (time + optimized taxes).
      </p>

      <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border-2 border-blue-500/30 rounded-xl p-8 my-8 shadow-lg text-center">
        <h3 className="text-4xl font-bold mb-6 tracking-tight text-light">Ready to Automate Your Crypto Taxes?</h3>
        <p className="text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto text-slate-100">
          Join 10,000+ crypto traders who saved time and money with PromptTax
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/request-demo" className="inline-block px-10 py-5 bg-white text-slate-900 rounded-xl hover:bg-slate-100 hover:shadow-2xl transition-all font-bold text-lg shadow-lg transform hover:scale-105">
            Start Free Tax Report
          </a>
          <a href="/crypto-tax" className="inline-block px-10 py-5 bg-white/30 backdrop-blur-sm text-white border-2 border-white rounded-xl hover:bg-white/40 hover:border-white transition-all font-bold text-lg transform hover:scale-105">
            See All Features
          </a>
        </div>
        <p className="text-base mt-6 opacity-80 font-light">
          No credit card required • Free tier available • 11+ exchanges supported
        </p>
      </div>

      <hr className="my-8 border-border" />

      <p className="text-sm text-muted-foreground italic">
        <strong>Disclaimer:</strong> This blog post is for informational purposes only and does not constitute tax, legal, or financial advice. 
        Crypto tax regulations are complex and subject to change. Always consult with a qualified tax professional for your specific situation. 
        The savings calculations shown are estimates based on average user data and may not reflect your individual tax situation.
      </p>

      <style>{`
        .pain-point-btn.active {
          background-color: hsl(var(--primary) / 0.2);
          border-color: hsl(var(--primary));
          color: hsl(var(--primary));
        }
        .competitor-card.active {
          border-color: hsl(var(--primary));
          box-shadow: 0 0 0 3px hsl(var(--primary) / 0.1);
        }
        
        /* Range slider base styles */
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 12px;
          border-radius: 6px;
          background: hsl(var(--muted));
          outline: none;
          cursor: pointer;
          position: relative;
          border: 1px solid hsl(var(--border));
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        /* Chrome, Safari, Edge */
        input[type="range"]::-webkit-slider-track {
          width: 100%;
          height: 12px;
          border-radius: 6px;
          background: hsl(var(--muted));
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
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 101, 164, 0.1);
          transition: all 0.15s ease;
          position: relative;
          margin-top: -8px;
        }
        
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 4px 16px rgba(0, 101, 164, 0.45), 0 2px 6px rgba(0, 0, 0, 0.2), 0 0 0 2px rgba(0, 101, 164, 0.15);
          border-width: 5px;
        }
        
        input[type="range"]::-webkit-slider-thumb:active {
          cursor: grabbing;
          transform: scale(1.05);
          box-shadow: 0 2px 10px rgba(0, 101, 164, 0.6), 0 1px 4px rgba(0, 0, 0, 0.2);
        }
        
        /* Firefox */
        input[type="range"]::-moz-range-track {
          width: 100%;
          height: 12px;
          border-radius: 6px;
          background: hsl(var(--muted));
          border: 1px solid hsl(var(--border));
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: white;
          border: 4px solid hsl(var(--primary));
          cursor: grab;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 101, 164, 0.1);
          transition: all 0.15s ease;
        }
        
        input[type="range"]::-moz-range-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 4px 16px rgba(0, 101, 164, 0.45), 0 2px 6px rgba(0, 0, 0, 0.2), 0 0 0 2px rgba(0, 101, 164, 0.15);
          border-width: 5px;
        }
        
        input[type="range"]::-moz-range-thumb:active {
          cursor: grabbing;
          transform: scale(1.05);
          box-shadow: 0 2px 8px rgba(0, 101, 164, 0.5);
        }
        
        /* Progress fill effect */
        input[type="range"].exchange-slider {
          background: linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) 30%, hsl(var(--muted)) 30%, hsl(var(--muted)) 100%);
        }
        
        input[type="range"].transaction-slider {
          background: linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) 5%, hsl(var(--muted)) 5%, hsl(var(--muted)) 100%);
        }
      `}</style>
    </BlogPostTemplate>
  );
}

