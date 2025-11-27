'use client';
import { Box, Typography, Rating, Stack, Avatar, useTheme } from '@mui/material';
import React from 'react';

const sellerReviewsData = [
    { seller: 'Tech Store', avatar: 'https://i.pravatar.cc/150?img=20', stars: 5, review: 'Excellent service', time: '1 day ago' },
    { seller: 'Fashion Hub', avatar: 'https://i.pravatar.cc/150?img=21', stars: 4, review: 'Good quality products', time: '3 days ago' },
    { seller: 'Home Goods', avatar: 'https://i.pravatar.cc/150?img=22', stars: 5, review: 'Fast delivery', time: '5 days ago' },
    { seller: 'Electronics Plus', avatar: 'https://i.pravatar.cc/150?img=23', stars: 3, review: 'Average experience', time: '1 week ago' },
    { seller: 'Beauty Store', avatar: 'https://i.pravatar.cc/150?img=24', stars: 5, review: 'Highly recommended', time: '10 days ago' },
];

function LatestSellerReviews() {
    const theme = useTheme();
    return (
        <Box>
            {sellerReviewsData.map((review, index) => (
                <Box key={index} sx={{ display: 'grid', gridTemplateColumns: '60px 1fr 100px 80px', gap: 2, alignItems: 'center', py: 2, px: 1, borderBottom: index !== sellerReviewsData.length - 1 ? `1px solid ${theme.palette.divider}` : 'none', '&:hover': { backgroundColor: theme.palette.action.hover } }}>
                    <Avatar src={review.avatar} sx={{ width: 48, height: 48 }} />
                    <Stack spacing={0.5}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{review.seller}</Typography>
                        <Typography variant="body2" color="text.secondary">{review.review}</Typography>
                    </Stack>
                    <Rating value={review.stars} readOnly size="small" />
                    <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'right' }}>{review.time}</Typography>
                </Box>
            ))}
        </Box>
    );
}

export default LatestSellerReviews;
