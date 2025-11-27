'use client';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Rating, Box } from '@mui/material';
import React from 'react';

const reviewsData = [
    { username: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=1', stars: 5, time: '2 days ago' },
    { username: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=2', stars: 4, time: '5 days ago' },
    { username: 'Mike Johnson', avatar: 'https://i.pravatar.cc/150?img=3', stars: 5, time: '1 week ago' },
    { username: 'Sarah Williams', avatar: 'https://i.pravatar.cc/150?img=4', stars: 3, time: '10 days ago' },
    { username: 'Tom Brown', avatar: 'https://i.pravatar.cc/150?img=5', stars: 5, time: '15 days ago' },
];

function LatestReviews() {
    return (
        <List disablePadding>
            {reviewsData.map((review, index) => (
                <ListItem key={index} disableGutters divider={index !== reviewsData.length - 1} sx={{ py: 2 }}>
                    <ListItemAvatar>
                        <Avatar src={review.avatar} sx={{ width: 48, height: 48 }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Box component="p" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant='body2'>{review.username}</Typography>
                                <Typography component={'p'} variant="caption" color="text.secondary">{review.time}</Typography>
                            </Box>
                        }
                        secondary={<Rating value={review.stars} readOnly size="small" />}
                        primaryTypographyProps={{ variant: 'body2', sx: { fontWeight: 600 } }}
                    />
                </ListItem>
            ))}
        </List>
    );
}

export default LatestReviews;
