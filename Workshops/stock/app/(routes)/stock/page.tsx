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
        // src="https://images.pexels.com/photos/17961718/pexels-photo-17961718.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
        src="https://www.codemobiles.com/biz/images/codemobiles_logo.svg?ref=10"
        alt=""
        width={400}
        height={250}
        style={{ objectFit: 'contain' }}
      />
    </Box>
  ); // scal 1 = 8px
}
