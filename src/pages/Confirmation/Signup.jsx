import React, { useState } from 'react';
import image from '../../assets/blog4.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

      const serverUrl = "http://localhost:4040/signup";
      const [fullname, setFullname] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [username, setUsername] = useState("");


      async function Signup(e) {
        
        try {
            e.preventDefault()
        let signData = {
                fullname:fullname,
                email:email,
                password:password,
                username:username
            }
            
            if (fullname == "" ||email == "" || password == "" || username == "") {
                signData = null;
                console.log("Input Something Meaningful");
                console.log(signData);
            }
            else{
                const response = await axios.post(serverUrl, signData);
                console.log(response.data);
                console.log(signData);
            }
        } catch (error) {
          console.log(error);  
        }
    }      


  return (
    <div className='divmain'>
      <div className='submain shadow'>
        <div className='div1'style={{backgroundImage: `url(${image})`}} >
        
        </div>
        <div className='div2'>
          <h3 className='reg'>Registration Form</h3>
          <div className='divsign container'>
            <h5>SIGN UP</h5>
        <form action="" onSubmit={Signup}>
<div className="form-floating mb-3">
  <input onChange={(e) => { setFullname(e.target.value)}} type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label htmlFor="floatingInput">Full Name</label>
</div>

<div className="form-floating">
  <input onChange={(e) => { setEmail(e.target.value)}} type="email" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label htmlFor="floatingPassword">Email Address</label>
</div>

<div className="form-floating  mt-3 ">
  <input onChange={(e) => { setUsername(e.target.value)}} type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label htmlFor="floatingInput">Create Username</label>
</div>

<div className="form-floating  mt-3 ">
  <input onChange={(e) => { setPassword(e.target.value)}} type="password" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label htmlFor="floatingInput">Create Password</label>
</div>

<div className='div-register'>
  <button className='register shadow' >Register</button>
</div>
</form>

            <div>
              <h6 className='already'>You already have an account? <Link to={'/'}>Login</Link></h6>
            </div>
  
          </div>
        </div>
     </div>
    
    </div>
  )
}

export default Signup;
