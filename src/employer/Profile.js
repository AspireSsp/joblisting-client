import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Checkbox, FormControlLabel, Grid, Tab, TextField, Typography } from '@mui/material'
import React from 'react'

const Profile = () => {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <>
        <div className='container'>
            <TabContext value={value} sx={{display: "flex", alignItems:"center"}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", alignItems:"center" }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{width : "100%", display: "flex", alignItems:"center"}}>
                        <Tab label="Personal Details" value="1"sx={{width : "50%"}} />
                        <Tab label="Organization Details" value="2" sx={{width : "50%"}} />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <div>
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">First name</label>
                                <input type="email" class="form-control" id="first name"/>
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Last name</label>
                                <input type="password" class="form-control" id="last name"/>
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">E-mail</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="abc@gmail.com"/>
                            </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Mobile number</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="mobile no"/>
                            </div>
                        </form>
                    </div>
                </TabPanel>
                <TabPanel value="2">
                    <Typography>sanjay-2</Typography>
                  
                </TabPanel>
            </TabContext>
        </div>
    </>
  )
}

export default Profile