import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exist = state.cart.find((i) => i.id === item.id);
      if (exist) {
        state.cart = state.cart.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        state.cart.push(item);
      }
    },
    setCartCount: (state, action) => {
      const { id, quantity } = action.payload;
      state.cart = state.cart.map((i) =>
        i.id === id ? { ...i, quantity } : i
      );
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((i) => i.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, setCartCount, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
