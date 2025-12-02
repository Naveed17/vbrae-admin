'use client';

import { createTheme } from '@mui/material/styles';

// custom theme imports
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import shape from './shape';
import shadows, { customShadows } from './shadows';
import componentsOverride from './overrides';
// import colorPresets from './presets';
// import colorPresets from './presets';
export const getTheme = (mode, direction, selectedFont) => {
  const darkPalette = {
    ...palette.dark,
    primary: {
      ...palette.dark.primary,
    },
    secondary: {
      ...palette.dark.secondary,
    },
  };
  const lightPalette = {
    ...palette.light,
    primary: {
      ...palette.light.primary,
    },
    secondary: {
      ...palette.light.secondary,
    },
  };

  const isDark = mode === 'dark';

  const themeOptions = {
    palette: {
      ...(isDark ? darkPalette : lightPalette),
      mode,
    },
    direction,
    typography: {
      ...typography,
      fontFamily: selectedFont.style.fontFamily,
    },
    shadows: isDark ? shadows.dark : shadows.light,
    customShadows: isDark ? customShadows.dark : customShadows.light,
    shape,
    breakpoints,
  };

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return theme;
};
