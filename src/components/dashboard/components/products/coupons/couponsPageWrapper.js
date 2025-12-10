'use client';

import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Select, MenuItem, Box, Typography, Button, InputAdornment } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import AddIcon from '@/theme/overrides/icons/add';
import CouponDrawer from './couponDrawer';

const columns = [
  { id: 'code', label: 'Coupon Code', align: 'left', sortable: true },
  { id: 'discount_rate', label: 'Discount Rate', align: 'left', sortable: true },
  { id: 'number_of_coupons', label: 'Number of Coupons', align: 'left', sortable: true },
  { id: 'expiry_date', label: 'Expiry Date', align: 'left', sortable: true },
  { id: 'status', label: 'Status', align: 'left', sortable: true },
  { id: 'date', label: 'Date', align: 'left', sortable: true },
  { id: 'action', label: 'Options', align: 'left', sortable: false },
];

const rows = [
  {
    id: '15628',
    code: '7ZHLI35',
    discount_rate: '5%',
    number_of_coupons: '1 (Used: 0)',
    expiry_date: '2026-01-09 / 12:18',
    status: 'Active',
    date: '2025-12-10 / 12:18',
  },
  {
    id: '15627',
    code: 'SAVE20',
    discount_rate: '20%',
    number_of_coupons: '5 (Used: 2)',
    expiry_date: '2025-12-31 / 23:59',
    status: 'Active',
    date: '2025-12-01 / 10:30',
  },
  {
    id: '15626',
    code: 'EXPIRED10',
    discount_rate: '10%',
    number_of_coupons: '10 (Used: 10)',
    expiry_date: '2025-11-30 / 23:59',
    status: 'Expired',
    date: '2025-11-01 / 08:15',
  },
];

function CouponsPageWrapper() {
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [status, setStatus] = useState('');
  const [discountRate, setDiscountRate] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [createdAt, setCreatedAt] = useState('');
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
      console.log('Delete coupon:', data);
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
    console.log('Filter:', { rowsPerPage, status, discountRate, couponCode, createdAt });
  };

  return (
    <Container maxWidth={false}>
      <Card>
        <CardHeader title="Coupons" action={
          <Button variant='contained' startIcon={<AddIcon />} onClick={handleAddClick}>Add Coupon</Button>
        } />
        <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'flex-end', flexWrap: 'wrap', borderBottom: 1, borderColor: 'divider' }}>
          <Box sx={{ minWidth: 80 }}>
            <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Show</Typography>
            <Select
              size='normal'
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

          <Box sx={{ minWidth: 120 }}>
            <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Status</Typography>
            <Select
              size='normal'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              displayEmpty
              sx={{ width: '100%' }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="expired">Expired</MenuItem>
            </Select>
          </Box>

          <Box sx={{ minWidth: 120 }}>
            <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Discount Rate</Typography>
            <TextField
              size='normal'
              type="number"
              value={discountRate}
              onChange={(e) => setDiscountRate(e.target.value)}
              placeholder="E.g: 5"
              inputProps={{ min: 0, max: 99 }}
              InputProps={{ endAdornment: <InputAdornment position="end">%</InputAdornment> }}
              sx={{ width: '100%' }}
            />
          </Box>

          <Box sx={{ minWidth: 150 }}>
            <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Code</Typography>
            <TextField
              size='normal'
              placeholder='Coupon code'
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              sx={{ width: '100%' }}
            />
          </Box>

          <Box sx={{ minWidth: 150 }}>
            <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Creation Date</Typography>
            <DatePicker
              slotProps={{ textField: { fullWidth: true } }}
              value={createdAt ? dayjs(createdAt) : null}
              onChange={(date) => setCreatedAt(date ? date.format('YYYY-MM-DD') : '')}
            />
          </Box>

          <Button variant="contained" color="primary" onClick={handleFilter} sx={{ height: 40 }}>
            Filter
          </Button>
        </Box>
        <CardContent>
          <EnhanceTable
            handleTableAction={handleTableActions}
            rows={rows}
            from="coupons"
            columns={columns}
          />
        </CardContent>
      </Card>

      <CouponDrawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        isEdit={isEdit}
        data={selectedData}
      />
    </Container>
  );
}

export default CouponsPageWrapper;
