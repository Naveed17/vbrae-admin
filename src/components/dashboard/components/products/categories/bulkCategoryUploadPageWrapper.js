'use client';

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert,
  Divider
} from '@mui/material';
import { CloudUpload, Download, Help, CheckCircle } from '@mui/icons-material';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function BulkCategoryUploadPageWrapper() {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles && droppedFiles[0]) {
      const droppedFile = droppedFiles[0];
      if (droppedFile.type === 'text/csv' || droppedFile.name.endsWith('.csv')) {
        setFile(droppedFile);
      } else {
        alert('Please upload a CSV file');
      }
    }
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file');
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/categories/bulk-upload', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        setUploadedFiles([...uploadedFiles, { name: file.name, status: 'completed' }]);
        setFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        alert(data.message || 'Upload failed');
      }
    } catch (error) {
      alert('Error uploading file: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setUploadedFiles([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDownloadTemplate = async () => {
    try {
      const response = await fetch('/api/categories/download-template', {
        method: 'GET'
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'category_template.csv';
      a.click();
    } catch (error) {
      alert('Error downloading template: ' + error.message);
    }
  };

  const handleDownloadExample = async () => {
    try {
      const response = await fetch('/api/categories/download-example', {
        method: 'GET'
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'category_example.csv';
      a.click();
    } catch (error) {
      alert('Error downloading example: ' + error.message);
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1400, mx: 'auto' }}>
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Box>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 1 }}>
            Bulk Category Upload
          </Typography>
          <Typography variant="body2" color="text.secondary">
            You can add your categories with a CSV file from this section
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<CloudUpload />}
          onClick={() => router.push('/admin/categories')}
          sx={{ borderRadius: 2 }}
        >
          Categories
        </Button>
      </Stack>

      <Grid container spacing={3}>
        {/* Upload Section */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 500 }}>
                CSV File Upload
              </Typography>

              {/* Drag and Drop Zone */}
              <Box
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                sx={{
                  border: '2px dashed',
                  borderColor: dragActive ? 'primary.main' : 'divider',
                  borderRadius: 2,
                  p: 4,
                  textAlign: 'center',
                  backgroundColor: dragActive ? 'action.hover' : 'background.paper',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <CloudUpload sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Drag and drop file here or
                </Typography>
                <Button
                  variant="outlined"
                  onClick={handleBrowseClick}
                  sx={{ mb: 2, borderRadius: 1 }}
                >
                  Browse Files
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".csv"
                  onChange={handleFileSelect}
                  style={{ display: 'none' }}
                />
              </Box>

              {/* Selected File Display */}
              {file && (
                <Box sx={{ mt: 3 }}>
                  <Alert severity="info" sx={{ mb: 2 }}>
                    Selected file: <strong>{file.name}</strong>
                  </Alert>
                </Box>
              )}

              {/* Processing Spinner */}
              {isLoading && (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 3 }}>
                  <CircularProgress sx={{ mr: 2 }} />
                  <Typography>Processing...</Typography>
                </Box>
              )}

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <Box sx={{ mt: 3 }}>
                  <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 500 }}>
                    Uploaded Files
                  </Typography>
                  <List>
                    {uploadedFiles.map((uploadedFile, index) => (
                      <ListItem key={index} sx={{ py: 1 }}>
                        <CheckCircle sx={{ mr: 2, color: 'success.main' }} />
                        <ListItemText
                          primary={uploadedFile.name}
                          secondary={uploadedFile.status === 'completed' ? 'Completed' : 'Processing'}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}

              {/* Action Buttons */}
              <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  onClick={handleUpload}
                  disabled={!file || isLoading}
                  sx={{ borderRadius: 1 }}
                >
                  Upload
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleReset}
                  disabled={isLoading}
                  sx={{ borderRadius: 1 }}
                >
                  Reset
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Help Section */}
        <Grid item size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: 1 }}>
            <CardContent sx={{ p: 4 }}>
              <Stack direction="row" alignItems="center" sx={{ mb: 3 }}>
                <Help sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  Help Documents
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                You can use these documents to generate your CSV file
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Stack spacing={2}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Download />}
                  onClick={handleDownloadTemplate}
                  sx={{ borderRadius: 1, justifyContent: 'flex-start' }}
                >
                  Download CSV Template
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Download />}
                  onClick={handleDownloadExample}
                  sx={{ borderRadius: 1, justifyContent: 'flex-start' }}
                >
                  Download CSV Example
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Help />}
                  sx={{ borderRadius: 1, justifyContent: 'flex-start' }}
                >
                  Documentation
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
