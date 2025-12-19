'use client';

import { TableCell, TableRow, IconButton, Menu, MenuItem, Chip, Button } from '@mui/material';
import { MoreVert as MoreVertIcon, Edit as EditIcon, Delete as DeleteIcon, CloudDownload as DownloadIcon, SwapHoriz as TranslateIcon } from '@mui/icons-material';
import React, { useState } from 'react';

export default function LanguagesRow({
  row,
  columns,
  handleTableAction,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (action) => {
    handleTableAction({ action, data: row });
    handleMenuClose();
  };

  return (
    <TableRow hover>
      {columns.map((column) => {
        if (column.id === 'id') {
          return (
            <TableCell key={column.id} align={column.align}>
              {row.id}
            </TableCell>
          );
        }

        if (column.id === 'name') {
          return (
            <TableCell key={column.id} align={column.align}>
              {row.name}
              <Chip label={row.status} size="small" color="success" variant="filled" sx={{ ml: 1 }} />
            </TableCell>
          );
        }

        if (column.id === 'default') {
          return (
            <TableCell key={column.id} align={column.align}>
              {row.isDefault ? (
                <Chip label="Default" size="small" variant="outlined" />
              ) : (
                <Button size="small" variant="contained" color="success" onClick={() => handleAction('setDefault')} sx={{ py: 0.5, px: 1, fontSize: '0.75rem' }}>
                  Set as Default
                </Button>
              )}
            </TableCell>
          );
        }

        if (column.id === 'translation') {
          return (
            <TableCell key={column.id} align={column.align}>
              <Button size="small" variant="contained" color="info" startIcon={<TranslateIcon />} onClick={() => handleAction('translate')} sx={{ mr: 1, py: 0.5, px: 1, fontSize: '0.75rem' }}>
                Edit Translations
              </Button>
              <Button size="small" variant="contained" color="warning" startIcon={<DownloadIcon />} onClick={() => handleAction('export')} sx={{ py: 0.5, px: 1, fontSize: '0.75rem' }}>
                Export
              </Button>
            </TableCell>
          );
        }

        if (column.id === 'action') {
          return (
            <TableCell key={column.id} align={column.align}>
              <IconButton size="small" onClick={handleMenuOpen}>
                <MoreVertIcon fontSize="small" />
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={() => handleAction('edit')}>
                  <EditIcon sx={{ mr: 1, fontSize: 18 }} /> Edit
                </MenuItem>
                <MenuItem onClick={() => handleAction('delete')}>
                  <DeleteIcon sx={{ mr: 1, fontSize: 18 }} /> Delete
                </MenuItem>
              </Menu>
            </TableCell>
          );
        }

        return (
          <TableCell key={column.id} align={column.align}>
            {row[column.id]}
          </TableCell>
        );
      })}
    </TableRow>
  );
}
