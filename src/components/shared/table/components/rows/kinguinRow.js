import { TableCell, TableRow, Skeleton, IconButton, Tooltip, Menu, MenuItem, Box } from '@mui/material';
import { MoreVert as MoreVertIcon, Download as DownloadIcon, Visibility as VisibilityIcon } from '@mui/icons-material';
import Image from 'next/image';
import React, { useState } from 'react';

export default function KinguinRow({ row, columns, key = 0, handleTableAction }) {
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

                if (column.id === 'image') {
                    value = row ? (
                        <Box sx={{ position: 'relative', width: 50, height: 50 }}>
                            <Image
                                src={row.image}
                                alt={row.name}
                                fill
                                style={{ objectFit: 'cover', borderRadius: 4 }}
                            />
                        </Box>
                    ) : <Skeleton variant="rectangular" width={50} height={50} />;
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
                                <MenuItem onClick={() => handleAction('import')}>
                                    <DownloadIcon fontSize="small" sx={{ mr: 1, color: 'success.main' }} />
                                    Import
                                </MenuItem>
                                <MenuItem onClick={() => handleAction('view')}>
                                    <VisibilityIcon fontSize="small" sx={{ mr: 1 }} />
                                    View
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
                            whiteSpace: column.id === 'name' ? 'normal' : 'nowrap',
                            wordWrap: column.id === 'name' ? 'break-word' : 'normal',
                            fontSize: 12,
                            maxWidth: column.id === 'name' ? 300 : 'auto',
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
