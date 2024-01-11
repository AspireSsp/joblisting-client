import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Box,
  Button,
  // ButtonGroup,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ChatBtn from "./ChatBtn";
import Chatlist from "./Chatlist";


export default function Leftbox() {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    // Handle search logic here
    console.log("Search term:", searchTerm);
  };

  return (
    <div>
      <Box
        sx={{
          display: "block",
          padding: "4%",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-name-label">
            Web Development(Mean/Mern Stack)
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            input={<OutlinedInput label="Name" />}
          >
            {/* Rendered options */}
          </Select>
        </FormControl>

        <FormControl sx={{ width: "100%", pt: "4%" }}>
          <TextField
            variant="outlined"
            placeholder="Search applicants by name"
            fullWidth
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="large" />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>

        <Box
          //   aria-label="outlined primary button group"
          sx={{ ml: "10%", mt: "4%" }}
        >
          <ChatBtn/>
        </Box>

      </Box>

        <Box sx={{width:"100%", display:"flex"}} >


          <Chatlist/>


        </Box>
    </div>
  );
}
