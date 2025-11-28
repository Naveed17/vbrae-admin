import dynamic from 'next/dynamic';

const rowsData = [
  {
    action: 'orders',
    component: dynamic(() => import('./rows/ordersRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'transactions',
    component: dynamic(() => import('./rows/transactionsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'latestTransactions',
    component: dynamic(() => import('./rows/latestTransactionsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'latestOrders',
    component: dynamic(() => import('./rows/latestOrdersRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'latestProducts',
    component: dynamic(() => import('./rows/latestProductsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'slider',
    component: dynamic(() => import('./rows/sliderRow').then((mod) => mod), {
      ssr: false,
    }),
  },
];

export default rowsData;
