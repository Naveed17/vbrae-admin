'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, Box, Button } from '@mui/material';
import RolesFormDrawer from './rolesFormDrawer';
import React, { useState } from 'react';

const columns = [
    { id: 'role_name', label: 'Role Name', align: 'left', sortable: true },
    { id: 'permissions', label: 'Permissions', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: '1',
        role_name: 'Super Admin',
        permissions: ['All Permissions'],
        is_default: true,
    },
    {
        id: '2',
        role_name: 'Vendor',
        permissions: ['Vendor'],
        is_default: true,
    },
    {
        id: '3',
        role_name: 'Member',
        permissions: [],
        is_default: true,
    },
    {
        id: '4',
        role_name: 'Moderator',
        permissions: ['Admin Panel', 'Products', 'Quote Requests', 'Categories', 'Custom Fields'],
        is_default: false,
    },
    {
        id: '5',
        role_name: 'SEO Mission',
        permissions: ['Admin Panel', 'Categories', 'Pages', 'Blog', 'Seo Tools', 'Template'],
        is_default: false,
    },
    {
        id: '6',
        role_name: 'Full Site SEO',
        permissions: ['Admin Panel', 'Vendor', 'Navigation', 'Slider', 'Homepage Manager', 'Orders', 'Digital Sales', 'Earnings', 'Payouts', 'Refund Requests', 'Products', 'Quote Requests', 'Categories', 'Custom Fields', 'Pages', 'Blog', 'Location', 'Membership', 'Help Center', 'Storage', 'Cache System', 'Seo Tools', 'Ad Spaces', 'Contact Messages', 'Reviews', 'Comments', 'Abuse Reports', 'Newsletter', 'Preferences', 'General Settings', 'Product Settings', 'Payment Settings', 'Visual Settings', 'System Settings', 'Template'],
        is_default: false,
    },
];

function RolesPermissionsPageWrapper() {
    const [formDrawerOpen, setFormDrawerOpen] = useState(false);
    const [editingRole, setEditingRole] = useState(null);

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'edit') {
            setEditingRole(data);
            setFormDrawerOpen(true);
        } else if (action === 'delete') {
            console.log('Delete role:', data);
        }
        console.log('Action:', action, 'Data:', data);
    };

    const handleAddRole = () => {
        setEditingRole(null);
        setFormDrawerOpen(true);
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: 1, borderColor: 'divider' }}>
                    <CardHeader title="Roles & Permissions" sx={{ p: 0 }} />
                    <Button variant="contained" color="primary" onClick={handleAddRole}>Add Role</Button>
                </Box>
                <CardContent sx={{ p: 3 }}>
                    <EnhanceTable handleTableAction={handleTableActions} rows={rows} from="roles-permissions" columns={columns} />
                </CardContent>
            </Card>
            <RolesFormDrawer open={formDrawerOpen} onClose={() => setFormDrawerOpen(false)} data={editingRole} />
        </Container>
    );
}

export default RolesPermissionsPageWrapper;
