import React from 'react'
import {useState} from 'react'

const Counter = () => {
    const Array=useState(0);
    const count=Array[0];
    const setCount=Array[1];

  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={()=>{
            setCount(count+1)
        }}>Increase</button>
        <button onClick={()=>{
            setCount(count-1)
        }}>Decrease</button>
    </div>
  )
}

export default Counter