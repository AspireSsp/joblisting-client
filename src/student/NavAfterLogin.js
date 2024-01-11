import * as React from "react";
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
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";

// TODO remove, this demo shouldn't need to reset the theme.


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function NavAfterLogin() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
  return (
    <ThemeProvider theme={defaultTheme}>
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
              Internships
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
              Jobs
            </Link>
          </nav>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              to={"/internships"}
              sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
              style={{textDecoration: "none", padding : "15px", fontWeight: "800px"  }}
            >
              Courses
            </Link>
            <Badge color="primary" badgeContent={99} sx={{ margin: "25px 20px 20px 20px" }} >
              <Link to={"/chat"} style={{textDecoration: "none", padding : "5px", fontWeight: "800px"  }}>
                <TextsmsOutlinedIcon />
              </Link>
            </Badge>
          </nav>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Button variant="outlined" sx={{ my: 1, mx: 1.5 }} >
            <Link to={"/student/signup"} style={{textDecoration: "none", padding : "5px", fontWeight: "800px"  }}>
              Sign Up
            </Link>
          </Button>  
          <Button  variant="outlined" sx={{ my: 1, mx: 1.5 }} >
            <Link to={"/student/login"} style={{textDecoration: "none", padding : "5px", fontWeight: "800px"  }}>
             Login
            </Link>
          </Button> */}
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Outlet />
    </ThemeProvider>
  );
}
