'use client';

import { TableCell, TableRow, IconButton, Menu, MenuItem } from '@mui/material';
import { MoreVert, Edit, Delete } from '@mui/icons-material';
import { useState } from 'react';

export default function BlogCategoryRow({ columns, row, handleTableAction }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleEdit = () => {
    handleTableAction({ action: 'edit', data: row });
    handleMenuClose();
  };

  const handleDelete = () => {
    handleTableAction({ action: 'delete', data: row });
    handleMenuClose();
  };

  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell key={column.id} align={column.align}>
          {column.id === 'action' ? (
            <>
              <IconButton size="small" onClick={handleMenuOpen}>
                <MoreVert fontSize="small" />
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={handleEdit}>
                  <Edit fontSize="small" sx={{ mr: 1 }} /> Edit
                </MenuItem>
                <MenuItem onClick={handleDelete}>
                  <Delete fontSize="small" sx={{ mr: 1 }} /> Delete
                </MenuItem>
              </Menu>
            </>
          ) : (
            row[column.id]
          )}
        </TableCell>
      ))}
    </TableRow>
  );
}
