import React, { useState } from 'react'
import { useEffect } from 'react'


export default function Useeffects() {

    const [count,setCount]=useState(0)
    const [otherCount,setOtherCount]=useState(5)
    const clickme=()=>{setCount(count+1)}
    const increment5=()=>{setOtherCount(otherCount+5)}
    useEffect(()=>{
        document.title=`${otherCount} new sms`
    },[otherCount])

  return (
    <div>
        <h3>Count:{count}</h3>
        <button onClick={clickme}>Click me</button>
        <br/>
        <h3>Other count:{otherCount}</h3>
        <button onClick={increment5}>increment by 5</button>
    </div>
  )
}
