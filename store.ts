import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./itemsSlice";

const store = configureStore({
  reducer: {
    items: charactersReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;