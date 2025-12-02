import { Suspense, lazy } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import { ThemeProvider } from './components/ThemeProvider';

// Lazy load page components
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AllArticlesPage = lazy(() => import('./pages/AllArticlesPage'));
const AllConditionsPage = lazy(() => import('./pages/AllConditionsPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const ConditionDetailPage = lazy(() => import('./pages/ConditionDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const Science101Page = lazy(() => import('./pages/Science101Page'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/articles" element={<AllArticlesPage />} />
                <Route path="/conditions" element={<AllConditionsPage />} />
                <Route path="/article/:id" element={<ArticlePage />} />
                <Route path="/condition/:id" element={<ConditionDetailPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/science101" element={<Science101Page />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;