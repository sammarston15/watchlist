import { FC, useState } from 'react'
import styles from './Header.module.scss'
import { setContactSearch } from '../../redux/movies/actions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router'



const Header: FC = () => {
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLeft}>
        <div className={styles.title}><Link to='/' style={{color: 'inherit', textDecoration: 'none'}}>My Movie Watchlist</Link></div>
      </div>
      <div className={styles.headerRight}>
        <input type="text" className={styles.search} /* value={} */ placeholder='Search...' onChange={(e) => {
          dispatch(setContactSearch(e.target.value))
        }} />
        <Link to='/watchlist'>
          <button className={styles.tab}>WATCHLIST</button>
        </Link>
        { loggedIn ? 
          <Link to='/account'>
            <button className={styles.tab}>Account</button>
          </Link>
          :
          <Link to='/login'>
            <button className={styles.tab}>Login/Signup</button>
          </Link>
        }
      </div>
    </div>
  )
}

export default Header