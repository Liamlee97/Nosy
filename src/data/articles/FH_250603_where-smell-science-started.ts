import { Article } from './types';

export const whereSmellScienceStarted: Article = {
    id: "where-smell-science-started",
    title: "Smell Science: Where and When Did It All Start?",
    excerpt: "From ancient anatomy to brain mapping and the first smell tests, take a quick tour through the origins of olfactory science.",
    category: "Fascinating History & Facts",
    readingTime: 4,
    publishDate: "2025-06-03",
    tags: ["Olfaction", "History", "Neuroscience"],
    author: "Liam Seungjin Lee",
    images: {
        "cerebrianatome": {
            url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/T._Willis_%22Cerebri_anatome%22%2C_1664%3B_title_page_Wellcome_L0018991.jpg",
            caption: "Cerebri Anatome (1664): The first to describe the olfactory tract in detail.",
            source: "Wellcome Collection, via Wikimedia Commons"
        },
        "cloquet": {
            url: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Hippolyte_Cloquet.jpg",
            caption: "Hippolyte Cloquet (1787 – March 3, 1840)",
            source: "via Wikimedia Commons"
        },
        "olfactometer": {
            url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Photograph_of_Olfactometer_in_Laboratory_at_Kawishiwi_Experiment_Station_-_DPLA_-_7e9cdefbffb635981bc016c3fd6eea85.jpg",
            caption: "Olfactometer in Laboratory at Kawishiwi Experiment Station, Kawishiwi RD.",
            source: "DPLA, via Wikimedia Commons"
        }
    },
    content: `
**What does a seventeenth-century brain atlas, an early French treatise on odors, a glass olfactometer, and a hedgehog's olfactory bulb have in common? Each marks a moment when smell became easier to describe, measure, or study as a biological system.**

## Before Modern Smell Science

People have wondered about odors for millennia. Ancient physicians and philosophers discussed the nose, breathing, and the effects of scents, but they lacked a modern understanding of nerves, receptors, and the brain.

A major early-modern step came in 1664, when English physician Thomas Willis published *Cerebri Anatome*. The book was a deeply influential account of the brain and cranial nerves, helping shift the study of the nervous system toward detailed anatomy. Willis described the olfactory nerves and pathways as part of this new anatomical framework [1][2].

:::callout
**Fun Fact:** Thomas Willis didn't start out as an anatomist, but once he did, he believed brain dissection could literally reveal the secrets of the human soul. In Cerebri Anatome (1664), he wrote that anatomy could "unlock the secret places of Man's Mind." He saw the nervous system as a God-designed blueprint shared with animals, while humans held an extra immortal soul.
:::

:::image(cerebrianatome)

## A Treatise Devoted to Smell

In 1821, French physician Joseph Hippolyte Cloquet published *Osphrésiologie, ou Traité des Odeurs, du Sens et des Organes de l’Olfaction*. It was one of the earliest comprehensive works devoted specifically to odor, smell, and the anatomy and diseases of the nose [3].

Cloquet discussed olfactory anatomy, physiology, pathology, and odor classification. He also argued that the olfactory region was located high in the nasal cavity, which was an important correction to earlier ideas about where smell occurred. His book helped establish smell as a subject that could be studied systematically rather than merely described [3].

:::image(cloquet)

## When Smell Became Measurable

Nineteenth-century investigators increasingly tried to make smell measurable. Paul Broca’s comparative anatomy helped popularize the term *rhinencephalon*, or “nose-brain,” for structures associated with olfaction. In 1879, Broca divided mammals into *osmatique* and *anosmatique* groups, placing humans in the latter category because he believed human behavior was less driven by smell [4].

That classification was not based on formal testing of human olfactory ability. It reflected Broca’s anatomical observations and his broader philosophical view of human free will. Later writers converted this idea into the familiar (but misleading) claim that humans are inherently poor smellers. Modern evidence shows that humans can distinguish an enormous range of odors and can perform remarkably well in several olfactory tasks [4].

Meanwhile, Dutch physiologist Hendrik Zwaardemaker helped make smell testable. He developed an olfactometer in the late 1880s, using an apparatus designed to control odor exposure and estimate detection thresholds. His 1895 treatise, *Die Physiologie des Geruchs*, became a landmark work in olfactory psychophysics [5].

:::image(olfactometer)

This did not solve every problem in smell measurement, but it established an important principle: odor perception could be studied with controlled stimuli rather than anecdotes alone.

## Smell Meets Electricity

In 1942, Nobel laureate Edgar Adrian recorded electrical activity from the olfactory bulb of the hedgehog. He found that different odorants could produce different, spatially distributed patterns of activity across the bulb [6]. The experiments were an early foundation for the modern idea that odor information is represented across organized neural populations rather than by a single on–off signal.

In the 1950s, David Ottoson characterized the electro-olfactogram, or EOG: a slow electrical potential recorded from the olfactory epithelium in response to an odor stimulus [7]. The EOG gave researchers a way to measure events near the sensory surface itself, complementing recordings from nerves and the brain.

## Why It Still Matters

These pioneers didn't have modern labs or brain scans. But with clever ideas and strange tools, they laid the foundation for everything we know about smell today.

Willis helped make olfactory anatomy visible. Cloquet treated smell as a subject worthy of its own systematic study. Zwaardemaker helped turn perception into a measurable outcome. Adrian and Ottoson made odor responses electrically observable.

Together, these advances laid groundwork for the modern study of olfactory receptors, neural circuits, smell loss, flavor, and the everyday mystery of how a few airborne molecules can become the experience of fresh bread, rain, coffee, or smoke.
  `,
    sources: [
        {
            title: "Dr Thomas Willis (Jay, 1999, Archives of Pathology & Laboratory Medicine)",
            url: "https://doi.org/10.5858/1999-123-0377-DTW"
        },
        {
            title: "Thomas Willis and the background to Cerebri Anatome (O'Connor, 2003, Journal of the Royal Society of Medicine)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC539424/"
        },
        {
            title: "Joseph Hippolyte Cloquet (1787–1840)—Physiology of smell: Portrait of a pioneer (Walusinski, 2018, Clinical and Translational Neuroscience)",
            url: "https://doi.org/10.1177/2514183X17738406"
        },
        {
            title: "Poor Human Olfaction is a Nineteenth Century Myth (McGann, 2017, Science)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5512720/"
        },
        {
            title: "A historical review of olfactometry (Nicolas & Bensafi, 2021, L’Année psychologique)",
            url: "https://doi.org/10.3917/anpsy1.213.0311"
        },
        {
            title: "Olfactory reactions in the brain of the hedgehog (Adrian, 1942, The Journal of Physiology)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1393326/"
        },
        {
            title: "Studies on slow potentials in the rabbit's olfactory bulb and nasal mucosa (Ottoson, 1959, Acta Physiologica Scandinavica)",
            url: "https://pubmed.ncbi.nlm.nih.gov/14429441/"
        }
    ]
};
