import { IState } from 'types/types';

export const selectToken = (state: IState) => state.auth.token;

export const selectUser = (state: IState) => state.auth.user;

export const selectIsLoggedIn = (state: IState) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state: IState) => state.auth.isRefreshing;

export const selectIsLoading = (state: IState) => state.auth.isLoading;
