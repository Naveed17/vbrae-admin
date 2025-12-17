'use client';
import React from 'react';
import { TableCell, TableRow, Checkbox } from '@mui/material';

const UserNewsletterRow = ({ row, columns, key = 0, selected, handleSelect }) => {
    return (
        <TableRow hover tabIndex={-1} key={key}>
            {columns.map((column) => {
                let value;

                if (column.id === 'checkbox') {
                    value = <Checkbox checked={selected.indexOf(row) !== -1} onChange={(event) => handleSelect(event, row)} />;
                } else {
                    value = row ? row[column.id] : '--';
                }

                return (
                    <TableCell
                        sx={{ whiteSpace: 'nowrap', fontSize: 12 }}
                        key={column.id}
                        align={column.align}
                    >
                        {value || '--'}
                    </TableCell>
                );
            })}
        </TableRow>
    );
};

export default UserNewsletterRow;
