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
    },
    setCharactersState: (state, { payload: newState }) => {
      state.state = newState;
    },
  }
});

export const {
  setCharactersList,
  setCharactersState
} = charactersSlice.actions;

export const selectState = (state: RootState) => state.characters.state;

const selectCharacters = (state: RootState) => state.characters.characters;
export const selectCharactersInfo = (state: RootState) => selectCharacters(state).info;
export const selectCharactersList = (state: RootState) => selectCharacters(state).results;

export default charactersSlice.reducer;