'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Select, MenuItem, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'order', label: 'Order', align: 'left', sortable: true },
    { id: 'payment_method', label: 'Payment Method', align: 'left', sortable: true },
    { id: 'payment_id', label: 'Payment Id', align: 'left', sortable: true },
    { id: 'user', label: 'User', align: 'left', sortable: true },
    { id: 'currency', label: 'Currency', align: 'left', sortable: true },
    { id: 'payment_amount', label: 'Payment Amount', align: 'left', sortable: true },
    { id: 'payment_status', label: 'Payment Status', align: 'left', sortable: true },
    { id: 'ip_address', label: 'Ip Address', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: '13707',
        order: '#90052',
        payment_method: 'reepay',
        payment_id: '80052',
        user: '150611Jack',
        currency: 'GBP',
        payment_amount: '£11.83',
        payment_status: 'Payment Received',
        ip_address: '2a02:c7e:268d:d500:585:7478:71f7:7f5a',
        date: '2025-11-30 / 18:48',
    },
    {
        id: '13706',
        order: '#90051',
        payment_method: 'stripe',
        payment_id: '80051',
        user: 'John Doe',
        currency: 'USD',
        payment_amount: '$15.50',
        payment_status: 'Payment Received',
        ip_address: '192.168.1.1',
        date: '2025-11-30 / 17:30',
    },
    {
        id: '13705',
        order: '#90050',
        payment_method: 'paypal',
        payment_id: '80050',
        user: 'Jane Smith',
        currency: 'EUR',
        payment_amount: '€12.75',
        payment_status: 'Payment Received',
        ip_address: '10.0.0.1',
        date: '2025-11-30 / 16:15',
    },
];

function TransactionsPageWrapper() {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(10);

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'delete') {
            console.log('Delete transaction:', data);
        }
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Transactions" />
                <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center', borderBottom: 1, borderColor: 'divider', flexWrap: 'wrap' }}>
                    <Select
                        size='small'
                        value={show}
                        onChange={(e) => setShow(e.target.value)}
                        sx={{ width: 100 }}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                    </Select>
                    <TextField
                        size='small'
                        placeholder='Search transactions...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{ flex: 1, minWidth: 200 }}
                    />
                    <Button size='small' variant="contained" color="primary" onClick={() => console.log('Filter applied')}>
                        Filter
                    </Button>
                </Box>
                <CardContent>
                    <EnhanceTable
                        handleTableAction={handleTableActions}
                        rows={rows}
                        from="transactions"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default TransactionsPageWrapper;
