'use client';
import * as React from 'react';
import { Pagination, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from '@bprogress/next';
import { useSearchParams } from 'next/navigation';

const StyledPagination = styled(Pagination)(({ theme }) => ({
    '& .MuiPagination-ul': {
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacing(.5),
    },

    '& .MuiPaginationItem-root': {
        color: theme.palette.text.secondary,
        fontWeight: 500,
        fontSize: '0.9rem',
        borderRadius: theme.shape.borderRadius,
        minWidth: 32,
        height: 36,
        transition: 'all 0.25s ease',
        backgroundColor: 'transparent',
        '&:hover': {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.action.hover,
        },
    },

    // selected (active) page
    '& .MuiPaginationItem-root.Mui-selected': {
        color: theme.palette.text.primary,
        backgroundColor: 'transparent',
        fontWeight: 600,
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 2,
            left: '25%',
            width: '50%',
            height: 2,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1,
        },
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },

    // next/previous buttons
    '& .MuiPaginationItem-previousNext': {
        border: `1px solid ${theme.palette.divider}`,
        color: theme.palette.text.secondary,
        borderRadius: theme.shape.borderRadius * 1.2,
        width: 40,
        height: 40,
        '&:hover': {
            borderColor: theme.palette.primary.main,
            backgroundColor: theme.palette.action.hover,
            color: theme.palette.text.primary,
        },
    },
}));

export default function CustomPagination({ pagination }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentPage = pagination?.page;
    const [page, setPage] = React.useState(currentPage);

    React.useEffect(() => {
        if (currentPage) {
            setPage(currentPage);
        }
    }, [currentPage]);

    if (!pagination || pagination.pages === 1) return null;
    const pages = pagination.pages;

    return (
        <Stack
            className='custom-pagination'
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
                pt: 3,
                borderRadius: 2,
            }}
        >
            <StyledPagination
                count={pages}
                page={page}
                onChange={(e, v) => {
                    const params = new URLSearchParams(searchParams);
                    params.set('page', v);
                    router.push(`?${params.toString()}`, { scroll: false });
                }}
            />
        </Stack>
    );
}
