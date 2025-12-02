'use client';
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import Sidebar from './sidebar';
import Footer from './Footer';
import Header from './header';
import MobileHeader from './mobileHeader';
import SimpleBar from 'simplebar-react';

export default function DashboardLayout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const sidebarWidth = sidebarCollapsed ? 80 : 250;

  return (
    <Stack>
      {isMobile ? <MobileHeader /> : <Header onSidebarToggle={handleSidebarToggle} sidebarCollapsed={sidebarCollapsed} />}

      <Box sx={{ display: 'flex' }}>
        {!isMobile && <Sidebar collapsed={sidebarCollapsed} />}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            paddingLeft: isMobile ? 0 : `${sidebarWidth}px`,
            width: '100%',
            maxWidth: '100%',
            overflow: 'hidden',
            py: isMobile ? 1 : 2.5,
            transition: 'padding-left 0.3s',
          }}
        >
          <SimpleBar style={{ maxHeight: 'calc(100vh - 150px)' }}>
            {children}
          </SimpleBar>
        </Box>
      </Box>
      <Footer />
    </Stack>
  );
}
