import React from 'react';
import {
    TableCell,
    TableRow,
    Skeleton,
    Avatar,
    Box,
    Typography,
    IconButton
} from '@mui/material';
import { Delete } from '@mui/icons-material';

const DigitalSalesRow = ({ row, columns, key = 0, handleTableAction }) => {
    const handleAction = (action) => {
        handleTableAction({ action, data: row });
    };

    return (
        <TableRow hover tabIndex={-1} key={key}>
            {columns.map((column) => {
                let value;

                if (column.id === 'seller') {
                    value = (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Avatar src={row.seller?.avatar} sx={{ width: 32, height: 32 }}>
                                {row.seller?.name?.charAt(0)}
                            </Avatar>
                            <Typography variant="body2">{row.seller?.name}</Typography>
                        </Box>
                    );
                } else if (column.id === 'buyer') {
                    value = (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Avatar src={row.buyer?.avatar} sx={{ width: 32, height: 32 }}>
                                {row.buyer?.name?.charAt(0)}
                            </Avatar>
                            <Typography variant="body2">{row.buyer?.name}</Typography>
                        </Box>
                    );
                } else if (column.id === 'action') {
                    value = (
                        <IconButton size="small" onClick={() => handleAction('delete')}>
                            <Delete sx={{ fontSize: '18px' }} />
                        </IconButton>
                    );
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

export default DigitalSalesRow;
