import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SEO from '@/components/SEO';
import { ModeToggle } from '@/components/ModeToggle';
import {
  Search,
  Calendar,
  Clock,
  ArrowLeft,
  Filter,
  Wind
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { getAllArticles } from '@/data/articles/index';

const categories = ["All", "Fascinating History", "Clinical Trials Explained", "Research Papers Explained"];

export default function AllArticlesPage() {
  const [allArticles, setAllArticles] = useState(getAllArticles());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [filteredArticles, setFilteredArticles] = useState(getAllArticles());

  // Removed useEffect fetch since we now have synchronous data

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterArticles(query, selectedCategory, sortOrder);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    filterArticles(searchQuery, category, sortOrder);
  };

  const handleSortChange = (value: 'newest' | 'oldest') => {
    setSortOrder(value);
    filterArticles(searchQuery, selectedCategory, value);
  };

  const filterArticles = (query: string, category: string, sort: 'newest' | 'oldest') => {
    let filtered = [...allArticles];

    if (category !== 'All') {
      filtered = filtered.filter(article => article.category === category);
    }

    if (query.trim()) {
      filtered = filtered.filter(article =>
        (article.title && article.title.toLowerCase().includes(query.toLowerCase())) ||
        (article.excerpt && article.excerpt.toLowerCase().includes(query.toLowerCase())) ||
        (article.tags && article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())))
      );
    }

    filtered.sort((a, b) => {
      const dateA = new Date(a.publishDate).getTime();
      const dateB = new Date(b.publishDate).getTime();
      return sort === 'newest' ? dateB - dateA : dateA - dateB;
    });

    setFilteredArticles(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <SEO
        title="Research News & Articles - Nosy"
        description="Browse the latest olfactory research and news translated into plain language."
      />
      <Header />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
            All Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
            Explore our complete collection of research news, condition guides, and treatment information
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 pr-4 py-2 dark:bg-slate-900 dark:border-slate-700 dark:text-white"
              />
            </div>
            <div className="w-full md:w-48">
              <Select value={sortOrder} onValueChange={(value: 'newest' | 'oldest') => handleSortChange(value)}>
                <SelectTrigger className="dark:bg-slate-900 dark:border-slate-700 dark:text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryFilter(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredArticles.length} of {allArticles.length} articles
            {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link key={article.id} to={`/article/${article.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col dark:bg-slate-900 dark:border-slate-800">
                  <CardHeader className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="dark:bg-slate-800 dark:text-gray-300">{article.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readingTime} min
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-3 dark:text-gray-400">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.publishDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                        <span className="text-xs">By {article.author}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {article.tags && article.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs dark:border-slate-700 dark:text-gray-400">
                            {tag}
                          </Badge>
                        ))}
                        {article.tags && article.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs dark:border-slate-700 dark:text-gray-400">
                            +{article.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          // No Results State
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white">No articles found</h3>
              <p className="text-gray-600 mb-4 dark:text-gray-400">
                Try adjusting your search terms or category filter to find what you're looking for.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setFilteredArticles(allArticles);
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}

        {/* Load More Button (for future pagination) */}
        {filteredArticles.length > 0 && filteredArticles.length >= 6 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div >
  );
}