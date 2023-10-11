import React,{useState} from 'react'

function Password() {
    const [password,setPassword]=useState("");
    const [cpassword,setCPassword]=useState("");
    const [error,setError]=useState("");

    const updatePassword=(e)=>{
      setPassword(e.target.value)
    }

    const conPassword=(e)=>{
      setCPassword(e.target.value)
    }

    const validatePssword=(e)=>{
      const regExpSpecialChars = /[^a-zA-Z0-9\s]/g;

      if (password ==="" || password === null){
        setError("password should not be blank")
      }
      else if(password.length<4){
        setError("passowrd should be more than 4 character")
      }
      else if (!regExpSpecialChars.test(password)){
        setError("password should be at least 1 digit 1 lower 1 upper ")
      }else if (password !== cpassword){
        setError("password should match")
      }
      else{
        setError("strong password")
      }
    }
  return (
    <div className='bg'>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' value={password} onChange={updatePassword} /><br/>
        <span style={{color:"red"}}>{error}</span> <br/>
        <label htmlFor='cpassword'>cPassword</label>
        <input type='password' name='cpassword' value={cpassword} onChange={conPassword} /><br/>
        <span style={{color:"red"}}>{error}</span>
        <button onClick={validatePssword}>submit</button>
    </div>
  )
}

export default Password