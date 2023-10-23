import { IInitialState } from 'types/types';

export const selectToken = (state: IInitialState) => state.auth.token;

export const selectUser = (state: IInitialState) => state.auth.user;

export const selectIsLoggedIn = (state: IInitialState) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state: IInitialState) =>
  state.auth.isRefreshing;

export const selectIsLoading = (state: IInitialState) => state.auth.isLoading;
