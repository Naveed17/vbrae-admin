'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box, Typography } from '@mui/material';
import React, { useState } from 'react';

const columns = [
    { id: 'product', label: 'Product', align: 'left', sortable: true },
    { id: 'issue', label: 'Issue', align: 'left', sortable: true },
    { id: 'preferredSolution', label: 'Preferred Solution', align: 'left', sortable: true },
    { id: 'buyer', label: 'Buyer', align: 'left', sortable: true },
    { id: 'seller', label: 'Seller', align: 'left', sortable: true },
    { id: 'status', label: 'Status', align: 'left', sortable: true },
    { id: 'updated', label: 'Updated', align: 'left', sortable: true },
    { id: 'date', label: 'Date', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: 665,
        product: '#89982 - ARC Raiders Xbox Series X|S Account Access',
        issue: 'Other Issue',
        preferredSolution: 'Refund Key Amount',
        buyer: 'Fen',
        seller: 'BigBoyGames',
        status: 'Refund Completed',
        updated: '4 days ago',
        date: '2025-11-27 / 07:09',
    },
];

function ResolutionCenterPageWrapper() {
    const [openOvertakeDialog, setOpenOvertakeDialog] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const [reason, setReason] = useState('');

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'overtake') {
            setSelectedData(data);
            setOpenOvertakeDialog(true);
        } else if (action === 'details') {
            console.log('View details:', data);
        }
    };

    const handleOvertakeSubmit = () => {
        console.log('Overtake control:', selectedData, 'Reason:', reason);
        setOpenOvertakeDialog(false);
        setReason('');
        setSelectedData(null);
    };

    const handleCloseDialog = () => {
        setOpenOvertakeDialog(false);
        setReason('');
        setSelectedData(null);
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Resolution Center" />
                <CardContent>
                    <EnhanceTable
                        handleTableAction={handleTableActions}
                        rows={rows}
                        from="resolution_center"
                        columns={columns}
                    />
                </CardContent>
            </Card>

            <Dialog open={openOvertakeDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
                <DialogTitle>Overtake Control</DialogTitle>
                <DialogContent sx={{ pt: 2 }}>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        Are you certain that you intended to overtake this request?
                    </Typography>
                    {selectedData && (
                        <Box sx={{ mb: 2, p: 1.5, bgcolor: 'background.default', borderRadius: 1 }}>
                            <Typography variant="caption" sx={{ fontWeight: 600 }}>Request ID:</Typography>
                            <Typography variant="body2">{selectedData.id}</Typography>
                        </Box>
                    )}
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        label="Reason (Optional)"
                        placeholder="Enter reason for overtaking..."
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleOvertakeSubmit} variant="contained" color="error">
                        Overtake
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default ResolutionCenterPageWrapper;
