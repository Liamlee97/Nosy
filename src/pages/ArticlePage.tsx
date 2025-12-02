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
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  BookOpen,
  ExternalLink,
  Wind
} from 'lucide-react';

import { articlesData, getArticleById, getAllArticles } from '@/data/articles/index';

// Get related articles (excluding current)
const getRelatedArticles = (currentId: number) => {
  return getAllArticles()
    .filter(article => article.id !== currentId)
    .slice(0, 2);
};

export default function ArticlePage() {
  const { id } = useParams();
  const [email, setEmail] = useState('');

  const article = id ? articlesData[Number(id) as keyof typeof articlesData] : undefined;

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
      <header className="border-b bg-white sticky top-0 z-50 dark:bg-slate-950 dark:border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/articles">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Articles
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <Wind className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">Nosy</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={() => handleShare('twitter')}>
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleShare('facebook')}>
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleShare('linkedin')}>
                <Linkedin className="w-4 h-4" />
              </Button>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
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
                    <li key={index} className="flex items-start space-x-3">
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
                        <Badge variant="outline" className="text-xs mt-1 dark:border-slate-700 dark:text-gray-400">
                          {source.type}
                        </Badge>
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

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <Card className="dark:bg-slate-900 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="flex items-center text-lg dark:text-white">
                  <Mail className="w-5 h-5 mr-2 text-blue-600" />
                  Stay Updated
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Get monthly summaries of the latest smell research
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNewsletterSignup} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-950 dark:border-slate-700 dark:text-white"
                  />
                  <Button type="submit" className="w-full">
                    Subscribe
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <Card className="dark:bg-slate-900 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="text-lg dark:text-white">Related Articles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {getRelatedArticles(article.id).map((relatedArticle) => (
                  <div key={relatedArticle.id} className="border-b border-gray-100 pb-4 last:border-b-0 dark:border-slate-800">
                    <h4 className="font-medium text-gray-900 mb-2 leading-tight dark:text-white">
                      <Link to={`/article/${relatedArticle.id}`} className="hover:text-blue-600 transition-colors dark:hover:text-blue-400">
                        {relatedArticle.title}
                      </Link>
                    </h4>
                    <p className="text-sm text-gray-600 mb-2 dark:text-gray-400">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <Badge variant="secondary" className="text-xs dark:bg-slate-800 dark:text-gray-300">
                        {relatedArticle.category}
                      </Badge>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {relatedArticle.readingTime} min
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="dark:bg-slate-900 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="text-lg dark:text-white">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/conditions" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Understanding Conditions</Link></li>
                  <li><a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Smell Training Guide</a></li>
                  <li><a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Find a Specialist</a></li>
                  <li><a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Support Groups</a></li>
                  <li><Link to="/articles" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">All Research Updates</Link></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}