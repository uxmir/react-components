import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "./Thunk";
interface ratings {
  rate: number;
  count: number;
}
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: ratings[];
}

interface ProductState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
};

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fullfiled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.loading = false;
        state.error = "something went wron in data fetching";
      });
  },
});

export default ProductSlice.reducer;
