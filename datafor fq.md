'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp, Search, ArrowRight } from 'lucide-react'
import { 
  Bitcoin, 
  FileText, 
  Building2, 
  ScrollText, 
  Users,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  DollarSign,
  Clock,
  Shield
} from 'lucide-react'
import Link from 'next/link'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { DynamicBreadcrumb } from '@/components/dynamic-breadcrumb'

interface FAQItem {
  question: string
  answer: string
  category: 'crypto' | 'k1' | '1040' | 'boir' | 'cpa'
  icon: React.ReactNode
  navigationLink?: string
  navigationLabel?: string
}

const faqData: FAQItem[] = [
  // ============ CRYPTO TAX FAQS ============
  {
    question: 'How do I upload my crypto transaction history?',
    answer: `<p>Upload your transaction history in CSV format:</p>
    <ol>
      <li><strong>Go to the Crypto Tax section</strong> in your dashboard</li>
      <li><strong>Select your exchange</strong> (we support 50+ exchanges including Coinbase, Kraken, Binance, Gemini)</li>
      <li><strong>Upload your CSV file</strong> - we'll automatically detect the exchange format</li>
      <li><strong>Review transactions</strong> - our AI validates all data and flags any errors</li>
    </ol>
    <p>Files are processed in seconds, even with 10,000+ transactions.</p>`,
    category: 'crypto',
    icon: <Bitcoin className="h-5 w-5" />,
    navigationLink: '/freemium/crypto/upload',
    navigationLabel: 'Upload Crypto CSV'
  },
  {
    question: 'What cost basis methods are supported?',
    answer: `<p>We support all IRS-approved cost basis methods:</p>
    <ul>
      <li><strong>FIFO</strong> (First In, First Out) - Most common</li>
      <li><strong>LIFO</strong> (Last In, First Out)</li>
      <li><strong>HIFO</strong> (Highest In, First Out) - Tax optimization</li>
      <li><strong>Specific Identification</strong> - Choose exact coins to sell</li>
      <li><strong>Average Cost</strong> - Weighted average</li>
    </ul>
    <p class="mt-2 text-sm text-yellow-600 dark:text-yellow-400">
      <strong>Important:</strong> Once you file with a method, you must use the same method for that coin in future years.
    </p>`,
    category: 'crypto',
    icon: <TrendingUp className="h-5 w-5" />
  },
  {
    question: 'Does PromptTax detect wash sales?',
    answer: `<p>Yes! Our AI automatically detects wash sales across all your accounts:</p>
    <ul>
      <li><strong>30-day window</strong> - Flags sales where you repurchased within 30 days</li>
      <li><strong>Cross-account tracking</strong> - Checks all your exchanges</li>
      <li><strong>Automatic adjustments</strong> - Disallows losses and adjusts cost basis correctly</li>
      <li><strong>IRS Form 8949 compliance</strong> - Codes wash sales properly (Code W)</li>
    </ul>
    <p class="mt-2">Wash sale rules don't apply to crypto yet (as of 2024), but our system is ready if they become law.</p>`,
    category: 'crypto',
    icon: <AlertCircle className="h-5 w-5" />
  },
  {
    question: 'Can I upload unlimited transactions?',
    answer: `<p>Absolutely! There are no transaction limits with PromptTax:</p>
    <ul>
      <li><strong>Unlimited transactions</strong> - Upload 100,000+ trades without extra fees</li>
      <li><strong>Fast processing</strong> - Even huge files process in under 60 seconds</li>
      <li><strong>Multiple exchanges</strong> - Combine data from dozens of exchanges</li>
      <li><strong>Multi-year support</strong> - Import historical data back to 2014</li>
    </ul>
    <p class="mt-2 text-green-600 dark:text-green-400">
      Compare to TurboTax ($500+ for 3,000 transactions) and TaxAct ($400+ for 4,000 transactions).
    </p>`,
    category: 'crypto',
    icon: <CheckCircle className="h-5 w-5" />
  },
  {
    question: 'What crypto exchanges are supported?',
    answer: `<p>We support <strong>50+ major exchanges</strong> worldwide:</p>
    <ul>
      <li><strong>US Exchanges:</strong> Coinbase, Kraken, Gemini, Binance.US</li>
      <li><strong>Global Exchanges:</strong> Binance, KuCoin, Bitfinex, Huobi</li>
      <li><strong>DeFi Protocols:</strong> Uniswap, Aave, Compound, Curve</li>
      <li><strong>NFT Marketplaces:</strong> OpenSea, Rarible, Magic Eden</li>
      <li><strong>Wallets:</strong> MetaMask, Ledger, Trust Wallet</li>
    </ul>
    <p class="mt-2">Can't find your exchange? Upload a CSV and our AI will auto-detect the format.</p>`,
    category: 'crypto',
    icon: <Building2 className="h-5 w-5" />
  },
  {
    question: 'What IRS forms does PromptTax generate for crypto?',
    answer: `<p>We generate all crypto tax forms automatically:</p>
    <ul>
      <li><strong>Form 8949</strong> - Sales and Other Dispositions of Capital Assets (all transactions listed)</li>
      <li><strong>Schedule D</strong> - Capital Gains and Losses (summary for Form 1040)</li>
      <li><strong>Form 1040 integration</strong> - Your net capital gain/loss flows to your tax return</li>
    </ul>
    <p class="mt-2">Short-term and long-term gains are separated automatically. No manual entry needed!</p>`,
    category: 'crypto',
    icon: <FileText className="h-5 w-5" />
  },
  {
    question: 'How does AI + Human validation work?',
    answer: `<p>Our <strong>hybrid approach</strong> gives you the best of both worlds:</p>
    <ol>
      <li><strong>AI First Pass:</strong> Machine learning algorithms parse your CSV, detect exchange format, calculate gains/losses, and flag edge cases (missing data, wash sales, high-value trades)</li>
      <li><strong>Human CPA Review:</strong> Licensed CPAs review flagged transactions, verify cost basis calculations, ensure IRS compliance, and provide audit defense documentation</li>
      <li><strong>You Stay in Control:</strong> Review all calculations before filing, request revisions anytime, and download audit-ready reports</li>
    </ol>
    <p class="mt-2 text-blue-600 dark:text-blue-400">Result: 99.9% accuracy with same-day turnaround.</p>`,
    category: 'crypto',
    icon: <Users className="h-5 w-5" />
  },
  {
    question: 'Can I compare multiple tax years?',
    answer: `<p>Yes! Our multi-year comparison feature shows:</p>
    <ul>
      <li><strong>Year-over-year trends</strong> - See how your gains/losses changed</li>
      <li><strong>Capital loss carryforward</strong> - Track unused losses from prior years</li>
      <li><strong>Cost basis consistency</strong> - Verify you used the same method each year</li>
      <li><strong>Audit trail</strong> - Complete history for IRS inquiries</li>
    </ul>
    <p class="mt-2">Import data from 2014-present to see your complete crypto tax history.</p>`,
    category: 'crypto',
    icon: <Clock className="h-5 w-5" />
  },
  {
    question: 'What if I made an error after filing?',
    answer: `<p>No problem! We support amendments:</p>
    <ul>
      <li><strong>Request revisions</strong> - Tell us what needs to change</li>
      <li><strong>CPA reviews</strong> - We verify the correction and update forms</li>
      <li><strong>Generate Form 1040-X</strong> - Amended return form with explanations</li>
      <li><strong>E-file or mail</strong> - We guide you through the amendment process</li>
    </ul>
    <p class="mt-2 text-yellow-600 dark:text-yellow-400">
      Amendments can take 16-20 weeks for the IRS to process. We provide tracking support.
    </p>`,
    category: 'crypto',
    icon: <FileText className="h-5 w-5" />
  },
  {
    question: 'How is my crypto data secured?',
    answer: `<p>Your security is our top priority:</p>
    <ul>
      <li><strong>Bank-level encryption</strong> - AES-256 encryption at rest and TLS 1.3 in transit</li>
      <li><strong>Zero-knowledge architecture</strong> - We can't access your raw transaction data</li>
      <li><strong>SOC 2 compliant</strong> - Annual third-party security audits</li>
      <li><strong>No API key storage</strong> - We never store exchange credentials</li>
      <li><strong>GDPR compliant</strong> - Request data deletion anytime</li>
    </ul>
    <p class="mt-2">Your data is as secure as it would be at your bank.</p>`,
    category: 'crypto',
    icon: <Shield className="h-5 w-5" />
  },
  {
    question: 'Does PromptTax support DeFi, NFTs, and staking?',
    answer: `<p>Yes! We handle all advanced crypto activities:</p>
    <ul>
      <li><strong>DeFi:</strong> Liquidity pools, yield farming, flash loans, lending/borrowing</li>
      <li><strong>NFTs:</strong> Minting, buying, selling, royalties (treated as collectibles)</li>
      <li><strong>Staking:</strong> Income recognition at fair market value, cost basis tracking</li>
      <li><strong>Airdrops:</strong> Taxed as ordinary income (unless promotional)</li>
      <li><strong>Mining:</strong> Self-employment income + capital gains on sale</li>
    </ul>
    <p class="mt-2">Our AI understands complex DeFi protocols like Uniswap V3, Curve, and Aave.</p>`,
    category: 'crypto',
    icon: <TrendingUp className="h-5 w-5" />
  },
  {
    question: 'What if my exchange shuts down or I lost my transaction history?',
    answer: `<p>We have recovery options:</p>
    <ul>
      <li><strong>Blockchain reconstruction</strong> - We can rebuild transactions from on-chain data (for public blockchains like Bitcoin, Ethereum)</li>
      <li><strong>Wallet address import</strong> - Import transactions directly from blockchain explorers</li>
      <li><strong>Manual entry</strong> - Add transactions manually if CSV unavailable</li>
      <li><strong>Reasonable estimates</strong> - If records are truly lost, we help estimate cost basis using IRS-approved methods</li>
    </ul>
    <p class="mt-2 text-yellow-600 dark:text-yellow-400">
      <strong>Pro tip:</strong> Download your exchange CSVs quarterly and store backups. Exchanges can shut down without notice (e.g., FTX, Celsius).
    </p>`,
    category: 'crypto',
    icon: <AlertCircle className="h-5 w-5" />
  },
  {
    question: 'How long does crypto tax processing take?',
    answer: `<p>Processing is fast:</p>
    <ul>
      <li><strong>CSV upload:</strong> 10-60 seconds (even for 10,000+ transactions)</li>
      <li><strong>AI analysis:</strong> 2-5 minutes (wash sale detection, gain/loss calculations)</li>
      <li><strong>CPA review:</strong> 2-24 hours (depends on complexity)</li>
      <li><strong>Form generation:</strong> Instant (Form 8949, Schedule D)</li>
    </ul>
    <p class="mt-2 text-green-600 dark:text-green-400">
      Most users complete their crypto taxes in under 30 minutes, start to finish.
    </p>`,
    category: 'crypto',
    icon: <Clock className="h-5 w-5" />
  },
  {
    question: 'Can I lock in my cost basis method?',
    answer: `<p>Yes, and you should!</p>
    <ul>
      <li><strong>IRS Rule:</strong> Once you use a cost basis method (e.g., FIFO) for a specific crypto, you must use that method for that crypto in all future tax years</li>
      <li><strong>PromptTax Memory:</strong> We remember your chosen methods year-over-year</li>
      <li><strong>Consistency Check:</strong> We alert you if you try to switch methods for the same coin</li>
      <li><strong>Multi-Coin Support:</strong> You CAN use different methods for different coins (e.g., FIFO for Bitcoin, HIFO for Ethereum)</li>
    </ul>
    <p class="mt-2 text-blue-600 dark:text-blue-400">
      Choose wisely in your first tax year - it's hard (but possible) to change later with IRS approval.
    </p>`,
    category: 'crypto',
    icon: <FileText className="h-5 w-5" />
  },

  // ============ K-1 FAQS ============
  {
    question: 'What is a Schedule K-1 and who receives one?',
    answer: `<p>A Schedule K-1 reports your share of income, deductions, and credits from a pass-through entity:</p>
    <ul>
      <li><strong>Who gets a K-1:</strong> Partners in partnerships (Form 1065), shareholders in S-Corporations (Form 1120-S), and beneficiaries of estates/trusts (Form 1041)</li>
      <li><strong>What it shows:</strong> Your percentage share of business income/loss, rental income, capital gains, tax credits, and more</li>
      <li><strong>Why it matters:</strong> You must report these amounts on your personal Form 1040, even if you didn't receive cash distributions</li>
    </ul>
    <p class="mt-2 text-yellow-600 dark:text-yellow-400">
      <strong>Common mistake:</strong> Forgetting to file a K-1 because you didn't receive cash. You still owe taxes on your share of the income!
    </p>`,
    category: 'k1',
    icon: <FileText className="h-5 w-5" />,
    navigationLink: '/freemium/k1/upload',
    navigationLabel: 'Upload K-1 Form'
  },
  {
    question: 'How do I upload my K-1 to PromptTax?',
    answer: `<p>Upload your K-1 PDF in seconds:</p>
    <ol>
      <li><strong>Go to the K-1 section</strong> in your dashboard</li>
      <li><strong>Upload the PDF</strong> - We use AI Vision to extract all data from boxes 1-20</li>
      <li><strong>Review extracted data</strong> - Verify entity name, EIN, your name, and income/loss amounts</li>
      <li><strong>Correct low-confidence fields</strong> - We highlight fields that need manual review</li>
    </ol>
    <p class="mt-2">Our AI reads both Form 1065 and 1120-S K-1s automatically. No manual data entry!</p>`,
    category: 'k1',
    icon: <FileText className="h-5 w-5" />
  },
  {
    question: 'What are the 3 tests for deducting K-1 losses?',
    answer: `<p>The IRS requires K-1 losses to pass <strong>3 sequential tests</strong> before you can deduct them:</p>
    <ol>
      <li><strong>Basis Test (IRC §704(d)):</strong> Your loss can't exceed your basis (capital contributions + income - distributions). Excess losses are suspended until basis increases.</li>
      <li><strong>At-Risk Test (IRC §465):</strong> You can only deduct losses to the extent you're "at risk" (money you could actually lose). Nonrecourse debt doesn't count as at-risk.</li>
      <li><strong>Passive Activity Test (IRC §469):</strong> If you didn't materially participate (500+ hours/year), losses are passive and can only offset passive income. Excess losses carry forward indefinitely.</li>
    </ol>
    <p class="mt-2 text-blue-600 dark:text-blue-400">
      PromptTax runs all 3 tests automatically and tells you exactly how much you can deduct.
    </p>`,
    category: 'k1',
    icon: <CheckCircle className="h-5 w-5" />
  },
  {
    question: 'What is "basis" and how is it calculated?',
    answer: `<p>Your basis is your investment in the partnership/S-Corp:</p>
    <ul>
      <li><strong>Starting basis:</strong> Initial capital contribution (cash or property)</li>
      <li><strong>Increases:</strong> Additional capital contributions + your share of income + your share of debt (for partnerships)</li>
      <li><strong>Decreases:</strong> Distributions + your share of losses + your share of nondeductible expenses</li>
    </ul>
    <p class="mt-2"><strong>Example:</strong> You contribute $50,000 cash. The partnership earns $20,000 income (your share). You take a $10,000 distribution. Basis = $50,000 + $20,000 - $10,000 = $60,000.</p>
    <p class="mt-2 text-yellow-600 dark:text-yellow-400">
      <strong>Important:</strong> If the K-1 shows a $70,000 loss, you can only deduct $60,000 this year. The remaining $10,000 is suspended.
    </p>`,
    category: 'k1',
    icon: <DollarSign className="h-5 w-5" />
  },
  {
    question: 'What is the at-risk limitation?',
    answer: `<p>The at-risk test limits deductible losses to the amount you could actually lose:</p>
    <ul>
      <li><strong>At-Risk Amount = </strong>Cash invested + recourse debt you personally guarantee + property contributed (FMV)</li>
      <li><strong>NOT At-Risk:</strong> Nonrecourse debt (loans secured only by property, not by you personally) + amounts protected by guarantees or stop-loss agreements</li>
    </ul>
    <p class="mt-2"><strong>Example:</strong> You invest $40,000 cash. The partnership has $30,000 recourse debt (you signed a personal guarantee) and $50,000 nonrecourse debt. Your at-risk amount = $40,000 + $30,000 = $70,000 (the $50,000 nonrecourse debt doesn't count).</p>
    <p class="mt-2">If the partnership reports a $100,000 loss, you can only deduct $70,000 this year (limited by at-risk amount).</p>`,
    category: 'k1',
    icon: <AlertCircle className="h-5 w-5" />
  },
  {
    question: 'What is material participation and how is it determined?',
    answer: `<p>Material participation determines if your activity is passive or active. You materially participate if you meet ANY of these 7 tests:</p>
    <ol>
      <li><strong>500-Hour Test:</strong> You work 500+ hours during the year (most common)</li>
      <li><strong>Substantially All Test:</strong> You do substantially all the work (for small businesses)</li>
      <li><strong>100-Hour + No One Else More Test:</strong> You work 100+ hours and no one else works more</li>
      <li><strong>Significant Participation Activity:</strong> You work 100-500 hours in this activity + total significant participation activities exceed 500 hours</li>
      <li><strong>5 of Last 10 Years Test:</strong> You materially participated in 5 of the last 10 years</li>
      <li><strong>Personal Service Activity Test:</strong> You materially participated in any 3 prior years for a personal service activity (medical, legal, consulting, etc.)</li>
      <li><strong>Facts and Circumstances Test:</strong> You work 100+ hours and participation is regular, continuous, and substantial</li>
    </ol>
    <p class="mt-2 text-blue-600 dark:text-blue-400">
      <strong>Pro tip:</strong> Keep a time log! The IRS may ask for proof of your hours.
    </p>`,
    category: 'k1',
    icon: <Clock className="h-5 w-5" />
  },
  {
    question: 'What forms does PromptTax generate for K-1 data?',
    answer: `<p>We automatically generate all required tax forms:</p>
    <ul>
      <li><strong>Schedule E (Part II):</strong> Supplemental Income - Partnership/S-Corp income/loss flows here</li>
      <li><strong>Form 6198:</strong> At-Risk Limitations (if you fail the at-risk test)</li>
      <li><strong>Form 8582:</strong> Passive Activity Loss Limitations (if you fail the material participation test)</li>
      <li><strong>Form 1040 integration:</strong> Net income/loss flows to Line 5 (Schedule E) of your Form 1040</li>
    </ul>
    <p class="mt-2">All forms are IRS-compliant PDFs ready to e-file or mail.</p>`,
    category: 'k1',
    icon: <FileText className="h-5 w-5" />
  },
  {
    question: 'What happens to suspended K-1 losses?',
    answer: `<p>Suspended losses carry forward until you can use them:</p>
    <ul>
      <li><strong>Basis Suspended Losses:</strong> Deductible when your basis increases (more capital contributions, partnership income, or debt allocation)</li>
      <li><strong>At-Risk Suspended Losses:</strong> Deductible when your at-risk amount increases (more cash invested or personal guarantees)</li>
      <li><strong>Passive Suspended Losses:</strong> Deductible when you have passive income from other sources OR when you sell/dispose of the partnership interest (triggers all passive losses)</li>
    </ul>
    <p class="mt-2 text-green-600 dark:text-green-400">
      <strong>Good news:</strong> Suspended losses never expire! PromptTax tracks them year-over-year automatically.
    </p>`,
    category: 'k1',
    icon: <TrendingUp className="h-5 w-5" />
  },
  {
    question: 'Can I upload multiple K-1s?',
    answer: `<p>Yes! Upload unlimited K-1s:</p>
    <ul>
      <li><strong>Multiple partnerships:</strong> If you're a partner in several LLCs, upload each K-1</li>
      <li><strong>Auto-aggregation:</strong> We combine all K-1 income/losses for Schedule E</li>
      <li><strong>Separate tracking:</strong> Each entity's basis, at-risk, and passive limits are tracked individually</li>
      <li><strong>Form 1040 sync:</strong> Total net income/loss flows to your tax return automatically</li>
    </ul>
    <p class="mt-2">Process all your K-1s in minutes, not hours.</p>`,
    category: 'k1',
    icon: <FileText className="h-5 w-5" />
  },
  {
    question: 'How do I continue to Form 1040 after processing my K-1?',
    answer: `<p>After we process your K-1 and run the 3-test validation:</p>
    <ol>
      <li><strong>Download Schedule E PDF</strong> - Save your completed Schedule E (Part II) for your records</li>
      <li><strong>Click "Continue to Form 1040"</strong> - Your K-1 data is already synced to your tax return</li>
      <li><strong>Review integrated data</strong> - See your Schedule E income on Line 5 of Form 1040</li>
      <li><strong>Complete the rest of your return</strong> - Add W-2s, deductions, credits, etc.</li>
    </ol>
    <p class="mt-2">The K-1 data flows seamlessly into your 1040 - no manual copying needed!</p>`,
    category: 'k1',
    icon: <ArrowRight className="h-5 w-5" />
  },

  // ============ FORM 1040 FAQS ============
  {
    question: 'What is the Form 1040 tax prep workflow?',
    answer: `<p>Our AI-guided workflow makes tax filing simple:</p>
    <ol>
      <li><strong>Upload income documents:</strong> W-2s, 1099s, K-1s, crypto CSVs</li>
      <li><strong>AI extracts and validates data:</strong> No manual data entry required</li>
      <li><strong>Chat with AI tax assistant:</strong> Answer questions about deductions, credits, dependents</li>
      <li><strong>Review progress sidebar:</strong> See what's complete and what's missing</li>
      <li><strong>CPA final review:</strong> Licensed CPA checks your return before filing</li>
      <li><strong>E-file or download PDF:</strong> File directly with the IRS or print to mail</li>
    </ol>
    <p class="mt-2 text-green-600 dark:text-green-400">Average completion time: 45 minutes for simple returns, 2-3 hours for complex returns.</p>`,
    category: '1040',
    icon: <FileText className="h-5 w-5" />,
    navigationLink: '/freemium/dashboard',
    navigationLabel: 'Start Tax Return'
  },
  {
    question: 'How does PromptTax integrate W-2 income with crypto and K-1 data?',
    answer: `<p>We automatically aggregate all your income sources:</p>
    <ul>
      <li><strong>W-2 Wages:</strong> Line 1 of Form 1040 (from employer)</li>
      <li><strong>Schedule E (K-1s):</strong> Line 5 of Form 1040 (partnership/S-Corp income)</li>
      <li><strong>Schedule D (Crypto):</strong> Line 7 of Form 1040 (capital gains/losses)</li>
      <li><strong>Other Income:</strong> 1099-INT (interest), 1099-DIV (dividends), 1099-MISC (freelance), etc.</li>
    </ul>
    <p class="mt-2">Total income is calculated automatically. Adjusted Gross Income (AGI) flows to Line 11.</p>`,
    category: '1040',
    icon: <DollarSign className="h-5 w-5" />
  },
  {
    question: 'What deductions and credits does PromptTax support?',
    answer: `<p>We cover all major deductions and credits:</p>
    <ul>
      <li><strong>Standard Deduction:</strong> $14,600 (single), $29,200 (married filing jointly) for 2024</li>
      <li><strong>Itemized Deductions:</strong> Mortgage interest, property taxes, charitable donations, medical expenses (Schedule A)</li>
      <li><strong>Tax Credits:</strong> Child Tax Credit, Earned Income Credit (EIC), Education Credits (Form 8863), Retirement Savings Credit</li>
      <li><strong>Business Deductions:</strong> Self-employment expenses, home office, mileage (Schedule C)</li>
    </ul>
    <p class="mt-2">Our AI asks targeted questions to maximize your deductions without triggering audits.</p>`,
    category: '1040',
    icon: <CheckCircle className="h-5 w-5" />
  },
  {
    question: 'Can I review my return before filing?',
    answer: `<p>Yes! Full transparency before filing:</p>
    <ul>
      <li><strong>Progress sidebar:</strong> See completed sections and amounts in real-time</li>
      <li><strong>Draft Form 1040:</strong> Preview your full return (all pages) before submitting</li>
      <li><strong>Line-by-line breakdown:</strong> Click any line to see how it was calculated</li>
      <li><strong>Request CPA review:</strong> Ask our CPAs to explain any entry</li>
      <li><strong>Unlimited revisions:</strong> Make changes until you're satisfied</li>
    </ul>
    <p class="mt-2">You have complete control - we never file without your explicit approval.</p>`,
    category: '1040',
    icon: <FileText className="h-5 w-5" />
  },
  {
    question: 'How does multi-source income aggregation work?',
    answer: `<p>PromptTax combines income from all sources automatically:</p>
    <ol>
      <li><strong>Upload all documents:</strong> W-2s, K-1s, crypto CSVs, 1099s - in any order</li>
      <li><strong>AI categorizes income:</strong> Wages, business income, capital gains, rental income, etc.</li>
      <li><strong>Forms auto-populate:</strong> Schedule E, Schedule D, Schedule C, etc.</li>
      <li><strong>Form 1040 updates:</strong> All income flows to the correct lines on your main tax return</li>
    </ol>
    <p class="mt-2 text-blue-600 dark:text-blue-400">
      Example: Your W-2 shows $100k wages, K-1 shows $20k partnership income, crypto shows $5k capital gains. Form 1040 shows total income of $125k automatically.
    </p>`,
    category: '1040',
    icon: <TrendingUp className="h-5 w-5" />
  },
  {
    question: 'What is the CPA review process?',
    answer: `<p>Every return gets a licensed CPA review:</p>
    <ol>
      <li><strong>AI first pass:</strong> Our AI prepares your return with 99.9% accuracy</li>
      <li><strong>CPA review:</strong> Licensed CPA (EA or attorney) reviews all entries, verifies deductions are properly documented, checks for audit red flags, and ensures IRS compliance</li>
      <li><strong>Feedback loop:</strong> CPA may ask clarifying questions or request additional documentation</li>
      <li><strong>Final approval:</strong> CPA electronically signs your return (required for e-filing)</li>
    </ol>
    <p class="mt-2 text-green-600 dark:text-green-400">Turnaround time: 24-48 hours for CPA review (rush service available).</p>`,
    category: '1040',
    icon: <Users className="h-5 w-5" />
  },
  {
    question: 'What is the typical timeline for completing a tax return?',
    answer: `<p>Timeline depends on complexity:</p>
    <ul>
      <li><strong>Simple Return (W-2 only):</strong> 30-45 minutes (AI prep) + 24 hours (CPA review)</li>
      <li><strong>Moderate Return (W-2 + crypto):</strong> 1-2 hours (AI prep) + 24-48 hours (CPA review)</li>
      <li><strong>Complex Return (W-2 + crypto + K-1s + itemized deductions):</strong> 2-3 hours (AI prep) + 48-72 hours (CPA review)</li>
    </ul>
    <p class="mt-2 text-yellow-600 dark:text-yellow-400">
      <strong>Pro tip:</strong> File early! The IRS accepts e-files starting January 21st. Early filers get faster refunds (7-21 days vs. 6-8 weeks if you mail).
    </p>`,
    category: '1040',
    icon: <Clock className="h-5 w-5" />
  },

  // ============ BOIR (BENEFICIAL OWNERSHIP) FAQS ============
  {
    question: 'What is Beneficial Ownership Reporting (BOIR)?',
    answer: `<p>BOIR is a new federal requirement under the Corporate Transparency Act (CTA):</p>
    <ul>
      <li><strong>Who must file:</strong> LLCs, corporations, and other entities created by filing with a state (Secretary of State)</li>
      <li><strong>What you report:</strong> Beneficial owners (anyone who owns 25%+ or exercises substantial control) - full legal name, date of birth, address, ID number (driver's license or passport)</li>
      <li><strong>Who you report to:</strong> FinCEN (Financial Crimes Enforcement Network)</li>
      <li><strong>Why it exists:</strong> Combat money laundering, tax evasion, and terrorism financing</li>
    </ul>
    <p class="mt-2 text-red-600 dark:text-red-400">
      <strong>Penalty:</strong> Up to $500/day for late filing + criminal penalties for willful violations.
    </p>`,
    category: 'boir',
    icon: <Building2 className="h-5 w-5" />,
    navigationLink: '/freemium/boir/start',
    navigationLabel: 'Start BOIR Filing'
  },
  {
    question: 'Who needs to file a BOIR report?',
    answer: `<p>Most small businesses must file, but there are exemptions:</p>
    <ul>
      <li><strong>Must File:</strong> LLCs, corporations, limited partnerships formed by filing with a state</li>
      <li><strong>Exempt:</strong> Publicly traded companies, banks, credit unions, large operating companies (20+ full-time employees, $5M+ revenue, physical US office), nonprofits, and 22 other exempt entity types</li>
    </ul>
    <p class="mt-2 text-yellow-600 dark:text-yellow-400">
      <strong>Common mistake:</strong> Single-member LLCs think they're exempt. They're NOT! You must file unless you meet one of the 23 exemptions.
    </p>`,
    category: 'boir',
    icon: <AlertCircle className="h-5 w-5" />
  },
  {
    question: 'What are the BOIR filing deadlines?',
    answer: `<p>Deadlines depend on when your entity was created:</p>
    <ul>
      <li><strong>Existing entities (formed before Jan 1, 2024):</strong> File by January 1, 2025</li>
      <li><strong>New entities (formed in 2024):</strong> File within 90 days of formation</li>
      <li><strong>New entities (formed after Jan 1, 2025):</strong> File within 30 days of formation</li>
      <li><strong>Updates/changes:</strong> Report changes (new owner, address change, etc.) within 30 days</li>
    </ul>
    <p class="mt-2 text-red-600 dark:text-red-400">
      <strong>Penalties:</strong> $500/day for late filing (max $10,000) + potential criminal penalties.
    </p>`,
    category: 'boir',
    icon: <Clock className="h-5 w-5" />
  },
  {
    question: 'What information do I need to file a BOIR report?',
    answer: `<p>For each beneficial owner, you need:</p>
    <ul>
      <li><strong>Full legal name</strong> (as shown on ID)</li>
      <li><strong>Date of birth</strong></li>
      <li><strong>Residential address</strong> (PO boxes NOT allowed)</li>
      <li><strong>ID document:</strong> Driver's license, passport, or state ID (FinCEN stores images)</li>
      <li><strong>ID number and issuing state/country</strong></li>
    </ul>
    <p class="mt-2">For the entity itself: Legal name, DBA (if any), address, EIN, state of formation, and formation date.</p>
    <p class="mt-2 text-blue-600 dark:text-blue-400">
      <strong>Pro tip:</strong> PromptTax securely stores this information so you only enter it once, even if you own multiple LLCs.
    </p>`,
    category: 'boir',
    icon: <FileText className="h-5 w-5" />
  },
  {
    question: 'What entity types are covered by BOIR?',
    answer: `<p>The CTA applies to "reporting companies" which include:</p>
    <ul>
      <li><strong>Domestic entities:</strong> LLCs, corporations, limited partnerships, business trusts formed by filing with a Secretary of State</li>
      <li><strong>Foreign entities:</strong> Entities formed outside the US but registered to do business in any US state</li>
    </ul>
    <p class="mt-2"><strong>NOT covered:</strong> Sole proprietorships (no filing with state), general partnerships (no filing with state), most trusts (not filed with state).</p>
    <p class="mt-2 text-yellow-600 dark:text-yellow-400">
      If you filed formation documents with your state to create your business, you probably need to file BOIR.
    </p>`,
    category: 'boir',
    icon: <Building2 className="h-5 w-5" />
  },
  {
    question: 'What are the penalties for not filing BOIR?',
    answer: `<p>FinCEN takes BOIR seriously:</p>
    <ul>
      <li><strong>Civil Penalty:</strong> Up to $500 per day late (max $10,000 per violation)</li>
      <li><strong>Criminal Penalty:</strong> Up to 2 years imprisonment + fines (for willful violations)</li>
      <li><strong>Ongoing Violations:</strong> If you update information late, penalties stack daily</li>
    </ul>
    <p class="mt-2 text-red-600 dark:text-red-400">
      <strong>Example:</strong> Entity formed March 1, 2024. 90-day deadline = May 30, 2024. If filed July 30 (60 days late), penalty = $500/day × 60 = $30,000 (!!)
    </p>
    <p class="mt-2">Don't procrastinate - file as soon as possible!</p>`,
    category: 'boir',
    icon: <AlertCircle className="h-5 w-5" />
  },

  // ============ CPA HANDOFF FAQS ============
  {
    question: 'How do I share my tax data with a CPA?',
    answer: `<p>Share securely with one click:</p>
    <ol>
      <li><strong>Click "Share with CPA"</strong> in your dashboard</li>
      <li><strong>Enter CPA email</strong> - They receive a secure invite link</li>
      <li><strong>Set permissions:</strong> View-only or allow them to request revisions</li>
      <li><strong>CPA reviews</strong> - They can see all your documents, forms, and calculations</li>
      <li><strong>You stay in control</strong> - Revoke access anytime</li>
    </ol>
    <p class="mt-2">No more emailing PDFs or uploading to third-party file shares. Everything stays in PromptTax.</p>`,
    category: 'cpa',
    icon: <Users className="h-5 w-5" />,
    navigationLink: '/freemium/dashboard',
    navigationLabel: 'Share with CPA'
  },
  {
    question: 'How do CPA share links work?',
    answer: `<p>Secure, time-limited access:</p>
    <ul>
      <li><strong>Link generation:</strong> You create a unique share link for your CPA</li>
      <li><strong>Email notification:</strong> CPA receives email with access link</li>
      <li><strong>No account required:</strong> CPA can view your data without creating a PromptTax account</li>
      <li><strong>Expiration:</strong> Links expire after 30 days (or when you revoke access)</li>
      <li><strong>Audit log:</strong> You can see when CPA viewed your data</li>
    </ul>
    <p class="mt-2 text-green-600 dark:text-green-400">CPAs love this - they can review clients' work without juggling multiple accounts.</p>`,
    category: 'cpa',
    icon: <FileText className="h-5 w-5" />
  },
  {
    question: 'What access control options do I have?',
    answer: `<p>You decide what CPAs can see and do:</p>
    <ul>
      <li><strong>View-Only:</strong> CPA can see all documents and forms, but can't make changes</li>
      <li><strong>Comment Access:</strong> CPA can leave notes and questions on specific forms/sections</li>
      <li><strong>Revision Requests:</strong> CPA can request changes (you approve/reject)</li>
      <li><strong>Full Edit:</strong> CPA can make direct changes (for firms managing multiple clients)</li>
    </ul>
    <p class="mt-2">Most users choose "View-Only + Comment Access" for external CPAs.</p>`,
    category: 'cpa',
    icon: <Shield className="h-5 w-5" />
  },
  {
    question: 'Can I revoke CPA access?',
    answer: `<p>Yes, instantly revoke access:</p>
    <ul>
      <li><strong>One-click revocation:</strong> Click "Revoke Access" in your dashboard</li>
      <li><strong>Immediate effect:</strong> CPA's share link stops working immediately</li>
      <li><strong>Audit log:</strong> System logs when access was granted and revoked</li>
      <li><strong>Re-grant if needed:</strong> You can generate a new link later</li>
    </ul>
    <p class="mt-2 text-blue-600 dark:text-blue-400">
      <strong>Use case:</strong> Share with CPA for review, revoke after they approve, re-grant if you file an amendment.
    </p>`,
    category: 'cpa',
    icon: <AlertCircle className="h-5 w-5" />
  },
  {
    question: 'How does the CPA review process work?',
    answer: `<p>Collaborative and transparent:</p>
    <ol>
      <li><strong>You prepare return:</strong> Upload documents, answer AI questions, review draft</li>
      <li><strong>Share with CPA:</strong> Generate share link and send to CPA</li>
      <li><strong>CPA reviews:</strong> CPA checks calculations, verifies documentation, flags any issues</li>
      <li><strong>CPA leaves comments:</strong> "Need proof of home office expenses" or "This deduction looks aggressive"</li>
      <li><strong>You respond:</strong> Upload additional docs or make revisions</li>
      <li><strong>CPA approves:</strong> CPA confirms return is ready to file</li>
    </ol>
    <p class="mt-2">Average review turnaround: 24-48 hours (faster than traditional tax prep!).</p>`,
    category: 'cpa',
    icon: <CheckCircle className="h-5 w-5" />
  },
  {
    question: 'What if my CPA requests revisions?',
    answer: `<p>Easy revision workflow:</p>
    <ul>
      <li><strong>CPA leaves comment:</strong> "Please update dependent's SSN - it doesn't match IRS records"</li>
      <li><strong>You get notification:</strong> Email + in-app notification with CPA's request</li>
      <li><strong>Make changes:</strong> Edit the field directly in the form or upload corrected documents</li>
      <li><strong>CPA reviews again:</strong> CPA sees the update and can approve</li>
      <li><strong>Version history:</strong> All changes are logged (you can see before/after)</li>
    </ul>
    <p class="mt-2">Unlimited revisions included - no extra fees for CPA collaboration.</p>`,
    category: 'cpa',
    icon: <FileText className="h-5 w-5" />
  },
  {
    question: 'Can I download the full tax package to give to my CPA?',
    answer: `<p>Yes! Export everything in one zip file:</p>
    <ul>
      <li><strong>All forms:</strong> Form 1040, schedules (D, E, C, A), K-1s, Form 8949, etc. - all as PDFs</li>
      <li><strong>Source documents:</strong> W-2s, 1099s, K-1 PDFs, crypto CSVs</li>
      <li><strong>Worksheets:</strong> Cost basis calculations, wash sale reports, deduction summaries</li>
      <li><strong>Audit defense bundle:</strong> Documentation to support every deduction and credit</li>
    </ul>
    <p class="mt-2 text-green-600 dark:text-green-400">The complete package is IRS-audit-ready with supporting documentation for every entry.</p>`,
    category: 'cpa',
    icon: <FileText className="h-5 w-5" />
  },
  {
    question: 'Does PromptTax work with my existing CPA/tax advisor?',
    answer: `<p>Absolutely! PromptTax is designed to complement professional tax advisors:</p>
    <ul>
      <li><strong>You do the data entry:</strong> Upload documents, let AI do the heavy lifting</li>
      <li><strong>CPA does strategy:</strong> Tax planning, entity structuring, audit defense</li>
      <li><strong>Save time and money:</strong> CPAs charge $200-500/hour. Use PromptTax for routine prep, pay CPA only for strategic advice</li>
    </ul>
    <p class="mt-2 text-blue-600 dark:text-blue-400">
      <strong>Example:</strong> Instead of paying your CPA $2,000 to enter all your crypto transactions manually, you pay $0 (we do it) and pay your CPA $500 for 2 hours of strategic tax planning.
    </p>`,
    category: 'cpa',
    icon: <Users className="h-5 w-5" />
  }
]

