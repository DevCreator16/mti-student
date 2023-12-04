import React, { useState } from "react";
import "./log.css";
import LOGO from "../asset/LOGO.png";
import { Link, useNavigate } from "react-router-dom";

function LOGIN() {
  const [showPage1, setShowPage1] = useState(true);
  const [showPage2, setShowPage2] = useState(false);
  const empty = {
    email: "",
    password: "",
  };
  const [handle, setHandle] = useState(empty);
  const handler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };
  const navigate = useNavigate();

  const logIn = async () => {
    if (handle.email === "" || handle.password === "") {
      alert("Please Enter the Fields First");
    } else {
      try {
        const response = await fetch("http://195.35.37.213:1337/api/v1/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(handle),
        });
      
        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Error ${response.status}: ${errorText}`);
          throw new Error("Authentication failed");
        }
      
        const data = await response.json();
        console.log(data)
        const { token, user } = data;
      
        if (token&&user.role=="admin") {
          localStorage.setItem("token", token);
          localStorage.setItem("info", user.firstName);
          localStorage.setItem("info1", user.id);
          localStorage.setItem("username",user.username)
          navigate("/home");
          navigate("/profile");
          
          setShowPage2(true, window.location.reload())
          window.location.reload(true);
        } else {
          alert('Authentication failed.');
        }
      } catch (error) {
        console.error("Authentication error:", error);
        alert("Authentication failed. Please check your credentials.");
      }
    
    
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
          <h1 className="title">LOGIN FORM </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              logIn();
            }}
          >
            <div className="email-center">
              <input
                className="email icon"
                onChange={handler}
                name="email"
                placeholder="Username/E-mail Address"
                type="email"
              />
            </div>
            <br></br>
            <div className="email-center">
              <input
                type="password"
                className="email icon1"
                style={{ marginTop: "14px" }}
                onChange={handler}
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="for">
              <p>
                Forget Password ? &nbsp;
                <Link to="/forget" style={{ color: "#FF912C" }}>
                  Click Here
                </Link>
              </p>
            </div>
            <input type="submit" className="submit" value={"LOGIN"} />
          </form>
          <br></br>
          <br></br>
        </div>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

export default LOGIN;
