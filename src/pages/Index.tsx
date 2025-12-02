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
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 dark:bg-slate-950/80 dark:border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <Wind className="text-white w-5 h-5" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Nosy</h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">Smell science in plain language</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/articles" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Research News</Link>
              <Link to="/conditions" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Conditions</Link>
              <Link to="/science101" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Science 101</Link>
              <Link to="/community" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Community</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Contact</Link>
              <ModeToggle />
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <ModeToggle />
              <Button variant="outline" size="sm">
                Menu
              </Button>
            </div>
          </div>
        </div>
      </header>

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
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
              <p className="text-xl opacity-90 mb-8">
                Get monthly summaries of the latest smell research and treatment advances
              </p>
            </div>

            <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white text-gray-900 border-0"
                  aria-label="Email address"
                />
                <Button type="submit" variant="secondary">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-3">
                No spam, unsubscribe anytime. Read our privacy policy.
              </p>
            </form>
          </div>
        </section>


      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 dark:bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left side - Branding */}
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <Wind className="text-white w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold">Nosy</span>
                <p className="text-gray-400 text-sm">Smell science in plain language</p>
              </div>
            </div>

            {/* Right side - Legal Links */}
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>

          <Separator className="my-6 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>
              © 2025 Nosy. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <span className="mr-4">🔬 Written by scientists</span>
              <span className="mr-4">💡 For everyone</span>
              <span>❤️ With empathy</span>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="mt-6 p-4 bg-gray-800 rounded-lg dark:bg-gray-900">
            <p className="text-xs text-gray-400 text-center">
              <strong>Medical Disclaimer:</strong> This website provides educational information about olfactory research and conditions.
              It is not intended as medical advice and should not replace consultation with qualified healthcare professionals.
              Always consult your doctor for personalized medical guidance.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}