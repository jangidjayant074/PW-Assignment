import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './Components/Person'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Person Details</h1>
      <Person name="Shivank Tyagi" age={20} />
      <Person name="Chirag Tyagi" age={30} />
    </>
  )
}

export default App
