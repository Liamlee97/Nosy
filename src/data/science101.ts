import {
    Wind,
    Brain,
    Zap,
    Target,
    Activity,
    Layers,
    Lightbulb,
    Microscope,
    CheckCircle,
    XCircle,
    AlertCircle,
    Sparkles
} from 'lucide-react';

export const smellFacts = [
    {
        icon: Brain,
        title: "10,000 Odors",
        description: "Humans can distinguish at least 10,000 different odors. <sup><a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC4483192/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>[1]</a></sup>"
    },
    {
        icon: Zap,
        title: "Direct Connection",
        description: "Smell is the only sense that bypasses the thalamus and connects directly to the brain's limbic system, which controls emotion and memory. <sup><a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC4330889/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>[2]</a></sup>"
    },
    {
        icon: Target,
        title: "400 Receptors",
        description: "Humans have approximately 400 different types of functional olfactory receptors, encoded by the largest gene family in our genome. <sup><a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC2495065/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>[3]</a></sup>"
    },
    {
        icon: Activity,
        title: "Constant Renewal",
        description: "Olfactory sensory neurons are unique in the nervous system because they regenerate throughout life, with a lifespan of 30-60 days. <sup><a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC2728470/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>[4]</a></sup>"
    }
];

export const smellProcess = [
    {
        step: 1,
        title: "Odor Molecules Enter",
        description: "Volatile chemical molecules are inhaled",
        icon: Wind,
        details: "When you sniff, air containing volatile odor molecules is drawn into the upper part of the nasal cavity, where the olfactory epithelium is located."
    },
    {
        step: 2,
        title: "Dissolving in Mucus",
        description: "Molecules dissolve in the mucus layer",
        icon: Layers,
        details: "Odor molecules must be water-soluble enough to dissolve in the mucus layer produced by Bowman's glands to reach the receptor neurons."
    },
    {
        step: 3,
        title: "Receptor Binding",
        description: "Molecules bind to specific receptors",
        icon: Target,
        details: "The dissolved molecules bind to specific receptor proteins on the cilia of the olfactory neurons."
    },
    {
        step: 4,
        title: "Signal Transduction",
        description: "Chemical signal becomes electrical",
        icon: Zap,
        details: "Binding triggers a cascade of chemical reactions inside the neuron (involving cAMP), opening ion channels and generating an electrical action potential."
    },
    {
        step: 5,
        title: "Brain Processing",
        description: "Signals travel to the olfactory bulb",
        icon: Brain,
        details: "The electrical signal travels along the olfactory nerve (Cranial Nerve I) through the cribriform plate to the olfactory bulb, where initial processing occurs before reaching the brain."
    }
];

export const misconceptions = [
    {
        myth: "Humans have a poor sense of smell",
        truth: "Human olfaction is far better than most people think and can rival other mammals for certain odors. <sup><a href='https://pubmed.ncbi.nlm.nih.gov/28495701/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>[6]</a></sup>",
        explanation: "Although dogs have more smell receptors overall, humans are extremely sensitive to some specific odors (like the earthy smell after rain) and can even follow scent trails in experiments. The idea that humans are “microsmatic” with a weak sense of smell comes from 19th‑century speculation about brain anatomy, not from modern behavioral data."
    },
    {
        myth: "Taste is the main driver of flavor",
        truth: "Smell provides most of what we perceive as flavor. <sup><a href='https://pubmed.ncbi.nlm.nih.gov/22425641/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>[7]</a></sup>",
        explanation: "The tongue detects only five basic tastes: sweet, sour, salty, bitter, and umami. The complex nuances of flavor (like telling strawberry from raspberry) come largely from retronasal olfaction, when odor molecules from food travel from the back of your mouth up to your nose while you chew and swallow."
    },
    {
        myth: "Smell loss is trivial",
        truth: "Anosmia is linked to depression, reduced quality of life, and real safety risks. <sup><a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC5977071/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>[8]</a></sup>",
        explanation: "Loss of smell affects appetite, social connection, and safety (detecting smoke/gas). It is strongly correlated with depression and reduced quality of life."
    }
];
