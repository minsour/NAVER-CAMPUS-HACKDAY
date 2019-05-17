import { PAY_GET_ORDERS_URL } from '../constants/apiUrls'

const payPrivateAPI = (url) => {
  return fetch(url).then((response) => (response.json()));
}

export const getPayOrderList = (userId) => {
  return payPrivateAPI(`${PAY_GET_ORDERS_URL}/${userId}`);
}