import { Box, Rating } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

export const InterShipDetailsContent = () => {
  const [value, setValue] = React.useState(2);
  return (
    <>
      <Box width={690} marginBottom={2} sx={{boxShadow: 3 ,borderRadius:"12px"}} >
        <Box
          sx={{
            backgroundColor: "white",
            padding: "10px",
            // border: "1px solid grey",
            borderRadius: "12px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Checkbox defaultChecked />
            <Typography
              sx={{
                fontSize: "19px",
                fontWeight: "600",
                color: "#333",

                marginTop: "7px",
              }}
            >
              Krishna Gupta
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "500",
              color: "#666",
              marginLeft: "42px",
              marginBottom: "20px",
            }}
          >
            Navi Mumbai, Ahmedabad Open to relocate
          </Typography>

          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "400",
                texttransform: "uppercase",
                color: "#666",
                marginLeft: "42px",
              }}
            >
              EXPERIENCE
            </Typography>
            <Box>
              <Typography
                sx={{
                  marginLeft: "60px",
                  fontSize: "15px",
                  fontWeight: "600",

                  color: "#484848",
                }}
              >
                {" "}
                Digital Marketing at TTK Prestige{" "}
              </Typography>
              <Typography
                sx={{
                  marginLeft: "60px",
                  fontSize: "15px",
                  fontWeight: "400",

                  color: "#484848",
                }}
              >
                Apr'23 - May'231 mo (Internship)
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", marginTop: "20px" }}>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "400",
                texttransform: "uppercase",
                color: "#666",
                marginLeft: "42px",
              }}
            >
              EDUCATION
            </Typography>
            <Box>
              <Typography
                sx={{
                  marginLeft: "60px",
                  fontSize: "15px",
                  fontWeight: "600",

                  color: "#484848",
                }}
              >
                {" "}
                Bachelor of Computer Applications (BCA) (2022 - 2025){" "}
              </Typography>
              <Typography
                sx={{
                  marginLeft: "60px",
                  fontSize: "15px",
                  fontWeight: "400",

                  color: "#484848",
                }}
              >
                P C Training & Business College
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", marginTop: "20px" }}>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "400",
                texttransform: "uppercase",
                color: "#666",
                marginLeft: "42px",
              }}
            >
              TRAININGS
            </Typography>
            <Box>
              <Typography
                sx={{
                  marginLeft: "60px",
                  fontSize: "15px",
                  fontWeight: "600",

                  color: "#484848",
                }}
              >
                Japnese Language
              </Typography>
              <Typography
                sx={{
                  marginLeft: "60px",
                  fontSize: "15px",
                  fontWeight: "400",

                  color: "#484848",
                }}
              >
                Himawari Japanese Language Institution (Delhi)
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", marginTop: "20px" }}>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "400",
                texttransform: "uppercase",
                color: "#666",
                marginLeft: "42px",
              }}
            >
              SKILLS
            </Typography>
            <Box>
              <Typography
                sx={{
                  marginLeft: "85px",
                  fontSize: "15px",
                  fontWeight: "400",

                  color: "#484848",
                }}
              >
                <Rating
                  name="size-small"
                  max={3}
                  value={value}
                  readOnly
                  sx={{ fontSize: "19px",marginRight:"10px" }}
                />
                Effective Communication
                <Rating
                  name="size-small"
                  max={3}
                  value={value}
                  readOnly
                  sx={{ fontSize: "19px",marginRight:"10px",marginLeft:"10px" }}
                />
                MS-Office
              </Typography>
              <Typography
                sx={{
                  marginLeft: "85px",
                  marginTop:"10px",
                  fontSize: "15px",
                  fontWeight: "400",
                  
                  color: "#484848",
                }}
              >
                <Rating
                  name="size-small"
                  max={3}
                  value={"1"}
                  readOnly
                  sx={{ fontSize: "19px" ,marginRight:"10px"}}
                />
                MS-PowerPoin
              </Typography>
            </Box>
          </Box>

          
          <Box sx={{ display: "flex" ,marginTop:"20px" }}>
            <Typography sx={{ color: "#008BDC",marginLeft:"17px" ,fontSize:"15px",fontWeight:"500",cursor:"pointer" }}>
              View full resume
            </Typography>
            <Box sx={{marginLeft:"360px",marginBottom:"15px"}}>
            <Button variant="contained" sx={{ marginRight: "13px" ,color:"black",backgroundColor:"#EEE"}}>
              Skip
            </Button>
            <Button variant="contained" sx={{ }}>
              Invite
            </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
