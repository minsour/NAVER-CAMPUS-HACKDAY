
import axios from 'axios';
const domain = "http://localhost:3000";

const API_LIST = {
  summary : {
    method : "get",
    url : domain + "/summary"
  },
  order_list: {
    method : "get",
    url : domain + "/order_list"
  },
  order: {
    method : "get",
    url : domain + "/order/:param"
  }
}

function request(key, param) {
  let {method, url} = API_LIST[key];
  url.replace(':param', param);

  let res = '';
  if (method == 'get') {
    //res = await axios.get(url);
    res = [
      {id: "1", name:"사탕", price:"3000"},
      {id: "2", name:"귤", price:"1900"},
      {id: "3", name:"과자", price:"13000"},
      {id: "4", name:"지갑", price:"53000"},
    ];
  }
  // if (!res.data.status) {
  //   alert(res.data.message);
  // }

  return res.data;
}

const API = {
  request : request
}
export default API;