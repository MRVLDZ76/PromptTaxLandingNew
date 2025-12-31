# Campaign Capital Pool Manager

## Overview

The Pool Manager is a collaborative funding tracker for Marketing Phases 1 & 2. It allows you to manage investor contributions, track campaign burn rate, and automatically calculate real-time refund values.

## Features

### 1. **Password Protection**
- The page is protected with hardcoded credentials (for demo purposes)
- **Username**: `pooladmin`
- **Password**: `CapitalPool2025!`

### 2. **Pool Setup**
- Set total campaign goal for Phase 1 & 2 ads
- Add multiple investors with their contribution amounts
- Automatic calculation of ownership percentages

### 3. **Expense Tracking**
- Record marketing expenses (e.g., weekly ads)
- Automatic proportional deduction from all investors
- Expense history log with timestamps
- Expenses are saved to both localStorage and server file

### 4. **Real-Time Calculations**
- **Total Raised**: Sum of all investor contributions
- **Total Spent**: Sum of all recorded expenses
- **Remaining Pool**: Available budget for ads
- **Progress Percentage**: Raised vs Goal
- **Burn Rate**: Spent vs Raised percentage

### 5. **Visual Analytics**
- **Investor Share Chart** (Doughnut): Shows ownership breakdown
- **Burn Rate Chart** (Stacked Bar): Visualizes budget status

### 6. **Refund Calculator**
- Real-time calculation of refund values
- Formula: `Initial Investment - (Share % × Total Expenses)`
- Shows what each investor would receive if campaign stops

## Technical Implementation

### File Structure
```
src/pages/pool/
├── index.tsx                          # Main page with password protection
├── contexts/
│   └── PoolContext.tsx               # State management (goal, investors, expenses)
└── components/
    ├── PasswordModal.tsx             # Login modal
    ├── PoolSetup.tsx                 # Goal & investor input
    ├── ExpenseRecorder.tsx           # Expense logging
    ├── MetricsBar.tsx                # Top metrics cards
    ├── PoolCharts.tsx                # Chart.js visualizations
    └── InvestorLedger.tsx            # Detailed table with calculations
```

### API Endpoint
```
netlify/functions/pool-expense.ts     # Saves expenses to file
```

### Data Persistence
1. **LocalStorage**: All data (goal, investors, expenses) saved automatically
2. **Server File**: Expenses saved to `/tmp/pool-expenses/expenses.json`
3. **Audit Log**: Text log at `/tmp/pool-expenses/expense-log.txt`

### State Management
- Uses React Context API (`PoolContext`)
- Provides centralized state for goal, investors, and expenses
- Automatic localStorage sync
- Helper functions for calculations

## Usage

### Access the Page
Navigate to: `http://localhost:5173/pool` (dev) or `https://yourdomain.com/pool` (production)

### Login
Use the credentials:
- Username: `pooladmin`
- Password: `CapitalPool2025!`

### Add Investors
1. Set the campaign goal (default: $30,000)
2. Enter investor name and contribution amount
3. Click "Add to Pool"
4. Repeat for all investors

### Record Expenses
1. Enter expense description (e.g., "Week 1 Facebook Ads")
2. Enter amount spent
3. Click "Record Spend"
4. System validates expense doesn't exceed total raised
5. Expense is saved locally and to server

### View Analytics
- **Metrics Bar**: See totals at a glance
- **Charts**: Visual representation of ownership and burn rate
- **Ledger Table**: Detailed breakdown with refund values

### Reset Data
Click "Reset Data" button in the ledger section to clear all data

## Formulas

### Pool Share Percentage
```
Share % = (Individual Investment / Total Raised) × 100
```

### Share of Costs
```
Share of Costs = Total Spent × Share %
```

### Current Refund Value
```
Refund = Initial Investment - Share of Costs
```

## Security Notes

⚠️ **Important**: The current implementation uses hardcoded credentials for demonstration purposes only. In a production environment, you should:

1. Implement proper authentication (OAuth, JWT, etc.)
2. Use environment variables for credentials
3. Add user roles and permissions
4. Implement secure session management
5. Use a proper database instead of file storage
6. Add HTTPS enforcement
7. Implement rate limiting on API endpoints

## Dependencies

- **React**: UI framework
- **React Bootstrap**: Component library
- **Chart.js**: Data visualization
- **React Context API**: State management
- **Netlify Functions**: Serverless API endpoint

## Future Enhancements

1. Multiple pool support
2. Email notifications for expenses
3. Export to CSV/PDF
4. Historical snapshots
5. Investor portal (separate login per investor)
6. Expense approval workflow
7. Budget forecasting
8. Integration with accounting software
