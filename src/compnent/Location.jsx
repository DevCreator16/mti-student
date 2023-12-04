import React,{useEffect} from "react";
import "./blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link,useNavigate } from "react-router-dom";
import NAV from "../compnent/navbar";
import emailjs from '@emailjs/browser';
import { alertTitleClasses } from "@mui/material";
export default function Location() {
  const Studentname=localStorage.getItem("Fullname");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  const handleEmailSubmit = (e) => {
   e.preventDefault();
   emailjs.sendForm('service_0v01bqo','template_bupbixt',e.target,'dsOwCTFqR8Hh6Bpfw');
   alert('Your Form Successfully send')
   window.location.reload();
  };
  const sername=localStorage.getItem("username");
  return (
    <div>
      <div className="bg-exlpor">
        <NAV />
        <br></br>
        <br></br>
        <br></br>
        <p className="explor">{Studentname}</p>
        <br></br>
        <div className="nav-explor">
        <p>
          <Link className="nav-explor" to={`/${sername}/explore`}>
            ART
          </Link>
        </p>
        <p>
          <Link className="nav-explor" to={`/${sername}/tatoos`}>
            TATTOOS
          </Link>
        </p>
        <p>
          <Link className="nav-explor" to={`/${sername}/bodypricing`}>
            BODY PIERCING
          </Link>
        </p>
        <p>
          <Link className="nav-explor" to={`/${sername}/about`}>
            ABOUT
          </Link>
        </p>
        <p>
          <Link className="nav-explor" to={`/${sername}/blog`}>
            BLOG
          </Link>
        </p>
        <p>
          <Link className="nav-explor" to="#">
            CONTACT
          </Link>
        </p>
        </div>
        <div className="line">
          <hr style={{ color: "white" }}></hr>
        </div>
        <div className="icon-expo">
          <p style={{ color: "white" }}>
            <FontAwesomeIcon
              className="fa"
              icon={faShare}
              style={{ color: "white" }}
            />{" "}
            Share
          </p>
          <p style={{ color: "white" }}>
            <FontAwesomeIcon
              className="fa"
              icon={faPenToSquare}
              style={{ color: "white" }}
            />{" "}
            Edit Portfolio
          </p>
        </div>
        <hr style={{ color: "#FFFFFF66" }}></hr>
        <br></br>

        <div className="info-form">
          <form className="form-design" onSubmit={handleEmailSubmit}>
            <br></br>
            <h5 style={{ color: "white", margin: "10px" }}>Contact</h5>
            <h1 style={{ color: "white", margin: "10px" }}>Get In Touch</h1>
            <label style={{ color: "white", margin: "10px" }}>Your Name</label>
            <br></br>
            <input type="text" className="regis" id="name" />
            <br></br>

            <label style={{ color: "white", margin: "10px" }}>
              Your E-mail
            </label>
            <br></br>
            <input type="text" className="regis" id="emailFrom" name="email_from" />
            <br></br>
            <label style={{ color: "white", margin: "10px" }}>
              Your Message(optional)
            </label>
            <br></br>
            <textarea
              rows="4"
              cols="27"
              name="message"
              id="message"
              style={{
                margin: "10px",
                background: "#FF912C",
                color: "white",
                border: "0.5px solid white",
                padding: "5px",
              }}
              className="text-area"
            >
              {" "}
            </textarea>
            <br></br>
            <button className="form-button">Submit</button>
          </form>
        </div>
        <br></br>
      </div>
    </div>
  );
}
