import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-950">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-950 dark:to-slate-900">
        <div className="space-y-6 max-w-md">
          <div className="space-y-3">
            <h1 className="text-8xl font-bold text-blue-600 dark:text-blue-500">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Page Not Found</h2>
            <p className="text-muted-foreground dark:text-gray-400">The page you're looking for doesn't exist or may have been moved.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <a href="/">Return Home</a>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              Go Back
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
