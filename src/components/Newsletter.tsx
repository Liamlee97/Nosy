import { useEffect, useRef } from 'react';

export default function Newsletter() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.dataset.uid = '3aa3ff6f2b';
        script.src = 'https://nosy.kit.com/3aa3ff6f2b/index.js';

        if (containerRef.current) {
            containerRef.current.appendChild(script);
        }

        return () => {
            if (containerRef.current && containerRef.current.contains(script)) {
                containerRef.current.removeChild(script);
            }
        };
    }, []);

    return (
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <div className="container mx-auto max-w-4xl text-center">
                <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
                <p className="text-xl opacity-90 mb-8">
                    Get monthly summaries of the latest smell research and treatment advances
                </p>
                <div ref={containerRef} className="min-h-[100px] flex justify-center" />
            </div>
        </section>
    );
}
