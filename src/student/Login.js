import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Alert, Box, Button, FormGroup, Snackbar, Tab, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { post } from '../services/http';
import { setEmployer, setToken, setUser } from '../services/session';
import UserContext from '../context/userContext';

const Login = () => {
    const [value, setValue] = React.useState('1');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const {user, updateUser} =  useContext(UserContext);
    console.log("ssp",user)
    const isLogedIn = async()=>{
        if(user!=null){
            navigate('/');
        }
    }
    useEffect(()=>{
        isLogedIn();
    },[])
    const login = async () => {
        try {
            const body = {email, password};
            // console.log(body);
            const res = await post("student/login", body);
            console.log("my res",res);
            if(res.statusCode === 200) {
                await setToken(res.data.token);
                await setUser(res.data.user);
                setOpen(true);
                await updateUser();
                navigate("/");
            }else{
                console.log("else res", res);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const loginEmp = async () => {
        try {
            const body = {email, password};
            // console.log(body);
            const res = await post("employer/login", body);
            console.log("my res",res);
            if(res.statusCode === 200) {
                await setToken(res.data.token);
                await setEmployer(res.data.user);
                await updateUser();
                navigate("/employer");
            }else{
                console.log("else res", res);
            }
        } catch (error) {
            console.log(error);
        }
    }

 
   

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };    

  return (
    <div style={{display: "flex", justifyContent:"center", alignItems:"center", background: "#f8f8f8", paddingTop : "20px", paddingBottom : "20px"}} >
        <Box sx={{width: "350px", padding : "10px", borderRadius : "10px", background: "#ffffff" }}>
            <Box>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{width : "100%"}}>
                        <Tab label="Student" value="1"sx={{width : "50%"}} />
                        <Tab label="Employer / T&P" value="2" sx={{width : "50%"}} />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Box>
                        <Button variant="outlined" color="primary" startIcon={<img src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' style={{height : "20px", width: "20px"}} />}>
                            Login with Google
                        </Button>
                    </Box>
                    <Box style={{display : "flex", justifyContent : "center", alignItems: "center"}}>
                        <hr style={{width : "40%"}}/>
                        <Typography sx={{width : "20%"}}>Or</Typography>
                        <hr style={{width : "40%"}}/>
                    </Box>
                    <FormGroup sx={{alignItems :"flex-start", marginBottom : "10px"}}>
                        <Typography>Email</Typography>
                        <TextField size='small' fullWidth label="email@example.com" id="fullWidth" onChange={(e)=>{setEmail(e.target.value)}} />
                    </FormGroup>
                    <FormGroup sx={{alignItems :"flex-start", marginBottom : "7px"}}>
                        <Typography>Password</Typography>
                        <TextField size='small' fullWidth label="must be atleast 6 charactors" id="fullWidth" onChange={(e)=>{setPassword(e.target.value)}}/>
                    </FormGroup>
                    <FormGroup sx={{alignItems: "flex-end", marginBottom : "7px"}}>
                        <Link to={"/forget-password"} style={{textDecoration : "none"}}>Forgot Password?</Link>
                    </FormGroup>
                    <FormGroup sx={{ marginBottom : "7px"}} >
                        <Button variant="contained" disableElevation onClick={login}>
                            Login
                        </Button>
                    </FormGroup>
                    <FormGroup>
                        <Typography>New to Internshala? Register (<Link to={'/student/signup'} style={{textDecoration : "none"}}>Student</Link> / <Link to={'/employer/signup'} style={{textDecoration : "none"}}>Company</Link>)</Typography>
                    </FormGroup>
                </TabPanel>
                <TabPanel value="2">
                    <Box>
                        <FormGroup sx={{alignItems :"flex-start", marginBottom : "10px"}}>
                            <Typography>Email</Typography>
                            <TextField size='small' fullWidth label="email@example.com" id="fullWidth" onChange={(e)=>{setEmail(e.target.value)}} />
                        </FormGroup>
                        <FormGroup sx={{alignItems :"flex-start", marginBottom : "7px"}}>
                            <Typography>Password</Typography>
                            <TextField size='small' fullWidth label="must be atleast 6 charactors" id="fullWidth" onChange={(e)=>{setPassword(e.target.value)}} />
                        </FormGroup>
                        <FormGroup sx={{alignItems: "flex-end", marginBottom : "7px"}}>
                            <Link to={"/forget-password"} style={{textDecoration : "none"}}>Forgot Password?</Link>
                        </FormGroup>
                        <FormGroup sx={{ marginBottom : "7px"}}>
                            <Button variant="contained" disableElevation onClick={loginEmp}>
                                Login
                            </Button>
                        </FormGroup>
                        <FormGroup>
                            <Typography>New to Internshala? Register (<Link to={'/student/signup'} style={{textDecoration : "none"}}>Student</Link> / <Link to={'/employer/signup'} style={{textDecoration : "none"}}>Company</Link>)</Typography>
                        </FormGroup>
                    </Box>
                </TabPanel>
            </TabContext>
            </Box>

        </Box>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            This is a success message!
            </Alert>
        </Snackbar>
    </div>
  )
}

export default Login