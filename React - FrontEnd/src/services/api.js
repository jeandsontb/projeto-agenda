const baseUrl = 'http://localhost:3333';

const request = async (method, endpoint, params, token = null) => {
    method = method.toLowerCase();
    let fullUrl = `${baseUrl}${endpoint}`;
    let body = null;
  
    switch (method) {
      case 'get':
        let queryString = new URLSearchParams(params).toString();
        fullUrl += `?${queryString}`;
        break;
      case 'post':
      case 'put':
      case 'delete':
        body = JSON.stringify(params);
        break;

      default:
    }
  
    let headers = {'Content-Type': 'application/json'};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  
    let req = await fetch(fullUrl, {method, headers, body});
    let json = await req.json();
    return json;
  }; 

  const api = () => {
    return {
      getToken: () => {
      return localStorage.getItem('token');
      },
      login: async (email, password) => {
        let json = await request('post', '/session', {email, password});
        return json;
      },
      logout: async () => {
        let token = localStorage.getItem('token');
        if(token) {
          localStorage.removeItem('token');
          return true;
        } else {
          return false;
        }
      },
      getDataContacts: async () => {
        let token = localStorage.getItem('token');

        if(token) {
          let json = await request('get', '/contacts', {});

          return json;
        }
      },
      getSearchContacts: async name => {
        let token = localStorage.getItem('token');

        if(token) {
          let json = await request('get', `/contacts/${name}`, {});
  
          return json;
        }
      },
      addContacts: async (name, lastname, phone, birth, address, email) => {
        let token = localStorage.getItem('token');

        if(token) {
          let json = await request('post', '/contacts', {
            name,
            lastname,
            phone,
            birth,
            address,
            email
          }, token);

          return json;
        }
      },
      updateContacts: async (id, name, lastname, phone, birth, address, email) => {
        let token = localStorage.getItem('token');
        
        if(token) {
          let json = await request('put', `/contacts/${id}`, {
            name,
            lastname,
            phone,
            birth,
            address,
            email
          }, token);

          return json;
        }
      },
      removeContacts: async (id) => {
        let token = localStorage.getItem('token');

        if(token) {
          let json = await request('delete', `/contacts/${id}`, {}, token);

          return json;
        }
      }
    }
  }

  export default api;
    

