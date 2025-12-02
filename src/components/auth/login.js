'use client';
import * as React from 'react';
import { MdClear } from 'react-icons/md';
import DialogContent from '@mui/material/DialogContent';
import Stack from '@mui/material/Stack';
import { RegisterDialog, TopImage } from './overrides/register';
import { TextField, Collapse, Alert } from '@mui/material';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import * as Yup from 'yup';
import * as api from '@/services';
// formik
import { useFormik, Form, FormikProvider } from 'formik';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from '@bprogress/next';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { signIn } from '@/redux/slices/user';
import { setCookie } from '@/hooks/use-cookies';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Enter valid email').required('Email is required.'),
  password: Yup.string()
    .required('Password is required.')
    .min(8, 'Password should be 8 characters or longer.'),
});

export default function LoginPopUp({ open, setOpen, openLogin, openSetLogin }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isOpenOtp, setOpenOtp] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  // const { mutate } = useMutation({
  //   mutationFn: api.signIn,
  //   onSuccess: async (data) => {
  //     dispatch(signIn(data.user));
  //     await setCookie('token', data.token);
  //     toast.success(`OTP sent to your email ${data.user.firstName}`);
  //     //router.push(redirect ? `/auth/verify-otp?redirect=${redirect}` : `/auth/verify-otp`);
  //   },
  //   onError: (err) => {
  //     const message = err?.response?.data?.message;
  //     toast.error(message || 'Something went wrong!');
  //   },
  //   onSettled: () => {
  //     setloading(false);
  //   },
  //. });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      otp: '',
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      const { email, password, otp } = values;
      mutate({
        email,
        password,
        ...(isOpenOtp && {
          otp,
        }),
      });
      // console.log(email, password);
      // toast.success(`Login successfully!`);
      // router.push('/dashboard');
    },
  });

  const { errors, touched, setFieldValue, values, handleSubmit, getFieldProps } = formik;
  const { mutate } = useMutation({
    mutationFn: api.signIn,
    onSuccess: async (data) => {
      if (!isOpenOtp) {
        setOpenOtp(true);
        return;
      }
      console.log(data, 'hello');
      dispatch(signIn(data.user));
      await setCookie('token', data.token);
      toast.success('Successful login.');
      router.push('/dashboard');

      // router.push(redirect ? `/auth/verify-otp?redirect=${redirect}` : `/auth/verify-otp`);
    },
    onError: (err) => {
      const message = err?.response?.data?.message;
      toast.error(message || 'Something went wrong!');
    },
  });
  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        Login
      </Button>
      <RegisterDialog
        open={open}
        onClose={handleClose}
        maxWidth={'sm'}
        scroll={'body'}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <TopImage>
          <Image src={'/login-img.png'} alt="login-img" fill />
        </TopImage>
        <DialogContent>
          <IconButton className="clear-btn" onClick={handleClose}>
            <MdClear />
          </IconButton>
          <Stack spacing={{ xs: 2.5, md: 3.8 }}>
            <Typography variant="h3" color="text.primary">
              Welcome to Vbrae
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
              <Button variant="contained" color="inherit" startIcon={<AiOutlineGoogle />} fullWidth>
                Connect with Google
              </Button>
            </Stack>
            <FormikProvider value={formik}>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Collapse in={!isOpenOtp}>
                  <Stack spacing={2.5}>
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
                        size="normal"
                        type="password"
                        {...getFieldProps('password')}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                      />
                    </Stack>
                    <Typography
                      component={Link}
                      color="text.secondary"
                      href="/"
                      textAlign={'right'}
                      rel="noopener noreferrer"
                    >
                      Forgot Password?
                    </Typography>
                  </Stack>
                </Collapse>
                <Collapse in={isOpenOtp}>
                  <Stack spacing={2.5}>
                    <Alert severity="info">
                      Verification email sent! Please check your inbox to verify your account.
                    </Alert>
                    <Stack gap={0.5} width={1}>
                      <Typography
                        variant="overline"
                        color="text.secondary"
                        htmlFor="otp"
                        component={'label'}
                      >
                        OTP
                      </Typography>
                      <TextField
                        id="otp"
                        fullWidth
                        size="normal"
                        type="otp"
                        {...getFieldProps('otp')}
                        error={Boolean(touched.otp && errors.otp)}
                        helperText={touched.otp && errors.otp}
                      />
                    </Stack>
                  </Stack>
                </Collapse>
                <Stack spacing={2.5}>
                  <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    alignItems={{ xs: 'start', md: 'center' }}
                    spacing={{ xs: 2, md: 4 }}
                    pt={2}
                  >
                    <Button
                      variant="contained"
                      color="inherit"
                      size="large"
                      type="submit"
                      className="register-btn"
                      loading={formik.isSubmitting}
                    >
                      Login
                    </Button>
                    <Typography color="text.primary">
                      Don't have an account?
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
                        Register
                      </Typography>
                    </Typography>
                  </Stack>
                </Stack>
              </Form>
            </FormikProvider>
          </Stack>
        </DialogContent>
      </RegisterDialog>
    </React.Fragment>
  );
}
