'use client';
import { Box, useTheme, ListItem, ListItemIcon, ListItemText, Typography, CardContent, Divider, Stack, useMediaQuery } from '@mui/material';
import { usePathname } from 'next/navigation';
import DashboardIcon from '@/theme/overrides/icons/dashboard';
import AddIcon from '@/theme/overrides/icons/add';
import GameIcon from '@/theme/overrides/icons/game';
import AnnounceIcon from '@/theme/overrides/icons/announce';
import ListIcon from '@/theme/overrides/icons/list';
import CardIcon from '@/theme/overrides/icons/card';
import EnvelopIcon from '@/theme/overrides/icons/envlop';
import Star from '@/theme/overrides/icons/star';
import BellIcon from '@/theme/overrides/icons/bell';
import SettingsIcon from '@/theme/overrides/icons/settings';
import CommentIcon from '@/theme/overrides/icons/comment';
import SupportIcon from '@/theme/overrides/icons/support';
import Image from 'next/image'
import SimpleBar from 'simplebar-react';
import { useRouter } from '@bprogress/next';
import '@/styles/scrollbar.css';
import {
    SidebarContainer,
    LogoSection,
    NavList,
    NavItem,
    VerificationCard,
    HelpButton
} from './overrides/sidebarStyle';
import Logo from './Logo';
import { useMemo } from 'react';

const menuItems = [
    { text: 'NEW OFFERS', href: '/dashboard/new-offers', icon: <AddIcon /> },
    { text: 'MY OFFERS', href: '/dashboard/my-offers', icon: <GameIcon /> },
    { text: 'SALES', href: '/dashboard/sales', icon: <AnnounceIcon /> },
    { text: 'ORDERS', href: '/dashboard/orders', icon: <ListIcon /> },
];

const secondaryItems = [
    { text: 'BALANCE', href: '/dashboard/balance', icon: <CardIcon /> },
];

const tertiaryItems = [
    { text: 'MESSAGES', href: '/dashboard/messages', icon: <EnvelopIcon /> },
    { text: 'WISHLIST', href: '/dashboard/wishlist', icon: <Star /> },
    { text: 'NOTIFICATIONS', href: '/dashboard/notifications', icon: <BellIcon /> },
    { text: 'SETTINGS', href: '/dashboard/settings', icon: <SettingsIcon /> },
    { text: 'REVIEWS', href: '/dashboard/reviews', icon: <CommentIcon /> },
];

export default function Sidebar({ handleDrawerToggle }) {
    const pathname = usePathname();
    const theme = useTheme();
    const router = useRouter();
    const isDashboard = useMemo(() => pathname === '/dashboard', [pathname])
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    return (

        <SidebarContainer isDashboard={isDashboard}>
            <SimpleBar style={{ maxHeight: '100%', height: '100%' }}>
                <LogoSection>
                    {!isMobile && <Logo />}


                    <NavItem isActive={pathname === '/dashboard'} sx={{ my: 2.5, mx: -1 }} onClick={() => { router.push('/dashboard'); isMobile && handleDrawerToggle?.(); }}>
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        <ListItemText primary="DASHBOARD" />
                    </NavItem>

                    <Divider />
                </LogoSection>


                <NavList>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <NavItem isActive={pathname === item.href} onClick={() => { router.push(item.href); isMobile && handleDrawerToggle?.(); }}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </NavItem>
                        </ListItem>
                    ))}

                    <Divider sx={{ margin: '16px 20px' }} />

                    {secondaryItems.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <NavItem isActive={pathname === item.href} onClick={() => { router.push(item.href); isMobile && handleDrawerToggle?.(); }}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </NavItem>
                        </ListItem>
                    ))}

                    <Divider sx={{ margin: '16px 20px' }} />

                    {tertiaryItems.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <NavItem isActive={pathname === item.href} onClick={() => { router.push(item.href); isMobile && handleDrawerToggle?.(); }}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </NavItem>
                        </ListItem>
                    ))}
                </NavList>

                <Stack>
                    <VerificationCard>
                        <CardContent sx={{ padding: '18px !important' }}>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 1.2 }}>
                                <Image src='./verified.svg' width={50} height={50} alt='ID Verification' />
                                <Stack>
                                    <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                                        ID Verification
                                    </Typography>
                                    <Stack direction={'row'}>

                                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                                            Verification by
                                        </Typography>
                                        <Image src='/v-by.svg' width={20} height={15} alt='Verification by' />

                                    </Stack>
                                </Stack>
                            </Box>



                            <Typography variant="caption" sx={{ fontWeight: 400, display: 'block', }}>
                                Verify Your Identity <strong>in Just 20 Seconds.</strong> Enjoy easy, fast, and secure verification for quicker payments.
                            </Typography>
                        </CardContent>
                    </VerificationCard>

                    <HelpButton isActive={pathname === '/dashboard/help-center'} onClick={() => router.push('/dashboard/help-center')} size='large' startIcon={<SupportIcon isActive={pathname === '/dashboard/help-center'} />}>
                        Help Center
                    </HelpButton>
                </Stack>
            </SimpleBar>
        </SidebarContainer>

    );
}