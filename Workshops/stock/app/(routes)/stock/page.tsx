import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

type Props = {};

export default function Stock({}: Props) {
  // return <div style={{ marginTop: 20 }}>Stock</div>;
  return (
    <Box sx={{ mt: 1 }}>
      Stock
      {/* <img src="static\img\next_login.jpg" alt="" width={180} height={35} /> */}
      <Image
        src="/static/img/next_login.jpg"
        alt=""
        width={180}
        height={35}
        style={{ objectFit: 'contain' }}
      />
    </Box>
  ); // scal 1 = 8px
}
