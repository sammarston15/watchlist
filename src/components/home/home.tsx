import React, { FC, useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../redux/store"
import { getTopRatedMovies, getConfigurationDetails } from "../../redux/movies/actions"
import {
    // selectTopRatedMovies,
    selectIsLoading,
} from "../../redux/movies/selectors"
import styles from "./home.module.scss"
// import axios from "axios";

// Components
import Header from "../header/Header"
import Card from "../card/Card"

export const Home: FC = () => {
    // DISPATCH HOOK
    const dispatch = useAppDispatch()

    // SELECTORS
    const loading = useSelector(selectIsLoading)

    useEffect(() => {
        dispatch(getTopRatedMovies())
    }, [dispatch])

    return (
        <div className={styles.home}>
            <Header />
            <div className={styles.homeNav}>
                <button className={styles.tab}>
                    Top Rated
                </button>
                <button className={styles.tab}>
                    Movies
                </button>
                <button className={styles.tab}>
                    Shows
                </button>
            </div>
            {loading ? (
                <h1>loading</h1>
            ) : (
                <div className={styles.homeLists}>
                    <Card />
                </div>
            )}
        </div>
    )
}
