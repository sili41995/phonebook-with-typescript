import { createAsyncThunk } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import contactsServiceApi from 'service/contactsServiceApi';
import { ICredentials, IInitialState, IUser, IAuthResponse } from 'types/types';

export const registerUser = createAsyncThunk<
  IAuthResponse,
  ICredentials,
  { rejectValue: string }
>(
  'auth/registerUser',
  async (
    credentials: ICredentials,
    { rejectWithValue }: { rejectWithValue: Function }
  ) => {
    try {
      const response = await contactsServiceApi.registerUser(credentials);
      if (response.keyValue) {
        throw new Error('This user is already registered');
      }
      contactsServiceApi.token = response.token;
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk<
  IAuthResponse,
  ICredentials,
  { rejectValue: string }
>(
  'auth/loginUser',
  async (
    credentials: ICredentials,
    {
      rejectWithValue,
      signal,
    }: { rejectWithValue: Function; signal: AbortSignal }
  ) => {
    try {
      const response = await contactsServiceApi.loginUser(credentials, signal);
      if (!response.token) {
        throw new Error('Wrong username or password');
      }
      contactsServiceApi.token = response.token;
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const logoutUser = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: string }
>(
  'auth/logoutUser',
  async (_, { rejectWithValue }: { rejectWithValue: Function }) => {
    try {
      const response = await contactsServiceApi.logoutUser();
      if (response.message) {
        throw new Error(response.message);
      }
      contactsServiceApi.token = initialState.auth.token;
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const refreshUser = createAsyncThunk<
  IUser,
  undefined,
  { rejectValue: string }
>(
  'auth/refreshUser',
  async (
    _,
    {
      rejectWithValue,
      getState,
    }: { rejectWithValue: Function; getState: Function }
  ) => {
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
  }
);
