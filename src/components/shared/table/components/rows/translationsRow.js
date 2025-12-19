'use client';

import { TableCell, TableRow, TextField } from '@mui/material';
import React from 'react';

export default function TranslationsRow({
  row,
  columns,
  editedRows,
  handleLabelChange,
}) {
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

        if (column.id === 'key') {
          return (
            <TableCell key={column.id} align={column.align}>
              <TextField
                size="small"
                value={row.key}
                disabled
                fullWidth

              />
            </TableCell>
          );
        }

        if (column.id === 'label') {
          return (
            <TableCell key={column.id} align={column.align}>
              <TextField
                size="small"
                value={editedRows[row.id] !== undefined ? editedRows[row.id] : row.label}
                onChange={(e) => handleLabelChange(row.id, e.target.value)}
                fullWidth
              />
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
