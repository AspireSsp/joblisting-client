import * as React from "react"; 
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import Citys from "../components/Citys";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Divider from '@mui/material/Divider';
import SimpleSlider from "../components/Slider";



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();


export default function Pricing() {
  const navigate = useNavigate();

const handleInternship = () => {
  navigate(`/internships`);
};
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      
      {/* Hero unit */}

      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Paper
          component="form"
          sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            type="button"
            sx={{  backgroundColor: "#ff9800", borderRadius:'10%' }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Container>
      <SimpleSlider/>
      {/* End hero unit */}
      <Typography variant="h4" sx={{margin:"5px", marginLeft:'30px', marginBottom:'22px'}}>
      Jobs
      </Typography>
      <div style={{display:'flex', justifyContent:'space-between'}}>
      <Typography gutterBottom sx={{margin:"5px", marginLeft:'30px', marginBottom:'8px'}}>
      Apply to 10,000+ internships for free
     </Typography> 
    <Typography gutterBottom sx={{margin:"5px", marginRight:'70px', marginBottom:'8px' , display:'flex', color:'#ff9800'}} onClick={() => handleInternship()}>
     View All Jobs <ArrowRightAltIcon/>
     </Typography>
     </div>
     <Typography variant="h6" gutterBottom sx={{margin:"5px",marginTop:'35px', marginLeft:'30px', marginBottom:'25px'}}>
     Popular cities
      </Typography>
     <Citys/> 
     <Typography variant="h6" gutterBottom sx={{margin:"5px",marginTop:'35px', marginLeft:'30px', marginBottom:'25px'}}>
     Popular categories
      </Typography>  
     <Citys/>   
     <Divider variant="middle" sx={{margin:"5px", marginLeft:'30px', marginTop:'20px', marginBottom:'20px'}}/>
     <Typography variant="h4" sx={{margin:"5px", marginLeft:'30px', marginBottom:'22px'}}>
      Internships
      </Typography>
      <div style={{display:'flex', justifyContent:'space-between'}}>
      <Typography gutterBottom sx={{margin:"5px", marginLeft:'30px', marginBottom:'8px'}}>
     Premium Internship on your fingertips
     </Typography> 
    <Typography gutterBottom sx={{margin:"5px", marginRight:'70px', marginBottom:'8px' , display:'flex', color:'#ff9800'}} onClick={() => handleInternship()}>
     View All Internship <ArrowRightAltIcon/>
     </Typography>
     </div>
     <Typography variant="h6" gutterBottom sx={{margin:"5px",marginTop:'35px', marginLeft:'30px', marginBottom:'25px'}}>
     Popular cities
      </Typography>
     <Citys/> 
     <Divider variant="middle" sx={{margin:"5px", marginLeft:'30px', marginTop:'20px', marginBottom:'60px'}}/>
      {/* Footer */}
   
      {/* End footer */}
    </ThemeProvider>
  );
}
