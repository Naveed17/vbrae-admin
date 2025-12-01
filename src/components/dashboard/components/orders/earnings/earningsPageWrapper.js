'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Box, Button, Select, MenuItem, Tabs, Tab } from '@mui/material';
import React, { useState } from 'react';

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'orderId', label: 'Order', align: 'left', sortable: true },
    { id: 'user', label: 'User', align: 'left', sortable: true },
    { id: 'total', label: 'Total', align: 'left', sortable: true },
    { id: 'commissionRate', label: 'Commission Rate', align: 'left', sortable: true },
    { id: 'earnedAmount', label: 'Earned Amount', align: 'left', sortable: true },
    { id: 'orderDate', label: 'Order Date', align: 'left', sortable: true },
    { id: 'releasedDate', label: 'Released Date', align: 'left', sortable: true },
    { id: 'status', label: 'Status', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: 16964,
        orderId: 90052,
        user: { name: 'BigBoyGames' },
        total: '£6.69',
        commissionRate: '7%',
        earnedAmount: '£6.22',
        orderDate: '2025-11-30 / 18:49',
        releasedDate: '2025-12-05',
        status: 'Pending',
    },
    {
        id: 16963,
        orderId: 90051,
        user: { name: 'TestUser' },
        total: '£10.00',
        commissionRate: '5%',
        earnedAmount: '£9.50',
        orderDate: '2025-11-29 / 10:00',
        releasedDate: '2025-12-04',
        status: 'Released',
    },
];

function EarningsPageWrapper() {
    const [search, setSearch] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [activeTab, setActiveTab] = useState('pending');
    const [filteredRows, setFilteredRows] = useState(rows.filter(r => r.status === 'Pending'));

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
    };

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
        const statusFilter = newValue === 'pending' ? 'Pending' : 'Released';
        const filtered = rows.filter(item => item.status === statusFilter);
        setFilteredRows(filtered);
    };

    const handleFilter = () => {
        const statusFilter = activeTab === 'pending' ? 'Pending' : 'Released';
        const filtered = rows.filter(item =>
            item.status === statusFilter && (
                item.orderId.toString().includes(search) || 
                item.user.name.toLowerCase().includes(search.toLowerCase())
            )
        );
        setFilteredRows(filtered);
    };

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'delete') {
            console.log('Delete earning:', data);
        } else if (action === 'release') {
            console.log('Release earning:', data);
        }
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Earnings" />
                <Tabs value={activeTab} onChange={handleTabChange} sx={{ px: 2, borderBottom: 1, borderColor: 'divider' }}>
                    <Tab label="Pending Earnings" value="pending" />
                    <Tab label="Released Earnings" value="released" />
                </Tabs>
                <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center', borderBottom: 1, borderColor: 'divider', flexWrap: 'wrap' }}>
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
                    <TextField
                        size='small'
                        placeholder='Search by Order or User...'
                        value={search}
                        onChange={handleSearch}
                        sx={{ flex: 1, minWidth: 200 }}
                    />
                    <Button size='small' variant="contained" color="primary" onClick={handleFilter}>
                        Filter
                    </Button>
                </Box>
                <CardContent>
                    <EnhanceTable
                        handleTableAction={handleTableActions}
                        rows={filteredRows}
                        from="earnings"
                        columns={columns}
                        activeTab={activeTab}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default EarningsPageWrapper;
