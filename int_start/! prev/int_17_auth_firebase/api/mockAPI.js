
import mockPhones from 'api/mockPhones'
import mockCategories from 'api/mockCategories'

const fetchData = async url => {
  return new Promise((resolve, reject) => {
    const timerId = setTimeout(() => {
      if (Math.random() > 0) {
        resolve(url)
      
      } else {
        reject('Be patient please, we will fix it soon.')
      }
      clearTimeout(timerId)
    }, 1000)
  })
}

export const fetchPhonesApi = async () => {
  return fetchData(mockPhones)
}

export const loadMorePhonesApi = async () => {
  return await fetchData(mockPhones)
}

export const fetchPhoneByIdApi = async id => {
  const data = await fetchData(mockPhones)
  const phone = data.find(phone => phone.id === id)

  return phone
}

export const fetchCategoriesApi = async () => {
  return fetchData(mockCategories)
}