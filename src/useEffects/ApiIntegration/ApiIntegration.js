// import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'
import './index.css'
// import { json } from 'react-router-dom';
function ApiIntegration() {

    const [array,setArray]=useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products?limit=8")
        .then((response)=>response.json())
        .then((json)=>{
            setArray(json)
        })
    },[])

     //library
    
  return (
    <div className='bg' style={{textAlign:'start'}}>
       <h1> ApiIntegration</h1>

       <table>
        
       <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Rating</th>
       </tr>
        
        {array.map((item)=>
        <tr>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.rating.rate}</td>
        </tr>
       )}
       
        </table>
      
        </div>
  )
}

export default ApiIntegration