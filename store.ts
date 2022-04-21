import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./pages/charactersSlice";

const store = configureStore({
  reducer: {
    characters: charactersReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;