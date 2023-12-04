import React,{useEffect,useState} from "react";
import "./profil.css";
import NAV from "./navbar";
import BIN from "../asset/WELCOME BAR.png";
import PROF from "../asset/Frame 3661.png";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const id = localStorage.getItem("info1");
  // const id ='65488769dc6d7de681478b1e';
  // console.log(id);
  const[Studentname,setStudentname]=useState('');
  const [studentPhone,setphone]=useState('');
  const [studentMail,setstudentMail]=useState('');
  const [studentRole,setRole]=useState('');
  const [studentRegistration,setRegistration]=useState('');
  const [Gender,setGender]=useState('');
  const [website,setwebsite]=useState('');
  const[education,seteducation]=useState('');
  const[degree,setdegree]=useState('');
  const[profilpic,setpicture]=useState('');
  const [skills,setskill]=useState([]);
 const token=localStorage.getItem("token")
   useEffect(() => {
     fetch(`http://195.35.37.213:1337/api/v1/user/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
       
      },
    })
       .then((response) => {
         if (!response.ok) {
           throw new Error("Network response was not ok");
         }
         return response.json();
       })
       .then((data) => {
        setStudentname(data.firstName+data.lastName);
        localStorage.setItem("Fullname",data.firstName+data.lastName);
        setphone(data.phone);
        setstudentMail(data.email);
        setRole(data.role);
        setGender(data.gender);
        setRegistration(data.registrationNumber);
        setdegree(data.degree);
        setwebsite(data.website);
        seteducation(data.education);
        setskill(data.skills);
        
        setpicture(data.profilePicture.fileName)
        localStorage.setItem("prifilepicture",data.profilePicture.fileName)
       })
       .catch((error) => {
         console.error("Error fetching data:", error);
       });
     
   }, [id]);
  //  console.log(profilpic);
   const [profilePictureUrl, setProfilePictureUrl] = useState('');
   const [selectedImage, setSelectedImage] = useState(null);
   const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  useEffect(() => {
    const uploadProfilePicture = async () => {
      const token1=localStorage.getItem('token')
      try {
        const formData = new FormData();
        formData.append('attachment', selectedImage);

        const attachmentResponse = await axios.post('http://195.35.37.213:1337/api/v1/attachment', formData,{
          headers: {
            Authorization: `Bearer ${token1}`,
          },});
     const url='http://195.35.37.213:1337/'+attachmentResponse.data.fileName;
  
        const userProfilePictureUrl = url;
   
        setProfilePictureUrl(userProfilePictureUrl);
          
        const pic=attachmentResponse.data.id;
                await axios.put(`http://195.35.37.213:1337/api/v1/user/${id}`,{       
         'profilePicture': pic,
        },
         {

         headers: {
            Authorization: `Bearer ${token1}`,
            // Add other headers as needed
          },
        });
       
        window.location.reload();
      } catch (error) {
        console.error('Error uploading or updating profile picture:', error);
      }
    };

    if (selectedImage) {
      uploadProfilePicture();
    }
   
  }, [id, selectedImage]);

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="background-image5">
      <NAV />
      <br></br>
      <div className="wlcom">
        <img src={BIN} className="bin"></img>
       
        <img
        className="prof"
          src={'http://195.35.37.213:1337/'+profilpic}
          alt="User Profile"
        />
    
        <div className="e">
          <h6 style={{fontSize:'20px'}}>{Studentname}</h6>
          <div className="probtn">
            {/* <button className="profilBtn" onClick={handleImageClick}>Edit Profile</button> */}
            <img
            src={PROF}
            alt="Image"
            onClick={handleImageClick}
          />
          </div>
        </div>
        <br></br>
        <br></br>
        <div style={{display:'flex'}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <h6><Link style={{textDecoration:'none',color:'#283C55',fontSize:'20px'}} to="/profile" className="profile-hover">About Me</Link></h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <h6><Link style={{textDecoration:'none',color:'#283C55',fontSize:'20px'}} to="/mycourses"className="profile-hover">My Courses</Link></h6>
        </div>
        <div>
          <hr></hr>
          
          </div>
         
      <div className="container tray">
        <div className="details-wrapper">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h2 className="details-title">Personal Information</h2>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <h2 className="details-1">Full Name</h2>
                  <h2 className="details-2">{Studentname}</h2>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <h2 className="details-1">Registration Number</h2>
                  <h2 className="details-2">{studentRegistration}</h2>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <h2 className="details-1">Gender</h2>
                  <h2 className="details-2">{Gender}</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h2 className="details-title">Contact Information</h2>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <h2 className="details-1">Phone Number</h2>
                  <h2 className="details-2">{studentPhone}</h2>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <h2 className="details-1">Email Address</h2>
                  <h2 className="details-2">{studentMail}</h2>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <h2 className="details-1">Website</h2>
                  <h2 className="details-2">{website}</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h2 className="details-title">Educational Information</h2>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <h2 className="details-1">Education</h2>
                  <h2 className="details-2">{education}</h2>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <h2 className="details-1">Degree (if any)</h2>
                  <h2 className="details-2">{degree}</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h2 className="details-title">Professional Information</h2>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <h2 className="details-1">Role</h2>
                  <h2 className="details-2">{studentRole}</h2>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12">
                  <h2 className="details-1">Skills</h2>
                  <div className="details-skills">
                  
                    <h2 className="details-3">{skills}</h2>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <input
        type="file"
        id="fileInput"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}
