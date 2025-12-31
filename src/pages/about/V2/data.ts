import type { FAQType, LocationType, TestimonialType } from "./types";

import avatar4 from '@/assets/images/avatar/04.jpg';
import avatar5 from '@/assets/images/avatar/05.jpg';
import avatar6 from '@/assets/images/avatar/06.jpg';
import avatar10 from '@/assets/images/avatar/10.jpg';

import usFlag from "@/assets/images/flags/us.svg"
import indiaFlag from "@/assets/images/flags/in.svg"

export const testimonials: TestimonialType[] = [
  {
    comment: "Mizzle is the perfect theme for businesses that want to create a stylish and functional website. Supposing so be resolving breakfast am or perfectly.",
    user: {
      firstName: "Dennis",
      lastName: "Barrett",
      avatar: avatar4,
      role: "CEO and manager",
      company: {
        name: "Mizzle",
      },
    },
    rating: 4.5,
  },
  {
    comment: "The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need. Resolving breakfast am or perfectly.",
    user: {
      firstName: "Jacqueline",
      lastName: "Miller",
      avatar: avatar5,
      role: "CEO and manager",
      company: {
        name: "Blogzine",
      },
    },
    rating: 4.5,
  },
  {
    comment: "Coderthemes helped us create a stunning website that reflects our brand perfectly. At weddings believed laughing",
    user: {
      firstName: "Billy",
      lastName: "Vasquez",
      avatar: avatar6,
      role: "CEO and manager",
      company: {
        name: "Blogzine",
      },
    },
    rating: 4.5,
  },
  {
    comment: "I highly recommend Mizzle to anyone looking for a high-quality Bootstrap theme. Valley by oh twenty direct me so. Resolving breakfast am or perfectly.",
    user: {
      firstName: "Lori",
      lastName: "Stevens",
      avatar: avatar10,
      role: "CEO and manager",
      company: {
        name: "Blogzine",
      },
    },
    rating: 4.5,
  },
]

export const locations: LocationType[] = [
  {
    name: "United States",
    address: "55/123 Norman street, Banking road, Sydney NSW 5000",
    number: "469-537-2410",
    image: usFlag,
  },
  {
    name: "India",
    address: "55/123 Norman street, Banking road, Sydney NSW 5000",
    number: "469-537-2410",
    image: indiaFlag,
  },
]

