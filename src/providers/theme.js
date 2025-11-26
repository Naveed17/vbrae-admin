'use client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from '@/redux';
import { getTheme } from '@/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';
import GlobalStyles from '@/theme/global-styles';
import { initializeSettings } from '@/redux/slices/settings';
import { setShippingFee } from '@/redux/slices/product';

export default function MuiThemeProvider({
  children,
  fontFamilies,
  palette,
  fontFamily,
  baseCurrency,
  preset,
  cloudName,
  shippingFee,
}) {
  const { themeMode, direction, rate, currency, isInitialized } = useSelector(
    (state) => state.settings
  );
  const [resolvedMode, setResolvedMode] = useState(
    themeMode !== 'system' ? themeMode : 'light'
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (themeMode === 'system') {
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      setResolvedMode(media.matches ? 'dark' : 'light');

      const listener = (e) => setResolvedMode(e.matches ? 'dark' : 'light');
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    } else {
      setResolvedMode(themeMode);
      return undefined;
    }
  }, [themeMode]);

  // Memoize the cache for RTL or LTR
  const styleCache = useMemo(() => {
    return createCache({
      key: direction === 'rtl' ? 'muirtl' : 'css',
      stylisPlugins: direction === 'rtl' ? [rtlPlugin] : [],
    });
  }, [direction]);

  // Memoize theme based on dependencies
  const theme = useMemo(() => {
    const selectedFont = fontFamilies[fontFamily] || fontFamilies.inter;
    return getTheme(resolvedMode, direction, selectedFont, palette);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedMode, direction, fontFamily, palette]);

  return (
    <AppRouterCacheProvider>
      <EmotionCacheProvider value={styleCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main dir={direction}>{children}</main>
          <GlobalStyles />
        </ThemeProvider>
      </EmotionCacheProvider>
    </AppRouterCacheProvider>
  );
}
