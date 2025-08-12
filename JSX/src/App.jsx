import { useState } from "react";
function App() {

  const [name, setname] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    setname('');
  }
  return (
    <>
    <form onSubmit={(event)=>{
      handleSubmit(event);
    }}>
      <input value={name} onChange={(e) => setname(e.target.value)} className="bg-white px-4 py-3 border-2 text-xl m-5 text-black" type="text" placeholder="Enter text here"/>
      <button className="m-5 text-xl font-semibold bg-emerald-600 rounded">Submit</button>
      </form>      
    </>
  );
}
export default App;
