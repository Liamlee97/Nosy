import { Article } from './types';

export const whereSmellScienceStarted: Article = {
    id: "where-smell-science-started",
    title: "Smell Science: Where Did It All Start?",
    excerpt: "From ancient anatomy to brain mapping and the first smell tests, take a quick tour through the curious origins of olfactory science.",
    category: "Fascinating History",
    readingTime: 3,
    publishDate: "2025-06-03",
    tags: ["Olfaction", "History", "Neuroscience"],
    author: "Dr. Liam Lee",
    images: {
        "cerebrianatome": {
            url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/T._Willis_%22Cerebri_anatome%22%2C_1664%3B_title_page_Wellcome_L0018991.jpg",
            caption: "Cerebri Anatome (1664): The first to describe the olfactory tract in detail.",
            source: "Wellcome Collection, via Wikimedia Commons"
        },
        "olfactometer": {
            url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Photograph_of_Olfactometer_in_Laboratory_at_Kawishiwi_Experiment_Station_-_DPLA_-_7e9cdefbffb635981bc016c3fd6eea85.jpg",
            caption: "Olfactometer in Laboratory at Kawishiwi Experiment Station, Kawishiwi RD.",
            source: "DPLA, via Wikimedia Commons"
        },
        "moth": {
            url: "https://upload.wikimedia.org/wikipedia/commons/8/87/Pheromone_moth_trap.jpg",
            caption: "Pheromone moth trap.",
            source: "Wikimedia Commons"
        }
    },
    content: `
**What does a 17th-century brain map, a 19th-century glass instrument, and the scent trail of a silk moth have in common? They each marked turning points in the story of olfactory science.**

## A While Back...

Long before neuroscience was an established discipline, Thomas Willis (1621–1675) produced some of the earliest detailed anatomical descriptions of the brain and cranial nerves. In his 1664 work *Cerebri Anatome*, he highlighted the olfactory tract as the first cranial nerve [1].

:::callout
**Fun Fact:** Thomas Willis didn’t start out as an anatomist, but once he did, he believed brain dissection could literally reveal the secrets of the human soul. In Cerebri Anatome (1664), he wrote that anatomy could “unlock the secret places of Man’s Mind.” He saw the nervous system as a God-designed blueprint shared with animals, while humans held an extra immortal soul—an idea that coloured even his descriptions of structures like the olfactory tract.
:::

:::image(cerebrianatome)

## When Smell Became Testable

Jump to the late 1800s. Paul Broca—best known for discovering speech areas in the brain—put our sense of smell on the map. He identified a specific ring of deep brain structures that eventually earned the nickname the 'nose-brain' (rhinencephalon). His take? He argued that for humans to develop higher intelligence, our 'primitive' smell center had to shrink to make room [3]. That’s… debatable.

Then came Zwaardemaker in 1888, who brought tools into the mix. He invented the **olfactometer**, a glass-and-metal contraption used to deliver known amounts of odor [4].

:::image(olfactometer)

Suddenly, smell wasn’t just abstract—it was measurable. This made it possible for the first time to quantify smell thresholds systematically. Shortly after, the idea of **olfactory fatigue** was introduced: your nose gives up temporarily after too much stimulation. Ever stopped smelling your perfume after a few minutes? That’s olfactory fatigue at work.

## Smell Meets Electricity

The modern era kicked off in the 1930s when Edgar Adrian (a Nobel Prize winner, no less) recorded electrical signals from the olfactory nerves of a hedgehog [5]. That’s right—hedgehog brainwaves showed us that smell has a rhythm. These early studies revealed that odors produce unique wave patterns in the brain, almost like scent fingerprints.

By the 1950s, Swedish physiologist Ulf Ottoson had created the **electro-olfactogram (EOG)** [6]. Instead of recording from nerves or the brain, the EOG captured the electrical response directly from the olfactory epithelium—the smell-sensing surface inside your nose. It looked like sci-fi but gave real data on how noses detect odors.

## Bonus: A Moth Love Story

Not all breakthroughs came from mammals. In 1959, Adolf Butenandt discovered the first-ever **pheromone**, called **bombykol**, in silk moths [7].

:::image(moth)

He found that a single molecule released by a female could drive a male into a fluttery frenzy—proof that chemical signals could carry powerful messages.

## Why It Still Matters

These pioneers didn't have modern labs or brain scans. But with clever ideas and strange tools, they laid the foundation for everything we know about smell today.

So the next time you catch a whiff of fresh bread or wet pavement, remember: you're experiencing something scientists have been trying to decode for centuries (and still are).
  `,
    sources: [
        {
            title: "Dr Thomas Willis",
            url: "https://doi.org/10.5858/1999-123-0377-DTW"
        },
        {
            title: "Thomas Willis and the background to Cerebri Anatome",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC539424/"
        },
        {
            title: "Poor Human Olfaction is a Nineteenth Century Myth",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5512720/"
        },
        {
            title: "A historical review of olfactometry",
            url: "https://doi.org/10.3917/anpsy1.213.0311"
        },
        {
            title: "Olfactory reactions in the brain of the hedgehog",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1393326/"
        },
        {
            title: "Studies on slow potentials in the rabbit's olfactory bulb and nasal mucosa",
            url: "https://pubmed.ncbi.nlm.nih.gov/14429441/"
        },
        {
            title: "On the sex attractant of the silkworm moth Bombyx mori. Isolation and structure. (In German)",
            url: "https://doi.org/10.1515/znb-1959-0417"
        }
    ]
};
