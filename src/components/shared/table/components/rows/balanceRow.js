import React from 'react';
import {
    TableCell,
    TableRow,
    Skeleton,
    Stack,
    useTheme,
    Avatar,
    Typography,
    Button
} from '@mui/material';



const BalanceRow = ({ row, columns, key = 0 }) => {
    const theme = useTheme();
    return (
        <TableRow hover
            tabIndex={-1}
            key={key}
        >
            {columns.map((column, index) => {
                const value =
                    index === 0 ?
                        <Stack direction='row' spacing={1} alignItems={'center'}>
                            <Avatar sx={{ width: 40, height: 30, borderRadius: 1 }} src={row.flag} />
                            <Typography variant='caption' fontWeight={600}>{row.name}</Typography>
                        </Stack>
                        : column.id === 'action' ? (
                            <Button size='small' variant='outlined' color='inherit'>
                                Exchange
                            </Button>
                        ) :
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

export default BalanceRow;
