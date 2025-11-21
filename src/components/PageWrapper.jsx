
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://minnetonkaanimal.com';
const DEFAULT_IMAGE = 'https://horizons-cdn.hostinger.com/2159b5b2-c5e9-475c-b436-56f7fa5f20f0/exterior-mn-oimvH.jpg';

const PageWrapper = ({ children, title, description, image, schema, preloadImage }) => {
    const location = useLocation();
    const currentUrl = `${SITE_URL}${location.pathname === '/' ? '' : location.pathname}`;
    
    const metaTitle = title ? `${title} | Minnetonka Animal Hospital` : 'Minnetonka Animal Hospital';
    const metaDescription = description || 'Personalized, compassionate veterinary care in Minnetonka, MN.';
    const metaImage = image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : DEFAULT_IMAGE;

    return (
        <>
            <Helmet>
                {/* Standard Metadata */}
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href={currentUrl} />

                {/* Preload LCP Image if provided */}
                {preloadImage && (
                    <link rel="preload" as="image" href={preloadImage} />
                )}

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:image" content={metaImage} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={currentUrl} />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={metaImage} />

                {/* JSON-LD Schema (if provided) */}
                {schema && (
                    <script type="application/ld+json">
                        {JSON.stringify(schema)}
                    </script>
                )}
            </Helmet>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default PageWrapper;
