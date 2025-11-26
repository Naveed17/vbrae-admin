import React from 'react';
import {
    TableCell,
    TableRow,
    Typography,
    Checkbox,
    Menu,
    MenuItem,
    IconButton,
    Skeleton,
    Chip
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';


const KeysRow = ({ row, columns, selected, handleSelect, key = 0 }) => {
    const isItemSelected = selected.includes(row.id);
    const labelId = `enhanced-table-checkbox-${key}`;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    return (
        <TableRow hover role="checkbox"
            onClick={(event) => handleSelect(event, row.id)}
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={row.id}
            selected={isItemSelected}
            sx={{ cursor: 'pointer' }}>
            {columns.map((column) => {

                const value = column.id === 'checkbox' ?
                    <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                            'aria-labelledby': labelId,
                        }}
                    />
                    :
                    column.id === 'status' ?
                        <Chip label={row[column.id]} size="small" color={row[column.id] === 'Active' ? 'success' : 'error'} />
                        :


                        column.id === "actions" ? <>
                            <IconButton onClick={handleMenuClick} size="small" sx={{ ml: 1, color: 'text.primary' }}>
                                <MoreVert />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                sx={{ zIndex: 1300 }}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <Typography
                                    component={MenuItem}
                                    onClick={handleMenuClose}
                                    variant="subtitle2"
                                    color="text.secondary"
                                >
                                    Delete
                                </Typography>
                                <Typography
                                    component={MenuItem}
                                    onClick={handleMenuClose}
                                    variant="subtitle2"
                                    color="text.secondary"
                                >
                                    To Archive{' '}
                                </Typography>
                                <Typography
                                    component={MenuItem}
                                    onClick={handleMenuClose}
                                    variant="subtitle2"
                                    color="text.secondary"
                                >
                                    Other
                                </Typography>
                            </Menu>
                        </> :

                            (
                                row ? row[column.id] : <Skeleton variant="text" width={100} />
                            );
                return (

                    <TableCell sx={{ whiteSpace: 'nowrap', fontSize: 12 }} key={column.id} align={column.align}>

                        {value || "--"}

                    </TableCell>

                );
            })}
        </TableRow>
    );
};

export default KeysRow;
