import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../models/interfaces/user";
import { TopRatedMovies } from "../../models/interfaces/topRatedMovies";
// import { SortValues } from '../../models/SortValues'
import axios from "axios";
// import { create } from "domain";


const accessToken: string = (import.meta.env.VITE_APP_MOVIE_ACCESS_TOKEN as string);
const BASE_URL = "https://api.themoviedb.org/3"


export const getTopRatedMovies = createAsyncThunk<TopRatedMovies>(
  "MOVIES/GET_TOP_RATED_MOVIES",
  () => axios({
    method: 'get',
    url: `${BASE_URL}/movie/top_rated`,
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
);  
export const getConfigurationDetails = createAsyncThunk<object>(
  "MOVIES/GET_CONFIGURATION_DETAILS",
  () => axios({
    method: 'get',
    url: `${BASE_URL}/configuration`,
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
);  
export const setNewContact = createAction<any>("CONTACTS/SET_NEW_CONTACT");
export const setEditingContact = createAction<any>('CONTACTS/SET_EDITING_CONTACT');
export const setUpdatedContact = createAction<Contact>('CONTACTS/SET_UPDATED_CONTACT');
export const setNewLoggedIn = createAction<boolean>("SET_NEW_LOGGEDIN");
export const setNewUser = createAction<User>("SET_NEW_USER");
export const setSortStatus = createAction<any>("SET_SORT_STATUS");
export const setFirstClickCount = createAction<number>("SET_FIRST_CLICK_COUNT");
export const setLastClickCount = createAction<number>("SET_LAST_CLICK_COUNT");
export const setContactSearch = createAction<string>("SET_CONTACT_SEARCH");