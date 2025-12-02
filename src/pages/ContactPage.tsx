import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SEO from '@/components/SEO';
import { Label } from '@/components/ui/label';
import { ModeToggle } from '@/components/ModeToggle';
import {
  ArrowLeft,
  Wind,
  Mail,
  Send,
  CheckCircle,
  MessageSquare,
  User,
  AtSign
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
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

        <div className="container mx-auto px-4 py-16 max-w-2xl text-center">
          <div className="mb-8">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">Message Sent Successfully!</h1>
            <p className="text-lg text-gray-600 mb-8 dark:text-gray-400">
              Thank you for reaching out to us. We've received your message and will get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-4">
            <Button onClick={() => setIsSubmitted(false)} size="lg">
              Send Another Message
            </Button>
            <div>
              <Link to="/">
                <Button variant="outline" size="lg">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <SEO
        title="Contact Us - Nosy"
        description="Get in touch with the Nosy team. We'd love to hear from you."
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

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <Card className="dark:bg-slate-900 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl dark:text-white">
              <MessageSquare className="w-6 h-6 mr-3 text-blue-600" />
              Send us a Message
            </CardTitle>
            <CardDescription className="dark:text-gray-400">
              Whether you have questions, suggestions, or feedback, we're here to help.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center dark:text-white">
                  <User className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={errors.name ? 'border-red-500' : 'dark:bg-slate-950 dark:border-slate-700'}
                />
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center dark:text-white">
                  <AtSign className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={errors.email ? 'border-red-500' : 'dark:bg-slate-950 dark:border-slate-700'}
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <Label htmlFor="subject" className="flex items-center dark:text-white">
                  <Mail className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                  Subject *
                </Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className={errors.subject ? 'border-red-500' : 'dark:bg-slate-950 dark:border-slate-700'}
                />
                {errors.subject && (
                  <p className="text-sm text-red-600">{errors.subject}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center dark:text-white">
                  <MessageSquare className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                  Message *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your question, suggestion, or feedback..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={errors.message ? 'border-red-500' : 'dark:bg-slate-950 dark:border-slate-700'}
                />
                {errors.message && (
                  <p className="text-sm text-red-600">{errors.message}</p>
                )}
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Minimum 10 characters ({formData.message.length}/10)
                </p>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Additional Contact Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="dark:bg-slate-900 dark:border-slate-800">
            <CardHeader>
              <CardTitle className="text-lg dark:text-white">Quick Questions?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4 dark:text-gray-400">
                For quick questions or feedback, you can also reach us through our social media channels
                or check our FAQ section for common answers.
              </p>
              <div className="space-y-2">
                <Link to="/science101">
                  <Button variant="outline" size="sm" className="w-full">
                    Visit Science 101
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn About Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-slate-900 dark:border-slate-800">
            <CardHeader>
              <CardTitle className="text-lg dark:text-white">Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4 dark:text-gray-400">
                We typically respond to messages within 24-48 hours during business days.
                For urgent matters, please mention "URGENT" in your subject line.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg dark:bg-blue-900/20">
                <p className="text-blue-800 text-sm dark:text-blue-300">
                  <strong>Note:</strong> This website provides educational information only.
                  For medical emergencies, please contact your healthcare provider immediately.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}