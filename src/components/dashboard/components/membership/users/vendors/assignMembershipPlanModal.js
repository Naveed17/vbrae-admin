'use client';
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const plans = [
    { id: '4', label: 'Tier 1' },
    { id: '5', label: 'Tier 2' },
];

const AssignMembershipPlanModal = ({ open, onClose, data }) => {
    const [selectedPlan, setSelectedPlan] = useState('');

    const handleSave = () => {
        console.log('Assigning plan:', selectedPlan);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle sx={{ pb: 2 }}>Assign Membership Plan</DialogTitle>
            <DialogContent sx={{ py: 3, '&.MuiDialogContent-root.MuiDialogContent-root': { pt: 3 } }}>
                <FormControl fullWidth size="normal">
                    <Select
                        displayEmpty
                        value={selectedPlan}
                        onChange={(e) => setSelectedPlan(e.target.value)}
                        renderValue={(selected) => {
                            if (!selected) {
                                return <span>Select</span>
                            }
                            return plans.find(p => p.id === selected)?.label || selected
                        }}
                    >
                        <MenuItem value="">Select</MenuItem>
                        {plans.map((plan) => (
                            <MenuItem key={plan.id} value={plan.id}>{plan.label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions sx={{ '&.MuiDialogActions-root.MuiDialogActions-root': { p: 1.5 }, borderTop: 1, borderColor: 'divider' }}>
                <Button onClick={onClose} variant="outlined">Close</Button>
                <Button onClick={handleSave} variant="contained" color="success">Submit</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AssignMembershipPlanModal;
