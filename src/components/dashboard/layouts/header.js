
import { AppBar, Toolbar, Box, Button, IconButton, Typography, Avatar, Breadcrumbs } from '@mui/material';
import { Menu, Person, ShoppingBasket } from '@mui/icons-material';
import { usePathname } from 'next/navigation';
import Home from '@/theme/overrides/icons/home'
import UserFillIcon from '@/theme/overrides/icons/userFill';
import BasketIcon from '@/theme/overrides/icons/basket';
import Link from 'next/link';
export default function Header() {
    const pathname = usePathname();
    return (
        <AppBar position="sticky" color='inherit' sx={{ boxShadow: 'none', left: 250, width: 'calc(100% - 250px)' }}>
            <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
                <Breadcrumbs separator="/" sx={{ color: 'text.secondary', fontSize: 12 }}>
                    <Box component={Link} href='/' sx={{ display: 'flex', color: 'inherit', alignItems: 'center', gap: 0.5, svg: { fontSize: 20 } }}>
                        <Home />
                    </Box>
                    <Typography variant="caption" color="inherit">
                        {pathname.replace('/', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'DASHBOARD'}
                    </Typography>
                </Breadcrumbs>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Button
                        variant="contained"
                        sx={{
                            textTransform: 'none',
                            borderRadius: 1
                        }}
                    >
                        Sell now
                    </Button>
                    <Button startIcon={<UserFillIcon />} endIcon={<Menu />} variant='contained' color="inherit" sx={{ minWidth: 'auto', }} />


                    <Button variant='contained' color="inherit" startIcon={<BasketIcon />}>
                        $0.00
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}