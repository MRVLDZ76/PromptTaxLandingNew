import BlogPostTemplate from '@/components/BlogPostTemplate';
import { BlogPostMetadata } from '@/blog/types';
import { useEffect } from 'react';

interface K1BlogPostProps {
  metadata: BlogPostMetadata;
}

export default function K1BlogPost({ metadata }: K1BlogPostProps) {
  useEffect(() => {
    // Initialize interactive components after DOM loads
    const initializeInteractives = () => {
      // Ownership slider logic
      const slider = document.getElementById('ownershipSlider') as HTMLInputElement;
      const display = document.getElementById('ownershipDisplay');
      const calcShare = document.getElementById('calculatedShare');
      const ownershipChartCanvas = document.getElementById('ownershipChart') as HTMLCanvasElement;
      const allocationChartCanvas = document.getElementById('allocationChart') as HTMLCanvasElement;

      if (!slider || !display || !calcShare) return;

      const totalIncome = 1000000;
      let ownershipChart: any = null;
      let allocationChart: any = null;

      // Initialize charts if Chart.js is available
      if (typeof window !== 'undefined' && (window as any).Chart) {
        const Chart = (window as any).Chart;

        // Ownership Doughnut Chart
        if (ownershipChartCanvas) {
          ownershipChart = new Chart(ownershipChartCanvas.getContext('2d'), {
            type: 'doughnut',
            data: {
              labels: ['Your Share', 'Other Partners'],
              datasets: [{
                data: [25, 75],
                backgroundColor: ['#0065a4', '#cbd5e1'],
                borderWidth: 0,
                hoverOffset: 4
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { position: 'bottom' },
                tooltip: {
                  callbacks: {
                    label: function(context: any) {
                      return context.label + ': ' + context.raw + '%';
                    }
                  }
                }
              }
            }
          });
        }

        // Allocation Bar Chart
        if (allocationChartCanvas) {
          allocationChart = new Chart(allocationChartCanvas.getContext('2d'), {
            type: 'bar',
            data: {
              labels: ['Entity Total', 'Your K-1 Share'],
              datasets: [{
                label: 'Ordinary Income ($)',
                data: [1000000, 250000],
                backgroundColor: ['#64748b', '#0065a4'],
                borderRadius: 4
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    callback: function(value: any) { 
                      return '$' + value.toLocaleString(); 
                    }
                  }
                }
              },
              plugins: {
                legend: { display: false }
              }
            }
          });
        }
      }

      // Slider event listener
      slider.addEventListener('input', (e) => {
        const pct = parseInt((e.target as HTMLInputElement).value);
        const myShare = totalIncome * (pct / 100);
        
        if (display) display.innerText = pct + "%";
        if (calcShare) calcShare.innerText = "$" + myShare.toLocaleString();

        // Update charts
        if (ownershipChart) {
          ownershipChart.data.datasets[0].data = [pct, 100 - pct];
          ownershipChart.update();
        }

        if (allocationChart) {
          allocationChart.data.datasets[0].data = [totalIncome, myShare];
          allocationChart.update();
        }
      });

      // Interactive K-1 Form Box Selection
      const boxes = document.querySelectorAll('.k1-box');
      boxes.forEach(box => {
        box.addEventListener('click', () => {
          boxes.forEach(b => b.classList.remove('active'));
          box.classList.add('active');

          const boxNum = box.getAttribute('data-box');
          const panelPlaceholder = document.getElementById('panel-placeholder');
          const panelContent = document.getElementById('panel-content');
          const panelNumber = document.getElementById('panel-number');
          const panelTitle = document.getElementById('panel-title');
          const panelDef = document.getElementById('panel-def');
          const panelImpact = document.getElementById('panel-impact');
          const panelReport = document.getElementById('panel-report');

          const boxDataMap: Record<string, any> = {
            '1': { title: "Ordinary Business Income", def: "Income (or loss) from the partnership's main trade or business operations.", impact: "Taxed at your ordinary income tax rates. May be subject to Self-Employment Tax (15.3%) if you are an active partner.", report: "Schedule E (Form 1040), Part II" },
            '2': { title: "Net Rental Real Estate", def: "Income or loss from rental real estate activities.", impact: "Generally considered 'passive' income. Losses may be limited by the Passive Activity Loss rules unless you are a Real Estate Professional.", report: "Schedule E (Form 1040), Part II" },
            '5': { title: "Interest Income", def: "Interest earned by the partnership (e.g., from bank accounts).", impact: "Taxed as ordinary income (Portfolio Income). Not subject to Self-Employment tax.", report: "Schedule B (Form 1040)" },
            '13': { title: "Other Deductions", def: "Various deductions such as charitable contributions, Section 179 deductions, etc.", impact: "Deductibility depends on the specific code. Charitable contributions flow to Schedule A.", report: "See Partner's Instructions for specific Code" },
            '19': { title: "Distributions", def: "Cash or property actually paid out to you during the year.", impact: "Generally NOT taxable unless the distribution exceeds your adjusted basis in the partnership.", report: "Not reported as income (Informational)." },
            '20': { title: "Other Information", def: "A catch-all for items affecting your tax return. Commonly includes Section 199A info (Code Z).", impact: "Highly variable. Code Z is critical for the 20% Qualified Business Income deduction.", report: "See Partner's Instructions." }
          };

          const data = boxDataMap[boxNum || '1'];
          
          if (panelPlaceholder) panelPlaceholder.classList.add('hidden');
          if (panelContent) panelContent.classList.remove('hidden');
          if (panelNumber) panelNumber.innerText = boxNum || '1';
          if (panelTitle) panelTitle.innerText = data.title;
          if (panelDef) panelDef.innerText = data.def;
          if (panelImpact) panelImpact.innerText = data.impact;
          if (panelReport) panelReport.innerText = data.report;
        });
      });

      // Code Decoder Search
      const codeSearch = document.getElementById('codeSearch') as HTMLInputElement;
      const codeList = document.getElementById('codeList');
      
      const k1Codes = [
        { box: "13", code: "A", desc: "Cash Contributions (50%)" },
        { box: "13", code: "K", desc: "Section 179 Deduction" },
        { box: "13", code: "M", desc: "Amounts paid for medical insurance" },
        { box: "20", code: "A", desc: "Investment Income" },
        { box: "20", code: "N", desc: "Interest expense for corporate partners" },
        { box: "20", code: "V", desc: "Unrelated business taxable income (UBTI)" },
        { box: "20", code: "Z", desc: "Section 199A Information (QBI Deduction)" },
        { box: "20", code: "AH", desc: "Gross receipts for section 59A(e)" },
        { box: "20", code: "AI", desc: "Net Investment Income Info" }
      ];

      const renderCodes = (filter = "") => {
        if (!codeList) return;
        
        codeList.innerHTML = "";
        const term = filter.toLowerCase();
        const filtered = k1Codes.filter(item => 
          item.code.toLowerCase().includes(term) || 
          item.desc.toLowerCase().includes(term) ||
          item.box.includes(term)
        );

        if (filtered.length === 0) {
          codeList.innerHTML = '<div class="p-4 text-center text-muted-foreground">No codes found</div>';
          return;
        }

        filtered.forEach(item => {
          const row = document.createElement('div');
          row.className = "flex items-center p-4 border-b border-border hover:bg-muted transition cursor-pointer";
          row.innerHTML = `
            <div class="flex-shrink-0 w-16 text-center">
              <span class="block text-xs text-muted-foreground font-bold uppercase">Box ${item.box}</span>
              <span class="block text-lg font-bold text-primary">${item.code}</span>
            </div>
            <div class="ml-4">
              <p class="text-foreground font-medium">${item.desc}</p>
            </div>
          `;
          codeList.appendChild(row);
        });
      };

      if (codeSearch) {
        codeSearch.addEventListener('input', (e) => {
          renderCodes((e.target as HTMLInputElement).value);
        });
      }

      renderCodes();
    };

    // Load Chart.js if not already loaded
    if (typeof window !== 'undefined' && !(window as any).Chart) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
      script.onload = () => {
        setTimeout(initializeInteractives, 100);
      };
      document.head.appendChild(script);
    } else {
      initializeInteractives();
    }

    return () => {
      // Cleanup charts on unmount
      if (typeof window !== 'undefined' && (window as any).Chart) {
        const Chart = (window as any).Chart;
        Chart.getChart('ownershipChart')?.destroy();
        Chart.getChart('allocationChart')?.destroy();
      }
    };
  }, []);

  const htmlContent = `
    <style>
      .chart-container {
        position: relative;
        width: 100%;
        height: 300px;
        margin: 0 auto;
      }
      
      .k1-box {
        transition: all 0.2s ease;
        cursor: pointer;
      }
      
      .k1-box:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        border-color: hsl(var(--primary));
      }
      
      .k1-box.active {
        background-color: hsl(var(--primary) / 0.1);
        border-color: hsl(var(--primary));
        border-width: 2px;
      }

      .lead {
        font-size: 1.25rem;
        line-height: 1.8;
        font-weight: 400;
      }

      .hero-image-container {
        position: relative;
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-radius: 1rem;
        margin: 2rem 0;
      }

      .hero-image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    </style>

    <p class="lead text-xl">
      If you're a crypto investor in partnerships, DeFi protocols, or S-corps, you know the pain of Schedule K-1 forms. These cryptic tax documents can turn even the most straightforward tax season into a nightmare. But what if processing K-1 forms could be as simple as uploading a PDF?
    </p>    <h2>The K-1 Challenge: Why Crypto Investors Struggle</h2>
    
    <p>
      Schedule K-1 (Form 1065) is one of the most complex tax documents you'll encounter. It reports your share of income, deductions, and credits from partnerships—and for crypto investors, these partnerships are everywhere:
    </p>

    <ul>
      <li><strong>Crypto mining partnerships</strong> with equipment pooling</li>
      <li><strong>DeFi yield farming protocols</strong> structured as partnerships</li>
      <li><strong>NFT investment DAOs</strong> with multiple members</li>
      <li><strong>Staking validators</strong> operating as pass-through entities</li>
      <li><strong>Real estate tokenization</strong> partnerships</li>
    </ul>

    <p>
      Each K-1 form contains dozens of boxes with obscure codes (Code Z, anyone?), passive vs. non-passive classifications, and multi-state allocations. Missing a single detail can trigger audits or leave thousands in deductions on the table.
    </p>

    <blockquote>
      <p>"I received 4 K-1 forms from different crypto partnerships last year. It took my CPA 8 hours just to enter the data into their system—and that was before any actual tax planning."</p>
      <footer>— Sarah K., Crypto Investor</footer>
    </blockquote>

    <h2>How PromptTax Transforms K-1 Processing</h2>

    <p>
      PromptTax uses cutting-edge AI technology to turn K-1 chaos into clarity. Here's how our system works—and why it's a game-changer for the 2026 tax season:
    </p>

    <!-- INTERACTIVE SIMULATOR: Pass-Through Concept -->
    <div class="my-12 p-8 bg-gradient-to-br from-muted via-muted to-primary/5 rounded-xl border border-border shadow-lg">
      <div class="mb-8 text-center">
        <h3 class="text-2xl font-bold text-foreground mb-2">💡 Interactive Demo: The "Pass-Through" Concept</h3>
        <p class="text-muted-foreground">
          Partnerships don't pay income tax. Instead, the income "flows through" to partners based on ownership. 
          <strong>Adjust the slider below</strong> to see how a hypothetical <strong>$1,000,000</strong> profit is allocated to your K-1.
        </p>
      </div>

      <!-- ROW 1: Controls (Full Width) -->
      <div class="mb-8">
        <div class="bg-card p-8 rounded-xl shadow-sm border border-border max-w-3xl mx-auto">
          <h4 class="font-bold text-xl mb-6 text-foreground text-center">Adjust Your Ownership Scenario</h4>
          
          <label class="block text-sm font-medium text-muted-foreground mb-3 text-center">Your Ownership Interest</label>
          <div class="flex items-center space-x-6 mb-8">
            <input 
              type="range" 
              min="1" 
              max="100" 
              value="25" 
              class="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer" 
              id="ownershipSlider"
              style="accent-color: hsl(var(--primary))"
            >
            <span class="text-3xl font-bold text-primary w-20 text-right" id="ownershipDisplay">25%</span>
          </div>

          <div class="bg-gradient-to-r from-muted to-muted/50 p-6 rounded-lg space-y-4 border border-border">
            <div class="flex justify-between text-base">
              <span class="text-muted-foreground">Total Entity Income:</span>
              <span class="font-bold text-foreground text-lg">$1,000,000</span>
            </div>
            <div class="h-px bg-border"></div>
            <div class="flex justify-between text-lg">
              <span class="text-foreground font-semibold">Your K-1 Income:</span>
              <span class="font-bold text-primary text-2xl" id="calculatedShare">$250,000</span>
            </div>
          </div>
          <p class="text-xs text-muted-foreground mt-6 italic text-center">
            *In this simplified example, we assume all income is "Ordinary Business Income" (Box 1).
          </p>
        </div>
      </div>

      <!-- ROW 2: Charts (Side by Side) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Chart 1: Ownership -->
        <div class="bg-card p-6 rounded-xl shadow-md border border-border">
          <h5 class="text-base font-semibold text-muted-foreground text-center mb-4">Entity Ownership Structure</h5>
          <div class="chart-container" style="height: 350px;">
            <canvas id="ownershipChart"></canvas>
          </div>
          <p class="text-xs text-muted-foreground text-center mt-4">Doughnut chart showing partner ownership split</p>
        </div>

        <!-- Chart 2: Flow of Funds -->
        <div class="bg-card p-6 rounded-xl shadow-md border border-border">
          <h5 class="text-base font-semibold text-muted-foreground text-center mb-4">Income Allocation</h5>
          <div class="chart-container" style="height: 350px;">
            <canvas id="allocationChart"></canvas>
          </div>
          <p class="text-xs text-muted-foreground text-center mt-4">Bar chart showing how entity income flows to your K-1</p>
        </div>
      </div>
    </div>

    <h3>1. Vision LLM Extraction: Upload and Go</h3>

    <p>
      Forget manual data entry. Upload your K-1 PDF, and our Vision Language Model (VLM) instantly extracts:
    </p>

    <!-- VISUAL UPLOAD PROCESS -->
    <div class="my-8 p-6 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 rounded-xl border border-slate-700 shadow-xl">
      <div class="text-center mb-6">
        <p class="text-slate-300 text-sm mb-4">Upload your K-1 Partnership or S-Corp form for automated processing</p>
        
        <!-- What happens next info -->
        <div class="bg-slate-800/50 dark:bg-slate-900/50 rounded-lg p-4 mb-6 border border-slate-700/50">
          <div class="flex items-center justify-center mb-3">
            <svg class="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
            </svg>
            <h4 class="text-white font-semibold">What happens next?</h4>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div class="flex items-start">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">1</div>
              <div>
                <p class="text-white font-medium text-sm mb-1">AI Extraction</p>
                <p class="text-slate-400 text-xs">Our Vision LLM extracts all K-1 fields with confidence scoring</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold mr-3">2</div>
              <div>
                <p class="text-white font-medium text-sm mb-1">Review & Correct</p>
                <p class="text-slate-400 text-xs">Review extracted data and correct any low-confidence fields</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-3">3</div>
              <div>
                <p class="text-white font-medium text-sm mb-1">3-Test Validation</p>
                <p class="text-slate-400 text-xs">Answer adaptive questions for Basis, At-Risk, and Passive tests</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Upload Area -->
        <div class="border-2 border-dashed border-slate-600 rounded-xl p-12 bg-slate-800/30 hover:border-slate-500 hover:bg-slate-800/50 transition-all cursor-pointer">
          <div class="flex flex-col items-center">
            <svg class="w-16 h-16 text-slate-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
            <p class="text-white font-semibold text-lg mb-2">Drop your K-1 PDF here</p>
            <p class="text-slate-400 text-sm mb-4">or</p>
            <button class="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors border border-slate-600">
              Browse Files
            </button>
            <p class="text-slate-500 text-xs mt-4">PDF only • Maximum 10MB</p>
          </div>
        </div>

        <!-- Supported Forms -->
        <div class="mt-6 flex items-center justify-center">
          <svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          <div class="text-left">
            <p class="text-white text-sm font-semibold">Supported K-1 Forms</p>
            <p class="text-slate-400 text-xs">• Schedule K-1 (Form 1065) - Partnership Income</p>
            <p class="text-slate-400 text-xs">• Schedule K-1 (Form 1120-S) - S Corporation Income</p>
          </div>
        </div>
      </div>
    </div>

    <ul>
      <li>Partnership details (name, EIN, tax year)</li>
      <li>All income and loss amounts from Part III boxes</li>
      <li>Passive vs. non-passive classifications</li>
      <li>Special codes (Box 13 and Box 20)</li>
      <li>State allocations and credits</li>
    </ul>

    <p>
      Our AI reads your K-1 like an experienced CPA—identifying entity names, parsing amounts with parentheses (losses), and handling multi-page statements. <strong>Average extraction time: 5-8 seconds.</strong>
    </p>

    <h3>2. Intelligent Review: Verify Before You File</h3>

    <p>
      Before processing, PromptTax shows you exactly what was extracted in an easy-to-read format. You can:
    </p>

    <!-- REVIEW INTERFACE VISUAL -->
    <div class="my-8 rounded-xl overflow-hidden border-2 border-border shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900">
      <div class="p-8">
        <!-- Header -->
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-2xl font-bold text-white">Review Extracted Data</h3>
          <div class="flex gap-2">
            <span class="px-3 py-1 bg-blue-500/20 border border-blue-500 text-blue-400 rounded-md text-sm">K-1 (Form 1065)</span>
            <span class="px-3 py-1 bg-amber-500/20 border border-amber-500 text-amber-400 rounded-md text-sm">4 Low Confidence Fields</span>
          </div>
        </div>
        
        <!-- Progress Bar -->
        <div class="mb-6">
          <div class="flex justify-between text-sm text-slate-400 mb-2">
            <span>Review Progress</span>
            <span>20 / 24 fields verified</span>
          </div>
          <div class="w-full bg-slate-700 rounded-full h-2">
            <div class="bg-blue-500 h-2 rounded-full" style="width: 83%"></div>
          </div>
        </div>

        <!-- Alert -->
        <div class="bg-amber-900/30 border-l-4 border-amber-500 p-4 mb-6 rounded-r">
          <div class="flex items-center">
            <svg class="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-amber-200 text-sm">Please review the highlighted fields below. They were extracted with low confidence and may require correction.</span>
          </div>
        </div>

        <!-- Sample Fields -->
        <div class="space-y-4">
          <!-- Partner Info -->
          <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <div class="flex items-center justify-between mb-2">
              <label class="text-sm text-slate-400 flex items-center gap-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                Partner/Shareholder Name <span class="text-red-400">*</span>
              </label>
              <span class="text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded">95% confidence</span>
            </div>
            <input type="text" value="John Smith" readonly class="w-full bg-slate-900 border border-slate-600 text-white px-3 py-2 rounded" />
          </div>

          <!-- Entity Name -->
          <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <div class="flex items-center justify-between mb-2">
              <label class="text-sm text-slate-400 flex items-center gap-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Entity Name <span class="text-red-400">*</span>
              </label>
              <span class="text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded">97% confidence</span>
            </div>
            <input type="text" value="ABC Partnership LLC" readonly class="w-full bg-slate-900 border border-slate-600 text-white px-3 py-2 rounded" />
          </div>

          <!-- Entity EIN (Low Confidence) -->
          <div class="bg-amber-900/20 border-2 border-amber-500/50 rounded-lg p-4">
            <div class="flex items-center justify-between mb-2">
              <label class="text-sm text-amber-200 flex items-center gap-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                Entity EIN <span class="text-red-400">*</span>
              </label>
              <span class="text-xs text-amber-400 bg-amber-900/50 px-2 py-1 rounded border border-amber-600">65% confidence</span>
            </div>
            <div class="flex items-center gap-2">
              <input type="text" value="12-3456789" class="flex-1 bg-slate-900 border-2 border-amber-500/50 text-white px-3 py-2 rounded" />
              <button class="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Action Button -->
        <div class="mt-6 flex justify-end">
          <button class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2">
            Continue to Interview
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
          </button>
        </div>
      </div>
      
      <div class="bg-muted p-4 border-t border-border">
        <p class="text-sm text-muted-foreground text-center">
          <strong>Interface Preview:</strong> PromptTax review screen showing extracted K-1 data with AI confidence scores. 
          Low-confidence fields (like EIN at 65%) are highlighted in amber for manual verification.
        </p>
      </div>
    </div>

    <ul>
      <li>Verify entity name and EIN match your records</li>
      <li>Confirm all income/loss amounts are correct</li>
      <li>Edit any field if the AI missed something</li>
      <li>Add notes for your tax preparer</li>
    </ul>

    <p>
      This human-in-the-loop approach ensures accuracy while maintaining the speed of automation.
    </p>

    <h3>3. Adaptive Interview: Context-Aware Questions</h3>

    <p>
      Not all K-1 forms are created equal. PromptTax asks <em>only the questions that matter</em> for your specific situation:
    </p>

    <div class="bg-primary/5 p-6 rounded-lg border-l-4 border-primary my-6">
      <h4 class="text-lg font-bold mb-3">Example: Crypto Mining Partnership K-1</h4>
      <p class="mb-2"><strong>PromptTax detects:</strong> Ordinary business loss ($45,000), significant at-risk concerns</p>
      <p class="mb-3"><strong>Questions asked:</strong></p>
      <ol class="list-decimal pl-6 space-y-2">
        <li>What is your adjusted basis in this partnership? (Determines if you can deduct the loss)</li>
        <li>How much personal capital have you contributed? (At-risk limitation)</li>
        <li>Did you materially participate in mining operations? (Passive vs. active classification)</li>
        <li>Were you paid any guaranteed payments? (Self-employment tax implications)</li>
      </ol>
    </div>

    <p>
      For a simple rental real estate K-1 with passive income? You might only see 2-3 questions. The interview adapts to complexity.
    </p>

    <h3>4. The 3-Test Validation: Automated Loss Limitation Checks</h3>

    <p>
      This is where PromptTax truly shines. K-1 losses aren't automatically deductible—they must pass three IRS tests:
    </p>

    <!-- INTERACTIVE K-1 FORM SIMULATOR -->
    <div class="my-12 p-8 bg-gradient-to-br from-card via-card to-muted rounded-xl border border-border shadow-lg">
      <div class="mb-8 text-center">
        <h4 class="text-2xl font-bold text-foreground mb-2">🔍 Interactive Demo: Decoding Part III</h4>
        <p class="text-muted-foreground max-w-3xl mx-auto">
          Part III is the heart of the K-1—it lists specific types of income, deductions, and credits. 
          <strong class="text-primary">Click on any box below</strong> to understand what it means and where it goes on your Form 1040.
        </p>
      </div>

      <!-- ROW 1: The Form Simulation (Full Width) -->
      <div class="mb-8">
        <div class="bg-muted/30 p-8 rounded-xl border-2 border-border font-mono text-sm max-w-4xl mx-auto shadow-md">
          <div class="flex justify-between items-end border-b-2 border-foreground pb-3 mb-6">
            <div>
              <span class="font-bold text-xl text-foreground">Part III</span>
              <span class="ml-3 text-muted-foreground text-sm">Partner's Share of Current Year Income</span>
            </div>
            <span class="text-xs text-primary font-bold">Click any box below ↓</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <!-- Box 1 -->
            <div class="k1-box bg-card p-4 border-2 border-border rounded-lg relative hover:shadow-lg" data-box="1">
              <span class="absolute top-2 left-2 text-xs font-bold text-muted-foreground">Box 1</span>
              <div class="mt-6 flex flex-col">
                <span class="text-xs text-foreground mb-2">Ordinary business income</span>
                <span class="font-bold text-primary text-lg">$120,000</span>
              </div>
            </div>
            
            <!-- Box 2 -->
            <div class="k1-box bg-card p-4 border-2 border-border rounded-lg relative hover:shadow-lg" data-box="2">
              <span class="absolute top-2 left-2 text-xs font-bold text-muted-foreground">Box 2</span>
              <div class="mt-6 flex flex-col">
                <span class="text-xs text-foreground mb-2">Net rental real estate</span>
                <span class="font-bold text-destructive text-lg">($5,000)</span>
              </div>
            </div>
            
            <!-- Box 5 -->
            <div class="k1-box bg-card p-4 border-2 border-border rounded-lg relative hover:shadow-lg" data-box="5">
              <span class="absolute top-2 left-2 text-xs font-bold text-muted-foreground">Box 5</span>
              <div class="mt-6 flex flex-col">
                <span class="text-xs text-foreground mb-2">Interest income</span>
                <span class="font-bold text-primary text-lg">$250</span>
              </div>
            </div>
            
            <!-- Box 13 -->
            <div class="k1-box bg-card p-4 border-2 border-border rounded-lg relative hover:shadow-lg" data-box="13">
              <span class="absolute top-2 left-2 text-xs font-bold text-muted-foreground">Box 13</span>
              <div class="mt-6 flex flex-col">
                <span class="text-xs text-foreground mb-2">Other deductions</span>
                <span class="font-bold text-muted-foreground text-sm">See Statement</span>
              </div>
            </div>
            
            <!-- Box 19 -->
            <div class="k1-box bg-card p-4 border-2 border-border rounded-lg relative hover:shadow-lg" data-box="19">
              <span class="absolute top-2 left-2 text-xs font-bold text-muted-foreground">Box 19</span>
              <div class="mt-6 flex flex-col">
                <span class="text-xs text-foreground mb-2">Distributions</span>
                <span class="font-bold text-primary text-lg">$50,000</span>
              </div>
            </div>
            
            <!-- Box 20 -->
            <div class="k1-box bg-card p-4 border-2 border-border rounded-lg relative hover:shadow-lg" data-box="20">
              <span class="absolute top-2 left-2 text-xs font-bold text-muted-foreground">Box 20</span>
              <div class="mt-6 flex flex-col">
                <span class="text-xs text-foreground mb-2">Other information</span>
                <div class="text-xs text-muted-foreground space-y-1 mt-1">
                  <div class="flex justify-between"><span>Code Z</span> <span>$15,000</span></div>
                  <div class="flex justify-between"><span>Code N</span> <span>$1,200</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ROW 2: Explanation Panel (Centered, Medium Width) -->
      <div class="max-w-2xl mx-auto">
        <div class="bg-card rounded-xl shadow-xl border-2 border-primary/30 p-8 relative overflow-hidden min-h-[300px]">
          <div class="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-primary/50"></div>
          
          <!-- Initial State -->
          <div id="panel-placeholder" class="h-full flex flex-col justify-center items-center text-center py-8">
            <div class="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-pulse">
              <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
              </svg>
            </div>
            <p class="text-xl text-muted-foreground font-medium mb-2">Select a K-1 box above</p>
            <p class="text-sm text-muted-foreground">Click any box to view its definition, tax impact, and reporting requirements</p>
          </div>

          <!-- Dynamic Content -->
          <div id="panel-content" class="hidden">
            <div class="flex items-center mb-6">
              <div id="panel-number" class="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-2xl mr-4 flex-shrink-0">1</div>
              <h4 id="panel-title" class="text-2xl font-bold text-foreground">Box Title</h4>
            </div>
            
            <div class="space-y-5">
              <div>
                <h5 class="text-xs font-bold uppercase text-muted-foreground tracking-wider mb-2 flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                  </svg>
                  Definition
                </h5>
                <p id="panel-def" class="text-foreground leading-relaxed">Definition text</p>
              </div>
              
              <div class="bg-muted/50 p-5 rounded-lg border border-border">
                <h5 class="text-xs font-bold uppercase text-muted-foreground tracking-wider mb-2 flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path>
                  </svg>
                  Tax Impact
                </h5>
                <p id="panel-impact" class="text-foreground text-sm leading-relaxed">Impact text</p>
              </div>

              <div>
                <h5 class="text-xs font-bold uppercase text-muted-foreground tracking-wider mb-2 flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"></path>
                  </svg>
                  Where to Report
                </h5>
                <div class="flex items-center mt-2">
                  <span class="bg-primary/20 text-primary text-xs px-3 py-1.5 rounded-md font-mono mr-3 font-bold">Form 1040</span>
                  <p id="panel-report" class="text-foreground font-semibold">Report location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 text-center">
        <p class="text-sm text-muted-foreground italic bg-primary/5 inline-block px-6 py-3 rounded-lg border border-primary/20">
          💡 <strong>Pro tip:</strong> PromptTax automatically extracts all these values using Vision LLM—no manual data entry required!
        </p>
      </div>
    </div>

    <h4><span class="text-primary">Test 1:</span> Basis Limitation (IRC §704)</h4>
    <p>
      Your deductible loss is limited to your adjusted basis in the partnership. PromptTax calculates:
    </p>
    <pre><code>Adjusted Basis = Initial Investment + Share of Income - Distributions - Prior Losses</code></pre>
    <p>
      <strong>Result:</strong> If your loss exceeds basis, it's suspended until future income increases your basis.
    </p>

    <h4><span class="text-primary">Test 2:</span> At-Risk Limitation (IRC §465)</h4>
    <p>
      Even if you have basis, losses are limited to the amount you have "at risk" (real economic exposure). PromptTax checks:
    </p>
    <ul>
      <li>Capital contributed with personal liability</li>
      <li>Non-recourse debt excluded</li>
      <li>Qualified non-recourse financing (real estate exception)</li>
    </ul>
    <p>
      <strong>Result:</strong> Losses exceeding at-risk amount are suspended (Form 6198).
    </p>

    <h4><span class="text-primary">Test 3:</span> Passive Activity Loss (IRC §469)</h4>
    <p>
      The most complex test. If you didn't materially participate, losses are passive and can only offset passive income. PromptTax evaluates:
    </p>
    <ul>
      <li>Material participation tests (7 IRS criteria)</li>
      <li>Real estate professional exception</li>
      <li>Rental real estate special allowance ($25,000)</li>
    </ul>
    <p>
      <strong>Result:</strong> Passive losses are suspended until you have passive income or dispose of the interest (Form 8582).
    </p>

    <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800 my-6">
      <h4 class="text-lg font-bold text-amber-900 dark:text-amber-100 mb-2">🚀 The PromptTax Advantage</h4>
      <p class="text-amber-800 dark:text-amber-200">
        Traditional tax software forces <em>you</em> to calculate these tests manually. PromptTax runs all three tests automatically in <strong>under 2 seconds</strong>, showing you exactly what's deductible, what's suspended, and why.
      </p>
    </div>

    <h2>Real-World Example: Crypto Staking Partnership</h2>

    <p>Let's walk through a real scenario:</p>

    <div class="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700 my-6">
      <h4 class="font-bold mb-3">📄 K-1 Details:</h4>
      <ul class="space-y-1 mb-4">
        <li><strong>Entity:</strong> Ethereum Validators LLC</li>
        <li><strong>EIN:</strong> 12-3456789</li>
        <li><strong>Box 1 (Ordinary Income):</strong> $75,000</li>
        <li><strong>Box 13W (Section 199A QBI):</strong> $75,000</li>
        <li><strong>Your Ownership:</strong> 25%</li>
      </ul>

      <h4 class="font-bold mb-3">🤖 PromptTax Process:</h4>
      <ol class="list-decimal pl-6 space-y-2 mb-4">
        <li><strong>Upload:</strong> K-1 PDF extracted in 6 seconds</li>
        <li><strong>Review:</strong> Confirmed $75,000 ordinary income, non-passive</li>
        <li><strong>Interview:</strong> 4 questions about basis and participation</li>
        <li><strong>Validation:</strong> 
          <ul class="list-disc pl-6 mt-2">
            <li>✅ Basis test: Passed ($100,000 basis &gt; $75,000 income)</li>
            <li>✅ At-risk test: Passed (active participation)</li>
            <li>✅ Passive test: Passed (material participation documented)</li>
          </ul>
        </li>
        <li><strong>Schedule E:</strong> Auto-generated PDF ready for Form 1040</li>
        <li><strong>Section 199A:</strong> $75,000 QBI flagged for 20% deduction</li>
      </ol>

      <h4 class="font-bold mb-2">⏱️ Total Time:</h4>
      <p class="text-2xl font-bold text-primary">4 minutes, 30 seconds</p>
      <p class="text-sm text-muted-foreground mt-1">(vs. 45-90 minutes manual entry + calculations)</p>
    </div>

    <h2>Multi-K1 Aggregation: Handle Complex Portfolios</h2>

    <p>
      Many crypto investors have multiple K-1 forms. PromptTax's Multi-K1 Aggregation automatically:
    </p>

    <ul>
      <li>Combines income/losses from all partnerships</li>
      <li>Separates passive vs. non-passive amounts</li>
      <li>Applies loss limitations across all entities</li>
      <li>Generates consolidated Schedule E (Part II)</li>
      <li>Updates your Form 1040 with total partnership income</li>
    </ul>

    <p>
      Process 5 K-1 forms? No problem. PromptTax handles them all, tracking suspended losses per entity and carrying them forward to next year.
    </p>

    <h2>Why This Matters for Tax Season 2026</h2>

    <p>The 2026 tax season brings new challenges for crypto investors:</p>

    <ol>
      <li><strong>Increased IRS Scrutiny:</strong> Form 1099-DA reporting means your crypto activity is highly visible</li>
      <li><strong>Complex Structures:</strong> More investors are using partnerships and DAOs for tax efficiency</li>
      <li><strong>Multi-State Issues:</strong> DeFi protocols often trigger multi-state K-1 allocations</li>
      <li><strong>CPA Capacity:</strong> Tax professionals are overwhelmed—automation is essential</li>
    </ol>

    <blockquote>
      <p>"PromptTax processed my 3 crypto K-1 forms in less time than it took me to find the PDFs in my email. The 3-test validation caught a suspended loss I would have missed, saving me from an IRS notice."</p>
      <footer>— Michael T., DeFi Investor & CPA</footer>
    </blockquote>

    <h2>Getting Started with PromptTax K-1 Processing</h2>

    <p>Ready to simplify your K-1 chaos? Here's how to get started:</p>

    <ol>
      <li><strong>Sign up for PromptTax</strong> (free tier available for testing)</li>
      <li><strong>Navigate to K-1 Processing</strong> from your dashboard</li>
      <li><strong>Upload your K-1 PDFs</strong> (supports 1065, 1120-S, and 1041)</li>
      <li><strong>Review extracted data</strong> and make any corrections</li>
      <li><strong>Answer adaptive interview questions</strong> (2-5 minutes per K-1)</li>
      <li><strong>Download your Schedule E PDF</strong> ready for e-filing</li>
    </ol>

    <div class="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-xl border border-primary/20 my-8 text-center">
      <h3 class="text-2xl font-bold mb-3">🎯 Special Launch Offer</h3>
      <p class="text-lg mb-4">
        Process your first K-1 form FREE during our 2026 launch. No credit card required.
      </p>
      <p class="text-sm text-muted-foreground mb-6">
        Includes full Vision LLM extraction, 3-test validation, and Schedule E PDF generation
      </p>
      <a href="/request-demo" class="inline-block px-10 py-5 bg-white text-primary rounded-xl hover:bg-gray-100 hover:shadow-2xl transition-all font-bold text-lg shadow-lg transform hover:scale-105">
        Start Processing K-1s Now →
      </a>
    </div>

    <h2>Technical Details: How It Works Under the Hood</h2>

    <p>For the technically curious (CPAs, we're looking at you), here's what makes PromptTax K-1 processing special:</p>

    <h3>Vision Language Model (VLM)</h3>
    <ul>
      <li>Custom K-1 parsing prompts</li>
      <li>Trained on 10,000+ real K-1 forms (anonymized)</li>
      <li>Handles scanned PDFs, multi-page statements, and poor quality images</li>
      <li>95.8% accuracy on Box 1-20 extraction (validated against human review)</li>
    </ul>

    <h3>Adaptive Interview Engine</h3>
    <ul>
      <li>Decision tree with 47 possible questions</li>
      <li>Only asks questions relevant to your K-1's specific boxes</li>
      <li>Pre-fills answers from prior years (basis tracking)</li>
      <li>Validates responses against IRS rules in real-time</li>
    </ul>

    <h3>3-Test Validation Algorithm</h3>
    <ul>
      <li>Implements IRC §704, §465, and §469 in TypeScript</li>
      <li>Calculates adjusted basis using partner's capital account + prior activity</li>
      <li>Applies at-risk rules with qualified non-recourse financing exceptions</li>
      <li>Evaluates all 7 material participation tests for passive activity</li>
      <li>Generates Form 6198 and 8582 when needed (coming Q1 2026)</li>
    </ul>

    <h3>Schedule E PDF Generation</h3>
    <ul>
      <li>IRS-compliant PDF/A format</li>
      <li>Matches official IRS Schedule E layout exactly</li>
      <li>Includes all required supplemental statements</li>
      <li>Ready forprofessional software import</li>
    </ul>

    <h2>What's Next: Roadmap for 2026</h2>

    <p>We're not stopping at K-1 processing. Here's what's coming:</p>

    <ul>
      <li><strong>Q1 2026:</strong> Form 6198 (At-Risk) and Form 8582 (Passive Loss) auto-generation</li>
      <li><strong>Q2 2026:</strong> Multi-state K-1 apportionment and composite returns</li>
      <li><strong>Q2 2026:</strong> S-Corp K-1 (Form 1120-S) support with payroll integration</li>
      <li><strong>Q3 2026:</strong> Trust/Estate K-1 (Form 1041) processing</li>
      <li><strong>Q4 2026:</strong> Multi-year basis tracking and carryforward dashboard</li>
    </ul>

    <!-- INTERACTIVE CODE DECODER -->
    <div class="my-12 p-8 bg-gradient-to-br from-muted via-muted to-primary/5 rounded-xl border border-border shadow-lg">
      <div class="text-center mb-8">
        <h3 class="text-2xl font-bold text-foreground mb-2">📚 Interactive Code Decoder</h3>
        <p class="text-muted-foreground">
          Boxes 13 and 20 use cryptic letter codes. <strong>Search below</strong> to find out what "Code Z" or "Code V" actually means.
        </p>
      </div>

      <div class="bg-card rounded-xl shadow-sm border border-border overflow-hidden max-w-3xl mx-auto">
        <div class="p-4 border-b border-border bg-muted/30">
          <div class="relative">
            <svg class="w-5 h-5 absolute left-3 top-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input 
              type="text" 
              id="codeSearch" 
              placeholder="Search code (e.g., 'Z' or '199A')..." 
              class="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-muted-foreground"
            >
          </div>
        </div>

        <div class="max-h-80 overflow-y-auto" id="codeList">
          <!-- Populated by JavaScript -->
        </div>
      </div>

      <div class="mt-6 text-center">
        <p class="text-sm text-muted-foreground">
          📋 <strong>Did you know?</strong> PromptTax automatically identifies and categorizes all Box 20 codes from your K-1
        </p>
      </div>
    </div>

    <h2>Frequently Asked Questions</h2>

    <h3>Is PromptTax K-1 processing IRS-compliant?</h3>
    <p>
      Yes. Our Schedule E PDFs match the official IRS form layout and include all required information. We follow IRS Publication 541 (Partnerships) and Publication 925 (Passive Activity Loss Rules) exactly.
    </p>

    <h3>Can I use PromptTax if I have multiple K-1 forms?</h3>
    <p>
      Absolutely! Our Multi-K1 Aggregation feature is designed for investors with multiple partnerships. Upload all your K-1s, and we'll consolidate them into a single Schedule E with proper loss limitations applied across all entities.
    </p>

    <h3>What if the AI extracts something incorrectly?</h3>
    <p>
      The Review step lets you verify and edit every field before processing. You're always in control. Our 95.8% accuracy rate means most extractions are perfect, but you can fix any errors instantly.
    </p>

    <h3>Does PromptTax replace my CPA?</h3>
    <p>
      No—we augment your CPA's workflow. PromptTax handles the tedious data entry and calculations, freeing your CPA to focus on tax strategy, planning, and complex situations. Many CPAs use PromptTax to serve more clients efficiently.
    </p>

    <h3>What about data security?</h3>
    <p>
      Your K-1 data is encrypted at rest (AES-256) and in transit (TLS 1.3). We're SOC 2 Type II compliant and never share your tax information with third parties. PDFs are generated on-demand and not stored long-term.
    </p>

    <h3>Can I import PromptTax data into TurboTax or other software?</h3>
    <p>
      Yes! Our Schedule E PDFs can be uploaded to any tax software.
    </p>

    <h2>Join the Tax Automation Revolution</h2>

    <p>
      Schedule K-1 processing doesn't have to be painful. With PromptTax, you get:
    </p>

    <ul>
      <li>⚡ <strong>95% faster</strong> than manual entry</li>
      <li>🎯 <strong>99.2% accuracy</strong> with human verification</li>
      <li>🤖 <strong>Automated compliance</strong> with IRS loss limitation rules</li>
      <li>📄 <strong>Filing-ready PDFs</strong> in minutes, not hours</li>
      <li>💰 <strong>No missed deductions</strong> from suspended losses</li>
    </ul>

    <p>
      The 2026 crypto tax season is here. Don't let K-1 complexity slow you down.
    </p>

    <div class="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-xl border border-primary/20 my-8 text-center shadow-xl">
      <h3 class="text-4xl font-bold mb-6 tracking-tight">Ready to Transform Your K-1 Workflow?</h3>
      <p class="text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto">
        Process K-1 forms in minutes, not hours—with AI-powered precision
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/request-demo" class="inline-block px-10 py-5 bg-white text-primary rounded-xl hover:bg-gray-100 hover:shadow-2xl transition-all font-bold text-lg shadow-lg transform hover:scale-105">
          Schedule a Demo
        </a>
        <a href="/pricing" class="inline-block px-10 py-5 bg-white/20 backdrop-blur-sm text-white border-2 border-white/80 rounded-xl hover:bg-white/30 hover:border-white transition-all font-bold text-lg transform hover:scale-105">
          View Pricing
        </a>
      </div>
      <p class="text-base mt-6 opacity-80 font-light">
        No credit card required • Free tier available • Cancel anytime
      </p>
    </div>

    <hr class="my-8 border-border" />

    <p class="text-sm text-muted-foreground italic">
      <strong>Disclaimer:</strong> This blog post is for informational purposes only and does not constitute tax, legal, or financial advice. The Schedule K-1 processing capabilities described are based on PromptTax's current feature set as of November 2026. Always consult with a qualified tax professional for your specific situation. IRS regulations and requirements are subject to change.
    </p>
  `;

  const post = {
    ...metadata,
    content: htmlContent
  };

  return <BlogPostTemplate post={post} />;
}
