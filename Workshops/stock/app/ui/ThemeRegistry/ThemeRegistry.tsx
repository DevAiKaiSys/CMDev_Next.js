'use client';

import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function ThemeRegistry({ children }: Props) {
  const theme = createTheme({ spacing: 1 });

  return (
    <div>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  );
}
