import React from 'react'
import { Link } from 'react-router-dom';
import image from '../../assets/blog4.jpg'
import Signup from '../Confirmation/Signup';



const Login = () => {
  return (
    <div className='divmain'>
      <div className='submain shadow'>
        <div className='div1'style={{backgroundImage: `url(${image})`}} ></div>

        <div className='div2'>
      <form action="">
          <div className='login-container'>
            <h5>LOG IN</h5>
            
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="Password"/>
      <label for="floatingPassword">Email Address</label>
    </div>

    <div class="form-floating  mt-3 ">
        <input type="password" class="form-control" id="floatingPassword" placeholder="name@example.com"/>
        <label for="floatingInput">Password</label>
    </div>
             
    <div className='div-register'>
        <button className='register shadow' >LOG IN</button>
    </div>    
          </div>
        </form>
          <h6 className='create'>New Here? <Link to={'/signup'}>Create An Account</Link> </h6>
        </div>
     </div>
    
    </div>
  )
}

export default Login;
