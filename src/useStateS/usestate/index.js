import React, { useState ,useEffect} from 'react'
import './index.css'
 function Usestate() {
    const [name,setName]=useState("")
    const onChangeName=event=>{
        setName(event.target.value)
    }
    useEffect(()=>{
      document.title=`${name}`
    })
  return (
    <div className='bg'>
        <input type='text' onChange={onChangeName}/>
        <h3>user entered text is <span className='txt'> {name} </span></h3>
    </div>
  )
}


export default Usestate