import React, { useState } from 'react'
import "./Signup.css"
import axios from 'axios';

function Signup() {

    const [user , setUser] = useState({
        fullName: '',
        Email: '',
        Password: '',
        DOB: ''
    })
    
    const signup = async () =>{
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/Signup,{
            fullName : user.fullName,
            Email : user.Email,
            Password : user.Password,
            DOB : user.DOB

        }`)
        console.log(response)
    }
  return (
    <div>
      <h1 className='Signup-heading'>User Registration</h1>

      <form className='Signup-form'>
        <input type="text" 
        placeholder='fullName'
        className='user-input'
        value={user.fullName}
        onChange={(e)=>setUser({ ...user, fullName: e.target.value })}
        />

        <input type="email" 
         placeholder='Email' 
         className='user-input'
         value={user.Email}
         onChange={(e)=>setUser({ ...user, Email: e.target.value })}
         />

        <input type="password" 
        placeholder='Password' 
        className='user-input'
        value={user.Password}
        onChange={(e)=>setUser({ ...user, Password: e.target.value })}
        />

        <input type="date" 
        placeholder='Date of Birth' 
        className='user-input'
        value={user.DOB}
        onChange={(e)=>setUser({ ...user, DOB: e.target.value })}
        />
        
        <button type='button' 
        className='btn-all'
            onClick={signup}
            >
            Register Now
            </button>

      </form>

    </div>
  )
}

export default Signup
