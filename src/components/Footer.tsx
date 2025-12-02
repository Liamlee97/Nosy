import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4 dark:bg-black">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left side - Branding */}
                    <div className="flex items-center space-x-2 mb-6 md:mb-0">
                        <img
                            src="/images/nosy-logo.png"
                            alt="Nosy Logo"
                            className="w-8 h-8 rounded-full"
                        />
                        <div>
                            <span className="text-xl font-bold">Nosy</span>
                            <p className="text-gray-400 text-sm">Smell science in plain language</p>
                        </div>
                    </div>

                    {/* Right side - Legal Links */}
                    <div className="flex space-x-6 text-sm text-gray-400">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
                    </div>
                </div>

                <Separator className="my-6 bg-gray-800" />

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <div>
                        © 2025 Nosy. All rights reserved.
                    </div>
                    <div className="mt-4 md:mt-0">
                        <span className="mr-4">🔬 Written by scientists</span>
                        <span className="mr-4">💡 For everyone</span>
                        <span>❤️ With empathy</span>
                    </div>
                </div>

                {/* Medical Disclaimer */}
                <div className="mt-6 p-4 bg-gray-800 rounded-lg dark:bg-gray-900">
                    <p className="text-xs text-gray-400 text-center">
                        <strong>Medical Disclaimer:</strong> This website provides educational information about olfactory research and conditions.
                        It is not intended as medical advice and should not replace consultation with qualified healthcare professionals.
                        Always consult your doctor for personalized medical guidance.
                    </p>
                </div>
            </div>
        </footer>
    );
}
