import { Article } from './types';

export const mucusObps: Article = {
    id: "mucus-obps",
    title: "Odorant-Binding Proteins, What Exactly Are They?",
    excerpt: "Before an odor can reach a receptor neuron, it has to cross nasal mucus. Odorant-binding proteins may help, though their exact role in human smell is still being worked out.",
    category: "Fascinating History & Facts",
    readingTime: 7,
    publishDate: "2026-06-29",
    tags: ["Olfaction", "Basic Science", "Biochemistry"],
    author: "Liam Seungjin Lee",
    content: `
**Before a smell reaches a receptor, it has to pass through mucus. That thin fluid lining the olfactory epithelium is not just a protective coating: it is a chemical checkpoint. And one of its most intriguing ingredients is a group of proteins called odorant-binding proteins, or OBPs.**

## The Air-to-Mucus Problem

Most odorants begin in the air. To activate an olfactory receptor, they must enter the watery mucus surrounding the cilia of olfactory sensory neurons.

That transition is easy for highly water-soluble molecules. It is more challenging for many hydrophobic, or water-repelling, odorants. Nasal mucus is therefore not a passive barrier. It is a complex fluid containing salts, mucins, immune proteins, enzymes, and other molecules that can influence which odorants reach receptor neurons and how long they remain there [1][2].

## Meet the OBPs

In the early 1980s, Paolo Pelosi and colleagues isolated odorant-binding proteins from bovine nasal tissue. These small soluble proteins could bind odor molecules, helping establish the idea that the mucus layer participates actively in smell before an odorant ever meets its receptor [3].

Mammalian OBPs belong to the **lipocalin** family. These are proteins with a barrel-like structure and a pocket capable of binding hydrophobic molecules [4]. In laboratory studies, they bind odorants from several chemical classes. That makes them plausible candidates for helping hydrophobic odorants move, concentrate, or remain available within an aqueous mucus layer.

:::callout
**The important caveat:** “Odorant-binding” does not automatically mean “required for smelling.” OBPs can bind odorants, but their exact day-to-day function in human olfaction has not been definitively established.
:::

## Molecular Taxis—or Something Else?

The classic model describes an OBP as a molecular taxi: it binds a hydrophobic odorant near the air–mucus interface, helps it move through mucus, and releases it close to an olfactory receptor.

It is a useful model, but it remains a model. OBPs may also buffer odorant concentration, selectively enrich certain molecules, protect odorants from metabolism, or help sequester them after stimulation. Different proteins may have different roles, and evidence from one animal species does not necessarily translate directly to humans [4][5].

Human studies add another layer of uncertainty. OBP2A and OBP2B have been proposed as human OBPs, but proteomic studies of olfactory-cleft mucus have not consistently detected them. Other lipocalins, including lipocalin-1 and lipocalin-15, are also candidates for odor-binding roles in human nasal mucus [5].

That uncertainty is not a failure of the field. It is the interesting question: **which proteins actually shape odor delivery in the human nose, and how?**

## Mucus Has an Enzyme System Too

OBPs are only one part of the perireceptor environment. Olfactory mucus and mucosa also contain enzymes that can chemically modify odorants.

Cytochrome P450 enzymes, carboxylesterases, and transferases can metabolize inhaled compounds, including odorants. In rat olfactory tissue, blocking some of these enzymes increased peripheral olfactory responses to specific odorants, suggesting that local metabolism can change an odorant's availability and signaling strength [6].

## The Hidden First Step of Smell

When we think about olfaction, we often jump from “odor molecule enters the nose” to “receptor switches on.” The mucus layer is the overlooked space in between.

It is where odorants dissolve, diffuse, bind to proteins, encounter enzymes, and approach sensory cilia. OBPs may or may not be important molecular couriers in that environment.
  `,
    sources: [
        {
            title: "Identification of Human Olfactory Cleft Mucus Proteins Using Proteomic Analysis (Débat et al., 2007, Journal of Proteome Research)",
            url: "https://doi.org/10.1021/pr0606575"
        },
        {
            title: "Olfactory Cleft Mucus Proteome in Chronic Rhinosinusitis (Soler et al., 2020, International Forum of Allergy & Rhinology)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8670410/"
        },
        {
            title: "Odorant-binding proteins (Pelosi et al., 1994, Critical reviews in biochemistry and molecular biology)",
            url: "https://pubmed.ncbi.nlm.nih.gov/8070277/"
        },
        {
            title: "Mammalian odorant binding proteins (Tegoni et al., 2000, Biochimica et Biophysica Acta)",
            url: "https://pubmed.ncbi.nlm.nih.gov/11058764/"
        },
        {
            title: "Beyond Olfaction: New Insights into Human Odorant Binding Proteins (Chen et al., 2026)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12848774/"
        },
        {
            title: "Odorant Metabolism Catalyzed by Olfactory Mucosal Enzymes Influences Peripheral Olfactory Responses in Rats (Thiebaud et al., 2013, PLOS ONE)",
            url: "https://doi.org/10.1371/journal.pone.0059547"
        },
    ]
};
