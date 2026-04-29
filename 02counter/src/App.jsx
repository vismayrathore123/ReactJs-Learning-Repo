import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
let[counter,setCounter]= useState(15);
  let [removeCounter, setRemoveCounter] = useState(15);
  let [message, setMessage]= useState("");

  //let counter= 5;
  const addValue= ()=>{
    // counter++;
    if(counter>=20){
     setMessage("cannot be higher then 20");
     return ;
    }
    setMessage("");
    setCounter(prev=>prev+1);
    console.log("clicked",counter);
  }
  const removeValue=()=>{
    if(removeCounter<=0){
      setMessage("Cannot be less than 0");
      return;
    }
    setMessage("");
    setRemoveCounter(prev=>prev-1);
    console.log("clicked",removeCounter)
  }
  return (
    <>
      <h1> counter project with react </h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>        Add Value {counter}</button>
      <br/>
            <h2>Remove Counter: {removeCounter}</h2>

      <button onClick={removeValue}>Remove value {removeCounter}</button>
      {/* <p>footer: {counter}</p> */}
      {message && <h3 style={{color:"red"}}>{message}</h3>}
      </>
  )
}

export default App
