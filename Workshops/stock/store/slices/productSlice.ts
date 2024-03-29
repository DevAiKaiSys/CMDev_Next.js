import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState, store, useAppDispatch } from '../store';
import { ProductData } from '@/models/product.model';
import * as serverService from '@/services/serverService';

interface ProductState {
  products: ProductData[];
}

const initialState: ProductState = {
  products: [],
};

// export const getProducts = async (keyword?: string) => {
//   const response = await serverService.getProducts(keyword);
//   return response;
// };
export const getProducts = createAsyncThunk(
  'product/getProduct',
  async (keyword?: string | undefined) => {
    const response = await serverService.getProducts(keyword);
    // console.log(response);
    return response;
  }
);

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (values: ProductData) => {
    let data = new FormData();
    data.append('name', values.name);
    data.append('price', String(values.price));
    data.append('stock', String(values.stock));
    if (values.file) {
      data.append('image', values.file);
    }
    const response = await serverService.addProduct(data);
    return response;
  }
);

export const deleteProduct = createAsyncThunk(
  'product/delete',
  async (id: string) => {
    await serverService.deleteProduct(id);
    // state.dispatch(getProducts());
    // store.dispatch(getProducts());
  }
);

export const editProduct = createAsyncThunk(
  'product/addProduct',
  async (values: ProductData) => {
    let data = new FormData();
    data.append('id', String(values.id));
    data.append('name', values.name);
    data.append('price', String(values.price));
    data.append('stock', String(values.stock));

    if (values.file) {
      data.append('image', values.file);
    }
    const response = serverService.editProduct(data);
    return response;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
export const productSelector = (state: RootState) => state.productReducer;
