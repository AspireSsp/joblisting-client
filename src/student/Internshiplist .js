import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Tag from '../components/Tag';
import OutlinedCard from '../components/OutlinedCard';
// import Filter from './Filter'
// import InternshipCard from "../components/InternshipCard"
const Internshiplist = () => {
    return (
    <div style={{backgroundColor:'#f8f8f8'}}>
  <Breadcrumbs aria-label="breadcrumb" style={{padding:'3%',marginLeft:'2%',  backgroundColor:'#f8f8f8'}} >
        <Link underline="hover" color="inherit" href="/">
          HOME
        </Link>
        <Typography color="text.primary">Internships</Typography>
      </Breadcrumbs>
   
        <div style={{display:'flex', justifyContent:"center" , backgroundColor:'#f8f8f8'}}>
            <div>
                <Tag />
            </div>
            <div style={{ display:'flex', flexDirection:'column'}}>
                <OutlinedCard/>
                <OutlinedCard/>
                <OutlinedCard/>
                <OutlinedCard/>
                <OutlinedCard/>
            </div>
        </div>
        </div>
    )
}

export default Internshiplist