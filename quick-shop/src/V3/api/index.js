
import phones from './mockPhones_image_http';
import categories from './mockCategories';

const phonesURL = 'https://my-project-1559841200510.firebaseio.com/phones/.json';
const categoriesURL = 'https://my-project-1559841200510.firebaseio.com/categories/.json';

const key = 'AIzaSyCpUApD9K5SMQxiiDCLUIvnbclYf1yiyVc';
const signUpURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
const signInURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;

export const authApi = async (email, password, isLogin) => {
  const url = isLogin ? signInURL : signUpURL;
  const authData = {
    email,
    password,
    returnSecureToken: true
  };

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(authData),
    headers: {
      "Content-Type": "application/josn"
    }
  });

  const data = await response.json();
  console.log("TCL: authApi!!! -> data", data);

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
};

const sendDataToServer = (url, data) => {
  try {
    const response = fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = response.json()
    console.log("sendDataToServer -> json", json)

  } catch (err) {
    console.log("sendDataToServer -> err", err)
  }
};

export const sendPhonesToServer = async () => {
  return await sendDataToServer(phonesURL, phones);
};

export const sendCategoriesToServer = () => {
  return sendDataToServer(categoriesURL, categories);
};

export const fetchData = async url => {
  const response = await fetch(url);
  const json = await response.json();

  return Object.values(json)[0];
};

export const fetchPhonesApi = async () => {
  return await fetchData(phonesURL);
};

export const loadMorePhonesApi = async () => {
  return await fetchData(phonesURL);
};

export const fetchCategoriesApi = async () => {
  return await fetchData(categoriesURL);
};

export const fetchPhoneByIdApi = async id => {
  const phones = await fetchData(phonesURL);

  return phones.find(phone => phone.id === id);
};