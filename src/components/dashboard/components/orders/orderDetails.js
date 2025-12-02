'use client';
import React from 'react';
import {
    Container,
    Card,
    CardContent,
    Grid,
    Typography,
    Chip,
    Avatar,
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Divider,
    Stack,
    IconButton
} from '@mui/material';
import { Receipt, ArrowBack, Email, Phone, Person } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const OrderDetails = () => {
    const router = useRouter();

    // Sample order data - replace with actual API call
    const orderData = {
        id: '80005',
        orderNumber: '#90005',
        status: 'Completed',
        paymentMethod: 'reepay',
        currency: 'GBP',
        paymentStatus: 'Payment Received',
        updated: '2025-11-28 / 12:30 (1 hour ago)',
        date: '2025-11-28 / 12:29 (1 hour ago)',
        buyer: {
            name: 'Nohxz',
            email: 'bart.1251@hotmail.com',
            phone: '',
            avatar: 'https://cdn.vbrae.com/images/assets/img/user.png'
        },
        products: [
            {
                id: '2762',
                name: 'ARC Raiders Xbox Series X|S Account Access',
                image: 'https://cdn.vbrae.com/images/uploads/images/202511/30655c_06383.webp',
                seller: 'BigBoyGames',
                licenseKey: 'sent',
                unitPrice: 6.71,
                quantity: 1,
                vat: 1.68,
                serviceFees: 3.48,
                total: 11.87,
                status: 'Completed'
            },
            {
                id: '2540',
                name: 'METAL GEAR SOLID: SNAKE EATER Xbox Series X|S Account Access',
                image: 'https://cdn.vbrae.com/images/uploads/images/202508/img_x300_68a3a61ea64658-39177201-26549984.webp',
                seller: 'BigBoyGames',
                licenseKey: 'sent',
                unitPrice: 6.71,
                quantity: 1,
                vat: 1.68,
                serviceFees: 3.97,
                total: 12.36,
                status: 'Completed'
            }
        ],
        summary: {
            subtotal: 13.42,
            vat: 3.36,
            serviceFees: 7.45,
            couponDiscount: 1.21,
            total: 23.02
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'success';
            case 'Cancelled': return 'error';
            case 'Refunded': return 'warning';
            default: return 'default';
        }
    };

    return (
        <Container maxWidth="xl" sx={{ py: 3 }}>
            {/* Header */}
            <Box sx={{ mb: 4 }}>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                    <IconButton onClick={() => router.back()} sx={{ bgcolor: 'background.paper' }}>
                        <ArrowBack />
                    </IconButton>
                    <Typography variant="h4" fontWeight="600">
                        Order {orderData.orderNumber}
                    </Typography>
                    <Chip
                        label={orderData.status}
                        color={getStatusColor(orderData.status)}
                        sx={{ fontWeight: 500 }}
                    />
                    <Button
                        variant="contained"
                        startIcon={<Receipt />}
                        href={`/invoice/${orderData.orderNumber.replace('#', '')}`}
                        target="_blank"
                        sx={{ borderRadius: 2, ml: 'auto !important' }}
                    >
                        View Invoice
                    </Button>
                </Stack>

            </Box>


            {/* Order Information and Customer Details in one row */}
            <Stack spacing={3}>
                <Grid container spacing={3}>
                    {/* Order Information */}
                    <Grid item size={{ xs: 12, md: 8 }}>
                        <Card>
                            <CardContent sx={{ p: 4 }}>
                                <Typography variant="h6" fontWeight="600" sx={{ mb: 3, color: 'text.primary' }}>
                                    Order Information
                                </Typography>
                                <Stack spacing={2}>
                                    {[
                                        { label: 'Order ID', value: orderData.id },
                                        { label: 'Payment Method', value: orderData.paymentMethod },
                                        { label: 'Currency', value: orderData.currency },
                                        { label: 'Payment Status', value: orderData.paymentStatus },
                                        { label: 'Order Date', value: orderData.date },
                                        { label: 'Last Updated', value: orderData.updated }
                                    ].map((item, index) => (
                                        <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5, borderBottom: index < 5 ? '1px solid' : 'none', borderColor: 'divider' }}>
                                            <Typography variant="body2" color="text.secondary" fontWeight="500">
                                                {item.label}
                                            </Typography>
                                            <Typography variant="body2" fontWeight="600">
                                                {item.value}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Customer Details */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card>
                            <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                <Typography variant="h6" fontWeight="600" sx={{ mb: 3, color: 'text.primary' }}>
                                    Customer Details
                                </Typography>
                                <Avatar
                                    src={orderData.buyer.avatar}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        mx: 'auto',
                                        mb: 2,
                                        border: '4px solid',
                                        borderColor: 'primary.light'
                                    }}
                                >
                                    <Person sx={{ fontSize: 40 }} />
                                </Avatar>
                                <Typography variant="h6" fontWeight="600" sx={{ mb: 3 }}>
                                    {orderData.buyer.name}
                                </Typography>
                                <Stack spacing={2}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                                        <Email sx={{ fontSize: 18, color: 'text.secondary' }} />
                                        <Typography variant="body2" color="text.secondary">
                                            {orderData.buyer.email}
                                        </Typography>
                                    </Box>
                                    {orderData.buyer.phone && (
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                                            <Phone sx={{ fontSize: 18, color: 'text.secondary' }} />
                                            <Typography variant="body2" color="text.secondary">
                                                {orderData.buyer.phone}
                                            </Typography>
                                        </Box>
                                    )}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>



                {/* Products */}
                <Stack width={1}>
                    <Card>
                        <CardContent sx={{ p: 4 }}>
                            <Typography variant="h6" fontWeight="600" sx={{ mb: 3, color: 'text.primary' }}>
                                Order Items ({orderData.products.length})
                            </Typography>
                            <TableContainer sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 600 }}>Product</TableCell>
                                            <TableCell sx={{ fontWeight: 600 }}>License</TableCell>
                                            <TableCell sx={{ fontWeight: 600 }}>Price</TableCell>
                                            <TableCell sx={{ fontWeight: 600 }}>Qty</TableCell>
                                            <TableCell sx={{ fontWeight: 600 }}>VAT</TableCell>
                                            <TableCell sx={{ fontWeight: 600 }}>Fees</TableCell>
                                            <TableCell sx={{ fontWeight: 600 }}>Total</TableCell>
                                            <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {orderData.products.map((product) => (
                                            <TableRow hover key={product.id}>
                                                <TableCell>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                        <Avatar
                                                            src={product.image}
                                                            variant="rounded"
                                                            sx={{ width: 50, height: 50, borderRadius: 2 }}
                                                        />
                                                        <Box>
                                                            <Typography variant="body2" fontWeight="500" sx={{ mb: 0.5 }}>
                                                                {product.name}
                                                            </Typography>
                                                            <Typography variant="caption" color="text.secondary">
                                                                ID: {product.id} • By {product.seller}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </TableCell>
                                                <TableCell>
                                                    <Chip
                                                        label={product.licenseKey}
                                                        size="small"
                                                        color="success"
                                                        sx={{ fontWeight: 500 }}
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <Typography variant="body2" fontWeight="500">
                                                        £{product.unitPrice}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>{product.quantity}</TableCell>
                                                <TableCell>
                                                    <Typography variant="body2">
                                                        £{product.vat}
                                                        <Typography component="span" variant="caption" color="text.secondary">
                                                            {' '}(25%)
                                                        </Typography>
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>£{product.serviceFees}</TableCell>
                                                <TableCell>
                                                    <Typography variant="body2" fontWeight="600">
                                                        £{product.total}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Chip
                                                        label={product.status}
                                                        size="small"
                                                        color="success"
                                                        variant="outlined"
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Stack>

                {/* Order Activity and Summary */}
                <Grid container spacing={3}>
                    {/* Order Activity */}
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Card sx={{ height: 1 }}>
                            <CardContent sx={{ p: 4 }}>
                                <Typography variant="h6" fontWeight="600" sx={{ mb: 3, color: 'text.primary' }}>
                                    Order Activity
                                </Typography>
                                <Stack spacing={3}>
                                    {[
                                        {
                                            status: 'Order Placed',
                                            time: '2025-11-28 / 12:29',
                                            description: 'Order was successfully placed by customer',
                                            color: 'primary'
                                        },
                                        {
                                            status: 'Payment Received',
                                            time: '2025-11-28 / 12:30',
                                            description: 'Payment of £23.02 received via reepay',
                                            color: 'success'
                                        },
                                        {
                                            status: 'License Keys Sent',
                                            time: '2025-11-28 / 12:31',
                                            description: 'Digital license keys delivered to customer',
                                            color: 'info'
                                        },
                                        {
                                            status: 'Order Completed',
                                            time: '2025-11-28 / 12:32',
                                            description: 'Order marked as completed',
                                            color: 'success'
                                        }
                                    ].map((activity, index) => (
                                        <Box key={index} sx={{ display: 'flex', gap: 2 }}>
                                            <Box sx={{
                                                width: 12,
                                                height: 12,
                                                borderRadius: '50%',
                                                bgcolor: `${activity.color}.main`,
                                                mt: 0.5,
                                                flexShrink: 0
                                            }} />
                                            <Box sx={{ flex: 1 }}>
                                                <Typography variant="body2" fontWeight="600" sx={{ mb: 0.5 }}>
                                                    {activity.status}
                                                </Typography>
                                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                                    {activity.time}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {activity.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Order Summary */}
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Card>
                            <CardContent sx={{ p: 4 }}>
                                <Typography variant="h6" fontWeight="600" sx={{ mb: 3, color: 'text.primary' }}>
                                    Order Summary
                                </Typography>
                                <Stack spacing={2}>
                                    {[
                                        { label: 'Subtotal', value: orderData.summary.subtotal },
                                        { label: 'VAT', value: orderData.summary.vat },
                                        { label: 'Service Fees', value: orderData.summary.serviceFees },
                                        { label: 'Coupon Discount (-)', value: orderData.summary.couponDiscount, isDiscount: true }
                                    ].map((item, index) => (
                                        <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
                                            <Typography variant="body1" color="text.secondary">
                                                {item.label}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                fontWeight="500"
                                                color={item.isDiscount ? 'success.main' : 'text.primary'}
                                            >
                                                {item.isDiscount ? '-' : ''}£{item.value}
                                            </Typography>
                                        </Box>
                                    ))}
                                    <Divider sx={{ my: 2 }} />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2, bgcolor: 'primary.50', px: 3, borderRadius: 2 }}>
                                        <Typography variant="h6" fontWeight="700">
                                            Total Amount
                                        </Typography>
                                        <Typography variant="h6" fontWeight="700" color="primary.main">
                                            £{orderData.summary.total}
                                        </Typography>
                                    </Box>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        fullWidth
                                        sx={{
                                            mt: 3,
                                            fontWeight: 600,
                                            textTransform: 'none'
                                        }}
                                    >
                                        Mark as Complete
                                    </Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Stack>
        </Container>
    );
};

export default OrderDetails;