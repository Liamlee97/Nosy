import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <Button
                onClick={scrollToTop}
                variant="secondary"
                size="icon"
                className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border border-gray-200"
                aria-label="Scroll to top"
            >
                <ArrowUp className="h-5 w-5 text-gray-700" />
            </Button>
        </div>
    );
}
