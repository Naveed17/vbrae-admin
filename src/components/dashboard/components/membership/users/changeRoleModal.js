'use client';
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, FormControlLabel, Radio, RadioGroup, Box } from '@mui/material';

const roles = [
    { id: '1', label: 'Super Admin' },
    { id: '2', label: 'Vendor' },
    { id: '3', label: 'Member' },
    { id: '4', label: 'Moderator' },
    { id: '5', label: 'SEO Mission' },
    { id: '6', label: 'Full Site SEO' },
];

const ChangeRoleModal = ({ open, onClose, data }) => {
    const [selectedRole, setSelectedRole] = useState(data?.role || '1');

    const handleSave = () => {
        console.log('Changing role to:', selectedRole);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle sx={{ pb: 2 }}>Change User Role</DialogTitle>
            <DialogContent sx={{ py: 3, '&.MuiDialogContent-root.MuiDialogContent-root': { pt: 3 } }}>
                <RadioGroup value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                        {roles.map((role) => (
                            <FormControlLabel
                                key={role.id}
                                value={role.id}
                                control={<Radio />}
                                label={role.label}
                            />
                        ))}
                    </Box>
                </RadioGroup>
            </DialogContent>
            <DialogActions sx={{ '&.MuiDialogActions-root.MuiDialogActions-root': { p: 1.5 }, borderTop: 1, borderColor: 'divider' }}>
                <Button onClick={onClose} variant="outlined">Close</Button>
                <Button onClick={handleSave} variant="contained" color="success">Save Changes</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ChangeRoleModal;
