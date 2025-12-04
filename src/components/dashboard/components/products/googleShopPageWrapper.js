'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Box, Typography, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import React, { useState } from 'react';

const columns = [
    { id: 'checkbox', label: '', align: 'left', sortable: false },
    { id: 'id', label: '#', align: 'left', sortable: true },
    { id: 'product', label: 'Product', align: 'left', sortable: true },
    { id: 'description', label: 'Description', align: 'left', sortable: true },
    { id: 'channel', label: 'Channel', align: 'left', sortable: true },
    { id: 'stock', label: 'Stock', align: 'left', sortable: true },
    { id: 'status', label: 'Status', align: 'left', sortable: true },
];

const rows = [
    {
        id: '1',
        checkbox: false,
        product: 'Battlefield 6 Xbox Series X|S Account Access',
        description: 'Battlefield 6 on Xbox Series X|S – Complete Guide to Launch, Editions, and Gameplay PLEASE NOTE* This is ACCOUNT ACCESS to play online using your own profile using a step by step method. *THIS IS ...',
        channel: 'online',
        stock: 'In Stock',
        status: 'active',
    },
    {
        id: '2',
        checkbox: false,
        product: 'Call of Duty Modern Warfare 2',
        description: 'Latest Call of Duty game for next-gen consoles',
        channel: 'online',
        stock: 'In Stock',
        status: 'active',
    },
];

function GoogleShopPageWrapper() {
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
            item.product.toLowerCase().includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredRows(filtered);
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Here below is product from Google Shop API" action={<Button variant="contained" color="primary" startIcon={<AddIcon />}>Add Product to Google Merchant</Button>} />
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
                        from="google-shop"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default GoogleShopPageWrapper;
