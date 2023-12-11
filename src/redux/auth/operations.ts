import { createAsyncThunk } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import contactsServiceApi from 'service/contactsServiceApi';
import {
  IInitialState,
  IUser,
  ISignInRes,
  ICredentials,
  ICurrentUser,
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
      await contactsServiceApi.signOutUser();
      contactsServiceApi.token = initialState.auth.token;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const refreshUser = createAsyncThunk<
  ICurrentUser,
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
    try {
      contactsServiceApi.token = token;
      const response = await contactsServiceApi.refreshUser();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
