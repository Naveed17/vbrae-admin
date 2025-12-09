'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Select, MenuItem, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'payment_method', label: 'Payment Method', align: 'left', sortable: true },
    { id: 'payment_id', label: 'Payment Id', align: 'left', sortable: true },
    { id: 'user', label: 'User', align: 'left', sortable: true },
    { id: 'product_id', label: 'Product Id', align: 'left', sortable: true },
    { id: 'currency', label: 'Currency', align: 'left', sortable: true },
    { id: 'payment_amount', label: 'Payment Amount', align: 'left', sortable: true },
    { id: 'payment_status', label: 'Payment Status', align: 'left', sortable: true },
    { id: 'purchased_plan', label: 'Purchased Plan', align: 'left', sortable: true },
    { id: 'ip_address', label: 'Ip Address', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: '1001',
        payment_method: 'Credit Card',
        payment_id: 'PAY-2025-001',
        user: { name: 'Freaky', url: 'https://vbrae.com/profile/freaky' },
        product_id: '2787',
        currency: 'USD',
        payment_amount: '$49.99',
        payment_status: 'Completed',
        purchased_plan: 'Premium',
        ip_address: '192.168.1.1',
        date: '2025-11-25 / 14:30',
    },
    {
        id: '1002',
        payment_method: 'PayPal',
        payment_id: 'PAY-2025-002',
        user: { name: 'GameDealer', url: 'https://vbrae.com/profile/gamedealer' },
        product_id: '2786',
        currency: 'EUR',
        payment_amount: '€39.99',
        payment_status: 'Completed',
        purchased_plan: 'Standard',
        ip_address: '192.168.1.2',
        date: '2025-11-24 / 10:15',
    },
    {
        id: '1003',
        payment_method: 'Stripe',
        payment_id: 'PAY-2025-003',
        user: { name: 'SoftwareHub', url: 'https://vbrae.com/profile/softwarehub' },
        product_id: '2785',
        currency: 'GBP',
        payment_amount: '£34.99',
        payment_status: 'Pending',
        purchased_plan: 'Basic',
        ip_address: '192.168.1.3',
        date: '2025-11-23 / 16:45',
    },
    {
        id: '1004',
        payment_method: 'Credit Card',
        payment_id: 'PAY-2025-004',
        user: { name: 'TechDealer', url: 'https://vbrae.com/profile/techdealer' },
        product_id: '2787',
        currency: 'USD',
        payment_amount: '$49.99',
        payment_status: 'Completed',
        purchased_plan: 'Premium',
        ip_address: '192.168.1.4',
        date: '2025-11-22 / 09:20',
    },
];

function FeaturedProductsTransactionsPageWrapper() {
    const router = useRouter();
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const [search, setSearch] = useState('');
    const [filteredRows, setFilteredRows] = useState(rows);

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'view_details') {
            router.push(`/admin/transactions/${data.id}`);
        }
    };

    const handleFilter = () => {
        let filtered = rows;
        if (search.trim()) {
            filtered = filtered.filter(row => row.payment_id.includes(search));
        }
        setFilteredRows(filtered);
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Featured Products Transactions" />
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

                    <Box sx={{ flex: 1, minWidth: 200 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Search</Typography>
                        <TextField
                            size='small'
                            placeholder='Payment Id'
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
                        from="featured-products-transactions"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default FeaturedProductsTransactionsPageWrapper;
