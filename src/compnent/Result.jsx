import React,{useEffect} from "react";
import "./resul.css";
import NAv from "../compnent/navbar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { faBookBookmark, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link,useNavigate } from "react-router-dom";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";


ChartJS.register(ArcElement, Tooltip, Legend);
export default function Result() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  const data = {
    datasets: [
      {
        data: [8, 6],
        backgroundColor: ["red", "#283C55"],
        borderColor: ["red", "#283C55"],
        text: "acsd",
      },
    ],
  };
  const options = {};

  return (
    <div className="bg_image2">
      <NAv />
      <br></br>
      <div className="inner-div">
        <br></br>
        <div className="back-button-div" style={{ margin: "20px" }}>
          <a href="" className="back-button">
            <FontAwesomeIcon
              className="fa"
              icon={faCaretLeft}
              style={{ color: "#34465c96" }}
            />{" "}
          </a>
          <Link className="back-link" to="/coursedetail">
            Back to Assigned Course
          </Link>
        </div>
        <br></br>
        <div className="grade">
          <h2
            className="assin"
            style={{ marginTop: "25px", marginLeft: "10px" }}
          >
            Course Title-Assignement(Week-6)
          </h2>
          <div className="per">
            <div style={{ display: "flex" }}>
              <div style={{ width: "30%", height: "30%" }}>
                <Doughnut data={data} options={options}></Doughnut>
              </div>
              <p
                style={{
                  marginLeft: "10px",
                  fontSize: "15px",
                  marginTop: "30px",
                }}
              >
                Assignment Progress
              </p>
              <br></br>
            </div>
            <p className="num">5/10 Assignment</p>
          </div>
        </div>
        <div className="boo">
          <p className="pic" style={{ marginLeft: "20px", color: "#283C5566" }}>
            {" "}
            <FontAwesomeIcon
              className="fa"
              icon={faBookBookmark}
              style={{ color: "#283C5566" }}
            />{" "}
            Category - &nbsp;Tatoo Course
          </p>

          <p style={{ marginLeft: "20px", color: "#283C5566" }}>
            {" "}
            <FontAwesomeIcon
              className="fa"
              icon={faUser}
              style={{ color: "#283C5566" }}
            />{" "}
            Instructor - &nbsp; Master Instructor
          </p>

          <p style={{ marginLeft: "20px", color: "#283C5566" }}>
            {" "}
            4 Reviews -
            <FontAwesomeIcon
              className="fa"
              icon={faStar}
              style={{ color: "gold" }}
            />
            <FontAwesomeIcon
              className="fa"
              icon={faStar}
              style={{ color: "gold" }}
            />
            <FontAwesomeIcon
              className="fa"
              icon={faStar}
              style={{ color: "gold" }}
            />
            <FontAwesomeIcon
              className="fa"
              icon={faStar}
              style={{ color: "gold" }}
            />
          </p>
        </div>
        <hr></hr>

        <div className="upload">
          <div className="upload_div">
            <svg
              style={{ marginTop: "20px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
            >
              <path
                d="M54 39.9896L30 40.0312"
                stroke="#283C55"
                stroke-width="4.8"
                stroke-linecap="round"
              />
              <path
                d="M12 12.8C12 10.149 14.149 8 16.8 8H58.2622C59.3851 8 60.4724 8.39368 61.335 9.11254L72 18L82.2729 26.5607C83.3672 27.4727 84 28.8237 84 30.2482V83.2C84 85.851 81.851 88 79.2 88H16.8C14.149 88 12 85.851 12 83.2V12.8Z"
                fill="white"
              />
              <path
                d="M66 72H30"
                stroke="#283C55"
                stroke-width="4.8"
                stroke-linecap="round"
              />
              <path
                d="M66 56H30"
                stroke="#283C55"
                stroke-width="4.8"
                stroke-linecap="round"
              />
            </svg>
            <p style={{ textAlign: "center", color: "white" }} className="pnh">
              img.png
            </p>
          </div>
          <br></br>
          <br></br>
          <div>
            <button class="button1">Uploaded</button>
            <br></br>
            <br></br>
          </div>
          <br></br>
          <input type="text" className="review" placeholder="Review Here.." />
          <br></br>
          <p style={{ color: "rgba(255, 255, 255, 0.70)" }}>Grading Tokens</p>
          <div className="star">
            <FontAwesomeIcon
              className="fa"
              icon={faStar}
              style={{ color: "gold" }}
            />
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              className="fa"
              icon={faStar}
              style={{ color: "gold" }}
            />
            &nbsp;&nbsp;
            <FontAwesomeIcon
              className="fa"
              icon={faStar}
              style={{ color: "gold" }}
            />
            &nbsp;&nbsp;
            <FontAwesomeIcon
              className="fa"
              icon={faStar}
              style={{ color: "gold" }}
            />
            &nbsp;&nbsp;
            <FontAwesomeIcon
              className="fa"
              icon={faStar}
              style={{ color: "gold" }}
            />
            &nbsp;&nbsp;
            <FontAwesomeIcon
              className="fa"
              icon={faStar}
              style={{ color: "gold" }}
            />
            &nbsp;&nbsp;
          </div>
        </div>
        <br></br>
      </div>

      <br></br>
    </div>
  );
}
