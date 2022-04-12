import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    return (
        <div className="form-container">
        <div className="">
          <h2 className="form-title">Login</h2>
          <form  action="">
            <div className="input-groupp">
              <label htmlFor="email">Email</label> 
               <br />
              <input   type="email" name="email" id="" required />
            </div>
       
        
            <div className="input-groupp">
              <label htmlFor="password">Password</label>
              <br />
              <input   type="password" name="password" id="" required />
            </div>
            {/* <p style={{color: 'red'}}>{error?.message}</p> */}
            {/* {
                loading && <p>Loading...</p>
            } */}
            <input className="form-submit" type="submit" value="login" />
          </form>
          <p>New To Ema-John? <Link className="form-link" to = "/signup">create an account.</Link></p>
        </div>
      </div>

    );
};

export default Login;