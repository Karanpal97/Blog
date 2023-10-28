import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Config from "./config/config"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(import.meta.env.VITE_APP_WRITE_URL)

  return (
    <>
      <h1>hello everyOne</h1>
    </>
  )
}

export default App
