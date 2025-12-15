'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, Box, TextField, Select, MenuItem, Button } from '@mui/material';
import ChangeRoleModal from '../changeRoleModal';
import EditUserDrawer from '../editUserDrawer';
import React, { useState } from 'react';

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'user', label: 'User', align: 'left', sortable: true },
    { id: 'role', label: 'Role', align: 'left', sortable: true },
    { id: 'email', label: 'Email', align: 'left', sortable: true },
    { id: 'status', label: 'Status', align: 'left', sortable: true },
    { id: 'last_seen', label: 'Last seen', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: '15718',
        user: { name: 'John Parla', avatar: 'https://vbrae.com/uploads/profile/avatar_68f74f12ac4792-21059992-92403108.webp' },
        role: 'Super Admin',
        email: { address: 'dnsokus@gmail.com', status: 'Confirmed' },
        status: 'Active',
        last_seen: '5 days ago',
        date: '2025-10-21 / 11:12',
    },
];

function AdministratorsPageWrapper() {
    const [filters, setFilters] = useState({ show: 15, status: '', emailStatus: '', search: '' });
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [roleModalOpen, setRoleModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'edit') {
            setSelectedUser(data);
            setDrawerOpen(true);
        } else if (action === 'changeRole') {
            setSelectedUser(data);
            setRoleModalOpen(true);
        }
        console.log('Action:', action, 'Data:', data);
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Administrators" sx={{ borderBottom: 1, borderColor: 'divider', pb: 2 }} />
                <Box sx={{ p: 3, display: 'flex', gap: 2, alignItems: 'flex-end', borderBottom: 1, borderColor: 'divider', flexWrap: 'wrap' }}>
                    <Select size='small' value={filters.show} onChange={(e) => setFilters(prev => ({ ...prev, show: e.target.value }))} sx={{ width: 100 }}>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={60}>60</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                    <Select size='small' value={filters.status} onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))} sx={{ width: 120 }}>
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="banned">Banned</MenuItem>
                    </Select>
                    <Select size='small' value={filters.emailStatus} onChange={(e) => setFilters(prev => ({ ...prev, emailStatus: e.target.value }))} sx={{ width: 140 }}>
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="confirmed">Confirmed</MenuItem>
                        <MenuItem value="unconfirmed">Unconfirmed</MenuItem>
                    </Select>
                    <TextField size='small' placeholder='Search' value={filters.search} onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))} sx={{ flex: 1, minWidth: 200 }} />
                    <Button size='small' variant="contained" color="primary">Filter</Button>
                </Box>
                <CardContent sx={{ p: 3 }}>
                    <EnhanceTable handleTableAction={handleTableActions} rows={rows} from="administrators" columns={columns} />
                </CardContent>
            </Card>
            <EditUserDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} data={selectedUser} />
            <ChangeRoleModal open={roleModalOpen} onClose={() => setRoleModalOpen(false)} data={selectedUser} />
        </Container>
    );
}

export default AdministratorsPageWrapper;
