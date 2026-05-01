import { Article } from './types';

export const orsOutsideNose: Article = {
    id: "ors-outside-nose",
    title: "Smell Receptors Where You Least Expect Them",
    excerpt: "Olfactory receptors aren't just in your nose. Scientists have found them in sperm, kidneys, skin, and even tumors. What are they doing there?",
    category: "Fascinating History & Facts",
    readingTime: 4,
    publishDate: "2025-12-02",
    tags: ["Olfaction", "Genetics", "Receptors", "History"],
    author: "Liam Seungjin Lee",
    content: `
**When Buck and Axel discovered the olfactory receptor gene family in 1991, everyone assumed these genes did one thing: detect smells in the nose. Then scientists started finding them in places that had nothing to do with smelling.**

## The First Surprise: Sperm

In **2003**, **Hanns Hatt** and his team at Ruhr University Bochum in Germany made a startling discovery. They found that human sperm cells express a functional olfactory receptor called **OR1D2** (aka OR17-4) [1].

Even more surprisingly, OR1D2 responds to **bourgeonal**, a synthetic molecule with a lily-of-the-valley scent. When Hatt's group exposed sperm to bourgeonal in a dish, the sperm swam toward the source. The receptor was acting as a chemical guidance system, helping sperm navigate toward the egg through chemotaxis [1].

This was the first clear demonstration that olfactory receptors could have biological functions completely unrelated to the sense of smell.

## Then They Found More

After Hatt's discovery, researchers began systematically searching for olfactory receptors in other tissues. The results were remarkable. Olfactory receptors (now called "ectopic" ORs) turned up in:

**Kidneys.** Several studies found ORs expressed in kidney tubule cells. One receptor, OR51E2, appears to play a role in regulating blood pressure through renin secretion [2].

**Skin.** In **2014**, Busse et al. (again from Hatt's lab) showed that the receptor **OR2AT4** is expressed in human keratinocytes (skin cells) and responds to **Sandalore**, a synthetic sandalwood odorant. Activating this receptor promoted cell proliferation and wound healing in cell culture experiments [3].

**Prostate.** OR51E2 is expressed in prostate cells and has been studied in relation to prostate cancer. Activating this receptor inhibited proliferation of certain prostate cancer cell lines in vitro [4].

## What Are They Doing?

The short answer: we're still figuring it out. But the emerging picture is that olfactory receptors are a large family of **chemosensors** that evolution has repurposed for many different tasks beyond smelling.

In the nose, they detect airborne molecules. In other tissues, they detect waterborne chemicals, metabolites, or signaling molecules in the local environment. The core function is the same: bind a specific chemical, trigger a G-protein signaling cascade, and produce a cellular response.

:::callout
**Fun Fact:** Humans have about 400 functional olfactory receptor genes. Systematic gene expression studies suggest that at least 100 of these are expressed somewhere outside the nose [4]. That's a quarter of the entire family.
:::

## Why It Matters

These discoveries have potential clinical implications. If OR2AT4 genuinely promotes wound healing, activating it with Sandalore-like compounds could lead to new dermatological treatments. If OR51E2 can inhibit prostate cancer cell growth, it could become a drug target.

More broadly, the finding challenges how we think about sensory genes. The olfactory receptor family isn't just a "nose gene family." It's a vast toolkit of chemical detectors that the body has deployed wherever it needs to sense molecules in its environment.

The nose just happens to be where we first noticed them.
  `,
    sources: [
        {
            title: "Sperm-activating odor receptors and chemotaxis (Spehr et al., 2003, Science)",
            url: "https://doi.org/10.1126/science.1080376"
        },
        {
            title: "Role of Ectopic Olfactory Receptors in the Regulation of the Cardiovascular–Kidney–Metabolic Axis (Beito et al., 2024, Life)",
            url: "https://doi.org/10.3390/life14050548"
        },
        {
            title: "A synthetic sandalwood odorant induces wound-healing processes in human keratinocytes via the olfactory receptor OR2AT4 (Busse et al., 2014, Journal of Investigative Dermatology)",
            url: "https://doi.org/10.1038/jid.2014.273"
        },
        {
            title: "The olfactory receptor OR51E2 regulates prostate cancer aggressiveness and modulates STAT3 in prostate cancer cells and in xenograft tumors (Thomsen et al., 2025, BMC cancer)",
            url: "https://doi.org/10.1186/s12885-025-13928-0"
        },
        {
            title: "Expression Profile of Ectopic Olfactory Receptors Determined by Deep Sequencing (Flegel et al., 2013, PLOS ONE)",
            url: "https://doi.org/10.1371/journal.pone.0055368"
        }
    ]
};
