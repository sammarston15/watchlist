import { createReducer } from "@reduxjs/toolkit"
import * as MovieActions from "./actions"
import { SortValues } from "../../models/SortValues"
import {TopRatedMovies} from '../../models/interfaces/topRatedMovies'

interface MovieState {
  loading: boolean,
  topRatedMovies: TopRatedMovies,
  configurationDetails: object,
  sortStatus: SortValues,
  loggedIn: boolean
}

const initialState: MovieState = {
    loading: false,
    topRatedMovies: {} as TopRatedMovies,
    configurationDetails: {},
    sortStatus: SortValues.FIRST_ASC,
    loggedIn: false
}

const contactReducer = createReducer(initialState, (movies) => {
    movies
        .addCase(
            MovieActions.getTopRatedMovies.pending,
            (state: MovieState) => ({
                ...state,
                loading: true,
            })
        )
        .addCase(
            MovieActions.getTopRatedMovies.fulfilled,
            (state: MovieState, { payload }) => ({
                ...state,
                loading: false,
                topRatedMovies: payload.data,
            })
        )
        .addCase(
            MovieActions.getTopRatedMovies.rejected,
            (state: MovieState, { error }) => {
                alert(`${error.stack}`)
            }
        )
        .addCase(
            MovieActions.getConfigurationDetails.pending,
            (state: MovieState) => ({
                ...state,
                loading: true,
            })
        )
        .addCase(
            MovieActions.getConfigurationDetails.fulfilled,
            (state: MovieState, { payload }) => ({
                ...state,
                loading: false,
                configurationDetails: payload.data,
            })
        )
        .addCase(
            MovieActions.getConfigurationDetails.rejected,
            (state: MovieState, { error }) => {
                alert(`${error.stack}`)
            }
        )
        .addDefaultCase((state: MovieState) => state)
})

export default contactReducer
