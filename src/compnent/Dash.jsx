import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import IMG from "../asset/Frame 3619.png";
import "./dash.css";
import NAv from "../compnent/navbar";
import { Link, useNavigate } from "react-router-dom";
import { set } from "react-hook-form";

export default function Dash() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  const [data1, setData2] = useState(null);
  useEffect(() => {
    const res = localStorage.getItem("info");
    setData2(res);
  }, []);

  const [greeting, setGreeting] = useState("");
  const currentTime = new Date().getHours();

  useEffect(() => {
    function determineGreeting() {
      if (currentTime >= 4 && currentTime < 12) {
        setGreeting("Good Morning");
      } else if (currentTime >= 12 && currentTime < 17) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good Evening");
      }
    }

    determineGreeting();
  }, [currentTime]);

  const [totalCourses, setTotalCourses] = useState(0);
  const [totalhours, setTotalWeeks] = useState(0);
  const [totaltokens, setTotaltokent] = useState(0);
  const [completedcount, setTotalcoursecomplete] = useState(0);
  const [courses, setcourse] = useState([]);
  const [totalAssignments, settotalassignments] = useState(0);
  const [totalQuizes, settotalquizes] = useState(0);
  const[duratio,setDuration]=useState(0);
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
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
      .then((data) => {
        setTotalCourses(data.totalCourses);
        setTotalcoursecomplete(data.completedCount);
        setTotalWeeks(data.totalHours);
        setTotaltokent(data.totalTokens);
        setcourse(data.courses);
        settotalassignments(data.totalAssignments);
        settotalquizes(data.totalQuizTaken);
        
     
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  
  return (
    <div>
      <NAv />
      <div className="container tray">
        <div className="welcome-tray">
          {data1 ? (
            <h2>
              {greeting},{data1}
            </h2>
          ) : (
            <p>Loading...</p>
          )}
          <br></br>
          <p>Lorem Ipsum dolor sit consectur di lira mein sit ipsum dey.</p>
        </div>

        <div className="your-stats">
          <h2>Your Statistic</h2>
          <div className="stat-flex">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  style={{ backgroundColor: "#AEDCE8" }}
                  className="stat-box"
                >
                  <h3>{totalCourses}</h3>
                  <h4>Total Courses</h4>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  style={{ backgroundColor: "#F4D1C6" }}
                  className="stat-box"
                >
                  <h3>{totalhours}</h3>
                  <h4>Learning this week</h4>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  style={{ backgroundColor: "#B8C9DD" }}
                  className="stat-box"
                >
                  <h3>{totaltokens}</h3>
                  <h4>Tokens</h4>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  style={{ backgroundColor: "#C6DDFA" }}
                  className="stat-box"
                >
                  <h3>{completedcount}</h3>
                  <h4>Courses Completed</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="dasboard-divider" />

        <div className="your-stats">
          <div className="assigned-courses">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <h2>Assigned Courses</h2>
                <div className="row">
                  {courses.map((item, index) => (
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="assigned-courses-card card">
                        <img src={IMG} className="card-img-top" />
                        <div className="card-body">
                          <h5>Course Title - {item.course.title}</h5>
                         <p style={{display:'none'}}>{item.course.id}</p>
                          <p>{item.course.description}</p>
                          

                          <Link to={`/coursedetail/${item.course.id}`} className="card-button">
                          {item.status}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-3 col-md-12">
                <div>
                  <h2 className="course-summary-title">Course Summary</h2>
                  <div className="course-summary">
                    <li  style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "-10px",
                      }}>
                        Course Duration
                        <p>0</p>
                        </li>
                    <hr className="summary-divider" />
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "-18px",
                      }}
                    >
                      Quiz
                      <p>{totalQuizes}</p>
                    </li>
                    <hr className="summary-divider" />
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "-18px",
                      }}
                    >
                      Assignments
                      <p>{totalAssignments}</p>
                    </li>
                    <hr className="summary-divider" />
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "-18px",
                      }}
                    >
                      Tokens
                      <p>{totaltokens}</p>
                    </li>
                    <hr className="summary-divider" />
                  </div>
                </div>
                <div>
                  {/* <h2 className="group-title">My Group</h2>
                  <div className="course-summary">
                    <div>
                      <div className="group-list">
                        <img src={IMG} /> <br />
                        <h2>Bootcamp (Pre-Fundamental Tattooing)</h2>
                      </div>
                      <div className="group-info">
                        <FontAwesomeIcon
                          className="fa"
                          icon={faEye}
                          style={{ color: "#283C5566" }}
                        />{" "}
                        <p>Public</p>
                        <FontAwesomeIcon
                          className="fa"
                          icon={faPeopleGroup}
                          style={{ color: "#283C5566" }}
                        />{" "}
                        <p>24 Members</p>
                      </div>
                      <div>
                        <div className="group-list">
                          <img src={IMG} /> <br />
                          <h2>Bootcamp (Pre-Fundamental Tattooing)</h2>
                        </div>
                        <div className="group-info">
                          <FontAwesomeIcon
                            className="fa"
                            icon={faEye}
                            style={{ color: "#283C5566" }}
                          />{" "}
                          <p>Public</p>
                          <FontAwesomeIcon
                            className="fa"
                            icon={faPeopleGroup}
                            style={{ color: "#283C5566" }}
                          />{" "}
                          <p>24 Members</p>
                        </div>
                      </div>
                      <div>
                        <div className="group-list">
                          <img src={IMG} /> <br />
                          <h2>Bootcamp (Pre-Fundamental Tattooing)</h2>
                        </div>
                        <div className="group-info">
                          <FontAwesomeIcon
                            className="fa"
                            icon={faEye}
                            style={{ color: "#283C5566" }}
                          />{" "}
                          <p>Public</p>
                          <FontAwesomeIcon
                            className="fa"
                            icon={faPeopleGroup}
                            style={{ color: "#283C5566" }}
                          />{" "}
                          <p>24 Members</p>
                        </div>
                      </div>
                      <div>
                        <a className="view-all" href="">
                          View All
                        </a>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
