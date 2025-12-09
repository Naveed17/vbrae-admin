'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Select, MenuItem, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const columns = [
    { id: 'quote', label: 'Quote', align: 'left', sortable: true },
    { id: 'product', label: 'Product', align: 'left', sortable: true },
    { id: 'seller', label: 'Seller', align: 'left', sortable: true },
    { id: 'buyer', label: 'Buyer', align: 'left', sortable: true },
    { id: 'status', label: 'Status', align: 'left', sortable: true },
    { id: 'sellers_bid', label: "Seller's Bid", align: 'left', sortable: true },
    { id: 'updated', label: 'Updated', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: '1',
        quote: 'QT-2025-001',
        product: { title: 'Windows 11 Pro License', url: 'https://vbrae.com/product/1' },
        seller: { name: 'TechDealer', url: 'https://vbrae.com/profile/techdealer' },
        buyer: { name: 'John Doe', url: 'https://vbrae.com/profile/johndoe' },
        status: 'Pending Quote',
        sellers_bid: '$45.00',
        updated: '2025-11-25 / 10:30',
        date: '2025-11-24 / 14:15',
    },
    {
        id: '2',
        quote: 'QT-2025-002',
        product: { title: 'Adobe Creative Cloud', url: 'https://vbrae.com/product/2' },
        seller: { name: 'DesignPro', url: 'https://vbrae.com/profile/designpro' },
        buyer: { name: 'Jane Smith', url: 'https://vbrae.com/profile/janesmith' },
        status: 'Completed',
        sellers_bid: '$120.00',
        updated: '2025-11-23 / 16:45',
        date: '2025-11-22 / 09:20',
    },
    {
        id: '3',
        quote: 'QT-2025-003',
        product: { title: 'Microsoft Office 365', url: 'https://vbrae.com/product/3' },
        seller: { name: 'SoftwareHub', url: 'https://vbrae.com/profile/softwarehub' },
        buyer: { name: 'Bob Wilson', url: 'https://vbrae.com/profile/bobwilson' },
        status: 'New Quote Request',
        sellers_bid: '$65.00',
        updated: '2025-11-25 / 11:00',
        date: '2025-11-25 / 11:00',
    },
    {
        id: '4',
        quote: 'QT-2025-004',
        product: { title: 'Photoshop 2025', url: 'https://vbrae.com/product/4' },
        seller: { name: 'CreativeStudio', url: 'https://vbrae.com/profile/creativestudio' },
        buyer: { name: 'Alice Brown', url: 'https://vbrae.com/profile/alicebrown' },
        status: 'Rejected Quote',
        sellers_bid: '$150.00',
        updated: '2025-11-24 / 13:30',
        date: '2025-11-23 / 08:00',
    },
];

function QuoteRequestsPageWrapper() {
    const router = useRouter();
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const [status, setStatus] = useState('');
    const [search, setSearch] = useState('');
    const [filteredRows, setFilteredRows] = useState(rows);

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'view_details') {
            router.push(`/admin/quote-requests/${data.id}`);
        }
    };

    const handleFilter = () => {
        let filtered = rows;
        if (status) {
            filtered = filtered.filter(row => row.status.toLowerCase().replace(/\s+/g, '_') === status);
        }
        if (search.trim()) {
            filtered = filtered.filter(row => 
                row.quote.toLowerCase().includes(search.toLowerCase()) || 
                row.product.title.toLowerCase().includes(search.toLowerCase())
            );
        }
        setFilteredRows(filtered);
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Quote Requests" />
                <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'flex-end', flexWrap: 'wrap', borderBottom: 1, borderColor: 'divider' }}>
                    <Box sx={{ minWidth: 80 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Show</Typography>
                        <Select
                            size='small'
                            value={rowsPerPage}
                            onChange={(e) => setRowsPerPage(e.target.value)}
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                        </Select>
                    </Box>

                    <Box sx={{ minWidth: 150 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Status</Typography>
                        <Select
                            size='small'
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            displayEmpty
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="new_quote_request">New Quote Request</MenuItem>
                            <MenuItem value="pending_quote">Pending Quote</MenuItem>
                            <MenuItem value="pending_payment">Pending Payment</MenuItem>
                            <MenuItem value="rejected_quote">Rejected Quote</MenuItem>
                            <MenuItem value="closed">Closed</MenuItem>
                            <MenuItem value="completed">Completed</MenuItem>
                        </Select>
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 200 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Search</Typography>
                        <TextField
                            size='small'
                            placeholder='Search'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            sx={{ width: '100%' }}
                        />
                    </Box>

                    <Button size='small' variant="contained" color="primary" onClick={handleFilter} sx={{ height: 40 }}>
                        Filter
                    </Button>
                </Box>
                <CardContent>
                    <EnhanceTable
                        handleTableAction={handleTableActions}
                        rows={filteredRows}
                        from="quote-requests"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default QuoteRequestsPageWrapper;
