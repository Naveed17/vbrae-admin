'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Box, Button, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react';


const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'orderId', label: 'Order', align: 'left', sortable: true },
    { id: 'purchaseCode', label: 'Purchase Code', align: 'left', sortable: true },
    { id: 'seller', label: 'Seller', align: 'left', sortable: true },
    { id: 'buyer', label: 'Buyer', align: 'left', sortable: true },
    { id: 'total', label: 'Total', align: 'left', sortable: true },
    { id: 'currency', label: 'Currency', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: 18593,
        orderId: 90052,
        purchaseCode: '692c8385b430a0-54393479-396111-896335',
        seller: { name: 'BigBoyGames', avatar: 'https://vbrae.com/uploads/profile/avatar_6482e80cb487a8-28075183-53573051.webp' },
        buyer: { name: '150611Jack', avatar: 'https://cdn.vbrae.com/images/assets/img/user.png' },
        total: '€39.99',
        currency: 'EUR',
        date: '2025-11-30 / 18:48',
    },
];

function DigitalSalesPageWrapper() {
    const [search, setSearch] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [filteredRows, setFilteredRows] = useState(rows);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
    };

    const handleFilter = () => {
        const filtered = rows.filter(item =>
            item.purchaseCode.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredRows(filtered);
    };

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'delete') {
            console.log('Delete digital sale:', data);
        }
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Digital Sales" />
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
                        placeholder='Search by Purchase Code...'
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
                        from="digital_sales"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default DigitalSalesPageWrapper;
