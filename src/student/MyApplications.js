
import React from 'react';
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
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IosShareIcon from '@mui/icons-material/IosShare';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

const MyApplications = () => {
  // Sample data for applications
  const applications = [
    {
      id: 1,
      companyName: 'ABC Technologies',
      profile: 'Software Engineer',
      applied: 'July 15, 2023',
      numberofapp: '380',
      application: 'hired',
      date: 'ace this internship',
    },
    {
      id: 2,
      companyName: 'DDD Inc.',
      profile: 'Frontend Developer',
      applied: 'July 15, 2023',
      numberofapp: '280',
      application: 'hired',
      date: 'ace this internship',
    },
    // Add more applications here
  ];

  return (
    <div sx={{ border: 1 }} >
     <h3 className='text-center'>My Application</h3>
      <Container maxWidth="md" style={{ marginTop: '20px' }} >
        <Table>
          <TableHead>
            <TableRow sx={{bgcolor: 'text.secondary'}} >
              <TableCell>Company Name</TableCell>
              <TableCell>Profile</TableCell>
              <TableCell>Applied On</TableCell>
              <TableCell>Number of App</TableCell>
              <TableCell>Application Status</TableCell>
              <TableCell>Review Application</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applications.map((application) => (
              <TableRow key={application.id}>
                <TableCell>{application.companyName}</TableCell>
                <TableCell>{application.profile}</TableCell>
                <TableCell><IosShareIcon fontSize="small" sx={{ color: 'info.main' }}/><br/>{application.applied}</TableCell>
                <TableCell>{application.numberofapp}</TableCell>
                <TableCell>{application.application}<br/><RemoveRedEyeIcon fontSize="small" sx={{ color: 'info.main' }}/>view certifecate</TableCell>
                <TableCell><TextSnippetIcon fontSize="small" sx={{ color: 'info.main' }}/><br/>{application.date}</TableCell>
                {/* <TableCell>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
};

export default MyApplications;


//my application