'use client';
import { EnhanceTable } from '@/components/shared/table';
import { Card, CardContent, CardHeader, Container, TextField, Select, MenuItem, Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const columns = [
    { id: 'id', label: 'Id', align: 'left', sortable: true },
    { id: 'image', label: '', align: 'left', sortable: false },
    { id: 'name', label: 'Name', align: 'left', sortable: true },
    { id: 'platform', label: 'Platform', align: 'left', sortable: true },
    { id: 'region', label: 'Region', align: 'left', sortable: true },
    { id: 'price', label: 'Price', align: 'left', sortable: true },
    { id: 'actions', label: 'Options', align: 'center', sortable: false },
];

const platforms = [
    'EA Origin', 'Steam', 'Battle.net', 'NCSoft', 'Ubisoft', 'Uplay', 'Kinguin',
    'XBOX 360', 'XBOX ONE', 'PlayStation 3', 'PlayStation 4', 'PlayStation Vita',
    'Android', 'GOG COM', 'Nintendo', 'Other', 'Epic Games'
];

const regions = [
    { id: '1', name: 'Europe' },
    { id: '2', name: 'United States' },
    { id: '3', name: 'Region free' },
    { id: '4', name: 'Other' },
    { id: '5', name: 'Outside Europe' },
    { id: '6', name: 'RU VPN' },
    { id: '7', name: 'Russia' },
    { id: '8', name: 'United Kingdom' },
    { id: '9', name: 'China' },
    { id: '10', name: 'RoW (Rest of World)' },
    { id: '11', name: 'Latin America' },
    { id: '12', name: 'Asia' },
    { id: '13', name: 'Germany' },
    { id: '14', name: 'Australia' },
    { id: '15', name: 'Brazil' },
    { id: '16', name: 'India' },
    { id: '17', name: 'Japan' },
    { id: '18', name: 'North America' },
];

const rows = [
    {
        id: '4',
        image: 'https://static.kinguin.net/media/catalog/category/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/anno_8.jpg',
        name: 'Anno 2070 Ubisoft Connect CD Key',
        platform: 'Ubisoft',
        region: 'REGION FREE',
        price: '3.89',
    },
];

function KinguinPageWrapper() {
    const [search, setSearch] = useState('');
    const [platform, setPlatform] = useState('');
    const [regionId, setRegionId] = useState('');
    const [tags, setTags] = useState('');
    const [filteredRows, setFilteredRows] = useState(rows);
    const router = useRouter()
    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'import') {
            console.log('Import:', data);
        } else if (action === 'view') {
            router.push(`/admin/kinguin/${data.id}`);
        }
    };

    const handleFilter = () => {
        const filtered = rows.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()) &&
            (!platform || item.platform === platform) &&
            (!regionId || item.region === regionId) &&
            (!tags || item.name.toLowerCase().includes(tags.toLowerCase()))
        );
        setFilteredRows(filtered);
    };

    return (
        <Container maxWidth={false}>
            <Card>
                <CardHeader title="Kinguin Products" />
                <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'flex-end', flexWrap: 'wrap', borderBottom: 1, borderColor: 'divider' }}>
                    <Box sx={{ minWidth: 150 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Search By Name</Typography>
                        <TextField
                            size='small'
                            placeholder='Name'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            sx={{ width: '100%' }}
                        />
                    </Box>

                    <Box sx={{ minWidth: 150 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Search By Platform</Typography>
                        <Select
                            size='small'
                            value={platform}
                            onChange={(e) => setPlatform(e.target.value)}
                            displayEmpty
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value="">All</MenuItem>
                            {platforms.map((plat) => (
                                <MenuItem key={plat} value={plat}>{plat}</MenuItem>
                            ))}
                        </Select>
                    </Box>

                    <Box sx={{ minWidth: 150 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Region Id</Typography>
                        <Select
                            size='small'
                            value={regionId}
                            onChange={(e) => setRegionId(e.target.value)}
                            displayEmpty
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value="">All</MenuItem>
                            {regions.map((reg) => (
                                <MenuItem key={reg.id} value={reg.name}>{reg.name}</MenuItem>
                            ))}
                        </Select>
                    </Box>

                    <Box sx={{ minWidth: 150 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Search By Tags</Typography>
                        <TextField
                            size='small'
                            placeholder='Tags Comma separated'
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
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
                        rows={filteredRows}
                        from="kinguin"
                        columns={columns}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default KinguinPageWrapper;
