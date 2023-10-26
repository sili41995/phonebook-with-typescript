import { createAsyncThunk } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import contactsServiceApi from 'service/contactsServiceApi';
import { ICredentials, IInitialState, IUser, UserWithToken } from 'types/types';
import { toasts } from 'utils';

export const registerUser = createAsyncThunk<
  UserWithToken,
  ICredentials,
  { rejectValue: string }
>('auth/registerUser', async (credentials, { rejectWithValue }) => {
  try {
    const response = await contactsServiceApi.registerUser(credentials);
    if (response.keyValue) {
      toasts.errorToast('This user is already registered');
      throw new Error('This user is already registered');
    }
    contactsServiceApi.token = response.token;
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});

export const loginUser = createAsyncThunk<
  UserWithToken,
  ICredentials,
  { rejectValue: string }
>('auth/loginUser', async (credentials, { rejectWithValue, signal }) => {
  try {
    const response = await contactsServiceApi.loginUser(credentials, signal);
    if (!response.token) {
      toasts.errorToast('Wrong username or password');
      throw new Error('Wrong username or password');
    }
    contactsServiceApi.token = response.token;
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});

export const logoutUser = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: string }
>('auth/logoutUser', async (_, { rejectWithValue }) => {
  try {
    const response = await contactsServiceApi.logoutUser();
    if (response.message) {
      toasts.errorToast(response.message);
      throw new Error(response.message);
    }
    contactsServiceApi.token = initialState.auth.token;
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});

export const refreshUser = createAsyncThunk<
  IUser,
  undefined,
  { rejectValue: string }
>('auth/refreshUser', async (_, { rejectWithValue, getState }) => {
  const state = getState() as IInitialState;
  const { token } = state.auth;
  if (!token) {
    return rejectWithValue('Unable to fetch user');
  }
  try {
    contactsServiceApi.token = token;
    const response = await contactsServiceApi.refreshUser();
    if (response.message) {
      throw new Error(response.message);
    }
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});
