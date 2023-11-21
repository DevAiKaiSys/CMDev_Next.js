'use client';

import {
  TextField,
  InputAdornment,
  Alert,
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import router from 'next/router';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/store/store';
import { add, signUp, userSelector } from '@/store/slices/userSlice';

interface User {
  username: string;
  password: string;
}

type Props = {};

export default function Register({}: Props) {
  // const [user, setUser] = useState<User>({ username: '', password: '' });
  const initialValue: User = { username: 'admin', password: '' };
  const formValidateSchema = Yup.object().shape({
    username: Yup.string().required('Username is required').trim(),
    password: Yup.string().required('Password is required').trim(),
  });
  const router = useRouter();
  // const reducer = useSelector((state: any) => state.userReducer);
  // const reducer = useSelector((state: RootState) => state.userReducer);
  const reducer = useSelector(userSelector);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: initialValue,
    resolver: yupResolver(formValidateSchema),
  });

  const showForm = () => {
    return (
      <form
        // onSubmit={() => {
        //   alert(JSON.stringify(user));
        // }}
        onSubmit={handleSubmit(async (value: User) => {
          // alert(JSON.stringify(value));
          const result = await dispatch(signUp(value));
          if (signUp.fulfilled.match(result)) {
            alert('Register successfully');
          } else if (signUp.rejected.match(result)) {
            alert('Register failed');
          }
        })}
      >
        {/* Username */}
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField
              // onChange={(e) =>
              //   // setUser({ username: e.target.value, password: user.password })
              //   setUser({ ...user, username: e.target.value })
              // }
              {...field}
              error={(errors.username?.message ?? '') != ''}
              helperText={errors.username?.message?.toString()}
              variant="outlined"
              margin="normal"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              label="Username"
              autoComplete="email"
              autoFocus
            />
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              // onChange={(e) => setUser({ ...user, password: e.target.value })}
              {...field}
              error={(errors.password?.message ?? '') != ''}
              helperText={errors.password?.message?.toString()}
              variant="outlined"
              margin="normal"
              type="password"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordIcon />
                  </InputAdornment>
                ),
              }}
              label="Password"
              autoComplete="password"
              autoFocus
            />
          )}
        />

        {/* {reducer.status == 'failed' && (
          <Alert severity="error">Register failed</Alert>
        )} */}

        <Button
          className="mt-8"
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          // disabled={reducer.status == 'fetching'}
        >
          Create
        </Button>

        <Button
          className="mt-4"
          onClick={() => {
            dispatch(add());
            router.push('/login');
          }}
          type="button"
          fullWidth
          variant="outlined"
        >
          Cancel
        </Button>
      </form>
    );
  };

  return (
    <Box className="flex justify-center items-center">
      <Card className="max-w-[345px] mt-[100px]">
        {/* <CardMedia
          sx={{ height: 200 }}
          image="/static/img/next_register.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Register ({reducer.count})
          </Typography>
          {showForm()}
        </CardContent>
      </Card>
      <style jsx global>
        {`
          body {
            min-height: 100vh;
            position: relative;
            margin: 0;
            background-size: cover;
            background-image: url('/static/img/bg4.jpg');
            text-align: center;
          }
        `}
      </style>
    </Box>
  );
}
