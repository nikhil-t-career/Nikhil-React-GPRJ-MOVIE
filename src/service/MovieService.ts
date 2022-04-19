import axios from "axios";
import MovieInfo from "../model/MovieInfo";

const getDataFromServer = (section: string) => {
  let url = `http://localhost:3001/${section}`;

  return axios.get<MovieInfo[]>(url).then((response) => response.data);
};

const addToFavourites = (movieData: Omit<MovieInfo, "id">) => {
  return axios
    .post<MovieInfo>(`http://localhost:3001/favourite`, movieData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);
};

const removeFromFavourites = (id: string | number) => {
  return axios
    .delete<MovieInfo>(`http://localhost:3001/favourite/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);
};

export { getDataFromServer, addToFavourites, removeFromFavourites };
