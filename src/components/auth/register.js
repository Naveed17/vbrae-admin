'use client';
import * as React from 'react';
import { MdClear } from 'react-icons/md';
import DialogContent from '@mui/material/DialogContent';
import Stack from '@mui/material/Stack';
import { RegisterDialog, SideImage } from './overrides/register';
import { Grid, TextField, Box, FormControlLabel, Checkbox, Skeleton } from '@mui/material';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import * as Yup from 'yup';
// formik
import { useFormik, Form, FormikProvider } from 'formik';
import { FaCircleCheck, FaRegCircleCheck } from 'react-icons/fa6';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import * as api from '@/services';
const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  email: Yup.string().email('Enter valid email').required('Email is required.'),
  password: Yup.string()
    .required('Password is required.')
    .min(8, 'Password should be 8 characters or longer.'),
  repeatPassword: Yup.string()
    .required('Password is required.')
    .min(8, 'Password should be 8 characters or longer.'),
});

export default function RegisterPopUp({ openLogin, openSetLogin, open, setOpen }) {
  const [passwordFocus, setPasswordFocus] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      accept_terms: true,
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      await mutate({ ...values });
    },
  });

  const { mutate } = useMutation({
    mutationFn: api.signUp,
    onSuccess: async () => {
      // dispatch(signIn(data.user));
      // await setCookie('token', data.token);
      toast.success('Verification email sent! Please check your inbox to verify your account.');
      // router.push('/dashboard');
      // toast.success(`OTP sent to your email ${data.user.firstName}`);
      // router.push(redirect ? `/auth/verify-otp?redirect=${redirect}` : `/auth/verify-otp`);
    },
    onError: (err) => {
      const message = err?.response?.data?.message;
      toast.error(message || 'Something went wrong!');
    },
  });

  const { errors, touched, values, handleSubmit, isSubmitting, getFieldProps } = formik;
  const password = values.password;
  const checks = {
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*]/.test(password),
    min: password.length >= 8,
    max: password.length <= 38,
  };

  const checkData = [
    {
      label: 'at least one uppercase character',
      valid: checks.upper,
    },
    {
      label: 'at least one lowercase character',
      valid: checks.lower,
    },
    {
      label: 'at least one number',
      valid: checks.number,
    },
    {
      label: 'at least one special character',
      valid: checks.special,
    },
    {
      label: 'at least 8 characters',
      valid: checks.min,
    },
    {
      label: 'maximum 38 characters',
      valid: checks.max,
    },
  ];

  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Register
      </Button>
      <RegisterDialog
        open={open}
        onClose={handleClose}
        maxWidth={'md'}
        scroll={'body'}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Grid container spacing={0}>
          <Grid size={{ xs: 12, md: 4 }}>
            <SideImage>
              <Image src={'/register-side-img.png'} alt="register-side-img" fill />
            </SideImage>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <DialogContent>
              <IconButton className="clear-btn" onClick={handleClose}>
                <MdClear />
              </IconButton>
              <Stack spacing={{ xs: 2.5, md: 3.8 }}>
                <Typography variant="h3" color="text.primary">
                  Become part of Vbrae
                </Typography>
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  alignItems="center"
                  spacing={{ xs: 1, md: 2 }}
                  className="customized-btn"
                >
                  <Button variant="contained" color="inherit" fullWidth startIcon={<FaFacebook />}>
                    Connect with Facebook
                  </Button>
                  <Button
                    variant="contained"
                    color="inherit"
                    startIcon={<AiOutlineGoogle />}
                    fullWidth
                  >
                    Connect with Google
                  </Button>
                </Stack>
                <FormikProvider value={formik}>
                  <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Stack spacing={2.5}>
                      <Stack gap={0.5} width={1}>
                        <Typography
                          variant="overline"
                          color="text.secondary"
                          htmlFor="name"
                          component={'label'}
                        >
                          Name
                        </Typography>
                        <TextField
                          id="name"
                          fullWidth
                          size="normal"
                          autoComplete="name"
                          type="email"
                          {...getFieldProps('name')}
                          error={Boolean(touched.name && errors.name)}
                          helperText={touched.name && errors.name}
                        />
                      </Stack>
                      <Stack gap={0.5} width={1}>
                        <Typography
                          variant="overline"
                          color="text.secondary"
                          htmlFor="email"
                          component={'label'}
                        >
                          Email
                        </Typography>
                        <TextField
                          id="email"
                          fullWidth
                          size="normal"
                          autoComplete="username"
                          type="email"
                          {...getFieldProps('email')}
                          error={Boolean(touched.email && errors.email)}
                          helperText={touched.email && errors.email}
                        />
                      </Stack>
                      <Stack gap={0.5} width={1}>
                        <Typography
                          variant="overline"
                          color="text.secondary"
                          htmlFor="password"
                          component={'label'}
                        >
                          Password
                        </Typography>
                        <TextField
                          id="password"
                          fullWidth
                          type="password"
                          size="normal"
                          onFocus={() => setPasswordFocus(true)}
                          {...getFieldProps('password')}
                          error={Boolean(touched.password && errors.password)}
                          helperText={touched.password && errors.password}
                        />
                      </Stack>
                      {passwordFocus && (
                        <Box>
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                            textTransform={'uppercase'}
                            mb={1}
                          >
                            Your password must have
                          </Typography>
                          <Grid container spacing={1}>
                            {checkData.map((rule, i) => (
                              <Grid size={{ xs: 12, md: 6 }} key={i}>
                                <Typography
                                  variant="body2"
                                  color={rule.valid ? 'success.main' : 'text.primary'}
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    svg: {
                                      color: rule.valid ? 'success.main' : 'text.secondary',
                                    },
                                  }}
                                >
                                  {rule.valid ? (
                                    <FaCircleCheck size={20} />
                                  ) : (
                                    <FaRegCircleCheck size={20} />
                                  )}
                                  {rule.label}
                                </Typography>
                              </Grid>
                            ))}
                          </Grid>
                        </Box>
                      )}
                      <Stack gap={0.5} width={1}>
                        <Typography
                          variant="overline"
                          color="text.secondary"
                          htmlFor="repeatPassword"
                          component={'label'}
                        >
                          Repeat Password
                        </Typography>
                        <TextField
                          id="repeatPassword"
                          fullWidth
                          size="normal"
                          type="password"
                          {...getFieldProps('repeatPassword')}
                          error={Boolean(touched.repeatPassword && errors.repeatPassword)}
                          helperText={touched.repeatPassword && errors.repeatPassword}
                        />
                      </Stack>
                      <FormControlLabel
                        control={
                          <Checkbox
                            {...getFieldProps('accept_terms')}
                            checked={values.accept_terms}
                          />
                        }
                        label={
                          <Typography color="text.secondary">
                            I have read and agree to the&nbsp;
                            <Typography
                              component={Link}
                              color="text.secondary"
                              href="/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Terms & Conditions
                            </Typography>
                          </Typography>
                        }
                      />
                      <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        alignItems={{ xs: 'start', md: 'center' }}
                        spacing={{ xs: 2, md: 4 }}
                      >
                        {isSubmitting ? (
                          <Skeleton variant="rounded" width={170} height={50} />
                        ) : (
                          <Button
                            variant="contained"
                            color="inherit"
                            size="large"
                            className="register-btn"
                            type="submit"
                          >
                            Register
                          </Button>
                        )}

                        <Typography color="text.primary">
                          Have an account?{' '}
                          <Typography
                            component={'span'}
                            // color='text.primary'
                            // href='/'
                            // target='_blank'
                            // rel='noopener noreferrer'
                            sx={{ cursor: 'pointer' }}
                            onClick={(e) => {
                              (e.stopPropagation(), openSetLogin(!openLogin), handleClose());
                            }}
                          >
                            Login
                          </Typography>
                        </Typography>
                      </Stack>
                    </Stack>
                  </Form>
                </FormikProvider>
              </Stack>
            </DialogContent>
          </Grid>
        </Grid>
      </RegisterDialog>
    </React.Fragment>
  );
}
