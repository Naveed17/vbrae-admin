'use client';
// mui
import { GlobalStyles as GlobalThemeStyles } from '@mui/material';
// ----------------------------------------------------------------------

export default function GlobalStyles() {
  return (
    <GlobalThemeStyles
      styles={{
        '*': {
          textDecoration: 'none',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },

        html: {
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          width: '100%',
          height: '100%',
        },

        '#__next': {
          width: '100%',
          height: '100%',
        },
        a: {
          textDecoration: 'none',
          transition: 'color 0.3s ease',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        '*::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '*::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '*::-webkit-scrollbar-thumb': {
          background: '#6B7A99',
          borderRadius: '10px',
        },
        '*::-webkit-scrollbar-thumb:hover': {
          background: '#7B8AA9',
        },
        '.swiper-pagination-bullet': {
          background: '#7B8AA9',
          opacity: 1,
        },
        '.swiper-pagination-bullet-active': {
          background: 'white ',
        },
        // textarea: {
        //   '&::-webkit-input-placeholder': {
        //     color: theme.palette.text.disabled
        //   },
        //   '&::-moz-placeholder': {
        //     opacity: 1,
        //     color: theme.palette.text.disabled
        //   },å
        //   '&:-ms-input-placeholder': {
        //     color: theme.palette.text.disabled
        //   },
        //   '&::placeholder': {
        //     color: theme.palette.text.disabled
        //   }
        // },
      }}
    />
  );
}
