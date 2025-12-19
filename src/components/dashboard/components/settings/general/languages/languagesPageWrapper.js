'use client';
import { Card, CardContent, CardHeader, Container, Button, Box, TextField, Select, MenuItem, Typography } from '@mui/material';
import { EnhanceTable } from '@/components/shared/table';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const languages = [
    { id: 1, name: 'English', status: 'Active', isDefault: true },
    { id: 3, name: 'German', status: 'Active', isDefault: false },
    { id: 4, name: 'French', status: 'Active', isDefault: false },
    { id: 5, name: 'Italian', status: 'Active', isDefault: false },
    { id: 6, name: 'Spanish', status: 'Active', isDefault: false },
];

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'name', label: 'Language Name', align: 'left', sortable: true },
    { id: 'default', label: 'Default Language', align: 'left', sortable: false },
    { id: 'translation', label: 'Translation/Export', align: 'left', sortable: false },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

function LanguagesPageWrapper() {
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const [search, setSearch] = useState('');
    const [filteredRows, setFilteredRows] = useState(languages);

    const handleFilter = () => {
        const filtered = languages.filter(lang =>
            lang.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredRows(filtered);
    };

    const router = useRouter();

    const handleTableAction = (prop) => {
        const { action, data } = prop;
        if (action === 'edit') {
            router.push(`/admin/languages/${data.name.toLowerCase()}/edit`);
        } else if (action === 'delete') {
            console.log('Delete language:', data);
        } else if (action === 'translate') {
            router.push(`/admin/languages/${data.name.toLowerCase()}`);
        } else if (action === 'export') {
            console.log('Export language:', data);
        } else if (action === 'setDefault') {
            console.log('Set as default:', data);
        }
    };

    return (
        <Container maxWidth={false} sx={{ py: 3 }}>
            <Card>
                <CardHeader title="Languages" />
                <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'flex-end', flexWrap: 'wrap', borderBottom: 1, borderColor: 'divider' }}>
                    <Box sx={{ minWidth: 80 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Show</Typography>
                        <Select
                            size="small"
                            value={rowsPerPage}
                            onChange={(e) => setRowsPerPage(e.target.value)}
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                        </Select>
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 200 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Search</Typography>
                        <TextField
                            size="small"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            sx={{ width: '100%' }}
                        />
                    </Box>

                    <Button size="small" variant="contained" color="primary" onClick={handleFilter} sx={{ height: 40 }}>
                        Filter
                    </Button>
                </Box>

                <CardContent>
                    <EnhanceTable
                        handleTableAction={handleTableAction}
                        rows={filteredRows}
                        from="languages"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default LanguagesPageWrapper;
