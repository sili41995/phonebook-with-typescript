import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import authReducer from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: persistedReducer,
});

export default rootReducer;
