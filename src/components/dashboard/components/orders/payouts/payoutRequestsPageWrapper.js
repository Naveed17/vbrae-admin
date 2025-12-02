'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Select, MenuItem, Box, Typography, Button, Drawer, Tabs, Tab } from '@mui/material';
import React, { useState } from 'react';
import AddPayoutForm from './AddPayoutForm';

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'user_id', label: 'User Id', align: 'left', sortable: true },
    { id: 'user', label: 'User', align: 'left', sortable: true },
    { id: 'withdrawal_method', label: 'Withdrawal Method', align: 'left', sortable: true },
    { id: 'withdrawal_amount', label: 'Withdrawal Amount', align: 'left', sortable: true },
    { id: 'status', label: 'Status', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'options', label: 'Options', align: 'center', sortable: false },
];

const rows = [
    {
        id: '169',
        user_id: '14084',
        user: {
            name: 'Software Specialist',
            avatar: 'https://vbrae.com/uploads/profile/avatar_689f43f0c8fad8-69762620-62230812.webp',
            username: 'lgd-soft'
        },
        withdrawal_method: 'Bitcoin (BTC)',
        withdrawal_amount: '$264.04',
        status: 'Pending',
        date: '2025-12-01 / 10:01',
        btc_address: '38XgUbi1Qsbkcjkc6yu1LHPsDoAvFf1hzJ',
    },
    {
        id: '168',
        user_id: '12345',
        user: {
            name: 'John Developer',
            avatar: 'https://cdn.vbrae.com/images/assets/img/user.png',
            username: 'john-dev'
        },
        withdrawal_method: 'PayPal',
        withdrawal_amount: '$150.00',
        status: 'Completed',
        date: '2025-11-30 / 14:22',
        btc_address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    },
    {
        id: '167',
        user_id: '67890',
        user: {
            name: 'Jane Designer',
            avatar: 'https://cdn.vbrae.com/images/assets/img/user.png',
            username: 'jane-designer'
        },
        withdrawal_method: 'Bank Transfer',
        withdrawal_amount: '$320.50',
        status: 'Pending',
        date: '2025-11-29 / 09:15',
        btc_address: '3J98t1WpEZ73CNmYviecrnyiWrnqRhWNLy',
    },
];

function PayoutRequestsPageWrapper() {
    const [status, setStatus] = useState('');
    const [search, setSearch] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('pending');
    const [filteredRows, setFilteredRows] = useState(rows.filter(r => r.status === 'Pending'));

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
        const statusFilter = newValue === 'pending' ? 'Pending' : 'Completed';
        const filtered = rows.filter(item => item.status === statusFilter);
        setFilteredRows(filtered);
    };

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'view') {
            console.log('View payout details:', data);
        } else if (action === 'complete') {
            console.log('Complete payout:', data);
        } else if (action === 'delete') {
            console.log('Delete payout:', data);
        }
    };

    const handlePayoutSubmit = (formData) => {
        console.log('Payout form submitted:', formData);
        // Handle form submission here
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Payout Requests"
                    action={
                        <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={() => setDrawerOpen(true)}
                            sx={{ fontSize: '10px', py: 0.25, px: 1 }}
                        >
                            Add Payout
                        </Button>
                    }
                />
                <Tabs value={activeTab} onChange={handleTabChange} sx={{ px: 2, borderBottom: 1, borderColor: 'divider' }}>
                    <Tab label="Pending Payout" value="pending" />
                    <Tab label="Complete Payout" value="completed" />
                </Tabs>
                <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center', borderBottom: 1, borderColor: 'divider', flexWrap: 'wrap' }}>
                    <Select
                        size='normal'
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
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                    </Select>

                    <TextField
                        size='normal'
                        placeholder='Search payout requests...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{ flex: 1, minWidth: 200 }}
                    />
                    <Button size='normal' variant="contained" color="primary" onClick={() => console.log('Filter applied')}>
                        Filter
                    </Button>
                </Box>
                <CardContent>
                    <EnhanceTable
                        handleTableAction={handleTableActions}
                        rows={filteredRows}
                        from="payout_requests"
                        columns={columns}
                        activeTab={activeTab}
                    />
                </CardContent>
            </Card>

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Box sx={{ width: 450, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ p: 3, pb: 0 }}>
                        <Typography variant="h6">
                            Add Payout
                        </Typography>
                    </Box>

                    <AddPayoutForm
                        onClose={() => setDrawerOpen(false)}
                        onSubmit={handlePayoutSubmit}
                    />
                </Box>
            </Drawer>
        </Container>
    );
}

export default PayoutRequestsPageWrapper;
