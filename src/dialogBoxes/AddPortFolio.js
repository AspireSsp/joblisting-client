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

export default function AddPortFolio() {
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
                <TableCell>PORTFOLIO/ WORK SAMPLES</TableCell>
                <TableCell>
                <Button onClick={handleClickOpen}>
                    <AddIcon color="primary" /> &nbsp; &nbsp; &nbsp; PORTFOLIO/ WORK SAMPLES
                </Button>
                </TableCell>
            </TableRow>
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} sx = {{width : "600px"}}>
            Modal title
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <FormGroup sx={{alignItems :"flex-start", marginBottom : "10px"}}>
                  <Typography>Bio Link</Typography>
                  <TextField size='small' fullWidth label="http://myprofile.com" id="fullWidth" />
              </FormGroup>
              <FormGroup sx={{alignItems :"flex-start", marginBottom : "10px"}}>
                  <Typography>GitHub Profile</Typography>
                  <TextField size='small' fullWidth label="https://github.com/AspireSsp" id="fullWidth" />
              </FormGroup>
              <FormGroup sx={{alignItems :"flex-start", marginBottom : "10px"}}>
                  <Typography>Play store developer A/c (public link)</Typography>
                  <TextField size='small' fullWidth label="https://googlePlay.com/AspireSsp" id="fullWidth" />
              </FormGroup>
              <FormGroup sx={{alignItems :"flex-start", marginBottom : "10px"}}>
                  <Typography>Behance portfolio link</Typography>
                  <TextField size='small' fullWidth label="https://me.com/AspireSsp" id="fullWidth" />
              </FormGroup>
              <FormGroup sx={{alignItems :"flex-start", marginBottom : "10px"}}>
                  <Typography>Other work sample link</Typography>
                  <TextField size='small' fullWidth label="https://github.com/AspireSsp/ecommerce" id="fullWidth" />
              </FormGroup>
              
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleClose}>
                Save changes
            </Button>
            </DialogActions>
        </BootstrapDialog>
        </TableBody>
  );
}