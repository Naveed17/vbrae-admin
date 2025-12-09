'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Stack } from '@mui/material'
import React from 'react'

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: false },
    { id: 'name', label: 'Name', align: 'left', sortable: false },
    { id: 'seller', label: 'Seller name', align: 'left', sortable: false },
    { id: 'offer', label: 'Offer', align: 'left', sortable: false },
    { id: 'keys', label: 'Keys', align: 'left', sortable: false },
    { id: 'details', label: 'Details', align: 'right', sortable: false },
];

const rows = [
    { id: '2793', name: 'Digimon Story Time Stranger EU PC Steam CD Key', seller: 'Seller A', offer: '15% off', keys: 'KEY-2793-ABC', image: 'https://cdn.vbrae.com/images/uploads/images/202511/36681c_56561.webp', date: '1 day ago', details: 'View' },
    { id: '2792', name: 'Glary Utilities Pro 6 Key (Lifetime / 2 PCs)', seller: 'Seller B', offer: '20% off', keys: 'KEY-2792-XYZ', image: 'https://cdn.vbrae.com/images/uploads/images/202511/4785040600c578e5e2627e5e1ad620132a5b0.webp', date: '1 day ago', details: 'View' },
    { id: '2791', name: 'Glary Software Update Pro 6 Key (Lifetime / 2 PCs)', seller: 'Seller C', offer: '10% off', keys: 'KEY-2791-DEF', image: 'https://cdn.vbrae.com/images/uploads/images/202511/81687b7cf21cba08af8774184afbc13880011.webp', date: '1 day ago', details: 'View' },
    { id: '2790', name: 'AVS Video ReMaker 8 Subscription Key for Windows (1Year / 1PC)', seller: 'Seller A', offer: '25% off', keys: 'KEY-2790-GHI', image: 'https://cdn.vbrae.com/images/uploads/images/202511/19176a06f828a93dabfa695d03593225291f7.webp', date: '1 day ago', details: 'View' },
    { id: '2789', name: 'Little Nightmares III EU PC Steam CD Key', seller: 'Seller D', offer: '5% off', keys: 'KEY-2789-JKL', image: 'https://cdn.vbrae.com/images/uploads/images/202511/24400c_72309.webp', date: '2 days ago', details: 'View' },
    { id: '2788', name: 'Tales of the Shire: A The Lord of The Rings Game PC Steam CD Key', seller: 'Seller B', offer: '18% off', keys: 'KEY-2788-MNO', image: 'https://cdn.vbrae.com/images/uploads/images/202511/69974c_16414.webp', date: '2 days ago', details: 'View' },
    { id: '2787', name: 'Microsoft Windows Server 2025 Datacenter Unlimited CPU Cores Key GLOBAL', seller: 'Seller E', offer: '30% off', keys: 'KEY-2787-PQR', image: 'https://cdn.vbrae.com/images/uploads/images/202511/25128363010601858adc38f68bab917945f81.webp', date: '2 days ago', details: 'View' },
    { id: '2786', name: 'RAILROADS Online! PC Steam CD Key', seller: 'Seller C', offer: '12% off', keys: 'KEY-2786-STU', image: 'https://cdn.vbrae.com/images/uploads/images/202511/34345c_15873.webp', date: '2 days ago', details: 'View' },
    { id: '2785', name: "EVERYBODY'S GOLF HOT SHOTS PC Steam CD Key", seller: 'Seller A', offer: '22% off', keys: 'KEY-2785-VWX', image: 'https://cdn.vbrae.com/images/uploads/images/202511/37248c_26434.webp', date: '2 days ago', details: 'View' },
    { id: '2784', name: 'Pine Hearts PC Steam CD Key', seller: 'Seller D', offer: '8% off', keys: 'KEY-2784-YZA', image: 'https://cdn.vbrae.com/images/uploads/images/202511/55862c_17684.webp', date: '2 days ago', details: 'View' },
];

function LatestProducts() {
    return (
        <Stack flex={1}>
            <EnhanceTable rows={rows} from="latestProducts" columns={columns} />
        </Stack>
    )
}

export default LatestProducts
