const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=6891b3be3c4c7c07429d74d1b476f369";

const GET = async (type, specific, ext = "") => {
  const res = await fetch(BASE_URL + type + "/" + specific + API_KEY + ext);
  return await res.json();
};

export { GET };
