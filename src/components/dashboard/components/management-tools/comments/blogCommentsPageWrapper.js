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
        id: '59',
        name: 'jeetendra kumar',
        email: 'shagun1569@gmail.com',
        comment: 'i am not a robot',
        url: 'https://vbrae.com/blog/gaming/gaming-news-and-blogs-your-guide-to-the-best-video-game-websites',
        ipAddress: '49.43.161.88',
        date: '2025-09-08 / 19:08',
        status: 'pending',
    },
];

function BlogCommentsPageWrapper() {
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
        if (action === 'approve') {
            console.log('Approve comment:', data);
        } else if (action === 'delete') {
            console.log('Delete comment:', data);
        }
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Blog Comments" />
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
                        from="blog-comments"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default BlogCommentsPageWrapper;
