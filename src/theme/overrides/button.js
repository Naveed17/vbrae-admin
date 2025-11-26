import { alpha } from '@mui/material';
export default function Button(theme) {
  return {
    MuiButton: {
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            height: '50px',
            color: theme.palette.grey[100],
            whiteSpace: 'nowrap',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: 600,
            border: 'none',
            borderRadius: '10px',
            padding: '10px 20px',
            background: 'linear-gradient(253.67deg, #1095ed 3.78%, #e2435f 81.12%)',
            '& svg': {
              fontSize: '20px'
            },
            '&:hover': {
              background: 'linear-gradient(253.67deg, #1095ed 3.78%, #e2435f 81.12%)',
              opacity: 0.9
            }
          }
        }
      ],
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
          '&.MuiButton-sizeMedium': {
            height: 40,
          },
          '&.MuiButton-sizeSmall': {
            height: 30,
          },
          '&.Mui-disabled': {
            color: theme.palette.text.disabled,
            border: `2px solid ${alpha(theme.palette.text.primary, 0.12)}`,
            backgroundColor: theme.palette.secondary.man,
            cursor: 'not-allowed',
          },
        },
        sizeLarge: {
          height: 50,
          fontSize: 14,
          whiteSpace: 'noWrap'
        },
        containedInherit: {
          color: theme.palette.text.primary,
          borderColor: theme.palette.secondary.main,
          '&:hover': {
            backgroundColor: theme.palette.background.defualt,
          },
        },
        containedPrimary: {
          background: `linear-gradient(170.35deg, ${theme.palette.primary.main} 7.27%, ${theme.palette.primary.dark} 92.73%)`,
          border: `1px solid ${theme.palette.primary.light}`,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            background: `linear-gradient(170.35deg, ${theme.palette.primary.dark} 7.27%, ${theme.palette.primary.darker || theme.palette.primary.dark} 92.73%)`,
          },
        },
        outlinedSecondary: {
          background: theme.palette.background.default,
          color: theme.palette.text.secondary,
          borderColor: theme.palette.divider,
        },
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
