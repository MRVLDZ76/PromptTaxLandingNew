import { useState, FormEvent } from 'react'
import { Form, Button } from 'react-bootstrap'
import { usePool } from '../contexts/PoolContext'

const ExpenseRecorder = () => {
  const { expenses, addExpense } = usePool()
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')

  const handleAddExpense = async (e: FormEvent) => {
    e.preventDefault()
    const expenseAmount = parseFloat(amount)
    
    if (description.trim() && expenseAmount > 0) {
      const success = await addExpense(description.trim(), expenseAmount)
      
      if (success) {
        setDescription('')
        setAmount('')
      } else {
        alert('Error: You cannot spend more than the total raised amount!')
      }
    } else {
      alert('Please enter a valid description and amount.')
    }
  }

  return (
    <div className="card shadow-sm border-start border-danger border-4">
      <div className="card-body">
        <h2 className="h5 fw-semibold mb-3 d-flex align-items-center">
          <span className="badge bg-danger me-2">2</span>
          Record Expenses
        </h2>
        <p className="text-muted small mb-4">
          Log marketing spend (e.g., Weekly Ads). The system will automatically deduct this from all investors proportionally.
        </p>

        <Form onSubmit={handleAddExpense}>
          <Form.Group className="mb-3">
            <Form.Label className="small fw-medium">Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Week 1 Facebook Ads"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="small fw-medium">Amount Spent ($)</Form.Label>
            <Form.Control
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="1000"
              step="0.01"
            />
          </Form.Group>

          <Button type="submit" variant="danger" className="w-100">
            Record Spend
          </Button>
        </Form>

        {/* Expense History */}
        <div className="mt-4">
          <h4 className="text-muted text-uppercase small fw-semibold mb-2">Recent Expenses</h4>
          <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
            {expenses.length === 0 ? (
              <p className="text-muted small text-center fst-italic py-2">No expenses recorded yet.</p>
            ) : (
              <ul className="list-unstyled mb-0">
                {expenses.slice().reverse().map(exp => (
                  <li key={exp.id} className="d-flex justify-content-between align-items-start bg-light p-2 rounded mb-2 border">
                    <div>
                      <div className="small fw-medium">{exp.description}</div>
                      <div className="text-muted" style={{ fontSize: '0.75rem' }}>{exp.date}</div>
                    </div>
                    <div className="text-danger fw-bold small">-${exp.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseRecorder
