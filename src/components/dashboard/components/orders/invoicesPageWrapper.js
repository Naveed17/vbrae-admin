'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Select, MenuItem, Box, Button } from '@mui/material';
import React, { useState } from 'react';

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'order_number', label: 'Order Number', align: 'left', sortable: true },
    { id: 'buyer', label: 'Buyer', align: 'left', sortable: true },
    { id: 'first_name', label: 'First Name', align: 'left', sortable: true },
    { id: 'last_name', label: 'Last Name', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: '78860',
        order_number: '90066',
        buyer: 'Jim',
        first_name: 'Jim',
        last_name: '',
        date: '2025-12-01 / 07:11',
    },
    {
        id: '78859',
        order_number: '90065',
        buyer: 'John Doe',
        first_name: 'John',
        last_name: 'Doe',
        date: '2025-11-30 / 15:45',
    },
    {
        id: '78858',
        order_number: '90064',
        buyer: 'Jane Smith',
        first_name: 'Jane',
        last_name: 'Smith',
        date: '2025-11-29 / 10:20',
    },
];

function InvoicesPageWrapper() {
    const [show, setShow] = useState(10);
    const [search, setSearch] = useState('');

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'view') {
            window.open(`/invoice/${data.order_number}`, '_blank');
        }
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Invoices" />
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
                        placeholder='Search invoices...'
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
                        from="invoices"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default InvoicesPageWrapper;
