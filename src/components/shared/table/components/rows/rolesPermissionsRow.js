import React, { useState } from 'react';
import { TableCell, TableRow, Box, Chip, Button, Menu, MenuItem } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const RolesPermissionsRow = ({ row, columns, key = 0, handleTableAction }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    return (
        <TableRow hover tabIndex={-1} key={key}>
            {columns.map((column) => {
                let value;

                if (column.id === 'action') {
                    const canDelete = !row.is_default;
                    value = (
                        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                            <Button
                                size="small"
                                variant="outlined"
                                startIcon={<EditIcon />}
                                onClick={() => handleTableAction({ action: 'edit', data: row })}
                            >
                                Edit
                            </Button>
                            {canDelete && (
                                <Button
                                    size="small"
                                    variant="outlined"
                                    color="error"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => handleTableAction({ action: 'delete', data: row })}
                                >
                                    Delete
                                </Button>
                            )}
                        </Box>
                    );
                } else if (column.id === 'role_name') {
                    value = (
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            <span style={{ fontWeight: 600 }}>{row[column.id]}</span>
                            {row.is_default && <Chip label="Default" size="small" variant="outlined" />}
                        </Box>
                    );
                } else if (column.id === 'permissions') {
                    value = (
                        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                            {row.permissions && row.permissions.length > 0 ? (
                                row.permissions.map((perm, idx) => (
                                    <Chip key={idx} label={perm} size="small" color="success" />
                                ))
                            ) : (
                                <span>-</span>
                            )}
                        </Box>
                    );
                } else {
                    value = row[column.id] || '--';
                }

                return (
                    <TableCell sx={{ fontSize: 12, py: 1.5 }} key={column.id} align={column.align}>
                        {value}
                    </TableCell>
                );
            })}
        </TableRow>
    );
};

export default RolesPermissionsRow;
