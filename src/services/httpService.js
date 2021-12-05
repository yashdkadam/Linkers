import axios from "axios";

axios.defaults.baseURL =
  "https://linkers-bbb30-default-rtdb.firebaseio.com/api";

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
export default http;
