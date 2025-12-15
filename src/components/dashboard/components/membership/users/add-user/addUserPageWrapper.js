'use client';
import React, { useState } from 'react';
import {
    Container,
    Card,
    CardContent,
    CardHeader,
    TextField,
    Button,
    Box,
    Stack,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material';

function AddUserPageWrapper() {
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        roleId: '',
    });

    const roles = [
        { id: '1', name: 'Super Admin' },
        { id: '2', name: 'Vendor' },
        { id: '3', name: 'Member' },
        { id: '4', name: 'Moderator' },
        { id: '5', name: 'SEO Mission' },
        { id: '6', name: 'Full Site SEO' },
    ];

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Add user:', formData);
    };

    return (
        <Container maxWidth={false} sx={{ py: 4 }}>
            <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
                <CardHeader title="Add User" />
                <CardContent sx={{ p: 3 }}>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2.5}>
                            <TextField
                                fullWidth
                                size="normal"
                                placeholder="Username"
                                value={formData.username}
                                onChange={(e) => handleChange('username', e.target.value)}
                                required
                            />
                            <TextField
                                fullWidth
                                size="normal"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={(e) => handleChange('firstName', e.target.value)}
                                required
                            />
                            <TextField
                                fullWidth
                                size="normal"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={(e) => handleChange('lastName', e.target.value)}
                                required
                            />
                            <TextField
                                fullWidth
                                type="email"
                                size="normal"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                required
                            />
                            <TextField
                                fullWidth
                                type="password"
                                size="normal"
                                placeholder="Password"
                                value={formData.password}
                                onChange={(e) => handleChange('password', e.target.value)}
                                required
                            />
                            <FormControl fullWidth>

                                <Select
                                    value={formData.roleId}
                                    onChange={(e) => handleChange('roleId', e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Role' }}
                                    size="normal"
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <span>Select</span>;
                                        }
                                        return roles.find(role => role.id === selected).name;
                                    }}

                                >
                                    {roles.map(role => (
                                        <MenuItem key={role.id} value={role.id}>{role.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 2 }}>
                                <Button type="submit" variant="contained" color="primary">
                                    Add User
                                </Button>
                            </Box>
                        </Stack>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
}

export default AddUserPageWrapper;
