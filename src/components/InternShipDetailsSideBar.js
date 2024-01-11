import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import { InterShipDetailsContent } from './InterShipDetailsContent';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function InternShipDetailsSideBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "224",width:"225px" }}
    >
      <Tabs

        orientation="vertical"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',backgroundColor:"#F8F8F8" ,height:"600px", }}
      >
        <Tab label="Access Database" sx={{fontWeight:"500",fontSize:"15px",color:"#484848"}} {...a11yProps(0)} />
        <Divider/>
        <Tab label="Appcation received " sx={{fontWeight:"500",fontSize:"15px",color:"#484848"}} {...a11yProps(1)} />
        <Tab label="Shorlisted"sx={{fontWeight:"500",fontSize:"15px",color:"#484848"}} {...a11yProps(2)} />
        <Tab label="Hired" sx={{fontWeight:"500",fontSize:"15px",color:"#484848"}} {...a11yProps(3)} />
        <Tab label="Not interested" sx={{fontWeight:"500",fontSize:"15px",color:"#484848"}} {...a11yProps(4)} />
        <Divider />
        <Tab label="Assignment" sx={{fontWeight:"500",fontSize:"15px",color:"#484848"}} {...a11yProps(5)} />
        <Tab label="Interview" sx={{fontWeight:"500",fontSize:"15px",color:"#484848"}} {...a11yProps(6)} />
        <Tab label="Chat messages" sx={{fontWeight:"500",fontSize:"15px",color:"#484848"}} {...a11yProps(7)} />
      </Tabs>
      <TabPanel value={value} index={0}>


      <InterShipDetailsContent />
      <InterShipDetailsContent />

      </TabPanel>
      <TabPanel value={value} index={1}>
        2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Eight
      </TabPanel>
     
    </Box>
    
   
    </>
  );
}