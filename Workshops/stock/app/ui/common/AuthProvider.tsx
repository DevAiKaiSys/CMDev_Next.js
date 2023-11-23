'use client';

import { getSession } from '@/store/slices/userSlice';
import { store } from '@/store/store';
import React, { useEffect } from 'react';

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

  // const path = usePathname();
  // const router = useRouter();
  // // const isAuthenticated = useSelector(isAuthenticatedSelector);
  // // const isAuthenticating = useSelector(isAuthenticatingSelector);
  // const userReducer = useSelector(userSelector);

  // // is fetching session (eg. show spinnner)
  // // if (isAuthenticating) {
  // if (userReducer.isAuthenticating) {
  //   return <Loading />;
  // }
  // // If user is not logged in, return login component
  // if (path !== '/login' && path !== '/register') {
  //   // if (!isAuthenticated) {
  //   if (!userReducer.isAuthenticated) {
  //     router.push('/login');
  //     return <Loading />;
  //   } else if (path == '/') {
  //     router.push('/stock'); // default page after login when call root path
  //     return <Loading />;
  //   }
  // } else {
  //   // if (isAuthenticated) {
  //   if (userReducer.isAuthenticated) {
  //     router.push('/stock'); // default page after login
  //     return <Loading />;
  //   }
  // }
  return <div>{children}</div>;
}
