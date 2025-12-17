'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container } from '@mui/material';
import React, { useState } from 'react';

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'reportedContent', label: 'Reported Content', align: 'left', sortable: true },
    { id: 'sentBy', label: 'Sent By', align: 'left', sortable: true },
    { id: 'description', label: 'Description', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: '35',
        reportedContent: 'Seller',
        sentBy: 'Mike Putze',
        sentByUrl: 'https://vbrae.com/profile/mike-putze',
        description: 'Invites you in DISCORD and bullies and uses profanity. Needs to be removed',
        date: '2025-12-05 / 21:04',
    },
];

function AbuseReportsPageWrapper() {
    const [filteredRows, setFilteredRows] = useState(rows);

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'view') {
            console.log('View content:', data);
        } else if (action === 'delete') {
            console.log('Delete report:', data);
        }
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Abuse Reports" />
                <CardContent>
                    <EnhanceTable
                        handleTableAction={handleTableActions}
                        rows={filteredRows}
                        from="abuse-reports"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default AbuseReportsPageWrapper;
