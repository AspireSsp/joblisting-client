import * as React from 'react';
import { useNavigate } from "react-router-dom"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';


export default function OutlinedCard() {
    const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/internships/detail`);
  };
    return (
        
            <React.Fragment>
                <CardContent sx={{ border:"1px solid #EEE", width: '990px', display: 'inline-flex', flexDirection: 'column', margin:'10px',borderRadius:'10px', backgroundColor:'#fff' }} onClick = {()=>{navigate("/internships/detail")}}>
                    <Typography variant="h5" component="div">
                        Fundraising
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Odisha Development Management Programme (ODMP)
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Wrok From Home
                    </Typography>
                    <div style={{ display: 'flex' }}>
                        <Typography sx={{ fontSize: 14, marginRight: "20px" }} color="text.secondary" gutterBottom>
                            START DATE
                            <br />
                            Immediately
                        </Typography>
                        <Typography sx={{ fontSize: 14, marginRight: "20px" }} color="text.secondary" gutterBottom>
                            DURATION
                            <br />
                            4 Months
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            STIPEND
                            <br />
                            7,000-12,000 /month
                        </Typography>
                    </div>
                    <Stack direction="row" sx={{ marginTop: '20px' }} spacing={2}>
                        <Chip label="Chip Filled" />
                        <Chip label="Chip Outlined" variant="outlined" />
                    </Stack>
        
                    <Divider sx={{ margin: "0px", marginTop: '20px', marginBottom: '20px' }} />
                    <CardActions>
                        <Button size="small" sx={{color:'#ff9800'}} onClick={()=>{handleDetail()}}>Learn More</Button>
                    </CardActions>
                </CardContent>
        
            </React.Fragment>
        
    );
}