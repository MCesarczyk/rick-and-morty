import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  items: {
    info: {
      pages: 0,
      next: "",
      prev: ""
    },
    results: []
  },
  state: 'idle'
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItemsList: (state, { payload: items }) => {
      state.items = items;
    },
    clearItemsList: () => initialState,
    setItemsState: (state, { payload: newState }) => {
      state.state = newState;
    },
  }
});

export const {
  setItemsList,
  clearItemsList,
  setItemsState
} = itemsSlice.actions;

export const selectState = (state: RootState) => state.items.state;

const selectItems = (state: RootState) => state.items.items;
export const selectItemsList = (state: RootState) => selectItems(state)?.results;
export const selectItemsInfo = (state: RootState) => selectItems(state)?.info;
export const selectPagesNumber = (state: RootState) => selectItemsInfo(state).pages;
export const selectNextPage = (state: RootState) => selectItemsInfo(state).next;
export const selectPreviousPage = (state: RootState) => selectItemsInfo(state).prev;

export default itemsSlice.reducer;