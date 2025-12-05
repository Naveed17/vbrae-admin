'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Box, Typography, Button, Chip } from '@mui/material';
import { Add as AddIcon, FileCopy as FileCopyIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const columns = [
    { id: 'id', label: '#', align: 'left', sortable: true },
    { id: 'title', label: 'Title', align: 'left', sortable: true },
    { id: 'genres', label: 'Genres', align: 'left', sortable: true },
    { id: 'status', label: 'Status', align: 'left', sortable: true },
    { id: 'actions', label: 'Action', align: 'center', sortable: false },
];

const rows = [
    {
        id: '1',
        title: 'Outriders: Worldslayer Xbox Series X|S, Xbox One [Digital Code] Global',
        genres: 'shooter,role-playing-rpg,adventure',
        status: 'Active',
    },
    {
        id: '2',
        title: 'Call of Duty Modern Warfare 2',
        genres: 'shooter,action',
        status: 'Active',
    },
];

function TemplateListPageWrapper() {
    const [search, setSearch] = useState('');
    const [filteredRows, setFilteredRows] = useState(rows);
    const router = useRouter();

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'copy') {
            console.log('copy')
        } else if (action === 'edit') {
            router.push(`/admin/list-template/${data.id}`);
        } else if (action === 'delete') {
            console.log('Delete:', data);
        }
    };

    const handleFilter = () => {
        const filtered = rows.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.genres.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredRows(filtered);
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Product Templates" action={<Button variant="contained" color="primary" startIcon={<AddIcon />}>Add Template</Button>} />
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
                        from="template-list"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default TemplateListPageWrapper;
