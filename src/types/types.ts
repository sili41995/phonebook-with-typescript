export type ProfileEntry = [string, string | boolean | FileList];

export interface IProfile {
  [key: string]: string | boolean | FileList | undefined;
  avatar: FileList;
}

export interface ICredentials {
  email: string;
  password: string;
}

export interface ISignUpCredentials extends ICredentials {
  [key: string]: string | FileList | undefined;
  name: string;
  avatar: FileList;
  phone?: string;
  lastName?: string;
  location?: string;
  dateOfBirth?: string;
}

export interface IUser {
  name: string;
  email: string;
  avatar: string;
}

export interface ICurrentUser extends IUser {
  _id: string;
  phone?: string;
  lastName?: string;
  location?: string;
  dateOfBirth?: string;
}

export interface ISignInRes extends IUser {
  token: string;
  user: IUser;
}

export interface ISignUpRes extends IUser {
  user: IUser;
}

export interface IBaseContact {
  name: string;
  phone: string;
  role?: string;
  email?: string;
  description?: string;
  tgUsername?: string;
}

export interface INewContact extends IBaseContact {
  [key: string]: string | FileList | boolean | undefined;
  avatar: FileList;
  favorite?: boolean;
}

export interface IContact extends IBaseContact {
  _id: string;
  avatar: string;
  favorite: boolean;
}

export interface IUpdateContact extends IBaseContact {
  favorite: boolean;
}

export interface IFetchContactsRes {
  contacts: IContact[];
  count: number;
}

export interface IAuthState {
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

export interface IContactsState {
  items: IContact[];
  count: number | null;
  isLoading: boolean;
  isLoaded: boolean;
  error: string | null;
}

export interface IInitialState {
  contacts: IContactsState;
  auth: IAuthState;
}

export type Message = string;
