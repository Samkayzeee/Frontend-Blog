import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/blog4.jpg';
import axios from 'axios';



const Login = () => {

  const serverUrl = "http://localhost:4040/login";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function Login(e) {
        
      try {
          e.preventDefault()
      let loginData = {
              email:email,
              password:password
          }
          
          if (email == "" ||password == "" ) {
              loginData = null;
              console.log("Input Something Meaningful");
              console.log(loginData);
          }
          else{
              const response = await axios.post(serverUrl, loginData);
              console.log(response.data);
              console.log(loginData);
          }
      } catch (error) {
        console.log(error);  
      }
  }

  return (
    <div className='divmain'>
      <div className='submain shadow'>
        <div className='div1'style={{backgroundImage: `url(${image})`}} ></div>

        <div className='div2'>
      <form action="" onSubmit={Login}>
          <div className='login-container'>
            <h5>LOG IN</h5>
            
    <div className="form-floating">
      <input onChange={(e) => { setEmail(e.target.value)}} type="email" className="form-control" id="floatingInput" placeholder="Password"/>
      <label htmlFor="floatingPassword">Email Address</label>
    </div>

    <div className="form-floating  mt-3 ">
        <input onChange={(e) => { setPassword(e.target.value)}} type="password" className="form-control" id="floatingPassword" placeholder="name@example.com"/>
        <label htmlFor="floatingInput">Password</label>
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
