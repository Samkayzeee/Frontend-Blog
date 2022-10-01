import React from 'react'
import image from '../../assets/blog4.jpg'
import { Link } from 'react-router-dom'




const Login = () => {
  return (
      <form>
          <div className='divmain'>
      <div className='submain shadow'>
        <div className='div1'style={{backgroundImage: `url(${image})`}} >
        
        </div>
        <div className='div2'>
         
          <div className='divsign '>
            <h5>SIGN IN</h5>
            
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Email Address</label>
            </div>
            <div class="form-floating  mt-3 ">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Password</label>
            </div>
             
            <div className='div-register'>
              <button className='register shadow' >SIGN IN</button>
                          </div>
                          <Link to={"/upload"}>SIgn</Link>

            

            

         
          </div>
        </div>
     </div>
    
    </div>
    </form>
  )
}


export default Login;