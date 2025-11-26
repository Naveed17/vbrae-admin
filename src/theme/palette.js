'use client';
import { alpha } from '@mui/material/styles';
// ----------------------------------------------------------------------

export function createGradient(color1, color2) {
  return `linear-gradient(145.42deg, ${color1}, ${color2} 120%)`;
}

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#F5F5F5',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};

const PRIMARY = {
  light: '#139efaff',
  main: '#1095ED',
  dark: '#0f4285',
  contrastText: '#fff',
};
const SECONDARY = {
  light: '#3a4a63',
  main: '#1B2435',
  dark: '#06203D',
  contrastText: '#A5AECC',
};
const INFO = {
  light: '#85D3F0',
  main: '#33B5E6',
  dark: '#2991B8',
  contrastText: '#fff',
};
const SUCCESS = {
  light: '#7DDAC0',
  main: '#43E283',
  dark: '#1E9A78',
  contrastText: '#fff',
};
const WARNING = {
  light: '#FAB833',
  main: '#F9A600',
  dark: '#C78500',
  contrastText: '#fff',
};
const ERROR = {
  light: '#E2435F',
  main: '#E5342F',
  dark: '#B72A26',
  contrastText: '#fff',
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.main, SECONDARY.main),
  info: createGradient(INFO.light, INFO.main),
  background: 'radial-gradient( #DBEAFF, #F3DFE0,#DBCFF3,#DBEAFF)',
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: {
    ...PRIMARY,
  },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,

  chart: CHART_COLORS,
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[400],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    divider: GREY[400],
    text: { primary: GREY[900], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: GREY[100], default: GREY[0], neutral: GREY[200] },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    divider: '#273147',
    text: { primary: '#ffffffff', secondary: '#A5AECC', disabled: '#555F7F' },
    background: { paper: '#161D2E', default: '#0D1021', neutral: '#1B2435' },
    action: { active: GREY[500], ...COMMON.action },
  },
};

export default palette;
