'use client';
import React, { useRef } from 'react';
import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography, Grid } from '@mui/material';
import { Download, Print, ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const invoiceData = {
    90066: {
        invoiceNumber: '#90066',
        date: '1 December 2025',
        buyer: 'Jim',
        country: 'United States',
        paymentStatus: 'Awaiting Payment',
        paymentMethod: 'reepay',
        currency: 'USD',
        items: [
            {
                seller: 'Softwareking',
                productId: '1774',
                description: 'Adobe Acrobat Pro DC 2019 PC (1 Device, Lifetime) - Adobe Key - GLOBAL',
                quantity: 1,
                unitPrice: 6.96,
                vat: 0,
                serviceFees: 4.57,
                total: 11.53,
            },
        ],
        subtotal: 6.96,
        serviceFees: 4.57,
        total: 11.53,
    },
};

function InvoiceDetail({ invoiceId }) {
    const router = useRouter();
    const invoice = invoiceData[invoiceId] || invoiceData[90066];
    const invoiceRef = useRef();

    const downloadPDF = async () => {
        try {
            const html2canvas = (await import('html2canvas')).default;
            const jsPDF = (await import('jspdf')).jsPDF;

            await new Promise(resolve => setTimeout(resolve, 1000));
            const element = invoiceRef.current;
            const canvas = await html2canvas(element, {
                scale: 2,
                backgroundColor: '#ffffff',
                allowTaint: true,
                useCORS: true,
                logging: false
            });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save(`invoice-${invoice.invoiceNumber}.pdf`);
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', p: 3 }}>
            <Box sx={{ maxWidth: 900, mx: 'auto' }}>
                <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
                    <Button startIcon={<ArrowBack />} onClick={() => router.back()}>
                        Back
                    </Button>
                    <Button variant="contained" startIcon={<Download />} onClick={downloadPDF}>
                        Download PDF
                    </Button>
                    <Button variant="outlined" startIcon={<Print />} onClick={() => window.print()}>
                        Print
                    </Button>
                </Box>

                <Box ref={invoiceRef} sx={{ backgroundColor: '#ffffff', p: 4 }}>
                    <Box sx={{ mb: 4, textAlign: 'center' }}>
                        <Typography variant="h3" sx={{ fontWeight: 300, mb: 2, color: '#000' }}>
                            Invoice
                        </Typography>
                    </Box>

                    <Grid container spacing={4} sx={{ mb: 4 }}>
                        <Grid item xs={6}>
                            <Box sx={{ mb: 2 }}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="https://cdn.vbrae.com/images/uploads/logo/logo_626ee8fda0b62.png" alt="logo" style={{ width: 120, height: 'auto', display: 'block' }} />
                            </Box>
                            <Typography variant="body2" sx={{ color: '#666' }}>
                                Oskarström - Hantversksgatan 12 - 31331
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Typography variant="body2" sx={{ mb: 1, color: '#000' }}>
                                <strong>Invoice:</strong> {invoice.invoiceNumber}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#000' }}>
                                <strong>Date:</strong> {invoice.date}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={4} sx={{ mb: 4 }}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: '#000' }}>
                                Client Information
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1, color: '#000' }}>
                                {invoice.buyer}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666' }}>
                                {invoice.country}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: '#000' }}>
                                Payment Details
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1, color: '#000' }}>
                                <strong>Status:</strong> {invoice.paymentStatus}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1, color: '#000' }}>
                                <strong>Method:</strong> {invoice.paymentMethod}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#000' }}>
                                <strong>Currency:</strong> {invoice.currency}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Box sx={{ mb: 4, overflow: 'visible' }}>
                        <Table sx={{ tableLayout: 'fixed', width: '100%' }}>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                                    <TableCell sx={{ fontWeight: 600, color: '#000', fontSize: '12px', width: '12%' }}>Seller</TableCell>
                                    <TableCell sx={{ fontWeight: 600, color: '#000', fontSize: '12px', width: '10%' }}>Product Id</TableCell>
                                    <TableCell sx={{ fontWeight: 600, color: '#000', fontSize: '12px', width: '35%' }}>Description</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 600, color: '#000', fontSize: '12px', width: '8%' }}>Qty</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 600, color: '#000', fontSize: '12px', width: '12%' }}>Unit Price</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 600, color: '#000', fontSize: '12px', width: '10%' }}>VAT</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 600, color: '#000', fontSize: '12px', width: '13%' }}>Service Fees</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 600, color: '#000', fontSize: '12px', width: '10%' }}>Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {invoice.items.map((item, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell sx={{ color: '#000', fontSize: '12px', whiteSpace: 'nowrap', wordBreak: 'break-word', overflow: 'hidden' }}>{item.seller}</TableCell>
                                        <TableCell sx={{ color: '#000', fontSize: '12px', whiteSpace: 'normal', wordBreak: 'break-word' }}>{item.productId}</TableCell>
                                        <TableCell sx={{ color: '#000', fontSize: '12px', whiteSpace: 'normal', wordBreak: 'break-word' }}>{item.description}</TableCell>
                                        <TableCell align="center" sx={{ color: '#000', fontSize: '12px', whiteSpace: 'normal', wordBreak: 'break-word' }}>{item.quantity}</TableCell>
                                        <TableCell align="right" sx={{ color: '#000', fontSize: '12px', whiteSpace: 'normal', wordBreak: 'break-word' }}>${item.unitPrice.toFixed(2)}</TableCell>
                                        <TableCell align="right" sx={{ color: '#000', fontSize: '12px', whiteSpace: 'normal', wordBreak: 'break-word' }}>${item.vat.toFixed(2)}</TableCell>
                                        <TableCell align="right" sx={{ color: '#000', fontSize: '12px', whiteSpace: 'normal', wordBreak: 'break-word' }}>${item.serviceFees.toFixed(2)}</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 600, color: '#000', fontSize: '12px', whiteSpace: 'normal', wordBreak: 'break-word' }}>${item.total.toFixed(2)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Box sx={{ width: 300 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, pb: 1, borderBottom: '1px solid #e0e0e0' }}>
                                <Typography variant="body2" sx={{ color: '#000' }}>Subtotal</Typography>
                                <Typography variant="body2" sx={{ color: '#000' }}>${invoice.subtotal.toFixed(2)}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, pb: 1, borderBottom: '1px solid #e0e0e0' }}>
                                <Typography variant="body2" sx={{ color: '#000' }}>Service Fees</Typography>
                                <Typography variant="body2" sx={{ color: '#000' }}>${invoice.serviceFees.toFixed(2)}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 1 }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#000' }}>Total</Typography>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#000' }}>${invoice.total.toFixed(2)}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <style>{`
                @media print {
                    body {
                        margin: 0;
                        padding: 0;
                        background-color: #ffffff;
                    }
                    * {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    button {
                        display: none !important;
                    }
                    table {
                        width: 100% !important;
                        table-layout: auto !important;
                    }
                    td, th {
                        word-break: break-word !important;
                        overflow: visible !important;
                        padding: 8px !important;
                    }
                    tr {
                        page-break-inside: avoid !important;
                    }
                }
            `}</style>
        </Box>
    );
}

export default InvoiceDetail;
