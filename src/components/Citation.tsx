import React from 'react';

interface CitationProps {
    href: string;
    number: number;
}

export const Citation: React.FC<CitationProps> = ({ href, number }) => {
    return (
        <sup className="text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer ml-0.5">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Source ${number}`}
                title="View source study"
            >
                [{number}]
            </a>
        </sup>
    );
};

export default Citation;
