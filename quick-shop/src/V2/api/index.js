
import phones from './mockPhones_image_http';
import categories from './mockCategories';

const phonesURL = 'https://quick-shop-2-7178e.firebaseio.com/phones/.json';
const categoriesURL = 'https://quick-shop-2-7178e.firebaseio.com/categories/.json';

const key = 'AIzaSyD14Rgnjqc2qgQaB15Q2IxfKlX6iPygZIk';
const signUpURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
const signInURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;

export const authApi = async (email, password, isLogin) => {
  const authData = {
    email,
    password,
    returnSecureToken: true
  };

  const url = isLogin ? signInURL : signUpURL;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(authData),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();
  // console.log("TCL: authApi!!! -> data", data);

  const expirationDate = new Date(new Date().getTime() + data.expiresIn * 5);

  localStorage.setItem('token', data.idToken);
  localStorage.setItem('user', data.localId);
  localStorage.setItem('expirationDate', expirationDate);

  if (data.error) {
    return data;
  }

  return {
    idToken: data.idToken,
    expiresIn: data.expiresIn
  };
}

const sendDataToServer = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    console.log("sendDataToServer -> json", json);

  } catch (err) {
    console.log("sendDataToServer -> err", err);
  }
};

export const sendPhonesToServer = async () => {
  return sendDataToServer(phonesURL, phones);
};

export const sendCategoriesToServer = async () => {
  return sendDataToServer(categoriesURL, categories);
};

const fetchData = async url => {
  const response = await fetch(url);
  const json = await response.json();

  return Object.values(json)[0];
};

export const fetchPhonesApi = async () => {
  return await fetchData(phonesURL);
};

export const loadMorePhonesApi = async () => {
  return fetchData(phonesURL);
};

export const fetchCategoriesApi = async () => {
  return await fetchData(categoriesURL);
};

export const fetchPhoneByIdApi = async id => {
  const phones = await fetchData(phonesURL);

  return phones.find(phone => phone.id === id);
};