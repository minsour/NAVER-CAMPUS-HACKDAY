
import axios from 'axios';
const domain = "http://localhost:8080";

const API_LIST = {
  summary : {
    method : "get",
    url : domain + "/summary"
  },
  order_list: {
    method : "get",
    url : domain + "/orders/:user_id"
  },
  order_list_with_date: {
    method : "get",
    url : domain + "/orders/:user_id?startDate=:startDate&endDate=:endDate"
  },
  order: {
    method : "get",
    url : domain + "/order/:order_id"
  }
}

async function request(key, param={}) {
  let {method, url} = API_LIST[key];
  
  const keys = Object.keys(param);
  for(let i=0;i<keys.length;i++) {
    url = url.replace(":" + keys[i], param[keys[i]])
  }

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