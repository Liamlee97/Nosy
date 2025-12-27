import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, Filter } from "lucide-react";
import { fetchClinicalTrials, ClinicalTrial } from "@/lib/clinical-trials";
import { ClinicalTrialDetail } from "./ClinicalTrialDetail";
import LoadingSpinner from "./LoadingSpinner";

type SortColumn = 'status' | 'startDate';
type SortOrder = 'asc' | 'desc';

// Statuses to always hide
const EXCLUDED_STATUSES = ['WITHDRAWN', 'UNKNOWN', 'TERMINATED', 'SUSPENDED', 'UNKNOWN STATUS'];

export function ClinicalTrialsTable() {
    const [selectedTrial, setSelectedTrial] = useState<ClinicalTrial | null>(null);
    const [sortColumn, setSortColumn] = useState<SortColumn>('startDate');
    const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
    const [statusFilter, setStatusFilter] = useState<string>('all');

    const { data: trials, isLoading, error, dataUpdatedAt } = useQuery({
        queryKey: ['clinicalTrials'],
        queryFn: fetchClinicalTrials,
    });

    const filteredAndSortedTrials = useMemo(() => {
        if (!trials) return [];

        // 0. Filter for relevance (Client-side strict check)
        const RELEVANT_KEYWORDS = [
            'OLFACT', 'SMELL', 'ANOSMIA', 'HYPOSMIA', 'PAROSMIA', 'DYSOSMIA',
            'COVID-19', 'SARS-COV-2', 'CORONAVIRUS'
        ];

        let processed = trials.filter(trial => {
            const { conditions } = trial.protocolSection.conditionsModule;
            const { briefTitle } = trial.protocolSection.identificationModule;
            // Not all trials have a summary, so handle safely
            const briefSummary = trial.protocolSection.descriptionModule?.briefSummary || '';

            // Create a search corpus from relevant fields
            const searchCorpus = [
                ...(conditions || []),
                briefTitle,
                briefSummary
            ].join(' ').toUpperCase();

            const hasRelevantKeyword = RELEVANT_KEYWORDS.some(keyword => searchCorpus.includes(keyword));

            return hasRelevantKeyword;
        });

        // 1. Filter out excluded statuses and apply selection filter
        processed = processed.filter(trial => {
            const status = trial.protocolSection.statusModule.overallStatus.toUpperCase();

            // Always exclude invisible statuses
            if (EXCLUDED_STATUSES.includes(status)) return false;

            // Apply dropdown filter
            if (statusFilter !== 'all' && status !== statusFilter) return false;

            return true;
        });

        // 2. Sort
        return processed.sort((a, b) => {
            if (sortColumn === 'status') {
                const statusA = a.protocolSection.statusModule.overallStatus;
                const statusB = b.protocolSection.statusModule.overallStatus;
                return sortOrder === 'asc'
                    ? statusA.localeCompare(statusB)
                    : statusB.localeCompare(statusA);
            }

            if (sortColumn === 'startDate') {
                const dateA = a.protocolSection.statusModule.startDateStruct?.date || '';
                const dateB = b.protocolSection.statusModule.startDateStruct?.date || '';

                if (!dateA) return 1;
                if (!dateB) return -1;

                return sortOrder === 'asc'
                    ? dateA.localeCompare(dateB)
                    : dateB.localeCompare(dateA);
            }

            return 0;
        });
    }, [trials, sortColumn, sortOrder, statusFilter]);

    // Derive unique available statuses for the dropdown (from the non-excluded set)
    const availableStatuses = useMemo(() => {
        if (!trials) return [];
        const statuses = new Set<string>();
        trials.forEach(trial => {
            const status = trial.protocolSection.statusModule.overallStatus.toUpperCase();
            if (!EXCLUDED_STATUSES.includes(status)) {
                statuses.add(status);
            }
        });
        return Array.from(statuses).sort();
    }, [trials]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-12">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-12 text-red-500">
                <p>Failed to load clinical trials. Please try again later.</p>
                <p className="text-sm text-gray-500 mt-2">{(error as Error).message}</p>
            </div>
        );
    }

    const handleSort = (column: SortColumn) => {
        if (sortColumn === column) {
            setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortOrder('desc');
        }
    };

    return (
        <div className="space-y-4">
            {/* Info Header */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4 mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h2 className="font-semibold text-blue-900 dark:text-blue-100 flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Live Data from ClinicalTrials.gov
                        </h2>
                        <div className="text-sm text-blue-700 dark:text-blue-300 mt-1 flex flex-wrap gap-x-2 gap-y-1">
                            <span>Filters Applied:</span>
                            <Badge variant="outline" className="bg-white/50 dark:bg-black/20 border-blue-200 dark:border-blue-800">
                                Condition: Olfactory Disorders
                            </Badge>
                            <Badge variant="outline" className="bg-white/50 dark:bg-black/20 border-blue-200 dark:border-blue-800">
                                Type: Interventional
                            </Badge>
                            <Badge variant="outline" className="bg-white/50 dark:bg-black/20 border-blue-200 dark:border-blue-800">
                                Relevance: Contains Olfactory Keywords
                            </Badge>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <Badge variant="secondary" className="bg-white/50 dark:bg-black/20">
                            Automatic updates: Weekly
                        </Badge>
                        <div className="text-xs text-blue-600 dark:text-blue-400">
                            Last refreshed: {dataUpdatedAt ? new Date(dataUpdatedAt).toLocaleDateString() : 'Fetching...'}
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-lg border shadow-sm">
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Showing <span className="text-gray-900 dark:text-white font-bold">{filteredAndSortedTrials.length}</span> trials
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Filter className="w-4 h-4 text-gray-500" />
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="w-full sm:w-[200px]">
                            <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Active Statuses</SelectItem>
                            {availableStatuses.map(status => (
                                <SelectItem key={status} value={status}>
                                    {status}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="rounded-md border bg-white dark:bg-slate-900">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[40%]">Title</TableHead>
                            <TableHead
                                className="w-[15%] cursor-pointer hover:bg-muted/50"
                                onClick={() => handleSort('status')}
                            >
                                <div className="flex items-center gap-1">
                                    Status
                                    {sortColumn === 'status' && <ArrowUpDown className="h-4 w-4" />}
                                </div>
                            </TableHead>
                            <TableHead
                                className="w-[15%] cursor-pointer hover:bg-muted/50"
                                onClick={() => handleSort('startDate')}
                            >
                                <div className="flex items-center gap-1">
                                    Start Date
                                    {sortColumn === 'startDate' && <ArrowUpDown className="h-4 w-4" />}
                                </div>
                            </TableHead>
                            <TableHead className="w-[30%]">Conditions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredAndSortedTrials.length > 0 ? (
                            filteredAndSortedTrials.map((trial) => {
                                const { nctId, briefTitle } = trial.protocolSection.identificationModule;
                                const { overallStatus, startDateStruct } = trial.protocolSection.statusModule;
                                const { conditions } = trial.protocolSection.conditionsModule;

                                return (
                                    <TableRow
                                        key={nctId}
                                        className="cursor-pointer hover:bg-muted/50"
                                        onClick={() => setSelectedTrial(trial)}
                                    >
                                        <TableCell className="font-medium">
                                            <div className="line-clamp-2">{briefTitle}</div>
                                            <div className="text-xs text-muted-foreground mt-1">{nctId}</div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={overallStatus === 'RECRUITING' ? 'default' : 'secondary'}>
                                                {overallStatus}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            {startDateStruct?.date || 'N/A'}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-wrap gap-1">
                                                {conditions.slice(0, 2).map((condition, i) => (
                                                    <Badge key={i} variant="outline" className="text-xs">
                                                        {condition}
                                                    </Badge>
                                                ))}
                                                {conditions.length > 2 && (
                                                    <Badge variant="outline" className="text-xs">
                                                        +{conditions.length - 2}
                                                    </Badge>
                                                )}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="h-24 text-center">
                                    No trials found matching your filter.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <ClinicalTrialDetail
                trial={selectedTrial}
                isOpen={!!selectedTrial}
                onClose={() => setSelectedTrial(null)}
            />
        </div>
    );
}
