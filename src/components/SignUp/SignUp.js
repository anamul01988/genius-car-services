import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const [
        createUserWithEmailAndPassword,
        user,
        // loading,
        // error
      ] = useCreateUserWithEmailAndPassword(auth);

      if(user){
          navigate('/')
      }

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
      };
      const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
      };
      const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
      };
      const handleCreateUser = (event) => {
        //   console.log(event)
        event.preventDefault();
        if (password !== confirmPassword) {
          setError("your two passwords didnt match");
          return;
        }
        if (password.length < 6) {
          setError("password must be 6 character  or longer");
          return;
        }
    
        createUserWithEmailAndPassword(email, password);
      };

    
    return (
        <div className="form-container">
        <div className="">
          <h2 className="form-title">Sign Up</h2>
          <form onSubmit={handleCreateUser} action="">
            <div className="input-groupp">
              <label htmlFor="email">Email</label>
              <input
                onBlur={handleEmailBlur}
                type="email"
                name="email"
                id=""
                required
              />
            </div>
  
            <div className="input-groupp">
              <label htmlFor="password">Password</label>
              <input
               onBlur={handlePasswordBlur}
                type="password"
                name="password"
                id=""
                required
              />
            </div>
  
            <div className="input-groupp">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                 onBlur={handleConfirmPasswordBlur}
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