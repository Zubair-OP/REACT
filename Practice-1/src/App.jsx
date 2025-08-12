import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(10)
  let add = () => {
    if (count < 20) {
      setCount(count + 1)
    }
  }

  let remove = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  
  return (
    <>
     <h1>Marks of Zubair : {count}</h1>
     <button onClick={add}>Add</button>
     <button onClick={remove}>Remove</button>
    </>
  )
}

export default App
