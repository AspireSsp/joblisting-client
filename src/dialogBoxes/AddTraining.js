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
  FormGroup,
  TextField,
  Box,
  FormControlLabel,
  Checkbox,
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

export default function AddTraining() {
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
        <TableCell>TRAININGS/ COURSES</TableCell>
        <TableCell>
          <Button onClick={handleClickOpen}>
            <AddIcon color="primary" /> &nbsp; &nbsp; &nbsp; TRAININGS/ COURSES
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
          <FormGroup sx={{ alignItems: "flex-start", marginBottom: "10px" }}>
            <Typography>Traning progrfam</Typography>
            <TextField size='small' fullWidth label="college name" id="fullWidth" />
          </FormGroup>
          <FormGroup sx={{ alignItems: "flex-start", marginBottom: "10px" }}>
            <Typography>Organization</Typography>
            <TextField size='small' fullWidth label="college name" id="fullWidth" />
          </FormGroup>
          <FormGroup sx={{ alignItems: "flex-start", marginBottom: "10px" }}>
            <Typography>Location</Typography>
            <TextField size='small' fullWidth label="college name" id="fullWidth" />
          </FormGroup>
          <Box>
            <FormControlLabel control={<Checkbox defaultChecked />} label="online" />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Box style={{ width: "48%", margin: '5px' }} >
              <FormGroup sx={{ alignItems: "flex-start", marginBottom: "10px" }}>
                <Typography>Start date</Typography>
                <TextField size='small' fullWidth label="start date" id="fullWidth" />
              </FormGroup>
            </Box>
            <Box style={{ width: "48%", margin: '5px' }} >
              <FormGroup sx={{ alignItems: "flex-start", marginBottom: "10px" }}>
                <Typography>End date</Typography>
                <TextField size='small' fullWidth label="end date" id="fullWidth" />
              </FormGroup>
            </Box>
          </Box>
          <Box>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Currently ongoing" />
          </Box>
          <Box>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Description (Optional)</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </Box>
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