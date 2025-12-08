'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Box, Typography, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const columns = [
    { id: 'id', label: '#', align: 'left', sortable: true },
    { id: 'image', label: 'Image', align: 'left', sortable: false },
    { id: 'title', label: 'Title', align: 'left', sortable: true },
    { id: 'storyline', label: 'Storyline', align: 'left', sortable: false },
    { id: 'action', label: 'Action', align: 'center', sortable: false },
];

const rows = [
    {
        id: '1',
        image: 'https://cdn.vbrae.com/images/uploads/images/202512/92350c_35708.webp',
        title: 'Homeworld: Remastered Collection',
        storyline: 'No Storyline.',
    },
    {
        id: '2',
        image: 'https://cdn.vbrae.com/images/uploads/images/202512/92350c_35708.webp',
        title: 'Call of Duty Modern Warfare 2',
        storyline: 'No Storyline.',
    },
];

function IgdbPageWrapper() {
    const [search, setSearch] = useState('');
    const [filteredRows, setFilteredRows] = useState(rows);
    const router = useRouter();
    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'add') {
            router.push(`/admin/review-template/${data.id}`);

        }
    };

    const handleFilter = () => {
        const filtered = rows.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.storyline.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredRows(filtered);
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="IGDB Templates" />
                <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'flex-end', borderBottom: 1, borderColor: 'divider' }}>
                    <Box sx={{ flex: 1, minWidth: 200 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Search</Typography>
                        <TextField
                            size='small'
                            placeholder='Search templates...'
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
                        from="igdb-row"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default IgdbPageWrapper;
