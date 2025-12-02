import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, Activity } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { getAllArticles } from '@/data/articles/index';
import { getAllConditions } from '@/data/conditions';
import { Article } from '@/data/articles/types';
import { Condition } from '@/data/conditions';

export default function GlobalSearch() {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [results, setResults] = useState<{
        articles: Article[];
        conditions: Condition[];
    }>({ articles: [], conditions: [] });

    const navigate = useNavigate();
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);

    // Search logic
    useEffect(() => {
        if (query.trim().length === 0) {
            setResults({ articles: [], conditions: [] });
            setIsOpen(false);
            return;
        }

        const searchTerm = query.toLowerCase();

        const filteredArticles = getAllArticles().filter(article =>
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        ).slice(0, 5); // Limit to 5 results

        const filteredConditions = getAllConditions().filter(condition =>
            condition.name.toLowerCase().includes(searchTerm) ||
            condition.shortDescription.toLowerCase().includes(searchTerm) ||
            condition.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm))
        ).slice(0, 5); // Limit to 5 results

        setResults({ articles: filteredArticles, conditions: filteredConditions });
        setIsOpen(true);
    }, [query]);

    const handleSelect = (path: string) => {
        navigate(path);
        setIsOpen(false);
        setQuery('');
    };

    return (
        <div ref={wrapperRef} className="relative max-w-md mx-auto mb-8">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                    type="text"
                    placeholder="Search articles, conditions, treatments..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => query.length > 0 && setIsOpen(true)}
                    className="pl-10 pr-4 py-2 dark:bg-slate-900 dark:border-slate-700 dark:text-white w-full"
                    aria-label="Search articles and conditions"
                />
            </div>

            {isOpen && (results.articles.length > 0 || results.conditions.length > 0) && (
                <Card className="absolute w-full mt-2 z-50 max-h-96 overflow-y-auto dark:bg-slate-900 dark:border-slate-700 shadow-xl">
                    <CardContent className="p-2">
                        {results.articles.length > 0 && (
                            <div className="mb-2">
                                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 px-2 py-1 uppercase tracking-wider">
                                    In Articles
                                </h4>
                                {results.articles.map(article => (
                                    <div
                                        key={article.id}
                                        onClick={() => handleSelect(`/article/${article.id}`)}
                                        className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded cursor-pointer group"
                                    >
                                        <FileText className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                                        <div>
                                            <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                                {article.title}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {results.articles.length > 0 && results.conditions.length > 0 && (
                            <div className="border-t border-gray-100 dark:border-slate-800 my-1"></div>
                        )}

                        {results.conditions.length > 0 && (
                            <div>
                                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 px-2 py-1 uppercase tracking-wider">
                                    In Conditions
                                </h4>
                                {results.conditions.map(condition => (
                                    <div
                                        key={condition.id}
                                        onClick={() => handleSelect(`/condition/${condition.id}`)}
                                        className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded cursor-pointer group"
                                    >
                                        <Activity className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                        <div>
                                            <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                                                {condition.name}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}

            {isOpen && query.length > 0 && results.articles.length === 0 && results.conditions.length === 0 && (
                <Card className="absolute w-full mt-2 z-50 dark:bg-slate-900 dark:border-slate-700 shadow-xl">
                    <CardContent className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
                        No results found for "{query}"
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
