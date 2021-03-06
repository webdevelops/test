import mockPhones from 'api/mockPhones'
import mockCategories from 'api/mockCategories'

const phonesURL = 'http://.../phones'
const categoriesURL = 'http://.../categories'

const fetchData = async url => {
  // const response = await superagent.get(url)
  // return response.body

  // const response = await axios(url)
  // return response.data

  const response = await fetch(url)
  return await response.json()
}

export const fetchPhonesApi = async () => {
  return fetchData(phonesURL)
}

export const loadMorePhonesApi = async ({ offset }) => {
  return await fetchData(`${phonesURL}?offset=${offset}`)
}

export const fetchPhoneByIdApi = async id => {
  return await fetchData(`${phonesURL}/${id}`)
}

export const fetchCategoriesApi = async () => {
  return await fetchData(categoriesURL)
}


// ---------- Mock Data --------------

const fetchMockData = async url => {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      if (Math.random() > 0) {
        resolve(url)

      } else {
        reject('Be patient please, we will fix it soon.')
      }
      clearTimeout(timeout)
    }, 1000);
  })
}

export const fetchMockPhones = async () => {
  return await fetchMockData(mockPhones)
}

export const loadMoreMockPhones = async () => {
  return fetchMockData(mockPhones)
}

export const fetchMockPhone = async id => {
  const phones = await fetchMockData(mockPhones)
  return phones.find(phone => phone.id === id)
}

export const fetchMockCategories = async () => {
  return await fetchMockData(mockCategories)
}