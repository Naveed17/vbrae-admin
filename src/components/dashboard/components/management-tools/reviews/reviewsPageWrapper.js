'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, Button, Box, TextField, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react';

const columns = [
    { id: 'checkbox', label: '', align: 'center', sortable: false },
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'orderId', label: 'Order ID', align: 'left', sortable: true },
    { id: 'buyer', label: 'Buyer', align: 'left', sortable: true },
    { id: 'latestReviews', label: 'Latest Reviews', align: 'left', sortable: true },
    { id: 'product', label: 'Product', align: 'left', sortable: true },
    { id: 'seller', label: 'Seller', align: 'left', sortable: true },
    { id: 'ipAddress', label: 'Ip Address', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: '1',
        orderId: '12345',
        buyer: 'John Doe',
        latestReviews: '5 Stars',
        product: 'Product Name',
        seller: 'Seller Name',
        ipAddress: '192.168.1.1',
        date: '2025-12-17 / 10:47',
    },
];

function ReviewsPageWrapper() {
    const [search, setSearch] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [filteredRows, setFilteredRows] = useState(rows);

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'delete') {
            console.log('Delete review:', data);
        }
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleFilter = () => {
        const filtered = rows.filter(item =>
            item.id.toString().includes(search) ||
            item.orderId.toString().includes(search) ||
            item.buyer.toLowerCase().includes(search.toLowerCase()) ||
            item.product.toLowerCase().includes(search.toLowerCase()) ||
            item.seller.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredRows(filtered);
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Reviews" />
                <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center', borderBottom: 1, borderColor: 'divider', flexWrap: 'wrap' }}>
                    <Select
                        size="small"
                        value={rowsPerPage}
                        onChange={(e) => setRowsPerPage(e.target.value)}
                        sx={{ width: 100 }}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                    </Select>
                    <TextField
                        size="small"
                        placeholder="Search by id, order id, buyer, product, or seller..."
                        value={search}
                        onChange={handleSearch}
                        sx={{ flex: 1, minWidth: 200 }}
                    />
                    <Button size="small" variant="contained" color="primary" onClick={handleFilter}>
                        Filter
                    </Button>
                </Box>
                <CardContent>
                    <EnhanceTable
                        handleTableAction={handleTableActions}
                        rows={filteredRows}
                        from="reviews"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default ReviewsPageWrapper;
