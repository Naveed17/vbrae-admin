'use client';
import { Card, CardContent, CardHeader, Container, TextField, Box, Typography, Button, Grid, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useState } from 'react';

function PayoutSettingsPageWrapper() {
    const [paypalEnabled, setPaypalEnabled] = useState('1');
    const [bitcoinEnabled, setBitcoinEnabled] = useState('1');
    const [ibanEnabled, setIbanEnabled] = useState('1');
    const [swiftEnabled, setSwiftEnabled] = useState('1');
    const [minPayoutPaypal, setMinPayoutPaypal] = useState('50');
    const [minPayoutBitcoin, setMinPayoutBitcoin] = useState('60');
    const [minPayoutIban, setMinPayoutIban] = useState('100');
    const [minPayoutSwift, setMinPayoutSwift] = useState('100');

    const handlePaypalSubmit = (e) => {
        e.preventDefault();
        console.log('PayPal settings saved:', { paypalEnabled, minPayoutPaypal });
    };

    const handleBitcoinSubmit = (e) => {
        e.preventDefault();
        console.log('Bitcoin settings saved:', { bitcoinEnabled, minPayoutBitcoin });
    };

    const handleIbanSubmit = (e) => {
        e.preventDefault();
        console.log('IBAN settings saved:', { ibanEnabled, minPayoutIban });
    };

    const handleSwiftSubmit = (e) => {
        e.preventDefault();
        console.log('SWIFT settings saved:', { swiftEnabled, minPayoutSwift });
    };

    const SettingCard = ({ title, enabled, setEnabled, minPayout, setMinPayout, onSubmit }) => (
        <Card>
            <CardHeader title={title} />
            <CardContent>
                <form onSubmit={onSubmit}>
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                            Status
                        </Typography>
                        <RadioGroup
                            row
                            value={enabled}
                            onChange={(e) => setEnabled(e.target.value)}
                        >
                            <FormControlLabel value="1" control={<Radio />} label="Enable" />
                            <FormControlLabel value="0" control={<Radio />} label="Disable" />
                        </RadioGroup>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <TextField
                            fullWidth
                            placeholder="Minimum payout amount ($)"
                            type="text"
                            value={minPayout}
                            onChange={(e) => setMinPayout(e.target.value)}
                            inputProps={{ maxLength: 32 }}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button type="submit" variant="contained" color="primary">
                            Save Changes
                        </Button>
                    </Box>
                </form>
            </CardContent>
        </Card>
    );

    return (
        <Container maxWidth={false}>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <SettingCard
                        title="PayPal"
                        enabled={paypalEnabled}
                        setEnabled={setPaypalEnabled}
                        minPayout={minPayoutPaypal}
                        setMinPayout={setMinPayoutPaypal}
                        onSubmit={handlePaypalSubmit}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <SettingCard
                        title="Bitcoin (BTC)"
                        enabled={bitcoinEnabled}
                        setEnabled={setBitcoinEnabled}
                        minPayout={minPayoutBitcoin}
                        setMinPayout={setMinPayoutBitcoin}
                        onSubmit={handleBitcoinSubmit}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <SettingCard
                        title="IBAN"
                        enabled={ibanEnabled}
                        setEnabled={setIbanEnabled}
                        minPayout={minPayoutIban}
                        setMinPayout={setMinPayoutIban}
                        onSubmit={handleIbanSubmit}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <SettingCard
                        title="SWIFT"
                        enabled={swiftEnabled}
                        setEnabled={setSwiftEnabled}
                        minPayout={minPayoutSwift}
                        setMinPayout={setMinPayoutSwift}
                        onSubmit={handleSwiftSubmit}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default PayoutSettingsPageWrapper;
