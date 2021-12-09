import React, { useState } from 'react'
import Detail from './Detail';

export const ClickCounter=()=> {
    const [count,setCount]=useState(0);
    const MAX_COUNT_ALLOWED=5;
    const handleClick=()=>{
        try{
            if(count===MAX_COUNT_ALLOWED){
                //Its throwing error to the catch | It will be helpful for API handling
                throw new Error("Count limit exceeded")
            }else{
                setCount((x)=>x+1);
            }
        }
        catch(e){
            console.log("Counter error occured", e);
        }
        
    }
    return (
        <div>
            <button onClick={handleClick}>count {count}</button>
            <Detail/>
        </div>
        
    )
}



