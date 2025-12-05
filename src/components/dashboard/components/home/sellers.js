'use client';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Button, Box } from '@mui/material';
import { MessageOutlined as MessageIcon } from '@mui/icons-material';
import React, { useState } from 'react';

const sellersData = [
    { id: 1, name: 'John Electronics', avatar: 'https://i.pravatar.cc/150?img=20', email: 'john@electronics.com' },
    { id: 2, name: 'Sarah Fashion', avatar: 'https://i.pravatar.cc/150?img=21', email: 'sarah@fashion.com' },
    { id: 3, name: 'Mike Home Goods', avatar: 'https://i.pravatar.cc/150?img=22', email: 'mike@homegoods.com' },
    { id: 4, name: 'Lisa Beauty', avatar: 'https://i.pravatar.cc/150?img=23', email: 'lisa@beauty.com' },
    { id: 5, name: 'Tom Sports', avatar: 'https://i.pravatar.cc/150?img=24', email: 'tom@sports.com' },
];

function Sellers() {
    const [notifications, setNotifications] = useState([]);

    const handleContact = (seller) => {
        const notification = {
            id: Date.now(),
            message: `Staff has sent you a message`,
            seller: seller.name,
            timestamp: new Date().toLocaleTimeString()
        };
        setNotifications([...notifications, notification]);

        // Optional: Show toast or trigger notification system
        console.log('Message sent to:', seller.name);
    };

    return (
        <List disablePadding>
            {sellersData.map((seller, index) => (
                <ListItem
                    key={seller.id}
                    disableGutters
                    divider={index !== sellersData.length - 1}
                    sx={{ py: 1.5, px: 0, alignItems: 'center' }}
                >
                    <ListItemAvatar sx={{ minWidth: 48 }}>
                        <Avatar src={seller.avatar} sx={{ width: 48, height: 48 }} />
                    </ListItemAvatar>
                    <Box sx={{ flex: 1, minWidth: 0, ml: 1 }}>
                        <Typography variant='body2' sx={{ fontWeight: 600, lineHeight: 1.2 }}>
                            {seller.name}
                        </Typography>
                        <Typography variant='caption' sx={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'text.secondary' }}>
                            {seller.email}
                        </Typography>
                    </Box>
                    <Button
                        size="small"
                        variant="outlined"
                        startIcon={<MessageIcon />}
                        onClick={() => handleContact(seller)}
                        sx={{ ml: 1, flexShrink: 0 }}
                    >
                        Contact
                    </Button>
                </ListItem>
            ))}
        </List>
    );
}

export default Sellers;
