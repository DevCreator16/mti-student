import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "./cdetail.css";
import zoom_logo from "../asset/Zoom-logo.png";
import img1 from "../asset/Frame 3619.png";
import { Link,useNavigate,useParams } from "react-router-dom";
import NAV from "../compnent/navbar";

export default function Coursedetail() {
  const { courseId } = useParams();
  console.log(courseId);
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState('');
  const [courseData1, setCourseData1] = useState('');
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [instructor,setInstructor]=useState('');
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const Id = localStorage.getItem("info1");
const [cTitle,setctitle]=useState('');
const[category1,setcategory]=useState('');


  useEffect(() => {
    // Fetch the initial course data (for the first week)
    const token1=localStorage.getItem("token");
    fetch(`http://195.35.37.213:1337/api/v1/course/${courseId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token1}`,
       
      },})
      .then((response) => response.json())
      .then((data) => {
        console.log(data.weeks)
        setCourseData(data);
        setctitle(data.title);
        setcategory(data.category);
        setInstructor(data.instructor);
        
      })
      .catch((error) => {
        console.error("Error fetching course data: ", error);
      });
  }, [courseId]);
  


  const handleWeekClick = (week,weekname,selectedWeek) => {
    // Fetch course data for the selected week
     console.log(week)
     const token2=localStorage.getItem("token");
    fetch(`http://195.35.37.213:1337/api/v1/week/${week}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token2}`,
       
      },})
      .then((respons) => respons.json())
      .then((data1) => {
       setSelectedWeek(selectedWeek);
       console.log(selectedWeek)
       console.log(data1.lectures[0])
   setCourseData(data1);
   
      })
      .catch((error) => {
        console.error(`Error fetching data for week ${week}: `, error);
      });

    };
   
  let {weeks} = courseData;

  const zero=0;
  
 
 
  if (!weeks) {
    return <div style={{ color: 'white' }}>Loading...</div>;
  }
  

  return (
    <div>
      <NAV />
      <div className="container tray">
        <div className="back-button-div">
          <a href="" className="back-button">
            <FontAwesomeIcon
              className="fa"
              icon={faCaretLeft}
              style={{ color: "#34465c96" }}
            />{" "}
          </a>
          <Link className="back-link" to="/dash">
            Available Courses
          </Link>
          <h5>/ Course Title</h5>
        </div>

        <div className="course-header">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="course-title">
                <h2>Course Title -{cTitle}</h2>
              </div>
              <div className="course-info">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="course-info-1">
                      <FontAwesomeIcon
                        className="fa"
                        icon={faBookmark}
                        style={{ color: "#34465c96" }}
                      />{" "}
                      <h2>Category - {category1}</h2>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="course-info-2">
                      <FontAwesomeIcon
                        className="fa"
                        icon={faUser}
                        style={{ color: "#34465c96" }}
                      />{" "}
                      <h2>Instructor - {instructor}</h2>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="course-info-3">
                      <h2>4 Reviews - </h2>
                      <FontAwesomeIcon
                        className="fa"
                        icon={faStar}
                        style={{ color: "#FEC107" }}
                      />{" "}
                      <FontAwesomeIcon
                        className="fa"
                        icon={faStar}
                        style={{ color: "#FEC107" }}
                      />{" "}
                      <FontAwesomeIcon
                        className="fa"
                        icon={faStar}
                        style={{ color: "#FEC107" }}
                      />{" "}
                      <FontAwesomeIcon
                        className="fa"
                        icon={faStar}
                        style={{ color: "#FEC107" }}
                      />{" "}
                      <FontAwesomeIcon
                        className="fa"
                        icon={faStar}
                        style={{ color: "#FEC107" }}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-12">
              <div className="zoom-link">
                <a href="">
                  <h2 className="click-here">Click to join </h2>
                  <div className="zoom-logo">
                    <img src={zoom_logo} alt="" />
                  </div>
                  <h2 className="time">{courseData.totalLectureTime}</h2>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-8 col-sm-12">
              <div className="total-content">
                <h3>Total Content</h3>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h2>3 / 10 Weeks</h2>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: `30%` }}></div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h2>7 / 10 Assignments</h2>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: `70%` }}></div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h2>100 / 250 Tokens</h2>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: `40%` }}></div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h2>1 / 4 Quiz</h2>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: `25%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="week-content">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="week-list">
                <ul>
                {weeks.map((week) => (
                    <li
                      key={week.id}
                      className={week.name === selectedWeek ? "active-week" : ""}
                      onClick={() => handleWeekClick(week.id,week.name,selectedWeek)}
                    >
                     
                      <h2>Week - {week.name}</h2>
                      <p>Updated on {week.updatedDate}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12">
              <div className="week">
                <h3>Week {selectedWeek} Content</h3>
                <div className="row">
                  <div className="col-lg-7 col-md-7 col-sm-12">
                    <div className="items-required">
                      <div className="items-required-title">
                        <h2>Items Required</h2>
                      </div>
                      <div className="items-required-text">
                        <h2>Inks:{weeks[selectedWeek-1].lectures[zero].inks}</h2>
                      </div>
                      <div className="items-required-text">
                        <h2>Needles:{weeks[selectedWeek - 1].lectures[zero].needles}</h2>
                      </div>
                      <div className="items-required-text">
                        <h2>Standard Material:{weeks[selectedWeek - 1].lectures[zero].standardMethods}</h2>
                      </div>
                    </div>

                    <div className="lecture-design">
                      <h2 className="segment-title">{weeks[selectedWeek - 1].name}</h2>
                      <div className="segment-image">
                        <img src={img1} alt="" />
                      </div>
                      <p className="segment-text">
                       
                      </p>
                      <h2 className="segment-title">Lecture -{weeks[selectedWeek - 1].lectures[zero].name}</h2>
                      <div className="segment-image">
                        <img src={img1} alt="" />
                      </div>
                      <p className="segment-text">
                      {weeks[selectedWeek - 1].lectures[zero].description}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-5 col-sm-12">
                    <div className="upload-file">
                      <div className="upload-file-title">
                        <h2>Upload File</h2>
                      </div>
                      <div className="upload-file-browse">
                        <FontAwesomeIcon
                          className="fa"
                          icon={faFile}
                          style={{ color: "#283c55", height: "50px" }}
                        />{" "}
                        <label class="upload-file-text">
                          <input type="file" />
                          <h3>Browse</h3>
                        </label>
                      </div>
                      <div className="upload-file-button">
                        <button>
                          <Link
                            to="/result"
                            style={{
                              textDecoration: "none",
                              color: "white",
                              fontWeight: "600",
                            }}
                          >
                            Upload now
                          </Link>
                        </button>
                      </div>
                    </div>

                    {/* <div className="lessons">
                      <div className="lessons-title">
                        <h2>Lessons</h2>
                      </div>
                      <div className="lessons-text">
                        <div className="lessons-text-1">
                          <h2>Bootcamp Theory/Practical Lesson 1</h2>
                        </div>
                        <div className="lessons-text-2">
                          <h3>LESSON</h3>
                          <h2>120 Minutes</h2>
                          <FontAwesomeIcon
                            className="fa faLock"
                            icon={faLock}
                            style={{ color: "#34465c" }}
                          />{" "}
                        </div>
                      </div>
                      <div className="lessons-text">
                        <div className="lessons-text-1">
                          <h2>Bootcamp Theory/Practical Lesson 1</h2>
                        </div>
                        <div className="lessons-text-2">
                          <h3>LESSON</h3>
                          <h2>120 Minutes</h2>
                          <FontAwesomeIcon
                            className="fa faLock"
                            icon={faLock}
                            style={{ color: "#34465c" }}
                          />{" "}
                        </div>
                      </div>
                      <div className="lessons-text">
                        <div className="lessons-text-1">
                          <h2>Bootcamp Theory/Practical Lesson 1</h2>
                        </div>
                        <div className="lessons-text-2">
                          <h3>LESSON</h3>
                          <h2>120 Minutes</h2>
                          <FontAwesomeIcon
                            className="fa faLock"
                            icon={faLock}
                            style={{ color: "#34465c" }}
                          />{" "}
                        </div>
                      </div>
                      <div className="lessons-text">
                        <div className="lessons-text-1">
                          <h2>Bootcamp Theory/Practical Lesson 1</h2>
                        </div>
                        <div className="lessons-text-2">
                          <h3>LESSON</h3>
                          <h2>120 Minutes</h2>
                          <FontAwesomeIcon
                            className="fa faLock"
                            icon={faLock}
                            style={{ color: "#34465c" }}
                          />{" "}
                        </div>
                      </div>
                      <div className="lessons-text">
                        <div className="lessons-text-1">
                          <h2>Bootcamp Theory/Practical Lesson 1</h2>
                        </div>
                        <div className="lessons-text-2">
                          <h3>LESSON</h3>
                          <h2>120 Minutes</h2>
                          <FontAwesomeIcon
                            className="fa faLock"
                            icon={faLock}
                            style={{ color: "#34465c" }}
                          />{" "}
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
    </div>
  );
}
