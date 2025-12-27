export interface ClinicalTrial {
    protocolSection: {
        identificationModule: {
            nctId: string;
            briefTitle: string;
        };
        statusModule: {
            overallStatus: string;
            startDateStruct?: {
                date: string;
            };
            completionDateStruct?: {
                date: string;
            };
        };
        conditionsModule: {
            conditions: string[];
        };
        descriptionModule: {
            briefSummary: string;
        };
        eligibilityModule?: {
            eligibilityCriteria: string;
            sex: string;
            minimumAge: string;
            maximumAge: string;
            stdAges?: string[];
        };
        armsInterventionsModule?: {
            armGroups?: {
                label: string;
                type: string;
                description: string;
            }[];
            interventions?: {
                type: string;
                name: string;
                description: string;
            }[];
        };
        outcomesModule?: {
            primaryOutcomes?: {
                measure: string;
                description: string;
                timeFrame: string;
            }[];
            secondaryOutcomes?: {
                measure: string;
                description: string;
                timeFrame: string;
            }[];
        };
    };
}

export interface ClinicalTrialsResponse {
    studies: ClinicalTrial[];
    nextPageToken?: string;
}

export const fetchClinicalTrials = async (): Promise<ClinicalTrial[]> => {
    const BASE_URL = 'https://clinicaltrials.gov/api/v2/studies';
    const fields = 'NCTId,BriefTitle,OverallStatus,StartDate,CompletionDate,Condition,BriefSummary,EligibilityModule,ArmsInterventionsModule,OutcomesModule';
    let allStudies: ClinicalTrial[] = [];
    let nextPageToken: string | undefined = undefined;

    do {
        const params = new URLSearchParams({
            'query.cond': 'Olfactory Disorders',
            'query.term': 'AREA[StudyType]Interventional',
            'pageSize': '100',
            'fields': fields,
        });

        if (nextPageToken) {
            params.append('pageToken', nextPageToken);
        }

        const response = await fetch(`${BASE_URL}?${params.toString()}`);

        if (!response.ok) {
            throw new Error('Failed to fetch clinical trials');
        }

        const data: ClinicalTrialsResponse = await response.json();
        if (data.studies) {
            allStudies = [...allStudies, ...data.studies];
        }
        nextPageToken = data.nextPageToken;

    } while (nextPageToken);

    return allStudies;
};
