import React from "react";
import { Outlet, useNavigate } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmployer, logOutEmployer } from "../services/session";
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import userImg from '../assets/images/img1.jpg'
import UserContext from '../context/userContext';
// TODO remove, this demo shouldn't need to reset the theme.


const profileTabs = [
  {name: 'Help Center', value: 'help-center'}, {name: 'Billing', value: 'billing'},{name : 'Premium Plans', value: 'premium-plans'},{name : 'LogOut', value: 'logOut'}
]

export default function Nevbar() {

  const{ user , logOut, } = React.useContext(UserContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isLogin = async() => {
    const employee = await getEmployer();
    console.log("my emoplbj", employee);
    
  }
  useEffect(() => {
   console.log(user);
  }, []);

  const handleSelectMenu = async(page) => {
    console.log(page);
    if(page=='help-center'){
      navigate('/employer/helpcenter');

    }else if(page=='billing'){
      navigate('/employer/billing')

    }else if(page=='premium-plans'){
      navigate('/employer/premium-plans')

    }else if(page=='profile'){
      navigate('/employer/profile')

    }else if(page=='logOut'){
      logOutEmployer()
      await logOut();
      navigate('/');
    }
    handleCloseUserMenu();
  }

  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none"  } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, backgroundColor:'#fff' }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link to={"/"} style={{textDecoration : "none", fontFamily :"Dancing Script", fontSize: "40px"}} >
              BreakInterview.com
            </Link>
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              to={"/employer/managed-hiring"}
              sx={{ my: 1, mx: 1.5 ,}}
              style={{textDecoration: "none", padding : "15px", fontWeight: "800px"  }}
            >
              Managed Hiring
            </Link>
          </nav>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
              to={"/employer/dashboard"}
              style={{textDecoration: "none", padding : "15px", fontWeight: "800px"  }}
            >
              Dashboard
            </Link>
          </nav>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              to={"/jobs/form"}
              sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
              style={{textDecoration: "none", padding : "15px", fontWeight: "800px"  }}
            >
              Post Internship
            </Link>
            <Badge color="primary" badgeContent={99} sx={{ margin: "25px 20px 20px 20px" }} >
              <Link to={"/employer/chat"} style={{textDecoration: "none", padding : "5px", fontWeight: "800px"  }}>
                <TextsmsOutlinedIcon />
              </Link>
            </Badge>
          </nav>
          {
            user ?  <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://i.imgur.com/iZcpVnk.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '50px',}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem style={{display : 'flex', flexDirection : 'column', alignItems : 'flex-start'}} onClick={()=>{handleSelectMenu("profile")}}>
                <Typography style={{fontFamily : 'PT Serif', fontWeight : '700'}}>{user?.name}</Typography>
                <Typography style={{color : "#808080"}} >{user?.email}</Typography>
              </MenuItem>
              <hr/>
              {profileTabs.map((item) => (
                <MenuItem key={item.value} onClick={()=>{handleSelectMenu(item.value)}}>
                  <Typography textAlign="center">{item.name}</Typography>
                </MenuItem>
              ))}
            </Menu> 
          </Box> :
            <nav>
              <Button variant="outlined" sx={{ my: 1, mx: 1.5 }} >
                <Link to={"/employer/signup"} style={{textDecoration: "none", padding : "5px", fontWeight: "800px"  }}>
                  Sign Up
                </Link>
              </Button>  
              <Button  variant="outlined" sx={{ my: 1, mx: 1.5 }} >
                <Link to={"/student/login"} style={{textDecoration: "none", padding : "5px", fontWeight: "800px"  }}>
                Login
                </Link>
              </Button>
            </nav>
          }
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Outlet />
    </>
  );
}
