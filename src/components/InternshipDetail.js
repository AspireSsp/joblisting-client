import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InternshipCard from "./InternshipCard"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const InternshipDetail = () => {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <Box sx={{ width: '100%', maxWidth: 1010 }}>
      <Typography variant="h4" gutterBottom>
      Battery Research work from home job/internship at breakinterview
      </Typography>
      <div style={{border:'1px solid gray'}}>

      <InternshipCard/>
      <div style={{padding:'10px'}}>
      <Typography variant="h5" gutterBottom>
      About breakinterview
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="h5" gutterBottom>
        
      </Typography>
      <Typography variant="h6" gutterBottom>
      About the work from home job/internship
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>   <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>

      <Typography variant="h6" gutterBottom>
      Skill(s) required
      </Typography>
      <Stack direction="row" spacing={1} gutterBottom>
      <Chip label="HTML"  />
      <Chip label="CSS"  />
      <Chip label="JavaScript"  />
      <Chip label="React"  />
      <Chip label="AWS"  />
      <Chip label="Python"  />
    </Stack>
    <Typography variant="h6" gutterBottom>
    Who can apply
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>   <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>

      <Typography variant="h6" gutterBottom>
      Perks
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
      <Stack direction="row" spacing={1} gutterBottom>
      <Chip label="Flexible work hours"  />
    </Stack>
      </Typography>

      <Typography variant="h6" gutterBottom>
      Additional Information
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>

      <Typography variant="h6" gutterBottom>
      Number of openings
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
       10
      </Typography>
      <div style={{display:'flex', justifyContent:'center'}}>

      <Button variant="outlined" >Apply</Button>
      </div>
      </div>
      </div>
    </Box>
    </div>
  )
}

export default InternshipDetail