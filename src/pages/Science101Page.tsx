import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import SEO from '@/components/SEO';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ModeToggle } from '@/components/ModeToggle';
import {
  Brain,
  Eye,
  Zap,
  Lightbulb,
  Microscope,
  Target,
  ArrowRight,
  CheckCircle,
  XCircle,
  AlertCircle,
  Layers,
  Activity,
  Sparkles,
  BookOpen
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { smellFacts, cellTypes, smellProcess, misconceptions } from '@/data/science101';

export default function Science101Page() {
  const [activeTab, setActiveTab] = useState('basics');

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <SEO
        title="Smell Science 101 - Nosy"
        description="The basics of how we smell and why it matters. Educational resources for everyone."
      />
      {/* Header */}
      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Microscope className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Science 101</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-400">
            Discover the fascinating science behind your sense of smell - from molecules to memories
          </p>
        </div>

        {/* Fun Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {smellFacts.map((fact, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow dark:bg-slate-900 dark:border-slate-800">
              <CardContent className="pt-6">
                <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3 dark:text-blue-400" />
                <h3 className="font-bold text-gray-900 mb-2 dark:text-white">{fact.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{fact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 dark:bg-slate-900">
            <TabsTrigger value="basics">Basics</TabsTrigger>
            <TabsTrigger value="anatomy">Anatomy</TabsTrigger>
            <TabsTrigger value="process">How We Smell</TabsTrigger>
            <TabsTrigger value="brain">Brain Processing</TabsTrigger>
            <TabsTrigger value="myths">Myths & Facts</TabsTrigger>
          </TabsList>

          {/* Basics Tab */}
          <TabsContent value="basics" className="space-y-8">
            <Card className="dark:bg-slate-900 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl dark:text-white">
                  <Lightbulb className="w-6 h-6 mr-3 text-yellow-600 dark:text-yellow-400" />
                  Why Smell Matters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed dark:text-gray-300">
                  Your sense of smell is far more powerful and important than you might realize. It's your body's
                  chemical detection system, capable of identifying dangers, finding food, triggering memories,
                  and even influencing emotions and behavior.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Essential Functions:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Safety: Detecting smoke, gas leaks, spoiled food</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Nutrition: Enhancing taste and appetite</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Memory: Triggering powerful emotional memories</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Social: Recognizing people and environments</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg dark:bg-blue-900/20">
                    <h4 className="font-semibold text-blue-900 mb-3 dark:text-blue-300">Did You Know?</h4>
                    <p className="text-blue-800 text-sm dark:text-blue-200">
                      Smell is the only sense that bypasses the thalamus and connects directly to the
                      limbic system - the brain's emotional center. This is why certain smells can
                      instantly transport you back to childhood memories!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Anatomy Tab */}
          <TabsContent value="anatomy" className="space-y-8">
            <Card className="dark:bg-slate-900 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl dark:text-white">
                  <Microscope className="w-6 h-6 mr-3 text-purple-600 dark:text-purple-400" />
                  The Olfactory Epithelium
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  A specialized tissue about the size of a postage stamp that contains millions of smell-detecting cells
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg dark:from-purple-900/20 dark:to-blue-900/20">
                    <h4 className="font-semibold text-gray-900 mb-3 dark:text-white">Location & Structure</h4>
                    <p className="text-gray-700 mb-4 dark:text-gray-300">
                      The olfactory epithelium is located high up in your nasal cavity, behind the bridge of your nose.
                      It's a thin layer of specialized tissue, only about 1-2 square centimeters in area, but packed
                      with millions of smell-detecting neurons.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 dark:bg-purple-900/30">
                          <Layers className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h5 className="font-medium text-gray-900 dark:text-white">Mucus Layer</h5>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Dissolves odor molecules</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 dark:bg-blue-900/30">
                          <Activity className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h5 className="font-medium text-gray-900 dark:text-white">Cell Layer</h5>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Contains smell neurons</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 dark:bg-green-900/30">
                          <Zap className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h5 className="font-medium text-gray-900 dark:text-white">Nerve Layer</h5>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Carries signals to brain</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 dark:text-white">Cell Types in the Olfactory Epithelium</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {cellTypes.map((cell, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow dark:bg-slate-900 dark:border-slate-800">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg dark:text-white">{cell.name}</CardTitle>
                              <Badge className={cell.color}>{cell.lifespan}</Badge>
                            </div>
                            <CardDescription className="text-sm dark:text-gray-400">{cell.function}</CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <p className="text-sm text-gray-600 mb-2 dark:text-gray-400">
                              <strong>Location:</strong> {cell.location}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{cell.details}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Process Tab */}
          <TabsContent value="process" className="space-y-8">
            <Card className="dark:bg-slate-900 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl dark:text-white">
                  <ArrowRight className="w-6 h-6 mr-3 text-green-600 dark:text-green-400" />
                  The Journey from Molecule to Perception
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Follow the step-by-step process of how we detect and interpret smells
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {smellProcess.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2 mb-2">
                          <step.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <h4 className="font-semibold text-gray-900 dark:text-white">{step.title}</h4>
                        </div>
                        <p className="text-gray-700 mb-2 dark:text-gray-300">{step.description}</p>
                        <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg dark:bg-slate-800 dark:text-gray-400">{step.details}</p>
                      </div>
                      {index < smellProcess.length - 1 && (
                        <div className="flex-shrink-0 ml-6">
                          <ArrowRight className="w-6 h-6 text-gray-300 dark:text-gray-600" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Brain Processing Tab */}
          <TabsContent value="brain" className="space-y-8">
            <Card className="dark:bg-slate-900 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl dark:text-white">
                  <Brain className="w-6 h-6 mr-3 text-pink-600 dark:text-pink-400" />
                  How Your Brain Processes Smell
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg dark:from-pink-900/20 dark:to-purple-900/20">
                  <h4 className="font-semibold text-gray-900 mb-3 dark:text-white">The Olfactory Pathway</h4>
                  <p className="text-gray-700 mb-4 dark:text-gray-300">
                    Unlike other senses, smell has a direct highway to your brain's emotional and memory centers.
                    This unique pathway explains why smells can trigger such powerful emotional responses and vivid memories.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-900/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900 dark:text-blue-300">Olfactory Bulb</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-800 text-sm dark:text-blue-200">
                        The first stop for smell signals. Here, information from millions of smell receptors
                        is organized and processed before being sent to other brain regions.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-900/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-purple-900 dark:text-purple-300">Limbic System</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-purple-800 text-sm dark:text-purple-200">
                        The emotional brain. Smell signals go directly here, which is why certain scents
                        can instantly make you feel happy, sad, or nostalgic.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-900/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-green-900 dark:text-green-300">Hippocampus</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-green-800 text-sm dark:text-green-200">
                        The memory center. This connection explains why smells are such powerful memory
                        triggers - like how your grandmother's perfume can bring back childhood memories.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-900/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-orange-900 dark:text-orange-300">Orbitofrontal Cortex</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-orange-800 text-sm dark:text-orange-200">
                        Where conscious smell perception happens. This area helps you identify what you're
                        smelling and decide whether it's pleasant or unpleasant.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg dark:bg-yellow-900/20 dark:border-yellow-900/50">
                  <div className="flex items-start space-x-3">
                    <Sparkles className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0 dark:text-yellow-400" />
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-2 dark:text-yellow-300">The Smell-Memory Connection</h4>
                      <p className="text-yellow-800 text-sm dark:text-yellow-200">
                        The phenomenon where smells trigger vivid memories is called the "Proust Effect,"
                        named after the French author who wrote about how the smell of madeleines brought
                        back childhood memories. This happens because smell and memory pathways are so
                        closely connected in the brain.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Myths & Facts Tab */}
          <TabsContent value="myths" className="space-y-8">
            <Card className="dark:bg-slate-900 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl dark:text-white">
                  <AlertCircle className="w-6 h-6 mr-3 text-red-600 dark:text-red-400" />
                  Common Misconceptions About Smell
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Let's debunk some myths and set the record straight about your sense of smell
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {misconceptions.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="dark:border-slate-800">
                      <AccordionTrigger className="text-left dark:text-white">
                        <div className="flex items-start space-x-3">
                          <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-red-700 font-medium dark:text-red-400">Myth: {item.myth}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3 pl-8">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-green-700 font-medium dark:text-green-400">Truth: {item.truth}</span>
                          </div>
                          <p className="text-gray-700 bg-gray-50 p-4 rounded-lg dark:bg-slate-800 dark:text-gray-300">
                            <strong>Explanation:</strong> {item.explanation}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200 dark:from-blue-900/20 dark:to-green-900/20 dark:border-blue-900/50">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 dark:text-blue-300">Want to Learn More?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 mb-4 dark:text-blue-200">
                  Explore our research articles and condition guides to dive deeper into the fascinating world of smell science.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/articles">
                    <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/30">
                      Research Articles
                    </Button>
                  </Link>
                  <Link to="/conditions">
                    <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-100 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-900/30">
                      Smell Disorders
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}