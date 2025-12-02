import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import SEO from '@/components/SEO';
import { ModeToggle } from '@/components/ModeToggle';
import {
  ArrowLeft,
  Wind,
  ExternalLink,
  Users,
  Globe,
  Heart,
  BookOpen
} from 'lucide-react';

const partnerOrganizations = [
  {
    name: "AbScent",
    description: "UK charity supporting people with smell loss through community and resources. They provide practical support, research funding, and advocacy for those affected by anosmia and parosmia.",
    website: "https://abscent.org",
    focus: "Patient Support & Community",
    established: "2019",
    color: "blue"
  },
  {
    name: "Fifth Sense",
    description: "Charity providing support and information for smell and taste disorders. They offer resources, support groups, and work to raise awareness about chemosensory conditions.",
    website: "https://fifthsense.org.uk",
    focus: "Education & Support",
    established: "2012",
    color: "green"
  },
  {
    name: "Monell Chemical Senses Center",
    description: "Leading research institute advancing the understanding of taste and smell. They conduct cutting-edge research and translate findings into practical applications.",
    website: "https://monell.org",
    focus: "Scientific Research",
    established: "1968",
    color: "purple"
  },
  {
    name: "Global Consortium for Chemosensory Research",
    description: "International network of scientists studying chemosensory disorders. They facilitate collaboration and knowledge sharing among researchers worldwide.",
    website: "#",
    focus: "Research Collaboration",
    established: "2020",
    color: "orange"
  }
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <SEO
        title="Community & Support - Nosy"
        description="Connect with the global smell loss community. Find support groups, events, and shared stories."
      />
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 dark:bg-slate-950/80 dark:border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <Wind className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">Nosy</span>
              </div>
            </div>
            <ModeToggle />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
            Our Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-400">
            We collaborate with leading organizations in the smell disorder community to advance research,
            support patients, and raise awareness about olfactory conditions.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-900/50">
            <CardContent className="pt-6">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2 dark:text-blue-400" />
              <div className="text-2xl font-bold text-blue-900 dark:text-blue-300">4</div>
              <div className="text-sm text-blue-700 dark:text-blue-400">Partner Organizations</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900/50">
            <CardContent className="pt-6">
              <Globe className="w-8 h-8 text-green-600 mx-auto mb-2 dark:text-green-400" />
              <div className="text-2xl font-bold text-green-900 dark:text-green-300">Global</div>
              <div className="text-sm text-green-700 dark:text-green-400">International Reach</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-900/50">
            <CardContent className="pt-6">
              <BookOpen className="w-8 h-8 text-purple-600 mx-auto mb-2 dark:text-purple-400" />
              <div className="text-2xl font-bold text-purple-900 dark:text-purple-300">50+</div>
              <div className="text-sm text-purple-700 dark:text-purple-400">Years Combined Experience</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-900/50">
            <CardContent className="pt-6">
              <Heart className="w-8 h-8 text-orange-600 mx-auto mb-2 dark:text-orange-400" />
              <div className="text-2xl font-bold text-orange-900 dark:text-orange-300">1M+</div>
              <div className="text-sm text-orange-700 dark:text-orange-400">People Supported</div>
            </CardContent>
          </Card>
        </div>

        {/* Partner Organizations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8 dark:text-white">Partner Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerOrganizations.map((org, index) => (
              <Card key={index} className={`hover:shadow-lg transition-all duration-300 border-l-4 dark:bg-slate-900 dark:border-slate-800 ${org.color === 'blue' ? 'border-l-blue-500 hover:border-l-blue-600' :
                org.color === 'green' ? 'border-l-green-500 hover:border-l-green-600' :
                  org.color === 'purple' ? 'border-l-purple-500 hover:border-l-purple-600' :
                    'border-l-orange-500 hover:border-l-orange-600'
                }`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl dark:text-white">{org.name}</CardTitle>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${org.color === 'blue' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                      org.color === 'green' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                        org.color === 'purple' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
                          'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                      }`}>
                      Est. {org.established}
                    </div>
                  </div>
                  <CardDescription className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {org.focus}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed dark:text-gray-300">
                    {org.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <a
                      href={org.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-sm font-medium hover:underline ${org.color === 'blue' ? 'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300' :
                        org.color === 'green' ? 'text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300' :
                          org.color === 'purple' ? 'text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300' :
                            'text-orange-600 hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-300'
                        }`}
                    >
                      Visit Website
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Collaboration Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white dark:from-blue-700 dark:to-green-700">
          <CardContent className="pt-8 pb-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Are you part of an organization working in olfactory research or patient support?
              We'd love to explore collaboration opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  Get in Touch
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-600 dark:hover:bg-slate-900 dark:hover:text-blue-400">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Mission Statement */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Our Collaborative Mission</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-400">
            Together, we work to advance understanding of smell disorders, support those affected,
            and translate cutting-edge research into accessible information that empowers patients
            and their families to make informed decisions about their care.
          </p>
        </div>
      </div>
    </div>
  );
}