import React from 'react'

  function Card({username ="Anonymous"}) {
  console.log()
  return (
    <div className="flex flex-col items-center rounded-2xl">
      <div>
        <img className="size-48 shadow-xl m-3" alt="" src="https://images.unsplash.com/photo-1752407828538-17e055766592?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div className="flex">
        <button>{username}</button>
      </div>
    </div>
  )
}

export default Card
