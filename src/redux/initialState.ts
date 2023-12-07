import { IInitialState } from 'types/types';

const initialState: IInitialState = {
  // contacts: {
  //   items: [],
  //   isLoading: false,
  //   isLoaded: false,
  //   error: null,
  // },
  auth: {
    user: {
      name: null,
      email: null,
      lastName: null,
      phone: null,
      location: null,
      avatar: null,
      dateOfBirth: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },
};

export default initialState;
