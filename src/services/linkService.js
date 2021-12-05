import http from "./httpService";

const apiUrl = "";

export function getLinks() {
  return http.get(
    "https://linkers-bbb30-default-rtdb.firebaseio.com/api/links.json"
  );
}

export async function getProfile() {
  return http.get(
    "https://linkers-bbb30-default-rtdb.firebaseio.com/api/profile.json"
  );
}

export async function deleteTab(keys) {
  console.log(keys);
  return http.delete(
    "https://linkers-bbb30-default-rtdb.firebaseio.com/api/links" +
      `/${keys}.json`
  );
}

export async function updateProfile(name, value) {
  const data = {};
  data[name] = value;
  console.log(data);
  http.patch(
    `https://linkers-bbb30-default-rtdb.firebaseio.com/api/profile.json`,
    data
  );
}

export async function updateTab(key, name, value) {
  const data = {};
  data[name] = value;
  console.log(key);
  return http.patch(
    "https://linkers-bbb30-default-rtdb.firebaseio.com/api/links" +
      `/${key}.json`,
    data
  );
}

export function addTab(count) {
  const data = {
    id: count,
    title: "",
    url: "",
  };
  return http.post(
    "https://linkers-bbb30-default-rtdb.firebaseio.com/api/links.json",
    data
  );
}
