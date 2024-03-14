import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface Product {
  id: number;
  name: string;
  amount: string;
}

export interface ShoppingList {
  products: Product[];
}

const initialState: ShoppingList = {
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, { payload: { id } }) => {
      state.products = state.products.filter(product => product.id !== id)
    },
    editProduct: (state, { payload: { editedProduct } }) => {
      state.products = state.products.map(product => product.id === editedProduct.id ? editedProduct : product);
    },
    addProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function.
export const { addProduct, editProduct, deleteProduct, addProducts } =
  productSlice.actions


export default productSlice.reducer;


