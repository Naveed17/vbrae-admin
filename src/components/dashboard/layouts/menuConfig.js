import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentIcon from '@mui/icons-material/Payment';
import StarIcon from '@mui/icons-material/Star';
import MailIcon from '@mui/icons-material/Mail';
import HelpIcon from '@mui/icons-material/Help';
import CommentIcon from '@mui/icons-material/Comment';
import NavigationIcon from '@mui/icons-material/Navigation';
import ImageIcon from '@mui/icons-material/Image';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CategoryIcon from '@mui/icons-material/Category';
import BuildIcon from '@mui/icons-material/Build';
import DescriptionIcon from '@mui/icons-material/Description';
import ArticleIcon from '@mui/icons-material/Article';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GroupIcon from '@mui/icons-material/Group';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import CachedIcon from '@mui/icons-material/Cached';
import SearchIcon from '@mui/icons-material/Search';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RateReviewIcon from '@mui/icons-material/RateReview';
import FlagIcon from '@mui/icons-material/Flag';
import NewsletterIcon from '@mui/icons-material/Newspaper';
import TuneIcon from '@mui/icons-material/Tune';
import PercentIcon from '@mui/icons-material/Percent';
import PaletteIcon from '@mui/icons-material/Palette';
import StorefrontIcon from '@mui/icons-material/Storefront';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

