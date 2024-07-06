import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const PageSeo = ({ title, description, imageUrl, imageAlt, siteUrl }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            {imageUrl && <meta property="og:image" content={imageUrl} />}
            {imageUrl && <meta property="og:image:alt" content={imageAlt} />}
            <meta property="og:url" content={siteUrl} />
            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {imageUrl && <meta name="twitter:image" content={imageUrl} />}
            {/* Meta Tags para Instagram */}
            <meta property="og:site_name" content="Astra Padel" /> {/* Nome do seu site */}
            {/* Adicione mais meta tags conforme necessário */}
        </Helmet>
    );
};

PageSeo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    imageAlt: PropTypes.string,
    siteUrl: PropTypes.string.isRequired
};

export default PageSeo;
