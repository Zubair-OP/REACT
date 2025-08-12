import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Api from "./UI components/Api";
function App() {

  const [data, setData] = useState([]);

   const getData = async()=>{
      let response = await axios.get('https://picsum.photos/v2/list');
      setData(response.data);
      console.log(data);
    }

    useEffect(() => {
      getData();
    }, []);

  return (
    <>
      <Api data={data} getData={getData} />
    </>
  );
}

export default App;
