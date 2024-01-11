import React from "react";
import { Grid, Paper } from "@mui/material";
import Leftbox from "./Leftbox";
import Rightbox from "./Rightbox";

function ChatPage() {
  return (
    <Grid
      container
      style={{ width: "85%", marginTop: "2%", marginLeft: "7.5%" }}
      justifyContent="center"
      border={"0.5px solid gray"}
    >
      <Grid item xs={4}>
        <Paper
          style={{ width: "100%", height: "100%", border: "0.5px solid gray" }}
        >
          <Leftbox />
        </Paper>
      </Grid>



      
      <Grid item xs={8}>
        <Paper style={{ width: "100%",height:"50vw" }}>
          
        <Rightbox/>

        </Paper>
      </Grid>
    </Grid>
  );
}

export default ChatPage;
