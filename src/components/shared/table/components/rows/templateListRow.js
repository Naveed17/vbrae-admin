import { TableCell, TableRow, Skeleton, Chip, IconButton, Tooltip, Menu, MenuItem } from '@mui/material';
import { MoreVert as MoreVertIcon, FileCopy as FileCopyIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import React, { useState } from 'react';

export default function TemplateListRow({ row, columns, key = 0, handleTableAction }) {
    const [anchorEl, setAnchorEl] = useState(null);

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
                            color={row[column.id] === 'Active' ? 'success' : 'default'} 
                            variant="outlined" 
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
                                <MenuItem onClick={() => handleAction('copy')}>
                                    <FileCopyIcon fontSize="small" sx={{ mr: 1 }} />
                                    Copy Template
                                </MenuItem>
                                <MenuItem onClick={() => handleAction('edit')}>
                                    <EditIcon fontSize="small" sx={{ mr: 1 }} />
                                    Edit Template
                                </MenuItem>
                                <MenuItem onClick={() => handleAction('delete')}>
                                    <DeleteIcon fontSize="small" sx={{ mr: 1, color: 'error.main' }} />
                                    Delete Template
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
                            whiteSpace: column.id === 'title' ? 'normal' : 'nowrap',
                            wordWrap: column.id === 'title' ? 'break-word' : 'normal',
                            fontSize: 12
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
