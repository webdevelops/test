import mockPhones from 'api/mockPhones'
import mockCategories from 'api/mockCategories'
// import axios from 'axios'

const categoriesURL = 'https://int-start.firebaseio.com/categories.json'
const phonesURL = 'https://int-start.firebaseio.com/phones.json'

const sendDataToServer = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    console.log("TCL: sendDataToServer -> json", json)

  } catch (err) {
    console.log("TCL: sendDataToServer -> err", err)
  }
}

export const sendPhonesToServer = () => {
  return sendDataToServer(phonesURL, mockPhones)
}

export const sendCategoriesToServer = () => {
  return sendDataToServer(categoriesURL, mockCategories)
}

const fetchData = async url => {
  // const response = await axios(url)
  // console.log("TCL: response.data", response.data)
  // return response.data

  // const response = await superagent.get(url)
  // return response.body

  const response = await fetch(url)
  const json = await response.json()

  return Object.values(json)[0]
}

export const fetchPhonesApi = async () => {
  return await fetchData(phonesURL)
}

export const loadMorePhonesApi = async ({ offset }) => {
  // return await fetchData(`${phonesURL}?offset=${offset}`)
  return await fetchData(phonesURL)
}

export const fetchPhoneByIdApi = async id => {
  const data = await fetchData(phonesURL)
  const phone = data.find(phone => phone.id === id)

  return phone
}

export const fetchCategoriesApi = async () => {
  return fetchData(categoriesURL)
}

export const authApi = async (email, password, isLogin) => {
  const key = 'AIzaSyDIZuLX_zMZflhflAOjSvX8TnKWCa1trJw'
  const url = isLogin
    ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`
    : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`

  const authData = {
    email,
    password,
    returnSecureToken: true
  }
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(authData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  console.log("TCL: authApi -> data", data)
  const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

  localStorage.setItem('token', data.idToken)
  localStorage.setItem('userId', data.localId)
  localStorage.setItem('expirationDate', expirationDate)

  return {
    idToken: data.idToken,
    expiresIn: data.expiresIn
  }
}