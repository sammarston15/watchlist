import styles from "./Card.module.scss"
import { useSelector } from "react-redux"
import { selectTopRatedMovies, selectConfigurationDetails } from "../../redux/movies/selectors"
// import readyplayerone from '../../assets/readyplayerone.jpg'

const Card = () => {
    const apiBaseImageURL = 'http://image.tmdb.org/t/p/original'
    const topRatedMovies = useSelector(selectTopRatedMovies)
    const config = useSelector(selectConfigurationDetails)
    console.log("topRatedMovies", topRatedMovies.results)
    console.log("config", config)
    const moviesMap = topRatedMovies?.results?.map((movie, i) => (
        <div  key={i}>
            <img src={`${apiBaseImageURL}${movie.poster_path}`} alt={movie.title} />
            {/* <span>{movie.title}</span> */}
        </div>
    ))
    // topRatedMovies.results.forEach(i => {
    //     console.log(`${apiBaseURL}${i.poster_path}`)
    // });
    return (
        <div className={styles.cardContainer}>
            {moviesMap}
        </div>
        // <div className={styles.cardContainer}>
        //     <img src={readyplayerone} alt="" />
        //     <img src={readyplayerone} alt="" />
        //     <img src={readyplayerone} alt="" />
        //     <img src={readyplayerone} alt="" />
        // </div>
    )
}

export default Card
