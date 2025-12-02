import React from 'react';
import {
    TableCell,
    TableRow,
    Skeleton,
    Chip,
    Typography,
    IconButton,
    Menu,
    MenuItem
} from '@mui/material';
import { MoreVert, Delete, AttachMoney } from '@mui/icons-material';

const EarningsRow = ({ row, columns, key = 0, handleTableAction, activeTab }) => {
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

                if (column.id === 'user') {
                    value = (
                        <Typography variant="body2">{row.user?.name}</Typography>
                    );
                } else if (column.id === 'status') {
                    const getStatusColor = (status) => {
                        switch (status) {
                            case 'Pending': return 'error';
                            case 'Released': return 'success';
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
                                <MenuItem onClick={() => handleAction('delete')}>
                                    <Delete sx={{ fontSize: '18px', mr: 1 }} />
                                    Delete
                                </MenuItem>
                                {activeTab !== 'released' && (
                                    <MenuItem onClick={() => handleAction('release')}>
                                        <AttachMoney sx={{ fontSize: '18px', mr: 1 }} />
                                        Release Manually
                                    </MenuItem>
                                )}
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

export default EarningsRow;
