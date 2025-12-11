'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Select, MenuItem, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@/theme/overrides/icons/add';
import CountriesDrawer from './countriesDrawer';

const columns = [
  { id: 'id', label: 'Id', align: 'left', sortable: true },
  { id: 'name', label: 'Name', align: 'left', sortable: true },
  { id: 'status', label: 'Status', align: 'left', sortable: true },
  { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
  {
    id: '1',
    name: 'Afghanistan',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Albania',
    status: 'Active',
  },
  {
    id: '3',
    name: 'Algeria',
    status: 'Active',
  },
];

function CountriesPageWrapper() {
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

  const handleActivateAll = () => {
    console.log('Activate all countries');
  };

  const handleInactivateAll = () => {
    console.log('Inactivate all countries');
  };

  return (
    <Container maxWidth={false}>
      <Card>
        <CardHeader title="Countries" action={
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

          <Button size='small' variant="contained" color="error" onClick={handleInactivateAll}>
            Inactivate All
          </Button>
          <Button size='small' variant="contained" color="success" onClick={handleActivateAll}>
            Activate All
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

export default CountriesPageWrapper;
