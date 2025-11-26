import React from 'react';
import Link from 'next/link';
import {
  TableCell,
  TableRow,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Avatar,
  Stack,
  useTheme,
  alpha,
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const SaleRow = ({ row }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableRow
      hover
      sx={{
        ...(row.status == 'active' && {
          '&:nth-of-type(odd)': {
            background: theme.palette.background.default,
          },
          '&:nth-of-type(even)': {
            backgroundColor: theme.palette.background.paper,
          },
        }),
        ...(row.status == 'out-of-stock' && {
          background: `linear-gradient(90deg, ${alpha(
            theme.palette.primary.main,
            0.5
          )} 0%, transparent 20%)`,
        }),

        '& .MuiTableCell-root': {
          p: 1, // padding for all cells
          borderRadius: 0, // reset all radius first
          borderWidth: 2,
        },
        '& .MuiTableCell-root:first-of-type': {
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
        },
        '& .MuiTableCell-root:last-of-type': {
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
        },
      }}
    >
      {/* Game Column */}
      <TableCell sx={{ minWidth: 0 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Stack direction="column" sx={{ minWidth: 0 }} component={Link} href={`/sales/${row.id}`}>
            <Typography
              color="text.primary"
              variant="caption"
              fontWeight="medium"
              sx={{ overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 300 }}
            >
              {row.name}
            </Typography>
          </Stack>
        </Stack>
      </TableCell>

      {/* Stock/Sold Column */}
      <TableCell sx={{ minWidth: 0 }}>
        <Typography variant="caption" component="div">
          <Typography component="span" variant="caption">
            {row.price}
          </Typography>
          <span> - </span>
          <Typography component="span" variant="caption" color="text.secondary"></Typography>
        </Typography>
      </TableCell>

      {/* Sales Column */}
      <TableCell sx={{ pr: ' 20px !important', minWidth: 0, width: 80 }}>
        {row.order_increment_id}
      </TableCell>

      {/* Lowest Price Column */}
      <TableCell sx={{ minWidth: 0 }}>{row.reservation_id}</TableCell>

      {/* Achievement Column */}
      <TableCell sx={{ minWidth: 0 }}>
        <div>
          {row.status === 'deactive' ? (
            <Typography
              display="inline-block"
              borderRadius={1}
              padding={0.3}
              px={0.7}
              variant="caption"
              border={1}
              borderColor="divider"
              color="text.secondary"
              sx={{ textTransform: 'capitalize' }}
            >
              {row.status}
            </Typography>
          ) : (
            <Chip
              label={row.status}
              color={
                row.status === 'delivered'
                  ? 'primary'
                  : row.status === 'pending'
                    ? 'warning'
                    : row.status === 'buying'
                      ? 'info'
                      : row.status === 'refunded'
                        ? 'success'
                        : 'error'
              }
            />
          )}
        </div>
      </TableCell>

      {/* Sales Booster Column */}
      <TableCell sx={{ minWidth: 0 }}>
        <Stack gap={0.5}>
          <Typography variant="caption" color="text.primary">
            {row.created}
          </Typography>
          <Typography variant="caption" color="text.primary">
            {row.createdTime}
          </Typography>
        </Stack>
      </TableCell>

      {/* IWTR/Price Column */}
      <TableCell sx={{ minWidth: 0 }}>
        <Stack gap={0.5}>
          <Typography variant="caption" color="text.primary">
            {row.released}
          </Typography>

          <Typography variant="caption" color="text.primary">
            {row.releasedTime}
          </Typography>
        </Stack>
      </TableCell>

      {/* Actions Column */}
      <TableCell align="right">
        <IconButton onClick={handleMenuClick} size="small">
          <MoreVert />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>To Archive</MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
          <MenuItem onClick={handleMenuClose}>Other</MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
};

export default SaleRow;
