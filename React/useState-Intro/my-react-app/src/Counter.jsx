import React, { useState } from 'react'

const Counter = () => {
  let[count,setCount]= useState(0);
  let increase=()=>{
    // count++;
    setCount(count+1);

  }
  return (
    <>
      <h3>{count}</h3>
      <button onClick={increase}>increase</button>
    </>
  )
}

export default Counter
