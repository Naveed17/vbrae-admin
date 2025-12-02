import React from 'react';
import { useRouter } from 'next/navigation';
import {
    TableCell,
    TableRow,
    Skeleton,
    Chip,
    Box,
    Menu,
    MenuItem,
    IconButton,
    Button,
} from '@mui/material';
import { MoreVert, Settings, Info } from '@mui/icons-material';

const ResolutionCenterRow = ({ row, columns, key = 0, handleTableAction }) => {
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAction = (action) => {
        if (action === 'details') {
            router.push(`/admin/resolution-center/${row.id}`);
        } else {
            handleTableAction({ action, data: row });
        }
        handleClose();
    };

    return (
        <TableRow hover tabIndex={-1} key={key}>
            {columns.map((column) => {
                let value;

                if (column.id === 'status') {
                    const getStatusColor = (status) => {
                        if (status.includes('Completed')) return 'success';
                        if (status.includes('Pending')) return 'warning';
                        if (status.includes('Rejected')) return 'error';
                        return 'default';
                    };
                    value = <Chip label={row[column.id]} size="small" color={getStatusColor(row[column.id])} />;
                } else if (column.id === 'action') {
                    value = (
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Button
                                size="small"
                                variant="contained"
                                color="error"
                                onClick={() => handleAction('overtake')}
                                startIcon={<Settings />}
                                sx={{ fontSize: '10px', py: 0.25, px: 1 }}
                            >
                                Overtake
                            </Button>
                            <IconButton onClick={handleClick} size="small">
                                <MoreVert />
                            </IconButton>
                            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                <MenuItem onClick={() => handleAction('details')}>
                                    <Info sx={{ fontSize: '18px', mr: 1 }} />
                                    Details
                                </MenuItem>
                            </Menu>
                        </Box>
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

export default ResolutionCenterRow;
