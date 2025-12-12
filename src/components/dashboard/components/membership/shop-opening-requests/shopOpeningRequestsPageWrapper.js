'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container } from '@mui/material';
import React from 'react';

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'user', label: 'User', align: 'left', sortable: true },
    { id: 'shop_description', label: 'Shop Description', align: 'left', sortable: true },
    { id: 'required_files', label: 'Required Files', align: 'left', sortable: true },
    { id: 'membership_plan', label: 'Membership Plan', align: 'left', sortable: true },
    { id: 'payment', label: 'Payment', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const rows = [
    {
        id: '16923',
        user: {
            username: 'Gamers247',
            shopName: 'Gamers247',
            email: 'dw01fcouk@googlemail.com',
            phone: '07476969282',
            location: '',
            avatar: 'https://cdn.vbrae.com/images/assets/img/user.png'
        },
        shop_description: 'Sold by gamers, bought by gamers, played by gamers, twenty four seven',
        required_files: '',
        membership_plan: 'Tier 1 (Number of Ads: Unlimited, Number of Days: Unlimited)',
        payment: '',
    },
];

function ShopOpeningRequestsPageWrapper() {
    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'approve') {
            console.log('Approve request:', data);
        } else if (action === 'decline') {
            console.log('Decline request:', data);
        }
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Shop Opening Requests" />
                <CardContent>
                    <EnhanceTable
                        handleTableAction={handleTableActions}
                        rows={rows}
                        from="shop-opening-requests"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default ShopOpeningRequestsPageWrapper;
