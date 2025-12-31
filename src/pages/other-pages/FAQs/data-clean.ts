export type FaqType = {
    question: string
    answer: string
}

export const faqData: FaqType[] = [
    // Crypto Tax FAQs
    {
        question: "How do I upload my crypto transaction history?",
        answer: "We've streamlined the upload process for maximum convenience:\n\n1. Visit the Upload Center — Navigate to your dashboard and click Upload Transactions.\n2. Connect via API — Instantly sync transaction data from supported exchanges (e.g., Coinbase, Binance).\n3. Manual CSV Upload — Download your transaction history from any exchange, then drag and drop the CSV file.\n4. Auto-Categorization — Our AI engine categorizes transactions (trade, transfer, income) and flags any anomalies.\n\n✓ Most uploads complete in under 2 minutes",
    },
    {
        question: "What crypto tax forms will I receive?",
        answer: "We generate comprehensive IRS-compliant documentation:\n\n• Form 8949 — Capital gains/losses for each transaction\n• Schedule D — Summary of total capital gains and losses\n• Schedule 1 — Additional income (staking, mining, airdrops)\n• State Tax Forms — Automatically generated for applicable states\n\nAll forms are pre-filled, reviewed by our AI, and ready for e-filing or CPA handoff.",
    },
    {
        question: "How does cost basis tracking work?",
        answer: "Our system uses industry-leading methodology:\n\n• FIFO, LIFO, HIFO — Choose your preferred accounting method (FIFO is default)\n• Specific Identification — Manually select which coins to sell for tax optimization\n• Automatic Adjustments — Handles forks, splits, and chain migrations seamlessly\n\n⚠ Important: You must maintain consistent accounting methods year-over-year per IRS guidelines.",
    },
    {
        question: "Are NFT transactions handled differently?",
        answer: "Yes, NFTs require special treatment under current IRS guidance:\n\n• Capital Asset Classification — Most NFTs are treated as collectibles (28% max tax rate)\n• Royalty Income — Creator royalties count as ordinary income on Schedule C\n• Gas Fees — Ethereum gas fees increase your cost basis\n\nOur platform automatically categorizes NFT transactions and applies the correct tax treatment.",
    },
    {
        question: "What about DeFi staking and liquidity pools?",
        answer: "DeFi taxation is complex but manageable:\n\n• Staking Rewards — Ordinary income at fair market value when received\n• LP Token Deposits — Not a taxable event (no sale occurs)\n• Impermanent Loss — Only realized when you withdraw; reduces capital gains\n• Yield Farming — Token rewards are ordinary income; swaps trigger capital gains\n\n✓ Pro Tip: Our DeFi dashboard tracks all protocol interactions across 50+ chains.",
    },
    {
        question: "How do you handle crypto-to-crypto trades?",
        answer: "Every crypto-to-crypto swap is a taxable event per IRS Notice 2014-21:\n\n1. Calculate Fair Market Value — We fetch historical USD prices at trade time\n2. Determine Gain/Loss — (FMV of received crypto) - (cost basis of sent crypto)\n3. Report on Form 8949 — Each trade becomes a line item with date, cost basis, and proceeds\n\nNote: Like-kind exchanges do NOT apply to crypto as of 2018 Tax Cuts and Jobs Act.",
    },
    {
        question: "What records should I keep for crypto taxes?",
        answer: "Maintain comprehensive documentation:\n\n• Transaction Logs — Date, time, amount, exchange for every trade\n• Wallet Addresses — Prove ownership of wallets and transactions\n• Exchange Statements — Monthly/annual summaries from all platforms\n• Fair Market Value — USD price at time of each transaction\n• Receipts for Purchases — If you bought crypto with fiat, save bank records\n\nOur platform auto-stores all these records in your secure vault for 7+ years.",
    },
    {
        question: "Can I deduct crypto losses?",
        answer: "Yes, with important limitations:\n\n• Capital Losses — Offset capital gains dollar-for-dollar with no limit\n• $3,000 Annual Deduction — Excess losses can reduce ordinary income by up to $3,000/year\n• Carryforward Indefinitely — Unused losses roll forward to future tax years\n• Wash Sale Rule (Proposed) — Currently doesn't apply to crypto, but legislation pending\n\n⚠ Tax Loss Harvesting: Strategically sell losing positions before year-end to maximize deductions.",
    },
    {
        question: "How are mining and staking rewards taxed?",
        answer: "These are treated as self-employment income:\n\n• Ordinary Income — Report USD fair market value at receipt on Schedule C\n• Self-Employment Tax — Subject to 15.3% SE tax unless hobby mining\n• Cost Basis Established — FMV at receipt becomes your basis for future sales\n• Deductible Expenses — Electricity, hardware, pool fees can offset income\n\nOur platform tracks all rewards and auto-generates Schedule C with expense deductions.",
    },
    {
        question: "What happens if I gifted or donated crypto?",
        answer: "Tax treatment varies by recipient:\n\n• Gifts to Individuals — Not taxable to you; recipient inherits your cost basis (gift tax applies if >$18,000)\n• Donations to Qualified 501(c)(3) — Deduct fair market value; no capital gains tax on appreciation\n• Non-Qualified Donations — Treated as a sale; you owe capital gains tax\n\n✓ Strategy: Donate appreciated crypto to charity for maximum tax benefit (deduct FMV, avoid gains tax).",
    },
    {
        question: "Do I need to report holdings if I didn't sell?",
        answer: "The IRS requires disclosure even without sales:\n\n• Form 1040 Question — Must answer yes/no to 'virtual currency' question\n• FBAR (FinCEN 114) — Required if foreign exchange holdings exceed $10,000 at any point\n• Form 8938 (FATCA) — For foreign crypto accounts over threshold ($50k-$300k depending on filing status)\n\nPenalties: Failure to report can result in $10,000-$50,000 fines plus criminal charges.",
    },
    {
        question: "How do hard forks and airdrops affect my taxes?",
        answer: "IRS Revenue Ruling 2019-24 provides clarity:\n\n• Hard Forks Without Airdrop — Not taxable until you sell\n• Airdrops (including fork airdrops) — Ordinary income at FMV when you have control\n• Cost Basis — FMV at receipt becomes your basis\n\nExample: Bitcoin Cash fork — if you received 1 BCH worth $300, that's $300 ordinary income. When you later sell at $400, you have $100 capital gain.",
    },
    {
        question: "What if I lost access to my wallet or got hacked?",
        answer: "The IRS allows casualty loss deductions in specific circumstances:\n\n• Theft Losses — Must file police report and prove loss; deduct FMV at time of theft\n• Lost Private Keys — Harder to prove; may need expert affidavit showing wallet is unrecoverable\n• Limitations — Post-2017, only federally declared disaster losses qualify for individuals\n\nDocumentation Required: Exchange correspondence, police reports, blockchain evidence, third-party attestation.",
    },
    {
        question: "Can I amend prior years if I missed crypto taxes?",
        answer: "Yes, through voluntary disclosure:\n\n• File Form 1040-X — Amended return for each missed year (within 3-year statute)\n• Pay Taxes + Interest — Owed taxes plus interest (but often avoid penalties with reasonable cause)\n• IRS Amnesty Programs — Streamlined filing procedures for non-willful violations\n\n✓ Act Now: Voluntary disclosure before IRS contact dramatically reduces penalties. Our CPA team can assist.",
    },

    // K-1 Forms FAQs
    {
        question: "What is a Schedule K-1 and when do I receive one?",
        answer: "Schedule K-1 reports your share of income, deductions, and credits from pass-through entities:\n\n• Partnerships (Form 1065) — K-1 shows your distributive share of partnership income\n• S Corporations (Form 1120-S) — Reports your pro-rata share of S corp profits/losses\n• Trusts/Estates (Form 1041) — Shows income distributed to beneficiaries\n\nYou should receive K-1s by March 15 (partnerships/S corps) or April 15 (estates/trusts).",
    },
    {
        question: "What are the 3 tests for deducting K-1 losses?",
        answer: "To deduct losses from your K-1, you must pass all three tests:\n\n1. Basis Test — You can only deduct losses up to your basis in the entity (initial investment + additional contributions + prior income - prior distributions)\n2. At-Risk Test — Limits losses to amounts you could actually lose (generally excludes non-recourse debt)\n3. Passive Activity Loss (PAL) Test — If you don't materially participate (500+ hours/year), losses can only offset passive income\n\nCarryforward: Disallowed losses carry forward indefinitely until you pass the tests.",
    },
    {
        question: "How do I calculate my basis in a partnership?",
        answer: "Partnership basis is dynamic and changes annually:\n\nStarting Basis: Initial capital contribution + purchase price (if you bought in)\n\nAnnual Increases:\n• Your share of partnership income (including tax-exempt income)\n• Additional capital contributions\n• Your share of partnership liabilities (increases basis)\n\nAnnual Decreases:\n• Distributions received (cash + FMV of property)\n• Your share of partnership losses\n• Non-deductible expenses\n• Decrease in your share of liabilities\n\nOur K-1 tracker auto-calculates basis adjustments each year.",
    },
    {
        question: "What's the difference between ordinary income and separately stated items on K-1?",
        answer: "K-1 separates items that may have different tax treatment:\n\nOrdinary Income (Box 1):\n• Business profits from operations\n• Reported on Schedule E, Page 2\n• May be subject to self-employment tax (if GP or active S corp owner)\n\nSeparately Stated Items:\n• Box 9 — Net short-term/long-term capital gains (go to Schedule D)\n• Box 10 — Unrecaptured Section 1250 gain (real estate depreciation recapture)\n• Box 13 — Credits (low-income housing, foreign tax, etc.)\n• Box 17 — Alternative minimum tax (AMT) adjustments\n\nEach box flows to different parts of your Form 1040.",
    },
    {
        question: "Why is my K-1 income different from my cash distribution?",
        answer: "This is the most common K-1 confusion — taxation doesn't match cash flow:\n\n• Phantom Income — You're taxed on your share of entity profits, even if cash wasn't distributed (entity retained earnings for operations)\n• Example: Partnership earns $100k profit, you own 25% = $25k taxable income on K-1. But partnership only distributed $10k cash to you = $15k phantom income\n• Why This Happens: Entity needs cash for growth, debt repayment, or reserves\n\nPlan Ahead: Ask for distribution policy in operating agreement; request tax distributions to cover your liability.",
    },
    {
        question: "Do I owe self-employment tax on K-1 income?",
        answer: "Depends on your role and entity type:\n\nGeneral Partners (GPs):\n• Subject to SE tax on guaranteed payments (Box 4a) and often on distributive share (Box 1)\n• Rate: 15.3% (12.4% Social Security + 2.9% Medicare)\n\nLimited Partners (LPs):\n• Generally NOT subject to SE tax (investment income)\n• Exception: If you provide services to the partnership\n\nS Corporation Shareholders:\n• K-1 income is NOT subject to SE tax\n• But must take reasonable W-2 salary (which IS subject to payroll tax)\n\nOur platform auto-identifies SE tax obligations and pre-fills Schedule SE.",
    },
    {
        question: "How do I report K-1 income on my personal return?",
        answer: "K-1 items flow to multiple schedules:\n\n1. Schedule E (Page 2) — Main location for ordinary business income/loss (Box 1-3)\n2. Schedule D — Capital gains/losses (Box 9)\n3. Form 8582 — Passive activity loss limitations (if applicable)\n4. Form 4952 — Investment interest expense (Box 13 code J)\n5. Schedule A — Charitable contributions (Box 13 code A), Section 179 deduction\n6. Form 1116 — Foreign taxes paid (Box 16)\n\n✓ Upload your K-1 to our platform and we'll auto-populate all the right forms.",
    },
    {
        question: "What should I do if my K-1 arrives late?",
        answer: "Late K-1s are frustratingly common (complex entities need time to finalize). Here's your strategy:\n\n1. File Extension (Form 4868) — Automatic 6-month extension to October 15\n2. Estimate Tax Liability — Must still pay estimated tax by April 15 to avoid penalties\n3. Use Prior Year K-1 — Estimate based on last year's income/losses\n4. Contact Entity — Request draft K-1 or estimated figures\n\nPenalties: Failure to pay by April 15 = 0.5%/month penalty + interest, even with valid extension.",
    },
    {
        question: "Can I deduct my K-1 losses if I'm a passive investor?",
        answer: "Passive losses are strictly limited:\n\nPassive Activity Loss (PAL) Rules:\n• Can only deduct passive losses against passive income (not W-2 wages or portfolio income)\n• Disallowed losses carry forward indefinitely\n• Suspended losses fully deductible when you dispose of entire interest\n\nExceptions:\n• $25,000 Special Allowance — If you're a real estate professional and actively participate\n• Real Estate Professional Status — Must spend 750+ hours/year in real property trades AND >50% of your working time\n\nUse Form 8582 to track and carry forward passive losses.",
    },
    {
        question: "What happens when I sell my partnership interest or S corp stock?",
        answer: "The sale triggers complex tax calculations:\n\n• Capital Gain/Loss — (Sale price) - (adjusted basis) = taxable gain\n• Hot Assets (IRC §751) — Portion of gain from inventory and receivables taxed as ordinary income\n• Section 1250 Recapture — Depreciation on real estate recaptured at 25% rate\n• Suspended PALs Released — All carryforward passive losses become deductible\n\n✓ Planning Tip: Time the sale to release suspended losses and optimize your tax bracket.",
    },

    // Form 1040 FAQs
    {
        question: "What documents do I need to file my Form 1040?",
        answer: "Gather these essential documents before starting:\n\nIncome Documents:\n• W-2s — Wage and salary income from employers\n• 1099-NEC/MISC — Self-employment and contractor income\n• 1099-INT/DIV — Interest and dividend income\n• 1099-B — Stock and crypto sales\n• Schedule K-1 — Partnership/S corp income\n\nDeduction Documents:\n• Mortgage interest (Form 1098)\n• Property tax receipts\n• Charitable donation receipts\n• Student loan interest (Form 1098-E)\n• Medical expenses and receipts\n\nUpload all documents to our secure portal and we'll auto-populate your return.",
    },
    {
        question: "Should I take the standard deduction or itemize?",
        answer: "Run the numbers to determine which saves more:\n\n2024 Standard Deduction:\n• Single: $14,600\n• Married Filing Jointly: $29,200\n• Head of Household: $21,900\n\nWhen to Itemize:\n• Your itemized deductions exceed the standard deduction\n• You have large medical expenses (>7.5% of AGI)\n• You paid significant mortgage interest\n• You made substantial charitable contributions\n• You have high state/local taxes (up to $10,000 cap)\n\nOur platform automatically calculates both and selects the method that saves you the most.",
    },
    {
        question: "What tax credits am I eligible for?",
        answer: "Tax credits directly reduce your tax liability dollar-for-dollar:\n\nRefundable Credits (can trigger refund):\n• Earned Income Tax Credit (EITC) — Up to $7,430 for low-to-moderate income families\n• Child Tax Credit — $2,000 per qualifying child under 17\n• American Opportunity Credit — Up to $2,500 for college expenses (first 4 years)\n\nNon-Refundable Credits (reduce tax to $0):\n• Lifetime Learning Credit — Up to $2,000 for education expenses\n• Child and Dependent Care Credit — Up to $3,000 for childcare costs\n• Saver's Credit — Up to $1,000 for retirement contributions\n• Residential Energy Credit — 30% of solar panel installation costs\n\nOur eligibility wizard checks all available credits based on your situation.",
    },
    {
        question: "How do I report freelance or side hustle income?",
        answer: "Self-employment income requires additional reporting:\n\n1. Schedule C (Profit or Loss) — Report gross income and business expenses\n2. Deductible Expenses: Home office, equipment, software, marketing, mileage (67¢/mile in 2024), health insurance\n3. Schedule SE (Self-Employment Tax) — Pay 15.3% SE tax on net profit >$400\n4. Quarterly Estimated Taxes — Must prepay taxes if you owe >$1,000 (due April 15, June 15, Sept 15, Jan 15)\n\nPenalty Avoidance: Pay 90% of current year tax or 100% of prior year tax (110% if high income) to avoid underpayment penalties.",
    },
    {
        question: "What happens if I can't pay my taxes by April 15?",
        answer: "File on time even if you can't pay to minimize penalties:\n\n• File Form 4868 — Automatic 6-month extension to file (NOT an extension to pay)\n\nPenalty Structure:\n• Failure to file: 5% per month (up to 25%)\n• Failure to pay: 0.5% per month (up to 25%)\n• Interest: IRS rate (currently ~8% annually)\n\nPayment Options:\n• IRS Direct Pay (free online payment)\n• Installment Agreement ($31-225 setup fee, pay over 72 months)\n• Offer in Compromise (settle for less than owed if you qualify)\n\nOur CPA partners can negotiate payment plans and penalty abatement if you have reasonable cause.",
    },
    {
        question: "How far back can the IRS audit my return?",
        answer: "Statute of limitations varies by situation:\n\n• Standard Audit Window — 3 years from filing date (or due date, whichever is later)\n• Substantial Underreporting — 6 years if you omitted >25% of gross income\n• Fraud or Non-Filing — No statute of limitations (IRS can audit indefinitely)\n\nTrigger Points:\n• High income (>$500k)\n• Large deductions relative to income\n• Cash-intensive businesses\n• Crypto transactions\n• International accounts\n\nRecord Retention: Keep tax documents for 7 years (returns, receipts, bank statements, K-1s).",
    },

    // BOIR Filing FAQs
    {
        question: "What is a Beneficial Ownership Information Report (BOIR)?",
        answer: "The Corporate Transparency Act (CTA) requires most U.S. entities to report beneficial owners to FinCEN:\n\n• Purpose — Combat money laundering, tax evasion, and illicit finance\n• Effective Date — January 1, 2024\n• Who Must File — LLCs, corporations, and similar entities created by filing with a Secretary of State\n• Beneficial Owner Defined — Anyone who owns 25%+ or exercises substantial control\n\nPenalties for Non-Compliance: $500/day civil penalty + up to $10,000 fine + 2 years imprisonment for willful violations.",
    },
    {
        question: "Does my company need to file a BOIR?",
        answer: "Most small businesses must file unless exempt:\n\nRequired to File:\n• LLCs (single-member and multi-member)\n• Corporations (C corps and S corps)\n• Limited partnerships formed by state filing\n\nExempt Entities (23 categories):\n• Publicly traded companies\n• Banks and credit unions\n• Insurance companies\n• SEC-registered entities (investment advisors, broker-dealers)\n• Tax-exempt 501(c) organizations\n• Large operating companies (20+ employees, $5M+ revenue, physical U.S. office)\n\nUse our eligibility checker — answer 5 questions to determine your filing requirement.",
    },
    {
        question: "What information do I need to provide in a BOIR?",
        answer: "You must report details for the company and each beneficial owner:\n\nCompany Information:\n• Legal name and any trade names (DBAs)\n• Address (not a P.O. box)\n• EIN (or foreign tax ID)\n• State/jurisdiction of formation\n\nBeneficial Owner Information:\n• Full legal name\n• Date of birth\n• Residential address (not business address)\n• Government-issued ID (driver's license, passport) with photo\n• Unique FinCEN identifier (if previously obtained)\n\nOur secure upload portal encrypts all sensitive data and auto-completes the FinCEN filing.",
    },
    {
        question: "When is the BOIR filing deadline?",
        answer: "Deadlines depend on when your entity was formed:\n\n• Existing Companies (formed before 1/1/2024) — Must file by January 1, 2025\n• New Companies (formed in 2024) — 90 days from formation date\n• Companies Formed After 1/1/2025 — 30 days from formation\n\n⚠ No Extensions Available: FinCEN does not grant filing extensions. Late filings trigger penalties immediately.",
    },
    {
        question: "Do I need to update my BOIR if information changes?",
        answer: "Yes, updates are required within 30 days of any change:\n\nTriggering Changes:\n• New beneficial owner (acquisition, inheritance)\n• Change in ownership percentage\n• Beneficial owner's address change\n• Legal name change\n• New or changed ID document\n\nNo Update Needed For:\n• Minor address corrections (e.g., typos)\n• Passport/license renewals (same number)\n\nOur monitoring service sends automatic reminders when updates are due based on your entity's activity.",
    },
    {
        question: "Is BOIR information public?",
        answer: "No, FinCEN maintains strict confidentiality:\n\nWho Can Access:\n• Federal law enforcement (with court order)\n• State/local law enforcement (via federal request)\n• Treasury Department for tax administration\n• Foreign law enforcement (with U.S. authorization)\n• Financial institutions (with company consent for due diligence)\n\nNot Accessible To:\n• General public\n• Private parties (creditors, competitors)\n• Civil litigants\n\nSecurity: FinCEN uses bank-level encryption and multi-factor authentication. No data breaches reported since implementation.",
    },

    // CPA Handoff FAQs
    {
        question: "How does the CPA handoff process work?",
        answer: "We've built a seamless bridge between our platform and your CPA:\n\n1. Complete Your Documents — Upload all income statements, K-1s, crypto reports, receipts\n2. AI Pre-Review — Our system categorizes, flags issues, and pre-fills forms\n3. Generate Handoff Package — One-click export of all source documents + pre-filled forms\n4. Secure CPA Portal Access — Grant your CPA read-only access to your dashboard\n5. CPA Reviews & Files — Your CPA finalizes, signs, and e-files your return\n\nAverage CPA prep time reduced by 70% using our handoff packages.",
    },
    {
        question: "What format does the CPA handoff package use?",
        answer: "We support all major tax software formats:\n\n• PDF Package — Organized folder with all source documents + IRS forms\n• ProConnect/Lacerte Import — Direct XML import (Intuit products)\n• Drake Tax Import — .dtt file format\n• UltraTax CS Import — Thomson Reuters format\n• TaxAct/TurboTax — .tax file export\n\nYour CPA simply imports our file and all data populates automatically — no manual re-entry.",
    },
    {
        question: "Can I work with my existing CPA?",
        answer: "Absolutely! We're designed to enhance, not replace, your CPA relationship:\n\n• CPA Collaboration Mode — Invite your CPA to the platform for free (they see all your data)\n• No Software Changes — Your CPA keeps using their current tax software\n• Save CPA Time = Save Money — Reduce prep time (and your CPA's bill) by 50-70%\n\nCPA Benefits: They get organized, categorized data instead of shoeboxes of receipts. Many CPAs offer discounts when clients use our platform.",
    },
    {
        question: "What if I don't have a CPA?",
        answer: "We offer multiple options:\n\n1. Self-File (DIY) — Our platform generates final tax forms you can e-file directly (includes audit support)\n2. CPA Marketplace — Browse our network of vetted CPAs specializing in crypto, K-1s, and complex returns\n   • See transparent pricing upfront\n   • Read verified reviews\n   • Compare qualifications (EA, CPA, CFP)\n3. Flat-Fee CPA Review — Our in-house CPAs review and sign your return ($299-$599 depending on complexity)\n\nMost clients without a CPA use our CPA marketplace and save 40% vs. traditional firms.",
    },
    {
        question: "How much does CPA handoff cost?",
        answer: "Pricing varies by service level:\n\n• Handoff Package Generation — Free (included with all plans)\n• CPA Portal Access — Free for your invited CPA\n• PromptTax CPA Review — $299 (simple returns) to $599 (complex K-1s + crypto)\n• Full Representation — $799+ (we file, sign, and handle all IRS correspondence)\n\nCompare: Traditional CPA crypto tax return = $1,500-$3,000. With our platform doing the heavy lifting, expect to pay 50-70% less.",
    },
    {
        question: "What happens if the IRS audits me after CPA handoff?",
        answer: "You're protected with our comprehensive audit support:\n\nIncluded with All Plans:\n• Document Vault — 7-year storage of all supporting docs\n• Audit Assistance — Our team helps you respond to IRS notices\n• Calculation Verification — We'll re-run all calculations to confirm accuracy\n\nPremium Audit Defense ($199/year):\n• CPA representation in IRS correspondence\n• Unlimited phone support during audit\n• In-person representation if needed\n• Appeals support\n\nOur Audit Rate: <0.1% (vs. 0.4% national average) — our AI flags issues before filing.",
    },
    {
        question: "Can the CPA make changes to my return after handoff?",
        answer: "Yes, your CPA has full flexibility:\n\n• Edit Any Field — Our handoff is a starting point, not final\n• Add Missing Items — CPAs can append additional forms or schedules\n• Override AI Categorizations — Professional judgment always prevails\n• Two-Way Sync — If your CPA makes changes, they sync back to your dashboard (with your permission)\n\nThink of our platform as an intelligent organizer and form pre-filler. Your CPA applies expertise to finalize and sign.",
    },
    {
        question: "What credentials do PromptTax CPAs have?",
        answer: "Our CPA network maintains rigorous standards:\n\n• Licensed CPAs or Enrolled Agents (EAs) — All federally authorized to represent taxpayers\n• Crypto Tax Specialists — Minimum 3 years experience with digital asset taxation\n• Continuing Education — 40+ hours/year focused on IRS updates, crypto regs, K-1 complexities\n• E&O Insurance — $1M+ errors and omissions coverage\n• Background Checks — All CPAs undergo criminal and credential verification\n\nAverage experience: 12 years in tax preparation | Average client rating: 4.8/5 stars",
    },
]
