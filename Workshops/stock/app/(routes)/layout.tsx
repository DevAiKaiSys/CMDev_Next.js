'use client';

import { Box } from '@mui/material';
import React, { Suspense } from 'react';
import Header from '../ui/layout/Header';
import Sidebar from '../ui/layout/SideBar';
import DrawerHeader from '../ui/layout/DrawerHeader';

type Props = { children: React.ReactNode };

export default function DefaultLayout({ children }: Props) {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <DrawerHeader />
        {/* <Suspense fallback={<span>1234</span>}>{children}</Suspense> */}
        {children}
      </Box>
    </Box>
  );
}
