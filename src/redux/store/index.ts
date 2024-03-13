import { configureStore } from '@reduxjs/toolkit';
import jokes from '../jokes';

const store = configureStore({
  reducer: {
    jokes: jokes.reducer,
  },
  devTools: true, //
});

// --- Type pour utiliser sur le store lorsqu'il est récupéré par useSelector
export type RootState = ReturnType<typeof store.getState>;

// --- Type à utiliser sur dispatch lorsque l'on utilise useDispatch
export type AppDispatch = typeof store.dispatch;

export default store;
