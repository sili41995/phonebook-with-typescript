import { IState } from 'types/types';

export const selectContacts = (state: IState) => state.contacts.items;

export const selectError = (state: IState) => state.contacts.error;

export const selectIsLoading = (state: IState) => state.contacts.isLoading;

export const selectIsLoaded = (state: IState) => state.contacts.isLoaded;

export const selectCount = (state: IState) => state.contacts.count;
