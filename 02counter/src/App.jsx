import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  const addValue = () => {
    counter < 20 ? setCounter(counter + 1) : setCounter(counter)
  }
  const decreseValue = () => {
    counter > 0 ? setCounter(counter - 1) : setCounter(counter)
  }

  return (
    <>
    <h1>Chai Aur React {counter}</h1>
    <h2>Counter Value : {counter}</h2>
    <div style={{display:'flex'}}>
      <button style={{background: "yellow"}} onClick={addValue}>Add Value</button>
      &nbsp;
      <button style={{background: "yellow"}} onClick={decreseValue}>Decrese Value</button>
    </div>
    <footer>Footer Counter value is {counter}</footer>
    </>
  )
}

export default App
