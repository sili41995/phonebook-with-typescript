import { createAsyncThunk } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import contactsServiceApi from 'service/contactsServiceApi';
import {
  IInitialState,
  IUser,
  ISignUpCredentials,
  ISignInRes,
  ICredentials,
} from 'types/types';

export const signUpUser = createAsyncThunk<
  IUser,
  FormData,
  { rejectValue: string }
>(
  'auth/signUpUser',
  async (
    credentials: FormData,
    { rejectWithValue }: { rejectWithValue: Function }
  ) => {
    try {
      const response = await contactsServiceApi.signUpUser(credentials);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const signInUser = createAsyncThunk<
  ISignInRes,
  ICredentials,
  { rejectValue: string }
>(
  'auth/signInUser',
  async (
    credentials: ICredentials,
    {
      rejectWithValue,
      signal,
    }: { rejectWithValue: Function; signal: AbortSignal }
  ) => {
    try {
      const response = await contactsServiceApi.signInUser(credentials, signal);
      if (response instanceof Error) {
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

export const signOutUser = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: string }
>(
  'auth/signOutUser',
  async (_, { rejectWithValue }: { rejectWithValue: Function }) => {
    try {
      const response = await contactsServiceApi.signOutUser();
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
      if (response instanceof Error) {
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
