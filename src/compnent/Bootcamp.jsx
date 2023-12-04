import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import zoom_logo from "../asset/Zoom-logo.png";
import "./bootcampcourse.css";
import { Link } from "react-router-dom";
import NAV from "../compnent/navbar";

export default function Bootcamp() {
  const weeks = Array.from({ length: 5 }, (_, index) => index + 1);

  const [selectedWeek, setSelectedWeek] = useState(1);

  const handleWeekClick = (week) => {
    setSelectedWeek(week);
  };
  return (
    <div>
      <NAV/>
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
                <h2>Course Title - Level 2 (Beginner)</h2>
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
                      <h2>Category - Tattoo Course</h2>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="course-info-2">
                      <FontAwesomeIcon
                        className="fa"
                        icon={faUser}
                        style={{ color: "#34465c96" }}
                      />{" "}
                      <h2>Instructor - Master Instructor</h2>
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
                  <h2 className="time">02 : 42 : 28 : 53</h2>
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
                      key={week}
                      className={week === selectedWeek ? "active-week" : ""}
                      onClick={() => handleWeekClick(week)}
                    >
                      <h2>Week - {week}</h2>
                      <p>Updated on August 8, 2023 2:30PM</p>
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
                    <div className="lecture-design">
                      <h2 className="segment-title">Lecture - Design</h2>
                      <div className="segment-video">
                        <iframe
                          src="https://www.youtube.com/embed/h9xaHwBsRUw"
                          title="YouTube Video"
                          frameborder="0"
                        ></iframe>
                      </div>
                    </div>

                    <div className="lessons">
                      <div className="lessons-title">
                        <h2 >Lessons</h2>
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
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-5 col-sm-12">
                    <div className="items-required">
                      <div className="items-required-title">
                        <h2>Items Required</h2>
                      </div>
                      <div className="items-required-text">
                        <h2>Inks:</h2>
                      </div>
                      <div className="items-required-text">
                        <h2>Needles:</h2>
                      </div>
                      <div className="items-required-text">
                        <h2>Standard Material:<br></br>
                        <br></br><br></br></h2>
                      </div>
                    </div>
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
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            Upload now
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="week-nav">
          <div className="prev-week">
            <FontAwesomeIcon
              className="fa"
              icon={faArrowLeft}
              style={{ color: "#34465c96" }}
            />{" "}
            <a href="">
              <h2>Previous Week</h2>
            </a>
          </div>
          <div className="next-week">
            <a href="">
              <h2>Next Week</h2>
            </a>
            <FontAwesomeIcon
              className="fa"
              icon={faArrowRight}
              style={{ color: "#ffffff" }}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
