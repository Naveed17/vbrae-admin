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
  {
    action: 'custom-fields',
    component: dynamic(() => import('./rows/customFieldRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'coupons',
    component: dynamic(() => import('./rows/couponRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'pages',
    component: dynamic(() => import('./rows/pagesRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'blog-posts',
    component: dynamic(() => import('./rows/blogPostsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'blog-categories',
    component: dynamic(() => import('./rows/blogCategoryRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'countries',
    component: dynamic(() => import('./rows/countriesRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'states',
    component: dynamic(() => import('./rows/statesRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'cities',
    component: dynamic(() => import('./rows/citiesRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'transactions-membership',
    component: dynamic(() => import('./rows/transactionsMembershipRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'shop-opening-requests',
    component: dynamic(() => import('./rows/shopOpeningRequestsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'shop-opening-requests',
    component: dynamic(() => import('./rows/shopOpeningRequestsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'administrators',
    component: dynamic(() => import('./rows/administratorsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'vendors',
    component: dynamic(() => import('./rows/vendorsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'members',
    component: dynamic(() => import('./rows/membersRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'verification',
    component: dynamic(() => import('./rows/verificationRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'white-list',
    component: dynamic(() => import('./rows/whiteListRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'block-device',
    component: dynamic(() => import('./rows/blockDeviceRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'roles-permissions',
    component: dynamic(() => import('./rows/rolesPermissionsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'knowledge-base',
    component: dynamic(() => import('./rows/knowledgeBaseRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'support-tickets',
    component: dynamic(() => import('./rows/supportTicketsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'contact-messages',
    component: dynamic(() => import('./rows/contactMessagesRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'reviews',
    component: dynamic(() => import('./rows/reviewsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'comments',
    component: dynamic(() => import('./rows/commentsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'blog-comments',
    component: dynamic(() => import('./rows/blogCommentsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'abuse-reports',
    component: dynamic(() => import('./rows/abuseReportsRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'user-newsletter',
    component: dynamic(() => import('./rows/userNewsletterRow').then((mod) => mod), {
      ssr: false,
    }),
  },
  {
    action: 'subscribers-newsletter',
    component: dynamic(() => import('./rows/subscribersNewsletterRow').then((mod) => mod), {
      ssr: false,
    }),
  },
];

export default rowsData;
