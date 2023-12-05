import React,{useState,useEffect} from "react";
import "./explo.css";
import NAm from "../compnent/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import R from "../asset/Upload image.png";
import { Link,useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


export default function Explore() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate("/");
  //   }
  // }, []);
  const id = localStorage.getItem("info1");
  const Studentname = localStorage.getItem("Fullname");
  
  const [selectedImags, setSelectedImags] = useState(null);
const {username}=useParams;
  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files[0];
    setSelectedImags(files);
  };

  useEffect(() => {
    const stId = localStorage.getItem("info1");
    const art = "art";
    const token = localStorage.getItem("token")
 if(!selectedImags){
  console.log('no image select right now');
 }
 else{
    const uploadPortfolioPicture = async () => {
      try {
        const formData = new FormData();

    
        formData.append(
          'category', art
          
        );
        formData.append(
          
          'student',stId
        )
          formData.append('attachment', selectedImags);
      
        const response = await axios.post(
          "http://195.35.37.213:1337/api/v1/portfolio",
          formData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },});
          
        

        console.log(response.data);
        window.location.reload();
      } catch (error) {
        console.error("Error uploading or updating profile picture:", error);
      }
    };
  
    if (selectedImags) {
      uploadPortfolioPicture();
      
    }
    // window.location.reload();
  }
  
  }, [id, selectedImags]);
   

  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("art");
  const stI= localStorage.getItem("username");
  const token1=localStorage.getItem("token");
  const fetchImagesByCategory = () => {
    fetch(`http://195.35.37.213:1337/api/v1/portfolio/category/${category}/student/${stI}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token1}`,
       
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error.message);
      });
  };
   useEffect(() => {
     fetchImagesByCategory();
    }, [category]);
    const sername=localStorage.getItem("username");
    
 
    
  return (
    <div className="bg-exlpor">
      <NAm />
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
    
     
     
      <div className="gallery-wrapper">
        <div className="gallery">
        <img
            src={R}
            alt="Image"
            onClick={handleImageClick}
          />
      
      {images.map((image, index) => (
            <img
              key={index}
              src={'http://195.35.37.213:1337/'+images[index].image.fileName} // Assuming "url" is the property that holds the image URL
             
            />
           ))}
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
