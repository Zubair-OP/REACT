import React from 'react'

function Api(props) {
  return (
    <div>
      <div className="bg-black h-full p-10">
        <button onClick={props.getData} className="bg-green-500 text-xl rounded-md font-semibold px-6 py-4 active:scale-50">
          Click Me
        </button>
        <div>
          <h1 className="text-white text-3xl font-bold w-full mt-5">
            {props.data.map((item , idx) => {
              return <div key={idx} className="bg-gray-50 flex text-black items-center justify-between w-full px-7 py-5 rounded mb-5"><img className="h-40 justify-between" src={item.download_url} alt="" />
              <h2>{item.author}</h2>
              </div>;
            })}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Api
