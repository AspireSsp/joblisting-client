import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
    TableBody,
    TableRow,
    TableCell,
    TextField,
    FormGroup,
    Box,
  } from "@mui/material";




const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

const AddEducation = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  return (
    
           <TableBody>
            <TableRow>
              <TableCell>EDUCATION</TableCell>
              <TableCell>
                {/* <h5>Rajiv Gandhi Technical univercity</h5>
                <span>persuing b tech in information technology</span>
                <br />
                <span>current cgpa is 8.5</span>
                <br /> */}
                <Button onClick={handleClickOpen}>
                  <AddIcon color="primary" /> &nbsp; &nbsp; &nbsp; ADD EDUCATION
                </Button>
              </TableCell>
              {/* <TableCell>
                <EditIcon />
                &nbsp; &nbsp; &nbsp; &nbsp;
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </TableCell> */}
            </TableRow>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} sx = {{width : "600px"}} >
                  Graduation details/ Post graduation details
                </BootstrapDialogTitle>
                <DialogContent dividers>

                  <FormGroup sx={{alignItems :"flex-start", marginBottom : "10px"}}>
                      <Typography>College</Typography>
                      <TextField size='small' fullWidth label="college name" id="fullWidth" />
                  </FormGroup>
                  <Box sx={{display: 'flex'}}>
                    <Box style={{width : "48%", margin : '5px'}} >
                      <FormGroup sx={{alignItems :"flex-start", marginBottom : "10px"}}>
                        <Typography>Start</Typography>
                        <TextField size='small' fullWidth label="start year" id="fullWidth" />
                      </FormGroup>
                    </Box>
                    <Box style={{width : "48%", margin : '5px'}} >
                      <FormGroup sx={{alignItems :"flex-start", marginBottom : "10px"}}>
                        <Typography>End</Typography>
                        <TextField size='small' fullWidth label="end year" id="fullWidth" />
                      </FormGroup>
                    </Box>
                  </Box>
                  <Box sx={{display: 'flex'}}>
                    <Box style={{width : "48%", margin : '5px'}} >
                      <FormGroup sx={{alignItems :"flex-start", marginBottom : "10px"}}>
                        <Typography>Degree</Typography>
                        <TextField size='small' fullWidth label="e.g. B.sc" id="fullWidth" />
                      </FormGroup>
                    </Box>
                    <Box style={{width : "48%", margin : '5px'}} >
                      <FormGroup sx={{alignItems :"flex-start", marginBottom : "10px"}}>
                        <Typography>Stream</Typography>
                        <TextField size='small' fullWidth label="e.g. Economics" id="fullWidth" />
                      </FormGroup>
                    </Box>
                  </Box>  
                  <FormGroup sx={{alignItems :"flex-start", marginBottom : "10px"}}>
                      <Typography>Performance <span style={{fontSize : "10px"}}>(Optional)</span></Typography>
                      <TextField size='small' fullWidth label="current cgpa" id="fullWidth" />
                  </FormGroup>                
                 
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Save changes
                </Button>
                </DialogActions>
            </BootstrapDialog>
          </TableBody>

  )
}

export default AddEducation