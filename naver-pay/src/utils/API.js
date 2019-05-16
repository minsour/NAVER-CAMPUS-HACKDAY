
import axios from 'axios';
const domain = "http://localhost:8080";

const API_LIST = {
  summary : {
    method : "get",
    url : domain + "/summary"
  },
  order_list: {
    method : "get",
    url : domain + "/orders/:param"
  },
  order: {
    method : "get",
    url : domain + "/order/:param"
  }
}

async function request(key, param) {
  let {method, url} = API_LIST[key];
  url = url.replace(':param', param);

  let res = '';
  if (method == 'get') {
    res = await axios.get(url);
  }
  console.log(res);
  if (!res.status) {
    alert(res.data.message);
  }

  return res.data;
}

const API = {
  request : request
}
export default API;