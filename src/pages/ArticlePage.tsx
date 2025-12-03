import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import SEO from '@/components/SEO';
import { ModeToggle } from '@/components/ModeToggle';
import {
  Calendar,
  Clock,
  ExternalLink,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  BookOpen
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { articlesData, getArticleById, getAllArticles } from '@/data/articles/index';

// Get related articles (excluding current)
// Get related articles (excluding current)
const getRelatedArticles = (currentId: string) => {
  return getAllArticles()
    .filter(article => article.id !== currentId)
    .slice(0, 2);
};

export default function ArticlePage() {
  const { id } = useParams();
  const [email, setEmail] = useState('');

  const article = id ? articlesData[id] : undefined;

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <SEO title="Article Not Found - Nosy" description="The requested article could not be found." />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Article Not Found</h1>
          <Link to="/articles">
            <Button>Back to All Articles</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing! Please check your email to confirm.');
    setEmail('');
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article.title;

    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <SEO
        title={`${article.title} - Nosy`}
        description={article.excerpt}
        type="article"
      />
      {/* Header */}
      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <Badge variant="default" className="bg-blue-600 dark:text-white">{article.category}</Badge>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(article.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.readingTime} min read
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight dark:text-white">
                {article.title}
              </h1>

              <p className="text-xl text-gray-600 mb-6 dark:text-gray-300">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  By {article.author}
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs dark:border-slate-700 dark:text-gray-400">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Image */}
            {article.heroImage && (
              <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            <Separator className="mb-8 dark:bg-slate-800" />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div
                className="article-content space-y-6"
                dangerouslySetInnerHTML={{
                  __html: article.content
                    .replace(/\n/g, '<br>')
                    .replace(/#{3}\s(.*?)(<br>|$)/g, '<h3 class="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">$1</h3>')
                    .replace(/#{2}\s(.*?)(<br>|$)/g, '<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">$1</h2>')
                    .replace(/#{1}\s(.*?)(<br>|$)/g, '<h1 class="text-3xl font-bold mt-8 mb-6 text-gray-900 dark:text-white">$1</h1>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-white">$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
                    .replace(/- \*\*(.*?)\*\*/g, '<li class="ml-4"><strong class="font-semibold">$1</strong></li>')
                    .replace(/(\d+)\. \*\*(.*?)\*\*/g, '<div class="ml-4 mb-2"><strong class="font-semibold">$1. $2</strong></div>')
                    .replace(/\[(\d+)\]/g, '<sup><a href="#source-$1" class="text-blue-600 hover:underline">[$1]</a></sup>')
                    // Custom Callout Block
                    .replace(/:::callout<br>(.*?)<br>:::/g, '<div class="my-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg dark:bg-slate-900 dark:border-blue-400"><p class="text-lg font-medium text-gray-800 dark:text-gray-200 italic">$1</p></div>')
                    // Custom Image Block
                    .replace(/:::image\((.*?)\)/g, (match, key) => {
                      const img = article.images?.[key];
                      if (!img) return '';
                      const sourceHtml = img.source ? `<span class="block text-xs text-gray-400 mt-1">Source: ${img.source}</span>` : '';
                      return `<figure class="my-8"><img src="${img.url}" alt="${img.caption}" class="w-full rounded-lg shadow-md" /><figcaption class="mt-2 text-center text-sm text-gray-500 dark:text-gray-400 italic">${img.caption}${sourceHtml}</figcaption></figure>`;
                    })
                }}
              />
            </div>

            {/* Sources */}
            {article.sources && article.sources.length > 0 && (
              <div className="mt-12 p-6 bg-gray-50 rounded-lg dark:bg-slate-900">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center dark:text-white">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Sources & References
                </h3>
                <ul className="space-y-3">
                  {article.sources.map((source, index) => (
                    <li key={index} id={`source-${index + 1}`} className="flex items-start space-x-3">
                      <span className="text-sm text-gray-500 mt-1 dark:text-gray-400">{index + 1}.</span>
                      <div>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          {source.title}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Share Section */}
            <div className="mt-12 p-6 border rounded-lg dark:border-slate-800">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 dark:text-white">Share this article</h3>
              <div className="flex items-center space-x-3">
                <Button variant="outline" onClick={() => handleShare('twitter')}>
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" onClick={() => handleShare('facebook')}>
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
                <Button variant="outline" onClick={() => handleShare('linkedin')}>
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}