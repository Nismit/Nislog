/// <reference types="next" />
/// <reference types="next/types/global" />
interface Window {
    // PageView
    gtag(type: 'config', googleAnalyticsId?: string, { page_path: string })
}