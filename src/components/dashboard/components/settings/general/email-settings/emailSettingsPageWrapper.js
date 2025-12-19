'use client';
import { Card, CardContent, CardHeader, Container, Button, Box, TextField, Select, MenuItem, Typography, FormControlLabel, Radio, RadioGroup, Grid } from '@mui/material';
import { Save as SaveIcon, Send as SendIcon } from '@mui/icons-material';
import React, { useState } from 'react';

function EmailSettingsPageWrapper() {
  const [emailSettings, setEmailSettings] = useState({
    mail_protocol: 'smtp',
    mail_library: 'swift',
    mail_encryption: 'tls',
    mail_host: 'smtp.sendgrid.net',
    mail_port: '587',
    mail_username: 'apikey',
    mail_password: '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',
    mail_title: 'VBRAE.COM',
    mail_reply_to: 'Info@vbrae.com',
  });

  const [emailVerification, setEmailVerification] = useState(1);

  const [emailOptions, setEmailOptions] = useState({
    send_email_new_product: 0,
    send_email_buyer_purchase: 1,
    send_email_order_shipped: 1,
    send_email_contact_messages: 0,
    send_email_shop_opening_request: 1,
    send_email_bidding_system: 1,
    mail_options_account: 'admin@vbrae.com',
  });

  const [testEmail, setTestEmail] = useState('');

  const handleEmailSettingsChange = (e) => {
    const { name, value } = e.target;
    setEmailSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleEmailOptionsChange = (e) => {
    const { name, value } = e.target;
    setEmailOptions(prev => ({ ...prev, [name]: parseInt(value) || value }));
  };

  const handleSaveEmailSettings = () => {
    console.log('Save email settings:', emailSettings);
  };

  const handleSaveEmailVerification = () => {
    console.log('Save email verification:', emailVerification);
  };

  const handleSaveEmailOptions = () => {
    console.log('Save email options:', emailOptions);
  };

  const handleSendTestEmail = () => {
    console.log('Send test email to:', testEmail);
  };

  return (
    <Container maxWidth={false}>
      <Grid container spacing={3}>
        {/* Email Settings */}
        <Grid item size={{ xs: 12 }}>
          <Card>
            <CardHeader title="Email Settings" />
            <CardContent>
              <Box sx={{ display: 'grid', gap: 2.5 }}>
                <Select
                  name="mail_protocol"
                  value={emailSettings.mail_protocol}
                  onChange={handleEmailSettingsChange}
                  fullWidth
                  size="normal"
                >
                  <MenuItem value="smtp">SMTP</MenuItem>
                  <MenuItem value="mail">Mail</MenuItem>
                </Select>

                <Select
                  name="mail_library"
                  value={emailSettings.mail_library}
                  onChange={handleEmailSettingsChange}
                  fullWidth
                  size="normal"
                >
                  <MenuItem value="swift">Swift Mailer</MenuItem>
                  <MenuItem value="php">PHP Mailer</MenuItem>
                </Select>

                <Select
                  name="mail_encryption"
                  value={emailSettings.mail_encryption}
                  onChange={handleEmailSettingsChange}
                  fullWidth
                  size="normal"
                >
                  <MenuItem value="tls">TLS</MenuItem>
                  <MenuItem value="ssl">SSL</MenuItem>
                </Select>

                <TextField
                  name="mail_host"
                  value={emailSettings.mail_host}
                  onChange={handleEmailSettingsChange}
                  fullWidth
                  size="normal"
                  placeholder="Mail Host"
                />

                <TextField
                  name="mail_port"
                  value={emailSettings.mail_port}
                  onChange={handleEmailSettingsChange}
                  fullWidth
                  size="normal"
                  placeholder="Mail Port"
                />

                <TextField
                  name="mail_username"
                  value={emailSettings.mail_username}
                  onChange={handleEmailSettingsChange}
                  fullWidth
                  size="normal"
                  placeholder="Username"
                />

                <TextField
                  name="mail_password"
                  type="password"
                  value={emailSettings.mail_password}
                  onChange={handleEmailSettingsChange}
                  fullWidth
                  size="normal"
                  placeholder="Password"
                />

                <TextField
                  name="mail_title"
                  value={emailSettings.mail_title}
                  onChange={handleEmailSettingsChange}
                  fullWidth
                  size="normal"
                  placeholder="Title"
                />

                <TextField
                  name="mail_reply_to"
                  type="email"
                  value={emailSettings.mail_reply_to}
                  onChange={handleEmailSettingsChange}
                  fullWidth
                  size="normal"
                  placeholder="Reply to"
                />
              </Box>
            </CardContent>
            <Box sx={{ p: 2, display: 'flex', gap: 1, justifyContent: 'flex-end', borderTop: 1, borderColor: 'divider' }}>
              <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleSaveEmailSettings}>
                Save Changes
              </Button>
            </Box>
          </Card>
        </Grid>

        {/* Email Verification */}
        <Grid item size={{ xs: 12 }}>
          <Card>
            <CardHeader title="Email Verification" />
            <CardContent>
              <RadioGroup
                value={emailVerification}
                onChange={(e) => setEmailVerification(parseInt(e.target.value))}
              >
                <FormControlLabel value={1} control={<Radio />} label="Enable" />
                <FormControlLabel value={0} control={<Radio />} label="Disable" />
              </RadioGroup>
            </CardContent>
            <Box sx={{ p: 2, display: 'flex', gap: 1, justifyContent: 'flex-end', borderTop: 1, borderColor: 'divider' }}>
              <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleSaveEmailVerification}>
                Save Changes
              </Button>
            </Box>
          </Card>
        </Grid>

        {/* Email Options */}
        <Grid item size={{ xs: 12 }}>
          <Card>
            <CardHeader title="Email Options" />
            <CardContent>
              <Box sx={{ display: 'grid', gap: 2.5 }}>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>Send email when a new product is added</Typography>
                  <RadioGroup row name="send_email_new_product" value={emailOptions.send_email_new_product} onChange={handleEmailOptionsChange}>
                    <FormControlLabel value={1} control={<Radio size="small" />} label="Yes" />
                    <FormControlLabel value={0} control={<Radio size="small" />} label="No" />
                  </RadioGroup>
                </Box>

                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>Send email to buyer after purchase</Typography>
                  <RadioGroup row name="send_email_buyer_purchase" value={emailOptions.send_email_buyer_purchase} onChange={handleEmailOptionsChange}>
                    <FormControlLabel value={1} control={<Radio size="small" />} label="Yes" />
                    <FormControlLabel value={0} control={<Radio size="small" />} label="No" />
                  </RadioGroup>
                </Box>

                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>Send email to buyer when order shipped</Typography>
                  <RadioGroup row name="send_email_order_shipped" value={emailOptions.send_email_order_shipped} onChange={handleEmailOptionsChange}>
                    <FormControlLabel value={1} control={<Radio size="small" />} label="Yes" />
                    <FormControlLabel value={0} control={<Radio size="small" />} label="No" />
                  </RadioGroup>
                </Box>

                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>Send contact messages to email address</Typography>
                  <RadioGroup row name="send_email_contact_messages" value={emailOptions.send_email_contact_messages} onChange={handleEmailOptionsChange}>
                    <FormControlLabel value={1} control={<Radio size="small" />} label="Yes" />
                    <FormControlLabel value={0} control={<Radio size="small" />} label="No" />
                  </RadioGroup>
                </Box>

                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>Send email when there is a new shop opening request</Typography>
                  <RadioGroup row name="send_email_shop_opening_request" value={emailOptions.send_email_shop_opening_request} onChange={handleEmailOptionsChange}>
                    <FormControlLabel value={1} control={<Radio size="small" />} label="Yes" />
                    <FormControlLabel value={0} control={<Radio size="small" />} label="No" />
                  </RadioGroup>
                </Box>

                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>Bidding system emails</Typography>
                  <RadioGroup row name="send_email_bidding_system" value={emailOptions.send_email_bidding_system} onChange={handleEmailOptionsChange}>
                    <FormControlLabel value={1} control={<Radio size="small" />} label="Enable" />
                    <FormControlLabel value={0} control={<Radio size="small" />} label="Disable" />
                  </RadioGroup>
                </Box>

                <TextField
                  name="mail_options_account"
                  value={emailOptions.mail_options_account}
                  onChange={handleEmailOptionsChange}
                  fullWidth
                  size="normal"
                  placeholder="Email Address"
                  helperText="Admin emails will be sent to this address"
                />
              </Box>
            </CardContent>
            <Box sx={{ p: 2, display: 'flex', gap: 1, justifyContent: 'flex-end', borderTop: 1, borderColor: 'divider' }}>
              <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleSaveEmailOptions}>
                Save Changes
              </Button>
            </Box>
          </Card>
        </Grid>

        {/* Send Test Email */}
        <Grid item size={{ xs: 12 }}>
          <Card>
            <CardHeader title="Send Test Email" subheader="Check if your mail server is working" />
            <CardContent>
              <TextField
                value={testEmail}
                onChange={(e) => setTestEmail(e.target.value)}
                fullWidth
                size="normal"
                placeholder="Email Address"
                type="email"
              />
            </CardContent>
            <Box sx={{ p: 2, display: 'flex', gap: 1, justifyContent: 'flex-end', borderTop: 1, borderColor: 'divider' }}>
              <Button variant="contained" color="primary" startIcon={<SendIcon />} onClick={handleSendTestEmail}>
                Send Email
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default EmailSettingsPageWrapper;
