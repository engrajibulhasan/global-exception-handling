import React, { useState } from 'react'

export const ClickCounter=()=> {
    const [count,setCount]=useState(0);
    const handleClick=()=>{
        setCount((x)=>x+1);
    }
    return (
        <div>
            <button onClick={handleClick}>count {count}</button>
        </div>
    )
}



