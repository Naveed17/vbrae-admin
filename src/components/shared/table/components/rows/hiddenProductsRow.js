import React from 'react';
import Image from 'next/image';
import {
    TableCell,
    TableRow,
    Skeleton,
    Chip,
    Box,
    Menu,
    MenuItem,
    IconButton,
    Checkbox,
    Link
} from '@mui/material';
import { MoreVert, Info, Visibility, Delete, DeleteForever } from '@mui/icons-material';

const HiddenProductsRow = ({ row, columns, key = 0, handleTableAction, selected, handleSelect }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClickOpen = (event) => {
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

                if (column.id === 'checkbox') {
                    value = <Checkbox checked={selected.indexOf(row) !== -1} onChange={(event) => handleSelect(event, row)} />;
                } else if (column.id === 'product') {
                    value = (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Image
                                src={row.product?.image}
                                alt={row.product?.title}
                                width={40}
                                height={40}
                                style={{ borderRadius: 4, objectFit: 'cover' }}
                            />
                            <Link
                                href={row.product?.url}
                                target="_blank"
                                rel="noopener"
                                sx={{ fontSize: 12, textDecoration: 'none', color: 'primary.main' }}
                            >
                                {row.product?.title}
                            </Link>
                        </Box>
                    );
                } else if (column.id === 'user') {
                    value = (
                        <Link
                            href={row.user?.url}
                            target="_blank"
                            rel="noopener"
                            sx={{ fontSize: 12, textDecoration: 'none', color: 'primary.main' }}
                        >
                            {row.user?.name}
                        </Link>
                    );
                } else if (column.id === 'stock') {
                    value = (
                        <Chip
                            label={row.stock}
                            size="small"
                            color={row.stock > 0 ? 'success' : 'error'}
                            variant="outlined"
                        />
                    );
                } else if (column.id === 'kyc') {
                    const getKycColor = (status) => {
                        switch (status) {
                            case 'Enabled': return 'success';
                            case 'Disabled': return 'error';
                            default: return 'default';
                        }
                    };
                    value = <Chip label={row.kyc} size="small" color={getKycColor(row.kyc)} />;
                } else if (column.id === 'action') {
                    value = (
                        <>
                            <IconButton onClick={handleClickOpen} size="small">
                                <MoreVert />
                            </IconButton>
                            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                <MenuItem onClick={() => handleAction('view_details')}>
                                    <Info sx={{ mr: 1, fontSize: 18 }} />
                                    View Details
                                </MenuItem>
                                <MenuItem onClick={() => handleAction('unhide')}>
                                    <Visibility sx={{ mr: 1, fontSize: 18 }} />
                                    Unhide
                                </MenuItem>
                                <MenuItem onClick={() => handleAction('delete')}>
                                    <Delete sx={{ mr: 1, fontSize: 18 }} />
                                    Delete
                                </MenuItem>
                                <MenuItem onClick={() => handleAction('delete_permanently')}>
                                    <DeleteForever sx={{ mr: 1, fontSize: 18 }} />
                                    Delete Permanently
                                </MenuItem>
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

export default HiddenProductsRow;
