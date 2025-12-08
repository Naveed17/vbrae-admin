import { TableCell, TableRow, Skeleton, Chip, IconButton, Tooltip, Menu, MenuItem } from '@mui/material';
import { MoreVert as MoreVertIcon, Check as CheckIcon, Close as CloseIcon } from '@mui/icons-material';
import React, { useState } from 'react';

export default function RequestTemplateRow({ row, columns, key = 0, handleTableAction }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const getStatusColor = (status) => {
        const statusMap = {
            'Waiting': 'warning',
            'Approved': 'success',
            'Rejected': 'error',
        };
        return statusMap[status] || 'default';
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleAction = (action) => {
        handleTableAction({ action, data: row });
        handleMenuClose();
    };

    return (
        <TableRow hover tabIndex={-1} key={key}>
            {columns.map((column) => {
                let value;

                if (column.id === 'status') {
                    value = row ? (
                        <Chip
                            label={row[column.id]}
                            color={getStatusColor(row[column.id])}
                            size="small"
                        />
                    ) : <Skeleton variant="text" width={100} />;
                } else if (column.id === 'actions') {
                    value = row ? (
                        <>
                            <Tooltip title="Actions">
                                <IconButton
                                    size="small"
                                    onClick={handleMenuOpen}
                                >
                                    <MoreVertIcon fontSize="small" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={() => handleAction('approve')}>
                                    <CheckIcon fontSize="small" sx={{ mr: 1 }} />
                                    Approve
                                </MenuItem>
                                <MenuItem onClick={() => handleAction('reject')}>
                                    <CloseIcon fontSize="small" sx={{ mr: 1, color: 'error.main' }} />
                                    Reject
                                </MenuItem>
                            </Menu>
                        </>
                    ) : <Skeleton variant="text" width={100} />;
                } else {
                    value = row ? row[column.id] : <Skeleton variant="text" width={100} />;
                }

                return (
                    <TableCell
                        sx={{
                            whiteSpace: column.id === 'title' || column.id === 'additionalInfo' ? 'normal' : 'nowrap',
                            wordWrap: column.id === 'title' || column.id === 'additionalInfo' ? 'break-word' : 'normal',
                            fontSize: 12,
                            maxWidth: column.id === 'additionalInfo' ? 300 : 'auto',
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
}
