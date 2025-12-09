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
  {
    action: 'vat_orders',
    component: dynamic(() => import('./rows/vat_ordersRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'bank_transfers',
    component: dynamic(() => import('./rows/bankTransfersRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'invoices',
    component: dynamic(() => import('./rows/invoicesRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'digital_sales',
    component: dynamic(() => import('./rows/digital_salesRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'earnings',
    component: dynamic(() => import('./rows/earningsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'seller_balances',
    component: dynamic(() => import('./rows/seller_balancesRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'payout_requests',
    component: dynamic(() => import('./rows/payout_requestsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'resolution_center',
    component: dynamic(() => import('./rows/resolution_centerRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'products',
    component: dynamic(() => import('./rows/productsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'pending-products',
    component: dynamic(() => import('./rows/pendingProductsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'hidden-products',
    component: dynamic(() => import('./rows/hiddenProductsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'sold-products',
    component: dynamic(() => import('./rows/soldProductsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'drafts',
    component: dynamic(() => import('./rows/draftsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'deleted-products',
    component: dynamic(() => import('./rows/deletedProductsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'google-shop',
    component: dynamic(() => import('./rows/googleShopRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'google-shop-insert',
    component: dynamic(() => import('./rows/googleShopInsertRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'template-list',
    component: dynamic(() => import('./rows/templateListRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'igdb-row',
    component: dynamic(() => import('./rows/igdbRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'request-template',
    component: dynamic(() => import('./rows/requestTemplateRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'kinguin',
    component: dynamic(() => import('./rows/kinguinRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'featured-products',
    component: dynamic(() => import('./rows/featuredProductsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'featured-products-transactions',
    component: dynamic(() => import('./rows/featuredProductsTransactionsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'quote-requests',
    component: dynamic(() => import('./rows/quoteRequestsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
];

export default rowsData;
