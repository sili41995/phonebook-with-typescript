import initialState from 'redux/initialState';
import { IAuthResponse, IContact, IUser } from 'types/types';

class ContactsServiceApi {
  private BASE_URL = 'https://contacts-rest-api-dvg7.onrender.com/api/';
  private TOKEN = initialState.auth.token;

  get token() {
    return this.TOKEN;
  }

  set token(newToken) {
    this.TOKEN = newToken;
  }

  signUpUser(data: IUser): Promise<IUser | Error> {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/auth/signup`, options).then((response) =>
      response.json()
    );
  }

  signInUser(data: IUser, signal: AbortSignal): Promise<IUser | Error> {
    const options = {
      signal,
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/auth/signin`, options).then((response) =>
      response.json()
    );
  }

  signOutUser(): Promise<{ message?: string }> {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/auth/signout`, options).then((response) =>
      response.json()
    );
  }

  refreshUser(): Promise<IUser | Error> {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/auth/current`, options).then((response) =>
      response.json()
    );
  }

  fetchContacts(signal: AbortSignal): Promise<IContact[]> {
    const options = {
      signal,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/contacts`, options).then((response) => {
      if (!response.ok) {
        throw new Error('Loading contacts failed');
      }
      return response.json();
    });
  }

  addContact(data: IContact): Promise<IContact> {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/contacts`, options).then((response) => {
      if (!response.ok) {
        throw new Error('Adding a contact failed');
      }
      return response.json();
    });
  }

  deleteContact(id: string): Promise<IContact> {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/contacts/${id}`, options).then(
      (response) => {
        if (!response.ok) {
          throw new Error('Deleting a contact failed');
        }
        return response.json();
      }
    );
  }

  updateContact({
    id,
    data,
  }: {
    id: string;
    data: IContact;
  }): Promise<IContact> {
    const options = {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/contacts/${id}`, options).then(
      (response) => {
        if (!response.ok) {
          throw new Error('Contact update failed');
        }
        return response.json();
      }
    );
  }
}

const contactsServiceApi = new ContactsServiceApi();

export default contactsServiceApi;
