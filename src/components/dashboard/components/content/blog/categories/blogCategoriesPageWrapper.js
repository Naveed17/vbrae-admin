'use client';

import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Select, MenuItem, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@/theme/overrides/icons/add';
import BlogCategoryDrawer from './blogCategoryDrawer';

const columns = [
  { id: 'id', label: 'Id', align: 'left', sortable: true },
  { id: 'name', label: 'Category Name', align: 'left', sortable: true },
  { id: 'language', label: 'Language', align: 'left', sortable: true },
  { id: 'order', label: 'Order', align: 'left', sortable: true },
  { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const languages = [
  { id: 'en', name: 'English' },
  { id: 'de', name: 'German' },
  { id: 'fr', name: 'French' },
  { id: 'it', name: 'Italian' },
  { id: 'es', name: 'Spanish' },
];

const rows = [
  {
    id: '24',
    name: 'software',
    language: 'Spanish',
    order: '1',
  },
  {
    id: '23',
    name: 'gaming',
    language: 'English',
    order: '2',
  },
  {
    id: '22',
    name: 'investment',
    language: 'English',
    order: '3',
  },
];

function BlogCategoriesPageWrapper() {
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [language, setLanguage] = useState('');
  const [search, setSearch] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleTableActions = (prop) => {
    const { action, data } = prop;
    if (action === 'edit') {
      setSelectedData(data);
      setIsEdit(true);
      setDrawerOpen(true);
    } else if (action === 'delete') {
      console.log('Delete category:', data);
    }
  };

  const handleAddClick = () => {
    setSelectedData(null);
    setIsEdit(false);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setSelectedData(null);
  };

  const handleFilter = () => {
    console.log('Filter:', { rowsPerPage, language, search });
  };

  return (
    <Container maxWidth={false}>
      <Card>
        <CardHeader title="Blog Categories" action={
          <Button variant='contained' startIcon={<AddIcon />} onClick={handleAddClick}>Add Category</Button>
        } />
        <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'flex-end', flexWrap: 'wrap', borderBottom: 1, borderColor: 'divider' }}>
          <Box sx={{ minWidth: 80 }}>
            <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Show</Typography>
            <Select
              size='small'
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

          <Box sx={{ minWidth: 150 }}>
            <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Language</Typography>
            <Select
              size='small'
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              displayEmpty
              sx={{ width: '100%' }}
            >
              <MenuItem value="">All</MenuItem>
              {languages.map((lang) => (
                <MenuItem key={lang.id} value={lang.id}>{lang.name}</MenuItem>
              ))}
            </Select>
          </Box>

          <Box sx={{ flex: 1, minWidth: 200 }}>
            <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Search</Typography>
            <TextField
              size='small'
              placeholder='Search categories'
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
            rows={rows}
            from="blog-categories"
            columns={columns}
          />
        </CardContent>
      </Card>

      <BlogCategoryDrawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        isEdit={isEdit}
        data={selectedData}
      />
    </Container>
  );
}

export default BlogCategoriesPageWrapper;
