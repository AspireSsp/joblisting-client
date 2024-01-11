
import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box, Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function InternShipDetailsHeader() {
  return (
    <>
      <Box style={{ backgroundColor: "#f8f8f8", height: "115px" }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          style={{
            padding: "10px",
            marginLeft: "2%",

            backgroundColor: "#f8f8f8",
          }}
        >
          <Link
            underline="hover"
            color="#666"
            sx={{ fontWeight: "400", fontSize: "15px" }}
            href="/"
          >
            Deshboard
          </Link>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "15px",
              cursor: "pointer",
              color: "#666",
            }}
          >
            Applications received
          </Typography>
        </Breadcrumbs>
        <Box
          sx={{ marginBottom: "10px", paddingLeft: "30px", display: "flex" }}
        >
          <Typography variant="h4" sx={{ fontWeight: "600", fontSize: "24px" }}>
            Applications for Operations Support internship...
          </Typography>

          <TextField
            sx={{
              width: "310px",
              border: "1px solid #DDD",
              marginLeft: "20px",
              marginBottom: "-15px",
              borderRadius: "12px",
            }}
            type="text"
            // label="TextField"
            placeholder="Search applicants by name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "#EEE",
            height: "95px",
            width: "320px",
            marginLeft: "930px",
            marginTop: "-85px",
            padding: "8px",
            fontSize: "12px",
            fontWeight: "400",
          }}
        >
          Need help? Reach out to your Relationship Manager, Bhavya, at
          <Typography variant="span" sx={{color:"#008BDC",fontWeight: "500",}}> +919560664235 </Typography>
           or 
           <Typography variant="span" sx={{color:"#008BDC",fontWeight: "500",}}>  bhavya.kalra@internshala.com</Typography>
          
           , available from Mon-Fri,
          9:30 AM to 6:30 PM.
        </Box>
      </Box>
    </>
  );
}

export default InternShipDetailsHeader;
