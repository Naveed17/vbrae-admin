'use client';
import { TableCell, TableRow, IconButton, Menu, MenuItem, Chip } from '@mui/material';
import { MoreVert as MoreVertIcon, Visibility as VisibilityIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useState } from 'react';
import Link from 'next/link';

export default function SupportTicketsRow({ row, handleTableAction }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        handleTableAction({ action: 'delete', data: row });
        handleMenuClose();
    };

    const getStatusColor = (status) => {
        if (status === 'Open') return 'success';
        if (status === 'Responded') return 'warning';
        if (status === 'Closed') return 'default';
        return 'default';
    };

    return (
        <TableRow hover>
            <TableCell>{row.id}</TableCell>
            <TableCell sx={{ maxWidth: 400 }}>{row.subject}</TableCell>
            <TableCell>{row.user}</TableCell>
            <TableCell>
                <Chip label={row.status} color={getStatusColor(row.status)} size="small" />
            </TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.updated}</TableCell>
            <TableCell align="right">
                <IconButton size="small" onClick={handleMenuOpen}>
                    <MoreVertIcon fontSize="small" />
                </IconButton>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem component={Link} href={`/admin/support-tickets/${row.id.replace('#', '')}`} onClick={handleMenuClose}>
                        <VisibilityIcon sx={{ mr: 1, fontSize: 18 }} /> Show
                    </MenuItem>
                    <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
                        <DeleteIcon sx={{ mr: 1, fontSize: 18 }} /> Delete
                    </MenuItem>
                </Menu>
            </TableCell>
        </TableRow>
    );
}
