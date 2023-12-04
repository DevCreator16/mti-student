import React,{useState,useEffect} from "react";
import "./home.css";
import NAV from "../compnent/navbar";
import Bin from "../asset/WELCOME BAR2.png";
import { Link,useNavigate } from "react-router-dom";
import Portfolioimg from "../asset/Frame 3733.png";
import IMG from "../asset/Frame 3619.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import Pra from "../asset/Rectangle 111.png";
import des from "../asset/Frame 3648.png";

export default function Home() {

  const Studentname = localStorage.getItem("Fullname");
  const ProfilePic = localStorage.getItem("prifilepicture");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
      // window.location.reload(true);
  }, []);
  const sername=localStorage.getItem("username");
  return (
    <div className="back-home">
      <NAV />
      <br></br>
      <div>
        <img src={Bin} className="bin"></img>

        <img
          className="prof"
          src={"http://195.35.37.213:1337/" + ProfilePic}
          alt="User Profile"
        />

        <div className="e">
          <h6 style={{ fontSize: "20px", color: "white" }}>{Studentname}</h6>
        </div>
      </div>
      <div className="container bak">
        <div className="home1-nav">
          <Link to="/home" className="home-link">
            Home
          </Link>
          <Link to="/dash" className="home-link">
            Dashboard
          </Link>
          <Link to="/inbox" className="home-link">
            Inbox
          </Link>
          <Link to="/course" className="home-link">
            Courses
          </Link>
        </div>
      </div>
      <hr style={{ color: "white", marginTop: "-30px" }}></hr>
      <br></br>
      <div className="container bak">
        <div className="row">
          <div className="col-lg-4 col-mb-12 col-sm-12">
            <div className="img-borger">
              <div className="port-img">
                <img src={Portfolioimg} className="p-img" />
                <button className="p-imgbtn"><Link className="p-imgbtn" to={`/${sername}/explore`}>View Portfolio</Link></button>
              </div>
            </div>
            <div className="my-groups">
              <div className="groups">
                <h6 className="group-name">My Groups</h6>
                <hr style={{ color: "white" }}></hr>
                <div>
                  <div className="text-img">
                    <img src={IMG} className="boot-img" />
                    <h6 className="bootcamp-pre">
                      Bootcamp (Pre-Fundamental Tattooing)
                    </h6>
                  </div>
                  <div className="group-info1">
                    <FontAwesomeIcon
                      className="fa"
                      icon={faEye}
                      style={{ color: "white" }}
                    />{" "}
                    <p style={{ color: "white" }}>Public</p>
                    <FontAwesomeIcon
                      className="fa"
                      icon={faPeopleGroup}
                      style={{ color: "white" }}
                    />{" "}
                    <p style={{ color: "white" }}>24 Members</p>
                  </div>
                </div>
                <div>
                  <div className="text-img">
                    <img src={IMG} className="boot-img" />
                    <h6 className="bootcamp-pre">
                      Bootcamp (Pre-Fundamental Tattooing)
                    </h6>
                  </div>
                  <div className="group-info1">
                    <FontAwesomeIcon
                      className="fa"
                      icon={faEye}
                      style={{ color: "white" }}
                    />{" "}
                    <p style={{ color: "white" }}>Public</p>
                    <FontAwesomeIcon
                      className="fa"
                      icon={faPeopleGroup}
                      style={{ color: "white" }}
                    />{" "}
                    <p style={{ color: "white" }}>24 Members</p>
                  </div>
                </div>
                <div>
                  <div className="text-img">
                    <img src={IMG} className="boot-img" />
                    <h6 className="bootcamp-pre">
                      Bootcamp (Pre-Fundamental Tattooing)
                    </h6>
                  </div>
                  <div className="group-info1">
                    <FontAwesomeIcon
                      className="fa"
                      icon={faEye}
                      style={{ color: "white" }}
                    />{" "}
                    <p style={{ color: "white" }}>Public</p>
                    <FontAwesomeIcon
                      className="fa"
                      icon={faPeopleGroup}
                      style={{ color: "white" }}
                    />{" "}
                    <p style={{ color: "white" }}>24 Members</p>
                  </div>
                </div>
                <div>
                  <div className="text-img">
                    <img src={IMG} className="boot-img" />
                    <h6 className="bootcamp-pre">
                      Bootcamp (Pre-Fundamental Tattooing)
                    </h6>
                  </div>
                  <div className="group-info1">
                    <FontAwesomeIcon
                      className="fa"
                      icon={faEye}
                      style={{ color: "white" }}
                    />{" "}
                    <p style={{ color: "white" }}>Public</p>
                    <FontAwesomeIcon
                      className="fa"
                      icon={faPeopleGroup}
                      style={{ color: "white" }}
                    />{" "}
                    <p style={{ color: "white" }}>24 Members</p>
                  </div>
                </div>
                <div>
                  <div className="text-img">
                    <img src={IMG} className="boot-img" />
                    <h6 className="bootcamp-pre">
                      Bootcamp (Pre-Fundamental Tattooing)
                    </h6>
                  </div>
                  <div className="group-info1">
                    <FontAwesomeIcon
                      className="fa"
                      icon={faEye}
                      style={{ color: "white" }}
                    />{" "}
                    <p style={{ color: "white" }}>Public</p>
                    <FontAwesomeIcon
                      className="fa"
                      icon={faPeopleGroup}
                      style={{ color: "white" }}
                    />{" "}
                    <p style={{ color: "white" }}>24 Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-mb-12 col-sm-12">
            <div className="border-white">
              <div className="cross-fles">
                <div className="name-icon">
                  <div className="social">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                    >
                      <circle cx="25.5" cy="25.5" r="25.5" fill="#D9D9D9" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="name-person">
                      Steve Roe{" "}
                      <span className="date-time">
                        June 23, 2023
                        <FontAwesomeIcon
                          className="fa"
                          icon={faGlobe}
                          style={{ color: "black", marginLeft: "5px" }}
                        />{" "}
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="cross">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <path
                      d="M20.2349 20.2388L7.55859 7.5625M20.2349 7.5625L7.55859 20.2388"
                      stroke="#283C55"
                      stroke-opacity="0.8"
                      stroke-width="1.58458"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="para-des1">
                <p className="announcement">
                  Lorem ipsum dolor sit amet consectetur. Non leo mauris integer
                  nulla pretium tincidunt nulla netus. Augue aliquam laoreet
                  cursus habitasse ultrices senectus diam eget pellentesque
                </p>
                <img src={Pra} />
              </div>
            </div>
            <br></br>
            <div className="border-white">
              <div className="cross-fles">
                <div className="name-icon">
                  <div className="social">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                    >
                      <circle cx="25.5" cy="25.5" r="25.5" fill="#D9D9D9" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="name-person">
                      Steve Roe{" "}
                      <span className="date-time">
                        June 23, 2023
                        <FontAwesomeIcon
                          className="fa"
                          icon={faGlobe}
                          style={{ color: "black", marginLeft: "5px" }}
                        />{" "}
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="cross">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <path
                      d="M20.2349 20.2388L7.55859 7.5625M20.2349 7.5625L7.55859 20.2388"
                      stroke="#283C55"
                      stroke-opacity="0.8"
                      stroke-width="1.58458"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="para-des1">
                <p className="announcement">
                  Lorem ipsum dolor sit amet consectetur. Non leo mauris integer
                  nulla pretium tincidunt nulla netus. Augue aliquam laoreet
                  cursus habitasse ultrices senectus diam eget pellentesque
                </p>
                <img src={Pra} />
              </div>
            </div>
            <br></br>
            <div className="border-white">
              <div className="cross-fles">
                <div className="name-icon">
                  <div className="social">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                    >
                      <circle cx="25.5" cy="25.5" r="25.5" fill="#D9D9D9" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="name-person">
                      Steve Roe{" "}
                      <span className="date-time">
                        June 23, 2023
                        <FontAwesomeIcon
                          className="fa"
                          icon={faGlobe}
                          style={{ color: "black", marginLeft: "5px" }}
                        />{" "}
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="cross">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <path
                      d="M20.2349 20.2388L7.55859 7.5625M20.2349 7.5625L7.55859 20.2388"
                      stroke="#283C55"
                      stroke-opacity="0.8"
                      stroke-width="1.58458"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="para-des1">
                <p className="announcement">
                  Lorem ipsum dolor sit amet consectetur. Non leo mauris integer
                  nulla pretium tincidunt nulla netus. Augue aliquam laoreet
                  cursus habitasse ultrices senectus diam eget pellentesque
                </p>
                <img src={Pra} />
              </div>
            </div>
            <br></br>
            <div className="border-white">
              <div className="cross-fles">
                <div className="name-icon">
                  <div className="social">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                    >
                      <circle cx="25.5" cy="25.5" r="25.5" fill="#D9D9D9" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="name-person">
                      Steve Roe{" "}
                      <span className="date-time">
                        June 23, 2023
                        <FontAwesomeIcon
                          className="fa"
                          icon={faGlobe}
                          style={{ color: "black", marginLeft: "5px" }}
                        />{" "}
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="cross">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <path
                      d="M20.2349 20.2388L7.55859 7.5625M20.2349 7.5625L7.55859 20.2388"
                      stroke="#283C55"
                      stroke-opacity="0.8"
                      stroke-width="1.58458"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="para-des1">
                <p className="announcement">
                  Lorem ipsum dolor sit amet consectetur. Non leo mauris integer
                  nulla pretium tincidunt nulla netus. Augue aliquam laoreet
                  cursus habitasse ultrices senectus diam eget pellentesque
                </p>
                <img src={Pra} />
              </div>
            </div>
            <br></br>
          </div>
          <div className="col-lg-3 col-mb-12 col-sm-12">
            <div className="chat-groups">
              <h5 className="group-name">Groups</h5>
              <div className="group-mem">
                <div className="group-pic1">
                  <img src={des} />
                  <h3 className="group-name nn">Kate Julie</h3>
                </div>
                <div className="active-not">
                  <p className="status-active">Active</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
                      fill="#ABD9C2"
                    />
                    <path
                      d="M11.7895 7C11.7895 9.64515 9.64515 11.7895 7 11.7895C4.35485 11.7895 2.21053 9.64515 2.21053 7C2.21053 4.35485 4.35485 2.21053 7 2.21053C9.64515 2.21053 11.7895 4.35485 11.7895 7Z"
                      fill="#4FCB8D"
                    />
                  </svg>
                </div>
              </div>
              <div className="group-mem">
                <div className="group-pic1">
                  <img src={des} />
                  <h3 className="group-name nn">Kate Julie</h3>
                </div>
                <div className="active-not">
                  <p className="status-active">Active</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
                      fill="#ABD9C2"
                    />
                    <path
                      d="M11.7895 7C11.7895 9.64515 9.64515 11.7895 7 11.7895C4.35485 11.7895 2.21053 9.64515 2.21053 7C2.21053 4.35485 4.35485 2.21053 7 2.21053C9.64515 2.21053 11.7895 4.35485 11.7895 7Z"
                      fill="#4FCB8D"
                    />
                  </svg>
                </div>
              </div>
              <div className="group-mem">
                <div className="group-pic1">
                  <img src={des} />
                  <h3 className="group-name nn">Kate Julie</h3>
                </div>
                <div className="active-not">
                  <p className="status-active">Active</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
                      fill="#ABD9C2"
                    />
                    <path
                      d="M11.7895 7C11.7895 9.64515 9.64515 11.7895 7 11.7895C4.35485 11.7895 2.21053 9.64515 2.21053 7C2.21053 4.35485 4.35485 2.21053 7 2.21053C9.64515 2.21053 11.7895 4.35485 11.7895 7Z"
                      fill="#4FCB8D"
                    />
                  </svg>
                </div>
              </div>
              <div className="group-mem">
                <div className="group-pic1">
                  <img src={des} />
                  <h3 className="group-name nn">Kate Julie</h3>
                </div>
                <div className="active-not">
                  <p className="status-active">Active</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
                      fill="#ABD9C2"
                    />
                    <path
                      d="M11.7895 7C11.7895 9.64515 9.64515 11.7895 7 11.7895C4.35485 11.7895 2.21053 9.64515 2.21053 7C2.21053 4.35485 4.35485 2.21053 7 2.21053C9.64515 2.21053 11.7895 4.35485 11.7895 7Z"
                      fill="#4FCB8D"
                    />
                  </svg>
                </div>
              </div>
              <div className="group-mem">
                <div className="group-pic1">
                  <img src={des} />
                  <h3 className="group-name nn">Kate Julie</h3>
                </div>
                <div className="active-not">
                  <p className="status-active">Active</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
                      fill="#ABD9C2"
                    />
                    <path
                      d="M11.7895 7C11.7895 9.64515 9.64515 11.7895 7 11.7895C4.35485 11.7895 2.21053 9.64515 2.21053 7C2.21053 4.35485 4.35485 2.21053 7 2.21053C9.64515 2.21053 11.7895 4.35485 11.7895 7Z"
                      fill="#4FCB8D"
                    />
                  </svg>
                </div>
              </div>
              <div className="group-mem">
                <div className="group-pic1">
                  <img src={des} />
                  <h3 className="group-name nn">Kate Julie</h3>
                </div>
                <div className="active-not">
                  <p className="status-active">Active</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
                      fill="#ABD9C2"
                    />
                    <path
                      d="M11.7895 7C11.7895 9.64515 9.64515 11.7895 7 11.7895C4.35485 11.7895 2.21053 9.64515 2.21053 7C2.21053 4.35485 4.35485 2.21053 7 2.21053C9.64515 2.21053 11.7895 4.35485 11.7895 7Z"
                      fill="#4FCB8D"
                    />
                  </svg>
                </div>
              </div>
              <div className="group-mem">
                <div className="group-pic1">
                  <img src={des} />
                  <h3 className="group-name nn">Kate Julie</h3>
                </div>
                <div className="active-not">
                  <p className="status-active">Active</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
                      fill="#ABD9C2"
                    />
                    <path
                      d="M11.7895 7C11.7895 9.64515 9.64515 11.7895 7 11.7895C4.35485 11.7895 2.21053 9.64515 2.21053 7C2.21053 4.35485 4.35485 2.21053 7 2.21053C9.64515 2.21053 11.7895 4.35485 11.7895 7Z"
                      fill="#4FCB8D"
                    />
                  </svg>
                </div>
              </div>
              <div className="group-mem">
                <div className="group-pic1">
                  <img src={des} />
                  <h3 className="group-name nn">Kate Julie</h3>
                </div>
                <div className="active-not">
                  <p className="status-active">Active</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
                      fill="#ABD9C2"
                    />
                    <path
                      d="M11.7895 7C11.7895 9.64515 9.64515 11.7895 7 11.7895C4.35485 11.7895 2.21053 9.64515 2.21053 7C2.21053 4.35485 4.35485 2.21053 7 2.21053C9.64515 2.21053 11.7895 4.35485 11.7895 7Z"
                      fill="#4FCB8D"
                    />
                  </svg>
                </div>
              </div>
              <div className="group-mem">
                <div className="group-pic1">
                  <img src={des} />
                  <h3 className="group-name nn">Kate Julie</h3>
                </div>
                <div className="active-not">
                  <p className="status-active">Active</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
                      fill="#ABD9C2"
                    />
                    <path
                      d="M11.7895 7C11.7895 9.64515 9.64515 11.7895 7 11.7895C4.35485 11.7895 2.21053 9.64515 2.21053 7C2.21053 4.35485 4.35485 2.21053 7 2.21053C9.64515 2.21053 11.7895 4.35485 11.7895 7Z"
                      fill="#4FCB8D"
                    />
                  </svg>
                </div>
              </div>
              <div className="group-mem">
                <div className="group-pic1">
                  <img src={des} />
                  <h3 className="group-name nn">Kate Julie</h3>
                </div>
                <div className="active-not">
                  <p className="status-active">Active</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
                      fill="#ABD9C2"
                    />
                    <path
                      d="M11.7895 7C11.7895 9.64515 9.64515 11.7895 7 11.7895C4.35485 11.7895 2.21053 9.64515 2.21053 7C2.21053 4.35485 4.35485 2.21053 7 2.21053C9.64515 2.21053 11.7895 4.35485 11.7895 7Z"
                      fill="#4FCB8D"
                    />
                  </svg>
                </div>
              </div>
              <div className="group-mem">
                <div className="group-pic1">
                  <img src={des} />
                  <h3 className="group-name nn">Kate Julie</h3>
                </div>
                <div className="active-not">
                  <p className="status-active">Active</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
                      fill="#ABD9C2"
                    />
                    <path
                      d="M11.7895 7C11.7895 9.64515 9.64515 11.7895 7 11.7895C4.35485 11.7895 2.21053 9.64515 2.21053 7C2.21053 4.35485 4.35485 2.21053 7 2.21053C9.64515 2.21053 11.7895 4.35485 11.7895 7Z"
                      fill="#4FCB8D"
                    />
                  </svg>
                </div>
              </div>
              <div className="group-mem">
                <div className="group-pic1">
                  <img src={des} />
                  <h3 className="group-name nn">Kate Julie</h3>
                </div>
                <div className="active-not">
                  <p className="status-active">Active</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
                      fill="#ABD9C2"
                    />
                    <path
                      d="M11.7895 7C11.7895 9.64515 9.64515 11.7895 7 11.7895C4.35485 11.7895 2.21053 9.64515 2.21053 7C2.21053 4.35485 4.35485 2.21053 7 2.21053C9.64515 2.21053 11.7895 4.35485 11.7895 7Z"
                      fill="#4FCB8D"
                    />
                  </svg>
                </div>
              </div>
              <div className="group-mem">
                <div className="group-pic1">
                  <img src={des} />
                  <h3 className="group-name nn">Kate Julie</h3>
                </div>
                <div className="active-not">
                  <p className="status-active">Active</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
                      fill="#ABD9C2"
                    />
                    <path
                      d="M11.7895 7C11.7895 9.64515 9.64515 11.7895 7 11.7895C4.35485 11.7895 2.21053 9.64515 2.21053 7C2.21053 4.35485 4.35485 2.21053 7 2.21053C9.64515 2.21053 11.7895 4.35485 11.7895 7Z"
                      fill="#4FCB8D"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}
