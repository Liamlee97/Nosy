import { Article } from './types';

export const penfieldOlfactoryCortex: Article = {
    id: "penfield-olfactory-cortex",
    title: "Wilder Penfield and the Cortical Map of Smell",
    excerpt: "A neurosurgeon stimulated patients' brains during surgery and accidentally revealed where smell lives in the cortex.",
    category: "Fascinating History & Facts",
    readingTime: 4,
    publishDate: "2025-11-18",
    tags: ["Olfaction", "Neurosurgery", "History", "Neuroscience"],
    author: "Liam Seungjin Lee",
    images: {
        "penfield": {
            url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Wilder_Penfield.png",
            caption: "Wilder Penfield",
            source: "Wikimedia Commons"
        }
    },
    content: `
**In the 1930s, a neurosurgeon in Montreal began stimulating the brains of conscious patients with a gentle electrical probe. He was mapping seizures. But along the way, he stumbled onto something remarkable about smell.**

## The Montreal Experiments

**Wilder Penfield** (1891–1976) was one of the pioneers of modern neurosurgery. He worked at the **Montreal Neurological Institute**, which he co-founded in 1934. His technique was bold but effective. During surgery for epilepsy, he would keep patients awake under local anesthesia and apply small electrical currents to different regions of the brain [1].

:::image(penfield)

The patients could report what they experienced in real time. A touch on one area might produce a tingling in the right hand. A touch on another might evoke a sound, a memory, or a visual flash.

When Penfield stimulated regions near the **uncus** and the **medial temporal lobe**, patients sometimes reported vivid olfactory hallucinations. They smelled things that weren't there. Burnt rubber. Rotting fruit. Something unpleasant and hard to name [1].

## The Uncinate Fit Connection

Penfield's observations had a historical precedent. In the **1880s**, the neurologist **John Hughlings Jackson** had described a peculiar type of epileptic seizure that began with an olfactory hallucination. He called them **"uncinate fits"** because the seizure focus appeared to be in the uncus, a hook-shaped structure on the inner surface of the temporal lobe [2].

Patients with uncinate fits reported a strange sequence. An intense smell would suddenly appear. Then came a "dreamy state." A sense of familiarity, sometimes d\u00e9j\u00e0 vu. Occasionally, automatic movements of the mouth and lips (like chewing).

Jackson had proposed that the temporal lobe was involved in smell decades before Penfield confirmed it with direct stimulation.

## Mapping the Olfactory Cortex

Together, Jackson's clinical observations and Penfield's surgical experiments established that the **temporal lobe** and specifically the **uncus, anterior parahippocampal gyrus, and amygdala (collectively forming the piriform cortex)** were critical structures for olfactory processing [3].

This was an unusual finding. Most other senses are processed in the neocortex, the evolutionarily newer outer layer of the brain. But smell is processed in the **paleocortex**, one of the oldest parts of the cerebral cortex. It's only three cell layers thick, compared to six in the neocortex.

The olfactory cortex sits deep in the temporal lobe, close to structures involved in emotion (amygdala) and memory (hippocampus). This anatomical proximity helps explain why smells are so powerfully linked to emotional memories (check out my article on **Proust Effect**!).

## An Accidental Discovery

Penfield wasn't trying to study smell. He was trying to cure epilepsy. But his systematic mapping revealed something that pure anatomists had only guessed at. The olfactory cortex is buried, ancient, and tightly woven into the brain's emotional and memory circuits.

His work showed that you can't understand smell by looking at the nose alone. You have to go deeper. Into the temporal lobe. Into the oldest layers of the brain.

## Why It Still Matters

Modern neuroimaging has confirmed and expanded Penfield's findings. fMRI studies show that odors activate the piriform cortex [3].

But Penfield was there first.
  `,
    sources: [
        {
            title: "Epilepsy and the Functional Anatomy of the Human Brain (Penfield & Jasper, 1954, Little, Brown and Company)",
            url: "https://archive.org/details/epilepsyfunction0000penf/mode/2up"
        },
        {
            title: "On a particular variety of epilepsy: intellectual aura (Hughlings Jackson, 1888, Brain)",
            url: "https://doi.org/10.1093/brain/11.2.179"
        },
        {
            title: "Central Processing of the Chemical Senses: An Overview (Lundström et al., 2010, ACS chemical neuroscience)",
            url: "https://doi.org/10.1021/cn1000843"
        }
    ]
};
