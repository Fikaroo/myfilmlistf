import axios from "axios";
import { baseUrl } from "../constants";
import {
  ADD_MOVIES,
  ADD_MOVIE_TO_LIST,
  REMOVE_MOVIE_TO_LIST,
  SET_LINKACTIVE,
} from "./actions-type";

export const getMovies = async (searchLine) => {
  const apiKey = "23dbb244";
  const res = await axios.get(baseUrl + `?s=${searchLine}&apikey=${apiKey}`);
  const data = res.data.Search;
  if (!data) {
    throw console.log("Error");
  }
  return data;
};

export const addMovies = (payload) => ({
  type: ADD_MOVIES,
  payload,
});

export const addListMovie = (payload) => ({
  type: ADD_MOVIE_TO_LIST,
  payload,
});

export const removeListMovie = (payload) => ({
  type: REMOVE_MOVIE_TO_LIST,
  payload,
});

export const setLinkActive = (payload) => ({
  type: SET_LINKACTIVE,
  payload
})
