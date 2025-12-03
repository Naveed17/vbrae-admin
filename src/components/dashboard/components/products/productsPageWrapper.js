'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Select, MenuItem, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const columns = [
    { id: 'checkbox', label: '', align: 'left', sortable: false },
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'product', label: 'Product', align: 'left', sortable: true },
    { id: 'sku', label: 'SKU', align: 'left', sortable: true },
    { id: 'product_type', label: 'Product Type', align: 'left', sortable: true },
    { id: 'category', label: 'Category', align: 'left', sortable: true },
    { id: 'user', label: 'User', align: 'left', sortable: true },
    { id: 'stock', label: 'Stock', align: 'left', sortable: true },
    { id: 'kyc', label: 'KYC', align: 'left', sortable: true },
    { id: 'page_views', label: 'Page Views', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const categories = [
    { id: '135', name: 'PSN' },
    { id: '134', name: 'XBOX' },
    { id: '139', name: 'GIFT CARDS' },
    { id: '146', name: 'NINTENDO' },
    { id: '158', name: 'PC GAMING' },
    { id: '168', name: 'SHOP THE BEST SOFTWARE KEYS' },
    { id: '175', name: 'VR GAMES' },
    { id: '169', name: 'WEEKLY DEALS' },
];

const rows = [
    {
        id: '2806',
        checkbox: false,
        product: {
            title: 'Ashampoo Privacy Inspector 2 Activation Key (Lifetime / 1 PC)',
            image: 'https://cdn.vbrae.com/images/uploads/images/202512/92350c_35708.webp',
            url: 'https://vbrae.com/ashampoo-privacy-inspector-2-activation-key-lifetime-1-pc'
        },
        sku: '',
        product_type: 'Digital',
        category: 'SHOP THE BEST SOFTWARE KEYS',
        user: { name: 'Freaky', url: 'https://vbrae.com/profile/freaky' },
        stock: 14,
        kyc: 'Disabled',
        page_views: 70,
        date: '2025-12-01 / 20:37',
    },
    {
        id: '2805',
        checkbox: false,
        product: {
            title: 'Windows 11 Pro License Key',
            image: 'https://cdn.vbrae.com/images/uploads/images/202512/92350c_35708.webp',
            url: 'https://vbrae.com/windows-11-pro-license-key'
        },
        sku: 'WIN11-PRO',
        product_type: 'Digital',
        category: 'SHOP THE BEST SOFTWARE KEYS',
        user: { name: 'TechDealer', url: 'https://vbrae.com/profile/techdealer' },
        stock: 25,
        kyc: 'Enabled',
        page_views: 150,
        date: '2025-11-30 / 15:22',
    },
    {
        id: '2804',
        checkbox: false,
        product: {
            title: 'PlayStation 5 Gift Card $50',
            image: 'https://cdn.vbrae.com/images/uploads/images/202512/92350c_35708.webp',
            url: 'https://vbrae.com/playstation-5-gift-card-50'
        },
        sku: 'PS5-50',
        product_type: 'Digital',
        category: 'GIFT CARDS',
        user: { name: 'GamerHub', url: 'https://vbrae.com/profile/gamerhub' },
        stock: 8,
        kyc: 'Enabled',
        page_views: 200,
        date: '2025-11-29 / 10:15',
    },
    {
        id: '2803',
        checkbox: false,
        product: {
            title: 'Xbox Game Pass Ultimate 3 Months',
            image: 'https://cdn.vbrae.com/images/uploads/images/202512/92350c_35708.webp',
            url: 'https://vbrae.com/xbox-game-pass-ultimate-3-months'
        },
        sku: 'XBOX-GP3M',
        product_type: 'Digital',
        category: 'XBOX',
        user: { name: 'ConsoleKing', url: 'https://vbrae.com/profile/consoleking' },
        stock: 0,
        kyc: 'Disabled',
        page_views: 85,
        date: '2025-11-28 / 14:45',
    },
    {
        id: '2802',
        checkbox: false,
        product: {
            title: 'Adobe Creative Cloud Annual Subscription',
            image: 'https://cdn.vbrae.com/images/uploads/images/202512/92350c_35708.webp',
            url: 'https://vbrae.com/adobe-creative-cloud-annual'
        },
        sku: 'ADOBE-CC-YEAR',
        product_type: 'Digital',
        category: 'SHOP THE BEST SOFTWARE KEYS',
        user: { name: 'DesignPro', url: 'https://vbrae.com/profile/designpro' },
        stock: 32,
        kyc: 'Enabled',
        page_views: 320,
        date: '2025-11-27 / 09:30',
    },
];

function ProductsPageWrapper() {
    const router = useRouter();
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const [productType, setProductType] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [stock, setStock] = useState('');
    const [kinguin, setKinguin] = useState('');
    const [search, setSearch] = useState('');

    const handleTableActions = (prop) => {
        console.log(prop);
        const { action, data } = prop;
        if (action === 'view_details') {
            router.push(`/admin/products/${data.id}`);
        } else if (action === 'edit') {
            router.push(`/admin/products/edit/${data.id}`);
        } else if (action === 'delete') {
            console.log('Delete product:', data);
        }
    };

    const handleFilter = () => {
        console.log('Filter:', { rowsPerPage, productType, category, subcategory, stock, kinguin, search });
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Products" />
                <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'flex-end', flexWrap: 'wrap', borderBottom: 1, borderColor: 'divider' }}>
                    <Box sx={{ minWidth: 80 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Show</Typography>
                        <Select
                            size='small'
                            value={rowsPerPage}
                            onChange={(e) => setRowsPerPage(e.target.value)}
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                        </Select>
                    </Box>

                    <Box sx={{ minWidth: 150 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Product Type</Typography>
                        <Select
                            size='small'
                            value={productType}
                            onChange={(e) => setProductType(e.target.value)}
                            displayEmpty
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="physical">Physical</MenuItem>
                            <MenuItem value="digital">Digital</MenuItem>
                        </Select>
                    </Box>

                    <Box sx={{ minWidth: 150 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Category</Typography>
                        <Select
                            size='small'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            displayEmpty
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value="">All</MenuItem>
                            {categories.map((cat) => (
                                <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
                            ))}
                        </Select>
                    </Box>

                    <Box sx={{ minWidth: 150 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Subcategory</Typography>
                        <Select
                            size='small'
                            value={subcategory}
                            onChange={(e) => setSubcategory(e.target.value)}
                            displayEmpty
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value="">All</MenuItem>
                        </Select>
                    </Box>

                    <Box sx={{ minWidth: 150 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Stock</Typography>
                        <Select
                            size='small'
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            displayEmpty
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="in_stock">In Stock</MenuItem>
                            <MenuItem value="out_of_stock">Out of Stock</MenuItem>
                        </Select>
                    </Box>

                    <Box sx={{ minWidth: 150 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Kinguin</Typography>
                        <Select
                            size='small'
                            value={kinguin}
                            onChange={(e) => setKinguin(e.target.value)}
                            displayEmpty
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="not_found">Not Found</MenuItem>
                        </Select>
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 200 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Search</Typography>
                        <TextField
                            size='small'
                            placeholder='Search'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            sx={{ width: '100%' }}
                        />
                    </Box>

                    <Button size='small' variant="contained" color="primary" onClick={handleFilter} sx={{ height: 40 }}>
                        Filter
                    </Button>
                </Box>
                <CardContent>
                    <EnhanceTable
                        handleTableAction={handleTableActions}
                        rows={rows}
                        from="products"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default ProductsPageWrapper;
