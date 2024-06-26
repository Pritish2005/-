import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OAuth from './components/OAuth'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <OAuth/>
   </>
  )
}

export default App
