'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container } from '@mui/material';
import React from 'react';

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'user', label: 'User', align: 'left', sortable: true },
    { id: 'email', label: 'Email', align: 'left', sortable: true },
    { id: 'device_id', label: 'Device Id', align: 'left', sortable: true },
    { id: 'ip', label: 'IP', align: 'left', sortable: true },
    { id: 'device_status', label: 'Device Status', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: '1',
        user: { name: 'Freaky', avatar: 'https://cdn.vbrae.com/images/assets/img/user.png' },
        email: 'vbraegames@gmail.com',
        device_id: '70b82a1e96d37a950fbf7452b78e0bd50e3ad6b2 (237)',
        ip: '94.191.136.112',
        device_status: 'Open',
    },
];

function BlockDevicePageWrapper() {
    const handleTableActions = (prop) => {
        const { action, data } = prop;
        console.log('Action:', action, 'Data:', data);
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Block Device" sx={{ borderBottom: 1, borderColor: 'divider', pb: 2 }} />
                <CardContent sx={{ p: 3 }}>
                    <EnhanceTable handleTableAction={handleTableActions} rows={rows} from="block-device" columns={columns} />
                </CardContent>
            </Card>
        </Container>
    );
}

export default BlockDevicePageWrapper;
