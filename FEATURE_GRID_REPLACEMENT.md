# Feature Grid Section Content Replacement

## Target: 6-Feature Grid Section

---

## Feature 1: Assignment & Roles

**Icon**: `<BsFileEarmarkText />` (document icon, green)

**Title**
- **Current**: "Assignment & roles"
- **Replace with**: "Schedule K-1 Generation"

**Description**
- **Current**: "Assign owners to conversations, and delegate to team members to follow every update."
- **Replace with**: "Automatically generate partnership K-1 forms with distributions, basis adjustments, and tax allocations calculated accurately."

---

## Feature 2: Internal-only Messages

**Icon**: `<BsShieldCheck />` (shield/verification icon, green)

**Title**
- **Current**: "Internal-only messages"
- **Replace with**: "CPA Review Workflow"

**Description**
- **Current**: "Ask a quick six seven offer see among. Handsome met debating sir dwelling age material."
- **Replace with**: "Every tax return is reviewed by licensed CPAs before filing. Built-in approval workflow ensures accuracy and compliance."

---

## Feature 3: File Previews

**Icon**: `<BsCalculator />` (calculator icon, green)

**Title**
- **Current**: "File previews"
- **Replace with**: "Cost Basis Tracking"

**Description**
- **Current**: "Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness."
- **Replace with**: "Track cost basis across exchanges using FIFO, LIFO, or HIFO methods. Automatic wash sale detection and adjustment."

---

## Feature 4: Large Attachments

**Icon**: `<BsCloudArrowUp />` (cloud upload icon, green)

**Title**
- **Current**: "Large attachments"
- **Replace with**: "Bulk Transaction Import"

**Description**
- **Current**: "Affronting imprudence does everything. Sex lasted dinner wanted indeed wished outlaw."
- **Replace with**: "Import thousands of transactions instantly via API or CSV. Handles high-frequency traders and large portfolios with ease."

---

## Feature 5: Reminders

**Icon**: `<BsBell />` (bell/notification icon, green)

**Title**
- **Current**: "Reminders"
- **Replace with**: "Tax Deadline Alerts"

**Description**
- **Current**: "Such on help ye some door if in. Laughter proposal laughing any son law consider."
- **Replace with**: "Automatic notifications for quarterly estimates, filing deadlines, and extension dates. Never miss a payment deadline."

---

## Feature 6: Location Tracking

**Icon**: `<BsGraphUp />` (chart/analytics icon, green)

**Title**
- **Current**: "Location tracking"
- **Replace with**: "Real-Time Portfolio Tracking"

**Description**
- **Current**: "State burst think end are its. Arrived off she elderly beloved him affixed noisier yet."
- **Replace with**: "Monitor unrealized gains/losses in real-time. Track tax implications before making trades with live P&L updates."

---

## Icon Imports

```tsx
import { 
  BsFileEarmarkText, 
  BsShieldCheck, 
  BsCalculator, 
  BsCloudArrowUp, 
  BsBell, 
  BsGraphUp 
} from 'react-icons/bs';
```

---

## Layout & Styling

- **Grid**: Keep 2x3 grid layout (2 columns on desktop, 1 on mobile)
- **Icons**: Green circular backgrounds, 40-48px size
- **Spacing**: Maintain consistent padding between cards
- **Alignment**: Center-aligned text and icons

---

## Priority

**MEDIUM** - This section provides detailed feature breakdown after the main value props are established in the earlier sections.

---

## Verification

After replacement, ensure:
- [ ] All 6 features are tax/crypto-focused
- [ ] Icons are professional (Bootstrap Icons, no emojis)
- [ ] Green color scheme maintained
- [ ] Descriptions are clear and specific
- [ ] No generic SaaS language remains
