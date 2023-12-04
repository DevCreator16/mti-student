import React,{useState,useEffect} from 'react'
import "./otpw.css";
import OtpInput from 'react-otp-input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LOGO from "../asset/LOGO.png";
export default function Otp() {
 
    const [token, setOTP] = useState('');
    const navigate = useNavigate();
  const email=localStorage.getItem("email1");
    const handleVerification = () => {
      // Replace 'your_api_endpoint' with the actual API endpoint for OTP verification
      fetch('http://195.35.37.213:1337/api/v1/auth/forget/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email,token }), // Send the entered OTP to the API
      })
        .then(response => {
          if (response.ok) {

            navigate("/forget/otp/newpassword")
            
            return response.json();
          } else {
            throw new Error('OTP verification failed.');
          }
        })
        
        .catch(error => {
          alert('cannot gennerate opt at this time')
        });
    };
  
  return (
    <div className="fillback">
         <div style={{ display: "flex" }}>
          <img
            src={LOGO}
            style={{ marginTop: "10px", marginLeft: "20px", height: "50px" }}
          />
          <h1 className="logo-des">MTI Student Portal</h1>
        </div>
        <hr className="h"></hr>
    <div className="otp-verification-container">
      <h2 className='email-opt'>Check Your Email For OTP</h2>
      <div className="center-otp">
    <div className='opt-input'>
      <input
        type="text"
        placeholder="Enter OTP"
        className='opt-text'
        value={token} onChange={e => setOTP(e.target.value)}
      />
      </div> 
      <div className="opt-btn">
      <button className='button9' onClick={handleVerification}>Verify OTP</button>
      </div>
      </div>
    </div>
    </div>
    
  );
}

