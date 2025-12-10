'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Select, MenuItem, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AddIcon from '@/theme/overrides/icons/add';
import CustomFieldDrawer from './customFieldDrawer';

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'name', label: 'Name', align: 'left', sortable: true },
    { id: 'type', label: 'Type', align: 'left', sortable: true },
    { id: 'filter_action', label: '', align: 'left', sortable: false },
    { id: 'required', label: 'Required', align: 'left', sortable: true },
    { id: 'order', label: 'Order', align: 'left', sortable: true },
    { id: 'status', label: 'Status', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'left', sortable: false },
];

const rows = [
    {
        id: '3',
        name: 'Material',
        type: 'Checkbox (Multiple Selection)',
        filter_action: 'remove',
        required: 'No',
        order: '1',
        status: 'Active',
    },
    {
        id: '4',
        name: 'Color',
        type: 'Dropdown (Single Selection)',
        filter_action: 'remove',
        required: 'Yes',
        order: '2',
        status: 'Active',
    },
    {
        id: '5',
        name: 'Size',
        type: 'Text Input',
        filter_action: 'remove',
        required: 'No',
        order: '3',
        status: 'Inactive',
    },
];

function CustomFieldPageWrapper() {
    const router = useRouter();
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const [search, setSearch] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'edit') {
            setSelectedData(data);
            setIsEdit(true);
            setDrawerOpen(true);
        } else if (action === 'delete') {
            console.log('Delete custom field:', data);
        }
    };

    const handleAddClick = () => {
        setSelectedData(null);
        setIsEdit(false);
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
        setSelectedData(null);
    };

    const handleFilter = () => {
        console.log('Filter:', { rowsPerPage, search });
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Custom Fields" action={
                    <Button variant='contained' startIcon={<AddIcon />} onClick={handleAddClick}>Add Custom Field</Button>
                } />
                <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'flex-end', flexWrap: 'wrap', borderBottom: 1, borderColor: 'divider' }}>
                    <Box sx={{ minWidth: 80 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Show</Typography>
                        <Select
                            size='small'
                            value={rowsPerPage}
                            onChange={(e) => setRowsPerPage(e.target.value)}
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                        </Select>
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 200 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Search</Typography>
                        <TextField
                            size='small'
                            placeholder='Search'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            sx={{ width: '100%' }}
                        />
                    </Box>

                    <Button size='small' variant="contained" color="primary" onClick={handleFilter} sx={{ height: 40 }}>
                        Filter
                    </Button>
                </Box>
                <CardContent>
                    <EnhanceTable
                        handleTableAction={handleTableActions}
                        rows={rows}
                        from="custom-fields"
                        columns={columns}
                    />
                </CardContent>
            </Card>

            <CustomFieldDrawer
                open={drawerOpen}
                onClose={handleDrawerClose}
                isEdit={isEdit}
                data={selectedData}
            />
        </Container>
    );
}

export default CustomFieldPageWrapper;
