import React, { useEffect } from 'react'
import {useState} from 'react'
import '../App.css'



export const Counter = () => {
    const[count,setCount] =useState(0)
    const[count1,setCount1]=useState(0)

    function handleIncrement(){
        setCount(count+1)
    }
    function handleDecrement(){
        setCount(count-1)
    }
    useEffect(()=>{
        setCount1(count*5)
    },[count])
    
  return (
    <div>
        <h1>
            Counter1:{count}
            
        </h1>
        <h1>Counter2:{count1}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
export default Counter