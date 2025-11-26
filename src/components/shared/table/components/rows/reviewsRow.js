import React from 'react';
import {
  TableCell,
  TableRow,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Avatar,
  Stack,
  useTheme,
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { IoStar } from 'react-icons/io5';

const ReviewsRow = ({ row }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableRow>
      <TableCell sx={{ minWidth: 0 }}>
        <Typography variant="caption" fontWeight="medium">
          {row.id}
        </Typography>
      </TableCell>
      <TableCell>{row.orderId}</TableCell>
      <TableCell>{row.buyer}</TableCell>
      <TableCell>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <IoStar size={15} color={theme.palette.primary.main} />
          <Typography variant="caption">{row.rating}</Typography>
        </Stack>
      </TableCell>
      <TableCell>{row.latestReviews}</TableCell>
      <TableCell>
        <Typography variant="caption" color="primary">
          {row.product}
        </Typography>
      </TableCell>
      <TableCell>{row.createdAt}</TableCell>
      <TableCell align="right">
        <IconButton onClick={handleMenuClick} size="small">
          <MoreVert />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>To Retail</MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
          <MenuItem onClick={handleMenuClose}>Other</MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
};

export default ReviewsRow;
