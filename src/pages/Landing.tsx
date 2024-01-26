import {useTranslation} from "react-i18next";
import {Helmet} from "react-helmet-async";

const Landing = () => {
    const {t} = useTranslation();

    return (
        <div>
            <Helmet>
                <title>{t('ogTitle')}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content={t('description')}/>
                <meta name="keywords" content={t('keywords')}/>
                <meta name="author" content={t('author')}/>
                <meta name="language" content={t('language')}/>
                <meta name="robots" content="index, follow"/>
                <meta property="og:title" content={t('ogTitle')}/>
                <meta property="og:description" content={t('ogDescription')}/>
                <meta property="og:image" content="/logo.webp"/>
                <meta property="og:url" content="https://mt.yodon.top/"/>
                <meta property="og:type" content="website"/>
                <meta name="twitter:card" content="/logo.webp"/>
                <meta name="twitter:title" content={t('twitterTitle')}/>
                <meta name="twitter:description" content={t('twitterDescription')}/>
                <meta name="twitter:image" content="/logo.webp"/>
            </Helmet>
        </div>
    );
};

export default Landing;
