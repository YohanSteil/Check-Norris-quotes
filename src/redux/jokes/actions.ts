import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNewJokeAction = createAsyncThunk(
  'chuckNorris/FETCH_JOKE_SUCCESS',
  async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');

    const parsedResponse = await response.json();

    return parsedResponse;
  }
);

export const enablePendingAction = createAction('chuck/ENABLE_PENDING');
export const disablePendingAction = createAction(
  'chuck/DISABLE_PENDING_ACTION'
);

export default {
  fetchNewJokeAction,
  enablePendingAction,
  disablePendingAction,
};
