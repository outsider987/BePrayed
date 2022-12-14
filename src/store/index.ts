import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './global';
import authReducer from './auth';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const selectGlobal = (state: RootState) => state.global;
export const selectAuth = (state: RootState) => state.auth;
