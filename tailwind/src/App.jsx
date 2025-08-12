import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  // const [count, setCount] = useState(0)
  let Project = "Tailwind CSS"
  let year = 2025
  return (
    <>
    <h1 className='bg-green-300 text-black p-5 rounded-xl'>{Project} {year}</h1>
    <Card username ="M Zubair" />
    <Card username="M huzaifa"/>
    <Card username="M Ali"/>
    </>
  )
}

export default App
