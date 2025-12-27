import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Calendar, Users, TestTube, Scale, Target } from "lucide-react";
import { ClinicalTrial } from "@/lib/clinical-trials";

interface ClinicalTrialDetailProps {
    trial: ClinicalTrial | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ClinicalTrialDetail({ trial, isOpen, onClose }: ClinicalTrialDetailProps) {
    if (!trial) return null;

    const {
        identificationModule: { briefTitle, nctId },
        statusModule: { overallStatus, startDateStruct, completionDateStruct },
        conditionsModule: { conditions },
        eligibilityModule,
        armsInterventionsModule,
        outcomesModule,
    } = trial.protocolSection;

    // Helper to render PICO sections
    const Section = ({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) => (
        <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary">
                <Icon className="w-5 h-5" />
                <h3 className="font-semibold text-base">{title}</h3>
            </div>
            <div className="pl-7 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                {children}
            </div>
        </div>
    );

    return (
        <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <SheetContent className="w-[400px] sm:w-[600px] overflow-y-auto">
                <SheetHeader className="mb-6">
                    <Badge className="w-fit mb-2" variant={overallStatus === 'RECRUITING' ? 'default' : 'secondary'}>
                        {overallStatus}
                    </Badge>
                    <SheetTitle className="text-xl leading-relaxed">{briefTitle}</SheetTitle>
                    <SheetDescription>
                        NCT ID: {nctId}
                    </SheetDescription>
                </SheetHeader>

                <div className="space-y-6">
                    {/* Dates */}
                    <div className="grid grid-cols-2 gap-4 text-sm bg-muted/30 p-3 rounded-lg border">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <div>
                                <p className="text-xs text-muted-foreground">Start Date</p>
                                <p className="font-medium">{startDateStruct?.date || 'N/A'}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <div>
                                <p className="text-xs text-muted-foreground">Est. Completion</p>
                                <p className="font-medium">{completionDateStruct?.date || 'N/A'}</p>
                            </div>
                        </div>
                    </div>

                    <Separator />

                    {/* POPULATION */}
                    <Section title="Population" icon={Users}>
                        <div className="grid grid-cols-2 gap-2 mb-2">
                            <div className="bg-muted px-2 py-1 rounded text-xs font-medium">
                                Sex: {eligibilityModule?.sex || 'Not specified'}
                            </div>
                            <div className="bg-muted px-2 py-1 rounded text-xs font-medium">
                                Age: {eligibilityModule?.minimumAge || 'N/A'} - {eligibilityModule?.maximumAge || 'N/A'}
                            </div>
                        </div>
                        <div>
                            <span className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">Conditions:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                                {conditions.map((c) => (
                                    <Badge key={c} variant="outline" className="text-xs">{c}</Badge>
                                ))}
                            </div>
                        </div>
                        {eligibilityModule?.eligibilityCriteria && (
                            <details className="text-xs mt-2 cursor-pointer group">
                                <summary className="text-blue-600 hover:underline font-medium">
                                    View Eligibility Criteria
                                </summary>
                                <div className="mt-2 p-2 bg-muted/50 rounded border whitespace-pre-line leading-relaxed">
                                    {eligibilityModule.eligibilityCriteria}
                                </div>
                            </details>
                        )}
                    </Section>

                    <Separator />

                    {/* INTERVENTION */}
                    <Section title="Intervention" icon={TestTube}>
                        {armsInterventionsModule?.interventions?.length ? (
                            <ul className="list-disc leading-relaxed space-y-2">
                                {armsInterventionsModule.interventions.map((intervention, i) => (
                                    <li key={i}>
                                        <span className="font-semibold">{intervention.name}</span>
                                        {intervention.description && (
                                            <span className="text-muted-foreground block text-xs mt-0.5">
                                                {intervention.description}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-muted-foreground italic">No specific interventions listed.</p>
                        )}
                    </Section>

                    {/* CONTROL / COMPARISON */}
                    <Section title="Control / Comparator" icon={Scale}>
                        {armsInterventionsModule?.armGroups?.length ? (
                            <ul className="space-y-3">
                                {armsInterventionsModule.armGroups.map((arm, i) => (
                                    <li key={i} className="bg-muted/30 p-2 rounded border">
                                        <div className="flex justify-between items-start">
                                            <span className="font-semibold text-sm">{arm.label}</span>
                                            <Badge variant="outline" className="text-[10px]">{arm.type}</Badge>
                                        </div>
                                        {arm.description && (
                                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                                {arm.description}
                                            </p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-muted-foreground italic">No arm groups listed.</p>
                        )}
                    </Section>

                    <Separator />

                    {/* OUTCOMES */}
                    <Section title="Primary Outcome" icon={Target}>
                        {outcomesModule?.primaryOutcomes?.length ? (
                            <ul className="space-y-4">
                                {outcomesModule.primaryOutcomes.slice(0, 3).map((outcome, i) => (
                                    <li key={i}>
                                        <p className="font-medium text-sm">{outcome.measure}</p>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            {outcome.description}
                                        </p>
                                        <div className="mt-1 text-[10px] text-blue-600 font-medium">
                                            Time Frame: {outcome.timeFrame}
                                        </div>
                                    </li>
                                ))}
                                {outcomesModule.primaryOutcomes.length > 3 && (
                                    <p className="text-xs text-muted-foreground italic pt-1">
                                        + {outcomesModule.primaryOutcomes.length - 3} more outcomes
                                    </p>
                                )}
                            </ul>
                        ) : (
                            <p className="text-muted-foreground italic">No primary outcomes listed.</p>
                        )}
                    </Section>

                    <div className="text-center pt-6 pb-2">
                        <a
                            href={`https://clinicaltrials.gov/study/${nctId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                        >
                            View Full Study on ClinicalTrials.gov
                        </a>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
