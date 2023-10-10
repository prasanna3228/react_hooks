import React , {useState} from 'react'

function Namevalidation() {

    const [username,setUsername]=useState("");
    const [error,setError]=useState("");

    const updateName=(e)=>{
        setUsername(e.target.value)
        // console.log(e.target.value)
    }
    const validateNmae=(e)=>{
        if(username ==="" || username ===null){
            setError("name should not be blank")
        }
        else if (username.length <4){
            setError("username must be more than 4 characters")
            console.log(setError)
        }
        else if(username.length >8){
            setError("username must be less than 8 characters")
            console.log(error)
        }
        else{
            setError("validate")
            console.log(username)
            
        }
    }
  return (
    <div>
        <label htmlFor='username'>Username</label> <br/>
        <input type="text" name='username' value={username} onChange={updateName}/> <br/>
        <span style={{color:"red"}}>{error}</span> <br/>
        <button onClick={validateNmae} >validateName</button>
    </div>
  )
}

export default Namevalidation