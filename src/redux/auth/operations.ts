import { createAsyncThunk } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import contactsServiceApi from 'service/contactsServiceApi';
import { ICredentials } from 'types/types';
import { toasts } from 'utils';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (credentials: ICredentials, { rejectWithValue }) => {
    try {
      const response = await contactsServiceApi.registerUser(credentials);
      if (response.keyValue) {
        toasts.errorToast('This user is already registered');
        throw new Error();
      }
      contactsServiceApi.token = response.token;
      return response;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials: ICredentials, { rejectWithValue, signal }) => {
    try {
      const response = await contactsServiceApi.loginUser(credentials, signal);
      if (!response.token) {
        toasts.errorToast('Wrong username or password');
        throw new Error();
      }
      contactsServiceApi.token = response.token;
      return response;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await contactsServiceApi.logoutUser();
      if (response.message) {
        toasts.errorToast(response.message);
        throw new Error();
      }
      contactsServiceApi.token = initialState.auth.token;
      return response;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const { token } = state.auth;
    if (!token) {
      return rejectWithValue('Unable to fetch user');
    }
    try {
      contactsServiceApi.token = token;
      const response = await contactsServiceApi.refreshUser();
      if (response.message) {
        throw new Error();
      }
      return response;
    } catch (error) {
      return rejectWithValue();
    }
  }
);
