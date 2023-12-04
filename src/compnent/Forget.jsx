import React,{useState} from "react";
import "./forgetpass.css";
import LOGO from "../asset/LOGO.png";
import { Link,useNavigate } from "react-router-dom";


export default function Forget() {
  
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
const k=localStorage.setItem("email1",email)
console.log(k)
  const navigate2 = useNavigate();
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try{
      let record = await fetch("http://195.35.37.213:1337/api/v1/auth/forgetPassword", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({email}),
      });
      console.log(record)
      if (record.status === 200) {
        // Password reset email sent successfully
        console.log('Password reset email sent');
        alert('OPT Successfully Sent');
        navigate2("/forget/otp");
        
      } else {
        // Handle error
        console.error('Error sending password reset email');
        alert('Error');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('Error');
    }

    
  };
  return (
    <div>
      <div className="background-image1">
        <div style={{ display: "flex" }}>
          <img
            src={LOGO}
            style={{ marginTop: "10px", marginLeft: "20px", height: "50px" }}
          />
          <h1 className="logo-des">MTI Student Portal</h1>
        </div>
        <hr className="h"></hr>
        <div className="di">
          <h1 className="title">Reset Password Request </h1>
          <hr className="bar-1"></hr>

          <br></br>
          <form onSubmit={handleForgotPassword}> 
            
            
            <p className="labl">E-Mail Address</p>
            <div className="email-center2">
              <input
                className="email2 icon1"
                placeholder="Enter Email Address"
                style={{ marginTop: "14px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <br></br>
            <div class="button-container">
              <button className="HOME">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Home
                </Link>
              </button>
              
              <button className="SUBMIT">
              Submit
              </button>
              
            </div>
            {/* <h2  className='not'>Not a member ?&nbsp;<Link to="/forget" style={{color:'#FF912C'}}>Register Your Account</Link></h2> */}
          </form>
          
        </div>
      </div>
    </div>
  );
}
