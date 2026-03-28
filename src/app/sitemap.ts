import type { MetadataRoute } from 'next';

const BASE_URL = 'https://tripleoutputdcpowersupply.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
        { url: '/etm-series', priority: 0.9, changeFrequency: 'weekly' as const },
        { url: '/how-to-choose', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/pricing-guide', priority: 0.8, changeFrequency: 'weekly' as const },
        { url: '/where-to-buy', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/selection-guide', priority: 0.8, changeFrequency: 'monthly' as const },
        // Applications
        { url: '/applications', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/applications/op-amp-testing', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/applications/mixed-signal-pcb-design', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/applications/iot-device-power-profiling', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/applications/automotive-electronics', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/applications/educational-university-labs', priority: 0.7, changeFrequency: 'monthly' as const },
        // How-to Guides
        { url: '/how-to-use', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/how-to-use/series-tracking-bipolar-supply', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/how-to-use/parallel-mode-high-current', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/how-to-use/scpi-programming-automation', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/how-to-use/setting-ovp-ocp-correctly', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/how-to-use/minimizing-ground-loops', priority: 0.7, changeFrequency: 'monthly' as const },
        // Resources
        { url: '/resources', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/resources/glossary-power-supply-terms', priority: 0.6, changeFrequency: 'monthly' as const },
        { url: '/resources/download-center', priority: 0.6, changeFrequency: 'monthly' as const },
        // Comparisons
        { url: '/comparisons', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/comparisons/rigol-dp832-alternative', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/comparisons/agilent-e3631a-alternative', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/comparisons/itech-it6300-alternative', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/comparisons/etm-vs-traditional', priority: 0.7, changeFrequency: 'monthly' as const },
        // Legal & Company
        { url: '/about-us', priority: 0.5, changeFrequency: 'yearly' as const },
        { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
        { url: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
    ];

    return routes.map(({ url, priority, changeFrequency }) => ({
        url: `${BASE_URL}${url}`,
        lastModified: new Date('2026-03-29'),
        changeFrequency,
        priority,
    }));
}
