import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import * as serverService from '@/services/serverService';

interface SignAction {
  username: string;
  password: string;
}

// const register = async (credential: SignAction) => {
//   const response = await serverService.signUp(credential);
//   return response;
// };
export const signUp = createAsyncThunk(
  'user/signup',
  async (credential: SignAction) => {
    const response = await serverService.signUp(credential);
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: { count: 10 },
  reducers: {
    add: (state) => {
      state.count++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.count++;
    });
  },
});

export default userSlice.reducer;
export const { add } = userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
