'use client';

import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider as Provider } from '@mui/x-date-pickers/LocalizationProvider';
import 'dayjs/locale/en-gb';

export function LocalizationProvider({ children }) {
  return <Provider dateAdapter={AdapterDayjs} adapterLocale="en-gb">{children}</Provider>;
}
