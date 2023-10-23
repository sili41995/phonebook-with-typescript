import { IInitialState } from 'types/types';

const initialState: IInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    isLoaded: false,
    error: null,
  },
  auth: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
  },
};

export default initialState;
