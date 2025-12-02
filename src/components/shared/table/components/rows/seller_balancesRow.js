import React from 'react';
import {
    TableCell,
    TableRow,
    Skeleton,
    Avatar,
    Box,
    Typography,
    IconButton,

} from '@mui/material';
import { Edit } from '@mui/icons-material';

const SellerBalancesRow = ({ row, columns, key = 0, handleTableAction }) => {


    const handleAction = (action) => {
        handleTableAction({ action, data: row });
    };

    return (
        <TableRow hover tabIndex={-1} key={key}>
            {columns.map((column) => {
                let value;

                if (column.id === 'user') {
                    value = (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Avatar src={row.user?.avatar} sx={{ width: 32, height: 32 }}>
                                {row.user?.name?.charAt(0)}
                            </Avatar>
                            <Typography variant="body2">{row.user?.name}</Typography>
                        </Box>
                    );
                } else if (column.id === 'action') {
                    value = (
                        <>
                            <IconButton onClick={() => handleAction('edit')} size="small">
                                <Edit sx={{ fontSize: '18px', mr: 1 }} />
                            </IconButton>

                        </>
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

export default SellerBalancesRow;
