import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import SEO from '@/components/SEO';
import { ModeToggle } from '@/components/ModeToggle';
import {
  ArrowLeft,
  Wind,
  Heart,
  Users,
  BookOpen,
  Lightbulb,
  Target,
  Globe,
  Mail,
  Linkedin,
  User,
  GraduationCap,
  Briefcase,
  Shield,
  ArrowRight
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <SEO
        title="About Us - Nosy"
        description="Learn about our mission to translate smell science into plain language for the global smell loss community."
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

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
            About Nosy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
            Bridging the gap between complex olfactory research and the people who need it most
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-12 dark:bg-slate-900 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl dark:text-white">
              <Target className="w-6 h-6 mr-3 text-blue-600" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed dark:text-gray-300">
              Nosy exists to translate complex olfactory research into accessible, plain-language information
              for the global smell loss community. We believe that everyone deserves to understand the science
              behind their condition and the latest treatment advances.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 dark:text-white">What We Do</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <BookOpen className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Translate research papers into readable articles</span>
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Explain complex science in simple terms</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Connect patients with evidence-based information</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="w-5 h-5 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Serve the global olfactory disorder community</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 dark:text-white">Our Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Empathy-driven communication</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Scientific accuracy and integrity</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Accessibility for all audiences</span>
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Hope through knowledge</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-12 dark:bg-slate-800" />

        {/* Meet the Creator Section */}
        <Card className="mb-12 dark:bg-slate-900 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl dark:text-white">
              <User className="w-6 h-6 mr-3 text-green-600" />
              Meet the Creator
            </CardTitle>
            <CardDescription className="dark:text-gray-400">
              Learn about the person behind Nosy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Profile Picture Placeholder */}
              <div className="md:col-span-1">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center border-2 border-gray-200 dark:from-blue-900/30 dark:to-green-900/30 dark:border-slate-700">
                  <User className="w-24 h-24 text-gray-400 dark:text-gray-500" />
                </div>
                <div className="mt-4 text-center">
                  <div className="text-sm text-gray-500 mb-2 dark:text-gray-400">Connect</div>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="sm" className="p-2">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="p-2">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Bio Content */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">[Creator Name]</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 dark:text-gray-300">
                    [This is where your personal bio will go. You can describe your background,
                    what motivated you to create Nosy, your experience with smell disorders or research,
                    and your vision for the platform. This section will be customized with your
                    actual content.]
                  </p>
                  <p className="text-gray-700 leading-relaxed dark:text-gray-300">
                    [Additional paragraphs about your professional background, education,
                    personal connection to the cause, or other relevant information can be added here.]
                  </p>
                </div>

                {/* Background Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="border-blue-100 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-900/50">
                    <CardContent className="pt-4">
                      <div className="flex items-center space-x-3">
                        <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <div>
                          <div className="font-semibold text-blue-900 dark:text-blue-300">Education</div>
                          <div className="text-sm text-blue-700 dark:text-blue-400">[Your educational background]</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-100 bg-green-50 dark:bg-green-900/20 dark:border-green-900/50">
                    <CardContent className="pt-4">
                      <div className="flex items-center space-x-3">
                        <Briefcase className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <div>
                          <div className="font-semibold text-green-900 dark:text-green-300">Experience</div>
                          <div className="text-sm text-green-700 dark:text-green-400">[Your professional experience]</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Personal Mission */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-100 dark:from-purple-900/20 dark:to-blue-900/20 dark:border-purple-900/50">
                  <h4 className="font-semibold text-purple-900 mb-2 dark:text-purple-300">Personal Mission</h4>
                  <p className="text-purple-800 text-sm dark:text-purple-400">
                    "[This is where you can include a personal mission statement or quote about
                    why you created Nosy and what you hope to achieve for the smell disorder community.]"
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why This Matters Section */}
        <Card className="mb-12 dark:bg-slate-900 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl dark:text-white">
              <Heart className="w-6 h-6 mr-3 text-red-600" />
              Why This Matters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">The Need</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Millions worldwide live with smell disorders
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    COVID-19 dramatically increased prevalence
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Research advances need accessible translation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Patients deserve understandable information
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our Impact</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Empowering informed healthcare decisions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Reducing anxiety through education
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Building community through shared knowledge
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Advancing awareness and research support
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Get Involved Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white dark:from-blue-700 dark:to-green-700">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
            <p className="text-lg opacity-90 mb-6">
              Help us build a better resource for the smell disorder community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Suggest Topics
              </Button>
              <Button variant="secondary" size="lg">
                Share Feedback
              </Button>
              <Button variant="secondary" size="lg">
                Join Newsletter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4 dark:text-gray-400">
            Have questions or suggestions? We'd love to hear from you.
          </p>
          <Link to="/contact">
            <Button variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}