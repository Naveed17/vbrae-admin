'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Select, MenuItem, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'order', label: 'Order', align: 'left', sortable: true },
    { id: 'user', label: 'User', align: 'left', sortable: true },
    { id: 'receipt', label: 'Receipt', align: 'left', sortable: true },
    { id: 'payment_note', label: 'Payment Note', align: 'left', sortable: true },
    { id: 'status', label: 'Status', align: 'left', sortable: true },
    { id: 'ip_address', label: 'Ip Address', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: '22',
        order: '#10064',
        user: 'Freaky',
        receipt: '',
        payment_note: 'Kek',
        status: 'Pending',
        ip_address: '83.140.124.15',
        date: '2022-07-04 / 20:35',
    },
    {
        id: '21',
        order: '#10063',
        user: 'John Doe',
        receipt: '',
        payment_note: 'Test note',
        status: 'Approved',
        ip_address: '192.168.1.1',
        date: '2022-07-03 / 15:20',
    },
    {
        id: '20',
        order: '#10062',
        user: 'Jane Smith',
        receipt: '',
        payment_note: 'Payment received',
        status: 'Pending',
        ip_address: '10.0.0.1',
        date: '2022-07-02 / 10:45',
    },
];

function BankTransfersPageWrapper() {
    const router = useRouter();
    const [show, setShow] = useState(10);
    const [status, setStatus] = useState('');
    const [search, setSearch] = useState('');

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'decline') {
            console.log('Decline transfer:', data);
        } else if (action === 'delete') {
            console.log('Delete transfer:', data);
        }
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Bank Transfers" />
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
                    <Select
                        size='small'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        displayEmpty
                        sx={{ width: 150 }}
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
                        <MenuItem value="Approved">Approved</MenuItem>
                        <MenuItem value="Declined">Declined</MenuItem>
                    </Select>
                    <TextField
                        size='small'
                        placeholder='Search the order...'
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
                        from="bank_transfers"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default BankTransfersPageWrapper;
