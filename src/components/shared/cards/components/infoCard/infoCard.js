'use client';
import { Box, Card, Typography, useTheme, alpha } from '@mui/material'
import React from 'react'

function InfoCard({ data }) {
    const theme = useTheme();
    return (
        <Card
            sx={{
                background: `linear-gradient(195deg, ${alpha(theme.palette[data.color].main, 0.5)} -30%, transparent 40%), ${theme.palette.background.default}`,
                color: 'text.primary',
                p: 2,
                borderRadius: 2,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                }}
            >
                {data.icon && <data.icon fontSize="large" sx={{ color: theme.palette[data.color].main }} />}
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 0.5, }}>
                {data.value.includes('.') ? (
                    <>
                        {data.value.split('.')[0]}.
                        <Typography component="span" sx={{ fontSize: '0.6em', fontWeight: 700 }}>
                            {data.value.split('.')[1]}
                        </Typography>
                    </>
                ) : (
                    data.value
                )}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: 'text.secondary',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                }}
            >
                {data.label}
            </Typography>
        </Card>
    )
}

export default InfoCard