import React from 'react'
import { useState } from 'react'
import Validation from './Validation'

import image from '../../assets/blog4.jpg'
import { Link } from 'react-router-dom'


// import { Link } from 'react-router-dom'

const Signup = () => {
  const serverURL = "https://word-critique.onrender.com/signup"
    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
        confirm: "",
        username:""
        
    })
    const [errors, setErrors] = useState({})
    const handleChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value })
       
    }
    console.log({...values})
    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors(Validation(values))
    }
  return (
    <div className='divmain'>
      <div className='submain shadow'>
        <div className='div1'style={{backgroundImage: `url(${image})`}} >
        
        </div>
        <div className='div2'>
          <h3 className='reg'>Registration Form</h3>
          <div className='divsign container'>
            <h5 className='sign'>SIGN UP</h5>
            <form action="">
            <div class="form-floating mb-3">
         <input value={values.fullname} onChange={handleChange} name="fullname" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
         {errors.fullname && <p className='error-p'>{errors.fullname }</p>}                
  <label for="floatingInput">Full Name</label>
</div>
<div class="form-floating">
  <input value={values.email} onChange={handleChange} name="email"  type="email" class="form-control" id="floatingPassword" placeholder="Password"/>
         {errors.email && <p className='error-p'>{errors.email }</p>}                
  
                          <label for="floatingPassword">Email Address</label>
              </div>
              <div class="form-floating  mt-3 ">
              <input value={values.username} onChange={handleChange} name="confirm" type="text" class="form-control" id="floatingInput" placeholder="Username" />
               {errors.username && <p className='error-p'>{errors.username}</p>} 
  <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating  mt-3 ">
  <input value={values.password} onChange={handleChange} name="password"  type="password" class="form-control" id="floatingInput" placeholder="name@example.com"/>
 {errors.password && <p className='error-p'>{errors.password }</p>}                
   
  <label for="floatingInput">Password</label>
            </div>
             <div class="form-floating  mt-3 ">
              <input value={values.confirm} onChange={handleChange} name="confirm" type="password" class="form-control" id="floatingInput" placeholder="Confirm Password" />
               {errors.confirm && <p className='error-p'>{errors.confirm}</p>} 
  <label for="floatingInput">Confirm Password</label>
              </div>
              
            <div className='div-register'>
              <button onClick={handleSubmit} className='register shadow' >Register</button>
              </div>
              

            <div>
              
              <Link to={"/Login"}>You already have an account? Login here</Link>
             
             
            </div>
</form>
            

         
          </div>
        </div>
     </div>
    
    </div>
  )
}

export default Signup
