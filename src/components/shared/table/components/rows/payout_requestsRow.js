import React from 'react';
import {
    TableCell,
    TableRow,
    Skeleton,
    Chip,
    Avatar,
    Box,
    Typography,
    Menu,
    MenuItem,
    IconButton,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    List,
    ListItem,
    ListItemText
} from '@mui/material';
import { MoreVert, CheckCircle, Delete, Close } from '@mui/icons-material';

const PayoutRequestsRow = ({ row, columns, key = 0, handleTableAction, activeTab }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openModal, setOpenModal] = React.useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAction = (action) => {
        handleTableAction({ action, data: row });
        handleClose();
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleInvoice = () => {
        window.open(`/invoice/${row.id}`, '_blank');
    };

    return (
        <>
            <TableRow hover tabIndex={-1} key={key}>
                {columns.map((column) => {
                    let value;

                    if (column.id === 'user') {
                        value = (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Avatar src={row.user?.avatar} sx={{ width: 32, height: 32 }}>
                                    {row.user?.name?.charAt(0)}
                                </Avatar>
                                <Typography variant="body2">{row.user?.name}</Typography>
                            </Box>
                        );
                    } else if (column.id === 'status') {
                        const getStatusColor = (status) => {
                            switch (status) {
                                case 'Completed': return 'success';
                                case 'Pending': return 'warning';
                                case 'Rejected': return 'error';
                                default: return 'default';
                            }
                        };
                        value = <Chip label={row[column.id]} size="small" color={getStatusColor(row[column.id])} />;
                    } else if (column.id === 'withdrawal_method') {
                        value = (
                            <Box>
                                <Typography variant="body2" sx={{ mb: 0.5 }}>{row.withdrawal_method}</Typography>
                                <Box sx={{ display: 'flex', gap: 0.5 }}>
                                    {activeTab === 'pending' &&
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="primary"
                                            onClick={handleOpenModal}
                                            sx={{ fontSize: '10px', py: 0.25, px: 1 }}
                                        >
                                            See Details
                                        </Button>}

                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="info"
                                        onClick={handleInvoice}
                                        sx={{ fontSize: '10px', py: 0.25, px: 1 }}
                                    >
                                        Invoice
                                    </Button>
                                </Box>
                            </Box>
                        );
                    } else if (column.id === 'options') {
                        value = (
                            <>
                                <IconButton onClick={handleClick} size="small">
                                    <MoreVert />
                                </IconButton>
                                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                    {activeTab === 'pending' &&
                                        <MenuItem onClick={() => handleAction('complete')}>
                                            <CheckCircle sx={{ fontSize: '18px', mr: 1 }} />
                                            Mark as Completed
                                        </MenuItem>
                                    }
                                    <MenuItem onClick={() => handleAction('delete')}>
                                        <Delete sx={{ fontSize: '18px', mr: 1 }} />
                                        Delete
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

            <Dialog open={openModal} onClose={handleCloseModal} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ m: 0, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    Payout Details
                    <IconButton
                        aria-label="close"
                        onClick={handleCloseModal}
                        sx={{
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <Close />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="User"
                                secondary={<strong>{row.user?.name}</strong>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="BTC Address"
                                secondary={<strong>{row.btc_address || '38XgUbi1Qsbkcjkc6yu1LHPsDoAvFf1hzJ'}</strong>}
                            />
                        </ListItem>
                    </List>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default PayoutRequestsRow;
