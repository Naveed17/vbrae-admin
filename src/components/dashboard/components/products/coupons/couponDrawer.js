'use client';

import {
  Drawer,
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Divider,
  InputAdornment,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Close, ExpandMore } from '@mui/icons-material';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';

const categories = [
  { id: '134', name: 'XBOX', products: ['Xbox Series X', 'Xbox Series S', 'Xbox One'] },
  { id: '135', name: 'PSN', products: ['PS5', 'PS4', 'PS Plus'] },
  { id: '139', name: 'GIFT CARDS', products: ['Amazon Gift Card', 'Steam Gift Card', 'Google Play'] },
  { id: '146', name: 'NINTENDO', products: ['Nintendo Switch', 'Switch OLED', 'Switch Lite'] },
  { id: '158', name: 'PC GAMING', products: ['Steam', 'Epic Games', 'GOG'] },
  { id: '168', name: 'SOFTWARE', products: ['Windows', 'Office 365', 'Antivirus'] },
  { id: '169', name: 'WEEKLY DEALS', products: ['Deal 1', 'Deal 2', 'Deal 3'] },
  { id: '175', name: 'VR GAMES', products: ['Meta Quest', 'PlayStation VR', 'HTC Vive'] }
];

export default function CouponDrawer({ open, onClose, isEdit = false, data = null }) {
  const [formData, setFormData] = useState({
    code: '',
    discount_rate: '',
    number_of_coupons: '',
    minimum_order_amount: '',
    usage_type: 'single',
    expiry_date: '',
    selected_categories: [],
    selected_products: []
  });

  useEffect(() => {
    if (open) {
      if (isEdit && data) {
        setFormData({
          code: data.code || '',
          discount_rate: data.discount_rate?.replace('%', '') || '',
          number_of_coupons: data.number_of_coupons?.split(' ')[0] || '',
          minimum_order_amount: data.minimum_order_amount || '',
          usage_type: data.usage_type || 'single',
          expiry_date: data.expiry_date || '',
          selected_categories: data.selected_categories || [],
          selected_products: data.selected_products || []
        });
      } else {
        setFormData({
          code: '',
          discount_rate: '',
          number_of_coupons: '',
          minimum_order_amount: '',
          usage_type: 'single',
          expiry_date: '',
          selected_categories: [],
          selected_products: []
        });
      }
    }
  }, [isEdit, data, open]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateCode = () => {
    const code = Math.random().toString(36).substr(2, 8).toUpperCase();
    setFormData(prev => ({ ...prev, code }));
  };

  const handleCategoryChange = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    const isChecked = formData.selected_categories.includes(categoryId);
    
    setFormData(prev => {
      const newCategories = isChecked
        ? prev.selected_categories.filter(id => id !== categoryId)
        : [...prev.selected_categories, categoryId];
      
      const newProducts = isChecked
        ? prev.selected_products.filter(p => !category.products.includes(p))
        : [...prev.selected_products, ...category.products.filter(p => !prev.selected_products.includes(p))];
      
      return {
        ...prev,
        selected_categories: newCategories,
        selected_products: newProducts
      };
    });
  };

  const handleProductChange = (product) => {
    setFormData(prev => {
      const newProducts = prev.selected_products.includes(product)
        ? prev.selected_products.filter(p => p !== product)
        : [...prev.selected_products, product];
      
      const newCategories = [...prev.selected_categories];
      categories.forEach(category => {
        const allProductsSelected = category.products.every(p => newProducts.includes(p));
        
        if (allProductsSelected && !newCategories.includes(category.id)) {
          newCategories.push(category.id);
        } else if (!allProductsSelected && newCategories.includes(category.id)) {
          newCategories.splice(newCategories.indexOf(category.id), 1);
        }
      });
      
      return {
        ...prev,
        selected_products: newProducts,
        selected_categories: newCategories
      };
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    onClose();
  };

  const title = isEdit ? 'Edit Coupon' : 'Add Coupon';

  return (
    <Drawer anchor="right" open={open} onClose={onClose} sx={{ '& .MuiDrawer-paper': { width: { xs: '100%', sm: 550 } } }}>
      <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          <Button size="small" onClick={onClose} sx={{ minWidth: 'auto', p: 0.5 }}>
            <Close />
          </Button>
        </Stack>

        <Divider sx={{ mb: 3 }} />

        <Box sx={{ flex: 1, overflowY: 'auto', pr: 1 }}>
          <Stack spacing={2.5}>
            {/* Coupon Code */}
            <Box>
              <Stack direction="row" spacing={1}>
                <TextField
                  size="normal"
                  placeholder="E.g: SAVE20"
                  value={formData.code}
                  onChange={(e) => handleInputChange('code', e.target.value)}
                  required
                  fullWidth
                  inputProps={{ maxLength: 49 }}
                  helperText="No special characters"
                />
                <Button
                  variant="outlined"
                  onClick={generateCode}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  Generate
                </Button>
              </Stack>
            </Box>

            {/* Discount Rate */}
            <TextField
              size="normal"
              type="number"
              placeholder="Discount Rate (E.g: 5)"
              value={formData.discount_rate}
              onChange={(e) => handleInputChange('discount_rate', e.target.value)}
              inputProps={{ min: 0, max: 99 }}
              InputProps={{ endAdornment: <InputAdornment position="end">%</InputAdornment> }}
              required
              fullWidth
            />

            {/* Number of Coupons */}
            <TextField
              size="normal"
              type="number"
              placeholder="Number of Coupons (E.g: 10)"
              value={formData.number_of_coupons}
              onChange={(e) => handleInputChange('number_of_coupons', e.target.value)}
              inputProps={{ min: 1, max: 99999999 }}
              helperText="How many times a coupon can be used"
              required
              fullWidth
            />

            {/* Minimum Order Amount */}
            <TextField
              size="normal"
              type="number"
              placeholder="Minimum Order Amount (0.00)"
              value={formData.minimum_order_amount}
              onChange={(e) => handleInputChange('minimum_order_amount', e.target.value)}
              InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
              fullWidth
              helperText="Minimum cart total needed"
            />

            {/* Usage Type */}
            <FormControl fullWidth>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Coupon Usage Type
              </Typography>
              <RadioGroup
                value={formData.usage_type}
                onChange={(e) => handleInputChange('usage_type', e.target.value)}
              >
                <FormControlLabel
                  value="single"
                  control={<Radio />}
                  label="Each user can use it for only one order"
                />
                <FormControlLabel
                  value="multiple"
                  control={<Radio />}
                  label="Each user can use it for multiple orders (Guests can use)"
                />
              </RadioGroup>
            </FormControl>

            {/* Expiry Date */}
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>Expiry Date</Typography>
              <DateTimePicker
                slotProps={{
                  textField: {
                    fullWidth: true,
                    size: 'normal'
                  }
                }}
                value={formData.expiry_date ? dayjs(formData.expiry_date) : null}
                onChange={(date) => handleInputChange('expiry_date', date ? date.format('YYYY-MM-DD HH:mm') : '')}
              />
            </Box>

            {/* Categories Selection */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600 }}>
                Categories
              </Typography>
              <Stack spacing={1}>
                {categories.map((category) => (
                  <Accordion key={category.id} size="small">
                    <AccordionSummary expandIcon={<ExpandMore />} sx={{ '& .MuiAccordionSummary-content': { m: 0, alignItems: 'center' } }}>
                      <Checkbox
                        size="small"
                        checked={formData.selected_categories.includes(category.id)}
                        onChange={() => handleCategoryChange(category.id)}
                        onClick={(e) => e.stopPropagation()}
                        sx={{ mr: 1 }}
                      />
                      <Typography>{category.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack spacing={1}>
                        {category.products.map((product) => (
                          <FormControlLabel
                            key={product}
                            control={
                              <Checkbox
                                size="small"
                                checked={formData.selected_products.includes(product)}
                                onChange={() => handleProductChange(product)}
                              />
                            }
                            label={product}
                          />
                        ))}
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Stack direction="row" spacing={1.5} justifyContent="flex-end">
          <Button variant="outlined" size="small" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" size="small" onClick={handleSubmit}>
            {isEdit ? 'Update' : 'Save'}
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}
