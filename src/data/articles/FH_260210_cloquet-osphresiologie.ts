import { Article } from './types';

export const cloquetOsphresiologie: Article = {
    id: "cloquet-osphresiologie",
    title: "Hippolyte Cloquet's Osphresiologie (1821): The First Textbook on Olfaction",
    excerpt: "Two hundred years ago, a French physician wrote the world's first comprehensive book about the sense of smell. Most people have never heard of it.",
    category: "Fascinating History & Facts",
    readingTime: 4,
    publishDate: "2026-02-10",
    tags: ["Olfaction", "History", "Medical History"],
    author: "Liam Seungjin Lee",
    images: {
        "cloquet": {
            url: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Hippolyte_Cloquet.jpg",
            caption: "Hippolyte Cloquet (1787-1840)",
            source: "via Wikimedia Commons"
        }
    },
    content: `
**In 1821, a French physician named Joseph Hippolyte Cloquet published a book with a title that most people couldn't pronounce. It was called *Osphresiology, ou Traité des Odeurs, du Sens et des Organes de l'Olfaction*, which literally translates to "Osphresiologie, or Treatise on Odors, the Sense and Organs of Olfaction". It was 800 pages long. And it was, as far as anyone knows, the first comprehensive monograph about the sense of smell.**

## Who Was Cloquet?

**Joseph Hippolyte Cloquet** (1787-1840) was a physician and anatomist working in Paris during a golden age of French medicine. He was part of a medical family. His brother, **Jules Germain Cloquet**, was a prominent surgeon. Hippolyte himself was known for careful anatomical work and a wide-ranging intellectual curiosity [1].

:::image(cloquet)

He was not primarily an olfactory researcher. He was a physician who became fascinated by smell and decided to compile everything known about it into a single work.

## What the Book Covered

*Osphresiologie* was remarkably comprehensive for its time [1]. It addressed:

**Anatomy.** Cloquet described the structures of the nose, including the olfactory epithelium and olfactory nerves, based on the best anatomical knowledge available in the early 19th century.

**Physiology.** He discussed theories of how odors were detected (e.g. odors are atmospheric molecules emanating from substances, captured by nasal mucus and acting on the olfactory mucosa). Though of course the molecular mechanisms wouldn't be understood for another 170 years.

**Pathology.** He cataloged disorders of smell, including anosmia and hyperosmia (heightened smell sensitivity). He documented cases of smell loss following head injury, nasal disease, and fever.

**Classification.** He proposed systems for organizing odors into categories (e.g. pleasant vs unpleasant, protective vs harmful), predating the better-known schemes of Zwaardemaker (1895) and Henning (1916) by decades.

**Cultural significance.** Cloquet went beyond the biological. He discussed the role of smell in daily life, in cuisine, in perfumery, and in medicine. He considered how odors affected emotions and behavior.

## Why It Was Likely Forgotten

Despite its breadth, *Osphresiologie* didn't have lasting influence on the trajectory of olfactory science. There are several reasons.

**Language.** The book was written in French at a time when the center of scientific publishing was shifting toward German and English.

**Timing.** The book appeared before the tools existed to test its ideas. There were no smell tests, no electrophysiology, no molecular biology. Many of Cloquet's descriptions were qualitative and observational.

**No successors?** Cloquet died in 1840 at age 52. He added unfortunately did not add more to advance the research [2]. The book was a singular achievement, not the beginning of a research program.

## Rediscovery

Cloquet's *Osphresiologie* is now recognized as a remarkable document. It demonstrates that at least one 19th-century physician understood that smell was complex enough, important enough, and mysterious enough to warrant attention.

He was ahead of his time. By about two centuries.
  `,
    sources: [
        {
            title: "Joseph Hippolyte Cloquet (1787-1840): Physiology of smell: Portrait of a pioneer",
            url: "https://doi.org/10.1177/2514183X17738406"
        },
        {
            title: "A Memoir of Olfaction (Schiller, 1997, Journal of the History of the Neurosciences)",
            url: "https://doi.org/10.1080/09647049709525698"
        }
    ]
};
