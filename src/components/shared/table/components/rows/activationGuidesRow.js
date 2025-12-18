'use client';

import { TableCell, TableRow, IconButton, Menu, MenuItem } from '@mui/material';
import { MoreVert as MoreVertIcon, Edit as EditIcon, Visibility as VisibilityIcon, Delete as DeleteIcon } from '@mui/icons-material';
import React, { useState } from 'react';

export default function ActivationGuidesRow({
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
        if (column.id === 'action') {
          return (
            <TableCell key={column.id} align={column.align}>
              <IconButton size="small" onClick={handleMenuOpen}>
                <MoreVertIcon fontSize="small" />
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={() => handleAction('view')}>
                  <VisibilityIcon sx={{ mr: 1, fontSize: 18 }} /> View
                </MenuItem>
                <MenuItem onClick={() => handleAction('edit')}>
                  <EditIcon sx={{ mr: 1, fontSize: 18 }} /> Edit
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
