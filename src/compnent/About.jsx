import React,{useEffect,useState} from "react";
import "./about.css";
import D from "../asset/Upload image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link,useNavigate } from "react-router-dom";
import NAV from "../compnent/navbar";

export default function About() {
  const Studentname=localStorage.getItem("Fullname");
  const id= localStorage.getItem("info1");
  console.log(id)
  const[Name,setname]=useState('');
  const[age,setAge]=useState('');
  const[experience,setExperirence]=useState('');
  const[certification,setCertification]=useState('');
  const[aabout,setaabout]=useState('');
    useEffect(() => {
      const token1=localStorage.getItem("token")
    fetch(`http://195.35.37.213:1337/api/v1/user/${id}`, {
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
       setname(data.firstName);
       setAge(data.age);
       setExperirence(data.experience);
       setCertification(data.certification);
       setaabout(data.about);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    
  }, [id]);
  const ProfilePic=localStorage.getItem("prifilepicture");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  const sername=localStorage.getItem("username");
  return (
    <>
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
          <Link className="nav-explor" to="/location">
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
        <div className="about-self">
          <div class="grid-thirds">
            <div class="container-1">
              <img src={'http://195.35.37.213:1337/'+ProfilePic} />
            </div>
            <div class="container-2">
              <div className="self-text">
              <p>Name : {Name}</p>
              <p>Age: {age} years old</p>
              <p>Experience: {experience}</p>
              <p>Certification: {certification}</p>
              </div>
              <div className="self-des" >
                <p>
                 {aabout}
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    </>
  );
}
