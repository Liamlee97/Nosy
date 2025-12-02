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
        title: "1 Trillion Scents",
        description: "Research suggests humans can distinguish at least 1 trillion different olfactory stimuli, far more than the previously believed 10,000."
    },
    {
        icon: Zap,
        title: "Direct Connection",
        description: "Smell is the only sense that bypasses the thalamus and connects directly to the brain's limbic system, which controls emotion and memory."
    },
    {
        icon: Target,
        title: "400 Receptors",
        description: "Humans have approximately 400 different types of functional olfactory receptors, encoded by the largest gene family in our genome."
    },
    {
        icon: Activity,
        title: "Constant Renewal",
        description: "Olfactory sensory neurons are unique in the nervous system because they regenerate throughout life, with a lifespan of 30-60 days."
    }
];

export const cellTypes = [
    {
        name: "Olfactory Receptor Neurons",
        function: "Detect odor molecules and send signals to the brain",
        lifespan: "30-60 days",
        location: "Throughout olfactory epithelium",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
        details: "These are the primary sensing cells. Each neuron expresses only one type of odorant receptor. They have cilia (hair-like structures) extending into the mucus layer to catch odor molecules."
    },
    {
        name: "Supporting (Sustentacular) Cells",
        function: "Provide structural and metabolic support",
        lifespan: "Several months",
        location: "Surrounding receptor neurons",
        color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
        details: "Similar to glial cells in the brain, these cells insulate receptor neurons, regulate the chemical environment (ionic balance), and help detoxify potentially harmful chemicals."
    },
    {
        name: "Basal Cells",
        function: "Stem cells for regeneration",
        lifespan: "Long-lived",
        location: "Base of the epithelium",
        color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
        details: "These are the stem cells responsible for the regeneration of the olfactory epithelium. They divide and differentiate to replace damaged or aged olfactory receptor neurons."
    },
    {
        name: "Bowman's Glands",
        function: "Produce olfactory mucus",
        lifespan: "Long-lived",
        location: "Lamina propria (connective tissue)",
        color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
        details: "These glands secrete the mucus layer that covers the epithelium. This mucus is crucial for dissolving odor molecules and protecting the delicate sensory neurons."
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
        details: "The dissolved molecules bind to specific receptor proteins on the cilia of the olfactory neurons. This works like a 'lock and key' mechanism."
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
        truth: "Human olfaction is excellent and competitive with other mammals",
        explanation: "While dogs have more receptors, humans are incredibly sensitive to certain odors (like geosmin/rain) and can track scent trails. The idea of microsmatic humans is largely a 19th-century myth."
    },
    {
        myth: "Taste is the main driver of flavor",
        truth: "Smell is responsible for 75-95% of what we perceive as flavor",
        explanation: "The tongue only detects sweet, sour, salty, bitter, and umami. The complex nuances of flavor (like strawberry vs. raspberry) come from retronasal olfaction—smelling from the back of the mouth."
    },
    {
        myth: "Smell loss is trivial",
        truth: "Anosmia is linked to depression and safety risks",
        explanation: "Loss of smell affects appetite, social connection, and safety (detecting smoke/gas). It is strongly correlated with depression and reduced quality of life."
    },
    {
        myth: "You can't learn to smell better",
        truth: "The olfactory system is highly plastic and trainable",
        explanation: "Smell training (repeated exposure to scents) can physically change the brain and improve sensitivity, similar to learning a musical instrument."
    }
];
