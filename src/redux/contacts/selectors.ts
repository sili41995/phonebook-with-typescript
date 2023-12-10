import { IInitialState } from 'types/types';

export const selectContacts = (state: IInitialState) => state.contacts.items;

export const selectError = (state: IInitialState) => state.contacts.error;

export const selectIsLoading = (state: IInitialState) =>
  state.contacts.isLoading;

export const selectIsLoaded = (state: IInitialState) => state.contacts.isLoaded;

export const selectCount = (state: IInitialState) => state.contacts.count;
