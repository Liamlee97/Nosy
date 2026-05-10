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

import { smellFacts, smellProcess, misconceptions } from '@/data/science101';

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
                <p className="text-sm text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: fact.description }} />
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
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg dark:from-purple-900/20 dark:to-blue-900/20">
                    <h4 className="font-semibold text-gray-900 mb-3 dark:text-white">Location & Structure</h4>
                    <p className="text-gray-700 mb-4 dark:text-gray-300">
                      The olfactory epithelium is located high up in your nasal cavity, behind the bridge of your nose.
                      It's a thin layer of specialized tissue, only about 10 cm<sup>2</sup> across both nostrils combined, but packed
                      with millions of smell-detecting neurons. <sup><a href='https://www.ncbi.nlm.nih.gov/books/NBK11032/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>[5]</a></sup>
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
                        <h5 className="font-medium text-gray-900 dark:text-white">Olfactory Epithelium Layer</h5>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Contains olfactory sensory neurons, supporting cells, and basal cells that detect odors and generate nerve signals.</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 dark:bg-green-900/30">
                          <Zap className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h5 className="font-medium text-gray-900 dark:text-white">Olfactory Nerve Fibers</h5>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Bundles of axons that transmit olfactory information from the olfactory sensory neurons to the olfactory bulb in the brain.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link to="/interactive-science" className="block group">
                      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 p-1 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.01] active:scale-[0.99]">
                        <div className="relative rounded-[15px] bg-white dark:bg-slate-950 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
                          {/* Abstract ambient circles background */}
                          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
                          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

                          <div className="relative flex-1 space-y-3">
                            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                              Cell Types in the Olfactory Epithelium
                            </h4>
                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                              Visit our Interactive Basic Science page for a visual breakdown and detailed information on each cell type in the olfactory epithelium.
                            </p>
                          </div>
                          <div className="relative shrink-0">
                            <Button size="lg" className="rounded-full h-12 px-6 bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition-all group-hover:translate-y-[-1px]">
                              Goto page
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
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
                    Unlike most other senses, smell takes a relatively direct route to brain areas involved in emotion and memory, skipping the typical thalamus relay. This wiring helps explain why smells can trigger such intense feelings and vivid memories.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="relative border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-900/50">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg text-blue-900 dark:text-blue-300">
                        <span className="flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-blue-600 text-white text-xs font-bold">1</span>
                        Olfactory Bulb
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-800 text-sm dark:text-blue-200">
                        The first stop for smell signals. Here, input from millions of smell receptors is organized into patterns and processed before being sent on to other brain regions.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="relative border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-900/50">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg text-green-900 dark:text-green-300">
                        <span className="flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-green-600 text-white text-xs font-bold">2</span>
                        Piriform Cortex
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-green-800 text-sm dark:text-green-200">
                        The primary smell cortex. It receives input from the olfactory bulb and helps form the basic ‘odor object’ (what the smell is) before that information spreads to emotion, memory, and decision‑making areas.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="relative border-purple-200 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-900/50">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg text-purple-900 dark:text-purple-300">
                        <span className="flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-purple-600 text-white text-xs font-bold">3</span>
                        Limbic System
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-purple-800 text-sm dark:text-purple-200">
                        The emotional brain. Smell signals reach limbic areas like the amygdala and hippocampus, which helps explain why scents can instantly stir strong feelings and vivid memories.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="relative border-orange-200 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-900/50">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg text-orange-900 dark:text-orange-300">
                        <span className="flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-orange-600 text-white text-xs font-bold">4</span>
                        Orbitofrontal Cortex
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-orange-800 text-sm dark:text-orange-200">
                        A key site for conscious smell experience. This area helps you identify what you’re smelling and judge whether it’s pleasant, unpleasant, or worth paying attention to.
                      </p>
                    </CardContent>
                  </Card>
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
                            <span className="text-green-700 font-medium dark:text-green-400" dangerouslySetInnerHTML={{ __html: `Truth: ${item.truth}` }} />
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
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}