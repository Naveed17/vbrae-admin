'use client';
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
    Container,
    Card,
    CardHeader,
    CardContent,
    Box,
    Button,
    Stack,
    Typography,
    Chip,
    Avatar,
    Divider,
    TextField,
    Menu,
    MenuItem,
    IconButton,
    Paper,
} from '@mui/material';
import { ArrowBack as ArrowBackIcon, MoreVert as MoreVertIcon, Send as SendIcon, AttachFile as AttachFileIcon } from '@mui/icons-material';
import TextEditor from '@/components/shared/textEditor';

const ticketData = {
    id: '#701',
    subject: 'Its Ashampoo Burning Studio 2026 Activation Key (Lifetime / 1 PC) Not 26',
    status: 'Open',
    date: '2025-12-15 / 22:14',
    updated: '8 hours ago',
    user: {
        name: 'LGD-Soft',
        avatar: 'https://vbrae.com/uploads/profile/avatar_689f43f0c8fad8-69762620-62230812.webp',
    },
};

const messages = [
    {
        id: 1,
        user: { name: 'LGD-Soft', avatar: 'https://vbrae.com/uploads/profile/avatar_689f43f0c8fad8-69762620-62230812.webp' },
        time: '8 hours ago',
        content: 'Hello,\n\nhttps://vbrae.com/ashampoo-burning-studio-26-cd-key\n\ni make it : Ashampoo Burning Studio 2026 Activation Key (Lifetime / 1 PC) not 26 << this is a different product\n\nThe product title and description are incorrect; it\'s for a different product.',
    },
    {
        id: 2,
        user: { name: 'LGD-Soft', avatar: 'https://vbrae.com/uploads/profile/avatar_689f43f0c8fad8-69762620-62230812.webp' },
        time: '8 hours ago',
        content: 'This is the correct product : https://www.ashampoo.com/en-us/burning-studio-2026#product-navigation\n\nAnd this is a correct logo:',
    },
];

function TicketDetailsPageWrapper({ ticketId }) {
    const router = useRouter();
    const [replyOpen, setReplyOpen] = useState(false);
    const [replyMessage, setReplyMessage] = useState('');
    const [statusAnchor, setStatusAnchor] = useState(null);
    const fileInputRef = useRef(null);

    const handleStatusChange = (newStatus) => {
        console.log('Status changed to:', newStatus);
        setStatusAnchor(null);
    };

    const handleSendReply = () => {
        console.log('Reply sent:', replyMessage);
        setReplyMessage('');
        setReplyOpen(false);
    };

    const getStatusColor = (status) => {
        if (status === 'Open') return 'success';
        if (status === 'Responded') return 'warning';
        if (status === 'Closed') return 'default';
        return 'default';
    };

    return (
        <Container maxWidth={false}>
            <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Button startIcon={<ArrowBackIcon />} variant="text" onClick={() => router.back()}>
                    Back
                </Button>
            </Box>

            <Card sx={{ boxShadow: 2 }}>
                <CardHeader
                    title={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {ticketData.id}
                            </Typography>
                            <Chip label={ticketData.status} color={getStatusColor(ticketData.status)} />
                        </Box>
                    }
                    action={
                        <IconButton onClick={(e) => setStatusAnchor(e.currentTarget)}>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    sx={{ borderBottom: 1, borderColor: 'divider', pb: 2 }}
                />
                <Menu anchorEl={statusAnchor} open={Boolean(statusAnchor)} onClose={() => setStatusAnchor(null)}>
                    <MenuItem onClick={() => handleStatusChange('Open')}>Open</MenuItem>
                    <MenuItem onClick={() => handleStatusChange('Responded')}>Responded</MenuItem>
                    <MenuItem onClick={() => handleStatusChange('Closed')}>Closed</MenuItem>
                </Menu>

                <CardContent sx={{ p: 3 }}>
                    <Stack spacing={3}>
                        {/* Ticket Info */}
                        <Box>
                            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                {ticketData.subject}
                            </Typography>
                            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
                                <Box>
                                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                        Created
                                    </Typography>
                                    <Typography variant="body2">{ticketData.date}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                        Last Updated
                                    </Typography>
                                    <Typography variant="body2">{ticketData.updated}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                        User
                                    </Typography>
                                    <Typography variant="body2">{ticketData.user.name}</Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Divider />

                        {/* Messages */}
                        <Box>
                            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                                Conversation
                            </Typography>
                            <Stack spacing={2}>
                                {messages.map((msg) => (
                                    <Paper key={msg.id} sx={{ p: 2.5, bgcolor: 'background.default', borderRadius: 2 }}>
                                        <Box sx={{ display: 'flex', gap: 2, mb: 1.5 }}>
                                            <Avatar src={msg.user.avatar} sx={{ width: 40, height: 40 }} />
                                            <Box sx={{ flex: 1 }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                                        {msg.user.name}
                                                    </Typography>
                                                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                                        {msg.time}
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body2" sx={{ mt: 1, whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
                                                    {msg.content}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Paper>
                                ))}
                            </Stack>
                        </Box>

                        <Divider />

                        {/* Reply Section */}
                        <Box>
                            {!replyOpen ? (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => setReplyOpen(true)}
                                    fullWidth
                                >
                                    Reply to Ticket
                                </Button>
                            ) : (
                                <Stack spacing={2}>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                        Send Reply
                                    </Typography>
                                    <TextEditor initialValue={replyMessage} />
                                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                                        <Button
                                            variant="outlined"
                                            onClick={() => {
                                                setReplyOpen(false);
                                                setReplyMessage('');
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            startIcon={<SendIcon />}
                                            onClick={handleSendReply}
                                        >
                                            Send Reply
                                        </Button>
                                    </Box>
                                </Stack>
                            )}
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    );
}

export default TicketDetailsPageWrapper;
