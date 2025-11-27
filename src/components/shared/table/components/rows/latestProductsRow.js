import React from 'react';
import {
    TableCell,
    TableRow,
    Skeleton,
    Button,
    Box,
    Avatar,
    Stack,
    Typography
} from '@mui/material';

const LatestProductsRow = ({ row, columns, key = 0 }) => {
    return (
        <TableRow hover
            tabIndex={-1}
            key={key}
        >
            {columns.map((column) => {
                let value;

                if (column.id === 'details') {
                    value = <Button size='small' variant='contained'>Details</Button>;
                } else if (column.id === 'name') {
                    value = (
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Avatar src={row?.image} variant="rounded" sx={{ width: 40, height: 40 }} />
                            <Box>
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>{row?.name}</Typography>
                                <Typography variant="caption" color="text.secondary">{row?.date}</Typography>
                            </Box>
                        </Stack>
                    );
                } else {
                    value = row ? row[column.id] : <Skeleton variant="text" width={100} />;
                }

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

export default LatestProductsRow;
