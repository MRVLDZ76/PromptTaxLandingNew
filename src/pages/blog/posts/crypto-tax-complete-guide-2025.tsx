import BlogPostTemplate from '@/components/BlogPostTemplate';
import { BlogPostMetadata } from '@/types/blog';
import { Card, Table } from 'react-bootstrap';
import { BsQuote, BsCheckCircleFill, BsXCircleFill, BsLightningChargeFill } from 'react-icons/bs';

interface CryptoTaxBlogPostProps {
  metadata: BlogPostMetadata;
}

export default function CryptoTaxBlogPost({ metadata }: CryptoTaxBlogPostProps) {
  return (
    <BlogPostTemplate metadata={metadata}>
      <h2 className="mt-4">The Crypto Tax Problem: Why 2025 Is Different</h2>

      <p className="lead">
        The IRS has made it clear: <strong>cryptocurrency is property, and every trade, sale, swap, or 
        conversion is a taxable event.</strong>
      </p>

      <p>In 2025, the IRS is:</p>
      <ul className="mb-4">
        <li><BsCheckCircleFill className="text-success me-2" />Receiving transaction data directly from exchanges (via Form 1099-DA)</li>
        <li><BsCheckCircleFill className="text-success me-2" />Cross-referencing blockchain data with tax returns</li>
        <li><BsCheckCircleFill className="text-success me-2" />Sending notices to taxpayers with unreported crypto</li>
        <li><BsCheckCircleFill className="text-success me-2" />Imposing penalties up to 40% for underreporting</li>
      </ul>

      <p>
        <strong>Translation:</strong> The days of "crypto tax gray area" are over.
      </p>

      <p>
        But here's the good news: <strong>Prompt Tax automates 95% of crypto tax reporting</strong>, 
        turning what used to take weeks into a 20-minute process with full CPA review.
      </p>

      <h2 className="mt-5">Why Crypto Taxes Are So Complex (And How We Solve It)</h2>

      <h3 className="mt-4"><BsXCircleFill className="text-danger me-2" />The Problem with Traditional Tax Software</h3>

      <p><strong>TurboTax, H&R Block, and others:</strong></p>
      <ul className="mb-4">
        <li>Limited exchange integrations (10-20 exchanges)</li>
        <li>No DeFi support (Uniswap, Aave, Compound)</li>
        <li>Manual NFT entry required</li>
        <li>No staking/airdrops tracking</li>
        <li>Cost basis calculations often wrong</li>
        <li>Extra fees for crypto module ($200-$400)</li>
      </ul>

      <p>
        <strong>Result:</strong> Hours of manual CSV imports, Excel formulas, and crossed fingers 
        hoping the IRS doesn't notice.
      </p>

      <h3 className="mt-4"><BsCheckCircleFill className="text-success me-2" />The Prompt Tax Crypto Solution</h3>

      <div className="row mt-4">
        <div className="col-md-6 mb-3">
          <Card className="h-100">
            <Card.Body>
              <h4 className="text-primary">500+ Exchange & Wallet Integrations</h4>
              <ul className="mb-0">
                <li>Coinbase, Binance, Kraken, Gemini, Crypto.com</li>
                <li>Robinhood, Cash App, PayPal Crypto</li>
                <li>MetaMask, Trust Wallet, Ledger, Trezor</li>
                <li>All major CEX and DEX platforms</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 mb-3">
          <Card className="h-100">
            <Card.Body>
              <h4 className="text-primary">Complete NFT Support</h4>
              <ul className="mb-0">
                <li>OpenSea, Rarible, Foundation, SuperRare</li>
                <li>Auto-import sales, mints, and transfers</li>
                <li>Floor price tracking for cost basis</li>
                <li>Gas fee calculations & royalty income reporting</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 mb-3">
          <Card className="h-100">
            <Card.Body>
              <h4 className="text-primary">DeFi Protocol Integration</h4>
              <ul className="mb-0">
                <li>Uniswap, SushiSwap, PancakeSwap</li>
                <li>Aave, Compound, Maker</li>
                <li>Yield farming income tracking</li>
                <li>Liquidity pool gains/losses & impermanent loss calculations</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 mb-3">
          <Card className="h-100">
            <Card.Body>
              <h4 className="text-primary">Staking & Rewards</h4>
              <ul className="mb-0">
                <li>Ethereum staking rewards</li>
                <li>Cardano, Solana, Polkadot staking</li>
                <li>Mining income (all cryptocurrencies)</li>
                <li>Airdrops and forks</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="bg-primary bg-opacity-10 border border-primary rounded p-4 mt-4 mb-4">
        <h4 className="text-primary">Advanced Cost Basis Methods</h4>
        <div className="row">
          <div className="col-md-3 mb-2"><strong>FIFO</strong> (First In, First Out)</div>
          <div className="col-md-3 mb-2"><strong>LIFO</strong> (Last In, First Out)</div>
          <div className="col-md-3 mb-2"><strong>HIFO</strong> (Highest In, First Out)</div>
          <div className="col-md-3 mb-2"><strong>Specific ID</strong> (Tax-loss harvesting optimization)</div>
        </div>
      </div>

      <h2 className="mt-5">The 5 Biggest Crypto Tax Mistakes (That Cost Taxpayers Thousands)</h2>

      <h3 className="mt-4">1. Not Reporting Crypto-to-Crypto Trades</h3>

      <p><strong>The Mistake:</strong> Many taxpayers think only crypto-to-USD sales are taxable.</p>

      <p>
        <strong>The Reality:</strong> Trading Bitcoin for Ethereum, swapping tokens on Uniswap, or 
        converting USDC to DAI are ALL taxable events.
      </p>

      <div className="bg-light p-4 rounded mb-4">
        <p className="mb-2"><strong>Example:</strong></p>
        <ul className="mb-0">
          <li>Buy 1 BTC at $30,000</li>
          <li>Trade for 15 ETH when BTC is $60,000</li>
          <li className="text-danger fw-bold">Taxable gain: $30,000 (even though you never cashed out to USD)</li>
        </ul>
      </div>

      <p>
        <strong>How Prompt Tax Helps:</strong> Our platform automatically tracks every swap, trade, and conversion 
        across all exchanges and wallets, calculating gains/losses on each transaction.
      </p>

      <p className="text-danger fw-bold">
        Potential IRS Penalty Without Reporting: $6,000-$12,000 (20-40% of unreported gain)
      </p>

      <h3 className="mt-4">2. Missing NFT Sales and Royalties</h3>

      <p><strong>The Mistake:</strong> Not reporting NFT profits because "it's just digital art."</p>

      <p><strong>The Reality:</strong></p>
      <ul className="mb-3">
        <li>NFT sales are capital gains</li>
        <li>Creator royalties are ordinary income</li>
        <li>Minting NFTs establishes cost basis</li>
        <li>Gas fees are part of cost basis</li>
      </ul>

      <div className="bg-light p-4 rounded mb-4">
        <p className="mb-2"><strong>Example:</strong></p>
        <ul className="mb-0">
          <li>Mint NFT for 0.05 ETH ($100) + $50 gas</li>
          <li>Sell for 2 ETH ($4,000)</li>
          <li className="text-danger fw-bold">Taxable gain: $3,850</li>
        </ul>
      </div>

      <p>
        <strong>How Prompt Tax Helps:</strong> Direct OpenSea integration imports all sales, purchases, and 
        royalty income. We track gas fees automatically and calculate cost basis including all fees.
      </p>

      <p className="text-danger fw-bold">
        Potential IRS Penalty Without Reporting: Up to $1,540 (40% of unreported gain)
      </p>

      <h3 className="mt-4">3. Incorrect Cost Basis from Lost Records</h3>

      <p><strong>The Mistake:</strong> "I bought Bitcoin in 2017 but don't remember the price."</p>

      <p>
        <strong>The Reality:</strong> Without cost basis records, the IRS may assume $0 cost basis, 
        meaning 100% of your proceeds are taxable.
      </p>

      <div className="bg-light p-4 rounded mb-4">
        <p className="mb-2"><strong>Example:</strong></p>
        <ul className="mb-0">
          <li>Sell 2 BTC for $120,000 in 2024</li>
          <li>Lost records from 2017 purchase (~$10,000 cost basis)</li>
          <li><strong>With records:</strong> $110,000 taxable gain</li>
          <li><strong>Without records:</strong> $120,000 taxable gain</li>
          <li className="text-danger fw-bold">Extra tax: $2,200+ in unnecessary taxes</li>
        </ul>
      </div>

      <p>
        <strong>How Prompt Tax Helps:</strong> Our blockchain analysis reconstructs transaction history even if 
        you've lost records. We search public blockchain data and cross-reference exchange records going back to 2011.
      </p>

      <h3 className="mt-4">4. Not Tracking Staking, Mining, or Airdrop Income</h3>

      <p>
        <strong>The Mistake:</strong> Thinking staking rewards and airdrops aren't taxable until you sell.
      </p>

      <p>
        <strong>The Reality:</strong> Staking rewards, mining income, and airdrops are taxed as 
        ORDINARY INCOME when received, then as capital gains when sold.
      </p>

      <div className="bg-light p-4 rounded mb-4">
        <p className="mb-2"><strong>Example:</strong></p>
        <ul className="mb-0">
          <li>Stake 10 ETH, earn 0.5 ETH in rewards (~$1,000)</li>
          <li>Later sell that 0.5 ETH for $1,200</li>
          <li><strong>Ordinary income at receipt:</strong> $1,000</li>
          <li><strong>Capital gain at sale:</strong> $200</li>
          <li className="text-danger fw-bold">Total tax owed: ~$350-$450</li>
        </ul>
      </div>

      <p>
        <strong>How Prompt Tax Helps:</strong> We track the date and fair market value of every staking reward, 
        airdrop, and mining payment, properly categorizing as income and establishing cost basis for future sales.
      </p>

      <h3 className="mt-4">5. Failing to Use Tax-Loss Harvesting</h3>

      <p><strong>The Mistake:</strong> Not offsetting gains with losses from down market periods.</p>

      <p>
        <strong>The Reality:</strong> Crypto losses can offset gains dollar-for-dollar, and up to $3,000 of 
        excess losses can offset ordinary income.
      </p>

      <div className="bg-light p-4 rounded mb-4">
        <p className="mb-2"><strong>Example:</strong></p>
        <ul className="mb-0">
          <li>$50,000 gain on Bitcoin sale</li>
          <li>$30,000 loss on altcoin portfolio</li>
          <li className="text-success fw-bold">Net taxable gain: $20,000 (saves ~$6,600 in taxes)</li>
        </ul>
      </div>

      <p>
        <strong>How Prompt Tax Helps:</strong> Our AI identifies unrealized losses in your portfolio and suggests 
        strategic sales to maximize tax benefits while maintaining your investment position (wash sale rules don't 
        apply to crypto yet).
      </p>

      <p className="text-success fw-bold">Tax Savings: $3,000-$10,000+ for active traders</p>

      <h2 className="mt-5">Introducing the Prompt Tax Crypto Bundle</h2>

      <h3 className="mt-4"><span className="text-primary">Crypto Essentials</span> - $149</h3>
      <p><strong>Perfect for:</strong> Casual investors with 50-500 transactions</p>

      <ul className="mb-4">
        <li><BsCheckCircleFill className="text-success me-2" /><strong>Unlimited transaction import</strong> (all exchanges & wallets)</li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>Bitcoin, Ethereum, & top 100 coins</strong></li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>Basic NFT support</strong> (up to 25 transactions)</li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>FIFO cost basis method</strong></li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>Form 8949 & Schedule D generation</strong></li>
        <li><BsCheckCircleFill className="text-success me-2" />Email support</li>
        <li><BsCheckCircleFill className="text-success me-2" />48-hour processing</li>
      </ul>

      <p className="fw-bold">👉 Best for: W-2 employees who bought & held Bitcoin/Ethereum</p>

      <h3 className="mt-4"><span className="text-primary">Crypto Pro + CPA Review</span> - $329 <span className="badge bg-primary">Most Popular</span></h3>
      <p><strong>Perfect for:</strong> Active traders & NFT collectors with 500-5,000 transactions</p>

      <ul className="mb-4">
        <li><BsCheckCircleFill className="text-success me-2" /><strong>Everything in Crypto Essentials</strong></li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>Advanced NFT support</strong> (unlimited)</li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>Complete DeFi integration</strong> (Uniswap, Aave, etc.)</li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>All cost basis methods</strong> (FIFO, LIFO, HIFO, Specific ID)</li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>Mining & staking income reports</strong></li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>CPA review & optimization</strong></li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>Professional e-filing included</strong></li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>Tax-loss harvesting recommendations</strong></li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>30-minute CPA consultation</strong></li>
        <li><BsCheckCircleFill className="text-success me-2" />24-hour processing</li>
      </ul>

      <p className="fw-bold">👉 Best for: Active traders, NFT collectors, DeFi users</p>

      <h3 className="mt-4"><span className="text-primary">Crypto Elite + White Glove Service</span> - $549</h3>
      <p><strong>Perfect for:</strong> High-volume traders, miners, professionals with 5,000+ transactions</p>

      <ul className="mb-4">
        <li><BsCheckCircleFill className="text-success me-2" /><strong>Everything in Crypto Pro</strong></li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>Unlimited transactions</strong> (10,000+)</li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>Mining business expenses</strong> (equipment, electricity)</li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>International exchange support</strong> (non-US exchanges)</li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>Wrapped tokens & bridge transactions</strong></li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>Options & futures trading</strong> (derivatives)</li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>Multi-entity support</strong> (LLC, S-corp crypto holdings)</li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>60-minute tax strategy session with CPA</strong></li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>Dedicated crypto tax specialist</strong></li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>Quarterly estimated tax planning</strong></li>
        <li><BsCheckCircleFill className="text-success me-2" /><strong>Audit support & IRS notice assistance</strong></li>
        <li><BsCheckCircleFill className="text-success me-2" />12-hour express processing</li>
      </ul>

      <p className="fw-bold">👉 Best for: Professional traders, miners, crypto businesses</p>

      <h2 className="mt-5">Real Crypto Taxpayer Success Stories</h2>

      <Card as="blockquote" className="card-body bg-light overflow-hidden mt-4 p-sm-5">
        <div className="vr bg-primary h-100 position-absolute top-0 start-0" style={{ width: 3, opacity: '100%' }} />
        <span className="display-4 position-absolute top-0 start-0 opacity-1 mt-n3"><BsQuote /></span>
        <p className="fs-6 heading-color mb-0">
          "I had 2,400 transactions across Binance, Coinbase, and MetaMask. TurboTax wanted $349 just for 
          the crypto module, then I'd still have to manually import everything. Prompt Tax connected to all 
          my accounts automatically, and their CPA found $4,100 in losses I didn't know I could claim. 
          Saved me $902 in taxes!"
        </p>
        <div className="blockquote-footer mb-0 lead mt-3">
          Michael T., Day Trader
          <div className="text-success fw-bold mt-2">
            2,400 Transactions | Tax Savings: $902 | Time Saved: ~15 hours | Plan: Crypto Pro + CPA Review
          </div>
        </div>
      </Card>

      <Card as="blockquote" className="card-body bg-light overflow-hidden mt-4 p-sm-5">
        <div className="vr bg-primary h-100 position-absolute top-0 start-0" style={{ width: 3, opacity: '100%' }} />
        <span className="display-4 position-absolute top-0 start-0 opacity-1 mt-n3"><BsQuote /></span>
        <p className="fs-6 heading-color mb-0">
          "As an NFT artist, I needed to track minting costs, sales, and royalty income across multiple 
          marketplaces. Prompt Tax's OpenSea integration pulled everything automatically, properly categorized 
          my royalties as self-employment income, and helped me deduct my art supplies and software. 
          Total game-changer."
        </p>
        <div className="blockquote-footer mb-0 lead mt-3">
          Sophia L., NFT Creator
          <div className="text-success fw-bold mt-2">
            189 NFT Transactions | Royalty Income: $14,300 | Deductions Found: $3,200 | Plan: Crypto Pro
          </div>
        </div>
      </Card>

      <Card as="blockquote" className="card-body bg-light overflow-hidden mt-4 p-sm-5">
        <div className="vr bg-primary h-100 position-absolute top-0 start-0" style={{ width: 3, opacity: '100%' }} />
        <span className="display-4 position-absolute top-0 start-0 opacity-1 mt-n3"><BsQuote /></span>
        <p className="fs-6 heading-color mb-0">
          "We yield farm on multiple protocols and had no idea how to report it. Prompt Tax connected to our 
          MetaMask, calculated impermanent loss, tracked all our LP tokens, and the CPA explained everything 
          in our consultation call. They even helped us set up quarterly payments for 2025. Worth every penny 
          of the $549."
        </p>
        <div className="blockquote-footer mb-0 lead mt-3">
          David & Emma C., DeFi Investors
          <div className="text-success fw-bold mt-2">
            7 DeFi Protocols | 14 Liquidity Pool Positions | Plan: Crypto Elite + White Glove
          </div>
        </div>
      </Card>

      <Card as="blockquote" className="card-body bg-light overflow-hidden mt-4 p-sm-5">
        <div className="vr bg-primary h-100 position-absolute top-0 start-0" style={{ width: 3, opacity: '100%' }} />
        <span className="display-4 position-absolute top-0 start-0 opacity-1 mt-n3"><BsQuote /></span>
        <p className="fs-6 heading-color mb-0">
          "I've been mining since 2019 and dreaded taxes every year. Prompt Tax treated my mining as a business, 
          helped me deduct my equipment ($12k), electricity ($8k), and home office. Turned what looked like $45k 
          taxable income into $25k after deductions. The CPA also set me up properly for 2025 with quarterly estimates."
        </p>
        <div className="blockquote-footer mb-0 lead mt-3">
          James R., Ethereum Miner
          <div className="text-success fw-bold mt-2">
            Mining Income: $45,000 | Business Deductions: $20,000 | Tax Savings: ~$4,400 | Plan: Crypto Elite
          </div>
        </div>
      </Card>

      <h2 className="mt-5">How It Works: 3 Simple Steps</h2>

      <div className="row mt-4 mb-5">
        <div className="col-md-4 mb-3">
          <Card className="h-100 text-center border-primary">
            <Card.Body>
              <div className="display-4 text-primary mb-3 fw-bold">1</div>
              <h4>Connect Your Accounts</h4>
              <p className="mb-2"><strong>(5 minutes)</strong></p>
              <ul className="text-start">
                <li>Click "Connect Exchange"</li>
                <li>Enter API key (read-only, secure)</li>
                <li>We automatically import all transactions</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-3">
          <Card className="h-100 text-center border-primary">
            <Card.Body>
              <div className="display-4 text-primary mb-3 fw-bold">2</div>
              <h4>Review & Optimize</h4>
              <p className="mb-2"><strong>(10 minutes)</strong></p>
              <ul className="text-start">
                <li>AI automatically categorizes transactions</li>
                <li>Confirm wallet addresses</li>
                <li>Review tax-loss harvesting opportunities</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-3">
          <Card className="h-100 text-center border-primary">
            <Card.Body>
              <div className="display-4 text-primary mb-3 fw-bold">3</div>
              <h4>CPA Review & File</h4>
              <p className="mb-2"><strong>(24-48 hours)</strong></p>
              <ul className="text-start">
                <li>Licensed CPA reviews everything</li>
                <li>Consultation call (Pro & Elite)</li>
                <li>We file electronically</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </div>

      <h2 className="mt-5">Compare: Prompt Tax vs. Everyone Else</h2>

      <Table responsive bordered className="mt-4">
        <thead className="table-light">
          <tr>
            <th>Feature</th>
            <th>DIY Software</th>
            <th>CoinTracker</th>
            <th>TaxBit</th>
            <th className="table-primary"><strong>Prompt Tax</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Pricing</strong></td>
            <td>$0-$100</td>
            <td>$199-$2,999</td>
            <td>$250-$5,000</td>
            <td className="table-primary"><strong>$149-$549</strong></td>
          </tr>
          <tr>
            <td><strong>Exchange Integrations</strong></td>
            <td>10-20</td>
            <td>300+</td>
            <td>500+</td>
            <td className="table-primary"><strong>500+</strong></td>
          </tr>
          <tr>
            <td><strong>NFT Support</strong></td>
            <td><BsXCircleFill className="text-danger" /> Limited</td>
            <td><BsCheckCircleFill className="text-success" /> Yes</td>
            <td><BsCheckCircleFill className="text-success" /> Yes</td>
            <td className="table-primary"><strong><BsCheckCircleFill className="text-success" /> Full</strong></td>
          </tr>
          <tr>
            <td><strong>DeFi Support</strong></td>
            <td><BsXCircleFill className="text-danger" /> None</td>
            <td>⚠️ Basic</td>
            <td><BsCheckCircleFill className="text-success" /> Advanced</td>
            <td className="table-primary"><strong><BsCheckCircleFill className="text-success" /> Complete</strong></td>
          </tr>
          <tr>
            <td><strong>CPA Review</strong></td>
            <td><BsXCircleFill className="text-danger" /> None</td>
            <td><BsXCircleFill className="text-danger" /> Add-on</td>
            <td><BsXCircleFill className="text-danger" /> Add-on</td>
            <td className="table-primary"><strong><BsCheckCircleFill className="text-success" /> Included</strong></td>
          </tr>
          <tr>
            <td><strong>Tax-Loss Harvesting</strong></td>
            <td><BsXCircleFill className="text-danger" /> None</td>
            <td><BsCheckCircleFill className="text-success" /> Basic</td>
            <td><BsCheckCircleFill className="text-success" /> Yes</td>
            <td className="table-primary"><strong><BsLightningChargeFill className="text-warning" /> AI-powered</strong></td>
          </tr>
          <tr>
            <td><strong>Mining/Staking</strong></td>
            <td>⚠️ Manual</td>
            <td><BsCheckCircleFill className="text-success" /> Yes</td>
            <td><BsCheckCircleFill className="text-success" /> Yes</td>
            <td className="table-primary"><strong><BsCheckCircleFill className="text-success" /> Automated</strong></td>
          </tr>
          <tr>
            <td><strong>E-Filing Included</strong></td>
            <td><BsCheckCircleFill className="text-success" /> DIY</td>
            <td><BsXCircleFill className="text-danger" /> None</td>
            <td><BsXCircleFill className="text-danger" /> None</td>
            <td className="table-primary"><strong><BsCheckCircleFill className="text-success" /> Pro+</strong></td>
          </tr>
          <tr>
            <td><strong>CPA Consultation</strong></td>
            <td><BsXCircleFill className="text-danger" /> None</td>
            <td>💰 $299+</td>
            <td>💰 $499+</td>
            <td className="table-primary"><strong><BsCheckCircleFill className="text-success" /> Included</strong></td>
          </tr>
          <tr>
            <td><strong>Audit Support</strong></td>
            <td><BsXCircleFill className="text-danger" /> None</td>
            <td><BsXCircleFill className="text-danger" /> None</td>
            <td>⚠️ Add-on</td>
            <td className="table-primary"><strong><BsCheckCircleFill className="text-success" /> Elite</strong></td>
          </tr>
        </tbody>
      </Table>

      <p className="mt-4 fw-bold">
        <strong>Bottom Line:</strong> Prompt Tax gives you enterprise-level crypto tax software + professional 
        CPA review at a fraction of the cost.
      </p>

      <div className="bg-gradient p-5 rounded text-white text-center my-5" style={{ 
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' 
      }}>
        <h2 className="text-white mb-4">Special Offer: 2024 Tax Season Discount</h2>
        <h3 className="text-white mb-4">File Before February 15 & Save:</h3>
        
        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <div className="bg-white bg-opacity-10 rounded p-3">
              <p className="mb-0"><strong>Crypto Essentials:</strong></p>
              <p className="mb-0"><del>$149</del> <span className="fs-3"><strong>$119</strong></span></p>
              <p className="mb-0 small">(Save $30)</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="bg-white bg-opacity-25 rounded p-3">
              <p className="mb-0"><strong>Crypto Pro + CPA Review:</strong></p>
              <p className="mb-0"><del>$329</del> <span className="fs-3"><strong>$279</strong></span></p>
              <p className="mb-0 small">(Save $50) ⭐ Most Popular</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="bg-white bg-opacity-10 rounded p-3">
              <p className="mb-0"><strong>Crypto Elite + White Glove:</strong></p>
              <p className="mb-0"><del>$549</del> <span className="fs-3"><strong>$479</strong></span></p>
              <p className="mb-0 small">(Save $70)</p>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-white bg-opacity-10 rounded p-3">
          <p className="mb-2"><strong>BONUS - Early filers get:</strong></p>
          <ul className="list-unstyled mb-0">
            <li><BsCheckCircleFill className="me-2" />Priority CPA review (12-hour turnaround)</li>
            <li><BsCheckCircleFill className="me-2" />Free 2025 crypto tax planning guide ($79 value)</li>
            <li><BsCheckCircleFill className="me-2" />Quarterly estimated tax calculator</li>
            <li><BsCheckCircleFill className="me-2" />Access to our Crypto Tax Masterclass (video series)</li>
          </ul>
        </div>

        <p className="mt-4 mb-0 fs-5">
          <strong>Discount Code:</strong> EARLY2025
        </p>
      </div>

      <h2 className="mt-5">Frequently Asked Questions</h2>

      <div className="accordion mb-5" id="cryptoFaqAccordion">
        <div className="accordion-item">
          <h3 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#cryptoFaq1">
              <strong>Q: Do I need to report crypto if I only bought and held?</strong>
            </button>
          </h3>
          <div id="cryptoFaq1" className="accordion-collapse collapse show" data-bs-parent="#cryptoFaqAccordion">
            <div className="accordion-body">
              <strong>A:</strong> If you only purchased crypto and held it (no sales, swaps, or trades), you don't need 
              to report transactions. However, you must check "YES" on Form 1040 Question 1 about digital assets. We help 
              you answer this correctly.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h3 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cryptoFaq2">
              <strong>Q: What if I've never reported crypto taxes before?</strong>
            </button>
          </h3>
          <div id="cryptoFaq2" className="accordion-collapse collapse" data-bs-parent="#cryptoFaqAccordion">
            <div className="accordion-body">
              <strong>A:</strong> Not uncommon! Our CPAs can help you file amended returns for prior years (2021-2023) to 
              get compliant. The sooner you address it, the better. Elite plan includes multi-year catch-up support.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h3 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cryptoFaq3">
              <strong>Q: Do wash sale rules apply to crypto?</strong>
            </button>
          </h3>
          <div id="cryptoFaq3" className="accordion-collapse collapse" data-bs-parent="#cryptoFaqAccordion">
            <div className="accordion-body">
              <strong>A:</strong> Currently NO. Unlike stocks, crypto is exempt from wash sale rules (as of 2024). This means 
              you can sell Bitcoin at a loss and buy it back the same day to harvest tax losses. Our AI identifies these 
              opportunities.
              <div className="alert alert-warning mt-2 mb-0">
                <strong>Warning:</strong> Congress is considering applying wash sale rules to crypto in the future. Take 
                advantage while you can!
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h3 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cryptoFaq4">
              <strong>Q: How do you handle DeFi? It's so complicated!</strong>
            </button>
          </h3>
          <div id="cryptoFaq4" className="accordion-collapse collapse" data-bs-parent="#cryptoFaqAccordion">
            <div className="accordion-body">
              <strong>A:</strong> Our platform automatically:
              <ul className="mt-2 mb-0">
                <li>Tracks liquidity pool deposits/withdrawals</li>
                <li>Calculates impermanent loss</li>
                <li>Reports yield farming income</li>
                <li>Handles wrapped tokens (WETH, wBTC)</li>
                <li>Tracks lending/borrowing on Aave, Compound</li>
                <li>Reports governance token rewards</li>
              </ul>
              <p className="mt-2 mb-0">You don't need to understand the technical details – we handle it.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 p-4 border-3 border-danger border rounded">
        <h3 className="text-danger"><BsXCircleFill className="me-2" />2025 Tax Season: Critical Dates for Crypto Investors</h3>
        <ul className="mb-0">
          <li><strong>January 31, 2025</strong> - Exchanges must send Form 1099-DA (new crypto tax form)</li>
          <li><strong>February 15, 2025</strong> - Early bird discount deadline (save up to $100)</li>
          <li><strong>April 15, 2025</strong> - Federal tax filing deadline</li>
          <li><strong>April 15, 2025</strong> - Q1 2025 estimated tax payment due (if needed)</li>
        </ul>
        <p className="mt-3 mb-0 fw-bold">
          <BsXCircleFill className="text-danger me-2" /><strong>Important:</strong> If you traded crypto in 2024, the IRS already has your data from exchanges. 
          Don't risk underreporting.
        </p>
      </div>

      <div className="text-center bg-light p-5 rounded mt-5">
        <h2 className="mb-4">Get Started in 60 Seconds</h2>
        <h3 className="mb-4">Start Your Crypto Tax Return Free</h3>
        <p className="lead mb-4">
          Connect exchanges & see your tax liability<br />
          <strong>No credit card required</strong>
        </p>
        <p className="mb-0">Already have 1,000+ transactions? Talk to a crypto tax specialist 24/7</p>
      </div>

      <div className="alert alert-info mt-5">
        <h3>About Prompt Tax Crypto</h3>
        <p>
          Prompt Tax is the leading AI-powered crypto tax platform trusted by over <strong>25,000 cryptocurrency 
          investors, traders, and miners</strong>. Our team includes:
        </p>
        <ul className="mb-3">
          <li>Licensed CPAs specializing in cryptocurrency taxation</li>
          <li>Blockchain engineers who understand the tech</li>
          <li>Former IRS agents who know what triggers audits</li>
          <li>AI researchers building the smartest tax automation</li>
        </ul>
        <p className="mb-0">
          <strong>Our Mission:</strong> Make crypto taxes simple, accurate, and stress-free for everyone from 
          first-time investors to professional traders.
        </p>
        <p className="mt-3 mb-0">
          <strong>Licensed in all 50 states</strong> | <strong>SOC 2 Type II Certified</strong> | 
          <strong> 25,000+ Crypto Returns Filed</strong>
        </p>
      </div>

      <p className="text-muted small mt-5 mb-0">
        <em>Disclaimer: This blog post is for informational purposes only and does not constitute tax, legal, or 
        investment advice. Cryptocurrency tax laws are complex and subject to change. Consult with a licensed tax 
        professional about your specific situation. Prompt Tax CPAs provide return preparation and review services 
        but do not provide ongoing tax advice unless purchased separately.</em>
      </p>
    </BlogPostTemplate>
  );
}
