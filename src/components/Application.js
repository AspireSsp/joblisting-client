import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    Chip,
    FormControl,
    FormControlLabel,
    InputAdornment,
    OutlinedInput,
    Paper,
    Slider,
    Tab,
    Tabs,
    TextField,
  } from "@mui/material";
  import React, { useState } from "react";
  import NavigateNextIcon from "@mui/icons-material/NavigateNext";
  import SearchIcon from "@mui/icons-material/Search";
  import { AccountCircle, RampLeft } from "@mui/icons-material";
  import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
  import Rating from "@mui/material/Rating";
  import StarIcon from "@mui/icons-material/Star";
  import AccountBoxIcon from "@mui/icons-material/AccountBox";
  import LinkIcon from "@mui/icons-material/Link";
  import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
  
  const labels: { [index: string]: string } = {
    0.5: "Poor",
    1: "Ok",
    1.5: "Good",
    2: "Good+",
    2.5: "Excellent",
    3: "Excellent+",
  };
  
  export default function Application() {
    const value1 = 2;
    const value2 = 1;
    const value3 = 3;
    const value4 = 3;
  
    const [value, setValue] = React.useState("one");
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div>
        <Box sx={{ display: "flex", overflowX: "hidden", justifyContent:'center' }}>
          <Box sx={{ mt: "3%"}}>
            <p
              style={{
                display: "flex",
                textAlign: "center",
                fontSize: "0.8vw",
              }}
            >
              Dashboard{" "}
              <NavigateNextIcon fontSize="small" sx={{ color: "grey" }} />{" "}
              ApplicationS received
            </p>
            <p
              style={{
                marginTop: "2%",
                marginBottom: "3%",
                fontWeight: "bold",
              }}
            >
              Application for Web Development (Mean/Mern Stack) internship
            </p>
          </Box>
  
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              
              p: "1vw",
              pl: "20vw",
              paddingRight:"0px"
            }}
          >
            <Box>
              <Box
                sx={{
                  mt: "1.6vw",
                  width: "20vw",
                  height: "2rem",
                  display: "flex",
                  alignItems: "flex-end",
                  border: "1px solid #gray",
                  padding: "2px",
                  borderRadius: "5px",
                }}
              >
                        <TextField
            id="outlined-start-adornment"
            sx={{
              width: "20vw",
              height: "2rem",
              padding: "2px",
              fontSize: "2px",
            }}
            size="small"
            placeholder="Search Application By Name"
            InputProps={{
              startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
            }}
          />
              </Box>
            </Box>
  
            <Box
              sx={{
                width: "16vw",
                border: "1px solid #ebebeb",
                p: "0.7vw",
                fontSize: "0.7vw",
                ml: "2vw",
              }}
            >
              <p>
                Need help? Reach out your Relationship Manager, Kshitij, at
                <a href="#"> +919289328366 </a>
                or <a href="#">kshitij.mathur@internshala.com</a>, available from
                Mon-Fri, 9:30 AM to 6:30 PM.
              </p>
            </Box>
          </Box>
        </Box>
  
        <Box
          sx={{
            height: "66vw",
            display: "flex",
            mb: "2%",
            m:'5%',
            marginTop:'0',
            justifyContent:'center'
          }}
        >
          <Box
            sx={{
              border: "1px solid #ebebeb",
              backgroundColor: "#f7f8f8",
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                borderRight: 1,
                borderColor: "divider",
                width: "14.5vw",
                // backgroundColor: "lightgray",
              }}
            >
              <Tab
                label={
                  <>
                    <Paper
                      elevation={0}
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "left",
                        textTransform: "none",
                        backgroundColor: "#f7f8f8",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.9vw",
                          width: "10vw",
                          fontWeight: "bolder",
                        }}
                      >
                        Access database
                      </p>
                      <Chip
                        label="674"
                        sx={{ width: "3.7vw", height: "1.5vw", mr: "7%" }}
                      />
                    </Paper>
                  </>
                }
              />
  
              <hr style={{ marginTop: "3%" }} />
  
              <Tab
                label={
                  <>
                    <Paper
                      elevation={0}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textTransform: "none",
                        backgroundColor: "#f7f8f8",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.8vw",
                          width: "15vw",
                          fontWeight: "bolder",
                        }}
                      >
                        Applications received
                      </p>
                      <Chip
                        label="1"
                        sx={{
                          width: "3vw",
                          height: "1.5vw",
                          mr: "13%",
                        }}
                      />
                    </Paper>
                  </>
                }
              />
  
              <Tab
                label={
                  <>
                    <Paper
                      elevation={0}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textTransform: "none",
                        backgroundColor: "#f7f8f8",
                        textAlign: "left",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.8vw",
                          width: "10vw",
                          fontWeight: "bolder",
                        }}
                      >
                        Shortlisted
                      </p>
                      <Chip
                        label="1"
                        sx={{
                          width: "3vw",
                          height: "1.5vw",
                        }}
                      />
                    </Paper>
                  </>
                }
              />
  
              <Tab
                label={
                  <>
                    <Paper
                      elevation={0}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textTransform: "none",
                        backgroundColor: "#f7f8f8",
                        textAlign: "left",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.8vw",
                          width: "10vw",
                          fontWeight: "bolder",
                        }}
                      >
                        Hired
                      </p>
                      <Chip
                        label="8"
                        sx={{
                          width: "3vw",
                          height: "1.5vw",
                        }}
                      />
                    </Paper>
                  </>
                }
              />
  
              <Tab
                label={
                  <>
                    <Paper
                      elevation={0}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textTransform: "none",
                        backgroundColor: "#f7f8f8",
                        textAlign: "left",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.8vw",
                          width: "10vw",
                          fontWeight: "bolder",
                        }}
                      >
                        Not interested
                      </p>
                      <Chip
                        label="43"
                        sx={{
                          width: "3.5vw",
                          height: "1.5vw",
                        }}
                      />
                    </Paper>
                  </>
                }
              />
  
              <hr style={{ marginTop: "3%" }} />
  
              <Tab
                label={
                  <>
                    <Paper
                      elevation={0}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textTransform: "none",
                        backgroundColor: "#f7f8f8",
                        textAlign: "left",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.8vw",
                          width: "10vw",
                          fontWeight: "bolder",
                        }}
                      >
                        Assignment
                      </p>
                      <Chip
                        label="487"
                        sx={{
                          width: "3.7vw",
                          height: "1.5vw",
                        }}
                      />
                    </Paper>
                  </>
                }
              />
  
              <Tab
                label={
                  <>
                    <Paper
                      elevation={0}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textTransform: "none",
                        backgroundColor: "#f7f8f8",
                        textAlign: "left",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.8vw",
                          width: "10vw",
                          fontWeight: "bolder",
                        }}
                      >
                        Interviews
                      </p>
                      <Chip
                        label="0"
                        sx={{
                          width: "2.5vw",
                          height: "1.5vw",
                        }}
                      />
                    </Paper>
                  </>
                }
              />
  
              <Tab
                label={
                  <>
                    <Paper
                      elevation={0}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textTransform: "none",
                        backgroundColor: "#f7f8f8",
                        textAlign: "left",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.8vw",
                          width: "8vw",
                          fontWeight: "bolder",
                        }}
                      >
                        Chat message
                      </p>
                      <Chip
                        label="9 NEW"
                        sx={{ width: "5.3vw", height: "1.5vw" }}
                      />
                    </Paper>
                  </>
                }
              />
            </Tabs>
          </Box>
  
          <Box
            sx={{
              border: "1px solid grey",
              width: "68%",
              border: "1px solid #ebebeb",
            }}
          >
            <Box sx={{ m: "2%" }}>
              <p style={{ fontSize: "1vw", fontWeight: "bold" }}>
                Showing 16 results out of 674 applications
              </p>
              <FormControlLabel
                control={<Checkbox sx={{ color: "grey" }} defaultunChecked />}
                label="Select All"
                sx={{ mt: "2%", color: "grey" }}
              />
            </Box>
  
            <Box sx={{ p: "2%" }}>
              <Paper
                sx={{
                  // display: "flex",
                  justifyContent: "space-between",
                  // p: "1%",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ pl: "1%" }}>
                    <FormControlLabel
                      control={
                        <Checkbox sx={{ color: "grey" }} defaultunChecked />
                      }
                      sx={{ fontWeight: "bold", color: "black", fontSize: "1vw" }}
                      label="Ashik Uzzaman"
                    />
                    <p
                      style={{
                        fontSize: "0.8vw",
                        marginLeft: "18%",
                        marginTop: "-3%",
                        fontWeight: "bold",
                        color: "grey",
                      }}
                    >
                      Dhaka Open to relocated
                    </p>
                  </Box>
                  <Box sx={{ display: "flex", width: "15%", ml: "63%" }}>
                    <p
                      style={{
                        fontSize: "0.7vw",
                        marginLeft: "27%",
                        marginTop: "5%",
                        fontWeight: "bold",
                        color: "grey",
                      }}
                    >
                      Applied 15 days ago
                    </p>
                  </Box>
                </Box>
  
                <Box
                  sx={{
                    // border: "1px solid grey",
                    display: "inline-block",
                    height: "10vw",
                  }}
                >
                  <Box
                    sx={{
                      // border: "1px solid grey",
                      height: "23%",
                      display: "flex",
                      fontSize: "0.8vw",
                      fontWeight: "bold",
                      alignSelf: "center",
                      mt: "7%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        ml: "2.5%",
                        mr: "5%",
                        color: "gray",
                      }}
                    >
                      <p>EDUCATION</p>
                    </Box>
                    <Box>
                      <p>
                        Science(2024) <br />
                        <span style={{ color: "gray" }}>
                          NCTB (Government Science Collage) <span>+1 more</span>
                        </span>
                      </p>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      height: "23%",
                      display: "flex",
                      fontSize: "0.8vw",
                      fontWeight: "bold",
                      alignSelf: "center",
                      mt: "7%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        ml: "2.5%",
                        mr: "3.5%",
                        color: "gray",
                      }}
                    >
                      <p>
                        PORTFOLION/ <br /> WORK SAMPLES
                      </p>
                    </Box>
                    <Box>
                      <p>
                        <AccountBoxIcon sx={{ color: "#17adde", mr: "1.5vw" }} />
                        <LinkIcon
                          sx={{ transform: "rotate(-45deg)", color: "#17adde" }}
                        />
                      </p>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      // border: "1px solid grey",
                      height: "23%",
                      display: "flex",
                      fontSize: "0.8vw",
                      fontWeight: "bold",
                      alignSelf: "center",
                      mt: "7%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        ml: "2.5%",
                        mr: "5.2%",
                        color: "gray",
                        // width:"10%"
                      }}
                    >
                      <p style={{ display: "flex" }}>
                        SKILLS
                        <span style={{ marginLeft: "0.5vw", fontSize: "15px" }}>
                          <ErrorOutlineIcon fontSize="" />
                        </span>
                      </p>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "1vw",
                        display: "flex",
                        justifyContent: "space-between",
                        color: "grey",
                      }}
                    >
                      <p style={{ width: "40vw" }}>
                        <Rating
                          name="customized-03"
                          defaultValue={0}
                          max={3}
                          value={value1}
                          readOnly
                          precision={0.5}
                          sx={{ fontSize: "1vw", mr: "2%" }}
                          emptyIcon={
                            <StarIcon
                              style={{ opacity: 0.55 }}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                fontSize: "1vw",
                              }}
                            />
                          }
                        />
                        <span>MongoDB</span>
                        <Rating
                          name="customized-03"
                          defaultValue={0}
                          max={3}
                          value={value2}
                          sx={{ fontSize: "1vw", ml: "2%", mr: "2%" }}
                          readOnly
                          precision={0.5}
                          emptyIcon={
                            <StarIcon
                              style={{ opacity: 0.55 }}
                              fontSize="inherit"
                            />
                          }
                        />
                        <span>Express.js</span>
                        <Rating
                          name="customized-03"
                          defaultValue={0}
                          max={3}
                          value={value3}
                          sx={{ fontSize: "1vw", ml: "2%", mr: "2%" }}
                          readOnly
                          precision={0.5}
                          emptyIcon={
                            <StarIcon
                              style={{ opacity: 0.55 }}
                              fontSize="inherit"
                            />
                          }
                        />
                        <span>CSS</span>
                        <Rating
                          name="customized-03"
                          defaultValue={0}
                          max={3}
                          value={value4}
                          sx={{ fontSize: "1vw", ml: "2%", mr: "2%" }}
                          readOnly
                          precision={0.5}
                          emptyIcon={
                            <StarIcon
                              style={{ opacity: 0.55 }}
                              fontSize="inherit"
                            />
                          }
                        />
                        <span>HTML</span>
                        <span style={{ color: "gray", marginLeft: "2%" }}>
                          +12 more
                        </span>
                      </p>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      // border: "1px solid grey",
                      height: "23%",
                      display: "flex",
                      fontSize: "0.8vw",
                      fontWeight: "bold",
                      alignSelf: "center",
                      mt: "7%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        ml: "2.5%",
                        mr: "3.5%",
                        color: "gray",
                      }}
                    >
                      <p>
                        COVER LETTER{" "}
                        <span style={{ marginTop: "7vw", fontSize: "15px" }}>
                          <ErrorOutlineIcon fontSize="" />
                        </span>
                      </p>
                    </Box>
                    <Box>
                      <p style={{ fontSize: "0.6vw", color: "grey" }}>
                        Dear Hiring Manager,I am thrilled to apply for the Web
                        Development (Mean/Mern Stack) internship at
                        Breakinterview. Around the year, I have had the <br />{" "}
                        opportunity to work on projects in building user-friendly
                        web applcation using ReactJS and many...{" "}
                        <span>
                          {" "}
                          <a style={{ color: "#17adde" }} href="#">
                            see more
                          </a>{" "}
                        </span>
                      </p>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      // border: "1px solid grey",
                      height: "23%",
                      display: "flex",
                      fontSize: "0.8vw",
                      fontWeight: "bold",
                      alignSelf: "center",
                      mt: "7%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        ml: "2.5%",
                        mr: "4%",
                        color: "gray",
                      }}
                    >
                      <p>
                        AVAILABILITY{" "}
                        <span style={{ fontSize: "15px" }}>
                          <ErrorOutlineIcon fontSize="" />
                        </span>
                      </p>
                    </Box>
                    <Box>
                      <p style={{ color: "grey" }}>
                        Yes, I am available for 2 months starting immediately for
                        a full-time internship.
                      </p>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      // border: "1px solid grey",
                      height: "23%",
                      display: "flex",
                      fontSize: "0.8vw",
                      fontWeight: "bold",
                      alignSelf: "center",
                      mt: "7%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        ml: "2.5%",
                        mr: "5%",
                        color: "gray",
                      }}
                    >
                      <p>ASSESSMENT</p>
                    </Box>
                    <Box>
                      <p></p>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      // border: "1px solid grey",
                      height: "23%",
                      display: "flex",
                      fontSize: "0.8vw",
                      fontWeight: "bold",
                      alignSelf: "center",
                      mt: "7%",
                      pb: "8px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        ml: "2.5%",
                        mr: "5%",
                        color: "gray",
                      }}
                    >
                      <p>
                        Answer 1{" "}
                        <span style={{ fontSize: "15px" }}>
                          <ErrorOutlineIcon fontSize="" />
                        </span>
                      </p>
                    </Box>
                    <Box>
                      <p style={{ fontSize: "0.6vw", color: "grey" }}>
                        Project Name Edu Toys Live Site:
                        https://edu-toys.web.app/Client-Side Code :
                        https://github.com/designwithashik/edu-toys Server-Side
                        Code:...
                        <span>
                          {" "}
                          <a style={{ color: "#17adde" }} href="#">
                            see more
                          </a>{" "}
                        </span>
                      </p>
                    </Box>
                  </Box>
                </Box>
  
                <Box
                  sx={{
                    // border: "1px solid grey",
                    height: "23%",
                    display: "flex",
                    fontSize: "0.8vw",
                    fontWeight: "bold",
                    alignSelf: "center",
                    mt: "7%",
                    pb: "8px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "10px",
                        color: "gray",
                      }}
                    >
                      <Box style={{ color: "#17adde", margin: "10px" }}>
                        View full applcation
                      </Box>
                      <Box style={{ color: "#17adde", margin: "10px" }}>
                        Add notes
                      </Box>
                    </Box>
  
                    <Box>
                      <Button
                        sx={{
                          height: "1.5vw",
                          fontSize: "0.6vw",
                          color: "red",
                          backgroundColor: "#eca6a6",
                          margin: "5px",
                          borderRadius: "2px",
                        }}
                        variant="contained"
                      >
                        Not Interested
                      </Button>
                      <Button
                        sx={{
                          height: "1.5vw",
                          fontSize: "0.6vw",
                          color: "blue",
                          backgroundColor: "#deeded",
                          margin: "5px",
                          borderRadius: "2px",
                        }}
                        variant="contained"
                      >
                        Shortlist
                      </Button>
                      <Button
                        sx={{
                          height: "1.5vw",
                          fontSize: "0.6vw",
                          color: "white",
                          backgroundColor: "#3288d2",
                          margin: "5px",
                          borderRadius: "2px",
                        }}
                        variant="contained"
                      >
                        Next steps
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Box>
  
          <Box sx={{ border: "1px solid #ebebeb" }}>
            <Box sx={{ p: "5%" }}>
              <p style={{ fontSize: "1vw", fontWeight: "bold" }}>Filter</p>
  
              <Box sx={{ m: "10px 0" }}>
                <p
                  style={{ margin: "5px 0", fontSize: "12px", fontWeight: "500" }}
                >
                  Applicants' locations <HelpOutlineIcon fontSize="extrasmall" />
                </p>
                <OutlinedInput placeholder="e.g.Mumbai" sx={{ height: "30px" }} />
              </Box>
  
              <Box sx={{ m: "10px 0" }}>
                <p
                  style={{ margin: "5px 0", fontSize: "12px", fontWeight: "500" }}
                >
                  skills <HelpOutlineIcon fontSize="extrasmall" />
                </p>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  defaultValue={[top100Films[13]]}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Favorites" />
                  )}
                />
              </Box>
  
              <Box sx={{ m: "10px 0" }}>
                <p
                  style={{ margin: "5px 0", fontSize: "12px", fontWeight: "500" }}
                >
                  Academic background <HelpOutlineIcon fontSize="extrasmall" />
                </p>
                <OutlinedInput
                  sx={{ height: "30px" }}
                  placeholder="e.g.MBA & similar"
                />
              </Box>
  
              <Box sx={{ m: "10px 0" }}>
                <p
                  style={{ margin: "5px 0", fontSize: "12px", fontWeight: "500" }}
                >
                  Graduation year <HelpOutlineIcon fontSize="extrasmall" />
                </p>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  defaultValue={[top100Films[13]]}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Favorites" />
                  )}
                />
              </Box>
  
              <Box sx={{ m: "10px 0" }}>
                <p
                  style={{ margin: "5px 0", fontSize: "12px", fontWeight: "500" }}
                >
                  Minimum academic performance{" "}
                  <HelpOutlineIcon fontSize="extrasmall" />
                </p>
  
                <Slider
                  defaultValue={50}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
  
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    {
      title: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
    { title: "City of God", year: 2002 },
    { title: "Se7en", year: 1995 },
    { title: "The Silence of the Lambs", year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: "Life Is Beautiful", year: 1997 },
    { title: "The Usual Suspects", year: 1995 },
    { title: "Léon: The Professional", year: 1994 },
    { title: "Spirited Away", year: 2001 },
    { title: "Saving Private Ryan", year: 1998 },
    { title: "Once Upon a Time in the West", year: 1968 },
    { title: "American History X", year: 1998 },
    { title: "Interstellar", year: 2014 },
    { title: "Casablanca", year: 1942 },
    { title: "City Lights", year: 1931 },
    { title: "Psycho", year: 1960 },
    { title: "The Green Mile", year: 1999 },
    { title: "The Intouchables", year: 2011 },
    { title: "Modern Times", year: 1936 },
    { title: "Raiders of the Lost Ark", year: 1981 },
    { title: "Rear Window", year: 1954 },
    { title: "The Pianist", year: 2002 },
    { title: "The Departed", year: 2006 },
    { title: "Terminator 2: Judgment Day", year: 1991 },
    { title: "Back to the Future", year: 1985 },
    { title: "Whiplash", year: 2014 },
    { title: "Gladiator", year: 2000 },
    { title: "Memento", year: 2000 },
    { title: "The Prestige", year: 2006 },
    { title: "The Lion King", year: 1994 },
    { title: "Apocalypse Now", year: 1979 },
    { title: "Alien", year: 1979 },
    { title: "Sunset Boulevard", year: 1950 },
    {
      title:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year: 1964,
    },
    { title: "The Great Dictator", year: 1940 },
    { title: "Cinema Paradiso", year: 1988 },
    { title: "The Lives of Others", year: 2006 },
    { title: "Grave of the Fireflies", year: 1988 },
    { title: "Paths of Glory", year: 1957 },
    { title: "Django Unchained", year: 2012 },
    { title: "The Shining", year: 1980 },
    { title: "WALL·E", year: 2008 },
    { title: "American Beauty", year: 1999 },
    { title: "The Dark Knight Rises", year: 2012 },
    { title: "Princess Mononoke", year: 1997 },
    { title: "Aliens", year: 1986 },
    { title: "Oldboy", year: 2003 },
    { title: "Once Upon a Time in America", year: 1984 },
    { title: "Witness for the Prosecution", year: 1957 },
    { title: "Das Boot", year: 1981 },
    { title: "Citizen Kane", year: 1941 },
    { title: "North by Northwest", year: 1959 },
    { title: "Vertigo", year: 1958 },
    {
      title: "Star Wars: Episode VI - Return of the Jedi",
      year: 1983,
    },
    { title: "Reservoir Dogs", year: 1992 },
    { title: "Braveheart", year: 1995 },
    { title: "M", year: 1931 },
    { title: "Requiem for a Dream", year: 2000 },
    { title: "Amélie", year: 2001 },
    { title: "A Clockwork Orange", year: 1971 },
    { title: "Like Stars on Earth", year: 2007 },
    { title: "Taxi Driver", year: 1976 },
    { title: "Lawrence of Arabia", year: 1962 },
    { title: "Double Indemnity", year: 1944 },
    {
      title: "Eternal Sunshine of the Spotless Mind",
      year: 2004,
    },
    { title: "Amadeus", year: 1984 },
    { title: "To Kill a Mockingbird", year: 1962 },
    { title: "Toy Story 3", year: 2010 },
    { title: "Logan", year: 2017 },
    { title: "Full Metal Jacket", year: 1987 },
    { title: "Dangal", year: 2016 },
    { title: "The Sting", year: 1973 },
    { title: "2001: A Space Odyssey", year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: "Toy Story", year: 1995 },
    { title: "Bicycle Thieves", year: 1948 },
    { title: "The Kid", year: 1921 },
    { title: "Inglourious Basterds", year: 2009 },
    { title: "Snatch", year: 2000 },
    { title: "3 Idiots", year: 2009 },
    { title: "Monty Python and the Holy Grail", year: 1975 },
  ];
  