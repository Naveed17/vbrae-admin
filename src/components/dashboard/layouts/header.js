import { AppBar, Toolbar, Box, Button, IconButton, Menu as MuiMenu, MenuItem, Avatar, Typography } from '@mui/material';
import { Menu, Lock, Logout, Dashboard, Person, ExpandMore, Settings } from '@mui/icons-material';
import { useState } from 'react';
import Link from 'next/link';

export default function Header({ onSidebarToggle, sidebarCollapsed }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="sticky" color='inherit' sx={{ boxShadow: 'none', left: sidebarCollapsed ? 80 : 250, width: sidebarCollapsed ? 'calc(100% - 80px)' : 'calc(100% - 250px)', borderBottom: 1, borderColor: 'divider', transition: 'all 0.3s' }}>
            <Toolbar sx={{ justifyContent: 'space-between', px: 2, pl: 0 }}>
                <IconButton onClick={onSidebarToggle} size="small">
                    <Menu />
                </IconButton>
                <Box sx={{ ml: 'auto' }}>
                    <Button
                        onClick={handleMenuOpen}
                        variant='contained'
                        color='inherit'
                        disableElevation
                        endIcon={<ExpandMore sx={{ fontSize: 16 }} />}
                        startIcon={<Avatar sx={{ width: 32, height: 32 }}>A</Avatar>}
                        sx={{ textTransform: 'none', gap: 0.5, pl: 1.3, pr: 2, py: 2, height: '44px !important' }}
                    >
                        <Typography variant='caption' sx={{ fontWeight: 600 }}>Admin</Typography>
                    </Button>
                    <MuiMenu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem component={Link} href="/admin" onClick={handleMenuClose}>
                            <Dashboard sx={{ mr: 1 }} /> Dashboard
                        </MenuItem>
                        <MenuItem component={Link} href="/profile/admin" onClick={handleMenuClose}>
                            <Person sx={{ mr: 1 }} /> Profile
                        </MenuItem>
                        <MenuItem component={Link} href="/settings" onClick={handleMenuClose}>
                            <Settings sx={{ mr: 1 }} /> Update Profile
                        </MenuItem>
                        <MenuItem component={Link} href="/settings/change-password" onClick={handleMenuClose}>
                            <Lock sx={{ mr: 1 }} /> Change Password
                        </MenuItem>
                        <MenuItem divider />
                        <MenuItem component={Link} href="/logout" onClick={handleMenuClose}>
                            <Logout sx={{ mr: 1 }} /> Logout
                        </MenuItem>
                    </MuiMenu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
