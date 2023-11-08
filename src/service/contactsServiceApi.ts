import initialState from 'redux/initialState';
import { IContact, ICredentials, IUserWithToken } from 'types/types';

class ContactsServiceApi {
  private BASE_URL = 'https://connections-api.herokuapp.com';
  private TOKEN = initialState.auth.token;

  get token() {
    return this.TOKEN;
  }

  set token(newToken) {
    this.TOKEN = newToken;
  }

  registerUser(data: ICredentials): Promise<IUserWithToken> {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/users/signup`, options).then((response) =>
      response.json()
    );
  }

  loginUser(data: ICredentials, signal: AbortSignal): Promise<IUserWithToken> {
    const options = {
      signal,
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/users/login`, options).then((response) =>
      response.json()
    );
  }

  logoutUser(): Promise<{ message?: string }> {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/users/logout`, options).then((response) =>
      response.json()
    );
  }

  refreshUser(): Promise<IUserWithToken> {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/users/current`, options).then((response) =>
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
