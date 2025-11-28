'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Select, MenuItem, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const columns = [
    { id: 'order', label: 'Order', align: 'left', sortable: true },
    { id: 'buyer', label: 'Buyer', align: 'left', sortable: true },
    { id: 'total', label: 'Total', align: 'left', sortable: true },
    { id: 'currency', label: 'Currency', align: 'left', sortable: true },
    { id: 'status', label: 'Status', align: 'left', sortable: true },
    { id: 'payment_status', label: 'Payment Status', align: 'left', sortable: true },
    { id: 'updated', label: 'Updated', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: '80005',
        order: '#90005',
        buyer: { name: 'Nohxz', avatar: 'https://cdn.vbrae.com/images/assets/img/user.png' },
        total: '£23.02',
        currency: 'GBP',
        status: 'Completed',
        payment_status: 'Payment Received',
        updated: '59 minutes ago',
        date: '2025-11-28 / 12:29',
    },
    {
        id: '80002',
        order: '#90002',
        buyer: { name: 'Ivor Kronus', avatar: 'https://vbrae.com/uploads/profile/avatar_69297963dd8759-45681048-76222661.webp' },
        total: '$2.31',
        currency: 'USD',
        status: 'Completed',
        payment_status: 'Payment Received',
        updated: '2 hours ago',
        date: '2025-11-28 / 11:36',
    },
    {
        id: '80000',
        order: '#90000',
        buyer: { name: 'Adarsh S', avatar: 'https://vbrae.com/uploads/profile/avatar_6929620b1cfaa6-49185343-13361072.webp' },
        total: '$8.61',
        currency: 'USD',
        status: 'Cancelled',
        payment_status: 'Cancelled',
        updated: '3 hours ago',
        date: '2025-11-28 / 09:54',
    },
    {
        id: '79999',
        order: '#89999',
        buyer: { name: 'Nohxz', avatar: 'https://cdn.vbrae.com/images/assets/img/user.png' },
        total: '£24.21',
        currency: 'GBP',
        status: 'Cancelled',
        payment_status: 'Cancelled',
        updated: '3 hours ago',
        date: '2025-11-28 / 09:40',
    },
    {
        id: '79998',
        order: '#89998',
        buyer: { name: 'Craig Robinson', avatar: 'https://cdn.vbrae.com/images/assets/img/user.png' },
        total: '$17.03',
        currency: 'USD',
        status: 'Completed',
        payment_status: 'Payment Received',
        updated: '5 hours ago',
        date: '2025-11-28 / 08:25',
    },
];

function OrdersPageWrapper() {
    const router = useRouter();
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [status, setStatus] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');
    const [search, setSearch] = useState('');

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'view') {
            router.push(`/admin/orders/${data.id}`);
        } else if (action === 'cancel') {
            console.log('Cancel order:', data);
        } else if (action === 'delete') {
            console.log('Delete order:', data);
        }
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Orders" />
                <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center', borderBottom: 1, borderColor: 'divider' }}>
                    <Select
                        size='small'
                        value={rowsPerPage}
                        onChange={(e) => setRowsPerPage(e.target.value)}
                        sx={{ width: 100 }}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                    </Select>
                    <Select
                        size='small'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        displayEmpty
                        sx={{ width: 200 }}
                        renderValue={(selected) => (
                            <Typography
                                variant="body2"
                                component="span"
                                sx={{ fontWeight: 600, color: 'text.secondary' }}
                            >
                                {selected || 'Status'}
                            </Typography>
                        )}
                    >
                        <MenuItem value="">All Status</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                        <MenuItem value="Cancelled">Cancelled</MenuItem>
                        <MenuItem value="Refunded">Refunded</MenuItem>
                    </Select>
                    <Select
                        size='small'
                        value={paymentStatus}
                        onChange={(e) => setPaymentStatus(e.target.value)}
                        displayEmpty
                        sx={{ width: 200 }}
                        renderValue={(selected) => (
                            <Typography
                                variant="body2"
                                component="span"
                                sx={{ fontWeight: 600, color: 'text.secondary' }}
                            >
                                {selected || 'Payment Status'}
                            </Typography>
                        )}
                    >
                        <MenuItem value="">All Status</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                        <MenuItem value="Cancelled">Cancelled</MenuItem>
                        <MenuItem value="Refunded">Refunded</MenuItem>
                    </Select>
                    <TextField
                        size='small'
                        placeholder='Search orders...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{ flex: 1 }}
                    />
                    <Button size='small' variant="contained" color="primary" onClick={() => console.log('Search:', search)}>
                        Filter
                    </Button>
                </Box>
                <CardContent>
                    <EnhanceTable
                        handleTableAction={handleTableActions}
                        rows={rows}
                        from="orders"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default OrdersPageWrapper;