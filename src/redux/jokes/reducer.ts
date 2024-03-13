import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

type ChuckReducerState = {
  joke: string;
  isPending: boolean;
};

// Etat par défaut du reducer 'chuck'
const initialState: ChuckReducerState = {
  joke: 'Cliquez sur le bouton pour démarrer !',
  isPending: false,
};

const chuckReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.fetchNewJokeAction.fulfilled, (state, action) => {
      state.isPending = false;
      state.joke = action.payload.value;
    })
    .addCase(actions.fetchNewJokeAction.rejected, (state, action) => {
      state.isPending = false;
      console.error(action.payload);
    })
    .addCase(actions.enablePendingAction, (state) => {
      state.isPending = true;
    })
    // INUTILE
    .addCase(actions.disablePendingAction, (state) => {
      state.isPending = false;
    });
});

export default chuckReducer;
