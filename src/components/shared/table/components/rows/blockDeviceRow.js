import React, { useState } from 'react';
import { TableCell, TableRow, Skeleton, Box, Avatar, Typography, Menu, MenuItem, IconButton, Chip } from '@mui/material';
import { MoreVert as MoreVertIcon, Lock as LockIcon } from '@mui/icons-material';

const BlockDeviceRow = ({ row, columns, key = 0, handleTableAction }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    return (
        <TableRow hover tabIndex={-1} key={key}>
            {columns.map((column) => {
                let value;

                if (column.id === 'action') {
                    value = (
                        <Box>
                            <IconButton size="small" onClick={handleMenuOpen}>
                                <MoreVertIcon />
                            </IconButton>
                            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                                <MenuItem onClick={() => { handleTableAction({ action: 'ipBlock', data: row }); handleMenuClose(); }}>
                                    <LockIcon sx={{ mr: 1, fontSize: 18 }} /> IP Block
                                </MenuItem>
                                <MenuItem onClick={() => { handleTableAction({ action: 'deviceBlock', data: row }); handleMenuClose(); }}>
                                    <LockIcon sx={{ mr: 1, fontSize: 18 }} /> Device Block
                                </MenuItem>
                            </Menu>
                        </Box>
                    );
                } else if (column.id === 'user' && row[column.id]) {
                    const user = row[column.id];
                    value = (
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', minWidth: 200 }}>
                            <Avatar src={user.avatar} sx={{ width: 40, height: 40, flexShrink: 0 }} />
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>{user.name}</Typography>
                        </Box>
                    );
                } else if (column.id === 'device_status') {
                    value = <Chip label={row[column.id]} color={row[column.id] === 'Open' ? 'success' : 'error'} size="small" />;
                } else {
                    value = row ? row[column.id] : <Skeleton variant="text" width={100} />;
                }

                return (
                    <TableCell sx={{ whiteSpace: column.id === 'user' ? 'normal' : 'nowrap', fontSize: 12, py: 1.5 }} key={column.id} align={column.align}>
                        {value || "--"}
                    </TableCell>
                );
            })}
        </TableRow>
    );
};

export default BlockDeviceRow;
