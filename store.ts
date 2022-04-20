import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./pages/charactersSlice";

const store = configureStore({
  reducer: {
    characters: charactersReducer
  }
});

export default store;