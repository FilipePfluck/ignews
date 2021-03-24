import SigninButton from '../SignInButton'

import styles from './styles.module.scss'

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/logo.svg" alt="Ignews"/>
                <nav >
                    <a href="" className={styles.active}>Home</a>
                    <a href="">Posts</a>
                </nav>
                <SigninButton/>
            </div>
        </header>
    )
}

export default Header