'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Box, useMediaQuery, useTheme } from '@mui/material';

export default function Logo({ collapsed, href = "/" }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Link
      href={href}
      style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
        <Image
          src={collapsed ? '/logo_sm.png' : '/logo.png'}
          alt='VBRAE Logo'
          width={isMobile ? 120 : collapsed ? 40 : 160}
          height={isMobile ? 40 : 50}
          priority
          style={{ objectFit: 'contain' }}
        />
      </Box>
    </Link>
  );
}
