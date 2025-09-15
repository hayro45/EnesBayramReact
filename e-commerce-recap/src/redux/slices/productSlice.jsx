import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedProduct: {},
  loading: false
};

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await fetch(`${BASE_URL}/products`);
  return response.json();
});

export const getProductById = createAsyncThunk("getProductById", async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  return response.json();
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(getProductById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.selectedProduct = action.payload;
    });
    builder.addCase(getProductById.rejected, (state) => {
      state.loading = false;
    });
  }
});

export const {} = productSlice.actions;

export default productSlice.reducer;
