'use client';

import React from 'react';
import { Box, Typography, CircularProgress, Card, CardContent, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useRouter } from '@bprogress/next';

async function verifyEmail(token) {
  const res = await fetch(`http://localhost:8080/api/auth/verify-email?token=${token}`);
  const data = await res.json();

  if (!res.ok) {
    // pass the backend message so we can show it
    throw new Error(data?.message || 'Verification failed');
  }

  return data;
}

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const router = useRouter();

  const {
    data,
    isPending: isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ['verify-email', token],
    queryFn: () => verifyEmail(token),
    enabled: !!token, // only run when token is available
    retry: false,
  });

  return (
    <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" px={2}>
      <Card sx={{ maxWidth: 400, textAlign: 'center', p: 3, borderRadius: 3 }}>
        <CardContent>
          {isLoading && (
            <>
              <CircularProgress color="primary" />
              <Typography mt={2}>Verifying your email...</Typography>
            </>
          )}

          {isSuccess && (
            <>
              <CheckCircleOutlineIcon color="success" sx={{ fontSize: 60 }} />
              <Typography variant="h6" mt={2} gutterBottom>
                Email Verified!
              </Typography>
              <Typography color="text.secondary">
                {data?.message || 'Your email has been verified successfully!'}
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 3 }}
                color="primary"
                onClick={() => router.push('/login')}
              >
                Go to Login
              </Button>
            </>
          )}

          {isError && (
            <>
              <ErrorOutlineIcon color="error" sx={{ fontSize: 60 }} />
              <Typography variant="h6" mt={2} gutterBottom>
                Verification Failed
              </Typography>
              <Typography color="text.secondary">Invalid or expired verification link.</Typography>
              <Button
                variant="contained"
                sx={{ mt: 3 }}
                color="primary"
                onClick={() => router.push('/resend-verification')}
              >
                Resend Email
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
