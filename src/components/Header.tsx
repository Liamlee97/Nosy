import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';
import { Menu } from 'lucide-react';

export default function Header() {
    return (
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 dark:bg-slate-950/80 dark:border-slate-800">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            src="/images/nosy-logo.png"
                            alt="Nosy Logo"
                            className="w-8 h-8 rounded-full"
                        />
                        <div>
                            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Nosy</h1>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-6">
                        <Link to="/articles" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Research News</Link>
                        <Link to="/conditions" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Conditions</Link>
                        <Link to="/science101" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Science 101</Link>
                        <Link to="/community" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Community</Link>
                        <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">About</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Contact</Link>
                        <ModeToggle />
                    </nav>

                    <div className="flex items-center gap-2 md:hidden">
                        <ModeToggle />
                        <Button variant="outline" size="sm">
                            <Menu className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
