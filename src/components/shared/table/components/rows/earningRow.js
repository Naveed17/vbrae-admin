import React from 'react';
import {
    TableCell,
    TableRow,
    Skeleton,
    Stack,
    useTheme,
    Avatar,
    Typography,
    Button,
    Chip
} from '@mui/material';



const EarningRow = ({ row, columns, key = 0 }) => {
    const theme = useTheme();
    return (
        <TableRow hover
            tabIndex={-1}
            key={key}
        >
            {columns.map((column, index) => {
                const value =
                    column.id === 'earned' ?


                        <Typography variant='caption' color='success.main' fontWeight={600}>${row[column.id]}</Typography>

                        :
                        column.id === 'status' ? <>
                            <Chip label={row[column.id]} size="small" color={row[column.id] === 'Completed' ? 'success' : 'warning'} />
                        </>
                            : (
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

export default EarningRow;