export default function FAQPage() {
  const { data: session } = useSession()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [openItems, setOpenItems] = useState<number[]>([])

  const sidebarUser = {
    id: session ? (typeof (session as any).user?.id === 'number' ? (session as any).user?.id : 0) : 0,
    name: session ? ((session as any).user?.name || (session as any).user?.email || 'User') : 'Guest',
    email: session ? ((session as any).user?.email || '') : '',
    avatar: session ? (session as any).user?.image : undefined,
    isPaid: session ? ((session as any).user?.isPaid || false) : false,
  }

  const categories = [
    { id: 'all', label: 'All Questions', count: faqData.length },
    { id: 'crypto', label: 'Crypto Tax', count: faqData.filter(q => q.category === 'crypto').length },
    { id: 'k1', label: 'K-1 Forms', count: faqData.filter(q => q.category === 'k1').length },
    { id: '1040', label: 'Form 1040', count: faqData.filter(q => q.category === '1040').length },
    { id: 'boir', label: 'BOIR Filing', count: faqData.filter(q => q.category === 'boir').length },
    { id: 'cpa', label: 'CPA Handoff', count: faqData.filter(q => q.category === 'cpa').length }
  ]

  const filteredQuestions = faqData.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((i) => i !== index))
    } else {
      setOpenItems([...openItems, index])
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'crypto':
        return <Bitcoin className="h-4 w-4" />
      case 'k1':
        return <FileText className="h-4 w-4" />
      case '1040':
        return <ScrollText className="h-4 w-4" />
      case 'boir':
        return <Building2 className="h-4 w-4" />
      case 'cpa':
        return <Users className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar workspaces={[]} user={sidebarUser} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <DynamicBreadcrumb />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="container mx-auto px-4 py-8 max-w-5xl">
            {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          PromptTax FAQ
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Everything you need to know about crypto taxes, K-1 forms, Form 1040, BOIR filing, and CPA collaboration
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant={selectedCategory === cat.id ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(cat.id)}
            className="relative"
          >
            {cat.label}
            <Badge variant="secondary" className="ml-2">
              {cat.count}
            </Badge>
          </Button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="space-y-3 mb-12">
        {filteredQuestions.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-500 dark:text-gray-400">
                No questions found matching your search.
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredQuestions.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-4 flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                      {getCategoryIcon(item.category)}
                      <span className="capitalize">{item.category === 'boir' ? 'BOIR' : item.category}</span>
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {item.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>

              {openItems.includes(index) && (
                <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800/50">
                  <div
                    className="prose prose-sm dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                  {item.navigationLink && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Link href={item.navigationLink}>
                        <Button variant="outline" className="w-full sm:w-auto">
                          {item.navigationLabel}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </Card>
          ))
        )}
      </div>

      {/* Quick Start CTA */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Upload your tax documents and let our AI do the heavy lifting.
              </p>
            </div>
            <Link href="/freemium/dashboard">
              <Button size="lg" className="whitespace-nowrap">
                Start Your Tax Return
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Still Have Questions? */}
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold mb-3">Still Have Questions?</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Our support team is here to help. Reach out anytime.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" asChild>
            <a href="mailto:support@prompt.tax">
              Email Support
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/freemium/chat/support">
              Chat with AI Assistant
            </Link>
          </Button>
        </div>
      </div>
    </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
