import { Article } from './types';

export const retronasalOlfaction: Article = {
    id: "retronasal-olfaction",
    title: "The Smell You Don't Sniff: How Retronasal Olfaction Creates Flavor",
    excerpt: "Much of what people casually call “taste” is aroma. During eating and drinking, volatile molecules reach the nose from the back of the mouth in a process called retronasal olfaction.",
    category: "Fascinating History & Facts",
    readingTime: 8,
    publishDate: "2026-06-03",
    tags: ["Olfaction", "Flavor", "Neurogastronomy", "Basic Science"],
    author: "Liam Seungjin Lee",
    content: `
**Hold your nose while eating a jelly bean and you can still sense sweetness or sourness. But identifying it as cherry, lime, or grape becomes much harder. That missing information is largely aroma, which is detected not only when you sniff through your nostrils, but also when odor molecules travel from the mouth to the nose during eating.**

## Two Routes to Smell

Odorant molecules can reach the olfactory epithelium through two main routes.

**Orthonasal olfaction** is the route most people mean by “smelling.” Volatile molecules in the surrounding air enter through the nostrils during breathing or sniffing and reach the olfactory region high in the nasal cavity.

**Retronasal olfaction** occurs during eating and drinking. Volatile molecules released from food or drink in the mouth move through the pharynx toward the nasal cavity, particularly during exhalation, and eventually reach the same olfactory epithelium from behind [1]. Chewing, mouth movements, swallowing, food temperature, and the physical properties of food can all influence how aromas are released and transported [2][3].

The two routes ultimately stimulate the same broad peripheral olfactory system. Yet they do not necessarily produce the same perceptual experience. In controlled experiments, retronasal thresholds can be higher and perceived intensity can be lower than with orthonasal stimulation, even when odor delivery is carefully monitored [1].

## Why Aroma Becomes Flavor

In everyday language, people often call the whole experience of eating “taste.” Scientifically, **taste** refers more narrowly to gustatory signals such as sweet, sour, salty, bitter, and umami. **Flavor** is the broader multisensory experience created by the brain from taste, retronasal aroma, texture, temperature, and trigeminal sensations such as the burn of chili, the cooling of menthol, or the tingle of carbonation [4].

Retronasal smell is a major source of the identifiable character of foods and drinks. It is what helps distinguish a strawberry-flavored candy from a cherry-flavored one when their basic taste qualities may be very similar. But it would be misleading to assign a fixed percentage (such as “most” or “80%”) to smell in every meal. The balance changes with the food, the odorants involved, texture, temperature, expectation, and the person's sensory function.

:::callout
**Terminology distinction:** Sweetness is a taste. The fruity, roasted, floral, vanilla-like, or coffee-like qualities that make foods recognizable are largely aromas. When aroma reaches the olfactory system from the mouth, it is experienced as part of flavor rather than as an external smell.
:::

## The Brain Reads the Route

The fact that orthonasal and retronasal odor delivery use the same nasal receptors does not mean the brain treats them identically.

In a landmark 2005 fMRI study, Dana Small and colleagues compared orthonasal and retronasal delivery of vaporized odorants in humans. The same odor could produce different patterns of brain activity depending on its route of entry [5]. Retronasal delivery was associated with activity in regions including the mouth area of primary somatosensory cortex, consistent with the experience of a retronasal odor as coming from the mouth.

The neural differences were not uniform for every odor. They depended partly on whether the odorant had food-related meaning: route-dependent differences were observed for chocolate but not for several nonfood odorants tested in the same study [5]. That nuance matters. The experiment supports the idea that the brain integrates odor route and food context; it does not show that all retronasal odors activate one fixed “feeding network.”

## Gordon Shepherd and Neurogastronomy

Neuroscientist Gordon Shepherd helped bring retronasal olfaction to wider attention through the field he called **neurogastronomy**. In his book *Neurogastronomy: How the Brain Creates Flavor and Why It Matters*, he argued that flavor is an active construction of the brain rather than a property contained in food alone [6].

This framework highlights that eating is dynamic. Chewing and swallowing alter the release and movement of volatile molecules, while breathing patterns help carry them from the back of the mouth toward the nose. Measurements of retronasal airflow show relatively sustained low-rate airflow during sampling, punctuated by higher-rate pulses that are often associated with swallowing [2]. Computational and experimental work also suggests that airway anatomy can favor the transport of food volatiles toward the nasal cavity during exhalation [3].

## Wine, Chocolate, and a Simple Test

Wine tasting offers an intuitive example. A sommelier may describe blackberry, tobacco, oak, floral, or roasted notes. These are mostly aroma descriptors, not basic tastes. Sweetness, sourness, bitterness, astringency, temperature, and mouthfeel also shape the experience, but retronasal olfaction is central to perceived aromatic complexity.

:::callout
**Try it yourself:** Pinch your nostrils closed, place a small piece of chocolate in your mouth, and notice sweetness, bitterness, texture, and melting. Then release your nose while the chocolate remains in your mouth. Aromatic qualities may become much more noticeable as volatile molecules reach the olfactory epithelium retronasally.
:::

## Why Smell Loss Changes Eating

People with olfactory dysfunction often say that food has “lost its taste” or tastes “wrong.” Frequently, the major problem is not a loss of basic gustatory function, but loss or distortion of the orthonasal and retronasal aromas that normally give food its recognizable identity.

The relationship is not always straightforward. Some patients can have differing levels of orthonasal and retronasal impairment, and a person may report altered flavor even when a simple tongue-taste test is normal. In ENT patients with olfactory loss from varied causes, flavor-identification performance improved predictions of health and psychosocial functioning beyond orthonasal olfactory measures alone [7].

That is why smell loss can affect more than enjoyment of food. It may alter appetite, meal choices, social eating, and quality of life. Retronasal olfaction is not a minor accessory to taste. It is a core component of how the brain builds flavor from food and drink.
  `,
    sources: [
        {
            title: "A New Method for Comparing Orthonasal and Retronasal Olfaction (Heilmann & Hummel, 2004, Behavioral Neuroscience)",
            url: "https://doi.org/10.1037/0735-7044.118.2.412"
        },
        {
            title: "Characterization of Retronasal Airflow Patterns during Intraoral Fluid Discrimination Using a Low-Cost, Open-Source Biosensing Platform (Cousens et al., 2022, Sensors)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9505993/"
        },
        {
            title: "Optimal Directional Volatile Transport in Retronasal Olfaction (Ni et al., 2015, Proceedings of the National Academy of Sciences)",
            url: "https://doi.org/10.1073/pnas.1511495112"
        },
        {
            title: "Multisensory Flavor Perception (Spence, 2015, Cell)",
            url: "https://doi.org/10.1016/j.cell.2015.03.007"
        },
        {
            title: "Differential Neural Responses Evoked by Orthonasal versus Retronasal Odorant Perception in Humans (Small et al., 2005, Neuron)",
            url: "https://doi.org/10.1016/j.neuron.2005.07.022"
        },
        {
            title: "Neurogastronomy: How the Brain Creates Flavor and Why It Matters (Shepherd, 2012, Columbia University Press)",
            url: "https://doi.org/10.7312/shep15910"
        },
        {
            title: "Quality of Life in Patients With Olfactory Loss Is Better Predicted by Flavor Identification Than by Orthonasal Olfactory Function (Oleszkiewicz et al., 2019, Chemical Senses)",
            url: "https://doi.org/10.1093/chemse/bjz027"
        }
    ]
};