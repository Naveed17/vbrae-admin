import React, { useState } from 'react';
import {
  Box,
  Typography,
  Link,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Stack,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Pinterest,

} from '@mui/icons-material';
import ThemeMode from '@/components/theme-mode';
import GlobeIcon from '@/theme/overrides/icons/globe';
import CurrencyIcon from '@/theme/overrides/icons/currency';

const Footer = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const [languageAnchor, setLanguageAnchor] = useState(null);
  const [currencyAnchor, setCurrencyAnchor] = useState(null);

  const handleLanguageClick = (event) => {
    setLanguageAnchor(event.currentTarget);
  };

  const handleCurrencyClick = (event) => {
    setCurrencyAnchor(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchor(null);
  };

  const handleCurrencyClose = () => {
    setCurrencyAnchor(null);
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.default',
        borderTop: 1,
        borderColor: 'divider',
        px: 3,
        py: { xs: 5, md: 1 },
        mt: { xs: 5, md: 0 },
        width: '100%',
        ...(!isMobile && { position: 'fixed', bottom: 0, zIndex: 99 }),
      }}
    >
      <Stack
        direction={{ xs: 'column-reverse', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        flexWrap={{ xs: 'nowrap', md: 'wrap' }}
        gap={2}
      >
        {/* Left Section */}
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems="center"
          spacing={3}
          flexWrap="wrap"
        >
          <Typography variant="caption" color="text.secondary">
            © 2024 VBRAE
          </Typography>

          <Stack direction="row" spacing={2}>
            <Link href="#" variant="caption" color="text.secondary" underline="hover">
              Privacy
            </Link>
            <Link href="#" variant="caption" color="text.secondary" underline="hover">
              Terms
            </Link>
            <Link href="#" variant="caption" color="text.secondary" underline="hover">
              Refund
            </Link>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Box component="img" src="/stars-5.svg" alt="stars" sx={{ height: 20 }} />
            <Typography variant="caption" color="text.secondary">
              4.3
            </Typography>
          </Stack>
        </Stack>

        {/* Center Section - Payment Methods */}
        <Box component="img" src="/cards.svg" alt="card" sx={{ height: 20 }} />

        {/* Right Section */}
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={{ width: { xs: '100%', md: 'auto' } }}
          alignItems="center"
          spacing={2}
        >
          {/* Social Media Icons */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              button: {
                color: 'text.secondary',
              },
            }}
          >
            <IconButton size="small">
              <Facebook fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <Twitter fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <LinkedIn fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <Pinterest fontSize="small" />
            </IconButton>
          </Stack>

          {/* Language Selector */}
          <Stack direction="row" spacing={2} width={{ xs: 1, md: 'auto' }}>
            <Button
              onClick={handleLanguageClick}
              startIcon={<GlobeIcon />}

              variant="outlined"
              color="secondary"
              size="small"
              sx={{ minWidth: 'auto', whiteSpace: 'nowrap' }}
              fullWidth
            >
              English (US)
            </Button>
            <Menu
              anchorEl={languageAnchor}
              open={Boolean(languageAnchor)}
              onClose={handleLanguageClose}
            >
              <MenuItem onClick={handleLanguageClose}>English (US)</MenuItem>
              <MenuItem onClick={handleLanguageClose}>English (UK)</MenuItem>
              <MenuItem onClick={handleLanguageClose}>Spanish</MenuItem>
              <MenuItem onClick={handleLanguageClose}>French</MenuItem>
            </Menu>

            {/* Currency Selector */}
            <Button
              onClick={handleCurrencyClick}
              startIcon={<CurrencyIcon />}
              variant="outlined"
              color="secondary"
              size="small"
              sx={{ minWidth: 'auto' }}
              fullWidth
            >
              $USD
            </Button>
            <Menu
              anchorEl={currencyAnchor}
              open={Boolean(currencyAnchor)}
              onClose={handleCurrencyClose}
            >
              <MenuItem onClick={handleCurrencyClose}>$USD</MenuItem>
              <MenuItem onClick={handleCurrencyClose}>€EUR</MenuItem>
              <MenuItem onClick={handleCurrencyClose}>£GBP</MenuItem>
              <MenuItem onClick={handleCurrencyClose}>¥JPY</MenuItem>
            </Menu>
            <ThemeMode />

          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
