import { FC } from "react"
import styles from "./Login.module.scss"
import { client, account, session, loginWithGoogle } from "../../appwrite/appwrite"

const Login: FC = () => {


    const googleSignIn = () => {
        // Go to OAuth provider login page
        loginWithGoogle()
    }
    return (
        <div className={styles.loginContainer}>
            <h1>Login</h1>
            <div className={styles.loginDetails}>
                <button onClick={() => googleSignIn()}>
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}

export default Login
