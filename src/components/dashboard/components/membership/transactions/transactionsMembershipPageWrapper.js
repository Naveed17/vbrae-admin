'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Select, MenuItem, Box, Button } from '@mui/material';
import React, { useState } from 'react';

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'user', label: 'User', align: 'left', sortable: true },
    { id: 'membership_plan', label: 'Membership Plan', align: 'left', sortable: true },
    { id: 'payment_method', label: 'Payment Method', align: 'left', sortable: true },
    { id: 'payment_id', label: 'Payment Id', align: 'left', sortable: true },
    { id: 'payment_amount', label: 'Payment Amount', align: 'left', sortable: true },
    { id: 'payment_status', label: 'Payment Status', align: 'left', sortable: true },
    { id: 'ip_address', label: 'Ip Address', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: '1001',
        user: 'john_user',
        membership_plan: 'Premium',
        payment_method: 'stripe',
        payment_id: 'pi_1001',
        payment_amount: '$29.99',
        payment_status: 'Completed',
        ip_address: '192.168.1.100',
        date: '2025-11-30 / 14:30',
    },
    {
        id: '1002',
        user: 'jane_member',
        membership_plan: 'Gold',
        payment_method: 'paypal',
        payment_id: 'pp_1002',
        payment_amount: '$19.99',
        payment_status: 'Completed',
        ip_address: '10.0.0.50',
        date: '2025-11-30 / 13:15',
    },
    {
        id: '1003',
        user: 'alex_pro',
        membership_plan: 'Platinum',
        payment_method: 'reepay',
        payment_id: 'rp_1003',
        payment_amount: '$49.99',
        payment_status: 'Completed',
        ip_address: '172.16.0.1',
        date: '2025-11-30 / 12:00',
    },
];

function TransactionsMembershipPageWrapper() {
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(15);

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'delete') {
            console.log('Delete transaction:', data);
        }
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Transactions Membership" />
                <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center', borderBottom: 1, borderColor: 'divider', flexWrap: 'wrap' }}>
                    <Select
                        size='small'
                        value={show}
                        onChange={(e) => setShow(e.target.value)}
                        sx={{ width: 100 }}
                    >
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={60}>60</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                    <TextField
                        size='small'
                        placeholder='Search'
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
                        from="transactions-membership"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default TransactionsMembershipPageWrapper;
