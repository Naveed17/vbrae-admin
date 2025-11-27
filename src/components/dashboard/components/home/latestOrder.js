'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Stack } from '@mui/material'
import React from 'react'
const columns = [
    { id: 'order', label: 'Order', align: 'left', sortable: false },
    { id: 'total', label: 'Total', align: 'left', sortable: false },
    { id: 'status', label: 'Status', align: 'left', sortable: false },
    { id: 'date', label: 'Date', align: 'left', sortable: false },
    { id: 'details', label: 'Details', align: 'right', sortable: false },
];
const rows = [
    {
        order: '1',
        total: '100',
        status: 'Pending',
        date: '2021-10-10',

    },
    {
        order: '2',
        total: '200',
        status: 'Pending',
        date: '2021-10-10',

    },
    {
        order: '3',
        total: '300',
        status: 'Pending',
        date: '2021-10-10',

    },
    {
        order: '4',
        total: '400',
        status: 'Pending',
        date: '2021-10-10',

    },
    {
        order: '5',
        total: '500',
        status: 'Pending',
        date: '2021-10-10',
        details: 'View',
    },
];
function LatestOrder() {
    return (
        <Stack flex={1}>
            <EnhanceTable rows={rows} from="latestOrders" columns={columns} />
        </Stack>
    )
}

export default LatestOrder