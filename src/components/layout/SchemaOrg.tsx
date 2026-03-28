export function SchemaOrg() {
    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': 'https://tripleoutputdcpowersupply.com/#website',
                url: 'https://tripleoutputdcpowersupply.com',
                name: 'Triple Output DC Power Supply',
                description:
                    'Precision power solutions and expert insights for modern electronics labs, R&D professionals, and automated testing environments.',
                inLanguage: 'en-US',
                potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                        '@type': 'EntryPoint',
                        urlTemplate: 'https://tripleoutputdcpowersupply.com/?s={search_term_string}',
                    },
                    'query-input': 'required name=search_term_string',
                },
            },
            {
                '@type': 'Organization',
                '@id': 'https://tripleoutputdcpowersupply.com/#organization',
                name: 'Triple Output DC Power Supply',
                url: 'https://tripleoutputdcpowersupply.com',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://tripleoutputdcpowersupply.com/favicon.ico',
                },
                sameAs: ['https://variabledcpowersupply.com'],
            },
            {
                '@type': 'Product',
                '@id': 'https://tripleoutputdcpowersupply.com/#product',
                name: 'eTM-DM Series Triple Output DC Power Supply',
                description:
                    'Professional-grade programmable triple output linear DC bench power supply with ultra-low ripple, internal series/parallel tracking, and full SCPI support.',
                brand: {
                    '@type': 'Brand',
                    name: 'eTM',
                },
                category: 'Laboratory Power Supply',
                offers: {
                    '@type': 'Offer',
                    url: 'https://variabledcpowersupply.com/triple-output-bench-power-supplies/',
                    priceCurrency: 'USD',
                    availability: 'https://schema.org/InStock',
                },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
