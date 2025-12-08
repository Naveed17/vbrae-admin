'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Box, Typography, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import React, { useState } from 'react';

const columns = [
    { id: 'id', label: '#', align: 'left', sortable: true },
    { id: 'username', label: 'Username', align: 'left', sortable: true },
    { id: 'title', label: 'Title', align: 'left', sortable: true },
    { id: 'regionalLimit', label: 'Regional Limit', align: 'left', sortable: true },
    { id: 'platform', label: 'Platform', align: 'left', sortable: true },
    { id: 'language', label: 'Language', align: 'left', sortable: true },
    { id: 'steamAppId', label: 'Steam App ID', align: 'left', sortable: true },
    { id: 'additionalInfo', label: 'Additional Info', align: 'left', sortable: false },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'status', label: 'Status', align: 'center', sortable: true },
    { id: 'actions', label: 'Action', align: 'center', sortable: false },
];

const rows = [
    {
        id: '1',
        username: 'Software Specialist',
        title: 'DriverMax Pro 16 DE/AT/CH Key (2 Years / 1 PC)',
        regionalLimit: 'Other',
        platform: 'SHOP THE BEST SOFTWARE KEYS',
        language: 'English, German',
        steamAppId: '',
        additionalInfo: 'please add this information to the product description page.: https://files.fm/f/4ngaa6nk7x',
        date: '2025-11-30 10:19:41',
        status: 'Waiting',
    },
];

function RequestTemplatePageWrapper() {
    const [search, setSearch] = useState('');
    const [filteredRows, setFilteredRows] = useState(rows);

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'approve') {
            console.log('Approve:', data);
        } else if (action === 'reject') {
            console.log('Reject:', data);
        }
    };

    const handleFilter = () => {
        const filtered = rows.filter(item =>
            item.username.toLowerCase().includes(search.toLowerCase()) ||
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.platform.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredRows(filtered);
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Request Templates" />
                <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'flex-end', borderBottom: 1, borderColor: 'divider' }}>
                    <Box sx={{ flex: 1, minWidth: 200 }}>
                        <TextField
                            size='small'
                            placeholder='Search requests...'
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
                        from="request-template"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default RequestTemplatePageWrapper;
