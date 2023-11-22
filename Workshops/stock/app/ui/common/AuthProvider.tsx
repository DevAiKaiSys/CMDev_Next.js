'use client';

import { getSession, userSelector } from '@/store/slices/userSlice';
import { store } from '@/store/store';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  // const path = usePathname();
  // const router = useRouter();

  // useEffect(() => {
  //   // initialize();  // two time
  //   return () => {
  //     initialize(); // one time
  //   };
  // }, []);

  // const initialize = () => {
  //   if (path == '/') {
  //     // error ReferenceError: location is not defined
  //     router.push('/stock');
  //   }
  // };

  useEffect(() => {
    return () => {
      store.dispatch(getSession());
    };
  }, []);

  const path = usePathname();
  const router = useRouter();
  // const isAuthenticated = useSelector(isAuthenticatedSelector);
  // const isAuthenticating = useSelector(isAuthenticatingSelector);
  const userReducer = useSelector(userSelector);

  // is fetching session (eg. show spinnner)
  // if (isAuthenticating) {
  if (userReducer.isAuthenticating) {
    return null;
  }
  // If user is not logged in, return login component
  if (path !== '/login' && path !== '/register') {
    // if (!isAuthenticated) {
    if (!userReducer.isAuthenticated) {
      router.push('/login');
      return null;
    } else if (path == '/') {
      router.push('/stock'); // default page after login when call root path
      return null;
    }
  } else {
    // if (isAuthenticated) {
    if (userReducer.isAuthenticated) {
      router.push('/stock'); // default page after login
      return null;
    }
  }
  return <div>{children}</div>;
}
