import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  state: 'idle'
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    fetchCharactersList: () => { },
    setCharactersList: (state, { payload: characters }) => {
      state.characters = characters;
    }
  }
});

export default charactersSlice.reducer;