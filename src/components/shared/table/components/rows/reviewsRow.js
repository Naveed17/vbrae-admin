'use client';
import React from 'react';
import { TableCell, TableRow, Checkbox, Menu, MenuItem, IconButton } from '@mui/material';
import { MoreVert, Delete } from '@mui/icons-material';

const ReviewsRow = ({ row, columns, key = 0, handleTableAction, selected, handleSelect }) => {
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
    console.log(selected);
    return (
        <TableRow hover tabIndex={-1} key={key}>
            {columns.map((column) => {
                let value;

                if (column.id === 'checkbox') {
                    value = <Checkbox checked={selected.indexOf(row) !== -1} onChange={(event) => handleSelect(event, row)} />;
                } else if (column.id === 'action') {
                    value = (
                        <>
                            <IconButton onClick={handleClickOpen} size="small">
                                <MoreVert />
                            </IconButton>
                            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                <MenuItem onClick={() => handleAction('delete')}>
                                    <Delete sx={{ mr: 1, fontSize: 18 }} />
                                    Delete
                                </MenuItem>
                            </Menu>
                        </>
                    );
                } else {
                    value = row ? row[column.id] : '--';
                }

                return (
                    <TableCell
                        sx={{ whiteSpace: 'nowrap', fontSize: 12 }}
                        key={column.id}
                        align={column.align}
                    >
                        {value || '--'}
                    </TableCell>
                );
            })}
        </TableRow>
    );
};

export default ReviewsRow;
