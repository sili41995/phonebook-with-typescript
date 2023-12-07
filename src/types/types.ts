export interface IContact {
  id: string;
  name: string;
  phone: string;
  email?: string;
  role?: string;
  description?: string;
  tgUsername?: string;
  favorite: boolean;
  avatar?: string;
}

export interface IUser {
  name?: string | null;
  lastName?: string | null;
  password?: string;
  email: string | null;
  phone?: string | null;
  location?: string | null;
  dateOfBirth?: string | null;
  token?: string;
  avatar: string | null;
}

export interface IAuthResponse extends IUser {
  message: string;
}

export interface IContactsInitialState {
  items: IContact[];
  isLoading: boolean;
  isLoaded: boolean;
  error: string | null;
}

export interface IAuthInitialState {
  user: IUser;
  token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface IInitialState {
  // contacts: IContactsInitialState;
  auth: IAuthInitialState;
}

export interface ISignInResponse {
  token: string;
  user: IUser;
}

export type Message = string;
