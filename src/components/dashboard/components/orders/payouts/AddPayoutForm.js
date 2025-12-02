'use client';
import React from 'react';
import { Box, Typography, Select, MenuItem, TextField, Button, FormHelperText } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddPayoutForm = ({ onClose, onSubmit }) => {
    const validationSchema = Yup.object({
        userId: Yup.string().required('User is required'),
        withdrawalMethod: Yup.string().required('Withdrawal Method is required'),
        withdrawalAmount: Yup.number()
            .required('Withdrawal Amount is required')
            .positive('Amount must be positive')
            .typeError('Amount must be a number'),
        status: Yup.string().required('Status is required')
    });

    const formik = useFormik({
        initialValues: {
            userId: '',
            withdrawalMethod: '',
            withdrawalAmount: '',
            status: 'pending'
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (onSubmit) {
                onSubmit(values);
            }
            onClose();
        }
    });

    return (
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
            <Box sx={{ flex: 1, overflowY: 'auto', p: 3, pt: 2, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {/* User Selection */}
                <Box>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>
                        User <span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <Select
                        fullWidth
                        {...formik.getFieldProps('userId')}
                        displayEmpty
                        error={formik.touched.userId && Boolean(formik.errors.userId)}
                        size="normal"
                    >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="1">1 -- admin -- $1,324.37</MenuItem>
                        <MenuItem value="5">5 -- Freaky -- $367,602.01</MenuItem>
                        <MenuItem value="10">10 -- tmmarious -- $118,628.25</MenuItem>
                        <MenuItem value="18">18 -- Moncef Ahmani -- $57.21</MenuItem>
                        <MenuItem value="69">69 -- PYNESTORE -- $21.92</MenuItem>
                        <MenuItem value="965">965 -- Instant Keyz -- $4.31</MenuItem>
                        <MenuItem value="1424">1424 -- SoftKeyCart.Com -- $4.28</MenuItem>
                        <MenuItem value="1415">1415 -- BigBoyGames -- $142.91</MenuItem>
                        <MenuItem value="1664">1664 -- OCEAN GAMES -- $24.47</MenuItem>
                    </Select>
                    {formik.touched.userId && formik.errors.userId && (
                        <FormHelperText error>{formik.errors.userId}</FormHelperText>
                    )}
                </Box>

                {/* Withdrawal Method */}
                <Box>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>
                        Withdrawal Method <span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <Select
                        fullWidth
                        {...formik.getFieldProps('withdrawalMethod')}
                        displayEmpty
                        error={formik.touched.withdrawalMethod && Boolean(formik.errors.withdrawalMethod)}
                        size="normal"
                    >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="bitcoin">Bitcoin (BTC)</MenuItem>
                        <MenuItem value="paypal">PayPal</MenuItem>
                        <MenuItem value="bank">Bank Transfer</MenuItem>
                    </Select>
                    {formik.touched.withdrawalMethod && formik.errors.withdrawalMethod && (
                        <FormHelperText error>{formik.errors.withdrawalMethod}</FormHelperText>
                    )}
                </Box>

                {/* Withdrawal Amount */}
                <Box>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>
                        Withdrawal Amount (USD) <span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <TextField
                        fullWidth
                        {...formik.getFieldProps('withdrawalAmount')}
                        type="number"
                        placeholder="Enter amount"
                        error={formik.touched.withdrawalAmount && Boolean(formik.errors.withdrawalAmount)}
                        helperText={formik.touched.withdrawalAmount && formik.errors.withdrawalAmount}
                        size="normal"
                        inputProps={{ step: "0.01", min: "0" }}
                    />
                </Box>

                {/* Status */}
                <Box>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>
                        Status <span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <Select
                        fullWidth
                        {...formik.getFieldProps('status')}
                        error={formik.touched.status && Boolean(formik.errors.status)}
                        size="normal"
                    >
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="completed">Completed</MenuItem>
                        <MenuItem value="rejected">Rejected</MenuItem>
                    </Select>
                    {formik.touched.status && formik.errors.status && (
                        <FormHelperText error>{formik.errors.status}</FormHelperText>
                    )}
                </Box>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ p: 3, borderTop: '1px solid', borderColor: 'divider', display: 'flex', gap: 2 }}>
                <Button
                    variant="outlined"
                    fullWidth
                    onClick={onClose}
                    type="button"
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                >
                    Add Payout
                </Button>
            </Box>
        </Box>
    );
};

export default AddPayoutForm;
