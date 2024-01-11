import React from 'react'

import { Box } from '@mui/material';
import InternShipDetailsHeader from '../components/InternShipDetailsHeader';
import InternShipDetailsSideBar from '../components/InternShipDetailsSideBar';
import InternshipDetailsRightSideBar from '../components/InternshipDetailsRightSideBar';

const InternShipDetails = () => {
  return (
    <div>
      <InternShipDetailsHeader />
      <Box display={'flex'}>
        <InternShipDetailsSideBar />
        <InternshipDetailsRightSideBar/>
      </Box>
    </div>
  )
}

export default InternShipDetails;


