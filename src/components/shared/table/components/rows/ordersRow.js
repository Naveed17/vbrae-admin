import React from 'react';
import {
    TableCell,
    TableRow,
    Skeleton,
    Chip,
    Box,
    useTheme
} from '@mui/material';
import Info from '@/theme/overrides/icons/info';



const OrdersRow = ({ row, columns, key = 0 }) => {
    const theme = useTheme()
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

export default OrdersRow;
