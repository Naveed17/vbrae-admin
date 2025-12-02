'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, styled, CardHeader, Container, TextField, Select, MenuItem, Box, Typography, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
const StyledTextField = styled(TextField)(() => ({
    '.MuiInputAdornment-root svg': {
        width: 16,
        height: 16,
    },
}));
const columns = [
    { id: 'order', label: 'Order', align: 'left', sortable: true },
    { id: 'buyer', label: 'Buyer', align: 'left', sortable: true },
    { id: 'status', label: 'Status', align: 'left', sortable: true },
    { id: 'payment_status', label: 'Payment Status', align: 'left', sortable: true },
    { id: 'updated', label: 'Updated', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'country', label: 'Country', align: 'left', sortable: true },
    { id: 'currency', label: 'Currency', align: 'left', sortable: true },
    { id: 'vat', label: 'VAT', align: 'left', sortable: true },
    { id: 'total', label: 'Total', align: 'left', sortable: true },
];

const rows = [
    {
        id: '80043',
        order: '#90043',
        buyer: { name: 'spokenice', avatar: 'https://vbrae.com/uploads/profile/avatar_692c140b589b74-21185221-27668957.webp' },
        status: 'Completed',
        payment_status: 'Payment Received',
        updated: '20 hours ago',
        date: '2025-11-30 / 10:56',
        country: 'Italy',
        currency: 'USD',
        vat: '€0.22',
        total: '€1.93',
    },
    {
        id: '80042',
        order: '#90042',
        buyer: { name: 'John Doe', avatar: 'https://cdn.vbrae.com/images/assets/img/user.png' },
        status: 'Completed',
        payment_status: 'Payment Received',
        updated: '1 day ago',
        date: '2025-11-29 / 14:30',
        country: 'Germany',
        currency: 'EUR',
        vat: '€2.50',
        total: '€15.75',
    },
    {
        id: '80041',
        order: '#90041',
        buyer: { name: 'Jane Smith', avatar: 'https://cdn.vbrae.com/images/assets/img/user.png' },
        status: 'Completed',
        payment_status: 'Payment Received',
        updated: '2 days ago',
        date: '2025-11-28 / 09:15',
        country: 'France',
        currency: 'EUR',
        vat: '€1.80',
        total: '€12.60',
    },
];

function VatOrdersPageWrapper() {
    const router = useRouter();
    const [status, setStatus] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');
    const [month, setMonth] = useState(null);
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

    const calculateTotals = () => {
        const vatTotal = rows.reduce((sum, row) => {
            const vatValue = parseFloat(row.vat.replace(/[^0-9.]/g, ''));
            return sum + vatValue;
        }, 0);

        const totalSum = rows.reduce((sum, row) => {
            const totalValue = parseFloat(row.total.replace(/[^0-9.]/g, ''));
            return sum + totalValue;
        }, 0);

        return {
            vat: `€${vatTotal.toFixed(2)}`,
            total: `€${totalSum.toFixed(2)}`,
        };
    };

    const totals = calculateTotals();

    return (

        <Container maxWidth={false}>
            <Card>
                <CardHeader title="VAT Orders" />
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
                        <MenuItem value="Completed">Completed</MenuItem>
                        <MenuItem value="Cancelled">Cancelled</MenuItem>
                        <MenuItem value="Refunded">Refunded</MenuItem>
                    </Select>
                    <Select
                        size='normal'
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
                        <MenuItem value="Payment Received">Payment Received</MenuItem>
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="Cancelled">Cancelled</MenuItem>
                    </Select>

                    <DatePicker
                        views={['month', 'year']}
                        value={month}
                        onChange={(newValue) => setMonth(newValue)}
                        sx={{
                            '& .MuiSvgIcon-root': {
                                width: 16,
                                height: 16,
                            },
                        }}
                        renderInput={(params) => (
                            <StyledTextField
                                {...params}
                                size="small"
                                placeholder="Month"
                                sx={{
                                    width: 150,
                                    '& .MuiInputBase-root': {
                                        height: 30,
                                    },

                                    '& .MuiInputAdornment-root svg': {
                                        width: 16,
                                        height: 16,
                                    },

                                }}
                            />
                        )}
                    />


                    <TextField
                        size='normal'
                        placeholder='Search orders...'
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
                        rows={rows}
                        from="vat_orders"
                        columns={columns}
                        totals={totals}
                    />
                </CardContent>
            </Card>
        </Container>

    );
}

export default VatOrdersPageWrapper;
