import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

 

  const addValue = () => {
    console.log("Clicked",counter)
    counter=counter+1;
    setCounter(counter)
  }

  const removeValue = ()=>{

    setCounter(counter-1);
  }

  return (
    <>
     <h1>Counter Using React HOOK </h1>
   <h2>counter value: {counter} </h2>

   <button onClick={addValue}>Add value: {counter}</button>
   <br />

   <button onClick={removeValue}>Remove Value: {counter}</button>
    </>
  )
}

export default App
