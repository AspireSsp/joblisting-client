import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";

import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';


import Button from "@mui/material/Button";
import AddEducation from "../dialogBoxes/AddEducation";
import AddInternship from "../dialogBoxes/AddInternship";
import AddPositionResponseblity from "../dialogBoxes/AddPositionResponseblity";
import AddTraining from "../dialogBoxes/AddTraining";
import AddProject from "../dialogBoxes/AddProject";
import AddSkills from "../dialogBoxes/AddSkills";
import AddPortFolio from "../dialogBoxes/AddPortFolio";
import AddPersonalDetails from "../dialogBoxes/AddPersonalDetails";

const MyResume = () => {
 

  return (
    <div sx={{ border: 1 }}>
      <h3 className="text-center">Resume</h3>

      <Container maxWidth="md" style={{ marginTop: "20px"  ,Color: grey[500]  }} sx={{ border: 1 , borderRadius: '16px'}}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <h3>Sanjay Prajapat</h3>
                <span>sanjay@gmail.com</span>
                <br />
                <span>+91 1234123412</span> <br />
                <span>noida</span>
              </TableCell>
              <TableCell></TableCell>
              <TableCell>
                <DownloadIcon />
              </TableCell>
            </TableRow>
          </TableBody>

          <AddEducation />
          <AddInternship />
          <AddPositionResponseblity />
          <AddTraining />
          <AddProject />
          <AddSkills />
          <AddPortFolio />
          <AddPersonalDetails />

         {/* < */}



          {/* <TableBody>
            <TableRow>
              <TableCell>Internship</TableCell>
              <TableCell>
                <Button>
                  <AddIcon color="primary" /> &nbsp; &nbsp; &nbsp; Internship
                </Button>
              </TableCell>
            </TableRow>
          </TableBody> */}

          {/* <TableBody>
            <TableRow>
              <TableCell>TRAININGS/ COURSES</TableCell>
              <TableCell>
                <Button>
                  <AddIcon color="primary" /> &nbsp; &nbsp; &nbsp; TRAININGS/
                  COURSES
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>

          <TableBody>
            <TableRow>
              <TableCell>ACADEMICS/ PERSONAL PROJECTS</TableCell>
              <TableCell>
                <Button>
                  <AddIcon color="primary" /> &nbsp; &nbsp; &nbsp; ACADEMICS/
                  PERSONAL PROJECTS
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>

          <TableBody>
            <TableRow>
              <TableCell>SKILLS</TableCell>
              <TableCell>
                <Button>
                  <AddIcon color="primary" /> &nbsp; &nbsp; &nbsp; SKILLS
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>

          <TableBody>
            <TableRow>
              <TableCell>PORTFOLIO/ WORK SAMPLES</TableCell>
              <TableCell>
                <Button>
                  <AddIcon color="primary" /> &nbsp; &nbsp; &nbsp; PORTFOLIO/
                  WORK SAMPLES
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>

          <TableBody>
            <TableRow>
              <TableCell>ACCOMPLISHMENTS/ ADDITIONAL DETAILS</TableCell>
              <TableCell>
                <Button>
                  <AddIcon color="primary" /> &nbsp; &nbsp; &nbsp;
                  ACCOMPLISHMENTS/ ADDITIONAL DETAILS
                </Button>
              </TableCell>
            </TableRow>
          </TableBody> */}
        </Table>
      </Container>
    </div>
  );
};

export default MyResume;

