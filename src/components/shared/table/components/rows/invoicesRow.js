import React from 'react';
import {
    TableCell,
    TableRow,
    Skeleton,
    Button,
} from '@mui/material';
import { Description } from '@mui/icons-material';

const InvoicesRow = ({ row, columns, key = 0, handleTableAction }) => {
    return (
        <TableRow hover tabIndex={-1} key={key}>
            {columns.map((column) => {
                let value;

                if (column.id === 'action') {
                    value = (
                        <Button
                            size="small"
                            variant="contained"
                            color="success"
                            onClick={() => handleTableAction({ action: 'view', data: row })}
                            startIcon={<Description />}
                        >
                            View Invoice
                        </Button>
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

export default InvoicesRow;
