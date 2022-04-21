import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  items: {
    info: {},
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
    setItemsState: (state, { payload: newState }) => {
      state.state = newState;
    },
  }
});

export const {
  setItemsList,
  setItemsState
} = itemsSlice.actions;

export const selectState = (state: RootState) => state.items.state;

const selectItems = (state: RootState) => state.items.items;
export const selectItemsInfo = (state: RootState) => selectItems(state).info;
export const selectItemsList = (state: RootState) => selectItems(state).results;

export default itemsSlice.reducer;