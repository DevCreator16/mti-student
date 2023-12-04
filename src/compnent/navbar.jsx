import React,{useEffect} from "react";
import "./navbr.css";
import LOGO from "../asset/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB, faHome, faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { faFileText } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import IMG from "../asset/Ellipse 3.png";
import { Link,useNavigate } from "react-router-dom";

export default function navbar() {
const Studentname=localStorage.getItem("Fullname");
const ProfilePic=localStorage.getItem("prifilepicture");

  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <label class="logo">
          <img src={LOGO}></img>
        </label>

        <ul className="navc">
        <li className="list">
            <Link to="/home">
              <FontAwesomeIcon
                className="fa"
                icon={faHome}
                style={{ color: "#85A3AB" }}
              />
              &nbsp; Home
            </Link>
          </li>
          <li className="list">
            <Link to="/dash">
              <FontAwesomeIcon
                className="fa"
                icon={faTableColumns}
                style={{ color: "#85A3AB" }}
              />
              &nbsp;Dashboard
            </Link>
          </li>
          <li className="list">
            <Link to="/course">
              <FontAwesomeIcon
                className="fa"
                icon={faFileText}
                style={{ color: "#85A3AB" }}
              />
              &nbsp;Courses
            </Link>
          </li>
          
        </ul>
        <div className="nav2">
          <ul className="navc" style={{ float: "right" }}>
            <li className="list">
              <div class="dropdown">
                <a class="dropbtn" style={{ border: "1px solid #85A3AB" }}>
                  <FontAwesomeIcon
                    className="fa"
                    icon={faEnvelope}
                    style={{ color: "#85A3AB" }}
                  />
                </a>
                <div class="dropdown-content">
                  <Link
                    to="/inbox"
                    style={{ backgroundColor: "#FF912C", color: "#283C55" }}
                  >
                    <FontAwesomeIcon
                      className="fa"
                      icon={faEnvelope}
                      style={{ color: "#283C55" }}
                    />
                    &nbsp; New Messages
                  </Link>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </li>

            <li className="list">
              {" "}
              <li className="list">
                <div class="dropdown">
                  <a class="dropbtn" style={{ border: "1px solid #85A3AB" }}>
                    <FontAwesomeIcon
                      className="fa"
                      icon={faBell}
                      style={{ color: "#85A3AB" }}
                    />
                  </a>
                  <div class="dropdown-content">
                    <a
                      href="#"
                      style={{ backgroundColor: "#FF912C", color: "#283C55" }}
                    >
                      <FontAwesomeIcon
                        className="fa"
                        icon={faBell}
                        style={{ color: "#283C55" }}
                      />
                      &nbsp; Notification
                    </a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
              </li>
            </li>
            <li className="list">
              <a href="#"   style={{ border: "1px solid #85A3AB" }} className="search">
                <FontAwesomeIcon
                  className="fa"
                  icon={faSearch}
                  style={{ color: "#85A3AB" }}
                />
              </a>
            </li>

            <li className="list lis">
              {" "}
              <li>
                <div class="dropdow">
                  <Link to="/profile" className="pic">
                    <img src={'http://195.35.37.213:1337/'+ProfilePic} style={{ width: "50px", height: "50px",borderRadius:'50%' }} />
                    &nbsp;&nbsp;&nbsp;{Studentname}
                  </Link>
                  <div class="dropdown-conten">
                    <Link
                      to="/"
                      style={{
                        fontSize: "18px",
                        fontWeight: "400",
                        color: "black",
                        textTransform: "none",
                      }}
                      onClick={()=>{
                        localStorage.removeItem('token')
                        localStorage.removeItem('prifilepicture');
                        localStorage.removeItem('Fullname');
                        localStorage.removeItem('email1');
                        localStorage.removeItem('info');
                        localStorage.removeItem('info1');
                      }}
                    >
                      SignOut
                    </Link>
                    <Link
                      to="/profile"
                      style={{
                        fontSize: "18px",
                        fontWeight: "400",
                        color: "black",
                        textTransform: "none",
                      }}
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </li>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
