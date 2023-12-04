import React, { useState,useEffect } from "react";
import "./log.css";
import LOGO from "../asset/LOGO.png";
import { Link,useNavigate } from "react-router-dom";

function Newpassword() {
 
  const [email, setemail] = useState('');
  const [password, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a request to your API to update the password
    try {
      const response = await fetch('http://195.35.37.213:1337/api/v1/auth/forget/renewPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({email,password }),
      });
      if (response.ok) {
       alert('Successfully change password')
       navigate("/")
       console.log(response)
      } else {
         alert('cannot change password')
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred while updating the password.');
    }
  };

  return (
    <>
      <div className="background-image1">
        <div style={{ display: "flex" }}>
          <img
            src={LOGO}
            style={{ marginTop: "10px", marginLeft: "20px", height: "50px" }}
            alt="logo"
          />
          <h1 className="logo-des">MTI Student Portal</h1>
        </div>
        <hr className="h"></hr>
        <div className="di">
          <h1 className="title">Create Your New Password</h1>
          <form>
            <div className="email-center">
              <input
                type="email"
                className="email icon1"
                style={{ marginTop: "14px" }}
                onChange={(e) => setemail(e.target.value)}
                value={email}
                placeholder="Email"
              />
            </div>
            <div className="email-center">
              <input
                type="password"
                className="email icon1"
                style={{ marginTop: "20px" }}
                onChange={(e) => setNewPassword(e.target.value)}
                value={password}
                placeholder="New Password"
              />
            </div>
            <input type="submit" onClick={handleSubmit} className="submit" value={"Reset Password"} />
          </form>
          <p>{message}</p>
          <br></br>
          <h2 className='not'>Know your password ?&nbsp;<Link to="/" style={{ color: '#FF912C' }}>Login</Link></h2>
          <br></br>
        </div>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

export default Newpassword;
