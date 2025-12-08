'use client';
import { Container, Card, CardContent, CardHeader, Box, Typography, Button, Grid, Divider } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';
import Image from 'next/image';
import React, { useState } from 'react';

function KinguinDetailsPageWrapper({ productId }) {
    const [product] = useState({
        id: '4',
        productId: '5c9b5eab2539a4e8f172143e',
        name: 'Anno 2070 Ubisoft Connect CD Key',
        description: 'Anno 2070. Our world has changed. The rising level of the ocean has harmed the coastal cities and climate change has made large stretches of land inhospitable. The latest in the award-winning strategy series, Anno 2070™ offers a new world full of challenges, where you will need to master resources, diplomacy, and trade in the most comprehensive economic management system in the Anno series. Build your society of the future, colonize islands, and create sprawling megacities with multitudes of buildings, vehicles, and resources to manage. Engineer production chains such as Robot Factories, Oil Refineries, and Diamond Mines, and trade with a variety of goods and commodities. Features A New Era While adhering to the fundamentals that made the Anno franchise a success, the near-future setting will bring numerous new gameplay mechanics, architectural breakthroughs, and all-new challenges. Additionally, players will be able to build massive cities, the scope of which has never been seen in prior Anno games! Become an Architect of the Future Face the current world\'s challenges to shape the world of tomorrow. You can either join the Tycoons to pursue an industrial and efficient course, or side with the Ecos to create a more sustainable and environmentally friendly direction. An Evolving, Dynamic World Decisions will have an impact on the environment, the architectural look of the world, and the needs of the population. Discover Hidden Depths and New Resources The mysteries of the sea and the sky are waiting to be discovered. Take advantage of the transport systems of the future and develop a powerful economy. The Enhanced Anno with New Features to Master Smuggle wares between harbors without being detected by the coastal patrols, or forge alliances with powerful figures to expand your influence.',
        developers: ['Blue Byte', 'Related Designs'],
        publishers: ['Ubisoft'],
        regionalLimitations: 'REGION FREE',
        platform: 'Ubisoft',
        metacriticScore: '83',
        releaseDate: '2011-11-17',
        ageRating: 'PEGI 7',
        steam: '',
        price: '3.89',
        image: 'https://static.kinguin.net/media/catalog/category/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/anno_8.jpg',
        qty: '9',
    });

    const handleImport = () => {
        console.log('Import product:', product);
    };

    const DetailRow = ({ label, value }) => (
        <Box sx={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 2, py: 1.5, borderBottom: 1, borderColor: 'divider' }}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary' }}>{label}</Typography>
            <Typography variant="body2">{value || '--'}</Typography>
        </Box>
    );

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Card>
                <CardHeader title="Product Details" />
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {/* Image */}
                        <Box sx={{ position: 'relative', width: '100%', height: 400, borderRadius: 2, overflow: 'hidden' }}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </Box>

                        <Divider />

                        {/* Details */}
                        <Box>
                            <DetailRow label="Id" value={`#${product.id}`} />
                            <DetailRow label="Product Id" value={product.productId} />
                            <DetailRow label="Name" value={product.name} />
                            <DetailRow label="Description" value={product.description} />
                            <DetailRow label="Developers" value={product.developers.join(', ')} />
                            <DetailRow label="Publishers" value={product.publishers.join(', ')} />
                            <DetailRow label="Regional Limitations" value={product.regionalLimitations} />
                            <DetailRow label="Platform" value={product.platform} />
                            <DetailRow label="Metacritic Score" value={product.metacriticScore} />
                            <DetailRow label="Release Date" value={product.releaseDate} />
                            <DetailRow label="Age Rating" value={product.ageRating} />
                            <DetailRow label="Steam" value={product.steam} />
                            <DetailRow label="Price" value={`$${product.price}`} />
                        </Box>



                        {/* Action Button */}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<DownloadIcon />}
                                onClick={handleImport}
                                sx={{ px: 3 }}
                            >
                                Import
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}

export default KinguinDetailsPageWrapper;
