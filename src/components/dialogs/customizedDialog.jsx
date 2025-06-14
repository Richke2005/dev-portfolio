import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function CustomizedDialogs({title, open, onClose, description, children}) {
  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: 'var(--foreground)',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '800px',
          },
        },
        backdrop: {
          sx: {
            backdropFilter: 'blur(5px)',
            position: 'fixed',
            transition: 'background-color 0.3s ease'
          },
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        {children}
        <h2 style={{ marginBottom: "20px" }}>📝 Descrição Do <strong style={{ color: "var(--primary)" }}>Projeto</strong></h2>
        <Typography gutterBottom>
          {description}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} sx={{ color: 'var(--layer1)' }}>
          Ok
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}

export default CustomizedDialogs;