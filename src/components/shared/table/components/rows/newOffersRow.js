'use client';
import React from 'react';
import {
    TableCell,
    TableRow,
    Typography,
    Avatar,
    Stack,
    Button,
    Skeleton
} from '@mui/material';
import { useRouter } from 'next/navigation';


const NewOffersRow = ({ row, columns, key }) => {
    const router = useRouter()
    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={row ? row.id : key}>
            {columns.map((column) => {

                const value = column.id === 'game' ? <Stack direction='row' alignItems='center' spacing={1}>
                    <Avatar
                        src={"https://cdn.vbrae.com/images/assets/img/template-image/" + row.game.image}
                        alt={row.game.name}
                        sx={{ width: 48, height: 48, borderRadius: 1 }}
                    />
                    <Stack direction='column'>
                        <Typography variant="caption" fontWeight="medium" sx={{ whiteSpace: 'nowrap' }}>{row.game.name}</Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>{row.game.template_name}</Typography>
                        <Typography variant="caption" color="text.disabled" sx={{ whiteSpace: 'nowrap' }}>Account {row.activation_region}</Typography>
                    </Stack>
                </Stack> : column.id === "actions" ? <Button onClick={() => router.push(`/new-offers/${row.id}`)} variant="contained">Select</Button> :

                    (
                        row ? row[column.id] : <Skeleton variant="text" width={100} />
                    );
                return (
                    <TableCell key={column.id} align={column.align}>

                        {value || "--"}

                    </TableCell>
                );
            })}
        </TableRow>
    );
};

export default NewOffersRow;
