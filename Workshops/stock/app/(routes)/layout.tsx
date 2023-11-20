import { Box } from '@mui/material';
import React from 'react';

type Props = { children: React.ReactNode };

export default function DefaultLayout({ children }: Props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
