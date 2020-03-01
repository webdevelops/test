
import mockPhones from './mockPhones';

const fetchData = url => {
  return new Promise(resolve => {
    const timerId = setTimeout(() => {
      resolve(url);

      clearTimeout(timerId);
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