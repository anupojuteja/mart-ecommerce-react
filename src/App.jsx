import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Card/>
    </>
  )
}

export default App
