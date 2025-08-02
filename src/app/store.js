import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../features/userSlice/userSlice";
import { blogApi } from "../features/blogSlice/blogSlice";
import userReducer from "../features/authSlice/userSlice";
import { authApi } from "../features/authSlice/authSlice";
import { persistReducer, persistStore } from "redux-persist";
import cartReducer from "../features/cartSlice/cartSlice";
import { productApi } from "../features/product/productSlice";
import { customerApi } from "../features/customerSlice/customerSlice";
import { orderApi } from "../features/orderSlice/orderSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart"],
};

const persistedUserReducer = persistReducer(
  { ...persistConfig, key: "user", whitelist: ["user"] },
  userReducer
);
const persistedCartReducer = persistReducer(
  { ...persistConfig, key: "cart", whitelist: ["cart"] },
  cartReducer
);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    cart: persistedCartReducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [customerApi.reducerPath]: customerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      blogApi.middleware,
      authApi.middleware,
      userApi.middleware,
      orderApi.middleware,
      productApi.middleware,
      customerApi.middleware
    ),
});

export const persistor = persistStore(store);
