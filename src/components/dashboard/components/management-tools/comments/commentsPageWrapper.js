'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Box, Button, Select, MenuItem, Tabs, Tab } from '@mui/material';
import React, { useState } from 'react';

const columns = [
    { id: 'checkbox', label: '', align: 'center', sortable: false },
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'name', label: 'Name', align: 'left', sortable: true },
    { id: 'email', label: 'Email', align: 'left', sortable: true },
    { id: 'comment', label: 'Comment', align: 'left', sortable: true },
    { id: 'url', label: 'URL', align: 'left', sortable: true },
    { id: 'ipAddress', label: 'Ip Address', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: '28',
        name: 'iBeast',
        email: 'albieborley69@gmail.com',
        comment: 'saved me 50 pound 100% trusted seller would recommend to anyone cheapest guy out here',
        url: 'https://vbrae.com/dead-island-2-xbox-series-x-s-xbox-one-account-access-uk-only-671',
        ipAddress: '185.192.70.32',
        date: '2023-07-29 / 14:44',
        status: 'pending',
    },
];

function ProductCommentsPageWrapper() {
    const [search, setSearch] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [activeTab, setActiveTab] = useState('pending');
    const [filteredRows, setFilteredRows] = useState(rows.filter(r => r.status === 'pending'));

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
        const filtered = rows.filter(item => item.status === newValue);
        setFilteredRows(filtered);
    };

    const handleFilter = () => {
        const filtered = rows.filter(item =>
            item.status === activeTab && (
                item.id.toString().includes(search) ||
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.email.toLowerCase().includes(search.toLowerCase()) ||
                item.comment.toLowerCase().includes(search.toLowerCase())
            )
        );
        setFilteredRows(filtered);
    };

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'delete') {
            console.log('Delete comment:', data);
        }
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Product Comments" />
                <Tabs value={activeTab} onChange={handleTabChange} sx={{ px: 2, borderBottom: 1, borderColor: 'divider' }}>
                    <Tab label="Pending Comments" value="pending" />
                    <Tab label="Approved Comments" value="approved" />
                </Tabs>
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
                        placeholder="Search by id, name, email, or comment..."
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
                        from="comments"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default ProductCommentsPageWrapper;
