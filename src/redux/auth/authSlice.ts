import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import { loginUser, logoutUser, refreshUser, registerUser } from './operations';
import { IAuthInitialState, UserWithToken, IUser } from 'types/types';

const authState: IAuthInitialState = initialState.auth;

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        registerUser.fulfilled,
        (state, { payload }: PayloadAction<UserWithToken>) => ({
          ...state,
          isLoading: false,
          user: { ...payload.user },
          token: payload.token,
          isLoggedIn: true,
        })
      )
      .addCase(
        loginUser.fulfilled,
        (state, { payload }: PayloadAction<UserWithToken>) => ({
          ...state,
          isLoading: false,
          user: { ...payload.user },
          token: payload.token,
          isLoggedIn: true,
        })
      )
      .addCase(logoutUser.fulfilled, () => ({
        ...initialState.auth,
      }))
      .addCase(refreshUser.pending, (state) => ({
        ...state,
        isLoading: true,
        isRefreshing: true,
      }))
      .addCase(
        refreshUser.fulfilled,
        (state, { payload }: PayloadAction<IUser>) => ({
          ...state,
          isLoading: false,
          user: { name: payload.name, email: payload.email },
          isLoggedIn: true,
          isRefreshing: false,
        })
      )
      .addCase(refreshUser.rejected, (state) => ({
        ...state,
        isLoading: false,
        isRefreshing: false,
      }))
      .addMatcher(
        isAnyOf(registerUser.pending, loginUser.pending, logoutUser.pending),
        (state) => ({ ...state, isLoading: true })
      )
      .addMatcher(
        isAnyOf(registerUser.rejected, loginUser.rejected, logoutUser.rejected),
        (state) => ({
          ...state,
          isLoading: false,
        })
      );
  },
});

export default authSlice.reducer;
