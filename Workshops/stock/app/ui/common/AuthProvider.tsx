'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    // initialize();  // two time
    return () => {
      initialize(); // one time
    };
  }, []);

  const initialize = () => {
    if (path == '/') {
      // error ReferenceError: location is not defined
      router.push('/stock');
    }
  };

  return <div>{children}</div>;
}
