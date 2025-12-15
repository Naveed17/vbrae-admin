import React from 'react';
import { TableCell, TableRow, Skeleton, Typography } from '@mui/material';

const VerificationRow = ({ row, columns, key = 0 }) => {
    return (
        <TableRow hover tabIndex={-1} key={key} sx={{ textAlign: 'center' }}>
            {columns.map((column) => {
                let value;

                if (column.id === 'username') {
                    value = (
                        <Typography
                            component="a"
                            href={`https://vbrae.com/profile/${row[column.id]}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                        >
                            {row[column.id]}
                        </Typography>
                    );
                } else {
                    value = row ? row[column.id] : <Skeleton variant="text" width={100} />;
                }

                return (
                    <TableCell sx={{ fontSize: 12, py: 1.5 }} key={column.id} align={column.align}>
                        {value || "--"}
                    </TableCell>
                );
            })}
        </TableRow>
    );
};

export default VerificationRow;
