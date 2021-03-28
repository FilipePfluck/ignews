import Head from 'next/head'

import styles from './styles.module.scss'

const Posts = () => {
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>20 de março</time>
                        <strong>Next.JS - Novidades na versão 10 e atualização do blog para melhorar a performance</strong>
                        <p>Neste post aprenderemos sobre as imagens do Next, o Next analytics e muito mais</p>
                    </a>
                    <a href="#">
                        <time>20 de março</time>
                        <strong>Next.JS - Novidades na versão 10 e atualização do blog para melhorar a performance</strong>
                        <p>Neste post aprenderemos sobre as imagens do Next, o Next analytics e muito mais</p>
                    </a>
                    <a href="#">
                        <time>20 de março</time>
                        <strong>Next.JS - Novidades na versão 10 e atualização do blog para melhorar a performance</strong>
                        <p>Neste post aprenderemos sobre as imagens do Next, o Next analytics e muito mais</p>
                    </a>
                </div>
            </main>
        </>
    )
}

export default Posts