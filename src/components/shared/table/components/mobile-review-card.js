import React from 'react';
// MUI
import { Card, Grid, Typography, Stack, useTheme, IconButton, Menu, MenuItem } from '@mui/material';
import { IoStar } from 'react-icons/io5';
import { MoreVert } from '@mui/icons-material';

export default function MobileReviewCard({ review }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card
      sx={{
        p: 1.9,
        border: 'none',
        mb: 1.2,
        borderRadius: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid size={6}>
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.secondary" textTransform="uppercase">
              Id
            </Typography>
            <Typography variant="caption" color="text.primary">
              {review.id}{' '}
            </Typography>
          </Stack>
        </Grid>
        <Grid size={6}>
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.secondary" textTransform="uppercase">
              Order ID
            </Typography>
            <Typography variant="caption" color="text.primary">
              {review.orderId}{' '}
            </Typography>
          </Stack>
        </Grid>
        <Grid size={6}>
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.secondary" textTransform="uppercase">
              Buyer
            </Typography>
            <Typography variant="caption" color="primary">
              {review.buyer}{' '}
            </Typography>
          </Stack>
        </Grid>
        <Grid size={6}>
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.secondary" textTransform="uppercase">
              rating
            </Typography>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <IoStar size={15} color={theme.palette.success.main} />
              <Typography variant="caption" color="text.primary">
                {review.rating}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={12}>
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.secondary" textTransform="uppercase">
              Product
            </Typography>
            <Typography variant="caption" color="primary">
              {review.product}{' '}
            </Typography>
          </Stack>
        </Grid>
        <Grid size={10}>
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.secondary" textTransform="uppercase">
              date
            </Typography>
            <Typography variant="caption" color="text.primary">
              {review.createdAt}{' '}
            </Typography>
          </Stack>
        </Grid>
        <Grid size={2} textAlign={'end'}>
          <IconButton onClick={handleMenuClick} size="small">
            <MoreVert />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>To Retail</MenuItem>
            <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
            <MenuItem onClick={handleMenuClose}>Other</MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Card>
  );
}
