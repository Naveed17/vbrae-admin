'use client';
import { Card, CardContent, CardHeader, Container, TextField, Box, Typography, Button, Grid, Chip, Avatar, List, ListItem, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import FileUpload from '@/components/shared/uploads';
import React, { useState } from 'react';

const mockData = {
    665: {
        id: 665,
        product: '#89982 - ARC Raiders Xbox Series X|S Account Access',
        issue: 'Other Issue',
        preferredSolution: 'Refund Key Amount',
        buyer: 'Fen',
        seller: 'BigBoyGames',
        status: 'Refund Completed',
        updated: '4 days ago',
        date: '2025-11-27 / 07:09',
        selectedKeys: ['HI MESSAGE ME WITH ORDER NUMBER THANKS'],
        messages: [
            {
                user: 'Fen',
                avatar: 'https://vbrae.com/uploads/profile/avatar_6927f4a51c33e2-66616013-67016815.webp',
                time: '5 days ago',
                message: "When I press the activation guide button, it doesn't give me the product I bought.",
            },
            {
                user: 'BigBoyGames',
                avatar: 'https://vbrae.com/uploads/profile/avatar_6482e80cb487a8-28075183-53573051.webp',
                time: '5 days ago',
                message: 'The item is manual delivery thanks',
            },
        ],
        screenshots: ['https://vbrae.com/uploads/refund_screenshots/refund-request-665-image_1.webp'],
    },
};

function ResolutionDetailsPageWrapper({ id }) {
    const data = mockData[id] || mockData[665];
    const [openScreenshots, setOpenScreenshots] = useState(false);
    const [currentScreenshot, setCurrentScreenshot] = useState(0);
    const [message, setMessage] = useState('');
    const [attachments, setAttachments] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [fileNames, setFileNames] = useState([]);

    const handleFileSelect = (files) => {
        const fileArray = Array.isArray(files) ? files : [files];
        setAttachments(fileArray);
        
        const newPreviews = fileArray.map(file => URL.createObjectURL(file));
        const newFileNames = fileArray.map(file => file.name);
        
        setPreviews(newPreviews);
        setFileNames(newFileNames);
    };

    const handleFileRemove = () => {
        setAttachments([]);
        setPreviews([]);
        setFileNames([]);
    };

    const handleSubmitMessage = (e) => {
        e.preventDefault();
        console.log('Message submitted:', message, 'Attachments:', attachments);
        setMessage('');
        setAttachments([]);
        setPreviews([]);
        setFileNames([]);
    };

    const getStatusColor = (status) => {
        if (status.includes('Completed')) return 'success';
        if (status.includes('Pending')) return 'warning';
        if (status.includes('Rejected')) return 'error';
        return 'default';
    };

    return (
        <Container maxWidth={false}>
            <Card sx={{ mb: 3 }}>
                <CardHeader title="Resolution Details" />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Product</Typography>
                            <Typography variant="body2">{data.product}</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Status</Typography>
                            <Chip label={data.status} size="small" color={getStatusColor(data.status)} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Issue</Typography>
                            <Typography variant="body2">{data.issue}</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Preferred Solution</Typography>
                            <Typography variant="body2">{data.preferredSolution}</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Buyer</Typography>
                            <Typography variant="body2">{data.buyer}</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Seller</Typography>
                            <Typography variant="body2">{data.seller}</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Last Update</Typography>
                            <Typography variant="body2">{data.updated}</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Date</Typography>
                            <Typography variant="body2">{data.date}</Typography>
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Selected Keys</Typography>
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                {data.selectedKeys.map((key, idx) => (
                                    <Chip key={idx} label={key} variant="outlined" />
                                ))}
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <Button variant="contained" color="primary" onClick={() => setOpenScreenshots(true)}>
                                View Screenshots
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Card sx={{ mb: 3 }}>
                <CardHeader title="Messages" />
                <CardContent>
                    <List>
                        {data.messages.map((msg, idx) => (
                            <ListItem key={idx} sx={{ mb: 2, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                                <Avatar src={msg.avatar} sx={{ mr: 2, width: 40, height: 40 }} />
                                <Box sx={{ flex: 1 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{msg.user}</Typography>
                                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>{msg.time}</Typography>
                                    </Box>
                                    <Typography variant="body2">{msg.message}</Typography>
                                </Box>
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>

            <Card>
                <CardHeader title="Add Message" />
                <CardContent>
                    <form onSubmit={handleSubmitMessage}>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            placeholder="Type your message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Attachments</Typography>
                            <FileUpload
                                accept=".png,.jpg,.jpeg"
                                maxSize={1024 * 1024}
                                multiple={true}
                                onFileSelect={handleFileSelect}
                                onFileRemove={handleFileRemove}
                                previews={previews}
                                fileNames={fileNames}
                                placeholder="Click to upload or drag & drop"
                                description="Max 3 screenshots (Only jpg, jpeg and png attachments are allowed)"
                            />
                        </Box>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <Dialog open={openScreenshots} onClose={() => setOpenScreenshots(false)} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    Screenshots
                    <IconButton onClick={() => setOpenScreenshots(false)} size="small">
                        <Close />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    {data.screenshots.length > 0 && (
                        <Box sx={{ textAlign: 'center' }}>
                            <img src={data.screenshots[currentScreenshot]} alt="screenshot" style={{ maxWidth: '100%', maxHeight: '400px' }} />
                            {data.screenshots.length > 1 && (
                                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 1 }}>
                                    <Button onClick={() => setCurrentScreenshot(Math.max(0, currentScreenshot - 1))} disabled={currentScreenshot === 0}>
                                        Previous
                                    </Button>
                                    <Typography variant="body2">{currentScreenshot + 1} / {data.screenshots.length}</Typography>
                                    <Button onClick={() => setCurrentScreenshot(Math.min(data.screenshots.length - 1, currentScreenshot + 1))} disabled={currentScreenshot === data.screenshots.length - 1}>
                                        Next
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    )}
                </DialogContent>
            </Dialog>
        </Container>
    );
}

export default ResolutionDetailsPageWrapper;
