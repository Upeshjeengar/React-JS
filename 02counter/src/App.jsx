import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //you can pass anything default in useState() function, it returns counter and setCounter
  const [counter, setCounter]  = useState(15) 
  //Wherever counter is been used it will get updated if we appended using setCounter method
  
  // let counter = 15
  // const addValue = ()=>{
  //   counter=counter+1
  //   console.log('Clicked',counter)  
  // //why counter is not getting updated in code(although it's getting updating in console)? UI updation method-Hooks-ReactHooks.js
  // }

  //using setCounter function
  const addValue = () => {
    // //Method 1
    // counter = counter + 1 //if you update manually, pass to setCounter and use let while declaring counter,setCounter
    // setCounter(counter)

    // //Method 2
    // setCounter(counter+1)
    // setCounter(counter+1)

    //Method 3
    setCounter(prevCounter => prevCounter + 1)  
    setCounter(prevCounter => prevCounter + 1)  
    
    //Important from interview perspective: if you used method 2 then only one time increment will happen, but if you used method 3, then 2 times
    //increment will happen.Why - react sends values in form of batches so in method 2 same value is going to function, but prevCounter gives 
    //us last updated value prevCounter is only for representation you can use any variable name
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Project Counter</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
