'use client';
import React, { useState } from 'react';
import { Drawer, Box, TextField, Button, Typography, Divider, FormGroup, FormControlLabel, Checkbox, Grid } from '@mui/material';

const permissions = [
    { id: '1', label: 'Admin Panel' },
    { id: '2', label: 'Vendor' },
    { id: '3', label: 'Navigation' },
    { id: '4', label: 'Slider' },
    { id: '5', label: 'Homepage Manager' },
    { id: '6', label: 'Orders' },
    { id: '7', label: 'Digital Sales' },
    { id: '8', label: 'Earnings' },
    { id: '9', label: 'Payouts' },
    { id: '10', label: 'Refund Requests' },
    { id: '11', label: 'Products' },
    { id: '12', label: 'Quote Requests' },
    { id: '13', label: 'Categories' },
    { id: '14', label: 'Custom Fields' },
    { id: '15', label: 'Pages' },
    { id: '16', label: 'Blog' },
    { id: '17', label: 'Location' },
    { id: '18', label: 'Membership' },
    { id: '19', label: 'Help Center' },
    { id: '20', label: 'Storage' },
    { id: '21', label: 'Cache System' },
    { id: '22', label: 'Seo Tools' },
    { id: '23', label: 'Ad Spaces' },
    { id: '24', label: 'Contact Messages' },
    { id: '25', label: 'Reviews' },
    { id: '26', label: 'Comments' },
    { id: '27', label: 'Abuse Reports' },
    { id: '28', label: 'Newsletter' },
    { id: '29', label: 'Preferences' },
    { id: '30', label: 'General Settings' },
    { id: '31', label: 'Product Settings' },
    { id: '32', label: 'Payment Settings' },
    { id: '33', label: 'Visual Settings' },
    { id: '34', label: 'System Settings' },
    { id: '35', label: 'Template' },
];

const RolesFormDrawer = ({ open, onClose, data }) => {
    const [formData, setFormData] = useState(data || {
        role_name_1: '',
        role_name_3: '',
        role_name_4: '',
        role_name_5: '',
        role_name_6: '',
        permissions: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePermissionChange = (permId) => {
        setFormData(prev => ({
            ...prev,
            permissions: prev.permissions.includes(permId)
                ? prev.permissions.filter(p => p !== permId)
                : [...prev.permissions, permId]
        }));
    };

    const handleSave = () => {
        console.log('Saving role:', formData);
        onClose();
    };

    return (
        <Drawer anchor="right" open={open} onClose={onClose} sx={{ '& .MuiDrawer-paper': { width: 500 } }}>
            <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>{data ? 'Edit Role' : 'Add Role'}</Typography>
                <Divider sx={{ mb: 3 }} />

                <Box sx={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField size="normal" placeholder="Role Name (English)" name="role_name_1" value={formData.role_name_1} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="Role Name (German)" name="role_name_3" value={formData.role_name_3} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="Role Name (French)" name="role_name_4" value={formData.role_name_4} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="Role Name (Italian)" name="role_name_5" value={formData.role_name_5} onChange={handleChange} fullWidth />
                    <TextField size="normal" placeholder="Role Name (Spanish)" name="role_name_6" value={formData.role_name_6} onChange={handleChange} fullWidth />

                    <Divider sx={{ my: 1 }} />
                    <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>Permissions</Typography>

                    <Grid container spacing={2}>
                        {permissions.map((perm) => (
                            <Grid item size={6} key={perm.id}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={formData.permissions.includes(perm.id)}
                                            onChange={() => handlePermissionChange(perm.id)}
                                        />
                                    }
                                    label={<Typography variant="body2">{perm.label}</Typography>}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ display: 'flex', gap: 1, mt: 3, pt: 2, borderTop: 1, borderColor: 'divider' }}>
                    <Button variant="outlined" onClick={onClose} fullWidth>Cancel</Button>
                    <Button variant="contained" onClick={handleSave} fullWidth>{data ? 'Update Role' : 'Add Role'}</Button>
                </Box>
            </Box>
        </Drawer>
    );
};

export default RolesFormDrawer;
