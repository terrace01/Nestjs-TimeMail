import Head from 'next/head'


// @ts-ignore
export const SEO = ({ title, description}) => {

    return (
        <Head>
            <title>{title}</title>
    <meta name="robots" content="follow, index" />
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    </Head>
)
}

// @ts-ignore
export const PageSEO = ({ title, description }) => {

    return (
        <SEO
            title={title}
            description={description}
        />
    )
}
