'use client';
import { TableCell, TableRow, IconButton, Menu, MenuItem, Chip } from '@mui/material';
import { MoreVert as MoreVertIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useState } from 'react';

export default function KnowledgeBaseRow({ row, handleTableAction }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleEdit = () => {
        handleTableAction({ action: 'edit', data: row });
        handleMenuClose();
    };

    const handleDelete = () => {
        handleTableAction({ action: 'delete', data: row });
        handleMenuClose();
    };

    return (
        <TableRow hover>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.title}</TableCell>
            <TableCell>
                <Chip label={row.language} size="small" variant="outlined" />
            </TableCell>
            <TableCell>
                <Chip label={row.category} size="small" color="primary" />
            </TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell align="right">
                <IconButton size="small" onClick={handleMenuOpen}>
                    <MoreVertIcon fontSize="small" />
                </IconButton>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem onClick={handleEdit}>
                        <EditIcon sx={{ mr: 1, fontSize: 18 }} /> Edit
                    </MenuItem>
                    <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
                        <DeleteIcon sx={{ mr: 1, fontSize: 18 }} /> Delete
                    </MenuItem>
                </Menu>
            </TableCell>
        </TableRow>
    );
}
