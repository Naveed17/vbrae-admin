'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Stack } from '@mui/material'
import React from 'react'

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: false },
    { id: 'order', label: 'Order', align: 'left', sortable: false },
    { id: 'amount', label: 'Payment Amount', align: 'left', sortable: false },
    { id: 'method', label: 'Payment Method', align: 'left', sortable: false },
    { id: 'status', label: 'Status', align: 'left', sortable: false },
    { id: 'date', label: 'Date', align: 'left', sortable: false },
];

const rows = [
    { id: '13690', order: '#89982', amount: '$12.11', method: 'reepay', status: 'Payment Received', date: '2025-11-27 / 07:59' },
    { id: '13689', order: '#89971', amount: '$16.85', method: 'reepay', status: 'Payment Received', date: '2025-11-26 / 23:23' },
    { id: '13688', order: '#89963', amount: '$15.08', method: 'reepay', status: 'Payment Received', date: '2025-11-26 / 18:59' },
    { id: '13687', order: '#89958', amount: '$7.91', method: 'reepay', status: 'Payment Received', date: '2025-11-26 / 11:24' },
    { id: '13686', order: '#89947', amount: '$14.63', method: 'reepay', status: 'Payment Received', date: '2025-11-26 / 01:44' },
    { id: '13685', order: '#89946', amount: '$12.86', method: 'reepay', status: 'Payment Received', date: '2025-11-25 / 21:29' },
    { id: '13684', order: '#89941', amount: '$14.81', method: 'reepay', status: 'Payment Received', date: '2025-11-25 / 20:40' },
    { id: '13683', order: '#89933', amount: '$25.92', method: 'reepay', status: 'Payment Received', date: '2025-11-25 / 08:40' },
    { id: '13682', order: '#89928', amount: '$14.81', method: 'reepay', status: 'Payment Received', date: '2025-11-25 / 03:31' },
    { id: '13681', order: '#89926', amount: '$94.47', method: 'reepay', status: 'Payment Received', date: '2025-11-25 / 02:39' },
];

function LatestTransactions() {
    return (
        <Stack flex={1}>
            <EnhanceTable rows={rows} from="latestTransactions" columns={columns} />
        </Stack>
    )
}

export default LatestTransactions
