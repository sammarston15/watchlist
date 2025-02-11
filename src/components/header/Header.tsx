import React, { FC } from 'react'
import styles from './Header.module.scss'
import { setContactSearch } from '../../redux/movies/actions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router'

const Header: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLeft}>
        <div className={styles.title}><Link to='/' style={{color: 'inherit', textDecoration: 'none'}}>My Movie Watchlist</Link></div>
      </div>
      <div className={styles.headerRight}>
        <input type="text" className={styles.search} /* value={} */ placeholder='Search Contacts...' onChange={(e) => {
          dispatch(setContactSearch(e.target.value))
        }} />
        <Link to='/new'>
          <button className={styles.btn} ><i className="fas fa-plus"></i></button>
        </Link>
      </div>
    </div>
  )
}

export default Header