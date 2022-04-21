import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  characters: {
    info: {},
    results: []
  },
  state: 'idle'
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharactersList: (state, { payload: characters }) => {
      state.characters = characters;
    }
  }
});

export const {
  setCharactersList
} = charactersSlice.actions;

const selectCharacters = (state: RootState) => state.characters.characters;
export const selectCharactersInfo = (state: RootState) => selectCharacters(state).info;
export const selectCharactersList = (state: RootState) => selectCharacters(state).results;

export default charactersSlice.reducer;