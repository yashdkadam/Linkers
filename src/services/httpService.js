import axios from "axios";

axios.defaults.baseURL =
  "https://linkers-bbb30-default-rtdb.firebaseio.com/api";

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
