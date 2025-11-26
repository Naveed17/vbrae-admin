import ArrowDown from './icons/arrowDown';
export default function Select(theme) {
  const body2Size = theme.typography.body2.fontSize;

  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: ArrowDown,
      },
      styleOverrides: {
        root: {
          background: theme.palette.background.netural,
          color: theme.palette.text.secondary,

          svg: {
            width: 16,
            height: 16,
            marginRight: 8,
            color: theme.palette.text.secondary,
          },
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: body2Size,
          // ⬇️ this makes sure your font-size wins against default injected CSS
          '&.MuiButtonBase-root': {
            fontSize: `${body2Size} !important`,
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: body2Size,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontSize: body2Size,
        },
      },
    },

    MuiFilledInput: {
      styleOverrides: {
        input: {
          fontSize: body2Size,
        },
      },
    },
  };
}
