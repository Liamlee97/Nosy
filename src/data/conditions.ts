export interface Condition {
    id: number;
    name: string;
    shortDescription: string;
    fullDescription: string;
    prevalence: string;
    severity: string;
    category: string;
    symptoms: string[];
    causes: string[];
    treatments: string[];
    prognosis: string;
    riskFactors?: string[];
    whenToSeeDoctor?: string[];
    color?: string; // For UI styling in list view
    cardDescription?: string; // Second-person perspective description for the card
    sources?: { title: string; url: string }[];
}

export const conditionsData: Record<number, Condition> = {
    1: {
        id: 1,
        name: "Acquired Anosmia",
        shortDescription: "Loss of smell due to injury or disease.",
        fullDescription: "Acquired anosmia is the loss of smell due to injury, virus (like COVID-19), or disease after having had a normal sense of smell.",
        prevalence: "Varies by cause (e.g., 22% of general population)",
        severity: "High",
        category: "Quantitative Disorders",
        cardDescription: "You used to be able to smell, but now you cannot.",
        symptoms: [
            "Sudden or gradual loss of smell",
            "Flavor loss"
        ],
        causes: [
            "Head injury",
            "Viral infections",
            "Neurodegenerative diseases"
        ],
        treatments: [
            "Treating underlying cause",
            "Smell training"
        ],
        prognosis: "Depends on the cause.",
        color: "blue",
        riskFactors: [
            "Head trauma",
            "Viral exposure",
            "Neurological conditions"
        ],
        whenToSeeDoctor: [
            "After head injury",
            "Unexplained smell loss"
        ],
        sources: [
            { title: "National Institute on Deafness and Other Communication Disorders (NIDCD)", url: "https://www.nidcd.nih.gov/health/smell-disorders" },
            { title: "Mayo Clinic - Anosmia", url: "https://www.mayoclinic.org/symptoms/loss-of-smell/basics/definition/sym-20050804" }
        ]
    },
    2: {
        id: 2,
        name: "Age-Related Smell Decline",
        shortDescription: "Gradual loss of smell due to aging.",
        fullDescription: "Age-related smell decline (Presbyosmia) is the gradual loss of smell due to aging, similar to presbyopia for failing eyesight.",
        prevalence: ">50% of those >65 years",
        severity: "Mild to Moderate",
        category: "Quantitative Disorders",
        cardDescription: "Your sense of smell has gradually faded with age.",
        symptoms: [
            "Gradual decline in smell sensitivity",
            "Difficulty identifying odors"
        ],
        causes: [
            "Natural aging process"
        ],
        treatments: [
            "Flavor enhancement",
            "Safety measures"
        ],
        prognosis: "Progressive.",
        color: "blue",
        riskFactors: [
            "Age > 65",
            "Smoking"
        ],
        whenToSeeDoctor: [
            "Rapid decline",
            "Safety concerns (gas/smoke detection)"
        ],
        sources: [
            { title: "Cleveland Clinic - Smell Disorders", url: "https://my.clevelandclinic.org/health/diseases/21859-smell-disorders" },
            { title: "NIH - Aging and Your Senses", url: "https://www.nia.nih.gov/health/sensory-changes/smell-and-taste" }
        ]
    },
    4: {
        id: 4,
        name: "Cacosmia",
        shortDescription: "Perceiving smells as repulsive.",
        fullDescription: "Cacosmia is a specific type of parosmia or phantosmia where the perceived smell is specifically repulsive (fecal, putrid, or rotting).",
        prevalence: "Variable (specific type of parosmia)",
        severity: "High",
        category: "Qualitative Disorders",
        cardDescription: "You constantly perceive a repulsive, rotting smell.",
        symptoms: [
            "Constant foul smell",
            "Nausea"
        ],
        causes: [
            "Infections",
            "Sinus issues",
            "Psychological factors"
        ],
        treatments: [
            "Treating underlying infection",
            "Counseling"
        ],
        prognosis: "Depends on cause.",
        color: "orange",
        riskFactors: [
            "Chronic sinusitis",
            "Dental infections"
        ],
        whenToSeeDoctor: [
            "Persistent foul smell",
            "Signs of infection"
        ],
        sources: [
            { title: "WebMD - What Is Cacosmia?", url: "https://www.webmd.com/brain/what-is-cacosmia" },
            { title: "Healthline - Cacosmia", url: "https://www.healthline.com/health/cacosmia" }
        ]
    },
    5: {
        id: 5,
        name: "Congenital Anosmia",
        shortDescription: "Born without a sense of smell.",
        fullDescription: "Congenital anosmia is a rare condition where individuals are born without the ability to smell, often linked to Kallmann syndrome.",
        prevalence: "1 in 10,000 births",
        severity: "High",
        category: "Quantitative Disorders",
        cardDescription: "You have never possessed the ability to smell.",
        symptoms: [
            "Never experienced smell",
            "Reduced taste perception"
        ],
        causes: [
            "Genetic factors",
            "Kallmann syndrome",
            "Developmental abnormalities"
        ],
        treatments: [
            "Safety education",
            "Coping strategies"
        ],
        prognosis: "Typically permanent.",
        color: "blue",
        riskFactors: [
            "Family history",
            "Genetic syndromes"
        ],
        whenToSeeDoctor: [
            "Child not responding to smells",
            "Delayed puberty (Kallmann syndrome)"
        ],
        sources: [
            { title: "Genetic and Rare Diseases Information Center (GARD)", url: "https://rarediseases.info.nih.gov/diseases/10313/congenital-anosmia" },
            { title: "Fifth Sense - Congenital Anosmia", url: "https://www.fifthsense.org.uk/congenital-anosmia/" }
        ]
    },
    6: {
        id: 6,
        name: "Euosmia",
        shortDescription: "Perceiving bad smells as pleasant.",
        fullDescription: "Euosmia is a rare type of parosmia where a neutral or bad smell is perceived as pleasant (the opposite of cacosmia).",
        prevalence: "Rare",
        severity: "Low",
        category: "Qualitative Disorders",
        cardDescription: "You perceive pleasant smells that aren't actually there.",
        symptoms: [
            "Pleasant olfactory hallucinations"
        ],
        causes: [
            "Neurological anomalies"
        ],
        treatments: [
            "Observation"
        ],
        prognosis: "Variable.",
        color: "orange",
        riskFactors: [
            "Neurological conditions"
        ],
        whenToSeeDoctor: [
            "New onset hallucinations"
        ],
        sources: [
            { title: "ScienceDirect - Olfactory Dysfunction", url: "https://www.sciencedirect.com/topics/medicine-and-dentistry/olfactory-disorder" }
        ]
    },
    7: {
        id: 7,
        name: "Hyperosmia",
        shortDescription: "An abnormally heightened sense of smell.",
        fullDescription: "Hyperosmia is an abnormally heightened sense of smell. This is rare and often associated with migraines, pregnancy, or certain autoimmune conditions.",
        prevalence: "Rare (often associated with migraines)",
        severity: "Variable",
        category: "Quantitative Disorders",
        cardDescription: "You have an abnormally heightened and overwhelming sense of smell.",
        symptoms: [
            "Overwhelming sensitivity to smells",
            "Nausea from scents",
            "Headaches"
        ],
        causes: [
            "Migraines",
            "Pregnancy",
            "Autoimmune conditions",
            "Lyme disease"
        ],
        treatments: [
            "Trigger avoidance",
            "Treating underlying condition"
        ],
        prognosis: "Often resolves with the underlying cause.",
        color: "blue",
        riskFactors: [
            "Migraines",
            "Pregnancy",
            "Autoimmune disorders"
        ],
        whenToSeeDoctor: [
            "Severe headaches",
            "Nausea/vomiting",
            "Disruption of daily life"
        ],
        sources: [
            { title: "Cleveland Clinic - Hyperosmia", url: "https://my.clevelandclinic.org/health/symptoms/hyperosmia" },
            { title: "WebMD - Hyperosmia", url: "https://www.webmd.com/brain/what-is-hyperosmia" }
        ]
    },
    8: {
        id: 8,
        name: "Hyposmia",
        shortDescription: "A reduced or diminished ability to smell.",
        fullDescription: "Hyposmia (or Microsmia) is a reduced ability to smell. This is the most common condition and is often age-related or allergy-related.",
        prevalence: "15-20% of the population",
        severity: "Mild to Moderate",
        category: "Quantitative Disorders",
        cardDescription: "Your sense of smell is reduced, as if the volume has been turned down.",
        symptoms: [
            "Faint smell perception",
            "Reduced flavor intensity"
        ],
        causes: [
            "Aging",
            "Allergies",
            "Smoking",
            "Nasal obstruction"
        ],
        treatments: [
            "Allergy management",
            "Smoking cessation"
        ],
        prognosis: "Often manageable.",
        color: "blue",
        riskFactors: [
            "Aging",
            "Smoking",
            "Allergies"
        ],
        whenToSeeDoctor: [
            "Progressive decline",
            "Impact on quality of life"
        ],
        sources: [
            { title: "Cleveland Clinic - Hyposmia", url: "https://my.clevelandclinic.org/health/diseases/24584-hyposmia" },
            { title: "NIDCD - Smell Disorders", url: "https://www.nidcd.nih.gov/health/smell-disorders" }
        ]
    },
    9: {
        id: 9,
        name: "Olfactory Agnosia",
        shortDescription: "Inability to identify or name smells.",
        fullDescription: "Olfactory Agnosia is where the ability to detect a smell is intact, but the ability to identify or name it is lost. It is a common early sign of neurodegenerative diseases.",
        prevalence: "Associated with neurodegenerative diseases",
        severity: "Moderate",
        category: "Central/Processing Disorders",
        cardDescription: "You can detect smells, but you cannot identify or name them.",
        symptoms: [
            "Can smell but can't identify",
            "Confusion about odors"
        ],
        causes: [
            "Dementia",
            "Alzheimer's disease",
            "Brain injury"
        ],
        treatments: [
            "Cognitive training",
            "Managing underlying condition"
        ],
        prognosis: "Progressive if neurodegenerative.",
        color: "purple",
        riskFactors: [
            "Age",
            "Family history of dementia"
        ],
        whenToSeeDoctor: [
            "Memory loss",
            "Confusion",
            "Difficulty naming objects"
        ],
        sources: [
            { title: "PubMed - Olfactory Agnosia", url: "https://pubmed.ncbi.nlm.nih.gov/" }
        ]
    },
    10: {
        id: 10,
        name: "Osmophobia",
        shortDescription: "Fear or aversion to smells.",
        fullDescription: "Osmophobia is a psychological fear, aversion, or hypersensitivity to smells. While similar to hyperosmia, this is often an emotional or phobic reaction (common in migraine sufferers).",
        prevalence: "~25-50% of migraine sufferers",
        severity: "Moderate",
        category: "Central/Processing Disorders",
        cardDescription: "You have a strong fear or aversion to certain smells.",
        symptoms: [
            "Anxiety around smells",
            "Avoidance behavior",
            "Nausea"
        ],
        causes: [
            "Migraines",
            "Psychological phobias"
        ],
        treatments: [
            "Desensitization",
            "Migraine management"
        ],
        prognosis: "Manageable.",
        color: "purple",
        riskFactors: [
            "Migraines",
            "Anxiety disorders"
        ],
        whenToSeeDoctor: [
            "Severe anxiety",
            "Impact on daily functioning"
        ],
        sources: [
            { title: "American Migraine Foundation - Osmophobia", url: "https://americanmigrainefoundation.org/" },
            { title: "National Library of Medicine - Osmophobia", url: "https://www.ncbi.nlm.nih.gov/" }
        ]
    },
    11: {
        id: 11,
        name: "Parosmia",
        shortDescription: "A distortion of a real smell.",
        fullDescription: "Parosmia is a distortion of a real smell. You smell a rose, but your brain registers it as garbage or smoke. This is common during recovery from viral infections.",
        prevalence: "10-60% of post-viral smell loss cases",
        severity: "Moderate to High",
        category: "Qualitative Disorders",
        cardDescription: "Familiar smells are distorted and often unpleasant to you.",
        symptoms: [
            "Distorted smells (often unpleasant)",
            "Food aversion"
        ],
        causes: [
            "Post-viral recovery",
            "Head trauma"
        ],
        treatments: [
            "Smell training",
            "Time"
        ],
        prognosis: "Often improves over time.",
        color: "orange",
        riskFactors: [
            "Recent viral infection",
            "Recovery from anosmia"
        ],
        whenToSeeDoctor: [
            "Severe food aversion",
            "Weight loss",
            "Depression"
        ],
        sources: [
            { title: "Fifth Sense - Parosmia", url: "https://www.fifthsense.org.uk/parosmia-and-phantosmia/" },
            { title: "WebMD - Parosmia", url: "https://www.webmd.com/brain/what-is-parosmia" }
        ]
    },
    12: {
        id: 12,
        name: "Phantosmia",
        shortDescription: "An olfactory hallucination.",
        fullDescription: "Phantosmia is an olfactory hallucination. You smell something (often smoke, chemicals, or rot) when there is absolutely no odor source present.",
        prevalence: "0.8-6% of adults",
        severity: "Moderate",
        category: "Qualitative Disorders",
        cardDescription: "You smell odors, like smoke, that are not present.",
        symptoms: [
            "Smelling odors that aren't there",
            "Persistent unpleasant smells"
        ],
        causes: [
            "Nasal infections",
            "Neurological issues",
            "Head trauma"
        ],
        treatments: [
            "Saline rinses",
            "Medication",
            "Surgery (rare)"
        ],
        prognosis: "Can be transient or persistent.",
        color: "orange",
        riskFactors: [
            "Sinus infections",
            "Head injury",
            "Epilepsy (rare)"
        ],
        whenToSeeDoctor: [
            "Persistent phantom smells",
            "Associated with seizures or headaches"
        ],
        sources: [
            { title: "Mayo Clinic - Phantosmia", url: "https://www.mayoclinic.org/diseases-conditions/temporal-lobe-seizure/expert-answers/phantosmia/faq-20058131" },
            { title: "WebMD - Phantosmia", url: "https://www.webmd.com/brain/what-is-phantosmia" }
        ]
    },
    13: {
        id: 13,
        name: "Specific Anosmia",
        shortDescription: "Inability to smell one specific odor.",
        fullDescription: "Specific Anosmia is the inability to smell one specific type of odor (e.g., musk or sweat) while smelling others normally. This is usually genetic.",
        prevalence: "Varies by odorant (e.g., 50% for androstenone)",
        severity: "Mild",
        category: "Quantitative Disorders",
        cardDescription: "You cannot smell specific odors, like musk, but can smell others.",
        symptoms: [
            "Inability to detect specific scents (e.g., musk, androstenone)"
        ],
        causes: [
            "Genetic variation in olfactory receptors"
        ],
        treatments: [
            "None needed"
        ],
        prognosis: "Permanent but harmless.",
        color: "blue",
        riskFactors: [
            "Genetics"
        ],
        whenToSeeDoctor: [
            "Generally not required"
        ],
        sources: [
            { title: "Monell Chemical Senses Center", url: "https://monell.org/" },
            { title: "PubMed - Specific Anosmia", url: "https://pubmed.ncbi.nlm.nih.gov/" }
        ]
    }
};

export const getAllConditions = () => Object.values(conditionsData).sort((a, b) => a.name.localeCompare(b.name));

export const getConditionById = (id: number) => conditionsData[id];
