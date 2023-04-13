import { configureStore } from "@reduxjs/toolkit";
import { lanchesSlice } from "./lanches";

export const store = configureStore({
  reducer: {
    lanches: lanchesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
