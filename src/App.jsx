import { useState } from 'react'
import './App.css'
import TodoApp from './TodoApp.jsx'
import { CssBaseline } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <TodoApp />
    </>
  )
}

export default App
