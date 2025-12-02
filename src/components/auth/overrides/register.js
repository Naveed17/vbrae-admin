'use client';
import { styled } from '@mui/material/styles';
import { Box, Dialog } from '@mui/material';

export const RegisterDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    background: theme.palette.background.paper,
    backdropFilter: 'blur(8px)',
    '& .MuiDialogContent-root': {
      padding: theme.spacing(4),
      position: 'relative',
      '& .clear-btn': {
        position: 'absolute',
        top: 10,
        right: 10,
      },
      '& .customized-btn': {
        '& .MuiButtonBase-root': {
          background: theme.palette.background.default,
          transition: 'ease-in-out .03s',
          border: '1px solid' + theme.palette.background.default,
          justifyContent: 'start',
          '& .MuiButton-icon': {
            color: theme.palette.text.secondary,
          },
          '&:hover': {
            border: '1px solid' + theme.palette.primary.main,
            background: theme.palette.background.default,
          },
        },
      },
      '& .register-btn': {
        background: theme.palette.background.paper,
        transition: 'ease-in-out .03s',
        border: '2px solid' + theme.palette.divider,
        minWidth: 170,
        width: 'auto',
      },
      '& a': {
        textDecoration: 'underline',
      },
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(3.5, 2),
        '& .clear-btn': {
          top: 2,
          right: 2,
        },
        '& .register-btn': {
          width: '100%',
        },
      },
    },
  },
}));

export const SideImage = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  '& img': {
    objectFit: 'cover',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
export const TopImage = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: 225,
  '& img': {
    objectFit: 'cover',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
