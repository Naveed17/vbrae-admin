'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Select, MenuItem, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@/theme/overrides/icons/add';
import CountriesDrawer from '../countries/countriesDrawer';

const columns = [
  { id: 'id', label: 'Id', align: 'left', sortable: true },
  { id: 'name', label: 'Name', align: 'left', sortable: true },
  { id: 'status', label: 'Status', align: 'left', sortable: true },
  { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
  { id: '1', name: 'Albania', status: 'Active', continent_code: 'EU' },
  { id: '2', name: 'Austria', status: 'Active', continent_code: 'EU' },
  { id: '3', name: 'Belgium', status: 'Active', continent_code: 'EU' },
  { id: '4', name: 'Bulgaria', status: 'Active', continent_code: 'EU' },
  { id: '5', name: 'Croatia', status: 'Active', continent_code: 'EU' },
  { id: '6', name: 'Cyprus', status: 'Active', continent_code: 'EU' },
  { id: '7', name: 'Czech Republic', status: 'Active', continent_code: 'EU' },
  { id: '8', name: 'Denmark', status: 'Active', continent_code: 'EU' },
  { id: '9', name: 'Estonia', status: 'Active', continent_code: 'EU' },
  { id: '10', name: 'Finland', status: 'Active', continent_code: 'EU' },
  { id: '11', name: 'France', status: 'Active', continent_code: 'EU' },
  { id: '12', name: 'Germany', status: 'Active', continent_code: 'EU' },
  { id: '13', name: 'Greece', status: 'Active', continent_code: 'EU' },
  { id: '14', name: 'Hungary', status: 'Active', continent_code: 'EU' },
  { id: '15', name: 'Ireland', status: 'Active', continent_code: 'EU' },
];

function EuropePageWrapper() {
  const [rowsPerPage, setRowsPerPage] = useState(15);
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
      console.log('Delete country:', data);
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
    console.log('Filter:', { rowsPerPage, search });
  };

  return (
    <Container maxWidth={false}>
      <Card>
        <CardHeader title="Europe Countries" action={
          <Button variant='contained' startIcon={<AddIcon />} onClick={handleAddClick}>Add Country</Button>
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

          <Box sx={{ flex: 1, minWidth: 200 }}>
            <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Search</Typography>
            <TextField
              size='small'
              placeholder='Search countries'
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
            from="countries"
            columns={columns}
          />
        </CardContent>
      </Card>

      <CountriesDrawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        isEdit={isEdit}
        data={selectedData}
      />
    </Container>
  );
}

export default EuropePageWrapper;
