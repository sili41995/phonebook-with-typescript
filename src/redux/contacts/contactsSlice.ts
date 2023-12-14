import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
  updateContactStatus,
} from './operations';
import { signOutUser } from 'redux/auth/operations';
import { IContactsState } from 'types/types';

const contactsState: IContactsState = initialState.contacts;

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
        items: payload.contacts,
        count: payload.count,
      }))
      .addCase(addContact.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: [...state.items, payload],
        count: (state.count as number) + 1,
      }))
      .addCase(deleteContact.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: state.items.filter(({ _id }) => _id !== payload._id),
        count: (state.count as number) - 1,
      }))
      .addCase(updateContact.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: [
          ...state.items.filter(({ _id }) => _id !== payload._id),
          payload,
        ],
      }))
      .addCase(updateContactStatus.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: [
          ...state.items.map((item) =>
            item._id !== payload._id
              ? item
              : { ...item, favorite: !item.favorite }
          ),
        ],
      }))
      .addCase(signOutUser.fulfilled, (state) => ({
        ...state,
        ...initialState.contacts,
      }))
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          updateContact.pending,
          updateContactStatus.pending
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
          updateContact.rejected,
          updateContactStatus.rejected
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
