'use client';
import { Card, CardContent, CardHeader, Container, Button, Box, TextField, Grid } from '@mui/material';
import { Save as SaveIcon } from '@mui/icons-material';
import React, { useState } from 'react';

function SocialLoginPageWrapper() {
  const [facebook, setFacebook] = useState({
    facebook_app_id: '225363701980313',
    facebook_app_secret: '6610b1002bdb016f900953ba92ec76d7',
  });

  const [google, setGoogle] = useState({
    google_client_id: '974909898788-s4p3ca0r1r65ia8udlbu06iv1sl6143d.apps.googleusercontent.com',
    google_client_secret: 'CK0tOaWmO2m3S-W62B0XNgh8',
  });

  const [vk, setVk] = useState({
    vk_app_id: '',
    vk_secure_key: '',
  });

  const handleFacebookChange = (e) => {
    const { name, value } = e.target;
    setFacebook(prev => ({ ...prev, [name]: value }));
  };

  const handleGoogleChange = (e) => {
    const { name, value } = e.target;
    setGoogle(prev => ({ ...prev, [name]: value }));
  };

  const handleVkChange = (e) => {
    const { name, value } = e.target;
    setVk(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveFacebook = () => {
    console.log('Save Facebook:', facebook);
  };

  const handleSaveGoogle = () => {
    console.log('Save Google:', google);
  };

  const handleSaveVk = () => {
    console.log('Save VK:', vk);
  };

  return (
    <Container maxWidth={false}>
      <Grid container spacing={3}>
        {/* Facebook Login */}
        <Grid item size={{ xs: 12 }}>
          <Card>
            <CardHeader title="Facebook Login" />
            <CardContent>
              <Box sx={{ display: 'grid', gap: 2.5 }}>
                <TextField
                  name="facebook_app_id"
                  value={facebook.facebook_app_id}
                  onChange={handleFacebookChange}
                  fullWidth
                  size="normal"
                  placeholder="App ID"
                />
                <TextField
                  name="facebook_app_secret"
                  value={facebook.facebook_app_secret}
                  onChange={handleFacebookChange}
                  fullWidth
                  size="normal"
                  placeholder="App Secret"
                />
              </Box>
            </CardContent>
            <Box sx={{ p: 2, display: 'flex', gap: 1, justifyContent: 'flex-end', borderTop: 1, borderColor: 'divider' }}>
              <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleSaveFacebook}>
                Save Changes
              </Button>
            </Box>
          </Card>
        </Grid>

        {/* Google Login */}
        <Grid item size={{ xs: 12 }}>
          <Card>
            <CardHeader title="Google Login" />
            <CardContent>
              <Box sx={{ display: 'grid', gap: 2.5 }}>
                <TextField
                  name="google_client_id"
                  value={google.google_client_id}
                  onChange={handleGoogleChange}
                  fullWidth
                  size="normal"
                  placeholder="Client ID"
                />
                <TextField
                  name="google_client_secret"
                  value={google.google_client_secret}
                  onChange={handleGoogleChange}
                  fullWidth
                  size="normal"
                  placeholder="Client Secret"
                />
              </Box>
            </CardContent>
            <Box sx={{ p: 2, display: 'flex', gap: 1, justifyContent: 'flex-end', borderTop: 1, borderColor: 'divider' }}>
              <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleSaveGoogle}>
                Save Changes
              </Button>
            </Box>
          </Card>
        </Grid>

        {/* VKontakte Login */}
        <Grid item size={{ xs: 12 }}>
          <Card>
            <CardHeader title="VKontakte Login" />
            <CardContent>
              <Box sx={{ display: 'grid', gap: 2.5 }}>
                <TextField
                  name="vk_app_id"
                  value={vk.vk_app_id}
                  onChange={handleVkChange}
                  fullWidth
                  size="normal"
                  placeholder="App ID"
                />
                <TextField
                  name="vk_secure_key"
                  value={vk.vk_secure_key}
                  onChange={handleVkChange}
                  fullWidth
                  size="normal"
                  placeholder="Secure Key"
                />
              </Box>
            </CardContent>
            <Box sx={{ p: 2, display: 'flex', gap: 1, justifyContent: 'flex-end', borderTop: 1, borderColor: 'divider' }}>
              <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleSaveVk}>
                Save Changes
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SocialLoginPageWrapper;
