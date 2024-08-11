import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from './Components/Button'
function App() {
   const handle = () => {
    alert("button is clicked")
    // console.log("Button is clicked");
   }

  return (
    <>
     <Button text="click me" onClick={handle} />
    </>
  )
}

export default App
