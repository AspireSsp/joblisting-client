import * as React from "react";
import Box from "@mui/material/Box";
import { Tabs, Tab, Button } from "@mui/material";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

export default function VerticalTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        width: "50vw",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderLeft: 0,
          borderColor: "divider",
          display: "flex",
          width: "28vw",
        }}
      >
        <Tab
          sx={{
            maxWidth: "40vw",
            borderTop: "1px solid grey",
            borderBottom: "1px solid grey",
          }}
          label={
            <Box
              sx={{
                width: "100%",
                height: "10vw",
                textTransform: "none",
                padding: "0",
                margin: "0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Subham Rawat
                </p>
                <p style={{ marginLeft: 0, color: "gray" }}>17/06/2023</p>
              </Box>
              <Box
                sx={{
                  width: "25vw",
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    margin: "2",
                    marginTop: "6px",

                    color: "gray",
                    fontSize: "1vw",
                  }}
                >
                  Web Development (Mean/Mern Stack) internship
                </p>
                <p
                  style={{
                    color: "gray",
                    margin: 2,
                    marginTop: "1vw",
                    color: "gray",
                    fontSize: "1vw",
                  }}
                >
                  Okay, thanks
                </p>
                <Button
                  sx={{
                    color: "black",
                    border: "1px solid gray",
                    marginTop: "1vw",
                    height: "1.5vw",
                    fontWeight: "40px",
                  }}
                >
                  Pending decision
                </Button>
              </Box>
            </Box>
          }
        />
        <Tab
          sx={{ maxWidth: "40vw", borderBottom: "1px solid grey" }}
          label={
            <Box
              sx={{
                width: "100%",
                height: "10vw",
                textTransform: "none",
                padding: "0",
                margin: "0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Subham Rawat
                </p>
                <p style={{ marginLeft: 0, color: "gray" }}>17/06/2023</p>
              </Box>
              <Box
                sx={{
                  width: "25vw",
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    margin: "2",
                    marginTop: "6px",

                    color: "gray",
                    fontSize: "1vw",
                  }}
                >
                  Web Development (Mean/Mern Stack) internship
                </p>
                <p
                  style={{
                    color: "gray",
                    margin: 2,
                    marginTop: "1vw",
                    color: "gray",
                    fontSize: "1vw",
                  }}
                >
                  Attachment
                </p>
                <Button
                  sx={{
                    color: "black",
                    border: "1px solid gray",
                    marginTop: "1vw",
                    height: "1.5vw",
                    fontWeight: "40px",
                  }}
                >
                  Pending decision
                </Button>
              </Box>
            </Box>
          }
        />
        <Tab
          sx={{ maxWidth: "40vw", borderBottom: "1px solid grey" }}
          label={
            <Box
              sx={{
                width: "100%",
                height: "12vw",
                textTransform: "none",
                padding: "0",
                margin: "0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Subham Rawat
                </p>
                <p style={{ marginLeft: 0, color: "gray" }}>17/06/2023</p>
              </Box>
              <Box
                sx={{
                  width: "25vw",
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    margin: "2",
                    marginTop: "6px",

                    color: "gray",
                    fontSize: "1vw",
                  }}
                >
                  Web Development (Mean/Mern Stack) internship
                </p>
                <p
                  style={{
                    color: "gray",
                    margin: 2,
                    marginTop: "1vw",
                    color: "gray",
                    fontSize: "1vw",
                  }}
                >
                  Okay, thanks
                </p>
                <Button
                  sx={{
                    color: "black",
                    border: "1px solid gray",
                    marginTop: "1vw",
                    height: "1.5vw",
                    fontWeight: "40px",
                  }}
                >
                  Pending decision
                </Button>
              </Box>
            </Box>
          }
        />
      </Tabs>
    </Box>
  );
}
