import React from 'react';
import ReduxProvider from './redux';
import MuiThemeProvider from './theme';
import { Toaster } from 'react-hot-toast';
import QueryClientProvider from './query-client';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import Progress from './progress';
import { LocalizationProvider } from './localization-provider';
const inter = Inter({ subsets: ['latin'], display: 'swap', weight: ['400', '500', '600', '700'] })
// const inter = localFont({
//   src: [
//     {
//       path: '../../public/fonts/Inter/Inter-Light.ttf',
//       weight: '300',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/Inter/Inter-Regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/Inter/Inter-SemiBold.ttf',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/Inter/Inter-Medium.ttf',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/Inter/Inter-Bold.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/Inter/Inter-ExtraBold.ttf',
//       weight: '800',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/Inter/Inter-Black.ttf',
//       weight: '900',
//       style: 'normal',
//     },
//   ],
//   display: 'swap',
//   //
// });
const figtree = localFont({
  src: [
    {
      path: '../../public/fonts/Figtree/Figtree-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Figtree/Figtree-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Figtree/Figtree-SemiBold.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Figtree/Figtree-Medium.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Figtree/Figtree-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Figtree/Figtree-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Figtree/Figtree-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  //
});

const montserrat = localFont({
  src: [
    {
      path: '../../public/fonts/Montserrat/Montserrat-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat/Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat/Montserrat-SemiBold.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat/Montserrat-Medium.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat/Montserrat-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat/Montserrat-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat/Montserrat-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
});
const openSans = localFont({
  src: [
    {
      path: '../../public/fonts/Open_Sans/OpenSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Open_Sans/OpenSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Open_Sans/OpenSans-SemiBold.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Open_Sans/OpenSans-Medium.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Open_Sans/OpenSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Open_Sans/OpenSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Open_Sans/OpenSans-ExtraBold.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
});
const roboto = localFont({
  src: [
    {
      path: '../../public/fonts/Roboto/Roboto-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-SemiBold.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Medium.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
});
export default function index({
  children,
  isAuth,
  theme,
  baseCurrency,
  cloudName,
  preset,
  shippingFee,
}) {
  return (
    <QueryClientProvider>
      <ReduxProvider>
        <MuiThemeProvider
          baseCurrency={baseCurrency}
          palette={'default'}
          fontFamily={'openSans'}
          fontFamilies={{
            inter,
            figtree,
            montserrat,
            roboto,
            'open-sans': openSans,
          }}>
          <LocalizationProvider>
            <Progress>
              <Toaster position={'top-center'} />
              {children}
            </Progress>
          </LocalizationProvider>
        </MuiThemeProvider>
      </ReduxProvider>
      {/* status live or offline status */}
    </QueryClientProvider>
  );
}
