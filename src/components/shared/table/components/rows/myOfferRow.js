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
  Dialog,
  DialogContent,
  TextField,
  Button,
  Box,
  InputAdornment,
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { MdClear } from 'react-icons/md';
import * as Yup from 'yup';
// formik
import { useFormik, Form, FormikProvider } from 'formik';
import { FiDollarSign } from 'react-icons/fi';

const RegisterSchema = Yup.object().shape({
  receivePay: Yup.string().required('Receive Pay is required.'),
  customerPay: Yup.string().required('Customer Pay is required.'),
  // currentBestPrice: Yup.string().required('Current Best Price is required.'),
});

const MyOffersRow = ({ row }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const formik = useFormik({
    initialValues: {
      receivePay: 17.5,
      customerPay: 18.5,
      currentBestPrice: 19.5,
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      const { email, password } = values;
      console.log(email, password);
      await mutate({ ...values });
    },
  });

  const { errors, touched, setFieldValue, values, handleSubmit, getFieldProps } = formik;

  return (
    <TableRow
      hover
      sx={{
        ...(row.status == 'out-of-stock' && {
          '&:nth-of-type(odd)': {
            background: `linear-gradient(90deg, ${alpha(
              theme.palette.primary.main,
              0.5
            )} 0%, ${theme.palette.background.default} 20%) !important`,
          },
          '&:nth-of-type(even)': {
            background: `linear-gradient(90deg, ${alpha(
              theme.palette.primary.main,
              0.5
            )} 0%, ${alpha(theme.palette.background.default, 0.5)} 20%) !important`,
          },
        }),
        ...(row.status == 'deactive' && {
          background: `${theme.palette.secondary.main} !important`,
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
          <Avatar
            src={row.game.image}
            alt={row.game.name}
            sx={{ width: 48, height: 48, borderRadius: 1 }}
          />
          <Stack direction="column" sx={{ minWidth: 0 }}>
            <Typography
              variant="caption"
              fontWeight="medium"
              sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
              {row.game.name}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
              {row.game.series}
            </Typography>
            <Typography
              variant="caption"
              color="text.disabled"
              sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
              {row.game.account}
            </Typography>
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
      <TableCell sx={{ minWidth: 0 }}>
        <Typography variant="caption" fontWeight="medium">
          {row.lowest_price}
        </Typography>
      </TableCell>

      {/* POS Column */}
      <TableCell sx={{ minWidth: 0 }}>
        <Typography variant="caption">{row.pos}</Typography>
      </TableCell>

      {/* Achievement Column */}
      <TableCell sx={{ minWidth: 0 }}>
        {row.achievement === 'hot' && (
          <Chip
            label="Hot"
            size="small"
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8739 4.10269C10.8178 4.05714 10.7514 4.02543 10.6802 4.01023C10.609 3.99503 10.5351 3.99679 10.4648 4.01536C10.3944 4.03394 10.3297 4.06878 10.276 4.11694C10.2223 4.16511 10.1812 4.2252 10.1562 4.29213L8.90625 7.64827L7.53352 6.34771C7.48742 6.30399 7.43237 6.27031 7.37199 6.24891C7.31162 6.2275 7.24729 6.21885 7.18324 6.22353C7.1192 6.2282 7.05689 6.24609 7.00043 6.27601C6.94397 6.30594 6.89464 6.34723 6.85568 6.39715C5.625 7.97383 5 9.55995 5 11.1111C5 12.4077 5.52678 13.6512 6.46447 14.5681C7.40215 15.4849 8.67392 16 10 16C11.3261 16 12.5979 15.4849 13.5355 14.5681C14.4732 13.6512 15 12.4077 15 11.1111C15 7.80827 12.1142 5.11103 10.8739 4.10269ZM13.1756 11.63C13.0577 12.2737 12.741 12.8667 12.268 13.329C11.795 13.7914 11.1885 14.101 10.5301 14.2161C10.5052 14.2203 10.4799 14.2223 10.4545 14.2222C10.3405 14.2222 10.2307 14.1803 10.1468 14.1047C10.0629 14.0292 10.0111 13.9257 10.0017 13.8146C9.99224 13.7035 10.0258 13.5929 10.0958 13.5049C10.1658 13.4169 10.2671 13.3578 10.3795 13.3394C11.321 13.1844 12.1199 12.4033 12.2795 11.4811C12.2997 11.3648 12.3663 11.2612 12.4647 11.1929C12.563 11.1247 12.6851 11.0974 12.804 11.1172C12.9229 11.1369 13.0289 11.202 13.0987 11.2982C13.1685 11.3944 13.1963 11.5137 13.1761 11.63H13.1756Z"
                  fill="white"
                />
              </svg>
            }
            sx={{
              gap: 0.5,
              backgroundColor: 'error.light',
              color: theme.palette.mode === 'dark' ? 'white' : 'black',
              fontSize: '0.75rem',
              border: 'none',
              pl: 0,
              svg: { ml: 0 },
              '&:hover': {
                backgroundColor: 'error.dark',
                color: 'white',
              },
            }}
          />
        )}
      </TableCell>

      {/* Sales Booster Column */}
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
                row.status === 'active' ? 'success' : row.status === 'wishlist' ? 'info' : 'error'
              }
            />
          )}
        </div>
      </TableCell>

      {/* IWTR/Price Column */}
      <TableCell sx={{ minWidth: 0 }}>
        <Stack direction="row" alignItems="flex-end">
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
        </Stack>
      </TableCell>

      {/* Actions Column */}
      <TableCell align="right">
        <IconButton onClick={handleMenuClick} size="small">
          <MoreVert />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleClickOpen}>To Retail</MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
          <MenuItem onClick={handleMenuClose}>Other</MenuItem>
        </Menu>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent sx={{ py: 5 }}>
            {' '}
            <IconButton
              className="clear-btn"
              onClick={handleClose}
              sx={{ position: 'absolute', top: 10, right: 10 }}
            >
              <MdClear />
            </IconButton>
            <Typography variant="h3" color="text.primary" mb={3}>
              Set the Retail Price
            </Typography>
            <FormikProvider value={formik}>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={2.5}>
                  <Stack gap={1} width={1}>
                    <Typography
                      variant="overline"
                      color="text.secondary"
                      htmlFor="receivePay"
                      component={'label'}
                    >
                      I Want To Receive (Commission Rate:  10%)
                    </Typography>
                    <TextField
                      id="receivePay"
                      fullWidth
                      size="normal"
                      type="number"
                      {...getFieldProps('receivePay')}
                      error={Boolean(touched.receivePay && errors.receivePay)}
                      helperText={touched.receivePay && errors.receivePay}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <FiDollarSign />
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  </Stack>
                  <Stack gap={1} width={1}>
                    <Typography
                      variant="overline"
                      color="text.secondary"
                      htmlFor="customerPay"
                      component={'label'}
                    >
                      Customer Pay
                    </Typography>
                    <TextField
                      id="customerPay"
                      fullWidth
                      size="normal"
                      type="text"
                      {...getFieldProps('customerPay')}
                      error={Boolean(touched.customerPay && errors.customerPay)}
                      helperText={touched.receivePay && errors.receivePay}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <FiDollarSign />
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  </Stack>
                  <Stack gap={1} width={1}>
                    <Typography
                      variant="overline"
                      color="text.secondary"
                      htmlFor="currentBestPrice"
                      component={'label'}
                    >
                      Current Best Price
                    </Typography>
                    <TextField
                      id="currentBestPrice"
                      fullWidth
                      size="normal"
                      disabled
                      type="text"
                      {...getFieldProps('currentBestPrice')}
                      error={Boolean(touched.currentBestPrice && errors.currentBestPrice)}
                      helperText={touched.currentBestPrice && errors.currentBestPrice}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <FiDollarSign />
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  </Stack>
                  <Box sx={{ maxWidth: 170 }}>
                    <Button
                      size="large"
                      fullWidth
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      Save
                    </Button>
                  </Box>
                </Stack>
              </Form>
            </FormikProvider>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  );
};

export default MyOffersRow;
