import React,{useEffect,useState} from "react";
import "./profil.css";
import NAV from "./navbar";
import BIN from "../asset/WELCOME BAR.png";
import PROF from "../asset/Ellipse 47.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FRAME from "../asset/Frame 3619.png";
import { faContactCard } from "@fortawesome/free-solid-svg-icons";
import { faBrush } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  const [courses, setcourse] = useState([]);

  const id = localStorage.getItem("info1");
 // console.log(id);

  useEffect(() => {
    const token1=localStorage.getItem("token");
    fetch(`http://195.35.37.213:1337/api/v1/studentCourse/student/${id}/fetch`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token1}`,
       
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setcourse(data.courses);
       
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  const ProfilePic=localStorage.getItem('prifilepicture');
  const Studentname=localStorage.getItem('Fullname');
 
  return (
    <div className="background-image5">
      <NAV />
      <br></br>
      <div className="wlcom">
        <img src={BIN} className="bin"></img>
        <img
        className="prof"
          src={'http://195.35.37.213:1337/'+ProfilePic}
          alt="User Profile"
        />
    
        <div className="e">
          <h6 style={{fontSize:'20px'}}>{Studentname}</h6>
          
        </div>
        <br></br>
        <br></br>
        <div style={{ display: "flex" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h6>
            <Link
              style={{
                textDecoration: "none",
                color: "#283C55",
                fontSize: "20px",
              }}
              to="/profile"
              className="profile-hover"
            >
              About Me
            </Link>
          </h6>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h6>
            <Link
              style={{
                textDecoration: "none",
                color: "#283C55",
                fontSize: "20px",
              }}
              to="/mycourses"
              className="profile-hover"
            >
              My Courses
            </Link>
          </h6>
        </div>
        <hr></hr>
        <div class="main">
        
          <ul class="cards">
          {courses.map((item, index) => (
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src={FRAME} />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Course Title - {item.course.title}</h2>
                  <p class="card_text icon-text">
                    <FontAwesomeIcon
                      className="fa"
                      icon={faContactCard}
                      style={{ color: "#85A3AB", marginTop: "4px" }}
                    />
                    &nbsp;27lectures
                    <FontAwesomeIcon
                      className="fa"
                      icon={faBrush}
                      style={{
                        color: "#85A3AB",
                        marginTop: "4px",
                        marginLeft: "15px",
                      }}
                    />
                    &nbsp;{item.course.category}
                  </p>
                  <hr style={{ color: "#85A3AB" }}></hr>
                  <p class="card_text icon-text">
                    Complition Rate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div
                      style={{
                        marginTop: "-16px",
                        borderLeft: "1px solid #85A3AB ",
                        height: "50px",
                        marginBottom: "-25px",
                      }}
                    ></div>
                    &nbsp;&nbsp;&nbsp;Student Reaction<br></br>
                  </p>
                  <hr style={{ color: "#85A3AB" }}></hr>

                  <button class="btn card_btn">
                    <FontAwesomeIcon
                      className="fa"
                      icon={faClock}
                      style={{ color: "#85A3AB", marginTop: "4px" }}
                    />
                    &nbsp;{item.status}
                  </button>
                </div>
              </div>
            </li>
            ))} 
          </ul>
        </div>
      </div>
      <br></br>
    </div>
  );
}
