import React,{useState,useEffect} from "react";
import NAV from "../compnent/navbar";
import Bin from "../asset/WELCOME BAR2.png";
import { Link,useNavigate } from "react-router-dom";
import Portfolioimg from "../asset/Frame 3733.png";
import img1 from "../asset/Frame 3619.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import Pra from "../asset/Rectangle 111.png";
import des from "../asset/Frame 3648.png";
import "./inbox.css";

export default function Inbox() {

    const Studentname = localStorage.getItem("Fullname");
    const ProfilePic = localStorage.getItem("prifilepicture");
    const navigate = useNavigate();
    useEffect(() => {
      if (!localStorage.getItem("token")) {
        navigate("/");
      }
    }, []);
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
            <div className="list-one">
                  <div className="toggle-chat">
                    <div className="row toggle-head">
                      <div className="col-6">
                        <button className="toggle-chat-btn">Chat</button>
                      </div>
                      <div className="col-6">
                        <button className="toggle-chat-btn-1">Groups</button>
                      </div>
                    </div>
                  </div>
                  <ul className="chat-list-1">
                    <li style={{listStyle:'none'}}>
                      <div className="chat-msgg">
                        <div className="chat-msgg-1">
                          <img src={img1} alt="" />
                          <div>
                            <h2>Name</h2> <h3>Message</h3>
                          </div>
                        </div>
                        <h4>12:30</h4>
                      </div>
                    </li>

                    <li style={{listStyle:'none'}}>
                      <div className="chat-msgg">
                        <div className="chat-msgg-1">
                          <img src={img1} alt="" />
                          <div>
                            <h2>Name</h2> <h3>Message</h3>
                          </div>
                        </div>
                        <h4>12:30</h4>
                      </div>
                    </li>

                    <li style={{listStyle:'none'}}>
                      <div className="chat-msgg">
                        <div className="chat-msgg-1">
                          <img src={img1} alt="" />
                          <div>
                            <h2>Name</h2> <h3>Message</h3>
                          </div>
                        </div>
                        <h4>12:30</h4>
                      </div>
                    </li>
                  </ul>
                  {/* <ul className="group-list-1">
                    <li>TWO</li>
                  </ul> */}
                </div>
            </div>
            <div className="col-lg-5 col-mb-12 col-sm-12">
            <div className="center-chat">
                  <div className="chat-header">
                    <img src={img1} alt="" />
                    <h2>Andrew Lahm</h2>
                  </div>{" "}
                  <div className="chat-main">
                    <div className="2nd-person message-1">
                      <img src={img1} alt="" />
                      <h3>
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                        Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum
                      </h3>
                    </div>
                    <div className="1st-person message-2">
                      <h3>
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                        Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum
                      </h3>
                      <img src={img1} alt="" />
                    </div>
                    <div className="2nd-person message-1">
                      <img src={img1} alt="" />
                      <h3>
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                        Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum
                      </h3>
                    </div>
                    <div className="1st-person message-2">
                      <h3>
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                        Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum
                      </h3>
                      <img src={img1} alt="" />
                    </div>
                    <div className="2nd-person message-1">
                      <img src={img1} alt="" />
                      <h3>
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                        Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum
                      </h3>
                    </div>
                    <div className="1st-person message-2">
                      <h3>
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                        Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum
                      </h3>
                      <img src={img1} alt="" />
                    </div>
                  </div>{" "}
                  <div className="chat-footer">
                    <div className="row">
                      <div className="col-1 ">
                        <button>Emoji</button>
                      </div>
                      <div className="col-1 ">
                        <button>+</button>
                      </div>
                      <div className="col-8 ">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Type your message.."
                        />
                      </div>
                      <div className="col-2 ">
                        <button>Send</button>
                      </div>
                    </div>
                  </div>
                </div>
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
  )
}
