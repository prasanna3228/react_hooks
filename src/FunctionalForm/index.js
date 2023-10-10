import React,{useState} from 'react'

function FunctionalForm() {

    const input={name:"",email:"",city:"",state:""}
    const [inputField,setInputfield]=useState(input)

    const updateForm=(event)=>{
        let name=event.target.name
        let value=event.target.value
        setInputfield({[name]:value})
    }

    const submitForm=(e)=>{
        e.preventDefault();
        alert("success")
    }
  return (
    <div>
        <p>FunctionalForm</p>
        <form onSubmit={submitForm}>
        Name:<input type='text' name='name' value={inputField.name} onChange={updateForm}/> <br/>
        Email:<input type='email' name='email' value={inputField.email} onChange={updateForm}/>  <br/>
        City:<input type='text' name='city' value={inputField.city} onChange={updateForm}/>  <br/>
        State:<input type='text' name='state' value={inputField.state} onChange={updateForm}/>  <br/>
        <button value="submit">Submit</button>
        </form>
        <h2>{inputField.name}</h2>
        <h2>{inputField.email}</h2>
        <h2>{inputField.city}</h2>
        <h2>{inputField.state}</h2>
      
    </div>
  )
}

export default FunctionalForm