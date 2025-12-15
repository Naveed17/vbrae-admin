import React, { useState } from 'react';
import { TableCell, TableRow, Skeleton, Box, Avatar, Typography, Stack, Menu, MenuItem, IconButton, Chip } from '@mui/material';
import { MoreVert as MoreVertIcon, Edit as EditIcon, Delete as DeleteIcon, Person as PersonIcon } from '@mui/icons-material';

const VendorsRow = ({ row, columns, key = 0, handleTableAction }) => {
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
                                <MenuItem onClick={() => { handleTableAction({ action: 'changeRole', data: row }); handleMenuClose(); }}>
                                    <PersonIcon sx={{ mr: 1, fontSize: 18 }} /> Change Role
                                </MenuItem>
                                <MenuItem onClick={() => { handleTableAction({ action: 'assignPlan', data: row }); handleMenuClose(); }}>
                                    <PersonIcon sx={{ mr: 1, fontSize: 18 }} /> Assign Membership Plan
                                </MenuItem>
                                <MenuItem onClick={() => { handleTableAction({ action: 'ban', data: row }); handleMenuClose(); }}>
                                    <PersonIcon sx={{ mr: 1, fontSize: 18 }} /> Ban User
                                </MenuItem>
                                <MenuItem onClick={() => { handleTableAction({ action: 'whiteList', data: row }); handleMenuClose(); }}>
                                    <PersonIcon sx={{ mr: 1, fontSize: 18 }} /> Add White List
                                </MenuItem>
                                <MenuItem onClick={() => { handleTableAction({ action: 'edit', data: row }); handleMenuClose(); }}>
                                    <EditIcon sx={{ mr: 1, fontSize: 18 }} /> Edit User
                                </MenuItem>
                                <MenuItem onClick={() => { handleTableAction({ action: 'delete', data: row }); handleMenuClose(); }}>
                                    <DeleteIcon sx={{ mr: 1, fontSize: 18 }} /> Delete
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
                } else if (column.id === 'status') {
                    value = <Chip label={row[column.id]} color={row[column.id] === 'Active' ? 'success' : 'error'} size="small" />;
                } else if (column.id === 'email' && row[column.id]) {
                    const email = row[column.id];
                    value = (
                        <Stack spacing={0.5}>
                            <Typography variant="body2">{email.address}</Typography>
                            <Typography variant="caption" sx={{ color: 'success.main' }}>({email.status})</Typography>
                        </Stack>
                    );
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

export default VendorsRow;
