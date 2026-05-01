import { Article } from './types';

export const vomeronaslDebate: Article = {
    id: "vomeronasal-debate",
    title: "The Organ That Vanished: The Vomeronasal Organ",
    excerpt: "Many animals have a second smell organ dedicated to pheromones. Humans have a remnant of one. Does it still work?",
    category: "Fascinating History & Facts",
    readingTime: 4,
    publishDate: "2025-11-04",
    tags: ["Olfaction", "Pheromones", "Evolution", "History"],
    author: "Liam Seungjin Lee",
    images: {
        "jacobson": {
            url: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Jacobson%27s_organ_in_a_reptile.svg",
            caption: "A diagram of the vomeronasal organ in a snake.",
            source: "Wikimedia Commons"
        },
        "human-vomeronasal-pit": {
            url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Gray51.png",
            caption: "Frontal section of nasal cavities of a human embryo.",
            source: "Wikimedia Commons"
        }
    },
    content: `
**Snakes have one. Mice have one. Dogs have one. Many animals do. It's called the vomeronasal organ, and it detects pheromones. Humans appear to have a remnant of it tucked inside the nasal septum. But does it actually do anything?**

## Jacobson's Organ

The vomeronasal organ (VNO) was first described by Danish anatomist **Ludwig Jacobson** in **1813** [1]. He found it in a wide range of mammals. Later it was also identified in reptiles and amphibians.

In animals that rely on it, the VNO is a separate sensory system from the main olfactory epithelium. It has its own receptor neurons, its own nerve pathway, and its own brain target (the accessory olfactory bulb). It specializes in detecting pheromones and other social chemical signals.

:::image(jacobson)

:::callout
**Fun Fact:** In snakes, the VNO is why they flick their tongues. The tongue collects molecules from the air and delivers them to the VNO openings in the roof of the mouth.
:::

## Do Humans Have One?

Here's where it gets interesting. If you look inside the human nasal septum with an endoscope, you can often find a small pit or depression. It looks like a vestigial VNO [2].

About 90% of adults have this structure. It's called the **vomeronasal pit**. But having the pit doesn't mean it works. And the evidence strongly suggests it doesn't.

:::image(human-vomeronasal-pit)

## The Genetic Evidence

The most compelling evidence comes from molecular biology. The VNO in mice relies on two families of receptor genes: **V1R** and **V2R**. It also requires a specific ion channel called **TRPC2** to convert chemical signals into electrical ones [3].

In humans, the picture is stark:

Almost all V1R and V2R genes are **pseudogenes**. They're broken copies that no longer produce functional proteins. And the TRPC2 gene is also a pseudogene in humans [3].

In other words, even if the physical structure exists, the molecular machinery needed to make it work is gone.

## When Did We Lose It?

The degradation of VNO genes appears to have begun early in primate evolution. Old World monkeys and apes (including humans) have largely nonfunctional vomeronasal genetics. New World monkeys retain slightly more, but even there, the system is reduced [4].

The prevailing theory is that as primates evolved trichromatic color vision (three types of cone cells instead of two), they relied more on visual cues for social and reproductive signaling. The pressure to maintain a working VNO relaxed. Over millions of years, the genes accumulated mutations and became pseudogenes.

:::callout
**Not a sudden loss.** The VNO didn't disappear overnight. It eroded gradually over tens of millions of years of primate evolution. The human VNO pit is the fossil of a system that once mattered enormously.
:::

## So Are Human Pheromones Real?

This is a separate question which is discussed in another article. Even without a functioning VNO, the main olfactory system can still detect socially relevant chemicals. Humans clearly respond to body odors. We can distinguish relatives from strangers by smell. Mothers recognize their newborns' scent.

But whether any single molecule meets the strict definition of a "pheromone" in humans remains unproven. The VNO debate didn't settle the pheromone question. It just showed that if humans respond to social chemicals, they're doing it through the main olfactory system, not through a dedicated pheromone organ.

## A Vanishing Act

The human vomeronasal organ is one of evolution's most interesting disappearing acts. The structure lingers. The genes don't. But the debate over what it all means probably still hasn't been settled.
  `,
    sources: [
        {
            title: "Vomeronasal Organ (Zancanaro, 2014, Neurobiology of Chemical Communication)",
            url: "https://www.ncbi.nlm.nih.gov/books/NBK200982/"
        },
        {
            title: "Vomeronasal organ and human pheromones (Trotier, 2011, European Annals of Otorhinolaryngology, Head and Neck Diseases)",
            url: "https://doi.org/10.1016/j.anorl.2010.11.008"
        },
        {
            title: "TRPC2 and the Molecular Biology of Pheromone Detection in Mammals (Liman & Dulac, 2007, TRP Ion Channel Function in Sensory Transduction and Cellular Signaling Cascades)",
            url: "https://www.ncbi.nlm.nih.gov/books/NBK5264/"
        },
        {
            title: "Loss of olfactory receptor genes coincides with the acquisition of full trichromatic vision (Gilad et al., 2004, PLoS Biology)",
            url: "https://doi.org/10.1371/journal.pbio.0020005"
        }
    ]
};
