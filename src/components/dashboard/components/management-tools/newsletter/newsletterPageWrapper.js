'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, Button, Box, Grid, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import React, { useState } from 'react';

const userColumns = [
    { id: 'checkbox', label: '', align: 'center', sortable: false },
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'username', label: 'Username', align: 'left', sortable: true },
    { id: 'email', label: 'Email', align: 'left', sortable: true },
];

const subscriberColumns = [
    { id: 'checkbox', label: '', align: 'center', sortable: false },
    { id: 'email', label: 'Email', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const userRows = [
    {
        id: '1',
        username: 'admin',
        email: 'admin@vbrae.com',
    },
    {
        id: '2',
        username: 'user1',
        email: 'user1@vbrae.com',
    },
    {
        id: '3',
        username: 'user2',
        email: 'user2@vbrae.com',
    },
    {
        id: '4',
        username: 'user3',
        email: 'user3@vbrae.com',
    },
];

const subscriberRows = [
    {
        id: '590',
        email: 'wuxubuzu334@gmail.com',
    },
    {
        id: '591',
        email: 'subscriber1@gmail.com',
    },
    {
        id: '592',
        email: 'subscriber2@gmail.com',
    },
    {
        id: '593',
        email: 'subscriber3@gmail.com',
    },
];

function NewsletterPageWrapper() {
    const [userSelected, setUserSelected] = useState([]);
    const [subscriberSelected, setSubscriberSelected] = useState([]);
    const [newsletterStatus, setNewsletterStatus] = useState('1');
    const [newsletterPopup, setNewsletterPopup] = useState('0');

    const handleUserSelect = (event, row) => {
        if (event.target.checked) {
            setUserSelected([...userSelected, row]);
        } else {
            setUserSelected(userSelected.filter(item => item.id !== row.id));
        }
    };

    const handleSubscriberSelect = (event, row) => {
        if (event.target.checked) {
            setSubscriberSelected([...subscriberSelected, row]);
        } else {
            setSubscriberSelected(subscriberSelected.filter(item => item.id !== row.id));
        }
    };

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'delete') {
            console.log('Delete subscriber:', data);
        }
    };

    const handleSendEmail = () => {
        console.log('Send email to users:', userSelected);
        console.log('Send email to subscribers:', subscriberSelected);
    };

    const handleSettingsSave = () => {
        console.log('Save settings:', { newsletterStatus, newsletterPopup });
    };

    return (
        <Container maxWidth={false}>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Card>
                        <CardHeader title="User Newsletter" />
                        <CardContent>
                            <EnhanceTable
                                rows={userRows}
                                from="user-newsletter"
                                columns={userColumns}
                                selected={userSelected}
                                handleSelect={handleUserSelect}
                            />
                            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleSendEmail} startIcon={<SendIcon />}>
                                Send Email
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Card>
                        <CardHeader title="Subscribers Newsletter" />
                        <CardContent>
                            <EnhanceTable
                                rows={subscriberRows}
                                from="subscribers-newsletter"
                                columns={subscriberColumns}
                                selected={subscriberSelected}
                                handleSelect={handleSubscriberSelect}
                                handleTableAction={handleTableActions}
                            />
                            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleSendEmail} startIcon={<SendIcon />}>
                                Send Email
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Card>
                <CardHeader title="Settings" />
                <CardContent>
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Status</Typography>
                        <RadioGroup value={newsletterStatus} onChange={(e) => setNewsletterStatus(e.target.value)}>
                            <FormControlLabel value="1" control={<Radio />} label="Enable" />
                            <FormControlLabel value="0" control={<Radio />} label="Disable" />
                        </RadioGroup>
                    </Box>
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Newsletter Popup</Typography>
                        <RadioGroup value={newsletterPopup} onChange={(e) => setNewsletterPopup(e.target.value)}>
                            <FormControlLabel value="1" control={<Radio />} label="Enable" />
                            <FormControlLabel value="0" control={<Radio />} label="Disable" />
                        </RadioGroup>
                    </Box>
                    <Button variant="contained" color="primary" onClick={handleSettingsSave}>
                        Save Changes
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
}

export default NewsletterPageWrapper;
