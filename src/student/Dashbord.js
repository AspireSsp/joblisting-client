import React from "react";
import "../App.css";

// import iphone from "./image/iphone.jpg";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";



import HomeIcon from '@mui/icons-material/Home';
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup"; 
import { TrendingUp } from "@mui/icons-material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShopIcon from '@mui/icons-material/Shop';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const Dashbord = () => {
  return (
    <>
      <h2 className="text-center fw-bold">Hi Sanjay! ✋</h2>
      <h4 className="text-center fw-normal">
        Let’s help you land your dream career
      </h4>
      <br /> <br />
      <h3 className="text-center fw-bold mb-5">Trending on Internshala 🔥</h3>
      <Container>
        <div className=" d-flex justify-content-between">
          <div className="first me-4">
            <img
              src={img1}
              className=" rounded-3"
              alt="logo"
              style={{ width: 380 }}
            />
          </div>
          <div className="second me-4">
            <img
              src={img2}
              className=" rounded-3"
              alt="logo"
              style={{ width: 380 }}
            />
          </div>
          <div className="third me-4">
            <img
              src={img3}
              className=" rounded-3"
              alt="logo"
              style={{ width: 380 }}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-5 job-container">
        <h2 className="text-center fw-bold mt-5">Jobs</h2>
        <h5 className="text-center fw-normal mt-2">
          as per your <span className="text-primary">preferences</span>
        </h5>
        <div className="card-container d-flex justify-content-between mb-5 mt-5">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body me-2">
            <Button variant="outlined" className='mb-2' size="small" ><TrendingUp/> Actively hiring </Button>

              <h5 class="card-title">Full Stack Developer</h5>
              <h6 class="card-subtitle mb-2 text-muted">super assistant</h6>
              <h6><HomeIcon fontSize="small"/> work from home</h6>
              <h6>₹ 4.2 - 6 LPA</h6>
              <a href="#" class="card-link">
                view details
              </a>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
            <Button variant="outlined" className='mb-2' size="small" ><TrendingUp/> Actively hiring </Button>
              <h5 class="card-title">Junior PHP Developer</h5>
              <h6 class="card-subtitle mb-2 text-muted">assistant</h6>
              <p class="card-text">
              <HomeIcon fontSize="small"/> Work from Home <br />
                ₹ 4.2 - 6 LPA
              </p>
              <a href="#" class="card-link">
                view details
              </a>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
            <Button variant="outlined" className='mb-2' size="small" ><TrendingUp/> Actively hiring </Button>
              <h5 class="card-title">Full Stack Developer</h5>
              <h6 class="card-subtitle mb-2 text-muted">super assistant</h6>
              <h6><HomeIcon fontSize="small"/> work from home</h6>
              <h6>₹ 4.2 - 6 LPA</h6>
              <a href="#" class="card-link">
                view details
              </a>
            </div>
          </div>

          <div class="card" style={{ width: "15rem" }}>
            <div class="card-body">
            <Button variant="outlined" className='mb-2' size="small" ><TrendingUp/> Actively hiring </Button>
              <h5 class="card-title">Junior PHP Developer</h5>
              <h6 class="card-subtitle mb-2 text-muted">assistant</h6>
              <p class="card-text">
              <HomeIcon fontSize="small"/> Work from Home <br />
              ₹ 4.2 - 6 LPA
              </p>
              <a href="#" class="card-link">
                view details
              </a>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <h2 className="text-center fw-bold mt-5">
          Certification courses for you
        </h2>
        <div className="card-container  d-flex justify-content-between mb-5 mt-5">
          <div class="card" style={{ width: "17rem" }}>
            <img src={img1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>Data Science Course</h5>
              <h6>⭐4.2 | 1232</h6>
              <a href="#" class="card-link">
                view details
              </a>
            </div>
          </div>
          <div class="card" style={{ width: "17rem" }}>
            <img src={img2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>Data Science Course</h5>
              <h6>⭐4.2 | 1232</h6>
              <a href="#" class="card-link">
                view details
              </a>
            </div>
          </div>
          <div class="card" style={{ width: "17rem" }}>
            <img src={img3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>Data Science Course</h5>
              <h6>⭐4.2 | 1232</h6>
              <a href="#" class="card-link">
                view details
              </a>
            </div>
          </div>
          <div class="card" style={{ width: "17rem" }}>
            <img src={img1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>Data Science Course</h5>
              <h6>⭐4.2 | 1232</h6>
              <a href="#" class="card-link">
                view details
              </a>
            </div>
          </div>
        </div>
      </Container>
      <Container className="mt-5 job-container1">
        <h2 className="text-center fw-bold mt-5">
          Placement guarantee courses
        </h2>

        <div className="card-container d-flex justify-content-between mb-5 mt-5">
          <div class="card" style={{ width: "17rem" }}>
            <img src={img1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Full Stack Development Course </h5>
              <span className="bg-warning text-dark">couses with guranteed internship</span>
              <br />
              <span><AccessTimeIcon fontSize="small"/> 6 months courses</span>
              <br />
              <span><CurrencyRupeeIcon fontSize="small"/>   height stipend offered ₹1.1 </span>
              <br />
              <span><ShopIcon fontSize="small"/> 108 lac+ job / internship </span>
              <br />
            </div>

            <div class="card-body">
              <a href="#" class="card-link">
                Know more
              </a>
            </div>
          </div>
          <div class="card" style={{ width: "17rem" }}>
            <img src={img2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Full Stack Development Course </h5>
              <span className="bg-warning text-dark">couses with guranteed internship</span>
              <br />
              <span><AccessTimeIcon fontSize="small"/> 6 months courses</span>
              <br />
              <span><CurrencyRupeeIcon fontSize="small"/>   height stipend offered ₹1.1 </span>
              <br />
              <span><ShopIcon fontSize="small"/> 108 lac+ job / internship </span>
              <br />
            </div>

            <div class="card-body">
              <a href="#" class="card-link">
                Know more
              </a>
            </div>
          </div>
          <div class="card" style={{ width: "17rem" }}>
            <img src={img2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Full Stack Development Course </h5>
              <span className="bg-warning text-dark">couses with guranteed internship</span>
              <br />
              <span><AccessTimeIcon fontSize="small"/> 6 months courses</span>
              <br />
              <span><CurrencyRupeeIcon fontSize="small"/>   height stipend offered ₹1.1 </span>
              <br />
              <span><ShopIcon fontSize="small"/> 108 lac+ job / internship </span>
              <br />
            </div>

            <div class="card-body">
              <a href="#" class="card-link">
                Know more
              </a>
            </div>
          </div>
          <div class="card" style={{ width: "17rem" }}>
            <img src={img3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Full Stack Development Course </h5>
              <span className="bg-warning text-dark">couses with guranteed internship</span>
              <br />
              <span><AccessTimeIcon fontSize="small"/> 6 months courses</span>
              <br />
              <span><CurrencyRupeeIcon fontSize="small"/>  height stipend offered ₹1.1 </span>
              <br />
              <span><ShopIcon fontSize="small"/> 108 lac+ job / internship </span>
              <br />
            </div>

            <div class="card-body">
              <a href="#" class="card-link">
                Know more
              </a>
            </div>
          </div>
        </div>
      </Container>
      <Container className="mt-5">
        <h2 className="text-center fw-bold mt-5">Connect</h2>
        <h5 className="text-center fw-normal mt-2">
          Connect with peers to get career advice in
        </h5>
        <div className="btn d-flex justify-content-center ">
          <Button variant="contained" sx={{ mr: 2, borderRadius: "16px" }}>
            Web development
          </Button>
          {/* <Button variant="contained" sx={{ mr: 2, borderRadius: '16px'  }}>Contained</Button> */}
          <Button variant="outlined" sx={{ mr: 2, borderRadius: "16px" }}>
            Programming
          </Button>
          <Button variant="outlined" sx={{ mr: 2, borderRadius: "16px" }}>
            software testing
          </Button>
          {/* <Button variant="contained" sx={{ mr: 2, borderRadius: '16px'  }}>Contained</Button> */}
        </div>

        <div className="card-container  d-flex justify-content-between mb-5 mt-5">
          <div class="card me-2">
            <h5 class="card-header">Sheetal Bhattamisra </h5>
            <div class="card-body">
              {/* <h5 class="card-title">Special title treatment</h5> */}
              <p class="card-text">
                Graduate | Bachelor of Technology (B.Tech), Electronics and
                Communication
              </p>
              <ButtonGroup
              className="mb-1"
                variant="outlined"
                aria-label="outlined button group"
              >
                <Button>Html</Button>
                <Button>Css</Button>
                <Button>JavaScript</Button>
              </ButtonGroup>
              <a href="#" class="btn btn-primary mt-1">
                messeage
              </a>
              
            </div>
          </div>
          <div class="card me-2">
            <h5 class="card-header">Sheetal Bhattamisra </h5>
            <div class="card-body">
              {/* <h5 class="card-title">Special title treatment</h5> */}
              <p class="card-text">
                Graduate | Bachelor of Technology (B.Tech), Electronics and
                Communication
              </p>
              <ButtonGroup
              className="mb-1"
                variant="outlined"
                aria-label="outlined button group"
              >
                <Button>Html</Button>
                <Button>Css</Button>
                <Button>JavaScript</Button>
              </ButtonGroup>
              <a href="#" class="btn btn-primary mt-1">
                messeage
              </a>
            </div>
          </div>
          <div class="card me-2">
            <h5 class="card-header">Sheetal Bhattamisra </h5>
            <div class="card-body">
              {/* <h5 class="card-title">Special title treatment</h5> */}
              <p class="card-text">
                Graduate | Bachelor of Technology (B.Tech), Electronics and
                Communication
              </p>
              <ButtonGroup
              className="mb-1"
                variant="outlined"
                aria-label="outlined button group"
              >
                <Button>Html</Button>
                <Button>Css</Button>
                <Button>JavaScript</Button>
              </ButtonGroup>
              <a href="#" class="btn btn-primary mt-1">
                messeage
              </a>
            </div>
          </div>
          <div class="card me-2">
            <h5 class="card-header">Sheetal Bhattamisra </h5>
            <div class="card-body">
              {/* <h5 class="card-title">Special title treatment</h5> */}
              <p class="card-text">
                Graduate | Bachelor of Technology (B.Tech), Electronics and
                Communication
              </p>
              <ButtonGroup
                className="mb-1"
                variant="outlined"
                aria-label="outlined button group"
              >
                <Button>Html</Button>
                <Button>Css</Button>
                <Button>JavaScript</Button>
              </ButtonGroup> 
              <a href="#" class="btn btn-primary mt-1">
                messeage
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashbord;