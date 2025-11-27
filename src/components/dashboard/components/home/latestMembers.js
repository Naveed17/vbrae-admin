'use client';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Chip, Box } from '@mui/material';
import React from 'react';

const membersData = [
    { name: 'Alice Johnson', avatar: 'https://i.pravatar.cc/150?img=10', joinDate: 'Jan 15, 2024', status: 'Active' },
    { name: 'Bob Smith', avatar: 'https://i.pravatar.cc/150?img=11', joinDate: 'Jan 10, 2024', status: 'Active' },
    { name: 'Carol White', avatar: 'https://i.pravatar.cc/150?img=12', joinDate: 'Jan 5, 2024', status: 'Inactive' },
    { name: 'David Brown', avatar: 'https://i.pravatar.cc/150?img=13', joinDate: 'Dec 28, 2023', status: 'Active' },
    { name: 'Eve Davis', avatar: 'https://i.pravatar.cc/150?img=14', joinDate: 'Dec 20, 2023', status: 'Active' },
];

function LatestMembers() {
    return (
        <List disablePadding>
            {membersData.map((member, index) => (
                <ListItem key={index} disableGutters divider={index !== membersData.length - 1} sx={{ py: 2 }}>
                    <ListItemAvatar>
                        <Avatar src={member.avatar} sx={{ width: 48, height: 48 }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant='body2'>{member.name}</Typography>
                                <Chip label={member.status} size="small" sx={{ '&.MuiChip-root span': { fontSize: 12 } }} color={member.status === 'Active' ? 'success' : 'default'} variant="outlined" />
                            </Box>
                        }
                        secondary={member.joinDate}
                        primaryTypographyProps={{ variant: 'subtitle2', sx: { fontWeight: 600 } }}
                    />
                </ListItem>
            ))}
        </List>
    );
}

export default LatestMembers;
