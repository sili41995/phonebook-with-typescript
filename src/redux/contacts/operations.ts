import { createAsyncThunk } from '@reduxjs/toolkit';
import contactsServiceApi from 'service/contactsServiceApi';
import { IContact } from 'types/types';

export const fetchContacts = createAsyncThunk<
  IContact[],
  undefined,
  { rejectValue: string }
>('contacts/fetchAll', async (_, { rejectWithValue, signal }) => {
  try {
    const contacts = await contactsServiceApi.fetchContacts(signal);
    return contacts;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});

export const addContact = createAsyncThunk<
  IContact,
  IContact,
  { rejectValue: string }
>('contacts/addContact', async (contact, { rejectWithValue }) => {
  try {
    const response = await contactsServiceApi.addContact(contact);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});

export const deleteContact = createAsyncThunk<
  IContact,
  string,
  { rejectValue: string }
>('contacts/deleteContact', async (id, { rejectWithValue }) => {
  try {
    const response = await contactsServiceApi.deleteContact(id);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});

export const updateContact = createAsyncThunk<
  IContact,
  { data: IContact; id: string },
  { rejectValue: string }
>('contacts/updateContact', async (data, { rejectWithValue }) => {
  try {
    const response = await contactsServiceApi.updateContact(data);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});