export const menuSections = [
    {
        title: 'NAVIGATION',
        items: [
            { text: 'Home', href: '/admin', icon: <DashboardIcon /> },
            { text: 'Navigation', href: '/admin/navigation', icon: <NavigationIcon /> },
            { text: 'Slider', href: '/admin/slider', icon: <ImageIcon /> },
            { text: 'Homepage Manager', href: '/admin/homepage-manager', icon: <SettingsIcon /> },
        ]
    },
    {
        title: 'ORDERS',
        items: [
            {
                text: 'Orders',
                href: '#',
                icon: <ShoppingCartIcon />,
                submenu: [
                    { text: 'Orders', href: '/admin/orders' },
                    { text: 'Vat Orders', href: '/admin/orders/vat-orders' },
                    { text: 'Transactions', href: '/admin/orders/transactions' },
                    { text: 'Bank Transfers Notifications', href: '/admin/orders/bank-transfers' },
                    { text: 'Invoices', href: '/admin/orders/invoices' },
                ]
            },
            {
                text: 'Earnings',
                href: '#',
                icon: <MonetizationOnIcon />,
                submenu: [
                    { text: 'Earnings', href: '/admin/earnings' },
                    { text: 'Seller Balances', href: '/admin/seller-balances' },
                ]
            },
            {
                text: 'Payouts',
                href: '#',
                icon: <AccountBalanceIcon />,
                submenu: [
                    { text: 'Payout Requests', href: '/admin/payout-requests' },
                    { text: 'Payout Settings', href: '/admin/payout-settings' },
                ]
            },
            { text: 'Resolution Center', href: '/admin/resolution-center', icon: <HelpIcon /> },
        ]
    },
    {
        title: 'PRODUCTS',
        items: [
            {
                text: 'Products',
                href: '#',
                icon: <InventoryIcon />,
                submenu: [
                    { text: 'Products', href: '/admin/products' },
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
                icon: <DescriptionIcon />,
                submenu: [
                    { text: 'List', href: '/admin/list-template' },
                    { text: 'IGDB', href: '/admin/igdb' },
                    { text: 'Add Manually', href: '/admin/add-manually' },
                    { text: 'Request', href: '/admin/request-template' },
                ]
            },
            { text: 'Kinguin', href: '/admin/kinguin', icon: <LocalOfferIcon /> },
            {
                text: 'Featured Products',
                href: '#',
                icon: <StarIcon />,
                submenu: [
                    { text: 'Products', href: '/admin/featured-products' },
                    { text: 'Pricing', href: '/admin/featured-products-pricing' },
                    { text: 'Transactions', href: '/admin/featured-products-transactions' },
                ]
            },
            { text: 'Quote Requests', href: '/admin/quote-requests', icon: <MailIcon /> },
            {
                text: 'Categories',
                href: '#',
                icon: <CategoryIcon />,
                submenu: [
                    { text: 'Categories', href: '/admin/categories' },
                    { text: 'Add Category', href: '/admin/categories/add-category' },
                    { text: 'Bulk Category Upload', href: '/admin/bulk-category-upload' },
                ]
            },
            {
                text: 'Custom Fields',
                href: '#',
                icon: <BuildIcon />,
                submenu: [
                    { text: 'Add Custom Field', href: '/admin/add-custom-field' },
                    { text: 'Custom Fields', href: '/admin/custom-fields' },
                ]
            },
            { text: 'Coupon', href: '/admin/coupons', icon: <PercentIcon /> },
        ]
    },
    {
        title: 'CONTENT',
        items: [
            {
                text: 'Pages',
                href: '#',
                icon: <AssignmentIcon />,
                submenu: [
                    { text: 'Add Page', href: '/admin/add-page' },
                    { text: 'Pages', href: '/admin/pages' },
                ]
            },
            {
                text: 'Blog',
                href: '#',
                icon: <ArticleIcon />,
                submenu: [
                    { text: 'Add Post', href: '/admin/blog-add-post' },
                    { text: 'Posts', href: '/admin/blog-posts' },
                    { text: 'Categories', href: '/admin/blog-categories' },
                ]
            },
            {
                text: 'Location',
                href: '#',
                icon: <LocationOnIcon />,
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
                icon: <CardGiftcardIcon />,
                submenu: [
                    { text: 'Membership Plans', href: '/admin/membership-plans' },
                    { text: 'Transactions', href: '/admin/transactions-membership' },
                ]
            },
            { text: 'Shop Opening Requests', href: '/admin/shop-opening-requests', icon: <StorefrontIcon /> },
            {
                text: 'Users',
                href: '#',
                icon: <GroupIcon />,
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
            { text: 'Roles & Permissions', href: '/admin/roles-permissions', icon: <SecurityIcon /> },
        ]
    },
    {
        title: 'MANAGEMENT TOOLS',
        items: [
            {
                text: 'Help Center',
                href: '#',
                icon: <HelpIcon />,
                submenu: [
                    { text: 'Knowledge Base', href: '/admin/knowledge-base' },
                    { text: 'Support Tickets', href: '/admin/support-tickets' },
                ]
            },
            { text: 'Storage', href: '/admin/storage', icon: <StorageIcon /> },
            { text: 'Cache System', href: '/admin/cache-system', icon: <CachedIcon /> },
            { text: 'Seo Tools', href: '/admin/seo-tools', icon: <SearchIcon /> },
            { text: 'Ad Spaces', href: '/admin/ad-spaces', icon: <AdsClickIcon /> },
            { text: 'Contact Messages', href: '/admin/contact-messages', icon: <MailOutlineIcon /> },
            { text: 'Reviews', href: '/admin/reviews', icon: <RateReviewIcon /> },
            {
                text: 'Comments',
                href: '#',
                icon: <CommentIcon />,
                submenu: [
                    { text: 'Product Comments', href: '/admin/pending-product-comments' },
                    { text: 'Blog Comments', href: '/admin/pending-blog-comments' },
                ]
            },
            { text: 'Abuse Reports', href: '/admin/abuse-reports', icon: <FlagIcon /> },
            { text: 'Newsletter', href: '/admin/newsletter', icon: <NewsletterIcon /> },
        ]
    },
    {
        title: 'SETTINGS',
        items: [
            { text: 'Activation Guide', href: '/admin/activation', icon: <AssignmentIcon /> },
            { text: 'Preferences', href: '/admin/preferences', icon: <TuneIcon /> },
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
            { text: 'Product Settings', href: '/admin/product-settings', icon: <InventoryIcon /> },
            { text: 'Vat Settings', href: '/admin/vat', icon: <LocalOfferIcon /> },
            { text: 'Service Fees Settings', href: '/admin/fee', icon: <PaymentIcon /> },
            {
                text: 'Payment Settings',
                href: '#',
                icon: <CurrencyExchangeIcon />,
                submenu: [
                    { text: 'Payouts Service Fees', href: '/admin/withdraw-fee' },
                    { text: 'Payment Settings', href: '/admin/payment-settings' },
                    { text: 'Currency Settings', href: '/admin/currency-settings' },
                ]
            },
            {
                text: 'Visual Settings',
                href: '#',
                icon: <PaletteIcon />,
                submenu: [
                    { text: 'Visual Settings', href: '/admin/visual-settings' },
                    { text: 'Font Settings', href: '/admin/font-settings' },
                ]
            },
            {
                text: 'System Settings',
                href: '#',
                icon: <BuildIcon />,
                submenu: [
                    { text: 'System Settings', href: '/admin/system-settings' },
                    { text: 'Route Settings', href: '/admin/route-settings' },
                ]
            },
        ]
    }
];
