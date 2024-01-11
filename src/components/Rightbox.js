import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { Box, Button, Container } from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Messagebox from "./Massegebox";

const options = [];

const ITEM_HEIGHT = 48;


export default function ScrollableTabsButtonPrevent() {

const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};



  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
    <Box
      sx={{
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "5vw",
        boxShadow: "0px 1px 5px #c9c9c9 ",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <p
          style={{
            margin: 0,
            color: "black",
            fontWeight: "bold",
            fontSize: "20px",
            margin: "1vw",
          }}
        >
          Subham Rawat |
        </p>
        <Link href="#" underline="none">
          View applicants
        </Link>
      </Box>

      <Box>
        <Button
          sx={{ color: "green", backgroundColor: "#ccf5cc" }}
          variant="contained"
        >
          Hire
        </Button>
        <Button
          sx={{ ml: "1vw", color: "red", backgroundColor: "#f2dfdf" }}
          variant="contained"
        >
          Contained
        </Button>
        <Button
          sx={{ ml: "1vw", color: "blue", backgroundColor: "#e0dff2" }}
          variant="contained"
          >
          Outlined
        </Button>

          </Box>
        <Box sx={{mr:"0.5vw"}}>
          <div>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>

          
          
        </Box>
    </Box>

    <Box>
      <Messagebox/>
    </Box>
    </>
  );
}
