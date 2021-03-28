import { GetServerSideProps } from "next"
import { getSession } from "next-auth/client"
import Head from "next/head"
import Link from 'next/link'
import { RichText } from "prismic-dom"
import { getPrismicClient } from "../../services/prismic"

import styles from './post.module.scss'

type Post = {
    slug: string
    title: string,
    content: string,
    updatedAt: string
}

interface PostPageProps {
    post: Post
    isSigned: boolean
}

export default function Post({ post, isSigned }: PostPageProps) {
    return (
        <>
            <Head>
                <title>{post.title} | ignews</title>
            </Head>

            <main className={styles.container}>
                <article className={styles.post}>
                    <h1>{post.title}</h1>
                    <time>{post.updatedAt}</time>
                    <div 
                        className={`${styles.postContent} ${!isSigned && styles.previewContent}`}
                        dangerouslySetInnerHTML={{ __html: post.content}}
                    />

                    {!isSigned && (
                        <Link href="/">
                            <button className={styles.continueReading}>
                                Wanna continue reading?
                                    <a>Subscribe now</a>
                            </button>
                        </Link>
                    )}
                </article>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async({ req, params }) => {
    const session = await getSession({req})

    const {slug} = params

    const prismic = await getPrismicClient()

    const response = await prismic.getByUID('post', String(slug), {})

    if(!session || !session?.activeSubscription) {
        const post = {
            slug,
            title: RichText.asText(response.data.title),
            content: RichText.asHtml(response.data.content.splice(0, 3)),
            updatedAt: new Date(response.last_publication_date)
                .toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                })
        }

        return {
            props: {
                post,
                isSigned: false
            }
        }
    }

    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content),
        updatedAt: new Date(response.last_publication_date)
            .toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
    }

    return {
        props: {
            post,
            isSigned: true
        }
    }
}