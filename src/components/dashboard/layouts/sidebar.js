'use client';
import { Box, useTheme, ListItem, ListItemIcon, ListItemText, Typography, Stack, useMediaQuery, Collapse, Tooltip, List } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { usePathname } from 'next/navigation';
import SimpleBar from 'simplebar-react';
import { useRouter } from '@bprogress/next';
import '@/styles/scrollbar.css';
import {
    SidebarContainer,
    LogoSection,
    NavList,
    NavItem,
} from './overrides/sidebarStyle';
import Logo from './Logo';
import { useState } from 'react';
import { menuSections } from './menuConfig';

export default function Sidebar({ handleDrawerToggle, collapsed }) {
    const pathname = usePathname();
    const theme = useTheme();
    const router = useRouter();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const [expandedItems, setExpandedItems] = useState({});

    const handleToggleExpand = (itemText) => {
        setExpandedItems(prev => ({
            ...prev,
            [itemText]: !prev[itemText]
        }));
    };

    return (
        <SidebarContainer sx={{ width: collapsed ? 80 : 250, transition: 'width 0.3s' }}>
            <LogoSection>
                {!isMobile && <Stack width={'fit-content'}><Logo {...{ collapsed }} />
                    <Typography mt={collapsed ? 0 : -1.5} ml={'auto'} variant='body2' fontWeight={600} sx={{ background: 'linear-gradient(90deg, #FF00FF, #1095ED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        ADMIN
                    </Typography>
                </Stack>}

            </LogoSection>

            <SimpleBar style={{ maxHeight: 'calc(100vh - 170px)', height: '100%' }}>
                <NavList>
                    {menuSections.map((section) => (
                        <Box key={section.title}>
                            {!collapsed && <Typography variant="caption" sx={{ color: 'text.secondary', px: 2.5, py: 1, mt: section.title !== 'NAVIGATION' ? 2 : 0, fontWeight: 600 }}>
                                {section.title}
                            </Typography>}
                            {section.items.map((item) => (
                                <Box key={item.text}>
                                    <Tooltip
                                        title={collapsed && item.submenu && item.submenu.length > 0 ? (
                                            <List>
                                                {item.submenu.map((subItem) => (
                                                    <ListItem
                                                        key={subItem.text}

                                                        sx={{ cursor: 'pointer' }}
                                                        onClick={() => {
                                                            router.push(subItem.href);
                                                            isMobile && handleDrawerToggle?.();
                                                        }}
                                                    >
                                                        <ListItemText primary={subItem.text} sx={{ '& .MuiTypography-root': { fontSize: '14px' } }} />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        ) : ''}
                                        placement="right"
                                        componentsProps={{ tooltip: { sx: { backgroundColor: 'background.paper', color: 'text.primary', boxShadow: 1, border: '1px solid', borderColor: 'divider', p: 0 } } }}
                                    >
                                        <ListItem disablePadding>
                                            <NavItem
                                                isActive={pathname === item.href}
                                                collapsed={collapsed}
                                                onClick={() => {
                                                    if (item.submenu && item.submenu.length > 0 && !collapsed) {
                                                        handleToggleExpand(item.text);
                                                    } else if (!item.submenu || item.submenu.length === 0) {
                                                        router.push(item.href);
                                                        isMobile && handleDrawerToggle?.();
                                                    }
                                                }}
                                            >
                                                <ListItemIcon>{item.icon}</ListItemIcon>
                                                {!collapsed && <ListItemText primary={item.text} />}
                                                {!collapsed && item.submenu && item.submenu.length > 0 && <ExpandMore sx={{ fontSize: 16, color: 'text.secondary', transform: expandedItems[item.text] ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.3s' }} />}
                                            </NavItem>
                                        </ListItem>
                                    </Tooltip>
                                    {item.submenu && item.submenu.length > 0 && !collapsed && (
                                        <Collapse in={expandedItems[item.text]} timeout="auto" unmountOnExit>
                                            {item.submenu.map((subItem) => (
                                                <ListItem key={subItem.text} disablePadding sx={{ pl: 4 }}>
                                                    <NavItem
                                                        isActive={pathname === subItem.href}
                                                        onClick={() => { router.push(subItem.href); isMobile && handleDrawerToggle?.(); }}
                                                    >
                                                        <ListItemText primary={subItem.text} />
                                                    </NavItem>
                                                </ListItem>
                                            ))}
                                        </Collapse>
                                    )}
                                </Box>
                            ))}
                        </Box>
                    ))}
                </NavList>
            </SimpleBar>
        </SidebarContainer>
    );
}
