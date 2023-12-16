import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import {
  refreshUser,
  signInUser,
  signOutUser,
  signUpUser,
  updateUserAvatar,
} from './operations';
import { IAuthState } from 'types/types';

const authState: IAuthState = initialState.auth;

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.fulfilled, (state, { payload }) => ({
        ...initialState.auth,
      }))
      .addCase(signInUser.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        user: { ...payload.user },
        token: payload.token,
        isLoggedIn: true,
      }))
      .addCase(signOutUser.fulfilled, (state) => ({
        ...initialState.auth,
        user: {
          ...state.user,
          email: initialState.auth.user.email,
        },
      }))
      .addCase(refreshUser.pending, (state) => ({
        ...state,
        isLoading: true,
        isRefreshing: true,
      }))
      .addCase(refreshUser.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        user: {
          name: payload.name,
          email: payload.email,
          avatar: payload.avatar,
        },
        isLoggedIn: true,
        isRefreshing: false,
      }))
      .addCase(updateUserAvatar.fulfilled, (state, { payload }) => ({
        ...state,
        user: {
          ...state.user,
          avatar: payload.avatar as string,
        },
      }))
      .addCase(refreshUser.rejected, (state) => ({
        ...state,
        isLoading: false,
        isRefreshing: false,
      }))
      .addMatcher(
        isAnyOf(
          signUpUser.pending,
          signInUser.pending,
          signOutUser.pending,
          updateUserAvatar.pending
        ),
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
          refreshUser.rejected,
          updateUserAvatar.rejected
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
