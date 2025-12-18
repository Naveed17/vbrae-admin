'use client';
import { Card, CardContent, CardHeader, Container, Button, Box, Select, MenuItem, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import TextEditor from '@/components/shared/textEditor';
import { EnhanceTable } from '@/components/shared/table';
import React, { useState } from 'react';

const categories = [
    { value: '138', label: 'ps5' },
    { value: '139', label: 'giftcards' },
    { value: '145', label: 'xbox-series-x' },
    { value: '146', label: 'nintendo' },
    { value: '149', label: 'battlenet' },
    { value: '152', label: 'google-play' },
    { value: '155', label: 'wiiu' },
    { value: '156', label: 'xbox-360' },
    { value: '158', label: 'pc-gaming' },
    { value: '161', label: 'amazon' },
    { value: '162', label: 'steam-wallet' },
    { value: '163', label: 'xbox-live-gift-cards' },
    { value: '165', label: 'itunes' },
    { value: '166', label: 'razor-gold' },
    { value: '167', label: 'fortnite-v-bucks' },
    { value: '168', label: 'software' },
    { value: '169', label: 'weekly-deals' },
    { value: '170', label: 'roblox' },
    { value: '171', label: 'nintendo-eshop' },
    { value: '175', label: 'vr-games' },
    { value: '176', label: 'oculus-quest' },
    { value: '177', label: 'game-accounts' },
    { value: '178', label: 'game-accounts-178' },
    { value: '179', label: 'apple-gift-card' },
    { value: '180', label: 'deezer' },
    { value: '181', label: 'ms-store-pc-games' },
    { value: '182', label: 'binance' },
    { value: '183', label: 'blizzard' },
    { value: '184', label: 'gucci' },
    { value: '185', label: 'netflix' },
    { value: '186', label: 'ebay' },
    { value: '190', label: 'meta-quest' },
    { value: '191', label: 'discord' },
    { value: '192', label: 'google-adwords' },
    { value: '196', label: 'game-accounts-196' },
    { value: '197', label: 'official-website' },
];

const guideColumns = [
    { id: 'id', label: 'No.', align: 'left', sortable: true },
    { id: 'category', label: 'Categories', align: 'left', sortable: true },
    { id: 'action', label: 'Options', align: 'right', sortable: false },
];

const guideRows = [
    { id: 1, category: 'xbox', content: '<h2>On the Xbox</h2><p><strong>Step 1:</strong> Grab a controller and press the <em>Xbox</em> button.</p><p><strong>Step 2:</strong> Select <em>Store</em> on the rollout menu.</p><p><strong>Step 3:</strong> Expand the Store menu and select <em>Redeem</em>.</p><p><strong>Step 4:</strong> Select <em>Redeem A Code</em>.</p><p><strong>Step 5:</strong> Enter the 25-character code. Make sure to ignore inserting the hyphens.</p><p><strong>Step 6:</strong> Select <em>Next</em> and follow the prompts to complete.</p>' },
    { id: 2, category: 'ps5', content: '<h2>On PlayStation 5</h2><p>Content here...</p>' },
    { id: 3, category: 'nintendo', content: '<h2>On Nintendo</h2><p>Content here...</p>' },
];

const vpnGuideRows = [
    { id: 1, category: 'vpn-guide-1', content: '<h2>VPN Guide 1</h2><p>Content here...</p>' },
    { id: 2, category: 'vpn-guide-2', content: '<h2>VPN Guide 2</h2><p>Content here...</p>' },
];

function ActivationPageWrapper() {
    const [categoryId, setCategoryId] = useState('138');
    const [content, setContent] = useState('');
    const [viewOpen, setViewOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [selectedGuide, setSelectedGuide] = useState(null);
    const [editContent, setEditContent] = useState('');

    const handleAddPage = () => {
        console.log('Add activation page:', { categoryId, content });
    };

    const handleTableActions = (prop) => {
        const { action, data } = prop;
        if (action === 'view') {
            setSelectedGuide(data);
            setViewOpen(true);
        } else if (action === 'edit') {
            setSelectedGuide(data);
            setEditContent(data.content);
            setEditOpen(true);
        } else if (action === 'delete') {
            console.log('Delete guide:', data);
        }
    };

    const handleViewClose = () => {
        setViewOpen(false);
        setSelectedGuide(null);
    };

    const handleEditClose = () => {
        setEditOpen(false);
        setSelectedGuide(null);
        setEditContent('');
    };

    const handleSaveEdit = () => {
        console.log('Save edit:', { ...selectedGuide, content: editContent });
        handleEditClose();
    };

    return (
        <Container maxWidth={false}>
            <Card sx={{ mb: 3 }}>
                <CardHeader title="Add Activation Page" />
                <CardContent>
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Categories</Typography>
                        <Select
                            fullWidth
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                            size="normal"
                        >
                            {categories.map(cat => (
                                <MenuItem key={cat.value} value={cat.value}>
                                    {cat.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Content</Typography>
                        <TextEditor initialValue={content} />
                    </Box>
                    <Button variant="contained" color="primary" onClick={handleAddPage}>
                        Add Page
                    </Button>
                </CardContent>
            </Card>

            <Card sx={{ mb: 3 }}>
                <CardHeader title="Activation Guide List" />
                <CardContent>
                    <EnhanceTable
                        handleTableAction={handleTableActions}
                        rows={guideRows}
                        from="activation-guides"
                        columns={guideColumns}
                    />
                </CardContent>
            </Card>

            <Card>
                <CardHeader title="VPN Activation Guide List" />
                <CardContent>
                    <EnhanceTable
                        handleTableAction={handleTableActions}
                        rows={vpnGuideRows}
                        from="activation-guides"
                        columns={guideColumns}
                    />
                </CardContent>
            </Card>

            <Dialog open={viewOpen} onClose={handleViewClose} maxWidth="lg" fullWidth>
                <DialogTitle>{selectedGuide?.category} Page</DialogTitle>
                <DialogContent sx={{ pt: 2 }}>
                    <div dangerouslySetInnerHTML={{ __html: selectedGuide?.content }} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleViewClose}>Close</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={editOpen} onClose={handleEditClose} maxWidth="lg" fullWidth>
                <DialogTitle sx={{ pb: 2 }}>Edit {selectedGuide?.category} Page</DialogTitle>
                <DialogContent sx={{ pt: '12px !important' }}>
                    <TextEditor initialValue={editContent} onChange={setEditContent} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditClose}>Cancel</Button>
                    <Button onClick={handleSaveEdit} variant="contained" color="primary">Save</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default ActivationPageWrapper;
