import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Outlet, useNavigate } from 'react-router-dom';
import { ButtonGroup, List, ListItem } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import UserContext from '../context/userContext';
import { logOutUser } from '../services/session';

const pages = ['Internships', 'Courses', 'Events'];
const profileTabs = [
  {name: 'Home', value: 'home'}, {name: 'My Applications', value: 'myApplications'},{name : 'Edit Resume', value: 'editResume'},{name : 'Edit Preferences', value: 'editPreferences'},{name : 'Manage Account', value: 'managedAccount'},{name : 'LogOut', value: 'logOut'}
]

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const Ipad = useMediaQuery('(min-width:1000px)');
  const Mobile = useMediaQuery('(min-width:400px)');
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const{ user , logOut} = React.useContext(UserContext);
  // console.log("my user", user);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleSelectMenu = async(page) => {
    console.log(page);
    if(page=='home'){
      navigate('/');
    }else if(page=='myApplications'){
      navigate('/student/applications')
    }else if(page=='editResume'){
      navigate('/student/resume')
    }else if(page=='editPreferences'){
      navigate('/student/preference')
    }else if(page=='managedAccount'){
      navigate('/student/managedAccount')
    }else if(page=='logOut'){
      logOut()
      navigate('/');
    }else if(page=='Internships'){
      navigate('/internships')
    }else if(page=='Courses'){
      navigate('/courses')
    }else if(page=='Events'){
      navigate('/events')
    }
    handleCloseUserMenu();
  }
  const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }} >
      <Container maxWidth="xl" style={{position : "sticky", top : 0, background : "#ffffff", zIndex: 1, borderBottom : "1px solid #C0C0C0", boxShadow : '!important 0px 2px 4px rgba(0, 0, 0, 0.2)'}}>
        <Toolbar disableGutters >
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={()=>{handleSelectMenu(page)}}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>{handleSelectMenu(page)}}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {
              !user ? 
              <List style={{...flexContainer,margin : 0}}>
                {console.log(user)}
                <ListItem sx={{margin:0, padding:0}}><Button variant="outlined" onClick={()=>{navigate("/student/login")}}>Login</Button></ListItem>
                <ListItem sx={{margin:0, display : Mobile ? "block" : "none"}}><Button variant="contained" onClick={()=>{navigate("/student/signup")}}>Register</Button></ListItem>
              </List> :
              <Box>
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
                  <MenuItem style={{display : 'flex', flexDirection : 'column', alignItems : 'flex-start'}} >
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
              </Box>
            }
          </Box>
        </Toolbar>
      </Container>
      <Outlet />
    </AppBar>
  );
}

export default ResponsiveAppBar;



// import { AccountCircle, Search } from '@material-ui/icons';
// import { Box, Button, IconButton, List, ListItem, Paper, Stack, TextField, Typography } from '@mui/material';
// import React from 'react'
// import { Link, Outlet, useNavigate } from 'react-router-dom'
// import SearchIcon from '@mui/icons-material/Search';
// import InputBase from '@mui/material/InputBase';
// import { styled, alpha } from '@mui/material/styles';
// import InputAdornment from '@mui/material/InputAdornment';

// const flexContainer = {
//   display: 'flex',
//   flexDirection: 'row',
//   padding: 0,
// };
// const width = {
//   width : "50%"
// };
// const align = {
//   justifyContent: 'center',
//   alignItems: 'center',
// };
// const linkStyle = {
//   textDecoration: "none",
//   fontWaight : "900px",
//   fontSize : "20px",
// }
// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));
// const StudentNav = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <Stack spacing={2} style={{...flexContainer,}} height={"70px"} sx={{ borderBottom: 0.5 , borderColor:'gray'}}>
//         <Box style={{...flexContainer, ...width, ...align}}>
//           <Box>
//             <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
//               <Link to={"/"} style={{textDecoration : "none", fontFamily :"Dancing Script", fontSize: "40px"}} >
//                 BreakInterview.com
//               </Link>
//             </Typography>
//           </Box>
//           <Box marginLeft={"40px"}>
//             <List style={flexContainer}>
//               <ListItem><Link to={"/internships"} style={linkStyle} >Internships</Link></ListItem>
//               <ListItem><Link to={"/jobs"} style={linkStyle} >Job</Link></ListItem>
//               <ListItem><Link to={"/courses"} style={linkStyle}>Courses</Link></ListItem>
//             </List>
//           </Box>
//         </Box>
//         <Box style={{...flexContainer, ...width, justifyContent : "center", alignItems : "center"}} sx={{ marginTop : "0px !important", flexDirection: 'row-reverse'}}>
//           <Paper
//             component="form"
//             sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200, height: 36 }}
//           >
            
//             <InputBase
//               sx={{ ml: 1, flex: 1 }}
//               placeholder="Search"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//             <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
//               <SearchIcon />
//             </IconButton>
//           </Paper>
          // <List style={{...flexContainer, width:150, paddingLeft:20}}>
          //   <ListItem><Button variant="outlined" onClick={()=>{navigate("/student/login")}}>Login</Button></ListItem>
          //   <ListItem><Button variant="contained" onClick={()=>{navigate("/student/signup")}}>Register</Button></ListItem>
          // </List>
//         </Box>
//       </Stack>

//       <Outlet />
//     </div>
//   )
// }

// export default StudentNav