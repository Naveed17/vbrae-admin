'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Box, Button, Select, MenuItem, Drawer, Typography } from '@mui/material';
import React, { useState } from 'react';

const columns = [
    { id: 'userId', label: 'User Id', align: 'left', sortable: true },
    { id: 'user', label: 'User', align: 'left', sortable: true },
    { id: 'totalSales', label: 'Number of total sales', align: 'left', sortable: true },
    { id: 'balance', label: 'Balance', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: 1,
        userId: 16640,
        user: { name: '6 Hours', avatar: 'https://vbrae.com/uploads/profile/avatar_692d68c4736103-76787056-62996466.webp' },
        totalSales: 0,
        balance: '$0',
    },
];

function SellerBalancesPageWrapper() {
    const [search, setSearch] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [filteredRows, setFilteredRows] = useState(rows);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [formData, setFormData] = useState({ totalSales: 0, balance: '$0' });

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
    };

    const handleFilter = () => {
        const filtered = rows.filter(item =>
            item.userId.toString().includes(search) ||
            item.user.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredRows(filtered);
    };

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'edit') {
            setSelectedRow(data);
            setFormData({ totalSales: data.totalSales, balance: data.balance });
            setDrawerOpen(true);
        }
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
        setSelectedRow(null);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Update seller balance:', { ...selectedRow, ...formData });
        handleDrawerClose();
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Seller Balances" />
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
                        placeholder='Search by User Id or Name...'
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
                        from="seller_balances"
                        columns={columns}
                    />
                </CardContent>
            </Card>

            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose} sx={{ '& .MuiDrawer-paper': { width: 400, display: 'flex', flexDirection: 'column' } }}>
                <Box sx={{ p: 3, flex: 1, overflowY: 'auto' }}>
                    <Typography variant="h6" sx={{ mb: 3 }}>Update Seller Balance</Typography>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            <strong>User Id:</strong> {selectedRow?.userId}
                        </Typography>
                        <Typography variant="body2">
                            <strong>Username:</strong> {selectedRow?.user?.name}
                        </Typography>
                    </Box>

                    <TextField
                        fullWidth
                        size="normal"
                        placeholder="Number of total sales"
                        name="totalSales"
                        type="number"
                        value={formData.totalSales}
                        onChange={handleFormChange}
                        sx={{ mb: 2 }}
                        inputProps={{ min: 0 }}
                    />

                    <TextField
                        fullWidth
                        size='normal'
                        placeholder="Balance"
                        name="balance"
                        value={formData.balance}
                        onChange={handleFormChange}
                    />
                </Box>

                <Box sx={{ p: 3, borderTop: 1, borderColor: 'divider', display: 'flex', gap: 1 }}>
                    <Button variant="contained" color="primary" onClick={handleFormSubmit} fullWidth>
                        Save Changes
                    </Button>
                    <Button variant="outlined" onClick={handleDrawerClose} fullWidth>
                        Cancel
                    </Button>
                </Box>
            </Drawer>
        </Container>
    );
}

export default SellerBalancesPageWrapper;
