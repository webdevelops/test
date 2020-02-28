
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