'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, Button, Box, Select, MenuItem } from '@mui/material';
import React, { useState, useMemo } from 'react';

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'subject', label: 'Subject', align: 'left', sortable: true },
    { id: 'user', label: 'User', align: 'left', sortable: true },
    { id: 'status', label: 'Status', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'updated', label: 'Updated', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const allRows = [
    {
        id: '#701',
        subject: 'Its Ashampoo Burning Studio 2026 Activation Key (Lifetime / 1 PC) Not 26',
        user: 'Software Specialist',
        status: 'Open',
        date: '2025-12-15 / 22:14',
        updated: '7 hours ago',
    },
    {
        id: '#702',
        subject: 'Product listing issue with incorrect description',
        user: 'John Doe',
        status: 'Responded',
        date: '2025-12-14 / 18:30',
        updated: '2 days ago',
    },
    {
        id: '#703',
        subject: 'Payment processing error',
        user: 'Jane Smith',
        status: 'Closed',
        date: '2025-12-13 / 10:15',
        updated: '5 days ago',
    },
    {
        id: '#704',
        subject: 'Account verification pending',
        user: 'Mike Johnson',
        status: 'Open',
        date: '2025-12-15 / 14:45',
        updated: '3 hours ago',
    },
    {
        id: '#705',
        subject: 'Refund request for order #5432',
        user: 'Sarah Williams',
        status: 'Responded',
        date: '2025-12-12 / 09:20',
        updated: '1 week ago',
    },
    {
        id: '#706',
        subject: 'Technical issue with checkout',
        user: 'Tom Brown',
        status: 'Closed',
        date: '2025-12-11 / 16:00',
        updated: '2 weeks ago',
    },
];

const statusCards = [
    { label: 'Open', count: 324, color: 'success', status: 'Open' },
    { label: 'Responded', count: 255, color: 'warning', status: 'Responded' },
    { label: 'Closed', count: 123, color: 'default', status: 'Closed' },
];

function SupportTicketsPageWrapper() {
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [selectedStatus, setSelectedStatus] = useState(null);

    const filteredRows = useMemo(() => {
        if (!selectedStatus) return allRows;
        return allRows.filter(row => row.status === selectedStatus);
    }, [selectedStatus]);

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'show') {
            console.log('Show ticket:', data);
        } else if (action === 'delete') {
            console.log('Delete ticket:', data);
        }
    };

    const handleStatusFilter = (status) => {
        setSelectedStatus(selectedStatus === status ? null : status);
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Support Tickets" />
                <Box sx={{ p: 2, display: 'flex', gap: 2, flexWrap: 'wrap', borderBottom: 1, borderColor: 'divider' }}>
                    {statusCards.map((card) => (
                        <Button
                            key={card.status}
                            variant={selectedStatus === card.status ? 'contained' : 'outlined'}
                            color={card.color}
                            onClick={() => handleStatusFilter(card.status)}
                            sx={{ fontWeight: 600 }}
                        >
                            ({card.count}) {card.label}
                        </Button>
                    ))}
                </Box>
                <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center', borderBottom: 1, borderColor: 'divider', flexWrap: 'wrap' }}>
                    <Select
                        size="small"
                        value={rowsPerPage}
                        onChange={(e) => setRowsPerPage(e.target.value)}
                        sx={{ width: 100 }}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                    </Select>
                </Box>
                <CardContent>
                    <EnhanceTable
                        handleTableAction={handleTableActions}
                        rows={filteredRows}
                        from="support-tickets"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default SupportTicketsPageWrapper;
