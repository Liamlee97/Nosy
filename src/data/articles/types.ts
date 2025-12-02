export interface Article {
    id: number;
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
        type: string;
    }[];
    slug?: string;
}
