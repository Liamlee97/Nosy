import { Article } from './types';

export const trigeminalChemesthesis: Article = {
    id: "trigeminal-chemesthesis",
    title: "The Other Nose Nerve: Trigeminal Chemesthesis",
    excerpt: "Menthol feels cool, chili burns, and ammonia stings. These sensations are not smell alone: they arise largely from chemical sensing by the trigeminal nerve.",
    category: "Fascinating History & Facts",
    readingTime: 5,
    publishDate: "2026-07-15",
    tags: ["Olfaction", "Trigeminal", "Chemesthesis", "Basic Science"],
    author: "Liam Seungjin Lee",
    content: `
**Sniff ammonia and your eyes may water. Breathe in menthol and your nose can feel cool. Eat wasabi and you may feel a sharp sting before you can describe its odor. Those sensations are not produced by olfaction alone. They arise largely from a second chemical-sensing system in the nose: the trigeminal system.**

## The Other Chemical Sense

The **trigeminal nerve** (cranial nerve V) provides much of the sensory input from the face, teeth, mouth, and nasal cavity. It detects touch, pressure, temperature, and pain. In the nasal lining, free endings of trigeminal sensory neurons also respond to irritating or pungent chemicals.

This chemical-touch system is called **chemesthesis**. It is distinct from olfaction, which detects odor molecules through olfactory receptor neurons, and from taste, which detects chemicals through taste buds. In daily life, however, the systems are tightly integrated: a single substance can smell, sting, cool, burn, or do several of these at once [1][2].

## Cooling, Burning, and Sting

Many familiar sensations involve transient receptor potential, or **TRP**, ion channels on sensory nerve endings. These channels convert chemical or thermal stimuli into neural signals.

**Menthol** activates TRPM8, a channel involved in sensing cool temperatures. Menthol does not literally refrigerate the nose or mouth; instead, it activates part of the neural machinery normally used to signal cooling [3].

**Capsaicin**, the pungent compound in chili peppers, activates TRPV1. TRPV1 also responds to noxious heat, which is why capsaicin can produce a burning sensation even when the food itself is not physically hot [3].

**Mustard oil, wasabi, and some garlic-derived compounds** can activate TRPA1, a channel that responds to a variety of reactive chemicals and contributes to sharp, stinging, or burning sensations [2][3]. Wasabi is a good example of mixed perception: it has an odor, but its dramatic nasal “hit” is largely trigeminal.

Ammonia, carbon dioxide, acids such as acetic acid, and high concentrations of ethanol can also stimulate intranasal trigeminal pathways. Their sharpness is not merely an odor quality. It is chemical irritation.

:::callout
**Smell versus chemical touch:** An odor can be pleasant, floral, fruity, or musty. Trigeminal chemesthesis adds qualities such as coolness, burning, tingling, prickling, or sting. Many real-world exposures combine both systems.
:::

## Most Odors Are Not “Pure”

It is tempting to divide airborne chemicals into “smells” and “irritants,” but the boundary is rarely clean. At sufficiently high concentrations, many volatile compounds can activate both olfactory receptors and trigeminal endings [4]. The balance depends on the chemical, its concentration, airflow, and the person experiencing it.

For research, scientists sometimes use odorants such as phenylethyl alcohol (rose-like odor) or vanillin because they produce little or no measurable nasal pungency under selected testing conditions. Even these labels should be used carefully: whether a compound behaves as a relatively selective olfactory stimulus depends on concentration and experimental method [5][6].

This overlap helps explain why vinegar can seem both sour-smelling and sharp, and why peppermint can seem both minty and cooling. The brain integrates olfactory and trigeminal signals into one coherent percept rather than presenting them as separate channels.

## What Anosmia Can and Cannot Tell Us

Someone with anosmia may still perceive strong irritants such as ammonia, menthol, or carbon dioxide because intranasal trigeminal pathways can remain functional even when olfaction is severely impaired. In electrophysiology studies of people with anosmia, olfactory stimuli failed to evoke olfactory responses, while carbon dioxide still evoked trigeminal responses [7].

But trigeminal sensation is not a substitute for smell. An anosmic person may sense a chemical's sting or cooling quality without recognizing its characteristic odor. In addition, smell loss and trigeminal function can interact; some people with anosmia also show reduced trigeminal sensitivity, depending on the underlying cause [8].

Clinicians therefore assess smell primarily with validated psychophysical odor tests. Trigeminal measures, such as ratings of ammonium vapor intensity, odor lateralization tasks, or specialized electrophysiologic testing can provide complementary information in selected settings, but they do not diagnose olfactory function on their own [8].

## Why Chemesthesis Matters

Chemesthesis gives food and air much of their physical character: the cooling freshness of mint, the burn of chili, the bite of strong spirits, the fizz of carbonation, and the warning sting of irritants.

It also serves a protective function. Pungency and irritation can prompt us to pull away, blink, cough, or change our breathing before exposure to potentially harmful airborne chemicals becomes greater. 

Olfaction tells us *what* an odor may be; trigeminal chemesthesis helps tell us how physically intense or irritating it is.
  `,
    sources: [
        {
            title: "Chemesthesis and the Chemical Senses as Components of a “Chemofensor Complex” (Green, 2011, Chemical Senses)",
            url: "https://doi.org/10.1093/chemse/bjr119"
        },
        {
            title: "Perception of Specific Trigeminal Chemosensory Agonists (Frasnelli et al., 2011, Neuroscience)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3150232/"
        },
        {
            title: "TRPs in Taste and Chemesthesis (Roper, 2014, Handbook of experimental pharmacology)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4667542/"
        },
        {
            title: "Interaction Between Chemoreceptive Modalities of Odour and Irritation (Cain & Murphy, 1980, Nature)",
            url: "https://pubmed.ncbi.nlm.nih.gov/7360255/"
        },
        {
            title: "Stimulus Selection for Intranasal Sensory Isolation: Eugenol Is an Irritant (Wise et al., 2012, Chemical Senses)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3379841/"
        },
        {
            title: "Determinants for Nasal Trigeminal Detection of Volatile Organic Compounds (Cometto-Muñiz et al., 2005, Chemical Senses)",
            url: "https://pubmed.ncbi.nlm.nih.gov/16141291/"
        },
        {
            title: "Olfactory and Intranasal Trigeminal Event-Related Potentials in Patients with Anosmia (Kobal & Hummel, 1998, Laryngoscope)",
            url: "https://pubmed.ncbi.nlm.nih.gov/9665252/"
        },
        {
            title: "Assessment of Intranasal Function of the Trigeminal Nerve in Daily Clinical Practice (Garefis et al., 2024, ORL; journal for oto-rhino-laryngology and its related specialties)",
            url: "https://pubmed.ncbi.nlm.nih.gov/38330928/"
        }
    ]
};