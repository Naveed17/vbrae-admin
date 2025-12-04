'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';

const columns = [
    { id: 'checkbox', label: '', align: 'left', sortable: false },
    { id: 'id', label: 'ID', align: 'left', sortable: true },
    { id: 'product', label: 'Product', align: 'left', sortable: true },
    { id: 'product_type', label: 'Product Type', align: 'left', sortable: true },
    { id: 'stock', label: 'Stock', align: 'left', sortable: true },
    { id: 'page_views', label: 'Page Views', align: 'left', sortable: true },
    { id: 'link', label: 'Link', align: 'left', sortable: false },
    { id: 'google_merchant', label: 'Google Merchant', align: 'left', sortable: true },
];

const rows = [
    {
        id: '2787',
        checkbox: false,
        product: 'Microsoft Windows Server 2025 Datacenter Unlimited CPU Cores Key GLOBAL',
        product_type: 'Digital',
        stock: 'In Stock',
        page_views: '256',
        link: 'https://vbrae.com/microsoft-windows-server-2025-datacenter-unlimited-cpu-cores-key-global-2787',
        google_merchant: 'Not Available',
    },
];

function GoogleShopInsertPageWrapper() {
    const [search, setSearch] = useState('');
    const [filteredRows, setFilteredRows] = useState(rows);

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'view_details') {
            console.log('View details:', data);
        } else if (action === 'delete') {
            console.log('Delete:', data);
        }
    };

    const handleFilter = () => {
        const filtered = rows.filter(item =>
            item.product.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredRows(filtered);
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Products to Insert into Google Merchant" />
                <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'flex-end', borderBottom: 1, borderColor: 'divider' }}>
                    <Box sx={{ flex: 1, minWidth: 200 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Search</Typography>
                        <TextField
                            size='small'
                            placeholder='Search products...'
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
                        rows={filteredRows}
                        from="google-shop-insert"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default GoogleShopInsertPageWrapper;
