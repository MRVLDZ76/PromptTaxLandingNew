import BlogPostTemplate from '@/components/BlogPostTemplate';
import { BlogPostMetadata } from '@/blog/types';
import { useEffect } from 'react';
import { 
  Clock, 
  Zap, 
  CheckCircle, 
  ArrowLeftRight, 
  BarChart3, 
  Globe, 
  DollarSign, 
  AlertTriangle, 
  FileText, 
  HelpCircle, 
  Link2, 
  Target, 
  Search, 
  Puzzle, 
  Lightbulb, 
  Lock, 
  Shield, 
  Key, 
  ClipboardList,
  TrendingUp,
  Sparkles,
  Brain,
  Rocket,
  Award,
  Users,
  MessageCircle,
  Download,
  Upload,
  RefreshCw,
  ChevronRight,
  Star
} from 'lucide-react';

interface CryptoTaxAIAutomationBlogPostProps {
  metadata: BlogPostMetadata;
}

export default function CryptoTaxAIAutomationBlogPost({ metadata }: CryptoTaxAIAutomationBlogPostProps) {
  if (!metadata) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    // Initialize interactive components after DOM loads
    const initializeInteractives = () => {
      // Transaction time savings calculator
      const transactionSlider = document.getElementById('transactionVolume') as HTMLInputElement;
      const exchangeSlider = document.getElementById('exchangeVolume') as HTMLInputElement;
      const transactionDisplay = document.getElementById('transactionDisplay');
      const exchangeDisplay = document.getElementById('exchangeDisplay');
      const oldWayTime = document.getElementById('oldWayTime');
      const newWayTime = document.getElementById('newWayTime');
      const timeSavings = document.getElementById('timeSavings');
      const moneySavings = document.getElementById('moneySavings');

      const updateSavingsCalculator = () => {
        if (!transactionSlider || !exchangeSlider) return;
        
        const transactions = parseInt(transactionSlider.value);
        const exchanges = parseInt(exchangeSlider.value);
        
        if (transactionDisplay) transactionDisplay.textContent = transactions.toLocaleString();
        if (exchangeDisplay) exchangeDisplay.textContent = exchanges.toString();
        
        // Update slider visual progress
        const transactionPercent = ((transactions - 100) / (10000 - 100)) * 100;
        const exchangePercent = ((exchanges - 1) / (12 - 1)) * 100;
        
        transactionSlider.style.background = `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${transactionPercent}%, hsl(var(--muted)) ${transactionPercent}%, hsl(var(--muted)) 100%)`;
        exchangeSlider.style.background = `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${exchangePercent}%, hsl(var(--muted)) ${exchangePercent}%, hsl(var(--muted)) 100%)`;
        
        // Calculate time (realistic estimates)
        const csvDownloadTime = exchanges * 2; // 2 hours per exchange for CSV hunting
        const reconciliationTime = (transactions / 100) * 4; // 4 hours per 100 transactions
        const costBasisTime = (transactions / 100) * 3; // 3 hours per 100 transactions  
        const form8949Time = (transactions / 100) * 2; // 2 hours per 100 transactions
        const oldTime = Math.ceil(csvDownloadTime + reconciliationTime + costBasisTime + form8949Time);
        
        const newTime = Math.ceil(5 + (exchanges * 0.5) + (transactions / 1000)); // Auto-sync is fast
        const hoursSaved = Math.max(0, oldTime - (newTime / 60));
        const dollarsSaved = Math.ceil(hoursSaved * 85); // $85/hr value of time
        
        if (oldWayTime) oldWayTime.textContent = oldTime.toString();
        if (newWayTime) newWayTime.textContent = newTime.toString();
        if (timeSavings) timeSavings.textContent = hoursSaved.toFixed(1);
        if (moneySavings) moneySavings.textContent = '$' + dollarsSaved.toLocaleString();
      };

      if (transactionSlider) {
        transactionSlider.addEventListener('input', updateSavingsCalculator);
        exchangeSlider?.addEventListener('input', updateSavingsCalculator);
        updateSavingsCalculator();
      }

      // Cost basis optimization calculator
      const purchasePrice = document.getElementById('purchasePrice') as HTMLInputElement;
      const sellPrice = document.getElementById('sellPrice') as HTMLInputElement;
      
      const updateCostBasisCalculator = () => {
        if (!purchasePrice || !sellPrice) return;
        
        const avgBuy = parseFloat(purchasePrice.value) || 30000;
        const currentPrice = parseFloat(sellPrice.value) || 90000;
        
        // Simulate different purchase lots
        const lots = [
          avgBuy * 0.5,  // Early purchase (lowest)
          avgBuy * 0.7,
          avgBuy,
          avgBuy * 1.3,
          avgBuy * 1.5   // Latest purchase (highest)
        ];
        
        const fifoGain = currentPrice - lots[0]; // Use lowest basis
        const lifoGain = currentPrice - lots[4]; // Use highest basis
        const hifoGain = currentPrice - lots[4]; // Same as LIFO for optimization
        const avgGain = currentPrice - avgBuy;
        
        const taxRate = 0.24; // 24% bracket
        
        document.getElementById('fifoTax')!.textContent = '$' + Math.ceil(fifoGain * taxRate).toLocaleString();
        document.getElementById('lifoTax')!.textContent = '$' + Math.ceil(lifoGain * taxRate).toLocaleString();
        document.getElementById('hifoTax')!.textContent = '$' + Math.ceil(hifoGain * taxRate).toLocaleString();
        document.getElementById('avgTax')!.textContent = '$' + Math.ceil(avgGain * taxRate).toLocaleString();
        
        const maxSavings = Math.ceil((fifoGain - hifoGain) * taxRate);
        document.getElementById('costBasisSavings')!.textContent = '$' + maxSavings.toLocaleString();
      };

      if (purchasePrice) {
        purchasePrice.addEventListener('input', updateCostBasisCalculator);
        sellPrice?.addEventListener('input', updateCostBasisCalculator);
        updateCostBasisCalculator();
      }

      // Pricing comparison interaction
      const pricingCards = document.querySelectorAll('.pricing-card');
      pricingCards.forEach(card => {
        card.addEventListener('click', () => {
          pricingCards.forEach(c => c.classList.remove('ring-2', 'ring-primary'));
          card.classList.add('ring-2', 'ring-primary');
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
        Last tax season, Sarah spent 18 hours downloading CSV files from 4 different exchanges, 
        manually matching buy/sell transactions, and still got her cost basis wrong. The IRS sent 
        a notice 6 months later. <strong>This year, she clicked one button and was done in 5 minutes.</strong>
      </p>

      <p>
        If you traded crypto in 2025, you know what's coming: tax season headaches. Between Coinbase, 
        Binance, your hardware wallet, that NFT marketplace, and those staking rewards, you've got 
        transactions scattered across a dozen platforms. Traditional crypto tax software charges $299+ 
        and still makes you do the heavy lifting.
      </p>

      <p>
        <strong>There's a better way.</strong> Let's break down exactly how much time and money you can save.
      </p>

      <h2>Old Way vs New Way: The Transformation</h2>

      <p>
        Compare the traditional crypto tax nightmare to the AI-powered PromptTax workflow:
      </p>

      <div className="my-8 overflow-x-auto">
        <div className="grid md:grid-cols-2 gap-6 min-w-[600px]">
          {/* Old Way Column */}
          <div className="bg-card border-l-4 border-l-red-500 dark:border-l-red-600 border border-border rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <Clock className="w-7 h-7 text-red-600 dark:text-red-500" />
              <div>
                <h3 className="text-xl font-bold">The Old Way</h3>
                <p className="text-xs text-muted-foreground">Manual CSV + Spreadsheets</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 text-muted-foreground font-bold text-sm">1</div>
                <div className="flex-1">
                  <div className="font-medium">CSV downloads & formatting</div>
                  <div className="text-sm text-muted-foreground">Hunt for export buttons, fix broken formats</div>
                  <div className="text-xs font-semibold text-red-600 dark:text-red-500 mt-1">⏱ 2-3 hours</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 text-muted-foreground font-bold text-sm">2</div>
                <div className="flex-1">
                  <div className="font-medium">Manual reconciliation</div>
                  <div className="text-sm text-muted-foreground">Match transfers, fix duplicates</div>
                  <div className="text-xs font-semibold text-red-600 dark:text-red-500 mt-1">⏱ 4-6 hours</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 text-muted-foreground font-bold text-sm">3</div>
                <div className="flex-1">
                  <div className="font-medium">Cost basis calculation</div>
                  <div className="text-sm text-muted-foreground">FIFO/LIFO in Excel</div>
                  <div className="text-xs font-semibold text-red-600 dark:text-red-500 mt-1">⏱ 3-4 hours</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 text-muted-foreground font-bold text-sm">4</div>
                <div className="flex-1">
                  <div className="font-medium">Form 8949 generation</div>
                  <div className="text-sm text-muted-foreground">Manual data entry</div>
                  <div className="text-xs font-semibold text-red-600 dark:text-red-500 mt-1">⏱ 2-3 hours</div>
                </div>
              </div>
            </div>
            
            <div className="pt-4 mt-2 border-t border-border">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold">Total Time</span>
                <span className="text-3xl font-black text-red-600 dark:text-red-500">15-18 hrs</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">Total Cost</span>
                <span className="text-3xl font-black text-red-600 dark:text-red-500">$299-$599</span>
              </div>
            </div>
          </div>

          {/* New Way Column */}
          <div className="bg-card border-l-4 border-l-primary border border-border rounded-lg p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
              66% Faster
            </div>
            
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <Zap className="w-7 h-7 text-primary" />
              <div>
                <h3 className="text-xl font-bold">The New Way</h3>
                <p className="text-xs text-muted-foreground">PromptTax AI Automation</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">API auto-sync or CSV upload</div>
                  <div className="text-sm text-muted-foreground">One-click OAuth2 connection</div>
                  <div className="text-xs font-semibold text-primary mt-1">⚡ 2 minutes</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">AI auto-categorization</div>
                  <div className="text-sm text-muted-foreground">Instant classification of all txns</div>
                  <div className="text-xs font-semibold text-primary mt-1">⚡ Automatic</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">5 cost basis methods compared</div>
                  <div className="text-sm text-muted-foreground">FIFO, LIFO, HIFO, Avg, Specific</div>
                  <div className="text-xs font-semibold text-primary mt-1">⚡ Instant</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">Complete 1040 filing included</div>
                  <div className="text-sm text-muted-foreground">Form 8949 + Schedule D + 1040</div>
                  <div className="text-xs font-semibold text-primary mt-1">⚡ 10 minutes</div>
                </div>
              </div>
            </div>
            
            <div className="pt-4 mt-2 border-t border-border">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold">Total Time</span>
                <span className="text-3xl font-black text-primary">~15 min</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">Total Cost</span>
                <span className="text-3xl font-black text-primary">$99-$199</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Savings Summary */}
        <div className="mt-6 bg-primary/10 border-2 border-primary rounded-xl p-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h4 className="text-xl font-bold">Your Savings</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-4xl font-black text-primary mb-1">15+ hours</div>
              <div className="text-sm text-muted-foreground">saved per tax season</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-1">$200-$400</div>
              <div className="text-sm text-muted-foreground">in cost savings vs competitors</div>
            </div>
          </div>
        </div>
      </div>

      <h2>Calculate Your Time & Money Savings</h2>

      <p>
        Let's get specific. Use this interactive calculator to see exactly how much time and money 
        PromptTax will save you this tax season:
      </p>

      <div className="bg-card border border-border rounded-lg p-6 my-8">
        <h3 className="text-xl font-bold mb-6">Calculate Your Savings</h3>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <label className="block text-sm font-semibold mb-3">
              Number of crypto transactions in 2025:
            </label>
            <input 
              type="range" 
              id="transactionVolume" 
              min="100" 
              max="10000" 
              defaultValue="500" 
              step="100"
              className="w-full cursor-pointer"
            />
            <div className="text-center mt-4">
              <span className="text-4xl font-bold text-primary" id="transactionDisplay">500</span>
              <span className="text-muted-foreground ml-2">transactions</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-3">
              Number of exchanges/wallets you use:
            </label>
            <input 
              type="range" 
              id="exchangeVolume" 
              min="1" 
              max="12" 
              defaultValue="3"
              className="w-full cursor-pointer"
            />
            <div className="text-center mt-4">
              <span className="text-4xl font-bold text-primary" id="exchangeDisplay">3</span>
              <span className="text-muted-foreground ml-2">exchanges</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border-l-4 border-l-red-500 dark:border-l-red-600 border border-border rounded-lg p-8 text-center relative shadow-sm">
            <div className="absolute top-3 right-3 bg-muted text-muted-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Old Method
            </div>
            <div className="text-xs font-bold uppercase tracking-wider mb-3 text-muted-foreground">
              Manual CSV + Spreadsheets
            </div>
            <div className="mb-4">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-8xl font-black text-red-600 dark:text-red-500" id="oldWayTime">17</span>
                <span className="text-4xl font-bold text-red-600 dark:text-red-500 mb-4">HRS</span>
              </div>
            </div>
            <div className="text-sm font-semibold mb-3">of manual work</div>
            <div className="text-xs text-muted-foreground leading-relaxed">
              Plus $299-$599 in software fees
            </div>
          </div>

          <div className="bg-card border-l-4 border-l-primary border border-border rounded-lg p-8 text-center relative shadow-sm">
            <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              PromptTax
            </div>
            <div className="text-xs font-bold uppercase tracking-wider mb-3 text-muted-foreground">
              API Auto-Sync + CSV Upload
            </div>
            <div className="mb-4">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-8xl font-black text-primary" id="newWayTime">7</span>
                <span className="text-4xl font-bold text-primary mb-4">MIN</span>
              </div>
            </div>
            <div className="text-sm font-semibold mb-3">total automation</div>
            <div className="text-xs text-muted-foreground leading-relaxed">
              Plus $99-$199 flat fee
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t-2 border-primary/20 text-center bg-primary/5 rounded-lg p-6">
          <div className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">You Save:</div>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-5xl font-black text-primary mb-1" id="timeSavings">16.9</div>
              <div className="text-sm font-semibold text-muted-foreground">hours of your life</div>
            </div>
            <div className="text-5xl font-bold text-primary/30">+</div>
            <div className="text-center">
              <div className="text-5xl font-black text-primary mb-1" id="moneySavings">$1,437</div>
              <div className="text-sm font-semibold text-muted-foreground">in time value + fees</div>
            </div>
          </div>
        </div>
      </div>

      <h2>What Makes PromptTax Different: 5 Key Advantages</h2>

      <h3>1. Broadest Exchange Support (12+ Platforms)</h3>

      <p>
        Most crypto tax software supports 8-10 exchanges and charges $299-$599. 
        PromptTax supports more platforms at a fraction of the cost:
      </p>

      <div className="bg-card border border-border rounded-lg p-6 my-8">
        <h4 className="font-bold mb-4">Supported Platforms (12+)</h4>
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-4 text-sm">
          <div className="flex items-center gap-3">
            <img src="/brands/63e2f3ae88285e1b2db54792_Coinbase Icon.svg" alt="Coinbase" className="w-6 h-6 flex-shrink-0" />
            <span>Coinbase / Pro</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="/brands/6177e819ff4246e1e50138d9_Kraken.avif" alt="Kraken" className="w-6 h-6 flex-shrink-0" />
            <span>Kraken</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="/brands/617bd9dced45224b0484b797_Binance us.avif" alt="Binance US" className="w-6 h-6 flex-shrink-0" />
            <span>Binance US</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="/brands/gemini.avif" alt="Gemini" className="w-6 h-6 flex-shrink-0" />
            <span>Gemini</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="/brands/6177e3a7f9772b1100089f39_crypto-com-mco-logo.avif" alt="Crypto.com" className="w-6 h-6 flex-shrink-0" />
            <span>Crypto.com</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="/brands/6177e827edaa6b53f0d223cc_KuCoin Token (KCS).avif" alt="KuCoin" className="w-6 h-6 flex-shrink-0" />
            <span>KuCoin</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="/brands/6177e8e96f89317ea04c2158_MetaMask.avif" alt="MetaMask" className="w-6 h-6 flex-shrink-0" />
            <span>MetaMask</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="/brands/6177e4f3d3a3b05d6a967115_Exodus.avif" alt="Exodus" className="w-6 h-6 flex-shrink-0" />
            <span>Exodus</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="/brands/6177e1505641c20045fde357_BlockFi.avif" alt="BlockFi" className="w-6 h-6 flex-shrink-0" />
            <span>BlockFi</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="/brands/6177eba787db5071fb42fcc0_Uphold.avif" alt="Uphold" className="w-6 h-6 flex-shrink-0" />
            <span>Uphold</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="/brands/6177eb7f714a9193876f9e1c_Uniswap.avif" alt="Uniswap" className="w-6 h-6 flex-shrink-0" />
            <span>Uniswap</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="/brands/617b93cfb5299bda247d8f41_OpenSea.avif" alt="OpenSea" className="w-6 h-6 flex-shrink-0" />
            <span>OpenSea</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-4">Plus CSV upload for any exchange</p>
      </div>

      <h3>2. AI-Powered Transaction Intelligence</h3>

      <p>
        Our Azure AI agents don't just import transactions—they <strong>understand</strong> them:
      </p>

      <div className="bg-card border border-border rounded-lg p-6 my-8">
        <h4 className="font-bold mb-4">AI-Powered Intelligence</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium mb-1">Auto-categorization</div>
              <div className="text-muted-foreground">DeFi, staking, airdrops, NFTs</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Search className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium mb-1">Duplicate detection</div>
              <div className="text-muted-foreground">No double-counting</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Puzzle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium mb-1">Data recovery</div>
              <div className="text-muted-foreground">Fills missing cost basis</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium mb-1">Tax optimization</div>
              <div className="text-muted-foreground">HIFO vs FIFO comparison</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 border-l-4 border-primary rounded p-4 my-6">
        <p className="text-sm font-semibold mb-1">Real example:</p>
        <p className="text-sm text-muted-foreground">
          User with $47,000 in gains saved $3,200 by using HIFO instead of FIFO
        </p>
      </div>

      <h3>3. Cost Basis Methods That Actually Save Money</h3>

      <p>
        Most crypto tax software defaults to FIFO (First In, First Out). But what if your earliest 
        Bitcoin purchase was at $10,000 and you sold at $80,000? That's a huge taxable gain that 
        could be minimized with the right method.
      </p>

      <p>
        <strong>PromptTax supports 5 methods and compares them side-by-side:</strong>
      </p>

      <div className="bg-card border border-border rounded-lg p-6 my-8">
        <h3 className="text-xl font-bold mb-6">Cost Basis Optimization Calculator</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Average Purchase Price (per coin)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">$</span>
              <input 
                type="number" 
                id="purchasePrice" 
                defaultValue="30000" 
                step="1000"
                className="w-full pl-8 pr-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:outline-none text-lg font-semibold"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Current Sale Price (per coin)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">$</span>
              <input 
                type="number" 
                id="sellPrice" 
                defaultValue="90000" 
                step="1000"
                className="w-full pl-8 pr-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:outline-none text-lg font-semibold"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-xs text-muted-foreground mb-2 font-medium uppercase">FIFO</div>
            <div className="text-2xl font-bold" id="fifoTax">$3,600</div>
            <div className="text-xs text-muted-foreground mt-1">tax owed</div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-xs text-muted-foreground mb-2 font-medium uppercase">LIFO</div>
            <div className="text-2xl font-bold" id="lifoTax">$2,520</div>
            <div className="text-xs text-muted-foreground mt-1">tax owed</div>
          </div>

          <div className="bg-primary/5 border-2 border-primary rounded-lg p-4 text-center relative">
            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded uppercase">Best</div>
            <div className="text-xs text-primary mb-2 font-medium uppercase">HIFO</div>
            <div className="text-2xl font-bold text-primary" id="hifoTax">$1,800</div>
            <div className="text-xs text-muted-foreground mt-1">tax owed</div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-xs text-muted-foreground mb-2 font-medium uppercase">Average</div>
            <div className="text-2xl font-bold" id="avgTax">$3,600</div>
            <div className="text-xs text-muted-foreground mt-1">tax owed</div>
          </div>
        </div>

        <div className="pt-4 border-t border-border text-center">
          <div className="text-sm text-muted-foreground mb-1">Your Tax Savings with HIFO:</div>
          <div className="text-4xl font-bold text-primary" id="costBasisSavings">$1,800</div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground italic my-6">
        <strong>Note:</strong> The AI compares all methods and shows you which saves the most. 
        No manual spreadsheet gymnastics required.
      </p>

      <h3>4. Full 1040 Integration (Not Just Crypto)</h3>

      <p>
        CoinTracker and Koinly stop at Form 8949. Then you're stuck copying numbers into TurboTax 
        and paying another $129-$199.
      </p>

      <p>
        <strong>PromptTax goes all the way to complete tax filing:</strong>
      </p>

      <p className="text-sm text-muted-foreground my-6">
        <strong>Unlike competitors,</strong> PromptTax handles your complete tax return: crypto gains (Form 8949), W-2 income, 1099s, business income, deductions, credits, and full federal + state filing.
      </p>

      <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary rounded-xl p-8 my-8 shadow-lg">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-primary text-primary-foreground rounded-lg p-3">
            <FileText className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h4 className="text-2xl font-bold">Professional Tax Package</h4>
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Recommended</span>
            </div>
            <p className="text-sm text-muted-foreground">Complete CPA-ready bundle</p>
          </div>
        </div>

        <div className="mb-6">
          <h5 className="font-bold mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            Everything you need in one PDF:
          </h5>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium">Form 8949 (all transactions)</div>
                <div className="text-xs text-muted-foreground">IRS tax form</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium">Schedule D summary</div>
                <div className="text-xs text-muted-foreground">Capital gains/losses</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium">Income Report</div>
                <div className="text-xs text-muted-foreground">Mining, staking, airdrops, interest</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium">Holdings Reports</div>
                <div className="text-xs text-muted-foreground">Beginning & end of year positions</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium">Expenses Report</div>
                <div className="text-xs text-muted-foreground">Transaction & network fees</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium">Asset Summary</div>
                <div className="text-xs text-muted-foreground">Trading overview by cryptocurrency</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium">Audit defense documentation</div>
                <div className="text-xs text-muted-foreground">Full transaction trail for IRS</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium">1040 integration data</div>
                <div className="text-xs text-muted-foreground">Ready to attach to Schedule D</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="bg-blue-500 text-white rounded-lg px-3 py-1.5 text-xs font-bold">
              PERFECT FOR CPA HANDOFF
            </div>
            <p className="text-sm flex-1">
              Send this single PDF to your tax professional. Contains everything needed for accurate filing and audit defense.
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-lg font-semibold my-6">
        <strong>One platform. One price. Full federal + state return.</strong>
      </p>

      <h3>5. CPA Chat Support (Pro Plan)</h3>

      <p>
        Stuck on a complex DeFi transaction? Our CPA chat agents answer in less than 24 hours:
      </p>

      <p className="text-sm text-muted-foreground my-6">
        <strong>Pro plan includes unlimited CPA chat support</strong> (&lt;24hr response) at no extra cost. Competitors charge $150-$300/hour.
      </p>

      <h2>Pricing Comparison: PromptTax vs Competitors</h2>

      <p>
        Here's what you actually get for your money. Notice how competitors charge 2-3x more while offering less:
      </p>

      <div className="overflow-x-auto my-8 shadow-xl rounded-lg">
        <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-muted/50">
              <th className="p-5 text-left font-bold border-b-2 border-border text-base">Feature</th>
              <th className="p-5 text-center font-bold border-b-2 border-border text-base">
                <div className="flex flex-col items-center gap-1">
                  <span>CoinTracker</span>
                  <span className="text-xs font-normal text-muted-foreground">Industry Leader</span>
                </div>
              </th>
              <th className="p-5 text-center font-bold border-b-2 border-border text-base">
                <div className="flex flex-col items-center gap-1">
                  <span>Koinly</span>
                  <span className="text-xs font-normal text-muted-foreground">Popular Choice</span>
                </div>
              </th>
              <th className="p-5 text-center font-bold border-b-2 border-border bg-primary/10 text-base">
                <div className="flex flex-col items-center gap-2">
                  <span>PromptTax</span>
                  <span className="text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-full font-bold uppercase tracking-wide">Best Value</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border hover:bg-muted/30 transition-colors">
              <td className="p-5 font-medium">Transaction Limit</td>
              <td className="p-5 text-center text-muted-foreground">3,000 max</td>
              <td className="p-5 text-center text-muted-foreground">10,000 max</td>
              <td className="p-5 text-center">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-green-600">Unlimited</span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-border hover:bg-muted/30 transition-colors">
              <td className="p-5 font-medium">Exchange API Support</td>
              <td className="p-5 text-center text-muted-foreground">8 platforms</td>
              <td className="p-5 text-center text-muted-foreground">10 platforms</td>
              <td className="p-5 text-center">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-green-600">12+ platforms</span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-border hover:bg-muted/30 transition-colors">
              <td className="p-5 font-medium">Manual CSV Upload</td>
              <td className="p-5 text-center text-muted-foreground">Limited formats</td>
              <td className="p-5 text-center text-muted-foreground">8 formats</td>
              <td className="p-5 text-center">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-green-600">12+ formats</span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-border hover:bg-muted/30 transition-colors">
              <td className="p-5 font-medium">Cost Basis Methods</td>
              <td className="p-5 text-center text-muted-foreground">2 methods</td>
              <td className="p-5 text-center text-muted-foreground">3 methods</td>
              <td className="p-5 text-center">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-green-600">5 methods + AI</span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-border hover:bg-muted/30 transition-colors">
              <td className="p-5 font-medium">AI Auto-Categorization</td>
              <td className="p-5 text-center">
                <span className="text-red-500 text-xl">✗</span>
              </td>
              <td className="p-5 text-center">
                <span className="text-red-500 text-xl">✗</span>
              </td>
              <td className="p-5 text-center">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-green-600">Included</span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-border hover:bg-muted/30 transition-colors">
              <td className="p-5 font-medium">Full 1040 Tax Filing</td>
              <td className="p-5 text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-red-500 text-xl">✗</span>
                  <span className="text-xs text-muted-foreground">Export only</span>
                </div>
              </td>
              <td className="p-5 text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-red-500 text-xl">✗</span>
                  <span className="text-xs text-muted-foreground">Export only</span>
                </div>
              </td>
              <td className="p-5 text-center">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-green-600">Full filing</span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-border hover:bg-muted/30 transition-colors">
              <td className="p-5 font-medium">CPA Support</td>
              <td className="p-5 text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-red-500 text-xl">✗</span>
                  <span className="text-xs text-muted-foreground">$150-300/hr</span>
                </div>
              </td>
              <td className="p-5 text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-red-500 text-xl">✗</span>
                  <span className="text-xs text-muted-foreground">Not available</span>
                </div>
              </td>
              <td className="p-5 text-center">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-green-600">Pro plan</span>
                </div>
              </td>
            </tr>
            <tr className="border-b-2 border-border bg-primary/5 hover:bg-primary/10 transition-colors">
              <td className="p-5 font-bold text-base">Price (3,000 txns)</td>
              <td className="p-5 text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl font-bold">$299</span>
                  <span className="text-xs text-muted-foreground">+ $50-100 for filing</span>
                </div>
              </td>
              <td className="p-5 text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl font-bold">$279</span>
                  <span className="text-xs text-muted-foreground">+ $50-100 for filing</span>
                </div>
              </td>
              <td className="p-5 text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-3xl font-black text-primary">$99</span>
                  <span className="text-xs font-bold text-green-600">Filing included</span>
                </div>
              </td>
            </tr>
            <tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
              <td className="p-5 font-bold text-base">Price (10,000+ txns)</td>
              <td className="p-5 text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl font-bold">$599</span>
                  <span className="text-xs text-muted-foreground">+ $50-100 for filing</span>
                </div>
              </td>
              <td className="p-5 text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl font-bold">$399</span>
                  <span className="text-xs text-muted-foreground">+ $50-100 for filing</span>
                </div>
              </td>
              <td className="p-5 text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-3xl font-black text-primary">$199</span>
                  <span className="text-xs font-bold text-green-600">Filing included</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-card border-2 border-primary rounded-xl p-8 my-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-4">
            <DollarSign className="w-6 h-6 text-primary" />
            <span className="text-2xl font-black text-primary">Total Savings Calculator</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-sm text-muted-foreground mb-2">CoinTracker Total</div>
            <div className="text-3xl font-bold text-red-600 mb-1">$349-$649</div>
            <div className="text-xs text-muted-foreground">Software + filing</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-sm text-muted-foreground mb-2">Koinly Total</div>
            <div className="text-3xl font-bold text-orange-600 mb-1">$329-$449</div>
            <div className="text-xs text-muted-foreground">Software + filing</div>
          </div>
          <div className="text-center p-6 bg-primary/10 rounded-lg border-2 border-primary">
            <div className="text-sm text-primary font-bold mb-2">PromptTax Total</div>
            <div className="text-3xl font-black text-primary mb-1">$99-$199</div>
            <div className="text-xs font-bold text-green-600">All-in-one price</div>
          </div>
        </div>
        <div className="text-center pt-6 border-t-2 border-border">
          <div className="text-sm font-semibold text-muted-foreground mb-2">YOUR SAVINGS</div>
          <div className="text-4xl font-black text-primary mb-2">$230 - $450</div>
          <p className="text-muted-foreground text-sm">
            Same crypto tax features + full 1040 filing + CPA support for <strong>66% less</strong>
          </p>
        </div>
      </div>

      <h2>Real User Results: 2025 Tax Season</h2>

      <p>
        Don't just take our word for it. Here are real results from users who switched to PromptTax:
      </p>

      <div className="bg-card border border-border rounded-lg p-6 my-8">
        <h3 className="font-bold mb-4">Real Results</h3>
        <div className="space-y-4 text-sm">
          <div className="flex justify-between items-center pb-3 border-b border-border">
            <div>
              <div className="font-medium mb-1">DeFi Trader (8,400 txns)</div>
              <div className="text-muted-foreground">Was: $728, 22 hrs</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-primary">$199, 45 min</div>
              <div className="text-xs text-primary">+$3,100 tax savings</div>
            </div>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-border">
            <div>
              <div className="font-medium mb-1">Casual Investor (140 txns)</div>
              <div className="text-muted-foreground">Was: Manual, 6 hrs</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-primary">$99, 12 min</div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium mb-1">NFT Flipper (620 txns)</div>
              <div className="text-muted-foreground">Was: $408, 14 hrs</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-primary">$199, 30 min</div>
            </div>
          </div>
        </div>
      </div>

      <h2>Security & Privacy: Your Data is Safe</h2>

      <p>
        We know you're concerned about connecting your exchange accounts. Here's how we protect you:
      </p>

      <div className="bg-card border border-border rounded-lg p-6 my-8">
        <h3 className="font-bold mb-4">Security & Privacy</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium">Bank-level encryption</div>
              <div className="text-muted-foreground">Same tech as Plaid</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium">Zero-knowledge</div>
              <div className="text-muted-foreground">AI never sees your SSN</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Key className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium">Encrypted tokens</div>
              <div className="text-muted-foreground">Fernet encryption</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ClipboardList className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium">SOC 2 Type II</div>
              <div className="text-muted-foreground">In progress Q2 2026</div>
            </div>
          </div>
        </div>
      </div>

      <h2>Get Started in 3 Simple Steps</h2>

      <div className="bg-card border border-border rounded-lg p-6 my-8">
        <h2 className="text-xl font-bold mb-4">Get Started</h2>
        <div className="space-y-3 text-sm">
          <div className="flex gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">1</div>
            <div>
              <div className="font-medium">Create account at prompt.tax</div>
              <div className="text-muted-foreground">No credit card required</div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">2</div>
            <div>
              <div className="font-medium">Connect via API auto-sync or upload CSV</div>
              <div className="text-muted-foreground">One-click OAuth2 API sync or manual CSV upload</div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">3</div>
            <div>
              <div className="font-medium">Review and file</div>
              <div className="text-muted-foreground">AI handles the rest</div>
            </div>
          </div>
        </div>
      </div>

 
      <h2>Why This Matters: The IRS is Watching</h2>

      <p>
        The IRS is cracking down on crypto taxes. In 2025, they added a direct question to Form 1040:
      </p>

      <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg p-6 my-6">
        <p className="italic text-center font-semibold">
          "At any time during 2025, did you receive, sell, exchange, or otherwise dispose of any 
          financial interest in virtual currency?"
        </p>
      </div>

      <p>
        <strong>Saying "yes" triggers scrutiny.</strong> You need accurate records. You need proper 
        Form 8949 documentation. You need to show your work.
      </p>

      <p>
        Traditional crypto tax software costs too much and still requires manual work. PromptTax uses 
        AI + auto-sync to make crypto taxes as simple as filing a W-2—at 70% lower cost.
      </p>

      <p>
        <strong>The 2026 tax season starts in just a few weeks.</strong> Don't wait until April to 
        panic about thousands of transactions spread across multiple exchanges.
      </p>

      <p className="text-xl font-bold my-8 text-center">
        Start now. File smart. Save time and money.
      </p>
 

      <style>{`
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          height: 8px;
          border-radius: 4px;
          outline: none;
          background: linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) 50%, hsl(var(--muted)) 50%, hsl(var(--muted)) 100%);
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: hsl(var(--primary));
          cursor: pointer;
          border: 4px solid hsl(var(--background));
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }

        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: hsl(var(--primary));
          cursor: pointer;
          border: 4px solid hsl(var(--background));
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }

        .pricing-card {
          cursor: pointer;
          transition: all 0.2s;
        }

        .pricing-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
      `}</style>
    </BlogPostTemplate>
  );
}
