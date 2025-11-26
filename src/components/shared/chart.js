'use client';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const data = [
    { month: 'Jan', value: 450 },
    { month: 'Feb', value: 1100 },
    { month: 'Mar', value: 560 },
    { month: 'Apr', value: 700 },
    { month: 'May', value: 480 },
    { month: 'Jun', value: 312.43, highlight: true },
    { month: 'Jul', value: 650 },
    { month: 'Aug', value: 0 },
    { month: 'Sep', value: 0 },
    { month: 'Oct', value: 0 },
    { month: 'Nov', value: 0 },
    { month: 'Dec', value: 0 },
];

export default function CustomBarChart() {
    const theme = useTheme();
    const maxValue = Math.max(...data.map((d) => d.value));

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.paper,
                p: 3,
                borderRadius: 3,
                color: 'text.secondary',
                position: 'relative',
                height: 400,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Header */}
            <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, mb: 3, color: 'text.primary' }}
            >
                MONTHLY SALES:{' '}
                <Typography
                    component="span"
                    sx={{ color: theme.palette.primary.main, ml: 1 }}
                >
                    2024
                </Typography>
            </Typography>

            {/* Chart Area */}
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    position: 'relative',
                }}
            >
                {data.map((item, index) => {
                    const barHeight = maxValue ? (item.value / maxValue) * 100 : 0;

                    return (
                        <Box
                            key={index}
                            sx={{
                                flex: 1,
                                textAlign: 'center',
                                position: 'relative',
                                height: '100%',
                            }}
                        >
                            {/* Tooltip */}
                            {item.highlight && (
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: `${barHeight + 6}%`,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: theme.palette.primary.main,
                                        color: '#fff',
                                        borderRadius: 2,
                                        px: 1.2,
                                        py: 0.3,
                                        fontSize: 12,
                                        fontWeight: 600,
                                    }}
                                >
                                    ${item.value}
                                </Box>
                            )}

                            {/* Bar */}
                            <Box
                                component={motion.div}
                                initial={{ height: 0 }}
                                animate={{ height: `${barHeight}%` }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                sx={{
                                    width: '60%',
                                    mx: 'auto',
                                    borderRadius: '20px',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: item.highlight
                                        ? `linear-gradient(to top, ${theme.palette.primary.main}, ${theme.palette.primary.light})`
                                        : `repeating-linear-gradient(
                        -45deg,
                        ${theme.palette.primary.dark}33,
                        ${theme.palette.primary.dark}33 8px,
                        ${theme.palette.primary.dark}55 8px,
                        ${theme.palette.primary.dark}55 16px
                      )`,
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 6,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                        background: theme.palette.primary.main,
                                    },
                                }}
                            />

                            {/* Label */}
                            <Typography
                                variant="body2"
                                sx={{
                                    mt: 1,
                                    color: 'text.secondary',
                                    fontWeight: 500,
                                    position: 'absolute',
                                    bottom: -25,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                }}
                            >
                                {item.month}
                            </Typography>
                        </Box>
                    );
                })}
            </Box>

            {/* Y-axis labels */}
            <Box
                sx={{
                    position: 'absolute',
                    left: 0,
                    bottom: 40,
                    top: 70,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    color: 'text.secondary',
                    pl: 1,
                }}
            >
                {[0, 200, 400, 600, 800, 1000].map((v) => (
                    <Typography key={v} variant="caption" sx={{ fontWeight: 500 }}>
                        ${v}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
}
