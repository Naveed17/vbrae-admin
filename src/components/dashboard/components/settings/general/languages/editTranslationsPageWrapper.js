'use client';
import { Card, CardContent, CardHeader, Container, Button, Box, TextField, Select, MenuItem, Typography } from '@mui/material';
import { EnhanceTable } from '@/components/shared/table';
import React, { useState } from 'react';

const translations = [
    { id: 6646, key: '1_business_day', label: 'Listo para enviar en 1 día hábil' },
    { id: 6647, key: '2_business_days', label: 'Listo para enviar en 2 días hábiles' },
    { id: 6648, key: '3_business_days', label: 'Listo para enviar en 3 días hábiles' },
    { id: 6649, key: 'free_shipping', label: 'Envío gratis' },
    { id: 6650, key: 'express_shipping', label: 'Envío express' },
];

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'key', label: 'Key', align: 'left', sortable: true },
    { id: 'label', label: 'Label', align: 'left', sortable: false },
];

function EditTranslationsPageWrapper({ language }) {
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const [search, setSearch] = useState('');
    const [filteredRows, setFilteredRows] = useState(translations);
    const [editedRows, setEditedRows] = useState({});

    const handleFilter = () => {
        const filtered = translations.filter(trans =>
            trans.key.toLowerCase().includes(search.toLowerCase()) ||
            trans.label.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredRows(filtered);
    };

    const handleLabelChange = (id, value) => {
        setEditedRows(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleTableAction = (prop) => {
        const { action, data } = prop;
        if (action === 'save') {
            console.log('Save translations for', language, ':', editedRows);
        }
    };

    const handleSave = () => {
        console.log('Save translations for', language, ':', editedRows);
    };

    return (
        <Container maxWidth={false} sx={{ py: 3 }}>
            <Card>
                <CardHeader title={`Edit Translations - ${language}`} />
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
                        from="translations"
                        columns={columns}
                        editedRows={editedRows}
                        handleLabelChange={handleLabelChange}
                    />
                </CardContent>

                <Box sx={{ p: 2, display: 'flex', gap: 1, justifyContent: 'flex-end', borderTop: 1, borderColor: 'divider' }}>
                    <Button variant="outlined" color="primary">Cancel</Button>
                    <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
                </Box>
            </Card>
        </Container>
    );
}

export default EditTranslationsPageWrapper;
