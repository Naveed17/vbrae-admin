import React from 'react';
import {
    TableCell,
    TableRow,
    Skeleton,
    Chip,
    Avatar,
    Box,
    Typography
} from '@mui/material';

const VatOrdersRow = ({ row, columns, key = 0 }) => {

    return (
        <TableRow hover tabIndex={-1} key={key}>
            {columns.map((column) => {
                let value;

                if (column.id === 'buyer') {
                    value = (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Avatar src={row.buyer?.avatar} sx={{ width: 32, height: 32 }}>
                                {row.buyer?.name?.charAt(0)}
                            </Avatar>
                            <Typography variant="body2">{row.buyer?.name}</Typography>
                        </Box>
                    );
                } else if (column.id === 'status') {
                    const getStatusColor = (status) => {
                        switch (status) {
                            case 'Completed': return 'success';
                            case 'Cancelled': return 'error';
                            case 'Refunded': return 'warning';
                            default: return 'default';
                        }
                    };
                    value = <Chip label={row[column.id]} size="small" color={getStatusColor(row[column.id])} />;
                } else {
                    value = row ? row[column.id] : <Skeleton variant="text" width={100} />;
                }

                return (
                    <TableCell
                        sx={{ whiteSpace: 'nowrap', fontSize: 12 }}
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

export const VatOrdersTotalRow = ({ totals }) => {


    return (
        <TableRow sx={{ fontWeight: 'bold' }}>
            <TableCell colSpan={8} sx={{ fontWeight: 'bold' }}>Total:</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>{totals.vat}</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>{totals.total}</TableCell>
        </TableRow>
    );
};

export default VatOrdersRow;
