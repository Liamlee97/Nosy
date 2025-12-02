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
}

export const conditionsData: Record<number, Condition> = {
    1: {
        id: 1,
        name: "Anosmia",
        shortDescription: "Complete loss of smell",
        fullDescription: "Anosmia is the complete inability to perceive odors. This condition can be temporary or permanent and significantly affects quality of life, safety, and emotional well-being. People with anosmia often experience a reduced sense of taste as well, since smell and taste are closely linked.",
        prevalence: "1-2% of population",
        severity: "High",
        category: "Complete Loss",
        symptoms: [
            "Complete inability to detect any odors",
            "Significantly reduced taste perception",
            "Difficulty detecting gas leaks or spoiled food",
            "Loss of appetite and weight changes",
            "Depression and social isolation",
            "Memory issues related to smell-triggered memories"
        ],
        causes: [
            "COVID-19 infection (most common recent cause)",
            "Head trauma or brain injury",
            "Nasal polyps or chronic sinusitis",
            "Upper respiratory infections",
            "Aging and neurodegenerative diseases",
            "Congenital conditions (born without smell)",
            "Medications and chemotherapy",
            "Exposure to toxic chemicals"
        ],
        treatments: [
            "Smell training with essential oils (rose, lemon, eucalyptus, cloves)",
            "Treatment of underlying conditions (infections, polyps)",
            "Corticosteroid nasal sprays or oral medications",
            "Surgical removal of nasal obstructions",
            "Alpha-lipoic acid supplementation",
            "Zinc supplementation (if deficient)",
            "Counseling and support groups",
            "Safety adaptations (gas detectors, food dating systems)"
        ],
        prognosis: "Recovery varies greatly depending on the underlying cause. Post-viral anosmia (including COVID-19) often shows gradual improvement over 6-12 months. Traumatic anosmia has a lower recovery rate. Early intervention with smell training can improve outcomes.",
        riskFactors: [
            "Recent viral infections",
            "History of head trauma",
            "Chronic nasal/sinus problems",
            "Advanced age",
            "Smoking",
            "Exposure to chemicals"
        ],
        whenToSeeDoctor: [
            "Sudden loss of smell",
            "Smell loss lasting more than 2 weeks",
            "Associated with head injury",
            "Accompanied by other neurological symptoms",
            "Affecting quality of life significantly"
        ],
        color: "red"
    },
    2: {
        id: 2,
        name: "Parosmia",
        shortDescription: "Distorted sense of smell",
        fullDescription: "Parosmia is a condition where familiar smells are perceived as unpleasant, different, or distorted. This often occurs during recovery from smell loss and can be more distressing than complete anosmia. Common triggers include coffee, onions, garlic, and other strong-smelling foods.",
        prevalence: "Up to 5% post-COVID, 56% of recovering anosmia patients",
        severity: "Moderate to High",
        category: "Distorted Perception",
        symptoms: [
            "Pleasant smells perceived as foul or rotten",
            "Food aversion and dietary changes",
            "Nausea when exposed to trigger smells",
            "Social isolation and avoidance behaviors",
            "Anxiety around eating and cooking",
            "Weight loss due to food aversion"
        ],
        causes: [
            "Recovery phase from viral infections (COVID-19, cold, flu)",
            "Head trauma during healing process",
            "Medication side effects",
            "Nasal surgery recovery",
            "Chemotherapy treatment",
            "Neurological conditions affecting smell processing"
        ],
        treatments: [
            "Smell training with pleasant, familiar scents",
            "Gradual exposure therapy",
            "Dietary modifications and food alternatives",
            "Counseling and cognitive behavioral therapy",
            "Support groups with other parosmia patients",
            "Nasal saline rinses",
            "Time and patience (often improves gradually)",
            "Avoiding trigger smells when possible"
        ],
        prognosis: "Most cases of parosmia gradually improve over 6-18 months. The condition often represents a positive sign of nerve regeneration during recovery from smell loss. With proper management and support, quality of life can be maintained during recovery.",
        riskFactors: [
            "Recent smell loss",
            "COVID-19 infection",
            "Head injury",
            "Upper respiratory infections",
            "Nasal surgery"
        ],
        whenToSeeDoctor: [
            "Severe food aversion affecting nutrition",
            "Significant weight loss",
            "Depression or anxiety",
            "Symptoms worsening over time",
            "Need for coping strategies"
        ],
        color: "orange"
    },
    3: {
        id: 3,
        name: "Phantosmia",
        shortDescription: "Phantom smells",
        fullDescription: "Phantosmia is the perception of smells that aren't actually present in the environment. These phantom smells are often unpleasant and can be persistent or intermittent. The condition can be caused by various factors and may indicate underlying medical issues that require attention.",
        prevalence: "Less common, affects 1-5% of population",
        severity: "Moderate",
        category: "Phantom Perception",
        symptoms: [
            "Smelling odors that aren't actually there",
            "Usually unpleasant smells (burning, chemical, rotten)",
            "Persistent or intermittent phantom odors",
            "Difficulty concentrating due to distracting smells",
            "Anxiety about the phantom smells",
            "Sleep disturbances"
        ],
        causes: [
            "Nasal infections and sinusitis",
            "Medications (antibiotics, antihistamines)",
            "Neurological conditions (epilepsy, migraines)",
            "Head trauma",
            "Brain tumors (rare)",
            "Dental problems",
            "Hormonal changes",
            "Psychological stress"
        ],
        treatments: [
            "Treatment of underlying infections",
            "Medication review and adjustments",
            "Nasal saline rinses and irrigation",
            "Topical nasal medications",
            "Neurological evaluation if needed",
            "Stress management techniques",
            "In rare cases, surgical intervention",
            "Counseling for coping strategies"
        ],
        prognosis: "Phantosmia often resolves when the underlying cause is identified and treated. Most cases improve within weeks to months with appropriate treatment. The prognosis is generally good, especially when related to treatable conditions like infections.",
        riskFactors: [
            "Recent nasal infections",
            "Medication use",
            "History of migraines",
            "Dental problems",
            "Stress and anxiety"
        ],
        whenToSeeDoctor: [
            "Persistent phantom smells",
            "Associated with headaches",
            "Accompanied by other neurological symptoms",
            "Affecting daily activities",
            "Sudden onset without obvious cause"
        ],
        color: "purple"
    },
    4: {
        id: 4,
        name: "Hyposmia",
        shortDescription: "Reduced sense of smell",
        fullDescription: "Hyposmia is a decreased ability to smell, where some odors can be detected but not as strongly as normal. This condition is more common than complete smell loss and can significantly impact quality of life, though it's often underrecognized and undertreated.",
        prevalence: "5-10% of adults, increases with age",
        severity: "Mild to Moderate",
        category: "Reduced Perception",
        symptoms: [
            "Weak or faint smell perception",
            "Difficulty detecting subtle odors",
            "Reduced enjoyment of food and drinks",
            "Delayed detection of hazards (gas, smoke, spoiled food)",
            "Decreased appetite",
            "Difficulty with cooking and seasoning"
        ],
        causes: [
            "Natural aging process",
            "Allergies and chronic rhinitis",
            "Chronic sinus infections",
            "Smoking and tobacco use",
            "Medications (various types)",
            "Environmental pollutants",
            "Mild head trauma",
            "Hormonal changes"
        ],
        treatments: [
            "Treatment of allergies and sinus conditions",
            "Smoking cessation",
            "Smell training exercises",
            "Nasal corticosteroid sprays",
            "Allergy medications",
            "Environmental modifications",
            "Regular nasal hygiene",
            "Lifestyle changes to enhance remaining smell"
        ],
        prognosis: "Hyposmia often improves significantly with treatment of underlying conditions. Age-related hyposmia may be slowed with proper care. Early intervention typically leads to better outcomes.",
        riskFactors: [
            "Advanced age",
            "Smoking history",
            "Chronic allergies",
            "Frequent sinus infections",
            "Environmental exposures"
        ],
        whenToSeeDoctor: [
            "Gradual worsening of smell",
            "Associated with chronic congestion",
            "Affecting quality of life",
            "Concerns about safety",
            "Need for treatment optimization"
        ],
        color: "yellow"
    },
    5: {
        id: 5,
        name: "COVID-19 Smell Loss",
        shortDescription: "Virus-related olfactory dysfunction",
        fullDescription: "COVID-19 related smell loss is a specific type of olfactory dysfunction caused by SARS-CoV-2 infection. It's characterized by sudden onset, often without nasal congestion, and can range from temporary to long-lasting. This condition has brought unprecedented attention to smell disorders.",
        prevalence: "60-80% of COVID-19 cases experience some smell loss",
        severity: "Variable (mild to severe)",
        category: "Viral-Related",
        symptoms: [
            "Sudden onset of smell loss",
            "Often accompanied by taste loss",
            "Usually occurs without nasal congestion",
            "May progress to parosmia during recovery",
            "Can be the only symptom of COVID-19",
            "Varies from partial to complete loss"
        ],
        causes: [
            "SARS-CoV-2 virus infection",
            "Inflammation of olfactory epithelium",
            "Damage to supporting cells in nasal cavity",
            "Possible nerve damage",
            "Immune system response",
            "Direct viral invasion of olfactory system"
        ],
        treatments: [
            "Smell training with essential oils",
            "Anti-inflammatory treatments",
            "Omega-3 fatty acid supplementation",
            "Corticosteroid nasal sprays",
            "Vitamin supplementation (especially vitamin A)",
            "Time and patience for natural recovery",
            "Supportive care and monitoring",
            "Treatment of long COVID symptoms"
        ],
        prognosis: "Most people recover their sense of smell within 6 months, though some may take longer. About 10-15% may have persistent symptoms. Early intervention with smell training may improve recovery rates and speed.",
        riskFactors: [
            "COVID-19 infection",
            "Certain COVID variants",
            "Age (higher risk in younger adults)",
            "Female gender",
            "Pre-existing nasal conditions"
        ],
        whenToSeeDoctor: [
            "Smell loss persisting beyond 4 weeks",
            "Development of parosmia",
            "Associated with other long COVID symptoms",
            "Significant impact on quality of life",
            "Need for smell training guidance"
        ],
        color: "blue"
    },
    6: {
        id: 6,
        name: "Congenital Anosmia",
        shortDescription: "Born without sense of smell",
        fullDescription: "Congenital anosmia is a rare condition where individuals are born without the ability to smell due to developmental abnormalities of the olfactory system. People with this condition have never experienced smell and often develop unique coping strategies throughout their lives.",
        prevalence: "1 in 10,000 births",
        severity: "High",
        category: "Congenital",
        symptoms: [
            "Never experienced any sense of smell",
            "Reduced taste perception (though better adapted than acquired anosmia)",
            "Heightened other senses as compensation",
            "Need for safety awareness strategies",
            "Different relationship with food and memories",
            "May not realize condition until later in life"
        ],
        causes: [
            "Genetic factors and mutations",
            "Developmental abnormalities of olfactory system",
            "Kallmann syndrome (associated with hormonal issues)",
            "Congenital nasal malformations",
            "Chromosomal abnormalities",
            "In utero infections or exposures"
        ],
        treatments: [
            "Coping strategies and life skills training",
            "Safety education and home modifications",
            "Taste enhancement techniques",
            "Psychological support and counseling",
            "Connection with support communities",
            "Regular medical monitoring",
            "Treatment of associated conditions",
            "Research participation opportunities"
        ],
        prognosis: "This is typically a permanent condition. Focus is on adaptation, safety, and quality of life. People with congenital anosmia often develop excellent coping skills and can live full, successful lives with proper support and adaptations.",
        riskFactors: [
            "Family history of smell disorders",
            "Genetic syndromes",
            "Developmental abnormalities",
            "Consanguineous parents"
        ],
        whenToSeeDoctor: [
            "Suspected smell loss in children",
            "Associated developmental delays",
            "Family planning considerations",
            "Need for genetic counseling",
            "Safety concerns"
        ],
        color: "gray"
    },
    7: {
        id: 7,
        name: "Age-Related Smell Decline",
        shortDescription: "Natural aging effects on smell",
        fullDescription: "Age-related smell decline is a gradual reduction in olfactory function that occurs naturally with aging. This condition affects most people over 65 and can impact nutrition, safety, and quality of life. Understanding and managing this decline is important for healthy aging.",
        prevalence: "50% over age 65, 75% over age 80",
        severity: "Mild to Moderate",
        category: "Age-Related",
        symptoms: [
            "Gradual reduction in smell sensitivity",
            "Difficulty detecting faint odors",
            "Problems with food safety detection",
            "Reduced appetite and enjoyment of food",
            "Weight loss or poor nutrition",
            "Increased use of salt and seasonings"
        ],
        causes: [
            "Natural aging process of olfactory neurons",
            "Cumulative damage over lifetime",
            "Reduced nerve regeneration capacity",
            "Changes in nasal structure",
            "Medications commonly used by elderly",
            "Chronic health conditions",
            "Environmental exposures over time"
        ],
        treatments: [
            "Smell training exercises",
            "Enhanced food flavoring and presentation",
            "Safety measures (gas detectors, food dating)",
            "Regular medical check-ups",
            "Medication review and optimization",
            "Treatment of contributing conditions",
            "Nutritional counseling",
            "Social dining and meal programs"
        ],
        prognosis: "Age-related smell decline is typically progressive but manageable. While complete recovery is unlikely, interventions can slow progression and maintain quality of life. Early recognition and management are key to successful aging.",
        riskFactors: [
            "Advanced age",
            "Multiple medications",
            "Chronic health conditions",
            "History of smoking",
            "Poor nutrition",
            "Social isolation"
        ],
        whenToSeeDoctor: [
            "Rapid decline in smell",
            "Safety concerns",
            "Significant weight loss",
            "Associated with other symptoms",
            "Need for management strategies"
        ],
        color: "green"
    }
};

export const getAllConditions = () => Object.values(conditionsData);

export const getConditionById = (id: number) => conditionsData[id];
