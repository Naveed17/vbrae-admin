'use client';
import { Box, Typography, Button, Select, MenuItem, FormControl, Card, Container, CardContent, CardHeader } from '@mui/material';
import { Add } from '@mui/icons-material';
import CategoryTree from './CategoryTree';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const languages = [
  { value: 1, label: 'English' },
  { value: 3, label: 'German' },
  { value: 4, label: 'French' },
  { value: 5, label: 'Italian' },
  { value: 6, label: 'Spanish' }
];

const parentCategories = [
  { value: 'all', label: 'All' },
  { value: 135, label: 'PSN' },
  { value: 134, label: 'XBOX' },
  { value: 139, label: 'GIFT CARDS' },
  { value: 146, label: 'NINTENDO' },
  { value: 158, label: 'PC GAMING' },
  { value: 168, label: 'SHOP THE BEST SOFTWARE KEYS' },
  { value: 175, label: 'VR GAMES' },
  { value: 169, label: 'WEEKLY DEALS' }
];

function CategoriesPage() {
  const [selectedLang, setSelectedLang] = useState(1);
  const [selectedParent, setSelectedParent] = useState('all');
  const router = useRouter();
  return (
    <Container maxWidth={false}>
      <Card>

        {/* Header */}
        <CardHeader title="Categories" action={
          <Button
            variant="contained"
            color="success"
            startIcon={<Add />}
            onClick={() => router.push('/admin/categories/add-category')}
          >
            Add Category
          </Button>
        } />
        <CardContent>
          {/* Filters */}
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <FormControl sx={{ minWidth: 200 }}>
              <Select
                value={selectedLang}
                size='normal'
                onChange={(e) => setSelectedLang(e.target.value)}
              >
                {languages.map((lang) => (
                  <MenuItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 200 }}>

              <Select
                size='normal'
                value={selectedParent}
                onChange={(e) => setSelectedParent(e.target.value)}
              >
                {parentCategories.map((cat) => (
                  <MenuItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Category Tree */}
          <CategoryTree />
        </CardContent>
      </Card>
    </Container >
  );
}

export default CategoriesPage;