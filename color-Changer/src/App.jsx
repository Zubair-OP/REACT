import { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
    <div className="w-full h-screen duration-300 "
    style={{backgroundColor: color}}>
    </div>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-between px-5 py-2 bg-white rounded-2xl shadow-xl '>
        <button onClick={()=>{
          return setColor('red')
        }} className='outline-none px-4 mx-2 rounded-full text-white shadow-sm py-1' style={{backgroundColor: "red"}}>
          Red</button> 
        <button onClick={()=> {
          return setColor('yellow')
        }} className='outline-none px-4 mx-2 rounded-full text-white shadow-sm py-1' style={{backgroundColor: "yellow"}}>
          Yellow</button> 
        <button onClick={()=> {
          return setColor('blue')
        }} className='outline-none px-4 mx-2 rounded-full text-white shadow-sm py-1' style={{backgroundColor: "blue"}}>
          blue</button> 
        <button onClick={()=> {
          return setColor('green')
        }} className='outline-none px-4 mx-2 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "green"}}>
          green</button> 
      </div>
    </div>
    </>
  )
}

export default App
