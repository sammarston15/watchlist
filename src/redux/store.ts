import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import movieReducer from "./movies/reducer";

// when adding a new reducer, make sure to add it here
export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types