import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import SEO from '@/components/SEO';
import { ModeToggle } from '@/components/ModeToggle';
import {
  TrendingUp,
  AlertTriangle,
  Stethoscope,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock,
  Users
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { conditionsData } from '@/data/conditions';

export default function ConditionDetailPage() {
  const { id } = useParams();
  const condition = id ? conditionsData[Number(id) as keyof typeof conditionsData] : undefined;

  if (!condition) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <SEO title="Condition Not Found - Nosy" description="The requested condition could not be found." />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Condition Not Found</h1>
          <Link to="/conditions">
            <Button>Back to All Conditions</Button>
          </Link>
        </div>
      </div>
    );
  }

  const severityColors = {
    "High": "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-900",
    "Moderate to High": "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-900",
    "Moderate": "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-900",
    "Mild to Moderate": "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-900",
    "Variable": "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-900",
    "Mild": "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-900"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <SEO
        title={`${condition.name} - Nosy`}
        description={condition.shortDescription}
      />
      {/* Header */}
      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Condition Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Badge variant="outline" className={severityColors[condition.severity as keyof typeof severityColors]}>
              {condition.severity} Severity
            </Badge>
            <Badge variant="secondary" className="dark:bg-slate-800 dark:text-gray-300">{condition.category}</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
            {condition.name}
          </h1>

          <p className="text-xl text-gray-600 mb-6 dark:text-gray-300">
            {condition.shortDescription}
          </p>

          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Users className="w-4 h-4 mr-1" />
            Affects {condition.prevalence}
          </div>
        </div>

        <Separator className="mb-8 dark:bg-slate-800" />

        {/* Overview */}
        <Card className="mb-8 dark:bg-slate-900 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-2xl dark:text-white">Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              {condition.fullDescription}
            </p>
          </CardContent>
        </Card>

        {/* Symptoms */}
        <Card className="mb-8 dark:bg-slate-900 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl dark:text-white">
              <AlertTriangle className="w-6 h-6 mr-3 text-orange-600" />
              Symptoms
            </CardTitle>
            <CardDescription className="dark:text-gray-400">
              Common signs and symptoms of {condition.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {condition.symptoms.map((symptom, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{symptom}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Causes */}
        <Card className="mb-8 dark:bg-slate-900 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl dark:text-white">
              <XCircle className="w-6 h-6 mr-3 text-red-600" />
              Causes
            </CardTitle>
            <CardDescription className="dark:text-gray-400">
              What can lead to {condition.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {condition.causes.map((cause, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{cause}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Treatments */}
        <Card className="mb-8 dark:bg-slate-900 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl dark:text-white">
              <Stethoscope className="w-6 h-6 mr-3 text-blue-600" />
              Treatment Options
            </CardTitle>
            <CardDescription className="dark:text-gray-400">
              Available treatments and management strategies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {condition.treatments.map((treatment, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{treatment}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Prognosis */}
        <Card className="mb-8 dark:bg-slate-900 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl dark:text-white">
              <TrendingUp className="w-6 h-6 mr-3 text-green-600" />
              Prognosis & Outlook
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              {condition.prognosis}
            </p>
          </CardContent>
        </Card>

        {/* Risk Factors & When to See Doctor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="dark:bg-slate-900 dark:border-slate-800">
            <CardHeader>
              <CardTitle className="text-lg dark:text-white">Risk Factors</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {condition.riskFactors.map((factor, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{factor}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="dark:bg-slate-900 dark:border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center text-lg dark:text-white">
                <Clock className="w-5 h-5 mr-2" />
                When to See a Doctor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {condition.whenToSeeDoctor.map((reason, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{reason}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Medical Disclaimer */}
        <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg mb-8 dark:bg-yellow-900/10 dark:border-yellow-900/30">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2 dark:text-yellow-500">Important Medical Disclaimer</h3>
              <p className="text-sm text-yellow-800 dark:text-yellow-600">
                This information is for educational purposes only and should not replace professional medical advice.
                If you're experiencing symptoms of {condition.name}, please consult with a qualified healthcare provider
                for proper diagnosis and treatment recommendations. Each person's condition is unique and may require personalized care.
              </p>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <Card className="dark:bg-slate-900 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="dark:text-white">Related Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Link to="/articles">
                <Button variant="outline">
                  Related Articles
                </Button>
              </Link>
              <Link to="/conditions">
                <Button variant="outline">
                  Other Conditions
                </Button>
              </Link>
              <Button variant="outline">
                Find a Specialist
              </Button>
              <Button variant="outline">
                Support Groups
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}