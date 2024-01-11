import React, { useContext, useEffect, useState } from "react";
import { TextField, Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { get, patch } from "../services/http";
import UserContext from "../context/userContext";
const Preferences = () => {
  const allPreferences = [
    'Sales', 'Data Entry', 'Digital Marketing', 'Graphic Design', 'Marketing', 'Human Resource', 'General Management', 'Social Media Marketing', 'Finance', 'Telecalling', 'Market/Business Research', 'Content Writing', 'Accounting' , 'Project Management', 'Operations', 'Client Services', 'Programming', 'Teaching', 'DataScience', 'Video Marketing', 'Video Editing', 'Interior Design', 'UI/UX Design', 'Software Testing', 'Web Development', 'Mobile Development', 'Backend Development', 'Frontend Development'
  ]
  const {user} = useContext(UserContext)
  const [myPref, setMyPref] = useState([]);
  const [workMode, setWorkMode] = useState([]);
  console.log(workMode);
  const addPref = async(item)=>{
    if (!myPref.includes(item)) {
      setMyPref([...myPref, item]);
    }
  }

  const removePref = async(index)=>{
    console.log(index);
    var newArr = [...myPref];
    newArr.splice(index, 1);
    setMyPref([...newArr]);
  }

  const addWorkMode = async(mode)=>{
    if (!workMode.includes(mode)) {
      setWorkMode([...workMode, mode]);
    }
  }
  const removeWorkMode = async(mode)=>{
    console.log(mode);
    var newArr = [...workMode];
    const index = newArr.indexOf(mode);
    console.log(index);
    newArr.splice(index, 1);
    setWorkMode([...newArr]);
  }


  const savePref = async()=>{
    try {
      var mode = "";
      if(workMode.length==2){
        mode = "both";
      }else if(workMode.length==1){
        mode = workMode[0];
      }
      const body = { preferences : myPref, workMode : mode }
      if(user){
        const res = await patch(`student/${user?._id}`, body);
        console.log(res);

      }
    } catch (error) {
      console.log("some error", error);
    }
  }
  
  
  
  const getMyPref = async()=>{
    console.log("meee",user);
    if(user){
      const res = await get(`student/preferences/${user?._id}`);
      console.log(res);
      if(res?.statusCode == 200){
        setMyPref(res.data.preferences);
        setWorkMode(res.data.workMode);
      }else{
        console.log("some error--->")
      }
    }
  }
  useEffect(() => {
    getMyPref();
  }, []);

  return (
    <>
      <Box sx={{width: "100%", margin: "10px" }}>
        <Box sx={{maxWidth : "600px", margin: "auto"}}>
          <Box style={{ marginTop: "20px" }}>
            <h2>Your Preferences</h2>
          </Box>
          <Box sx={{ border: 1, borderRadius: "10px", borderColor: "#9e9e9e ", padding : "10px" }} style={{ marginTop: "25px" }}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", margin: "5px" }}>
                <Typography>Area(s) of interest</Typography>
              </Box>
              <Box sx={{ margin: "5px" }}>
                <TextField fullWidth label="areas you want to workin or learn" id="fullWidth" />
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', marginBottom: "10px", justifyContent : 'flex-start' }}>
                {
                  myPref.length>0 ?
                  myPref.map((item, index)=>(
                    <Button variant="contained" sx={{ margin: '5px', borderRadius: "20px" }} >{item} <ClearOutlinedIcon style={{ fontSize: "22px" }} onClick ={()=>{removePref(index)}} /> </Button>
                  )) : ""
                }

                {/* <Button variant="contained" sx={{ margin: '5px', borderRadius: "20px" }}>Software Development <ClearOutlinedIcon style={{ fontSize: "22px" }} /> </Button> */}
                {/* <Button variant="contained" sx={{ margin: '5px', borderRadius: "20px" }}>Nodejs Development <ClearOutlinedIcon style={{ fontSize: "22px" }} /> </Button>
                <Button variant="contained" sx={{ margin: '5px', borderRadius: "20px" }}>Android Development <ClearOutlinedIcon style={{ fontSize: "22px" }} /> </Button>
                <Button variant="contained" sx={{ margin: '5px', borderRadius: "20px" }}>Flutter Development <ClearOutlinedIcon style={{ fontSize: "22px" }} /> </Button> */}
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", margin: "5px" }}>
                <Typography>Also select the following to get more opportunities</Typography>
              </Box>
              <Box sx={{ marginBottom: "10px" }}>
                <Button variant="outlined" sx={{ margin: '5px', borderRadius: "20px" }}>Mobile App Development <AddIcon style={{ fontSize: "22px" }} /> </Button>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", margin: "5px" }}>
                <Typography>Popular career interests</Typography>
              </Box>
              <Box sx={{ marginBottom: "10px", display: 'flex', justifyContent: 'flex-start', flexWrap : 'wrap' }}>
                {
                  allPreferences.map((item, index) =>(
                    <Button variant="outlined" sx={{ margin: '5px', borderRadius: "20px" }} onClick={()=>{addPref(item)}}>{item}<AddIcon style={{ fontSize: "22px" }} /> </Button>
                  ))
                }

                {/* <Button variant="outlined" sx={{ margin: '5px', borderRadius: "20px" }}>Data Entry <AddIcon style={{ fontSize: "22px" }} /> </Button>
                <Button variant="outlined" sx={{ margin: '5px', borderRadius: "20px" }}>Digital marketing <AddIcon style={{ fontSize: "22px" }} /> </Button>
                <Button variant="outlined" sx={{ margin: '5px', borderRadius: "20px" }}>Graphic Design <AddIcon style={{ fontSize: "22px" }} /> </Button> */}
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", margin: "5px" }}>
                <Typography>Work mode</Typography>
              </Box>
              <Box sx={{ marginBottom: "10px" , display: 'flex', justifyContent : 'start'}}>
                {
                  workMode?.includes('office') ? 
                  <Button variant="contained" sx={{ margin: '5px', borderRadius: "20px" }}>In office <ClearOutlinedIcon style={{ fontSize: "22px" }} onClick={()=>{removeWorkMode("office")}} /> </Button> :
                  <Button variant="outlined" sx={{ margin: '5px', borderRadius: "20px" }}>In office <AddIcon style={{ fontSize: "22px" }} onClick={()=>{addWorkMode('office')}} /> </Button>
                }
                {
                  workMode.includes('wfh') ? 
                  <Button variant="contained" sx={{ margin: '5px', borderRadius: "20px" }}>Work Form Home <ClearOutlinedIcon style={{ fontSize: "22px" }} onClick={()=>{removeWorkMode('wfh')}} /> </Button> :
                  <Button variant="outlined" sx={{ margin: '5px', borderRadius: "20px" }}>Work From Home <AddIcon style={{ fontSize: "22px" }} onClick={()=>{addWorkMode('wfh')}}/> </Button>
                }
              </Box>

            </Box>
          </Box>
          <Box style={{width: '100%', margin : '5px', display: 'flex', justifyContent : 'end' }}>
            <Button variant="contained" onClick={savePref}>Save</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Preferences;