import React from "react";
import { Button, ButtonGroup } from "@mui/material";

export default function ChatBtn() {

  return (
    <ButtonGroup
      variant="outlined"
      color="primary"
      aria-label="message buttons"
      sx={{ borderRadius: "10px" }}
    >
      <Button
        sx={{ borderRadius: "20px", backgroundColor: "blue", color: "#fff" }}
      >
        All Messages
      </Button>
      <Button sx={{ borderRadius: "20px" , color:"black"}}>Unread (9)</Button>
    </ButtonGroup>
  );
}
