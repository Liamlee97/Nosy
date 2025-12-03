export interface Article {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    readingTime: number;
    publishDate: string;
    tags: string[];
    author: string;
    content: string;
    sources?: {
        title: string;
        url: string;
        type?: string;
    }[];
    slug?: string;
    heroImage?: string;
    images?: Record<string, {
        url: string;
        caption: string;
        source?: string;
    }>;
}
