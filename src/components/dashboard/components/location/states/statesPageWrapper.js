'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Select, MenuItem, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@/theme/overrides/icons/add';
import StatesDrawer from './statesDrawer';

const columns = [
  { id: 'id', label: 'Id', align: 'left', sortable: true },
  { id: 'name', label: 'Name', align: 'left', sortable: true },
  { id: 'country', label: 'Country', align: 'left', sortable: true },
  { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
  { id: '1', name: 'Badakhshan', country: 'Afghanistan', country_id: '1' },
  { id: '2', name: 'Badghis', country: 'Afghanistan', country_id: '1' },
  { id: '3', name: 'Baghlan', country: 'Afghanistan', country_id: '1' },
];

const countryOptions = [
  { id: '1', name: 'Afghanistan' },
  { id: '2', name: 'Albania' },
  { id: '3', name: 'Algeria' },
];

function StatesPageWrapper() {
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [country, setCountry] = useState('');
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
      console.log('Delete state:', data);
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
    console.log('Filter:', { rowsPerPage, country, search });
  };

  return (
    <Container maxWidth={false}>
      <Card>
        <CardHeader title="States" action={
          <Button variant='contained' startIcon={<AddIcon />} onClick={handleAddClick}>Add State</Button>
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
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              displayEmpty
              sx={{ width: '100%' }}
            >
              <MenuItem value="">All</MenuItem>
              {countryOptions.map((opt) => (
                <MenuItem key={opt.id} value={opt.id}>{opt.name}</MenuItem>
              ))}
            </Select>
          </Box>

          <Box sx={{ flex: 1, minWidth: 200 }}>
            <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Search</Typography>
            <TextField
              size='small'
              placeholder='Search states'
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
            from="states"
            columns={columns}
          />
        </CardContent>
      </Card>

      <StatesDrawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        isEdit={isEdit}
        data={selectedData}
      />
    </Container>
  );
}

export default StatesPageWrapper;