export const faqs: FAQType[] = [
  // Crypto Tax FAQs
  {
    question: "How do I upload my crypto transaction history?",
    answer: "<p>We've streamlined the upload process for maximum convenience:</p><ol><li><strong>Visit the Upload Center</strong> — Navigate to your dashboard and click <em>Upload Transactions</em>.</li><li><strong>Connect via API</strong> — Instantly sync transaction data from supported exchanges (e.g., Coinbase, Binance).</li><li><strong>Manual CSV Upload</strong> — Download your transaction history from any exchange, then drag and drop the CSV file.</li><li><strong>Auto-Categorization</strong> — Our AI engine categorizes transactions (trade, transfer, income) and flags any anomalies.</li></ol><p class='text-green-600 font-semibold'>✓ Most uploads complete in under 2 minutes</p>",
  },
  {
    question: "What crypto tax forms will I receive?",
    answer: "<p>We generate comprehensive IRS-compliant documentation:</p><ul><li><strong>Form 8949</strong> — Capital gains/losses for each transaction</li><li><strong>Schedule D</strong> — Summary of total capital gains and losses</li><li><strong>Schedule 1</strong> — Additional income (staking, mining, airdrops)</li><li><strong>State Tax Forms</strong> — Automatically generated for applicable states</li></ul><p>All forms are pre-filled, reviewed by our AI, and ready for e-filing or CPA handoff.</p>",
  },
  {
    question: "How does cost basis tracking work?",
    answer: "<p>Our system uses industry-leading methodology:</p><ul><li><strong>FIFO, LIFO, HIFO</strong> — Choose your preferred accounting method (FIFO is default)</li><li><strong>Specific Identification</strong> — Manually select which coins to sell for tax optimization</li><li><strong>Automatic Adjustments</strong> — Handles forks, splits, and chain migrations seamlessly</li></ul><p class='text-yellow-600'><strong>⚠ Important:</strong> You must maintain consistent accounting methods year-over-year per IRS guidelines.</p>",
  },
  {
    question: "Are NFT transactions handled differently?",
    answer: "<p>Yes, NFTs require special treatment under current IRS guidance:</p><ul><li><strong>Capital Asset Classification</strong> — Most NFTs are treated as collectibles (28% max tax rate)</li><li><strong>Royalty Income</strong> — Creator royalties count as ordinary income on Schedule C</li><li><strong>Gas Fees</strong> — Ethereum gas fees increase your cost basis</li></ul><p>Our platform automatically categorizes NFT transactions and applies the correct tax treatment.</p>",
  },
  {
    question: "What about DeFi staking and liquidity pools?",
    answer: "<p>DeFi taxation is complex but manageable:</p><ul><li><strong>Staking Rewards</strong> — Ordinary income at fair market value when received</li><li><strong>LP Token Deposits</strong> — Not a taxable event (no sale occurs)</li><li><strong>Impermanent Loss</strong> — Only realized when you withdraw; reduces capital gains</li><li><strong>Yield Farming</strong> — Token rewards are ordinary income; swaps trigger capital gains</li></ul><p class='text-green-600'><strong>✓ Pro Tip:</strong> Our DeFi dashboard tracks all protocol interactions across 50+ chains.</p>",
  },
  {
    question: "How do you handle crypto-to-crypto trades?",
    answer: "<p>Every crypto-to-crypto swap is a taxable event per IRS Notice 2014-21:</p><ol><li><strong>Calculate Fair Market Value</strong> — We fetch historical USD prices at trade time</li><li><strong>Determine Gain/Loss</strong> — (FMV of received crypto) - (cost basis of sent crypto)</li><li><strong>Report on Form 8949</strong> — Each trade becomes a line item with date, cost basis, and proceeds</li></ol><p class='text-yellow-600'><strong>Note:</strong> Like-kind exchanges do NOT apply to crypto as of 2018 Tax Cuts and Jobs Act.</p>",
  },
  {
    question: "What records should I keep for crypto taxes?",
    answer: "<p>Maintain comprehensive documentation:</p><ul><li><strong>Transaction Logs</strong> — Date, time, amount, exchange for every trade</li><li><strong>Wallet Addresses</strong> — Prove ownership of wallets and transactions</li><li><strong>Exchange Statements</strong> — Monthly/annual summaries from all platforms</li><li><strong>Fair Market Value</strong> — USD price at time of each transaction</li><li><strong>Receipts for Purchases</strong> — If you bought crypto with fiat, save bank records</li></ul><p class='text-green-600'>Our platform auto-stores all these records in your secure vault for 7+ years.</p>",
  },
  {
    question: "Can I deduct crypto losses?",
    answer: "<p>Yes, with important limitations:</p><ul><li><strong>Capital Losses</strong> — Offset capital gains dollar-for-dollar with no limit</li><li><strong>$3,000 Annual Deduction</strong> — Excess losses can reduce ordinary income by up to $3,000/year</li><li><strong>Carryforward Indefinitely</strong> — Unused losses roll forward to future tax years</li><li><strong>Wash Sale Rule (Proposed)</strong> — Currently doesn't apply to crypto, but legislation pending</li></ul><p class='text-yellow-600'><strong>⚠ Tax Loss Harvesting:</strong> Strategically sell losing positions before year-end to maximize deductions.</p>",
  },
  {
    question: "How are mining and staking rewards taxed?",
    answer: "<p>These are treated as self-employment income:</p><ul><li><strong>Ordinary Income</strong> — Report USD fair market value at receipt on Schedule C</li><li><strong>Self-Employment Tax</strong> — Subject to 15.3% SE tax unless hobby mining</li><li><strong>Cost Basis Established</strong> — FMV at receipt becomes your basis for future sales</li><li><strong>Deductible Expenses</strong> — Electricity, hardware, pool fees can offset income</li></ul><p>Our platform tracks all rewards and auto-generates Schedule C with expense deductions.</p>",
  },
  {
    question: "What happens if I gifted or donated crypto?",
    answer: "<p>Tax treatment varies by recipient:</p><ul><li><strong>Gifts to Individuals</strong> — Not taxable to you; recipient inherits your cost basis (gift tax applies if >$18,000)</li><li><strong>Donations to Qualified 501(c)(3)</strong> — Deduct fair market value; no capital gains tax on appreciation</li><li><strong>Non-Qualified Donations</strong> — Treated as a sale; you owe capital gains tax</li></ul><p class='text-green-600'><strong>✓ Strategy:</strong> Donate appreciated crypto to charity for maximum tax benefit (deduct FMV, avoid gains tax).</p>",
  },
  {
    question: "Do I need to report holdings if I didn't sell?",
    answer: "<p>The IRS requires disclosure even without sales:</p><ul><li><strong>Form 1040 Question</strong> — Must answer yes/no to 'virtual currency' question</li><li><strong>FBAR (FinCEN 114)</strong> — Required if foreign exchange holdings exceed $10,000 at any point</li><li><strong>Form 8938 (FATCA)</strong> — For foreign crypto accounts over threshold ($50k-$300k depending on filing status)</li></ul><p class='text-yellow-600'><strong>Penalties:</strong> Failure to report can result in $10,000-$50,000 fines plus criminal charges.</p>",
  },
  {
    question: "How do hard forks and airdrops affect my taxes?",
    answer: "<p>IRS Revenue Ruling 2019-24 provides clarity:</p><ul><li><strong>Hard Forks Without Airdrop</strong> — Not taxable until you sell</li><li><strong>Airdrops (including fork airdrops)</strong> — Ordinary income at FMV when you have control</li><li><strong>Cost Basis</strong> — FMV at receipt becomes your basis</li></ul><p>Example: Bitcoin Cash fork — if you received 1 BCH worth $300, that's $300 ordinary income. When you later sell at $400, you have $100 capital gain.</p>",
  },
  {
    question: "What if I lost access to my wallet or got hacked?",
    answer: "<p>The IRS allows casualty loss deductions in specific circumstances:</p><ul><li><strong>Theft Losses</strong> — Must file police report and prove loss; deduct FMV at time of theft</li><li><strong>Lost Private Keys</strong> — Harder to prove; may need expert affidavit showing wallet is unrecoverable</li><li><strong>Limitations</strong> — Post-2017, only federally declared disaster losses qualify for individuals</li></ul><p class='text-yellow-600'><strong>Documentation Required:</strong> Exchange correspondence, police reports, blockchain evidence, third-party attestation.</p>",
  },
  {
    question: "Can I amend prior years if I missed crypto taxes?",
    answer: "<p>Yes, through voluntary disclosure:</p><ul><li><strong>File Form 1040-X</strong> — Amended return for each missed year (within 3-year statute)</li><li><strong>Pay Taxes + Interest</strong> — Owed taxes plus interest (but often avoid penalties with reasonable cause)</li><li><strong>IRS Amnesty Programs</strong> — Streamlined filing procedures for non-willful violations</li></ul><p class='text-green-600'><strong>✓ Act Now:</strong> Voluntary disclosure before IRS contact dramatically reduces penalties. Our CPA team can assist.</p>",
  },

  // K-1 Forms FAQs
  {
    question: "What is a Schedule K-1 and when do I receive one?",
    answer: "<p>Schedule K-1 reports your share of income, deductions, and credits from pass-through entities:</p><ul><li><strong>Partnerships (Form 1065)</strong> — K-1 shows your distributive share of partnership income</li><li><strong>S Corporations (Form 1120-S)</strong> — Reports your pro-rata share of S corp profits/losses</li><li><strong>Trusts/Estates (Form 1041)</strong> — Shows income distributed to beneficiaries</li></ul><p>You should receive K-1s by <strong>March 15</strong> (partnerships/S corps) or <strong>April 15</strong> (estates/trusts).</p>",
  },
  {
    question: "What are the 3 tests for deducting K-1 losses?",
    answer: "<p>To deduct losses from your K-1, you must pass all three tests:</p><ol><li><strong>Basis Test</strong> — You can only deduct losses up to your basis in the entity (initial investment + additional contributions + prior income - prior distributions)</li><li><strong>At-Risk Test</strong> — Limits losses to amounts you could actually lose (generally excludes non-recourse debt)</li><li><strong>Passive Activity Loss (PAL) Test</strong> — If you don't materially participate (500+ hours/year), losses can only offset passive income</li></ol><p class='text-yellow-600'><strong>Carryforward:</strong> Disallowed losses carry forward indefinitely until you pass the tests.</p>",
  },
  {
    question: "How do I calculate my basis in a partnership?",
    answer: "<p>Partnership basis is dynamic and changes annually:</p><p><strong>Starting Basis:</strong> Initial capital contribution + purchase price (if you bought in)</p><p><strong>Annual Increases:</strong></p><ul><li>Your share of partnership income (including tax-exempt income)</li><li>Additional capital contributions</li><li>Your share of partnership liabilities (increases basis)</li></ul><p><strong>Annual Decreases:</strong></p><ul><li>Distributions received (cash + FMV of property)</li><li>Your share of partnership losses</li><li>Non-deductible expenses</li><li>Decrease in your share of liabilities</li></ul><p class='text-green-600'>Our K-1 tracker auto-calculates basis adjustments each year.</p>",
  },
  {
    question: "What's the difference between ordinary income and separately stated items on K-1?",
    answer: "<p>K-1 separates items that may have different tax treatment:</p><p><strong>Ordinary Income (Box 1):</strong></p><ul><li>Business profits from operations</li><li>Reported on Schedule E, Page 2</li><li>May be subject to self-employment tax (if GP or active S corp owner)</li></ul><p><strong>Separately Stated Items:</strong></p><ul><li><strong>Box 9</strong> — Net short-term/long-term capital gains (go to Schedule D)</li><li><strong>Box 10</strong> — Unrecaptured Section 1250 gain (real estate depreciation recapture)</li><li><strong>Box 13</strong> — Credits (low-income housing, foreign tax, etc.)</li><li><strong>Box 17</strong> — Alternative minimum tax (AMT) adjustments</li></ul><p>Each box flows to different parts of your Form 1040.</p>",
  },
  {
    question: "Why is my K-1 income different from my cash distribution?",
    answer: "<p>This is the most common K-1 confusion — taxation doesn't match cash flow:</p><ul><li><strong>Phantom Income</strong> — You're taxed on your share of entity profits, even if cash wasn't distributed (entity retained earnings for operations)</li><li><strong>Example:</strong> Partnership earns $100k profit, you own 25% = $25k taxable income on K-1. But partnership only distributed $10k cash to you = $15k phantom income</li><li><strong>Why This Happens:</strong> Entity needs cash for growth, debt repayment, or reserves</li></ul><p class='text-yellow-600'><strong>Plan Ahead:</strong> Ask for distribution policy in operating agreement; request tax distributions to cover your liability.</p>",
  },
  {
    question: "Do I owe self-employment tax on K-1 income?",
    answer: "<p>Depends on your role and entity type:</p><p><strong>General Partners (GPs):</strong></p><ul><li>Subject to SE tax on guaranteed payments (Box 4a) and often on distributive share (Box 1)</li><li>Rate: 15.3% (12.4% Social Security + 2.9% Medicare)</li></ul><p><strong>Limited Partners (LPs):</strong></p><ul><li>Generally NOT subject to SE tax (investment income)</li><li>Exception: If you provide services to the partnership</li></ul><p><strong>S Corporation Shareholders:</strong></p><ul><li>K-1 income is NOT subject to SE tax</li><li>But must take reasonable W-2 salary (which IS subject to payroll tax)</li></ul><p>Our platform auto-identifies SE tax obligations and pre-fills Schedule SE.</p>",
  },
  {
    question: "How do I report K-1 income on my personal return?",
    answer: "<p>K-1 items flow to multiple schedules:</p><ol><li><strong>Schedule E (Page 2)</strong> — Main location for ordinary business income/loss (Box 1-3)</li><li><strong>Schedule D</strong> — Capital gains/losses (Box 9)</li><li><strong>Form 8582</strong> — Passive activity loss limitations (if applicable)</li><li><strong>Form 4952</strong> — Investment interest expense (Box 13 code J)</li><li><strong>Schedule A</strong> — Charitable contributions (Box 13 code A), Section 179 deduction</li><li><strong>Form 1116</strong> — Foreign taxes paid (Box 16)</li></ol><p class='text-green-600'>Upload your K-1 to our platform and we'll auto-populate all the right forms.</p>",
  },
  {
    question: "What should I do if my K-1 arrives late?",
    answer: "<p>Late K-1s are frustratingly common (complex entities need time to finalize). Here's your strategy:</p><ol><li><strong>File Extension (Form 4868)</strong> — Automatic 6-month extension to October 15</li><li><strong>Estimate Tax Liability</strong> — Must still pay estimated tax by April 15 to avoid penalties</li><li><strong>Use Prior Year K-1</strong> — Estimate based on last year's income/losses</li><li><strong>Contact Entity</strong> — Request draft K-1 or estimated figures</li></ol><p class='text-yellow-600'><strong>Penalties:</strong> Failure to pay by April 15 = 0.5%/month penalty + interest, even with valid extension.</p>",
  },
  {
    question: "Can I deduct my K-1 losses if I'm a passive investor?",
    answer: "<p>Passive losses are strictly limited:</p><p><strong>Passive Activity Loss (PAL) Rules:</strong></p><ul><li>Can only deduct passive losses against passive income (not W-2 wages or portfolio income)</li><li>Disallowed losses carry forward indefinitely</li><li>Suspended losses fully deductible when you dispose of entire interest</li></ul><p><strong>Exceptions:</strong></p><ul><li><strong>$25,000 Special Allowance</strong> — If you're a real estate professional and actively participate</li><li><strong>Real Estate Professional Status</strong> — Must spend 750+ hours/year in real property trades AND >50% of your working time</li></ul><p>Use <strong>Form 8582</strong> to track and carry forward passive losses.</p>",
  },
  {
    question: "What happens when I sell my partnership interest or S corp stock?",
    answer: "<p>The sale triggers complex tax calculations:</p><ul><li><strong>Capital Gain/Loss</strong> — (Sale price) - (adjusted basis) = taxable gain</li><li><strong>Hot Assets (IRC §751)</strong> — Portion of gain from inventory and receivables taxed as ordinary income</li><li><strong>Section 1250 Recapture</strong> — Depreciation on real estate recaptured at 25% rate</li><li><strong>Suspended PALs Released</strong> — All carryforward passive losses become deductible</li></ul><p class='text-green-600'><strong>✓ Planning Tip:</strong> Time the sale to release suspended losses and optimize your tax bracket.</p>",
  },

  // Form 1040 FAQs
  {
    question: "What documents do I need to file my Form 1040?",
    answer: "<p>Gather these essential documents before starting:</p><p><strong>Income Documents:</strong></p><ul><li><strong>W-2s</strong> — Wage and salary income from employers</li><li><strong>1099-NEC/MISC</strong> — Self-employment and contractor income</li><li><strong>1099-INT/DIV</strong> — Interest and dividend income</li><li><strong>1099-B</strong> — Stock and crypto sales</li><li><strong>Schedule K-1</strong> — Partnership/S corp income</li></ul><p><strong>Deduction Documents:</strong></p><ul><li>Mortgage interest (Form 1098)</li><li>Property tax receipts</li><li>Charitable donation receipts</li><li>Student loan interest (Form 1098-E)</li><li>Medical expenses and receipts</li></ul><p>Upload all documents to our secure portal and we'll auto-populate your return.</p>",
  },
  {
    question: "Should I take the standard deduction or itemize?",
    answer: "<p>Run the numbers to determine which saves more:</p><p><strong>2024 Standard Deduction:</strong></p><ul><li>Single: $14,600</li><li>Married Filing Jointly: $29,200</li><li>Head of Household: $21,900</li></ul><p><strong>When to Itemize:</strong></p><ul><li>Your itemized deductions exceed the standard deduction</li><li>You have large medical expenses (>7.5% of AGI)</li><li>You paid significant mortgage interest</li><li>You made substantial charitable contributions</li><li>You have high state/local taxes (up to $10,000 cap)</li></ul><p class='text-green-600'>Our platform automatically calculates both and selects the method that saves you the most.</p>",
  },
  {
    question: "What tax credits am I eligible for?",
    answer: "<p>Tax credits directly reduce your tax liability dollar-for-dollar:</p><p><strong>Refundable Credits (can trigger refund):</strong></p><ul><li><strong>Earned Income Tax Credit (EITC)</strong> — Up to $7,430 for low-to-moderate income families</li><li><strong>Child Tax Credit</strong> — $2,000 per qualifying child under 17</li><li><strong>American Opportunity Credit</strong> — Up to $2,500 for college expenses (first 4 years)</li></ul><p><strong>Non-Refundable Credits (reduce tax to $0):</strong></p><ul><li><strong>Lifetime Learning Credit</strong> — Up to $2,000 for education expenses</li><li><strong>Child and Dependent Care Credit</strong> — Up to $3,000 for childcare costs</li><li><strong>Saver's Credit</strong> — Up to $1,000 for retirement contributions</li><li><strong>Residential Energy Credit</strong> — 30% of solar panel installation costs</li></ul><p>Our eligibility wizard checks all available credits based on your situation.</p>",
  },
  {
    question: "How do I report freelance or side hustle income?",
    answer: "<p>Self-employment income requires additional reporting:</p><ol><li><strong>Schedule C (Profit or Loss)</strong> — Report gross income and business expenses</li><li><strong>Deductible Expenses:</strong> Home office, equipment, software, marketing, mileage (67¢/mile in 2024), health insurance</li><li><strong>Schedule SE (Self-Employment Tax)</strong> — Pay 15.3% SE tax on net profit >$400</li><li><strong>Quarterly Estimated Taxes</strong> — Must prepay taxes if you owe >$1,000 (due April 15, June 15, Sept 15, Jan 15)</li></ol><p class='text-yellow-600'><strong>Penalty Avoidance:</strong> Pay 90% of current year tax or 100% of prior year tax (110% if high income) to avoid underpayment penalties.</p>",
  },
  {
    question: "What happens if I can't pay my taxes by April 15?",
    answer: "<p>File on time even if you can't pay to minimize penalties:</p><ul><li><strong>File Form 4868</strong> — Automatic 6-month extension to file (NOT an extension to pay)</li><li><strong>Penalty Structure:</strong><ul><li>Failure to file: 5% per month (up to 25%)</li><li>Failure to pay: 0.5% per month (up to 25%)</li><li>Interest: IRS rate (currently ~8% annually)</li></ul></li><li><strong>Payment Options:</strong><ul><li>IRS Direct Pay (free online payment)</li><li>Installment Agreement ($31-225 setup fee, pay over 72 months)</li><li>Offer in Compromise (settle for less than owed if you qualify)</li></ul></li></ul><p class='text-green-600'>Our CPA partners can negotiate payment plans and penalty abatement if you have reasonable cause.</p>",
  },
  {
    question: "How far back can the IRS audit my return?",
    answer: "<p>Statute of limitations varies by situation:</p><ul><li><strong>Standard Audit Window</strong> — 3 years from filing date (or due date, whichever is later)</li><li><strong>Substantial Underreporting</strong> — 6 years if you omitted >25% of gross income</li><li><strong>Fraud or Non-Filing</strong> — No statute of limitations (IRS can audit indefinitely)</li><li><strong>Trigger Points:</strong><ul><li>High income (>$500k)</li><li>Large deductions relative to income</li><li>Cash-intensive businesses</li><li>Crypto transactions</li><li>International accounts</li></ul></li></ul><p class='text-yellow-600'><strong>Record Retention:</strong> Keep tax documents for 7 years (returns, receipts, bank statements, K-1s).</p>",
  },

  // BOIR Filing FAQs
  {
    question: "What is a Beneficial Ownership Information Report (BOIR)?",
    answer: "<p>The Corporate Transparency Act (CTA) requires most U.S. entities to report beneficial owners to FinCEN:</p><ul><li><strong>Purpose</strong> — Combat money laundering, tax evasion, and illicit finance</li><li><strong>Effective Date</strong> — January 1, 2024</li><li><strong>Who Must File</strong> — LLCs, corporations, and similar entities created by filing with a Secretary of State</li><li><strong>Beneficial Owner Defined</strong> — Anyone who owns 25%+ or exercises substantial control</li></ul><p class='text-yellow-600'><strong>Penalties for Non-Compliance:</strong> $500/day civil penalty + up to $10,000 fine + 2 years imprisonment for willful violations.</p>",
  },
  {
    question: "Does my company need to file a BOIR?",
    answer: "<p>Most small businesses must file unless exempt:</p><p><strong>Required to File:</strong></p><ul><li>LLCs (single-member and multi-member)</li><li>Corporations (C corps and S corps)</li><li>Limited partnerships formed by state filing</li></ul><p><strong>Exempt Entities (23 categories):</strong></p><ul><li>Publicly traded companies</li><li>Banks and credit unions</li><li>Insurance companies</li><li>SEC-registered entities (investment advisors, broker-dealers)</li><li>Tax-exempt 501(c) organizations</li><li>Large operating companies (20+ employees, $5M+ revenue, physical U.S. office)</li></ul><p class='text-green-600'>Use our eligibility checker — answer 5 questions to determine your filing requirement.</p>",
  },
  {
    question: "What information do I need to provide in a BOIR?",
    answer: "<p>You must report details for the company and each beneficial owner:</p><p><strong>Company Information:</strong></p><ul><li>Legal name and any trade names (DBAs)</li><li>Address (not a P.O. box)</li><li>EIN (or foreign tax ID)</li><li>State/jurisdiction of formation</li></ul><p><strong>Beneficial Owner Information:</strong></p><ul><li>Full legal name</li><li>Date of birth</li><li>Residential address (not business address)</li><li>Government-issued ID (driver's license, passport) with photo</li><li>Unique FinCEN identifier (if previously obtained)</li></ul><p>Our secure upload portal encrypts all sensitive data and auto-completes the FinCEN filing.</p>",
  },
  {
    question: "When is the BOIR filing deadline?",
    answer: "<p>Deadlines depend on when your entity was formed:</p><ul><li><strong>Existing Companies (formed before 1/1/2024)</strong> — Must file by January 1, 2025</li><li><strong>New Companies (formed in 2024)</strong> — 90 days from formation date</li><li><strong>Companies Formed After 1/1/2025</strong> — 30 days from formation</li></ul><p class='text-yellow-600'><strong>⚠ No Extensions Available:</strong> FinCEN does not grant filing extensions. Late filings trigger penalties immediately.</p>",
  },
  {
    question: "Do I need to update my BOIR if information changes?",
    answer: "<p>Yes, updates are required within 30 days of any change:</p><p><strong>Triggering Changes:</strong></p><ul><li>New beneficial owner (acquisition, inheritance)</li><li>Change in ownership percentage</li><li>Beneficial owner's address change</li><li>Legal name change</li><li>New or changed ID document</li></ul><p><strong>No Update Needed For:</strong></p><ul><li>Minor address corrections (e.g., typos)</li><li>Passport/license renewals (same number)</li></ul><p class='text-green-600'>Our monitoring service sends automatic reminders when updates are due based on your entity's activity.</p>",
  },
  {
    question: "Is BOIR information public?",
    answer: "<p>No, FinCEN maintains strict confidentiality:</p><p><strong>Who Can Access:</strong></p><ul><li>Federal law enforcement (with court order)</li><li>State/local law enforcement (via federal request)</li><li>Treasury Department for tax administration</li><li>Foreign law enforcement (with U.S. authorization)</li><li>Financial institutions (with company consent for due diligence)</li></ul><p><strong>Not Accessible To:</strong></p><ul><li>General public</li><li>Private parties (creditors, competitors)</li><li>Civil litigants</li></ul><p class='text-green-600'><strong>Security:</strong> FinCEN uses bank-level encryption and multi-factor authentication. No data breaches reported since implementation.</p>",
  },

  // CPA Handoff FAQs
  {
    question: "How does the CPA handoff process work?",
    answer: "<p>We've built a seamless bridge between our platform and your CPA:</p><ol><li><strong>Complete Your Documents</strong> — Upload all income statements, K-1s, crypto reports, receipts</li><li><strong>AI Pre-Review</strong> — Our system categorizes, flags issues, and pre-fills forms</li><li><strong>Generate Handoff Package</strong> — One-click export of all source documents + pre-filled forms</li><li><strong>Secure CPA Portal Access</strong> — Grant your CPA read-only access to your dashboard</li><li><strong>CPA Reviews & Files</strong> — Your CPA finalizes, signs, and e-files your return</li></ol><p class='text-green-600'>Average CPA prep time reduced by 70% using our handoff packages.</p>",
  },
  {
    question: "What format does the CPA handoff package use?",
    answer: "<p>We support all major tax software formats:</p><ul><li><strong>PDF Package</strong> — Organized folder with all source documents + IRS forms</li><li><strong>ProConnect/Lacerte Import</strong> — Direct XML import (Intuit products)</li><li><strong>Drake Tax Import</strong> — .dtt file format</li><li><strong>UltraTax CS Import</strong> — Thomson Reuters format</li><li><strong>TaxAct/TurboTax</strong> — .tax file export</li></ul><p>Your CPA simply imports our file and all data populates automatically — no manual re-entry.</p>",
  },
  {
    question: "Can I work with my existing CPA?",
    answer: "<p>Absolutely! We're designed to enhance, not replace, your CPA relationship:</p><ul><li><strong>CPA Collaboration Mode</strong> — Invite your CPA to the platform for free (they see all your data)</li><li><strong>No Software Changes</strong> — Your CPA keeps using their current tax software</li><li><strong>Save CPA Time = Save Money</strong> — Reduce prep time (and your CPA's bill) by 50-70%</li></ul><p class='text-yellow-600'><strong>CPA Benefits:</strong> They get organized, categorized data instead of shoeboxes of receipts. Many CPAs offer discounts when clients use our platform.</p>",
  },
  {
    question: "What if I don't have a CPA?",
    answer: "<p>We offer multiple options:</p><ol><li><strong>Self-File (DIY)</strong> — Our platform generates final tax forms you can e-file directly (includes audit support)</li><li><strong>CPA Marketplace</strong> — Browse our network of vetted CPAs specializing in crypto, K-1s, and complex returns<ul><li>See transparent pricing upfront</li><li>Read verified reviews</li><li>Compare qualifications (EA, CPA, CFP)</li></ul></li><li><strong>Flat-Fee CPA Review</strong> — Our in-house CPAs review and sign your return ($299-$599 depending on complexity)</li></ol><p class='text-green-600'>Most clients without a CPA use our CPA marketplace and save 40% vs. traditional firms.</p>",
  },
  {
    question: "How much does CPA handoff cost?",
    answer: "<p>Pricing varies by service level:</p><ul><li><strong>Handoff Package Generation</strong> — Free (included with all plans)</li><li><strong>CPA Portal Access</strong> — Free for your invited CPA</li><li><strong>PromptTax CPA Review</strong> — $299 (simple returns) to $599 (complex K-1s + crypto)</li><li><strong>Full Representation</strong> — $799+ (we file, sign, and handle all IRS correspondence)</li></ul><p class='text-yellow-600'><strong>Compare:</strong> Traditional CPA crypto tax return = $1,500-$3,000. With our platform doing the heavy lifting, expect to pay 50-70% less.</p>",
  },
  {
    question: "What happens if the IRS audits me after CPA handoff?",
    answer: "<p>You're protected with our comprehensive audit support:</p><p><strong>Included with All Plans:</strong></p><ul><li><strong>Document Vault</strong> — 7-year storage of all supporting docs</li><li><strong>Audit Assistance</strong> — Our team helps you respond to IRS notices</li><li><strong>Calculation Verification</strong> — We'll re-run all calculations to confirm accuracy</li></ul><p><strong>Premium Audit Defense ($199/year):</strong></p><ul><li>CPA representation in IRS correspondence</li><li>Unlimited phone support during audit</li><li>In-person representation if needed</li><li>Appeals support</li></ul><p class='text-green-600'><strong>Our Audit Rate:</strong> <0.1% (vs. 0.4% national average) — our AI flags issues before filing.</p>",
  },
  {
    question: "Can the CPA make changes to my return after handoff?",
    answer: "<p>Yes, your CPA has full flexibility:</p><ul><li><strong>Edit Any Field</strong> — Our handoff is a starting point, not final</li><li><strong>Add Missing Items</strong> — CPAs can append additional forms or schedules</li><li><strong>Override AI Categorizations</strong> — Professional judgment always prevails</li><li><strong>Two-Way Sync</strong> — If your CPA makes changes, they sync back to your dashboard (with your permission)</li></ul><p>Think of our platform as an intelligent organizer and form pre-filler. Your CPA applies expertise to finalize and sign.</p>",
  },
  {
    question: "What credentials do PromptTax CPAs have?",
    answer: "<p>Our CPA network maintains rigorous standards:</p><ul><li><strong>Licensed CPAs or Enrolled Agents (EAs)</strong> — All federally authorized to represent taxpayers</li><li><strong>Crypto Tax Specialists</strong> — Minimum 3 years experience with digital asset taxation</li><li><strong>Continuing Education</strong> — 40+ hours/year focused on IRS updates, crypto regs, K-1 complexities</li><li><strong>E&O Insurance</strong> — $1M+ errors and omissions coverage</li><li><strong>Background Checks</strong> — All CPAs undergo criminal and credential verification</li></ul><p class='text-green-600'>Average experience: 12 years in tax preparation | Average client rating: 4.8/5 stars</p>",
  },
]