import React from 'react'

import image from '../../assets/blog4.jpg'

import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='divmain'>
      <div className='submain shadow'>
        <div className='div1'style={{backgroundImage: `url(${image})`}} >
        
        </div>
        <div className='div2'>
          <h3 className='reg'>Registration Form</h3>
          <div className='divsign container'>
            <h5>SIGN UP</h5>
            <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Full Name</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Email Address</label>
            </div>
            <div class="form-floating  mt-3 ">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Password</label>
            </div>
             <div class="form-floating  mt-3 ">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Confirm Password</label>
            </div>
            <div className='div-register'>
              <button className='register shadow' >Register</button>
            </div>

            <div>
              <h6>You already have an account?<span>Login here</span></h6>
             
             
            </div>

            

         
          </div>
        </div>
     </div>
    
    </div>
  )
}

export default Signup
