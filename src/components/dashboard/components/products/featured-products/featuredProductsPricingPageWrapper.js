'use client';
import { Card, CardContent, CardHeader, Container, TextField, FormControlLabel, Radio, RadioGroup, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';

function FeaturedProductsPricingPageWrapper() {
    const [pricePerDay, setPricePerDay] = useState('0.10');
    const [pricePerMonth, setPricePerMonth] = useState('10');
    const [freePromotion, setFreePromotion] = useState('0');

    const handleSave = () => {
        console.log('Save pricing:', { pricePerDay, pricePerMonth, freePromotion });
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Pricing" />
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Price Per Day</Typography>
                            <TextField
                                fullWidth
                                size='normal'
                                type='text'
                                value={pricePerDay}
                                onChange={(e) => setPricePerDay(e.target.value)}
                                inputProps={{ maxLength: 32 }}
                            />
                        </Box>

                        <Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Price Per Month</Typography>
                            <TextField
                                fullWidth
                                size='normal'
                                type='text'
                                value={pricePerMonth}
                                onChange={(e) => setPricePerMonth(e.target.value)}
                                inputProps={{ maxLength: 32 }}
                            />
                        </Box>

                        <Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>Free Promotion</Typography>
                            <RadioGroup
                                value={freePromotion}
                                onChange={(e) => setFreePromotion(e.target.value)}
                            >
                                <FormControlLabel value="1" control={<Radio />} label="Enable" />
                                <FormControlLabel value="0" control={<Radio />} label="Disable" />
                            </RadioGroup>
                        </Box>

                        <Button variant="contained" color="primary" onClick={handleSave} sx={{ alignSelf: 'flex-end' }}>
                            Save Changes
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}

export default FeaturedProductsPricingPageWrapper;
