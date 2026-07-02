import React, { useState } from 'react'
import './contact.css'
import axios from "axios";

function Contact() {
    const[form,setform]=useState({
    firstName:'',
    lastName:'',
    email:'',
    issue:'',
    })
    
   

  async function clickme(e) {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/contact/", 
      form 
    );

    alert(response.data.message);
  } catch (error) {
    console.log(error);
  }
}
  return (
    <form onSubmit={clickme}>
    <div>
     <div className='sec-1'>
    <h1>contact us</h1>
   <input type='text' onChange={(e)=>setform({...form, firstName: e.target.value })} style={{marginLeft:-400}} placeholder='enter your first name' ></input>
     <br>
   
     </br>
         <input type='text' name='firstname'  onChange={(e)=>setform({...form, lastName: e.target.value })} style={{marginLeft:-350, marginTop:100 ,}} placeholder='enter your last name'></input>
         <br></br>
         <input type='text 'onChange={(e)=>setform({...form, email: e.target.value })} style={{marginLeft:-350,marginTop:100}} placeholder='enter your email address'></input>
         <br></br>
          <input type='text'onChange={(e)=>setform({...form, issue: e.target.value })} style={{marginLeft:-350,marginTop:100 ,width:400 ,height:300} }placeholder='describe your issue'></input>
          <br></br>
          <button type='submit' style={{width:150, height:56, backgroundColor:"red", marginTop:100}}>contact now</button>
         </div>
         
     </div>
    </form>
  )
}

export default Contact