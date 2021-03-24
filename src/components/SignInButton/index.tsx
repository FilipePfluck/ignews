import { useState } from 'react'

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

const SigninButton = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)

    return(
        <button type="button" className={styles.signInButton}>
            {isUserLoggedIn && (
                <>
                    <FaGithub color="#04D361"/>
                    <p> Filipe Pfluck</p>
                    <FiX color="#737380" style={{marginLeft: 8}}/>
                </>
                
            )}

            {!isUserLoggedIn && (
                <>
                    <FaGithub color="#EBA417"/>
                    <p> Sign in with Github </p>
                </>
            )}
        </button>
    )
}

export default SigninButton