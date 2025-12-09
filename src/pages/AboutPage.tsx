import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import SEO from '@/components/SEO';
import { ModeToggle } from '@/components/ModeToggle';
import {
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
  ArrowRight,
  Smile,
  Network
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <SEO
        title="About Us - Nosy"
        description="Learn about our mission to translate smell science into plain language for the global smell loss community."
      />
      {/* Header */}
      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
            About Nosy
          </h1>
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
                    <Lightbulb className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Explain complex science in simple terms</span>
                  </li>
                  <li className="flex items-start">
                    <Network className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
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
                    <Target className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Scientific accuracy and integrity</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Accessibility for all audiences</span>
                  </li>
                  <li className="flex items-start">
                    <Smile className="w-5 h-5 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Spread hope through knowledge</span>
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
              {/* Profile Picture */}
              <div className="md:col-span-1">
                <div className="aspect-square rounded-lg overflow-hidden border-2 border-gray-200 dark:border-slate-700">
                  <img
                    src="/images/Headshot photo 2.jpg"
                    alt="Liam Seungjin Lee"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <div className="text-sm text-gray-500 mb-2 dark:text-gray-400">Connect</div>
                  <div className="flex justify-center space-x-4">
                    <a href="https://www.linkedin.com/in/lsl97" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="p-2">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio Content */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">Liam Seungjin Lee</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 dark:text-gray-300">
                    I am a medical doctor early in my career, and I'm passionate about olfactory research.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4 dark:text-gray-300">
                    We are living in exciting times as the field of olfaction is growing, but there is still a massive amount left to discover. I'm eager to share this evolving knowledge with the global olfactory disorder community.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4 dark:text-gray-300">
                    My hope is that at least one person finds this website helpful or enjoyable (or both!). For me, that is absolutely enough.
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
                          <div className="text-sm text-blue-700 dark:text-blue-400 space-y-2">
                            <div>
                              <span className="font-medium block">MBR (2024-2026)</span>
                              <span className="text-xs opacity-80 block">Tufts University, Boston, USA</span>
                              <span className="text-xs opacity-80 italic block">Graduate Student under Prof. James Schwob and Dr. Brian Lin</span>
                            </div>
                            <div>
                              <span className="font-medium block">MBChB (2016-2022)</span>
                              <span className="text-xs opacity-80">The University of Edinburgh, Edinburgh, UK</span>
                            </div>
                          </div>
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
                          <div className="text-sm text-green-700 dark:text-green-400 space-y-2">
                            <div>
                              <span className="font-medium block">Academic Foundation Doctor (2022-2024)</span>
                              <span className="text-xs opacity-80 block">Norfolk and Norwich University Hospital, Norwich, UK</span>
                              <span className="text-xs opacity-80 italic">Member of Rhinology Research Group under Prof. Philpott</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
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
      <Footer />
    </div>
  );
}