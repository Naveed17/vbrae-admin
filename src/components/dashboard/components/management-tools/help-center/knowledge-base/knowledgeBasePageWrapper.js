'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, Button, Box, TextField, Select, MenuItem } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import React, { useState } from 'react';
import KnowledgeBaseFormDrawer from './knowledgeBaseFormDrawer';

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'title', label: 'Title', align: 'left', sortable: true },
    { id: 'language', label: 'Language', align: 'left', sortable: true },
    { id: 'category', label: 'Category', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: '8',
        title: 'How Can I Make the Payment',
        language: 'English',
        category: 'Payment',
        date: '2022-01-17 / 15:20',
    },
];

const languageOptions = {
    '1': 'English',
    '3': 'German',
    '4': 'French',
    '5': 'Italian',
    '6': 'Spanish',
};

function KnowledgeBasePageWrapper() {
    const [formDrawerOpen, setFormDrawerOpen] = useState(false);
    const [editingArticle, setEditingArticle] = useState(null);
    const [search, setSearch] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [selectedLanguage, setSelectedLanguage] = useState('1');
    const [filteredRows, setFilteredRows] = useState(rows);

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'edit') {
            setEditingArticle(data);
            setFormDrawerOpen(true);
        } else if (action === 'delete') {
            console.log('Delete article:', data);
        }
    };

    const handleAddArticle = () => {
        setEditingArticle(null);
        setFormDrawerOpen(true);
    };

    const handleFormSubmit = (formData) => {
        if (editingArticle) {
            console.log('Update article:', { ...editingArticle, ...formData });
        } else {
            console.log('Add article:', formData);
        }
    };

    const handleCloseDrawer = () => {
        setFormDrawerOpen(false);
        setEditingArticle(null);
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleFilter = () => {
        const filtered = rows.filter(item =>
            item.id.toString().includes(search) ||
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.language.toLowerCase().includes(search.toLowerCase()) ||
            item.category.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredRows(filtered);
    };

    return (
        <Container maxWidth={false}>
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Select
                    size="small"
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    sx={{ width: 150 }}
                >
                    <MenuItem value="1">English</MenuItem>
                    <MenuItem value="3">German</MenuItem>
                    <MenuItem value="4">French</MenuItem>
                    <MenuItem value="5">Italian</MenuItem>
                    <MenuItem value="6">Spanish</MenuItem>
                </Select>
            </Box>

            <Card>
                <CardHeader
                    title="Knowledge Base"
                    action={
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<AddIcon />}
                            onClick={handleAddArticle}
                            size="small"
                        >
                            Add Article
                        </Button>
                    }
                />
                <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center', borderBottom: 1, borderColor: 'divider', flexWrap: 'wrap' }}>
                    <Select
                        size="small"
                        value={rowsPerPage}
                        onChange={(e) => setRowsPerPage(e.target.value)}
                        sx={{ width: 100 }}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                    </Select>
                    <TextField
                        size="small"
                        placeholder="Search by title, language, or category..."
                        value={search}
                        onChange={handleSearch}
                        sx={{ flex: 1, minWidth: 200 }}
                    />
                    <Button size="small" variant="contained" color="primary" onClick={handleFilter}>
                        Filter
                    </Button>
                </Box>
                <CardContent>
                    <EnhanceTable
                        handleTableAction={handleTableActions}
                        rows={filteredRows}
                        from="knowledge-base"
                        columns={columns}
                    />
                </CardContent>
            </Card>

            <KnowledgeBaseFormDrawer
                open={formDrawerOpen}
                onClose={handleCloseDrawer}
                article={editingArticle}
                onSubmit={handleFormSubmit}
            />
        </Container>
    );
}

export default KnowledgeBasePageWrapper;
