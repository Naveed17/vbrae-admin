import React from 'react';
import {
    TableCell,
    TableRow,
    Skeleton,
    Chip,
    Box,
    useTheme
} from '@mui/material';
import Link from 'next/link';

const HelpCenterRow = ({ row, columns, key = 0 }) => {

    return (
        <TableRow hover
            tabIndex={-1}
            key={key}
        >
            {columns.map((column) => {

                const value = column.id === 'buyer' ?
                    <Link href={`/dashboard/buyers/${row.id}`} style={{ textDecoration: 'none' }}>
                        <Box sx={{
                            cursor: 'pointer',
                            color: 'primary.main',
                            transition: 'color 0.3s',
                            '&:hover': {
                                color: 'primary.dark'
                            }
                        }}>

                            {row.buyer}
                        </Box>
                    </Link>
                    :
                    column.id === 'status' ?
                        <Chip label={row[column.id]} size="small" color={row[column.id] === 'Complete' ? 'success' : 'error'} />
                        :

                        (
                            row ? row[column.id] : <Skeleton variant="text" width={100} />
                        );
                return (
                    <TableCell
                        sx={{
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

export default HelpCenterRow;
