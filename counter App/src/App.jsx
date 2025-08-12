import { useState } from "react";
import "./App.css";
import Button from './Test.jsx';

function App() {
  let [count, setcount] = useState(0);

  function Plus() {
    setcount(count + 1);
  }
  function Minus() {
    setcount(count - 1);
  }
  function Reset() {
    setcount(0);
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>count : {count}</p>

      <div className="btn">
        <Button text="Increment" func ={Plus}/>
        <Button text="decrement" func ={Minus}/>
        <Button text="Reset" func ={Reset}/>
      </div>
    </>
  );
}

export default App;
