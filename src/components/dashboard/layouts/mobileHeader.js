'use client';
import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Drawer,
    Stack,
    Breadcrumbs,
    Typography,
    Container,
} from '@mui/material';
import { usePathname } from 'next/navigation';
import {
    Menu,
    Close,
} from '@mui/icons-material';
import Search from '@/theme/overrides/icons/search';
import UserIcon from '@/theme/overrides/icons/user';
import Home from '@/theme/overrides/icons/home'
import Sidebar from './sidebar';
import Logo from './Logo'
import BasketIcon from '@/theme/overrides/icons/basket';
import BellIcon from '@/theme/overrides/icons/bell';
import Link from 'next/link';



export default function MobileHeader() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const pathname = usePathname();
    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };



    return (
        <Stack spacing={2}>
            <AppBar
                position="sticky"
                color='inherit'

                sx={{ minHeight: 60, zIndex: 999, borderBottom: 1, borderColor: 'divider' }}
            >
                <Toolbar sx={{ minHeight: 60 }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 1 }}
                    >
                        {drawerOpen ? <Close /> : <Menu />}
                    </IconButton>
                    <Stack direction={'row'} spacing={1} alignItems={'center'}><Logo />
                        <Typography variant='body2' fontWeight={600} sx={{ background: 'linear-gradient(90deg, #FF00FF, #1095ED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            ADMIN
                        </Typography>
                    </Stack>

                    <Box sx={{ display: 'flex', ml: 'auto' }}>
                        <IconButton sx={{ color: 'text.primary' }}>
                            <Search />
                        </IconButton>
                        <IconButton sx={{ color: 'text.primary' }}>
                            <BellIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'text.primary' }}>
                            <UserIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'text.primary' }}>
                            <BasketIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                sx={{


                    top: '60px',
                    height: 'calc(100vh - 60px)',
                    '& .MuiBackdrop-root': {
                        display: 'none'
                    }
                }}
            >
                <Sidebar handleDrawerToggle={handleDrawerToggle} />
            </Drawer>
            {pathname !== '/dashboard' && <Container maxWidth={false}>
                <Breadcrumbs separator="/" sx={{ color: 'text.secondary', fontSize: 12 }}>
                    <Box component={Link} href={'/'} sx={{ display: 'flex', color: 'inherit', alignItems: 'center', gap: 0.5, svg: { fontSize: 20 } }}>
                        <Home />
                    </Box>
                    <Typography variant="caption" color="inherit">
                        {pathname.replace('/', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'DASHBOARD'}
                    </Typography>
                </Breadcrumbs>
            </Container>}

        </Stack>
    );
}

