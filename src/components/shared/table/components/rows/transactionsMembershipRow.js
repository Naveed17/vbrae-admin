import React from 'react';
import {
    TableCell,
    TableRow,
    Skeleton,
    IconButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material';

const TransactionsMembershipRow = ({ row, columns, key = 0, handleTableAction }) => {
    const handleDelete = () => {
        handleTableAction({ action: 'delete', data: row });
    };

    return (
        <TableRow hover tabIndex={-1} key={key}>
            {columns.map((column) => {
                let value;

                if (column.id === 'action') {
                    value = (
                        <IconButton onClick={handleDelete} size="small" color="error">
                            <Delete />
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

export default TransactionsMembershipRow;
