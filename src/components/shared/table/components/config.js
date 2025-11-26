import dynamic from 'next/dynamic';

const rowsData = [
  {
    action: 'offers',
    component: dynamic(() => import('./rows/offersRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'my-offers',
    component: dynamic(() => import('./rows/myOfferRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'new-offers',
    component: dynamic(() => import('./rows/newOffersRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'keys-row',
    component: dynamic(() => import('./rows/keysRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'sales-row',
    component: dynamic(() => import('./rows/sales-row').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'orders',
    component: dynamic(() => import('./rows/ordersRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'balance',
    component: dynamic(() => import('./rows/balanceRow').then((mod) => mod), {
      ssr: false,
    }),

  },
  {
    action: 'reviews-row',
    component: dynamic(() => import('./rows/reviewsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'help-center',
    component: dynamic(() => import('./rows/helpCenterRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'earning',
    component: dynamic(() => import('./rows/earningRow').then((mod) => mod), {
      ssr: false,
    }),
  },

];

export default rowsData;
