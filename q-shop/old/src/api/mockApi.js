
import mockPhones from './mockPhones';
import mockCategories from './mockCategories';

const fetchData = url => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(url);
      
    }, 1000);
  });
};

export const fetchPhonesApi = async () => {
  return fetchData(mockPhones);
};

export const loadMorePhonesApi = async () => {
  return await fetchData(mockPhones);
};

export const fetchPhoneByIdApi = async id => {
  const phones = await fetchData(mockPhones);

  return phones.find(phone => phone.id === id);
};

export const fetchCategoriesApi = async () => {
  return fetchData(mockCategories);
};