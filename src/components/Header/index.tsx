import { useRouter } from 'next/router'
import Link from 'next/link'

import SigninButton from '../SignInButton'

import styles from './styles.module.scss'

import { ActiveLink } from '../ActiveLink'

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/logo.svg" alt="Ignews"/>
                <nav >
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts">
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
                <SigninButton/>
            </div>
        </header>
    )
}

export default Header