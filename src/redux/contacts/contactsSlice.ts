import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from './operations';
import { logoutUser } from 'redux/auth/operations';
import { IContactsInitialState } from 'types/types';

const contactsState: IContactsInitialState = initialState.contacts;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        isLoaded: true,
        error: initialState.contacts.error,
        items: payload,
      }))
      .addCase(addContact.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: [...state.items, payload],
      }))
      .addCase(deleteContact.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: state.items.filter(({ id }) => id !== payload.id),
      }))
      .addCase(updateContact.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: [...state.items.filter(({ id }) => id !== payload.id), payload],
      }))
      .addCase(logoutUser.fulfilled, (state) => ({
        ...state,
        ...initialState.contacts,
      }))
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          updateContact.pending
        ),
        (state) => ({
          ...state,
          isLoading: true,
        })
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          updateContact.rejected
        ),
        (state, { payload }) => ({
          ...state,
          isLoading: false,
          error: payload as string,
        })
      );
  },
});

export default contactsSlice.reducer;
