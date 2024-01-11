// import {Button} from '@mui/material'
// import {Button} from '@material-ui/core';
// import {Button} from '@mui/styled-engine-sc'
// import {Textfield} from '@mui/styled-engine-sc'
import {
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import * as React from "react";
// import Box from '@mui/material/Box';
import Slider from "@mui/material/Slider";
// import { Button } from 'bootstrap';

function InternshipDetailsRightSideBar() {
  const mark = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 20,
      label: "60%",
    },
    {
      value: 40,
      label: "70%",
    },
    {
      value: 60,
      label: "80%",
    },
    {
      value: 80,
      label: "90%",
    },
    {
      value: 100,
      label: "100%",
    },
  ];

  return (
    <Box
      width={330}
      bgcolor={"white"}
      marginLeft={1}
      padding={2}
      position={"sticky"}
      // border={"1px solid grey"}
      // borderRadius={"12px"}
      sx={{boxShadow: 3 ,borderRadius:"12px",height:"540px"}}
    >
      <Box>
        <Box>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "600", padding: "5px" }}
          >
            Filters
          </Typography>
          <Typography
            sx={{ fontWeight: "500", fontSize: "14px", color: "#333",marginBottom:"5px" }}
          >
            Applicants' locations
          </Typography>
          <TextField
            type="text"
            // label='Profile'
            color="primary"
            
            size="small"
            sx={{ marginBottom: "10px",width:" 1" }}
          />
        </Box>
        <Box>
          <Typography
            sx={{ fontWeight: "500", fontSize: "14px", color: "#333",marginBottom:"5px" }}
          >
            Skills
          </Typography>
          <TextField
            type="text"
            // label='Profile'
            color="primary"
            size="small"
            sx={{ marginBottom: "10px" ,width:" 1"}}
          />
        </Box>
        <Box>
          <Typography
            sx={{ fontWeight: "500", fontSize: "14px", color: "#333",marginBottom:"5px" }}
          >
            Academic background{" "}
          </Typography>
          <TextField
            type="text"
            // label='Profile'
            color="primary"
            size="small"
            sx={{ marginBottom: "10px" ,width:" 1"}}
          />
        </Box>
        <Box>
          <Typography
            sx={{ fontWeight: "500", fontSize: "14px", color: "#333",marginBottom:"5px" }}
          >
            Graduation year
          </Typography>
          <TextField
            type="text"
            // label='Profile'
            color="primary"
            size="small"
            sx={{ marginBottom: "10px",width:" 1" }}
          />
        </Box>
        <Box className="slider" sx={{ marginBottom: "10px" }}>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "14px",
              color: "#333",
              marginTop: "14px",

            }}
          >
            Minimum academic performance
          </Typography>
          <Slider marks={mark} step={20}  track="inverted"/>
        </Box>
        {/* <Box>
          <FormControl component="fieldset" variant="standard">
            <FormGroup>
              <FormControlLabel
                label="Good cover letters only"
                control={<Switch name="gilad" />}
              />
              <FormControlLabel
                label="Assignment not sent"
                control={<Switch name="jason" />}
              />
              <FormControlLabel
                label="Interview not scheduled"
                control={<Switch name="antoine" />}
              />
            </FormGroup>
          </FormControl>
        </Box> */}

        <Box sx={{ marginTop: "30px",}}>
          <Button variant="text" sx={{marginRight:"15px" ,marginLeft:"15px"}}>Clear all</Button>
          <Button variant="contained">Show results</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default InternshipDetailsRightSideBar;