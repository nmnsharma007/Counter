import './App.css';
import {useEffect,useState} from "react";

function App() {

  const [counterValue, setcounterValue] = useState(1);
  const [changeValue,setChangeValue] = useState(1);

  useEffect(() => {
    fetch("/data.json").then((response)=>response.json()).then((data) => {
      setcounterValue(data.counter);
      setChangeValue(data.changeValue);
    }).catch(err => console.log(err))
    
  }, [])

  return (
 <div className="App">
    <input value={changeValue} type="number"onChange={(e) => {setChangeValue(parseInt(e.target.value))}}/>
      <div className="counter">
      <button onClick={() => setcounterValue((prevValue) => prevValue + changeValue)}>+</button>
      <p>{counterValue}</p>
      <button onClick={() => setcounterValue((prevValue) => prevValue - changeValue)}>-</button>
      </div>
    </div>
  );
}

export default App;
