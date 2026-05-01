import { Article } from './types';

export const monellCenter: Article = {
    id: "monell-center",
    title: "The Monell Chemical Senses Center: A Lab Dedicated Entirely to Smell and Taste",
    excerpt: "In 1968, a research center opened in Philadelphia with the mission to understand the chemical senses.",
    category: "Fascinating History & Facts",
    readingTime: 4,
    publishDate: "2026-01-27",
    tags: ["Olfaction", "Taste", "History", "Research"],
    author: "Liam Seungjin Lee",
    images: {
        "monell": {
            url: "https://upload.wikimedia.org/wikipedia/en/d/da/GROUP_37.jpg",
            caption: "The Monell Chemical Senses Center, group photo in 2008",
            source: "Wikimedia Commons"
        },
        "dog-sniffing": {
            url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/New_Guinea_Singing_Dog_sniffing_the_ground.jpg",
            caption: "New Guinea Singing Dog sniffing the ground",
            source: "Wikimedia Commons"
        }
    },
    content: `
**Most research on smell and taste happens inside larger neuroscience or biology departments. But one institution in Philadelphia is dedicated entirely to the chemical senses. It has been since 1968.**

## How It Started

The **Monell Chemical Senses Center** was founded in **1968** by **Morley Kare**, a physiologist at the University of Pennsylvania who specialized in taste research. Funding came from the **Ambrose Monell Foundation**, established by the New York investor Ambrose Monell [1].

The idea was unusual for its time. The chemical senses (smell and taste) were not considered prestigious research areas in the 1960s. Most neuroscientists focused on vision, hearing, or motor control. Creating an independent center devoted to chemosensation was a bet that this field would matter.

That bet paid off.

:::image(monell)

## What Makes Monell Unique

Monell is the only independent, non-profit research center in the world focused exclusively on understanding smell, taste, and chemical irritation. It is not a university department. It has its own building in the University City district of Philadelphia and its own research staff.

What distinguishes Monell from a typical academic lab is its **interdisciplinary breadth**. Under one roof, Monell houses molecular biologists, geneticists, psychophysicists, food scientists, clinicians, and anthropologists. They study everything from the molecular structure of taste receptors to the cultural meaning of food preferences [2].

## Key Scientists and Contributions

Many influential chemosensory researchers have worked at Monell over its 50-plus year history:

**Gary Beauchamp** (tenure 1971–present) studied the development of taste preferences, particularly the innate human preference for sweet and the rejection of bitter. His work showed that these preferences are present from birth and shaped by both genetics and early experience.

**George Preti** (tenure 1971–2020) was a pioneer in human body odor chemistry. His analytical work identified specific volatile compounds in axillary (underarm) secretions and studied how body odor varies with diet, disease, and genetics.

**Pamela Dalton** (tenure 1993–present) studied odor perception, including how expectations and context shape the pleasantness of smells. Her work demonstrated that the same molecule can be perceived as pleasant or unpleasant depending on what you're told about it.

## From Bench to Application

Monell has always maintained a connection between basic science and real-world applications. Its research has influenced:

**Food industry.** Understanding why children prefer certain flavors has informed the development of healthier foods for kids. 

**Public health.** Monell researchers helped design warning odorants (like the mercaptan added to natural gas) and studied the sensory impact of environmental pollutants.

**Clinical medicine.** Monell scientists have contributed to understanding chemosensory disorders, including taste and smell changes caused by cancer treatment, medications, and aging.

## The Bigger Picture

Monell's existence makes an implicit argument: that the chemical senses deserve the same level of dedicated institutional attention that vision or hearing receive.

For over five decades, Monell has demonstrated that smell and taste are not minor senses. They influence nutrition, safety, social behavior, mental health, and quality of life. Having an entire institution dedicated to proving this point has been one of the most important structural contributions to the field.
  `,
    sources: [
        {
            title: "The Monell Chemical Senses Center: History and Legacy",
            url: "https://monell.org/history-legacy/"
        },
        {
            title: "The Monell Chemical Senses Center: About Us",
            url: "https://monell.org/about-us/"
        }
    ]
};
