import { Article } from './types';

export const whereSmellScienceStarted: Article = {
    id: "where-smell-science-started",
    title: "Smell Science: Where Did It All Start🕒?",
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
**What does a 17th-century brain map, the first smell textbook, and a hedgehog's brainwaves all have in common? They each marked turning points in the story of olfactory science.**

## A While Back...

Long before neuroscience was an established discipline, Thomas Willis (1621–1675) produced some of the earliest detailed anatomical descriptions of the brain and cranial nerves. In his 1664 work *Cerebri Anatome*, he highlighted the olfactory tract as the first cranial nerve [1][2].

:::callout
**Fun Fact:** Thomas Willis didn't start out as an anatomist, but once he did, he believed brain dissection could literally reveal the secrets of the human soul. In Cerebri Anatome (1664), he wrote that anatomy could "unlock the secret places of Man's Mind." He saw the nervous system as a God-designed blueprint shared with animals, while humans held an extra immortal soul.
:::

:::image(cerebrianatome)

## The First Smell Textbook in 1821

For nearly two centuries after Willis, smell remained a curiosity without its own science. That changed in **1821**, when French physician **Joseph Hippolyte Cloquet** published *Osphresiologie, ou Traité des Odeurs* — likely the world's first comprehensive monograph devoted entirely to the sense of smell [3].

Cloquet's treatise covered anatomy, physiology, pathology, and even the cultural significance of odor. He cataloged types of smell loss and proposed early classification systems, predating the better-known schemes of Zwaardemaker by over 70 years. It was an ambitious attempt to treat smell as a legitimate field of study — not just a footnote in anatomy textbooks.

:::image(cloquet)

## When Smell Became Testable

Jump to the late 1800s. Paul Broca (probably best known for discovering speech areas in the brain) placed our sense of smell on the anatomical map. He identified a ring of deep brain structures that earned the nickname the 'nose-brain' (rhinencephalon), and went a step further: he classified mammals as "osmatic" (smell-dominant, like dogs) or "anosmatic" (smell-reduced, like humans), and placed us firmly in the latter category [4]. His view was that for humans to develop higher intelligence and gain free will, our primitive smell center had to shrink. It was an influential idea, but one that has since been largely debunked.

Then came **Zwaardemaker in 1895**, who brought instruments into the mix. In his treatise *Die Physiologie des Geruchs*, he introduced the **olfactometer**, a glass-and-metal contraption used to deliver known amounts of odor in a controlled way [5].

:::image(olfactometer)

Suddenly, smell wasn't just abstract. It was measurable. This made it possible for the first time to quantify smell thresholds systematically. Shortly after, the idea of **olfactory fatigue** was introduced: your nose gives up temporarily after too much stimulation. Ever stopped noticing your perfume after a few minutes? That's olfactory fatigue at work.

## Smell Meets Electricity

The modern era kicked off in the **1940s** when Edgar Adrian (a Nobel laureate for his broader work on nerve signaling) turned his attention to the olfactory system of the hedgehog [6]. Using fine electrodes, he recorded electrical activity from the olfactory bulb and made a startling observation: different odors produced distinct spatial patterns of activity across the bulb — the first evidence that the brain might organize smells as a kind of map, not just a single on/off signal.

By the 1950s, Swedish physiologist Ulf Ottoson had created the **electro-olfactogram (EOG)** [7]. Instead of recording from nerves or the brain, the EOG captured the electrical response directly from the olfactory epithelium (the smell-sensing surface inside your nose!). It looked like sci-fi but gave real data on how noses detect odors.

## Why It Still Matters

These pioneers didn't have modern labs or brain scans. But with clever ideas and strange tools, they laid the foundation for everything we know about smell today.

So the next time you catch a whiff of fresh bread or wet pavement, remember: you're experiencing something scientists have been trying to decode for centuries (and still are).
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
