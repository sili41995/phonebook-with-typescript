import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import { refreshUser, signInUser, signOutUser, signUpUser } from './operations';
import { IAuthInitialState } from 'types/types';

const authState: IAuthInitialState = initialState.auth;

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(signInUser.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        user: { ...payload.user },
        token: payload.token,
        isLoggedIn: true,
      }))
      .addCase(signOutUser.fulfilled, () => ({
        ...initialState.auth,
      }))
      .addCase(refreshUser.pending, (state) => ({
        ...state,
        isLoading: true,
        isRefreshing: true,
      }))
      .addCase(refreshUser.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        user: { ...payload },
        isLoggedIn: true,
        isRefreshing: false,
      }))
      .addCase(refreshUser.rejected, (state) => ({
        ...state,
        isLoading: false,
        isRefreshing: false,
      }))
      .addMatcher(
        isAnyOf(signUpUser.pending, signInUser.pending, signOutUser.pending),
        (state) => ({
          ...state,
          isLoading: true,
          error: null,
        })
      )
      .addMatcher(
        isAnyOf(
          signUpUser.rejected,
          signInUser.rejected,
          signOutUser.rejected,
          refreshUser.rejected
        ),
        (state, { payload }) => ({
          ...state,
          isLoading: false,
          error: payload as string,
        })
      );
  },
});

export default authSlice.reducer;
