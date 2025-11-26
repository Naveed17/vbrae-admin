'use client';
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import Sidebar from './sidebar';
import Footer from './Footer';
import Header from './header';
import MobileHeader from './mobileHeader';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack>
      {isMobile ? <MobileHeader /> : pathname !== '/dashboard' && <Header />}

      <Box sx={{ display: 'flex' }}>
        {!isMobile && <Sidebar />}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            paddingLeft: isMobile ? 0 : '250px',
            width: '100%',
            maxWidth: '100%',
            overflow: 'hidden',
            py: isMobile ? 1 : 2.5,
          }}
        >
          {children}
        </Box>
      </Box>
      <Footer />
    </Stack>
  );
}
