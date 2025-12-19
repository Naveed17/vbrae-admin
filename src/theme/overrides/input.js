export default function Input(theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.neutral,
          fontSize: theme.typography.body2.fontSize,
          '&.MuiInputBase-sizeSmall': {
            height: 30,
          },
          '&.MuiInputBase-sizeNormal': {
            height: 40,
          },
          '&.MuiInputBase-sizeLarge': {
            height: 50,
          },
          '&.Mui-disabled': {
            '& svg': { color: theme.palette.text.disabled },
          },
        },
        input: {
          '&::placeholder': {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottomColor: theme.palette.grey[500_56],
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey[500_12],
          '&:hover': {
            backgroundColor: theme.palette.grey[500_16],
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette.action.focus,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        underline: {
          '&:before': {
            borderBottomColor: theme.palette.grey[500_56],
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.divider,
          },
        },
      },
    },
  };
}
