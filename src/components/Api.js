class Api {
    constructor({ baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch(console.log)
    }

    getInitialCards() {
      // ...
    }
  
    // другие методы работы с API
  }
  
  export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
    headers: {
      authorization: 'ce3e7b6f-f070-4401-b0f3-689824d2bbf0 ',
      'Content-Type': 'application/json'
    }
  }); 