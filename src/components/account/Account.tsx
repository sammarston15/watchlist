import { FC } from 'react'
import styles from './Account.module.scss'
import Header from '../header/Header'

const Account: FC = () => {
  return (
    <div className={styles.accountContainer}>
        <Header />
        <h1>Account page</h1>
        <div className={styles.accountDetails}>
            <h2>Account Details</h2>
            <div className={styles.accountDetail}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" />
            </div>
            <div className={styles.accountDetail}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" />
            </div>
            <div className={styles.accountDetail}>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />
            </div>
        </div>
    </div>
  )
}

export default Account