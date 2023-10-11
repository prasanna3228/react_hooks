import React , {useState} from 'react'

 function FunctionalCounter() {

    const [count,setCount]=useState(0)

    const increase=()=>{
        setCount(count+1)
    }
  return (
    <div className='bg'>
        <p>{count}</p>
        <button onClick={increase}>funCounter</button>
    </div>
  )
}

export default FunctionalCounter