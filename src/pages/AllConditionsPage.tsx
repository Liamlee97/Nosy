import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import { ModeToggle } from '@/components/ModeToggle';
import {
  Search,
  Filter,
  Users,
  AlertCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllConditions } from '@/data/conditions';

const categories = ["All", "Complete Loss", "Distorted Perception", "Phantom Perception", "Reduced Perception", "Viral-Related", "Congenital", "Age-Related"];

export default function AllConditionsPage() {
  const [allConditions] = useState(getAllConditions());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredConditions, setFilteredConditions] = useState(getAllConditions());

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterConditions(query, selectedCategory);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterConditions(searchQuery, category);
  };

  const filterConditions = (query: string, category: string) => {
    let filtered = allConditions;

    if (query) {
      const lowerQuery = query.toLowerCase();
      filtered = filtered.filter(condition =>
        condition.name.toLowerCase().includes(lowerQuery) ||
        condition.shortDescription.toLowerCase().includes(lowerQuery) ||
        condition.fullDescription.toLowerCase().includes(lowerQuery)
      );
    }

    if (category !== 'All') {
      filtered = filtered.filter(condition => condition.category === category);
    }

    setFilteredConditions(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <SEO
        title="All Conditions - Nosy"
        description="Browse our comprehensive guide to olfactory conditions, including Anosmia, Parosmia, and more."
      />

      {/* Header */}
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100 py-16 dark:bg-slate-950 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Olfactory Conditions</h1>
            <p className="text-xl text-gray-600 mb-8 dark:text-gray-400">
              A comprehensive guide to understanding different types of smell and taste disorders.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search conditions..."
                className="pl-12 py-6 text-lg rounded-full shadow-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar Filters */}
          <aside className="lg:w-1/4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24 dark:bg-slate-900 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="h-5 w-5 text-blue-600" />
                <h2 className="font-semibold text-gray-900 dark:text-white">Filter by Category</h2>
              </div>

              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedCategory === category
                      ? 'bg-blue-50 text-blue-700 font-medium dark:bg-blue-900/20 dark:text-blue-400'
                      : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-slate-800'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Conditions Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredConditions.length}</span> conditions
              </p>
            </div>

            {filteredConditions.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredConditions.map((condition) => (
                  <Link key={condition.id} to={`/condition/${condition.id}`}>
                    <Card className="h-full hover:shadow-md transition-shadow duration-300 cursor-pointer border-gray-100 overflow-hidden group dark:bg-slate-900 dark:border-slate-800">
                      <div className={`h-2 w-full bg-${condition.color}-500`} />
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-800 dark:text-gray-300">
                            {condition.category}
                          </Badge>
                          {condition.severity === "High" && (
                            <Badge variant="destructive" className="bg-red-100 text-red-700 hover:bg-red-200 border-0 dark:bg-red-900/30 dark:text-red-400">
                              High Severity
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400">
                          {condition.name}
                        </CardTitle>
                        <CardDescription className="text-base dark:text-gray-400">
                          {condition.shortDescription}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 line-clamp-3 mb-4 dark:text-gray-400">
                          {condition.fullDescription}
                        </p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Users className="h-4 w-4 mr-2 text-gray-400" />
                            <span>{condition.prevalence}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {condition.symptoms.slice(0, 3).map((symptom, idx) => (
                            <span key={idx} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-full border border-gray-100 dark:bg-slate-800 dark:border-slate-700 dark:text-gray-300">
                              {symptom}
                            </span>
                          ))}
                          {condition.symptoms.length > 3 && (
                            <span className="text-xs text-gray-400 px-2 py-1">
                              +{condition.symptoms.length - 3} more
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-100 dark:bg-slate-900 dark:border-slate-800">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-slate-800">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 dark:text-white">No conditions found</h3>
                <p className="text-gray-500 max-w-md mx-auto dark:text-gray-400">
                  We couldn't find any conditions matching your search criteria. Try adjusting your filters or search terms.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setFilteredConditions(allConditions);
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}

            {/* Medical Disclaimer */}
            <div className="mt-16 p-6 bg-yellow-50 border border-yellow-200 rounded-lg dark:bg-yellow-900/10 dark:border-yellow-900/30">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2 dark:text-yellow-500">Important Medical Disclaimer</h3>
                  <p className="text-sm text-yellow-800 dark:text-yellow-600">
                    This information is for educational purposes only and should not replace professional medical advice.
                    If you're experiencing smell disorders, please consult with a qualified healthcare provider for proper
                    diagnosis and treatment recommendations. Each person's condition is unique and may require personalized care.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}