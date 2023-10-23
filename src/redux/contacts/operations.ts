import { createAsyncThunk } from '@reduxjs/toolkit';
import contactsServiceApi from 'service/contactsServiceApi';
import { IContact, IError } from 'types/types';

export const fetchContacts = createAsyncThunk<
  IContact[],
  undefined,
  { rejectValue: IError }
>('contacts/fetchAll', async (_, { rejectWithValue, signal }) => {
  try {
    const contacts = await contactsServiceApi.fetchContacts(signal);
    return contacts;
  } catch (error) {
    return rejectWithValue(error as IError);
  }
});

export const addContact = createAsyncThunk<
  IContact,
  IContact,
  { rejectValue: IError }
>('contacts/addContact', async (contact, { rejectWithValue }) => {
  try {
    const response = await contactsServiceApi.addContact(contact);
    return response;
  } catch (error) {
    return rejectWithValue(error as IError);
  }
});

export const deleteContact = createAsyncThunk<
  IContact,
  string,
  { rejectValue: IError }
>('contacts/deleteContact', async (id, { rejectWithValue }) => {
  try {
    const response = await contactsServiceApi.deleteContact(id);
    return response;
  } catch (error) {
    return rejectWithValue(error as IError);
  }
});

export const updateContact = createAsyncThunk<
  IContact,
  { data: IContact; id: string },
  { rejectValue: IError }
>('contacts/updateContact', async (data, { rejectWithValue }) => {
  try {
    const response = await contactsServiceApi.updateContact(data);
    return response;
  } catch (error) {
    return rejectWithValue(error as IError);
  }
});
