import { Article } from './types';

export const retronasalOlfaction: Article = {
    id: "retronasal-olfaction",
    title: "The Smell You Don't Sniff: How Retronasal Olfaction Creates Flavor",
    excerpt: "Most of what you call 'taste' is actually smell. But it's a special kind of smell that enters your nose from the back, not the front.",
    category: "Fascinating History & Facts",
    readingTime: 4,
    publishDate: "2026-05-19",
    tags: ["Olfaction", "Flavor", "Neurogastronomy", "Basic Science"],
    author: "Liam Seungjin Lee",
    content: `
**Hold your nose and eat a jelly bean. You'll taste sweet. Maybe sour. But you won't know if it's cherry or lime or grape. That information comes not from your tongue, but from your nose. Specifically, from a pathway called retronasal olfaction.**

## Two Routes to the Same Receptors

Odorant molecules can reach the olfactory epithelium in your nose by two routes.

**Orthonasal olfaction** is what most people think of as "smelling." You sniff, and airborne molecules enter through the nostrils and travel up to the olfactory region.

**Retronasal olfaction** happens during eating and drinking. When you chew food or swallow a sip of wine, volatile molecules are released in your mouth and travel up through the **nasopharynx** (the passage connecting the back of your mouth to the nasal cavity) to reach the olfactory epithelium from behind [1].

Both routes deliver molecules to the same olfactory receptors. But the brain treats them differently.

## The Brain Knows the Difference

In a landmark **2005 study in *Neuron***, **Dana Small** and colleagues at Yale used fMRI to show that orthonasal and retronasal olfactory stimuli activate **overlapping but distinct neural patterns** [2].

When the same odorant was delivered through the nose (orthonasal), the brain activated regions associated with sniffing and external object evaluation. When the same odorant was delivered through the mouth (retronasal), the brain activated regions associated with taste and feeding.

In other words, the brain treats the same molecule as an external object or as food, depending on which route it takes. The physical stimulus is identical. The perceptual interpretation is not.

:::callout
**Why this matters for flavor:** Flavor is not taste. Flavor is the brain's integrated experience of taste (sweet, sour, salty, bitter, umami), retronasal smell, texture, temperature, and trigeminal input (spice, menthol). Smell provides the vast majority of flavor's richness. Without retronasal olfaction, eating becomes flat and uninteresting.
:::

## Gordon Shepherd and Neurogastronomy

**Gordon Shepherd**, a neuroscientist at Yale, championed the importance of retronasal olfaction throughout his career. In his **2012 book *Neurogastronomy***, he argued that the human brain creates flavor in much the same way it creates visual images. Flavor is a constructed percept, built from multiple sensory streams and shaped by memory and context [3].

Shepherd emphasized several key points:

Retronasal olfaction is an active process. It's driven by the motor act of chewing and swallowing, not by passive diffusion. The brain coordinates jaw movement, tongue positioning, and breathing to optimize the release and delivery of volatiles.

Cooking is a human invention that massively increases the release of volatile molecules from food. This, Shepherd argued, means that human flavor perception co-evolved with cooking. Our brains are built to exploit retronasal olfaction in ways that no other animal does to the same extent [3].

## The Wine Taster's Secret

Wine tasting is almost entirely retronasal. When a sommelier swirls wine in their mouth, they are driving volatile molecules up through the nasopharynx. The "flavors" they describe (blackberry, tobacco, oak) are olfactory percepts, not tastes.

This is why people with anosmia find wine boring. They can detect sweet, sour, and bitter on the tongue. But the aromatic complexity is gone.

:::callout
**Try it yourself:** Pinch your nose completely closed, then eat a piece of chocolate. You'll taste sweetness and bitterness. Now release your nose while the chocolate is still in your mouth. The full "chocolate" flavor will suddenly appear. That sudden richness is retronasal olfaction kicking in.
:::

## Why Food Tastes "Wrong" After Smell Loss

Patients who lose their sense of smell after a virus or head injury often report that food tastes "bland" or "wrong." They usually attribute this to a taste problem. But standard taste testing often shows their tongue is fine. What's missing is the retronasal component.

This disconnect between expectation and experience is one of the most distressing aspects of anosmia. People don't realize how much of what they call "taste" is actually smell.

Understanding retronasal olfaction is the key to understanding why smell loss has such devastating effects on quality of life.
  `,
    sources: [
        {
            title: "Retronasal and orthonasal olfaction (Heilmann & Hummel, 2004, Chemical Senses)",
            url: "https://doi.org/10.1093/chemse/bjh025"
        },
        {
            title: "Differential neural responses to orthonasal and retronasal odorant delivery (Small et al., 2005, Neuron)",
            url: "https://doi.org/10.1016/j.neuron.2005.07.022"
        },
        {
            title: "Neurogastronomy: How the Brain Creates Flavor (Shepherd, 2012, Columbia University Press)",
            url: "https://doi.org/10.7312/shep15910"
        }
    ]
};
