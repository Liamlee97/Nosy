import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_LINKS = [
    { to: '/articles', label: 'Article Collection' },
    { to: '/clinical-trials', label: 'Clinical Trials' },
    { to: '/conditions', label: 'Conditions' },
    { to: '/science101', label: 'Science 101' },
    { to: '/interactive-science', label: 'Interactive Basic Science' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
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

                        {/* Desktop nav */}
                        <nav className="hidden md:flex items-center space-x-6">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <ModeToggle />
                        </nav>

                        {/* Mobile controls */}
                        <div className="flex items-center gap-2 md:hidden">
                            <ModeToggle />
                            <Button
                                variant="outline"
                                size="sm"
                                aria-label="Open menu"
                                aria-expanded={mobileOpen}
                                onClick={() => setMobileOpen(true)}
                            >
                                <Menu className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile menu overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            key="drawer"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 z-50 h-full w-72 bg-white dark:bg-slate-950 shadow-2xl flex flex-col md:hidden"
                        >
                            {/* Drawer header */}
                            <div className="flex items-center justify-between px-6 py-5 border-b dark:border-slate-800">
                                <Link
                                    to="/"
                                    className="flex items-center gap-2"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    <img src="/images/nosy-logo.png" alt="Nosy Logo" className="w-7 h-7 rounded-full" />
                                    <span className="text-lg font-bold text-gray-900 dark:text-white">Nosy</span>
                                </Link>
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    aria-label="Close menu"
                                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                                </button>
                            </div>

                            {/* Nav links */}
                            <nav className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
                                {NAV_LINKS.map((link, i) => (
                                    <motion.div
                                        key={link.to}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            to={link.to}
                                            onClick={() => setMobileOpen(false)}
                                            className="block px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
