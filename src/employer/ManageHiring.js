import GroupIcon from "@mui/icons-material/Group";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import React, {useState} from 'react'
const col = {
  display: "flex",
  flexDirection: "column",
}
const ManageHiring = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div>
      <>
        <Container className="mt-2 job-container d-flex " style={{ height: "1300px" }}>
          <Container className="mt-5 job-container">
            <h3>Introducing</h3>
            <span style={{ fontSize: "55px", fontWeight: 500 }}>
              Internshala
            </span>{" "}
            <br />
            <span style={{ fontSize: "60px", fontWeight: 700 }}>
              Managed Hiring Services
            </span>{" "}
            <br />
            <ul style={{ fontSize: "25px", fontWeight: 500 }} className="mt-3 ">
              <li>Now hire within 10days</li>
              <li>
                We take care of end-to-end hiring, <br />
                from sourcing to joining
              </li>
            </ul>
            <div className="container mt-5">
              <h1 style={{ fontWeight: 700 }}>How it works?</h1> <br />
              <div className="card  bg-light w-75  bd ">
                <div class="card-body bg-light  bd">
                  <h4 class="card-title bg-light ">
                    <GroupIcon
                      className="icon"
                      fontSize="large"
                      sx={{ borderRadius: "50%" }}
                    />{" "}
                    Source
                  </h4>
                  <p
                    class="card-text bg-light ms-5 "
                    style={{ fontSize: "19px", fontWeight: 400 }}
                  >
                    21Mn+ candidates and AI technology, <br />
                    we find the perfect fit for your organization
                  </p>
                </div>
              </div>{" "}
              <br />
              <div className="card  bg-light w-75 bd">
                <div class="card-body bg-light bd">
                  <h4 class="card-title bg-light ">
                    <SearchIcon
                      className="icon"
                      fontSize="large"
                      sx={{ borderRadius: "50%" }}
                    />
                    {"  "}
                    Screen
                  </h4>
                  <p
                    class="card-text bg-light ms-5 "
                    style={{ fontSize: "19px", fontWeight: 400 }}
                  >
                    With an amazing 80% accuracy, our specialists filter <br />{" "}
                    profiles, giving you highly qualified individuals.
                  </p>
                </div>
              </div>
              {"  "}
              <br />
              <div className="card  bg-light w-75 bd">
                <div class="card-body bg-light bd">
                  <h4 class="card-title bg-light">
                    <CheckCircleOutlineIcon
                      className="icon"
                      fontSize="large"
                      sx={{ borderRadius: "50%" }}
                    />
                    {"  "}
                    Select
                  </h4>
                  <p
                    class="card-text bg-light ms-5 "
                    style={{ fontSize: "19px", fontWeight: 400 }}
                  >
                    We coordinate final interviews with your team using <br />
                    the top profiles. You pay once the candidate joins.
                  </p>
                </div>
              </div>
            </div>
            <div className="container mt-5 mb-5">
              <h2 style={{ fontWeight: 400 }}>Why hire on Internshala?</h2>
              <div className="first mt-5 d-flex">
                <div
                  class="card border border-info rounded  me-3"
                  style={{ width: "18rem" }}
                >
                  <div class="card-body">
                    <h1 class="card-title text-success">1.5 Mn+</h1>

                    <p
                      class="card-text "
                      style={{ fontSize: "19px", fontWeight: 400 }}
                    >
                      candidates hired Pan India
                    </p>
                  </div>
                </div>
                <div
                  class="card border border-info rounded  "
                  style={{ width: "18rem" }}
                >
                  <div class="card-body">
                    <h1 class="card-title text-success">300k+</h1>
+
                    <p
                      class="card-text"
                      style={{ fontSize: "19px", fontWeight: 400 }}
                    >
                      companies hiring on Internshala
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <Container className="mt-5 job-container border rounded bg-light sticky-top w-50" style={{ height: "400px" }}>
            <Box noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => { setEmail(e.target.value) }}
                    size='small'
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => { setFirstName(e.target.value) }}
                    size='small'
                    autoComplete="given-name"
                    name="Name"
                    required
                    fullWidth
                    id="name"
                    label="name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => { setPassword(e.target.value) }}
                    size='small'
                    required
                    fullWidth
                    name="organization"
                    label="organization"
                    type="text"
                    id="text"
                    autoComplete="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => { setMobile(e.target.value) }}
                    size='small'
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile"
                    name="mobile"
                    autoComplete="mobile"
                  />
                </Grid>
              </Grid>
              <Grid>
                <Typography sx={{fontSize : "12px"}}>
                These details are to enable callback. Your existing account details will not get updated.
                </Typography>
              </Grid>
              <Button
                type="primary"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              
              >
                Submin Query
              </Button>
            </Box>
          </Container>
        </Container>
      </>
    </div>
  )
}

export default ManageHiring