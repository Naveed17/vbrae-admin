'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, Button, Box, TextField, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react';

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'name', label: 'Name', align: 'left', sortable: true },
    { id: 'email', label: 'Email', align: 'left', sortable: true },
    { id: 'message', label: 'Message', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: '755',
        name: 'Evan',
        email: 'abq923@gmail.com',
        message: 'Fake scam key',
        date: '2025-12-17 / 10:47',
    },
];

function ContactMessagesPageWrapper() {
    const [search, setSearch] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [filteredRows, setFilteredRows] = useState(rows);

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'delete') {
            console.log('Delete message:', data);
        }
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleFilter = () => {
        const filtered = rows.filter(item =>
            item.id.toString().includes(search) ||
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.email.toLowerCase().includes(search.toLowerCase()) ||
            item.message.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredRows(filtered);
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Contact Messages" />
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
                    <TextField
                        size="small"
                        placeholder="Search by name, email, or message..."
                        value={search}
                        onChange={handleSearch}
                        sx={{ flex: 1, minWidth: 200 }}
                    />
                    <Button size="small" variant="contained" color="primary" onClick={handleFilter}>
                        Filter
                    </Button>
                </Box>
                <CardContent>
                    <EnhanceTable
                        handleTableAction={handleTableActions}
                        rows={filteredRows}
                        from="contact-messages"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default ContactMessagesPageWrapper;
