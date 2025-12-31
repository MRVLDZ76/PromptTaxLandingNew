import { useState, FormEvent } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import { usePool } from '../contexts/PoolContext'

const PoolSetup = () => {
  const { goal, setGoal, addInvestor } = usePool()
  const [goalInput, setGoalInput] = useState(goal.toString())
  const [investorName, setInvestorName] = useState('')
  const [investorAmount, setInvestorAmount] = useState('')

  const handleUpdateGoal = () => {
    const val = parseFloat(goalInput)
    if (val > 0) {
      setGoal(val)
    }
  }

  const handleAddInvestor = (e: FormEvent) => {
    e.preventDefault()
    const amount = parseFloat(investorAmount)
    
    if (investorName.trim() && amount > 0) {
      addInvestor(investorName.trim(), amount)
      setInvestorName('')
      setInvestorAmount('')
    } else {
      alert('Please enter a valid name and amount.')
    }
  }

  return (
    <div className="card border h-100">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h2 className="h6 fw-bold mb-0 text-uppercase text-secondary">Pool Configuration</h2>
          <span className="badge bg-secondary">1</span>
        </div>
        <p className="text-muted small mb-4">
          Define campaign target and add investor contributions.
        </p>

        {/* Goal Input */}
        <div className="mb-4">
          <Form.Label htmlFor="campaignGoal" className="form-label small fw-medium">
            Total Campaign Goal ($)
          </Form.Label>
          <InputGroup>
            <Form.Control
              type="number"
              id="campaignGoal"
              value={goalInput}
              onChange={(e) => setGoalInput(e.target.value)}
              placeholder="30000"
            />
            <Button 
              variant="dark"
              onClick={handleUpdateGoal}
            >
              Set
            </Button>
          </InputGroup>
        </div>

        {/* Add Investor */}
        <div className="border-top pt-4">
          <h3 className="h6 fw-medium mb-3">Add Investor</h3>
          <Form onSubmit={handleAddInvestor}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                value={investorName}
                onChange={(e) => setInvestorName(e.target.value)}
                placeholder="Investor Name (e.g. John Doe)"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                value={investorAmount}
                onChange={(e) => setInvestorAmount(e.target.value)}
                placeholder="Contribution Amount ($)"
                step="0.01"
              />
            </Form.Group>
            <Button type="submit" variant="success" className="w-100">
              + Add to Pool
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default PoolSetup
