export type PagesPath = {
  homePath: '/';
  contactsPath: 'contacts';
  aboutPath: 'about';
  registerPath: 'register';
  loginPath: 'login';
  contactDetailsPath: 'contact-details';
  addNewContactPath: 'contacts/new-contact';
  contactPath: 'contact';
  newContactPath: 'new-contact';
  dynamicParam: 'id';
};

export type AuthPages = Pick<
  PagesPath,
  'homePath' | 'registerPath' | 'loginPath'
>;

export interface ICredentials {
  name?: string;
  password: string;
  email: string;
}

export interface IUser {
  name: string | null;
  email: string | null;
  lastName?: string;
  avatar?: string;
  dateOfBirth?: string;
  phoneNumber?: string;
  location?: string;
}

export interface IContact {
  id: string;
  name: string;
  number: string;
  avatar?: string;
  role?: string;
  email?: string;
  chat?: string;
  description?: string;
  userAvatar?: string;
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
}

export type UserWithToken = Pick<IAuthInitialState, 'user' | 'token'>;

export interface IInitialState {
  contacts: IContactsInitialState;
  auth: IAuthInitialState;
}

export type Message = string;
