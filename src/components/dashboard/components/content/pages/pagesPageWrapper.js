'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Select, MenuItem, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@/theme/overrides/icons/add';
import PagesDrawer from './pagesDrawer';

const columns = [
  { id: 'id', label: 'Id', align: 'left', sortable: true },
  { id: 'title', label: 'Title', align: 'left', sortable: true },
  { id: 'language', label: 'Language', align: 'left', sortable: true },
  { id: 'location', label: 'Location', align: 'left', sortable: true },
  { id: 'visibility', label: 'Visibility', align: 'left', sortable: true },
  { id: 'page_type', label: 'Page Type', align: 'left', sortable: true },
  { id: 'date', label: 'Date', align: 'left', sortable: true },
  { id: 'action', label: 'Options', align: 'left', sortable: false },
];

const languages = [
  { id: 'en', name: 'English' },
  { id: 'it', name: 'Italian' },
  { id: 'es', name: 'Spanish' },
  { id: 'fr', name: 'French' },
  { id: 'de', name: 'German' },
];

const rows = [
  {
    id: '51',
    title: 'Coupon Partner',
    language: 'Italian',
    location: 'Quick Links',
    visibility: 'visible',
    page_type: 'Custom',
    date: '2024-08-13 / 04:34',
  },
  {
    id: '50',
    title: 'About Us',
    language: 'English',
    location: 'Footer',
    visibility: 'visible',
    page_type: 'Standard',
    date: '2024-08-12 / 10:15',
  },
  {
    id: '49',
    title: 'Privacy Policy',
    language: 'English',
    location: 'Footer',
    visibility: 'visible',
    page_type: 'Standard',
    date: '2024-08-11 / 14:30',
  },
];

function PagesPageWrapper() {
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
      console.log('Delete page:', data);
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
        <CardHeader title="Pages" action={
          <Button variant='contained' startIcon={<AddIcon />} onClick={handleAddClick}>Add Page</Button>
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
              placeholder='Search pages'
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
            from="pages"
            columns={columns}
          />
        </CardContent>
      </Card>

      <PagesDrawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        isEdit={isEdit}
        data={selectedData}
      />
    </Container>
  );
}

export default PagesPageWrapper;
