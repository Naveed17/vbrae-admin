'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container } from '@mui/material';
import React from 'react';

const columns = [
    { id: 'id', label: '#', align: 'center', sortable: true },
    { id: 'first_name', label: 'First Name', align: 'left', sortable: true },
    { id: 'last_name', label: 'Last Name', align: 'left', sortable: true },
    { id: 'username', label: 'Username', align: 'left', sortable: true },
    { id: 'email', label: 'Email', align: 'left', sortable: true },
    { id: 'status', label: 'Status', align: 'left', sortable: true },
];

const rows = [
    {
        id: '2',
        first_name: 'Freaky',
        last_name: 'Freaky',
        username: 'Freaky',
        email: 'vbraegames@gmail.com',
        status: 'Verified',
    },
];

function VerificationPageWrapper() {
    const handleTableActions = (prop) => {
        const { action, data } = prop;
        console.log('Action:', action, 'Data:', data);
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Verification" sx={{ borderBottom: 1, borderColor: 'divider', pb: 2 }} />
                <CardContent sx={{ p: 3 }}>
                    <EnhanceTable handleTableAction={handleTableActions} rows={rows} from="verification" columns={columns} />
                </CardContent>
            </Card>
        </Container>
    );
}

export default VerificationPageWrapper;
