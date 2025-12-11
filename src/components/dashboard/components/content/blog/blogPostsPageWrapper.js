'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Select, MenuItem, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@/theme/overrides/icons/add';
import BlogPostDrawer from './blogPostDrawer';

const columns = [
  { id: 'id', label: 'Id', align: 'left', sortable: true },
  { id: 'title', label: 'Title', align: 'left', sortable: true },
  { id: 'language', label: 'Language', align: 'left', sortable: true },
  { id: 'category', label: 'Category', align: 'left', sortable: true },
  { id: 'date', label: 'Date', align: 'left', sortable: true },
  { id: 'action', label: 'Options', align: 'right', sortable: false },
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
    id: '775',
    title: 'Top Reasons to Buy Cheap PSN Gift Cards Instead of Paying the Full Price',
    image: 'https://cdn.vbrae.com/images/uploads/blog/202510/img_thumb_68fa31c6aad1d1-89919805-54112058.webp',
    language: 'English',
    category: 'Gaming',
    date: '2025-10-23 / 15:58',
  },
  {
    id: '774',
    title: 'How to Save Money on Xbox Game Pass',
    image: 'https://cdn.vbrae.com/images/uploads/blog/202510/img_thumb_sample.webp',
    language: 'English',
    category: 'Gaming',
    date: '2025-10-22 / 10:30',
  },
  {
    id: '773',
    title: 'Best Practices for Digital Key Purchases',
    image: 'https://cdn.vbrae.com/images/uploads/blog/202510/img_thumb_sample2.webp',
    language: 'English',
    category: 'Tips',
    date: '2025-10-21 / 14:15',
  },
];

function BlogPostsPageWrapper() {
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
      console.log('Delete blog post:', data);
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
        <CardHeader title="Blog Posts" action={
          <Button variant='contained' startIcon={<AddIcon />} onClick={handleAddClick}>Add Post</Button>
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
              placeholder='Search posts'
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
            from="blog-posts"
            columns={columns}
          />
        </CardContent>
      </Card>

      <BlogPostDrawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        isEdit={isEdit}
        data={selectedData}
      />
    </Container>
  );
}

export default BlogPostsPageWrapper;
