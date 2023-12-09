export interface ICredentials {
  email: string;
  password: string;
}

export interface ISignUpCredentials extends ICredentials {
  [key: string]: string | FileList | undefined;
  name: string;
  avatar: FileList;
  phone: string;
  lastName: string;
  location: string;
  dateOfBirth: string;
}

export interface IUser {
  name: string;
  email: string;
  avatar: string;
}

export interface ICurrentUser extends IUser {
  _id: string;
  avatar: string;
  phone?: string;
  lastName?: string;
  location?: string;
  dateOfBirth?: string;
}

export interface ISignInRes extends IUser {
  token: string;
  user: IUser;
}

export interface IContact {
  id: string;
  name: string;
  phone: string;
  avatar: string;
}

export interface IAuthInitialState {
  user: IUserState;
  token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: string | null;
}

interface IUserState {
  name: string | null;
  email: string | null;
  avatar: string | null;
}

export interface IContactsInitialState {
  items: IContact[];
  isLoading: boolean;
  isLoaded: boolean;
  error: string | null;
}

export interface IInitialState {
  // contacts: IContactsInitialState;
  auth: IAuthInitialState;
}

export type Message = string;
