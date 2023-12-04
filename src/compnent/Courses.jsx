import React,{useState,useEffect} from "react";
import "./course.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faFileText } from "@fortawesome/free-solid-svg-icons";
import FRAME from "../asset/Frame 3619.png";
import { faContactCard } from "@fortawesome/free-solid-svg-icons";
import { faBrush } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import NAV from "../compnent/navbar";
import Lock from "../asset/material-symbols_lock.svg"
import Unlock from "../asset/Vector (1).png";
import World from "../asset/tabler_world.png";
import { useNavigate } from "react-router-dom";

export default function Courses() {

  const [courses, setCourses] = useState([]);
  const [isLocked, setIsLocked] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    // Make the API request using fetch
    const token1=localStorage.getItem("token");
    fetch('http://195.35.37.213:1337/api/v1/course', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token1}`,
       
      },
    })
      .then(response => response.json())
      .then(data => {
        setCourses(data);
        setIsLocked(data.isLocked);
     console.log(data)
       
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="bg_image">
      <NAV />
      <br></br>

      <div className="inner-dash">
        <br></br>
        <br></br>
        <h1 className="course-heading">Available Courses on MTI</h1>
        <br></br>
        <div className="icon-text">
          <p style={{ marginLeft: "10px" }}>
            {" "}
            <FontAwesomeIcon
              className="fa"
              icon={faGlobe}
              style={{ color: "#283C5566" }}
            />{" "}
            Published
          </p>
          <p style={{ marginLeft: "20px" }}>
            {" "}
            <FontAwesomeIcon
              className="fa"
              icon={faCalendar}
              style={{ color: "#283C5566" }}
            />{" "}
            Created on August 8, 2023{" "}
          </p>
          <p style={{ marginLeft: "40px" }}>
            {" "}
            <FontAwesomeIcon
              className="fa"
              icon={faEye}
              style={{ color: "#283C5566" }}
            />{" "}
            Public{" "}
          </p>
          <p style={{ marginLeft: "50px" }}>
            {" "}
            <FontAwesomeIcon
              className="fa"
              icon={faFileText}
              style={{ color: "#283C5566" }}
            />{" "}
            Course{" "}
          </p>
        </div>

        <hr></hr>
        <br></br>
        <div class="main">
          <ul class="cards">
            
          {courses.map(course => (
            <li class="cards_item">
          
              <div class="card">
                <div class="card_image">
                  <img src={FRAME} />
                  <div className="world">
                 
                  <p><img src={World}/>Publish</p>
                  </div>
                  <div className="lock">
                  {isLocked === true ? (
        <img src={Lock} alt="Locked" />
      ) : (
        <img src={Unlock} alt="Unlocked" />
      )}
                </div>
                </div>
                
                <div class="card_content">
                  <h2 class="card_title">Course Title - {course.title}</h2>
                  <p class="card_text icon-text">
                    <FontAwesomeIcon
                      className="fa"
                      icon={faContactCard}
                      style={{ color: "#85A3AB", marginTop: "4px" }}
                    />
                    {/* &nbsp;{course.weeks} */}
                    <FontAwesomeIcon
                      className="fa"
                      icon={faBrush}
                      style={{
                        color: "#85A3AB",
                        marginTop: "4px",
                        marginLeft: "15px",
                      }}
                    />
                    &nbsp;{course.category}
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
                    &nbsp;Button
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
