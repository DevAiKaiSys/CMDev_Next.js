'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const router = useRouter();
  router.push('/stock');
  return null;

  //   return <div>{children}</div>;
}
