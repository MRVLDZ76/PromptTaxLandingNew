import { useState, FormEvent } from 'react'
import { Modal, Form, Button, Alert } from 'react-bootstrap'

interface PasswordModalProps {
  onLogin: (username: string, password: string) => boolean
}

const PasswordModal = ({ onLogin }: PasswordModalProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const success = onLogin(username, password)
    
    if (!success) {
      setError('Invalid username or password. Please try again.')
      setPassword('')
    }
  }

  return (
    <Modal show={true} backdrop="static" keyboard={false} centered>
      <Modal.Header>
        <Modal.Title>Pool Manager Access</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-muted mb-4">
          This page is protected. Please enter your credentials to access the Campaign Capital Pool Manager.
        </p>
        
        {error && <Alert variant="danger">{error}</Alert>}
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
              autoFocus
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Access Pool Manager
          </Button>
        </Form>
        
        <div className="mt-3 p-3 bg-light rounded">
          <small className="text-muted">
            <strong>Demo Credentials:</strong><br />
            Username: <code>pooladmin</code><br />
            Password: <code>CapitalPool2025!</code>
          </small>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default PasswordModal
