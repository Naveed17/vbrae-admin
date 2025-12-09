import React from 'react';
import {
    TableCell,
    TableRow,
    Skeleton,
    Chip,
    Menu,
    MenuItem,
    IconButton,
    Link
} from '@mui/material';
import { MoreVert, Info, Edit, Delete } from '@mui/icons-material';

const QuoteRequestsRow = ({ row, columns, key = 0, handleTableAction }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClickOpen = (event) => {
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

                if (column.id === 'product') {
                    value = (
                        <Link
                            href={row.product?.url}
                            target="_blank"
                            rel="noopener"
                            sx={{ fontSize: 12, textDecoration: 'none', color: 'primary.main' }}
                        >
                            {row.product?.title}
                        </Link>
                    );
                } else if (column.id === 'seller' || column.id === 'buyer') {
                    value = (
                        <Link
                            href={row[column.id]?.url}
                            target="_blank"
                            rel="noopener"
                            sx={{ fontSize: 12, textDecoration: 'none', color: 'primary.main' }}
                        >
                            {row[column.id]?.name}
                        </Link>
                    );
                } else if (column.id === 'status') {
                    const getStatusColor = (status) => {
                        switch (status) {
                            case 'Completed': return 'success';
                            case 'Pending Quote': return 'warning';
                            case 'New Quote Request': return 'info';
                            case 'Rejected Quote': return 'error';
                            case 'Closed': return 'default';
                            default: return 'default';
                        }
                    };
                    value = <Chip label={row.status} size="small" color={getStatusColor(row.status)} />;
                } else if (column.id === 'action') {
                    value = (
                        <>
                            <IconButton onClick={handleClickOpen} size="small">
                                <MoreVert />
                            </IconButton>
                            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                <MenuItem onClick={() => handleAction('view_details')}>
                                    <Info sx={{ mr: 1, fontSize: 18 }} />
                                    View Details
                                </MenuItem>
                                <MenuItem onClick={() => handleAction('edit')}>
                                    <Edit sx={{ mr: 1, fontSize: 18 }} />
                                    Edit
                                </MenuItem>
                                <MenuItem onClick={() => handleAction('delete')}>
                                    <Delete sx={{ mr: 1, fontSize: 18 }} />
                                    Delete
                                </MenuItem>
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

export default QuoteRequestsRow;
