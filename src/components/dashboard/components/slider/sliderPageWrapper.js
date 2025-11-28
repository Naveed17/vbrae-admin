'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Button, Container, Stack, FormControlLabel, RadioGroup, FormControl, FormLabel, TextField, Select, MenuItem, Box } from '@mui/material';
import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import SliderForm from './sliderForm';

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'image', label: 'Image', align: 'left', sortable: true },
    { id: 'language', label: 'Language', align: 'left', sortable: true },
    { id: 'order', label: 'Order', align: 'left', sortable: true },
    { id: 'action', label: 'Action', align: 'right', sortable: false },
];
const rows = [
    {
        id: '1',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
        language: 'English',
        order: '1',
    },
    {
        id: '2',
        image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=300&fit=crop',
        language: 'Spanish',
        order: '2',
    },
    {
        id: '3',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
        language: 'French',
        order: '3',
    },
    {
        id: '4',
        image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=300&fit=crop',
        language: 'German',
        order: '4',
    },
    {
        id: '5',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
        language: 'Italian',
        order: '5',
    },

];

function SliderPageWrapper() {
    const [sliderStatus, setSliderStatus] = useState('1');
    const [sliderType, setSliderType] = useState('full_width');
    const [sliderEffect, setSliderEffect] = useState('fade');
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [language, setLanguage] = useState('');
    const [search, setSearch] = useState('');
    const [openAddForm, setOpenAddForm] = useState(false);
    const [editData, setEditData] = useState(null);

    const handleSave = () => {
        console.log({ sliderStatus, sliderType, sliderEffect });
    };

    const handleAddSlider = (formData) => {
        console.log('New slider item:', formData);
        // Handle form submission here
    };
    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'edit') {
            setEditData(data);
            setOpenAddForm(true);
        } else if (action === 'delete') {
            // Handle delete action
        }

    }
    console.log(editData)

    return (
        <Container maxWidth={false}>
            <Stack direction={'row'} gap={2}>
                <Card sx={{ flex: 2 }}>
                    <CardHeader title="Slider Items" action={
                        <Button variant='contained' color='inherit' onClick={() => setOpenAddForm(true)}>
                            Add Slider Item
                        </Button>
                    } />
                    <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center', borderBottom: 1, borderColor: 'divider' }}>
                        <Select
                            size='small'
                            value={rowsPerPage}
                            onChange={(e) => setRowsPerPage(e.target.value)}
                            sx={{ width: 100 }}
                        >
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                        </Select>
                        <Select
                            size='small'
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            displayEmpty
                            sx={{ width: 150 }}
                        >
                            <MenuItem value="">All Languages</MenuItem>
                            <MenuItem value="English">English</MenuItem>
                            <MenuItem value="Spanish">Spanish</MenuItem>
                            <MenuItem value="French">French</MenuItem>
                            <MenuItem value="German">German</MenuItem>
                            <MenuItem value="Italian">Italian</MenuItem>
                        </Select>
                        <TextField
                            size='small'
                            placeholder='Search...'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            sx={{ flex: 1 }}
                        />
                    </Box>
                    <CardContent>
                        <EnhanceTable handleTableAction={handleTableActions} rows={rows} from="slider" columns={columns} />
                    </CardContent>
                </Card>
                <Card sx={{ flex: 1, alignSelf: 'flex-start' }}>
                    <CardHeader title="Slider Settings" action={
                        <Button variant='contained' color='inherit' onClick={handleSave}>
                            Save Changes
                        </Button>
                    } />
                    <CardContent>
                        <Stack spacing={3}>
                            <FormControl>
                                <FormLabel>Status</FormLabel>
                                <RadioGroup value={sliderStatus} onChange={(e) => setSliderStatus(e.target.value)}>
                                    <FormControlLabel value="1" control={<Radio />} label="Enable" />
                                    <FormControlLabel value="0" control={<Radio />} label="Disable" />
                                </RadioGroup>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Type</FormLabel>
                                <RadioGroup value={sliderType} onChange={(e) => setSliderType(e.target.value)}>
                                    <FormControlLabel value="full_width" control={<Radio />} label="Full Width" />
                                    <FormControlLabel value="boxed" control={<Radio />} label="Boxed" />
                                </RadioGroup>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Effect</FormLabel>
                                <RadioGroup value={sliderEffect} onChange={(e) => setSliderEffect(e.target.value)}>
                                    <FormControlLabel value="fade" control={<Radio />} label="Fade" />
                                    <FormControlLabel value="slide" control={<Radio />} label="Slide" />
                                </RadioGroup>
                            </FormControl>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>

            <SliderForm
                open={openAddForm}
                onClose={() => { setOpenAddForm(false); setEditData(null) }}
                onSubmit={handleAddSlider}
                editData={editData}
            />
        </Container>
    )
}

export default SliderPageWrapper
