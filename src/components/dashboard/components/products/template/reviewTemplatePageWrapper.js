'use client';
import { Container, Box, Typography, TextField, Button, Grid, Divider } from '@mui/material';
import { ArrowCircleRight as ArrowCircleRightIcon } from '@mui/icons-material';
import Image from 'next/image';
import React, { useState } from 'react';

function ReviewTemplatePageWrapper({ templateId }) {
    const [formData, setFormData] = useState({
        name: 'Homeworld: Remastered Collection',
        genres: 'real-time-strategy-rts',
        summary: 'Homeworld Remastered Collection updates and introduces the landmark space strategy games to modern audiences. The collection includes Homeworld and Homeworld 2, painstakingly remastered by Gearbox in cooperation with key members of the original development team and members of the series\' passionate fan community.',
        storyline: '',
    });

    const [coverImage] = useState('https://images.igdb.com/igdb/image/upload/t_cover_big/co1rg1.jpg');
    const [screenshots] = useState([
        'https://images.igdb.com/igdb/image/upload/t_cover_big/vxjrtex9evopc3zccbyt.jpg',
        'https://images.igdb.com/igdb/image/upload/t_cover_big/bii8epoivbj955bejawp.jpg',
        'https://images.igdb.com/igdb/image/upload/t_cover_big/weycavsm1rmp2iuogza8.jpg',
        'https://images.igdb.com/igdb/image/upload/t_cover_big/slddjl2g8sujnguf4d8c.jpg',
        'https://images.igdb.com/igdb/image/upload/t_cover_big/iaybehp2qoxmcj0g9b6q.jpg',
    ]);

    const [videos] = useState([
        'https://www.youtube.com/embed/NhfNUObLrWI',
        'https://www.youtube.com/embed/dARq910Ns1w',
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleContinue = () => {
        console.log('Save template:', formData);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {/* Header */}
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>Review Template</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>Review and confirm template details before inserting to database</Typography>
                </Box>

                {/* Cover & Info Section */}
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: 4, alignItems: 'start' }}>
                    {/* Cover Image */}
                    {coverImage && (
                        <Box sx={{ position: 'relative', width: '100%', height: 350, borderRadius: 2, overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
                            <Image src={coverImage} alt="Cover" fill style={{ objectFit: 'cover' }} />
                        </Box>
                    )}

                    {/* Info Fields */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <Box>
                            <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 0.5 }}>Title</Typography>
                            <TextField fullWidth size="normal" name="name" value={formData.name} onChange={handleInputChange} sx={{ mt: 0.5 }} />
                        </Box>
                        <Box>
                            <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 0.5 }}>Genres</Typography>
                            <TextField fullWidth size="normal" name="genres" value={formData.genres} onChange={handleInputChange} sx={{ mt: 0.5 }} />
                        </Box>
                        <Box>
                            <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 0.5 }}>Summary</Typography>
                            <TextField fullWidth size="normal" name="summary" value={formData.summary} onChange={handleInputChange} sx={{ mt: 0.5 }} />
                        </Box>
                        <Box>
                            <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 0.5 }}>Storyline</Typography>
                            <TextField fullWidth size="normal" name="storyline" value={formData.storyline} onChange={handleInputChange} multiline rows={3} sx={{ mt: 0.5 }} />
                        </Box>
                    </Box>
                </Box>

                <Divider />

                {/* Screenshots */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Screenshots</Typography>
                    <Grid container spacing={2}>
                        {screenshots.map((screenshot, idx) => (
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                                <Box sx={{ position: 'relative', width: '100%', height: 220, borderRadius: 2, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
                                    <Image src={screenshot} alt={`Screenshot ${idx + 1}`} fill style={{ objectFit: 'cover' }} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Divider />

                {/* Videos */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Videos</Typography>
                    <Grid container spacing={2}>
                        {videos.map((video, idx) => (
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                                <Box sx={{ position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: 2, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                                    <iframe
                                        src={video}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            border: 'none',
                                        }}
                                        allowFullScreen
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Action Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
                    <Button variant="contained" color="primary" size="large" endIcon={<ArrowCircleRightIcon />} onClick={handleContinue} sx={{ px: 4, fontWeight: 600 }}>
                        Continue to Insert
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default ReviewTemplatePageWrapper;
