import React from 'react';
import {
    TableCell,
    TableRow,
    Skeleton,
    Button,
    Avatar,
    IconButton,
    Box,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const SliderRow = ({ row, columns, key = 0, handleTableAction }) => {
    return (
        <TableRow hover
            tabIndex={-1}
            key={key}
        >
            {columns.map((column) => {
                let value;

                if (column.id === 'action') {
                    value = (
                        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                            <IconButton onClick={() => handleTableAction({ data: row, action: 'edit' })} size='small' color='inherit'>
                                <EditIcon fontSize='small' />
                            </IconButton>
                            <IconButton size='small' color='error'>
                                <DeleteIcon fontSize='small' />
                            </IconButton>
                        </Box>
                    );
                } else if (column.id === 'image') {
                    value = <Avatar src={row?.image} variant="rounded" sx={{ borderRadius: .5, width: 100, height: 60 }} />

                } else {
                    value = row ? row[column.id] : <Skeleton variant="text" width={100} />;
                }

                return (
                    <TableCell
                        sx={{
                            whiteSpace: 'nowrap',
                            fontSize: 12,

                            ...(column.id === 'id' && {
                                pl: '1rem !important',
                            }),

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

export default SliderRow;
