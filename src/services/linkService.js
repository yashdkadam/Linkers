import http from "./httpService";

const apiUrl = "https://linkers-bbb30-default-rtdb.firebaseio.com/api";

export function getLinks() {
  return http.get(apiUrl + ".json");
}

export function deleteTab(keys) {
  return http.delete(apiUrl + `/${keys}.json`);
}
