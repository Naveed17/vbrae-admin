import React from 'react';
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
import { TbFlameFilled } from 'react-icons/tb';

const OffersRow = ({ row }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableRow hover>
      {/* Game Column */}
      <TableCell sx={{ minWidth: 200, whiteSpace: 'nowrap' }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar
            src={row.game.image}
            alt={row.game.name}
            sx={{ width: 48, height: 48, borderRadius: 1 }}
          />
          <Stack direction="column" sx={{ minWidth: 0, maxWidth: 150 }}>
            <Typography variant="caption">{row.game.name}</Typography>
            <Typography variant="caption">{row.game.series}</Typography>
            <Typography variant="caption">{row.game.account}</Typography>
          </Stack>
        </Stack>
      </TableCell>

      {/* Stock/Sold Column */}
      <TableCell>
        <Stack direction="row" alignItems="center" justifyContent="start" spacing={0.2}>
          <Typography component="span" variant="caption">
            {row.stock_sold.stock}
          </Typography>
          <span> / </span>
          <Typography component="span" variant="caption">
            {row.stock_sold.sold}
          </Typography>
        </Stack>
      </TableCell>

      {/* Sales Column */}
      <TableCell width={80}>
        <Stack sx={{ pr: 3 }}>
          <Stack direction="row" alignItems="center" justifyContent="end" spacing={0.2}>
            <Typography component="span" variant="caption" fontWeight={400}>
              24H:
            </Typography>
            <Typography component="span" variant="caption" fontWeight={600}>
              {row.sales['24_hours']}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="end" spacing={0.2}>
            <Typography component="span" variant="caption" fontWeight={400}>
              7D:
            </Typography>
            <Typography component="span" variant="caption" fontWeight={600}>
              {row.sales['7_days']}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="end" spacing={0.2}>
            <Typography component="span" variant="caption" fontWeight={400}>
              30D:
            </Typography>
            <Typography component="span" variant="caption" fontWeight={600}>
              {row.sales['30_days']}
            </Typography>
          </Stack>
        </Stack>
      </TableCell>

      {/* Lowest Price Column */}
      <TableCell sx={{ minWidth: 100, whiteSpace: 'nowrap' }}>
        <Typography variant="caption" fontWeight={600}>
          {row.lowest_price}
        </Typography>
      </TableCell>

      {/* POS Column */}
      <TableCell sx={{ minWidth: 60, whiteSpace: 'nowrap' }}>
        <Typography variant="caption">{row.pos}</Typography>
      </TableCell>

      {/* Achievement Column */}
      <TableCell sx={{ minWidth: 80, whiteSpace: 'nowrap' }}>
        {row.achievement === 'hot' && (
          <Chip
            icon={<TbFlameFilled size={14} />}
            label="Hot"
            sx={{
              backgroundColor: 'error.light',
              color: theme.palette.mode === 'dark' ? 'white' : 'black',
              fontSize: '0.75rem',
              border: 0,
              '&:hover': {
                backgroundColor: 'error.dark',
                color: 'white',
              },
              '& .MuiChip-icon': {
                mx: 0,
              },
            }}
          />
        )}
      </TableCell>

      {/* Sales Booster Column */}
      <TableCell sx={{ minWidth: 100, whiteSpace: 'nowrap' }}>
        <div>
          {row.sales_booster ? (
            <Chip label="Active" size="small" color="success" />
          ) : (
            <Typography
              display="inline-block"
              borderRadius={1}
              padding={0.3}
              px={0.7}
              variant="caption"
              border={1}
              borderColor="divider"
              color="text.secondary"
            >
              Inactive
            </Typography>
          )}
        </div>
      </TableCell>

      {/* IWTR/Price Column */}
      <TableCell align="right">
        <Stack direction="row" alignItems="center" justifyContent={'end'}>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              border: 1,
              borderColor: 'divider',
              px: 1,
              py: 0.5,
              pr: 2,
              borderRadius: 1,
            }}
          >
            {row.iwtr_price.iwtr}
          </Typography>
          <Typography
            variant="caption"
            color="primary"
            sx={{
              border: 1,
              borderColor: 'primary.main',
              px: 1,
              py: 0.5,
              borderRadius: 1,
              boxShadow: `0px 5px 10px 0px ${alpha(theme.palette.primary.main, 0.5)}`,
              marginLeft: '-12px',
              bgcolor: theme.palette.background.paper,
            }}
          >
            {row.iwtr_price.price}
          </Typography>
          <IconButton onClick={handleMenuClick} size="small" sx={{ ml: 1, color: 'text.primary' }}>
            <MoreVert />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ zIndex: 1300 }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Typography
              component={MenuItem}
              onClick={handleMenuClose}
              variant="subtitle2"
              color="text.secondary"
            >
              Delete
            </Typography>
            <Typography
              component={MenuItem}
              onClick={handleMenuClose}
              variant="subtitle2"
              color="text.secondary"
            >
              To Archive{' '}
            </Typography>
            <Typography
              component={MenuItem}
              onClick={handleMenuClose}
              variant="subtitle2"
              color="text.secondary"
            >
              Other
            </Typography>
          </Menu>
        </Stack>
      </TableCell>
    </TableRow>
  );
};

export default OffersRow;
