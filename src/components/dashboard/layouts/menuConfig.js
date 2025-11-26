import DashboardIcon from '@/theme/overrides/icons/dashboard';
import GameIcon from '@/theme/overrides/icons/game';
import ListIcon from '@/theme/overrides/icons/list';
import SettingsIcon from '@/theme/overrides/icons/settings';
import CardIcon from '@/theme/overrides/icons/card';
import Star from '@/theme/overrides/icons/star';
import EnvelopIcon from '@/theme/overrides/icons/envlop';
import SupportIcon from '@/theme/overrides/icons/support';
import AddIcon from '@/theme/overrides/icons/add';
import CommentIcon from '@/theme/overrides/icons/comment';

export const menuSections = [
    {
        title: 'NAVIGATION',
        items: [
            { text: 'Home', href: '/admin', icon: <DashboardIcon /> },
            { text: 'Navigation', href: '/admin/navigation', icon: <GameIcon /> },
            { text: 'Slider', href: '/admin/slider', icon: <ListIcon /> },
            { text: 'Homepage Manager', href: '/admin/homepage-manager', icon: <SettingsIcon /> },
        ]
    },
    {
        title: 'ORDERS',
        items: [
            {
                text: 'Orders',
                href: '#',
                icon: <ListIcon />,
                submenu: [
                    { text: 'Orders', href: '/admin/orders' },
                    { text: 'Vat Orders', href: '/admin/vat-orders' },
                    { text: 'Transactions', href: '/admin/transactions' },
                    { text: 'Bank Transfers Notifications', href: '/admin/bank-transfers' },
                    { text: 'Invoices', href: '/admin/invoices' },
                ]
            },
            { text: 'Digital Sales', href: '/admin/digital-sales', icon: <CardIcon /> },
            {
                text: 'Earnings',
                href: '#',
                icon: <Star />,
                submenu: [
                    { text: 'Earnings', href: '/admin/earnings' },
                    { text: 'Seller Balances', href: '/admin/seller-balances' },
                ]
            },
            {
                text: 'Payouts',
                href: '#',
                icon: <EnvelopIcon />,
                submenu: [
                    { text: 'Add Payout', href: '/admin/add-payout' },
                    { text: 'Payout Requests', href: '/admin/payout-requests' },
                    { text: 'Completed Payouts', href: '/admin/completed-payouts' },
                    { text: 'Payout Settings', href: '/admin/payout-settings' },
                ]
            },
            { text: 'Resolution Center', href: '/admin/resolution-center', icon: <SupportIcon /> },
        ]
    },
    {
        title: 'PRODUCTS',
        items: [
            {
                text: 'Products',
                href: '#',
                icon: <GameIcon />,
                submenu: [
                    { text: 'Products', href: '/admin/products' },
                    { text: 'Special Offers', href: '/admin/special-offers' },
                    { text: 'Pending Products', href: '/admin/pending-products' },
                    { text: 'Hidden Products', href: '/admin/hidden-products' },
                    { text: 'Expired Products', href: '/admin/expired-products' },
                    { text: 'Sold Products', href: '/admin/sold-products' },
                    { text: 'Drafts', href: '/admin/drafts' },
                    { text: 'Deleted Products', href: '/admin/deleted-products' },
                    { text: 'Add Product', href: '/admin/add-product' },
                    { text: 'Bulk Product Upload', href: '/admin/bulk-product-upload' },
                    { text: 'Google Shop', href: '/admin/google-shop' },
                ]
            },
            {
                text: 'Template',
                href: '#',
                icon: <CommentIcon />,
                submenu: [
                    { text: 'List', href: '/admin/list-template' },
                    { text: 'IGDB', href: '/admin/igdb' },
                    { text: 'Add Manually', href: '/admin/add-manually' },
                    { text: 'Request', href: '/admin/request-template' },
                ]
            },
            { text: 'Kinguin', href: '/admin/kinguin', icon: <GameIcon /> },
            {
                text: 'Featured Products',
                href: '#',
                icon: <Star />,
                submenu: [
                    { text: 'Products', href: '/admin/featured-products' },
                    { text: 'Pricing', href: '/admin/featured-products-pricing' },
                    { text: 'Transactions', href: '/admin/featured-products-transactions' },
                ]
            },
            { text: 'Quote Requests', href: '/admin/quote-requests', icon: <ListIcon /> },
            {
                text: 'Categories',
                href: '#',
                icon: <SettingsIcon />,
                submenu: [
                    { text: 'Categories', href: '/admin/categories' },
                    { text: 'Add Category', href: '/admin/add-category' },
                    { text: 'Bulk Category Upload', href: '/admin/bulk-category-upload' },
                ]
            },
            {
                text: 'Custom Fields',
                href: '#',
                icon: <AddIcon />,
                submenu: [
                    { text: 'Add Custom Field', href: '/admin/add-custom-field' },
                    { text: 'Custom Fields', href: '/admin/custom-fields' },
                ]
            },
            { text: 'Coupon', href: '/admin/coupons', icon: <ListIcon /> },
        ]
    },
    {
        title: 'CONTENT',
        items: [
            {
                text: 'Pages',
                href: '#',
                icon: <ListIcon />,
                submenu: [
                    { text: 'Add Page', href: '/admin/add-page' },
                    { text: 'Pages', href: '/admin/pages' },
                ]
            },
            {
                text: 'Blog',
                href: '#',
                icon: <CommentIcon />,
                submenu: [
                    { text: 'Add Post', href: '/admin/blog-add-post' },
                    { text: 'Posts', href: '/admin/blog-posts' },
                    { text: 'Categories', href: '/admin/blog-categories' },
                ]
            },
            {
                text: 'Location',
                href: '#',
                icon: <SettingsIcon />,
                submenu: [
                    { text: 'Countries', href: '/admin/countries' },
                    { text: 'Europe Countries', href: '/admin/europe' },
                    { text: 'States', href: '/admin/states' },
                    { text: 'Cities', href: '/admin/cities' },
                ]
            },
        ]
    },
    {
        title: 'MEMBERSHIP',
        items: [
            {
                text: 'Membership',
                href: '#',
                icon: <SettingsIcon />,
                submenu: [
                    { text: 'Membership Plans', href: '/admin/membership-plans' },
                    { text: 'Transactions', href: '/admin/transactions-membership' },
                ]
            },
            { text: 'Shop Opening Requests', href: '/admin/shop-opening-requests', icon: <ListIcon /> },
            {
                text: 'Users',
                href: '#',
                icon: <GameIcon />,
                submenu: [
                    { text: 'Add User', href: '/admin/add-user' },
                    { text: 'Administrators', href: '/admin/administrators' },
                    { text: 'Vendors', href: '/admin/vendors' },
                    { text: 'Members', href: '/admin/members' },
                    { text: 'Verification', href: '/admin/verification' },
                    { text: 'White List', href: '/admin/white-list' },
                    { text: 'Block Device', href: '/admin/block-device' },
                ]
            },
            { text: 'Roles & Permissions', href: '/admin/roles-permissions', icon: <SettingsIcon /> },
        ]
    },
    {
        title: 'MANAGEMENT TOOLS',
        items: [
            {
                text: 'Help Center',
                href: '#',
                icon: <SupportIcon />,
                submenu: [
                    { text: 'Knowledge Base', href: '/admin/knowledge-base' },
                    { text: 'Support Tickets', href: '/admin/support-tickets' },
                ]
            },
            { text: 'Storage', href: '/admin/storage', icon: <CardIcon /> },
            { text: 'Cache System', href: '/admin/cache-system', icon: <ListIcon /> },
            { text: 'Seo Tools', href: '/admin/seo-tools', icon: <SettingsIcon /> },
            { text: 'Ad Spaces', href: '/admin/ad-spaces', icon: <Star /> },
            { text: 'Contact Messages', href: '/admin/contact-messages', icon: <EnvelopIcon /> },
            { text: 'Reviews', href: '/admin/reviews', icon: <CommentIcon /> },
            {
                text: 'Comments',
                href: '#',
                icon: <CommentIcon />,
                submenu: [
                    { text: 'Product Comments', href: '/admin/pending-product-comments' },
                    { text: 'Blog Comments', href: '/admin/pending-blog-comments' },
                ]
            },
            { text: 'Abuse Reports', href: '/admin/abuse-reports', icon: <ListIcon /> },
            { text: 'Newsletter', href: '/admin/newsletter', icon: <EnvelopIcon /> },
        ]
    },
    {
        title: 'SETTINGS',
        items: [
            { text: 'Activation Guide', href: '/admin/activation', icon: <ListIcon /> },
            { text: 'Preferences', href: '/admin/preferences', icon: <SettingsIcon /> },
            {
                text: 'General Settings',
                href: '#',
                icon: <SettingsIcon />,
                submenu: [
                    { text: 'General Settings', href: '/admin/settings' },
                    { text: 'Language Settings', href: '/admin/languages' },
                    { text: 'Email Settings', href: '/admin/email-settings' },
                    { text: 'Social Login', href: '/admin/social-login' },
                ]
            },
            { text: 'Product Settings', href: '/admin/product-settings', icon: <ListIcon /> },
            { text: 'Vat Settings', href: '/admin/vat', icon: <SettingsIcon /> },
            { text: 'Service Fees Settings', href: '/admin/fee', icon: <CardIcon /> },
            {
                text: 'Payment Settings',
                href: '#',
                icon: <CardIcon />,
                submenu: [
                    { text: 'Payouts Service Fees', href: '/admin/withdraw-fee' },
                    { text: 'Payment Settings', href: '/admin/payment-settings' },
                    { text: 'Currency Settings', href: '/admin/currency-settings' },
                ]
            },
            {
                text: 'Visual Settings',
                href: '#',
                icon: <SettingsIcon />,
                submenu: [
                    { text: 'Visual Settings', href: '/admin/visual-settings' },
                    { text: 'Font Settings', href: '/admin/font-settings' },
                ]
            },
            {
                text: 'System Settings',
                href: '#',
                icon: <SettingsIcon />,
                submenu: [
                    { text: 'System Settings', href: '/admin/system-settings' },
                    { text: 'Route Settings', href: '/admin/route-settings' },
                ]
            },
        ]
    }
];
