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


const NewSelectOffersRow = ({ row, columns, key = 0 }) => {

    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={row ? row.id : key}>
            {columns.map((column) => {

                const value = column.id === 'game' ? <Stack direction='row' alignItems='center' spacing={1}>
                    <Avatar
                        src={row.game.image}
                        alt={row.game.name}
                        sx={{ width: 48, height: 48, borderRadius: 1 }}
                    />
                    <Stack direction='column' sx={{ minWidth: 0, maxWidth: 150 }}>
                        <Typography variant="caption" fontWeight="medium" sx={{ whiteSpace: 'nowrap' }}>{row.game.name}</Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>{row.game.series}</Typography>
                        <Typography variant="caption" color="text.disabled" sx={{ whiteSpace: 'nowrap' }}>{row.game.account}</Typography>
                    </Stack>
                </Stack> : column.id === "actions" ? <Button size='small' variant="outlined" color='inherit'>Change</Button> :

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

export default NewSelectOffersRow;
