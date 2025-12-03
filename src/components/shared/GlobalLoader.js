'use client';
import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';

export default function GlobalLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsVisible(false);
    };

    if (document.readyState === 'complete') {
      setIsVisible(false);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.default',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
