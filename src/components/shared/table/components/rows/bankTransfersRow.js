import React from 'react';
import {
    TableCell,
    TableRow,
    Skeleton,
    Chip,
    IconButton,
    Menu,
    MenuItem,
} from '@mui/material';
import { MoreVert, Close, Delete } from '@mui/icons-material';

const BankTransfersRow = ({ row, columns, key = 0, handleTableAction }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAction = (action) => {
        handleTableAction({ action, data: row });
        handleClose();
    };

    return (
        <TableRow hover tabIndex={-1} key={key}>
            {columns.map((column) => {
                let value;

                if (column.id === 'status') {
                    const getStatusColor = (status) => {
                        switch (status) {
                            case 'Approved': return 'success';
                            case 'Pending': return 'warning';
                            case 'Declined': return 'error';
                            default: return 'default';
                        }
                    };
                    value = <Chip label={row[column.id]} size="small" color={getStatusColor(row[column.id])} />;
                } else if (column.id === 'action') {
                    value = (
                        <>
                            <IconButton onClick={handleClick} size="small">
                                <MoreVert />
                            </IconButton>
                            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                <MenuItem onClick={() => handleAction('decline')}><Close sx={{ mr: 1, fontSize: 18 }} />Decline</MenuItem>
                                <MenuItem onClick={() => handleAction('delete')}><Delete sx={{ mr: 1, fontSize: 18 }} />Delete</MenuItem>
                            </Menu>
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

export default BankTransfersRow;
