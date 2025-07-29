import { useState } from 'react'
import './App.css'
import InputField from './InputField.jsx'
import { CssBaseline } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <InputField />
    </>
  )
}

export default App
