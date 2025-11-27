import React from 'react';
import {
    TableCell,
    TableRow,
    Skeleton,

} from '@mui/material';




const LatestTransactionsRow = ({ row, columns, key = 0 }) => {
    return (
        <TableRow hover
            tabIndex={-1}
            key={key}
        >
            {columns.map((column) => {

                const value = row ? row[column.id] : <Skeleton variant="text" width={100} />

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

export default LatestTransactionsRow;
