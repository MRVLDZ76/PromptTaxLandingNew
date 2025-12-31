import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

interface Expense {
  id: number
  description: string
  amount: number
  date: string
}

const EXPENSES_DIR = '/tmp/pool-expenses'
const EXPENSES_FILE = join(EXPENSES_DIR, 'expenses.json')

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  try {
    // Parse the expense from request body
    const expense: Expense = JSON.parse(event.body || '{}')

    if (!expense.id || !expense.description || !expense.amount) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid expense data' })
      }
    }

    // Ensure directory exists
    if (!existsSync(EXPENSES_DIR)) {
      await mkdir(EXPENSES_DIR, { recursive: true })
    }

    // Read existing expenses or initialize empty array
    let expenses: Expense[] = []
    if (existsSync(EXPENSES_FILE)) {
      const fileContent = await readFile(EXPENSES_FILE, 'utf-8')
      expenses = JSON.parse(fileContent)
    }

    // Add new expense
    expenses.push(expense)

    // Write back to file
    await writeFile(EXPENSES_FILE, JSON.stringify(expenses, null, 2), 'utf-8')

    // Also append to a log file for audit trail
    const logFile = join(EXPENSES_DIR, 'expense-log.txt')
    const logEntry = `${new Date().toISOString()} | ${expense.description} | $${expense.amount}\n`
    
    if (existsSync(logFile)) {
      const existingLog = await readFile(logFile, 'utf-8')
      await writeFile(logFile, existingLog + logEntry, 'utf-8')
    } else {
      await writeFile(logFile, logEntry, 'utf-8')
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Expense recorded successfully',
        expense 
      })
    }
  } catch (error) {
    console.error('Error saving expense:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to save expense',
        details: error instanceof Error ? error.message : 'Unknown error'
      })
    }
  }
}

export { handler }
