'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container } from '@mui/material';
import React from 'react';

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'user', label: 'User', align: 'left', sortable: true },
    { id: 'email', label: 'Email', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'status', label: 'Status', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: '22',
        user: { name: 'Freaky', avatar: 'https://vbrae.com/uploads/profile/avatar_64cc30a46b4860-74061951-42543323.webp' },
        email: 'vbraegames@gmail.com',
        date: '2024-10-31 / 09:18',
        status: 'Active',
    },
];

function WhiteListPageWrapper() {
    const handleTableActions = (prop) => {
        const { action, data } = prop;
        console.log('Action:', action, 'Data:', data);
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="White List" sx={{ borderBottom: 1, borderColor: 'divider', pb: 2 }} />
                <CardContent sx={{ p: 3 }}>
                    <EnhanceTable handleTableAction={handleTableActions} rows={rows} from="white-list" columns={columns} />
                </CardContent>
            </Card>
        </Container>
    );
}

export default WhiteListPageWrapper;
