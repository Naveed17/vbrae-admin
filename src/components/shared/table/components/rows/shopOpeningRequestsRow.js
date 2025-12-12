import React, { useState } from 'react';
import {
    TableCell,
    TableRow,
    Skeleton,
    Box,
    Avatar,
    Typography,
    Stack,
    Menu,
    MenuItem,
    IconButton,
} from '@mui/material';
import { MoreVert as MoreVertIcon, Check as CheckIcon, Close as CloseIcon } from '@mui/icons-material';

const ShopOpeningRequestsRow = ({ row, columns, key = 0, handleTableAction }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const handleApprove = () => {
        handleTableAction({ action: 'approve', data: row });
        handleMenuClose();
    };

    const handleDecline = () => {
        handleTableAction({ action: 'decline', data: row });
        handleMenuClose();
    };

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
                                <MenuItem onClick={handleApprove}>
                                    <CheckIcon sx={{ mr: 1, fontSize: 18 }} /> Approve
                                </MenuItem>
                                <MenuItem onClick={handleDecline}>
                                    <CloseIcon sx={{ mr: 1, fontSize: 18 }} /> Decline
                                </MenuItem>
                            </Menu>
                        </Box>
                    );
                } else if (column.id === 'user' && row[column.id]) {
                    const user = row[column.id];
                    value = user ? (
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', minWidth: 300 }}>
                            <Avatar src={user.avatar} sx={{ width: 45, height: 45, flexShrink: 0 }} />
                            <Stack spacing={0.3} sx={{ flex: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>{user.username}</Typography>
                                <Typography variant="caption" sx={{ color: 'text.secondary' }}>Shop: {user.shopName}</Typography>
                                <Typography variant="caption" sx={{ color: 'text.secondary' }}>Email: {user.email}</Typography>
                                <Typography variant="caption" sx={{ color: 'text.secondary' }}>Phone: {user.phone}</Typography>
                            </Stack>
                        </Box>
                    ) : <Skeleton variant="text" width={100} />;
                } else {
                    value = row ? row[column.id] : <Skeleton variant="text" width={100} />;
                }

                return (
                    <TableCell
                        sx={{ whiteSpace: column.id === 'user' ? 'normal' : 'nowrap', fontSize: 12, py: 1.5 }}
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

export default ShopOpeningRequestsRow;
