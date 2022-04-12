import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    return (
        <div className="form-container">
        <div className="">
          <h2 className="form-title">Sign Up</h2>
          <form action="">
            <div className="input-groupp">
              <label htmlFor="email">Email</label>
              <input
            
                type="email"
                name="email"
                id=""
                required
              />
            </div>
  
            <div className="input-groupp">
              <label htmlFor="password">Password</label>
              <input
            
                type="password"
                name="password"
                id=""
                required
              />
            </div>
  
            <div className="input-groupp">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
            
                type="password"
                name=" confirm-password"
                id=""
                required
              />
            </div>
            {/* <p style={{ color: "yellow" }}>{error}</p> */}
            <input className="form-submit" type="submit" value="Sign Up" />
          </form>
          <p>
            Already have an Account?{" "}
            <Link className="form-link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    );
};

export default SignUp;