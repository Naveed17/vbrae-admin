import React from 'react';
import {
    TableCell,
    TableRow,
    Skeleton,
    Chip,
    Button
} from '@mui/material';

const LatestOrdersRow = ({ row, columns, key = 0 }) => {
    return (
        <TableRow hover
            tabIndex={-1}
            key={key}
        >
            {columns.map((column) => {
                const value =
                    column.id === 'status' ?
                        <Chip label={row[column.id]} size="small" color={row[column.id] === 'Completed' ? 'success' : 'error'} />
                        :
                        column.id === 'details' ?
                            <Button size='small' variant='contained'>Details</Button> :
                            (
                                row ? row[column.id] : <Skeleton variant="text" width={100} />
                            );
                return (
                    <TableCell
                        sx={{
                            whiteSpace: 'nowrap',
                            fontSize: 12,
                        }}
                        key={column.id}
                        align={column.align}
                    >
                        {value || "--"}
                    </TableCell>
                );
            })}
        </TableRow>
    );
};

export default LatestOrdersRow;
