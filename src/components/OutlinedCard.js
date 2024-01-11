import * as React from "react";

// import { useNavigate } from "react-router-dom";
// import {useHistory} from "react-router-dom"
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import { useHistory } from 'react-router-dom';

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { TrendingUp } from "@mui/icons-material";
import RoomIcon from '@mui/icons-material/Room';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ShopIcon from '@mui/icons-material/Shop';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import UpdateIcon from '@mui/icons-material/Update';
import HomeIcon from '@mui/icons-material/Home';
export default function OutlinedCard() {
  // const navigate = useNavigate();
  // const history = useHistory();
  //  history.push('/')

  const handleDetail = () => {
    // history.push(`/internships/detail`);
  };
  return (
    <React.Fragment>
      <div
        style={{
          // border: "1px solid #EEE",
          borderRadius: "10px",
          // display: "inline-flex",
          // flexDirection: "column",
          // margin: "10px",
          // padding: "10px",
          // backgroundColor: "#fff",
          width: "600px",
          
        }}
      >
        <CardContent
          sx={{
            width: "100%",
            display: "inline-flex",
            flexDirection: "column",
            margin: "10px",
            borderRadius: "10px",
            backgroundColor: "#fff",
          }}
        >
          <Button
            variant="outlined"
            className="mt-3 mb-2"
            size="small"
            sx={{ color: "black",fontWeight: "medium",height: '25px' ,width:"130px", fontweight: "bold",fontSize:11 ,p:"1px 2px 1px 2px" ,textTransform: 'capitalize'}} 
           
          >
            <TrendingUp color="primary" />{"  "}
            Actively hiring{" "}
          </Button>
          <Typography variant="h6" component="div" sx={{ fontWeight: '600',color: "#484848",display:'flex', alignItems: "flex-start" }} >
            Fundraising
          </Typography>
          <Typography sx={{ fontWeight: '500',color: "#8A8A8A", display:'flex', alignItems: "flex-start" }} color="text.secondary" gutterBottom>
            Odisha Development Management Programme (ODMP)
          </Typography>
          <Typography sx={{ mb: 1.5,color:"#333",fontWeight: '400',cursor: "pointer" ,fontSize:14, display:'flex', alignItems: "flex-start"}} color="text.secondary">
            <HomeIcon  sx={{height:"16px"}}/> Wrok From Home
          </Typography>
          <div style={{ display: "flex" }}>
            <Box sx={{display: "flex" }}>
                <Box sx={{display : "flex", flexDirection : "column", alignItems: "flex-start", minWidth: "100px",}}>
                    <Box>
                        <Typography
                            sx={{ fontSize: 12,
                            fontsize: "12px",
                            lineheight: "16px",
                            letterspacing: ".5px",
                            texttransform: "uppercase",
                            color:" #8A8A8A", }}
                            gutterBottom
                        >
                            <PlayCircleOutlineIcon  sx={{height:"16px", padding: 0, margin:0}}/>{" "}
                            START DATE
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{ fontSize: 14,
                            fontsize: "12px",
                            lineheight: "16px",
                            letterspacing: ".5px",
                            marginLeft : "7px",
                            color:" #333", }}
                        >
                        Immediately
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display : "flex", flexDirection : "column", alignItems: "flex-start", minWidth: "100px", }}>
                    <Box>
                        <Typography
                            sx={{ fontSize: 12,
                            fontsize: "12px",
                            lineheight: "16px",
                            letterspacing: ".5px",
                            texttransform: "uppercase",
                            color:" #8A8A8A", }}
                            gutterBottom
                        >
                            <AccessTimeIcon  sx={{height:"16px"}}/>{" "}
                            DURATION
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{ fontSize: 14,
                            fontsize: "12px",
                            lineheight: "16px",
                            letterspacing: ".5px",
                            marginLeft : "7px",
                            color:" #333", }}
                        >
                        4 Months
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display : "flex", flexDirection : "column", alignItems: "flex-start", minWidth: "100px", }}>
                    <Box>
                        <Typography
                            sx={{ fontSize: 12,
                            fontsize: "12px",
                            lineheight: "16px",
                            letterspacing: ".5px",
                            texttransform: "uppercase",
                            color:" #8A8A8A", }}
                            gutterBottom
                        >
                            <PlayCircleOutlineIcon  sx={{height:"16px", padding: 0, margin:0}}/>{" "}
                            <LocalAtmIcon  sx={{height:"16px"}}/>{" "}
                            STIPEND
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{ fontSize: 14,
                            fontsize: "12px",
                            lineheight: "16px",
                            letterspacing: ".5px",
                            marginLeft : "7px",
                            color:" #333", }}
                        >
                        ₹ 7,000-12,000 /month
                        </Typography>
                    </Box>
                </Box>
            </Box>
           
          </div>
          <Stack direction="row" sx={{ marginTop: "20px"}} spacing={2}>
            <Typography sx={{ bgcolor: '#EEE', color: "#666" ,height: '20px' , weight: "500",fontSize: 12,p:"1px 5px 1px 1px",borderRadius: "5px",}}>
             <UpdateIcon sx={{height:"16px"}}/>   1 week age
            </Typography>
            <Typography  sx={{  bgcolor: '#EEE', color: "#666",height: '20px' , weight: "500",fontSize: 12,p:"1px 5px 1px 5px",borderRadius: "5px",}}>
                Internship with job offer
            </Typography>
          </Stack>

          <Divider
            sx={{ margin: "0px", marginTop: "20px", marginBottom: "10px", height: "0px" }}
          />
          <CardActions sx={{ justifyContent: 'flex-end' ,height:"34px"}}>
          
            <Button variant="outlined"  >View More</Button>
          </CardActions>
        </CardContent>
      </div>
    </React.Fragment>
  );
}