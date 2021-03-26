import { useState } from 'react'

import { signIn, useSession, signOut } from 'next-auth/client'

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

const SigninButton = () => {
    const [session] = useSession()

    console.log(session)

    return session ?(
        <button 
            type="button" 
            className={styles.signInButton}
        >
            <FaGithub color="#04D361"/>
                <p> Filipe Pfluck</p>
            <FiX 
                color="#737380" 
                style={{marginLeft: 8}}
                onClick={()=>signOut()}
            />
        </button>
    ) : (
        <button 
            type="button" 
            className={styles.signInButton}
            onClick = {()=>signIn('github')}
        >
            <FaGithub color="#EBA417"/>
            <p> Sign in with Github </p>
        </button>
    )
}

export default SigninButton