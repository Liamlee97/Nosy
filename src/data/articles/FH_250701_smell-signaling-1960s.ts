import { Article } from './types';

export const smellSignaling1960s: Article = {
    id: "smell-signaling-1960s",
    title: "From Smell Molecule to Smell Perception, What's In Between?",
    excerpt: "Two discoveries in the 1960s offered the first real clues to how odors trigger electrical signals and how the brain sharpens those signals into recognizable smells.",
    category: "Fascinating History & Facts",
    readingTime: 4,
    publishDate: "2025-07-01",
    tags: ["Olfaction", "Neuroscience", "History"],
    author: "Liam Seungjin Lee",
    images: {
        "lettvinandpitts": {
            url: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Lettvin_Pitts.jpg",
            caption: "Jerome Lettvin (left) and Walter Pitts (right), photographed during their 1959 frog-eye research at MIT.",
            source: "Wikimedia Commons"
        },
        "olfactorybulb": {
            url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Location_of_olfactory_ensheathing_cells_%28OECs%29_within_the_olfactory_system.png",
            caption: "Olfactory epithelium, olfactory bulb, and the olfactory ensheathing cells (OECs) within the olfactory system.",
            source: "Wikimedia Commons"
        }
    },
    content: `
**By the early 1960s, scientists knew that odors somehow triggered electrical activity in the nose \u2014 but *what actually happened inside those neurons*?  

And once that signal reached the brain\u2019s olfactory bulb, how did the bulb keep hundreds of scent inputs from blurring together?

Two discoveries from this decade offered the first concrete clues to questions researchers had been asking for decades.**

## A Chemical Mystery Inside the Neuron

If an odor molecule touches the surface of an olfactory neuron, should that neuron immediately fire?  
Or is there a hidden step in between \u2014 a kind of internal \u201Ctranslator\u201D that converts chemistry into electricity?

In **1965**, **Robert Gesteland, Jerome Lettvin, and Walter Pitts** studied frog olfactory epithelium [1] and noticed something striking: electrical signals didn\u2019t appear instantly when odors were applied. Something inside the cell had to **change first**.

:::image(lettvinandpitts)

:::callout
**Fun Fact:** If the names Lettvin and Pitts sound familiar, it's because they are legends in neuroscience, but not for olfaction! Just six years earlier (in 1959), they co-authored *"What the Frog's Eye Tells the Frog's Brain"*, one of the most famous and highly cited papers in the history of visual processing. They essentially pivoted from the frog's eye to the frog's nose to see if similar principles applied.
:::

Their recordings revealed several striking findings:

- **Odor responses were genuinely chemical, not mechanical.** Controlled puffs of odor-free air or water vapor did not produce the same electrical patterns — the nose was responding to chemistry, not airflow.  

- **Odors generated characteristic "slow potentials"** across the nasal surface (now called the **electro-olfactogram**), with waveforms that varied by odor identity, concentration, and duration.  

- **Different odorants produced different electrical signatures.** Alcohols like methanol and butanol triggered distinct patterns, and paired odors sometimes interacted in complex, nonlinear ways.  

- **Responses resembled synaptic excitation and inhibition**, with saturation, fatigue, and polarity reversals under certain conditions — suggesting the nasal surface was an active, chemically mediated input stage, not a passive receptor sheet.

It would take until the **1980s** for researchers to link this process to intracellular second messengers like **cAMP**. But Gesteland\u2019s data raised the question that would drive the field forward: **if olfactory neurons could distinguish odors so precisely, what molecular machinery made that possible?** Linda Buck would later cite this paper as the first reference in her **Nobel lecture**, crediting it with anticipating the combinatorial coding her work confirmed decades later.

## How Does the Brain Keep Smells From Overlapping?

Even if odors trigger signals in the nose, another question loomed:  
**When those signals reach the olfactory bulb, how does the brain prevent similar smells from becoming confused with one another?**

In **1968**, two scientists \u2014 **Wilfrid Rall**, pioneer of computational neuroscience, and **Gordon Shepherd**, neuroscientist \u2014 combined theory and physiology to propose an elegant mechanism: **lateral inhibition** [2].

:::callout
**Fun Fact:** The "granule cells" responsible for this lateral inhibition were originally questioned by 19th-century scholars [3]. Because they lack a traditional axon, early scientists thought they might not even be true nerve cells! Rall and Shepherd's models proved they were actually sophisticated interneurons communicating via dendrite-to-dendrite synapses, solving an anatomical mystery.
:::

They suggested that:

- When a **mitral cell** becomes active, it excites nearby **granule cells**.  
- Those granule cells then **inhibit neighboring mitral cells**.  
- The result is a kind of **contrast enhancement**: active pathways are sharpened, and competing pathways are suppressed.

:::image(olfactorybulb)

This model raised a new possibility:

**Was the olfactory bulb not just relaying odors but actively shaping them \u2014 almost like tuning the focus of an image?**

The idea that early sensory processing involved computation, not just transmission, reshaped how neuroscientists thought about the olfactory system.

## Why These Clues Still Matter

Neither discovery solved the full puzzle of smell.  
But together, they shifted the field in a profound way:

- Gesteland\u2019s work showed the nose uses **selective, stimulus-specific responses** to distinguish odors.  
- Rall & Shepherd\u2019s model revealed that the brain uses **circuit-level processing** to refine them.

These were the first steps toward understanding a system that is both molecularly precise and computationally intricate.

## The Bigger Picture

Every time you smell something \u2014 fresh rain, hot asphalt, citrus peel \u2014 your neurons and your brain are performing a rapid, multi-layered analysis.  

The 1960s gave us the first glimpses of how that analysis begins: with chemical changes inside individual cells and coordinated interactions between networks of neurons.
  `,
    sources: [
        {
            title: "Chemical transmission in the nose of the frog (Gesteland et al., 1965, The Journal of Physiology)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1357665/"
        },
        {
            title: "Theoretical reconstruction of field potentials and dendrodendritic synaptic interactions in olfactory bulb (Rall & Shepherd, 1968, The Journal of Neurophysiology)",
            url: "https://doi.org/10.1152/jn.1968.31.6.884"
        },
        {
            title: "The olfactory granule cell: from classical enigma to central role in olfactory processing (Shepherd et al., 2007, Brain Research Reviews)",
            url: "https://doi.org/10.1016/j.brainresrev.2007.03.005"
        }
    ]
};
