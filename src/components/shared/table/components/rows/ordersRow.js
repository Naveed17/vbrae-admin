import React from 'react';
import {
    TableCell,
    TableRow,
    Skeleton,
    Chip,
    Button,
    Avatar,
    Box,
    Typography,
    Menu,
    MenuItem,
    IconButton
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const OrdersRow = ({ row, columns, key = 0, handleTableAction }) => {
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

                if (column.id === 'buyer') {
                    value = (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Avatar src={row.buyer?.avatar} sx={{ width: 32, height: 32 }}>
                                {row.buyer?.name?.charAt(0)}
                            </Avatar>
                            <Typography variant="body2">{row.buyer?.name}</Typography>
                        </Box>
                    );
                } else if (column.id === 'status') {
                    const getStatusColor = (status) => {
                        switch (status) {
                            case 'Completed': return 'success';
                            case 'Cancelled': return 'error';
                            case 'Refunded': return 'warning';
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
                                <MenuItem onClick={() => handleAction('view')}>View Details</MenuItem>
                                <MenuItem onClick={() => handleAction('cancel')}>Cancel Order</MenuItem>
                                <MenuItem onClick={() => handleAction('delete')}>Delete</MenuItem>
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

export default OrdersRow;
