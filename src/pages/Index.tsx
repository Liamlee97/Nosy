import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import ScrollToTop from '@/components/ScrollToTop';
import { ModeToggle } from '@/components/ModeToggle';
import Citation from '@/components/Citation';
import GlobalSearch from '@/components/GlobalSearch';
import { getAllArticles } from '@/data/articles/index';
import {
  Search,
  Mail,
  Calendar,
  Clock,
  ArrowRight,
  Heart,
  Users,
  BookOpen,
  Lightbulb,
  Wind
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';



export default function HomePage() {
  const [email, setEmail] = useState('');

  // Get latest 3 articles sorted by date
  const featuredArticles = getAllArticles()
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 3);

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    alert('Thank you for subscribing! Please check your email to confirm.');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <SEO
        title="Nosy - Smell Science in Plain Language"
        description="Translating olfactory research into accessible content for people with smell disorders. Research news and insights for the global smell loss community."
      />
      <ScrollToTop />
      {/* Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
                Getting
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Nosy </span>
                About Smell Science
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto dark:text-gray-300">
                Research news and insights in plain language for the global smell loss community.
              </p>
            </motion.div>

            {/* Search Bar */}
            <GlobalSearch />

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <Card className="text-center hover:shadow-md transition-shadow dark:bg-slate-900 dark:border-slate-800">
                <CardContent className="pt-6">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    ~1 in 5
                    <Citation href="https://pubmed.ncbi.nlm.nih.gov/32746612/" number={1} />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">People with smell loss globally</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-md transition-shadow dark:bg-slate-900 dark:border-slate-800">
                <CardContent className="pt-6">
                  <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Weekly</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Research updates</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-md transition-shadow dark:bg-slate-900 dark:border-slate-800">
                <CardContent className="pt-6">
                  <Lightbulb className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Plain</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Language explanations</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Featured Articles */}
        <section id="research" className="py-16 px-4 bg-white dark:bg-slate-950">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">Latest Research News</h3>
              <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
                Stay updated with the latest olfactory research translated into accessible language
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full dark:bg-slate-900 dark:border-slate-800">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="dark:bg-slate-800 dark:text-gray-300">{article.category}</Badge>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readingTime} min
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight dark:text-white">{article.title}</CardTitle>
                      <CardDescription className="text-sm dark:text-gray-400">{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.publishDate).toLocaleDateString()}
                        </div>
                        <Link to={`/article/${article.id}`}>
                          <Button variant="ghost" size="sm" className="dark:text-blue-400 dark:hover:text-blue-300">
                            Read More <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs dark:border-slate-700 dark:text-gray-400">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/articles">
                <Button size="lg">
                  View All Articles <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        {/* Newsletter Signup */}
        <Newsletter />


      </main>

      {/* Footer */}
      {/* Footer */}
      <Footer />
    </div>
  );
}