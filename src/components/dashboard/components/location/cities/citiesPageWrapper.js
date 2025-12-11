'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Select, MenuItem, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@/theme/overrides/icons/add';
import CitiesDrawer from './citiesDrawer';

const columns = [
  { id: 'id', label: 'Id', align: 'left', sortable: true },
  { id: 'name', label: 'Name', align: 'left', sortable: true },
  { id: 'country', label: 'Country', align: 'left', sortable: true },
  { id: 'state', label: 'State', align: 'left', sortable: true },
  { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
  {
    id: '1',
    name: 'New York',
    country: 'United States',
    state: 'New York',
  },
  {
    id: '2',
    name: 'Los Angeles',
    country: 'United States',
    state: 'California',
  },
  {
    id: '3',
    name: 'Chicago',
    country: 'United States',
    state: 'Illinois',
  },
];

function CitiesPageWrapper() {
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
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
      console.log('Delete city:', data);
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
    console.log('Filter:', { rowsPerPage, selectedCountry, selectedState, search });
  };

  return (
    <Container maxWidth={false}>
      <Card>
        <CardHeader title="Cities" action={
          <Button variant='contained' startIcon={<AddIcon />} onClick={handleAddClick}>Add City</Button>
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
            <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Country</Typography>
            <Select
              size='small'
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              sx={{ width: '100%' }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="1">United States</MenuItem>
              <MenuItem value="2">Canada</MenuItem>
              <MenuItem value="3">Mexico</MenuItem>
            </Select>
          </Box>

          <Box sx={{ minWidth: 150 }}>
            <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>State</Typography>
            <Select
              size='small'
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              sx={{ width: '100%' }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="1">New York</MenuItem>
              <MenuItem value="2">California</MenuItem>
              <MenuItem value="3">Illinois</MenuItem>
            </Select>
          </Box>

          <Box sx={{ flex: 1, minWidth: 200 }}>
            <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Search</Typography>
            <TextField
              size='small'
              placeholder='Search cities'
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
            from="cities"
            columns={columns}
          />
        </CardContent>
      </Card>

      <CitiesDrawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        isEdit={isEdit}
        data={selectedData}
      />
    </Container>
  );
}

export default CitiesPageWrapper;
