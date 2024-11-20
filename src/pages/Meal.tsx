import React, { useState } from 'react'

const Meal = () => {
    const [count, setCount] = useState(0)

    const handlePlus = () => {
        setCount(count + 1);
    }

    const handleMinus = () => {
        setCount(count - 1);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button style={{width: "50px", padding: "10px", fontSize: "30px"}} onClick={handlePlus}>+</button> 
        <button style={{width: "50px", padding: "10px", fontSize: "30px"}} onClick={handleMinus}>-</button>
    
    
    </div>
  )
}

export default Meal