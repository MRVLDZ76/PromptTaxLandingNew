import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export interface Investor {
  id: number
  name: string
  initialAmount: number
}

export interface Expense {
  id: number
  description: string
  amount: number
  date: string
}

export interface InvestorData extends Investor {
  sharePercent: number
  costShare: number
  currentBalance: number
}

interface PoolContextType {
  goal: number
  investors: Investor[]
  expenses: Expense[]
  setGoal: (goal: number) => void
  addInvestor: (name: string, amount: number) => void
  addExpense: (description: string, amount: number) => Promise<boolean>
  resetData: () => void
  getTotals: () => {
    totalRaised: number
    totalSpent: number
    remaining: number
    progressPercent: number
    burnPercent: number
  }
  getInvestorData: () => InvestorData[]
}

const PoolContext = createContext<PoolContextType | undefined>(undefined)

export const usePool = () => {
  const context = useContext(PoolContext)
  if (!context) {
    throw new Error('usePool must be used within PoolProvider')
  }
  return context
}

export const PoolProvider = ({ children }: { children: ReactNode }) => {
  const [goal, setGoalState] = useState(30000)
  const [investors, setInvestors] = useState<Investor[]>([])
  const [expenses, setExpenses] = useState<Expense[]>([])

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('poolData')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        setGoalState(data.goal || 30000)
        setInvestors(data.investors || [])
        setExpenses(data.expenses || [])
      } catch (e) {
        console.error('Failed to load pool data:', e)
      }
    }
  }, [])

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('poolData', JSON.stringify({ goal, investors, expenses }))
  }, [goal, investors, expenses])

  const setGoal = (newGoal: number) => {
    if (newGoal > 0) {
      setGoalState(newGoal)
    }
  }

  const addInvestor = (name: string, amount: number) => {
    if (name && amount > 0) {
      setInvestors(prev => [...prev, {
        id: Date.now(),
        name,
        initialAmount: amount
      }])
    }
  }

  const addExpense = async (description: string, amount: number): Promise<boolean> => {
    if (!description || amount <= 0) return false

    const totals = getTotals()
    if (totals.totalSpent + amount > totals.totalRaised) {
      return false
    }

    const newExpense: Expense = {
      id: Date.now(),
      description,
      amount,
      date: new Date().toLocaleString()
    }

    setExpenses(prev => [...prev, newExpense])

    // Save to server
    try {
      await fetch('/api/pool-expense', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newExpense)
      })
    } catch (error) {
      console.error('Failed to save expense to server:', error)
    }

    return true
  }

  const resetData = () => {
    if (confirm('Are you sure you want to clear all data?')) {
      setInvestors([])
      setExpenses([])
      localStorage.removeItem('poolData')
    }
  }

  const getTotals = () => {
    const totalRaised = investors.reduce((sum, inv) => sum + inv.initialAmount, 0)
    const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0)
    const remaining = totalRaised - totalSpent
    const progressPercent = goal > 0 ? (totalRaised / goal) * 100 : 0
    const burnPercent = totalRaised > 0 ? (totalSpent / totalRaised) * 100 : 0

    return { totalRaised, totalSpent, remaining, progressPercent, burnPercent }
  }

  const getInvestorData = (): InvestorData[] => {
    const { totalRaised, totalSpent } = getTotals()

    return investors.map(inv => {
      const sharePercent = totalRaised > 0 ? (inv.initialAmount / totalRaised) : 0
      const costShare = totalSpent * sharePercent
      const currentBalance = inv.initialAmount - costShare

      return {
        ...inv,
        sharePercent,
        costShare,
        currentBalance
      }
    })
  }

  return (
    <PoolContext.Provider value={{
      goal,
      investors,
      expenses,
      setGoal,
      addInvestor,
      addExpense,
      resetData,
      getTotals,
      getInvestorData
    }}>
      {children}
    </PoolContext.Provider>
  )
}
