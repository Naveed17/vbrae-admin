'use client';
import { styled } from '@mui/material/styles';
import {
  Box,
  List,
  ListItemButton,
  Typography,
  Card,
  Button,
} from '@mui/material';

export const SidebarContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isDashboard',
})(({ theme, isDashboard }) => ({

  width: 250,
  height: `calc(100vh - 70px)`,
  borderBottomRightRadius: 16,
  border: `1px solid ${theme.palette.divider}`,
  borderLeft: 0,
  borderTop: 0,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: 1200,
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 'calc(100vh - 60px)',
    top: 60,
  }
}));

export const LogoSection = styled(Box)(({ theme }) => ({
  padding: '10px 20px',

}));

export const TaglineText = styled(Typography)(({ theme }) => ({
  fontSize: '11px',
  color: theme.palette.text.secondary,
  letterSpacing: '1px',
  textTransform: 'uppercase',
}));

export const NavList = styled(List)(({ theme }) => ({
  padding: '16px 14px',
  paddingTop: 0,
  flex: 1,
}));

export const NavItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'collapsed',
})(({ theme, isActive, collapsed }) => ({
  borderRadius: '8px',
  padding: '8px 8px',
  fontWeight: 600,
  justifyContent: 'center',

  '& .MuiListItemIcon-root': {
    minWidth: collapsed ? '0' : '28px',
    fontSize: 24,
    color: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
    marginRight: collapsed ? '0' : '16px',
  },
  '& .MuiListItemText-primary': {
    color: isActive ? theme.palette.text.primary : theme.palette.text.secondary,
    fontSize: '14px',
  },
}));

export const VerificationCard = styled(Card)(({ theme }) => ({
  overflow: 'visible',
  margin: '0 20px',
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.primary.main} !important`,
  borderRadius: '12px',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

export const HelpButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})(({ theme, isActive }) => ({
  margin: '20px',
  color: isActive ? theme.palette.text.primary : theme.palette.text.secondary,
  backgroundColor: isActive ? theme.palette.primary.main : theme.palette.action.hover,
  textTransform: 'none',
  justifyContent: 'flex-start',
  padding: '12px 16px',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },

}));
