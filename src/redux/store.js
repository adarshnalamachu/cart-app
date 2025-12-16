import { configureStore } from "@reduxjs/toolkit";
import cartReducer, {setCart} from "./slices/cartSlice";
import storage from "redux-persist/lib/storage"; // localStorage
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

// Persist config
const persistConfig = {
  key: "root",
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // REQUIRED for redux-persist
    }),
});

export const persistor = persistStore(store);

/* =====================================================
   Cross-tab synchronization (NO separate file)
   ===================================================== */
if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    try {
      // Listen only to redux-persist root updates
      if (e.key !== "persist:root" || !e.newValue) return;

      const rootState = JSON.parse(e.newValue);

      // redux-persist stores each slice as a string
      if (rootState?.cart) {
        const cartState = JSON.parse(rootState.cart);

        // Update cart in this tab
        store.dispatch(setCart(cartState));
      }
    } catch (err) {
      console.error("Cross-tab cart sync failed", err);
    }
  });
}

export default store;
