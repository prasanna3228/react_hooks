import React, { useState ,} from 'react';

function Counter() {
  // Declare a new state variable, which we'll call "count"
    const [count,setCount]=useState(0)
    const [name]=useState("prasanna....")

   const positivevalue=(event)=>{
    setCount(count =>count+1)
    }
   const negativevalue=(event)=>{
    setCount(count=>count-1)
   }
  return(
    <div className='bg'>
        <p >{name}</p>
        <p>you clicked {count} times</p>
        <button onClick={positivevalue}>+</button>
        <button onClick={negativevalue}>-</button>
        {/* or */}
        {/* <button onClick={()=>setCount(count+1)}>Click me</button> */}
    </div>
  )

}
export default Counter