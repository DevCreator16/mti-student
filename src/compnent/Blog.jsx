import React,{useEffect,useState} from "react";
import "./blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import D from "../asset/Rectangle 124 (1).png";
import { Link,useNavigate } from "react-router-dom";
import NAV from "../compnent/navbar";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from "axios";

export default function Blog() {
  const Studentname=localStorage.getItem("Fullname");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); 

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {

    setImage(e.target.files[0]);
  };
  const Id = localStorage.getItem("info1");
  const token =localStorage.getItem("token");
  const handleFormSubmit =  async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('student', Id);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('attachment', image);
    // console.log(image,title,description)

    try {
      const response = await axios.post(
        "http://195.35.37.213:1337/api/v1/blog",
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
  

  const [images, setImages] = useState([]);
  const stI= localStorage.getItem("info1");
  const fetchImagesByCategory = () => {
    const token1=localStorage.getItem("token")
    fetch(`http://195.35.37.213:1337/api/v1/blog/student/${stI}`, {
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
   }, [stI]);
   const sername=localStorage.getItem("username")
  return (
    <div>
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
        <div className="blog-edit">
        <Popup trigger={<button className="edit-Blog"> Add new Blog</button>} position="right center">
    <div className="popup-blog">
      <form onSubmit={handleFormSubmit}>
        <h5>Enter Title</h5>
        <input type="text" placeholder="Enter Title" className="title-blog" value={title}
        onChange={handleTitleChange}/><br/>
        <h5 style={{marginTop:'10px'}}>Enter Description</h5>
        <textarea rows="5" cols="30" placeholder="Enter Description Here..." className="des-blog" value={description}
        onChange={handleDescriptionChange}
/>
        <h5 style={{marginTop:'10px'}}>Upload Image</h5>
        <input type="file" style={{display:'block'}}  onChange={handleImageChange}/>
        <button type="submit" className="edit-Blog" style={{marginTop:'10px',width:'50%'}} >Send</button>
      </form>
    </div>
  </Popup>
  </div>
  <br/>
        <div style={{ margin: "20px" }}>
        <div className="container bak">
          <div className="row">
            {/* Map over the blog items and render dynamically */}
            {images.map((blogItem) => (
              <div key={blogItem.id} className="col-6 mb-12 sm-12">
                <img src={'http://195.35.37.213:1337/'+blogItem.blogCover.fileName}  alt={`Blog ${blogItem.id}`} className="blogCover" />
                <h1 className="blog-newTilte">{blogItem.title}</h1>
                <p className="blog-desnew">{blogItem.description}</p>
              </div>
            ))}
          </div>
          </div>

          
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
