import { Article } from './types';

export const trigeminalChemesthesis: Article = {
    id: "trigeminal-chemesthesis",
    title: "The Other Nose Nerve: Trigeminal Chemesthesis",
    excerpt: "Menthol feels cool. Chili burns. Ammonia stings. None of these are really 'smells.' They're detected by a completely different nerve.",
    category: "Fascinating History & Facts",
    readingTime: 4,
    publishDate: "2026-06-15",
    tags: ["Olfaction", "Trigeminal", "Chemesthesis", "Basic Science"],
    author: "Liam Seungjin Lee",
    content: `
**When you sniff ammonia and your eyes water, that's not your olfactory system. When menthol feels cool in your nose, that's not olfaction either. There's a second chemical sensing system in your nose, and it runs on a completely different nerve.**

## The Trigeminal Nerve

The **trigeminal nerve** (cranial nerve V) is the largest cranial nerve. It provides sensation to the face, teeth, and nasal cavity. It's the nerve that lets you feel a touch on your cheek or pain in a tooth.

But the trigeminal nerve also has bare nerve endings in the nasal mucosa that respond to chemical irritants. This chemical sensitivity is called **chemesthesis**. It's not smell. It's not taste. It's a third chemical sense [1].

## What It Detects

Trigeminal chemesthesis detects molecules that are irritating, pungent, or temperature-related:

**Menthol** activates the **TRPM8** receptor, which normally responds to cold temperature. That's why menthol feels "cool" even though it doesn't actually lower the temperature of your nose [2].

**Capsaicin** (from chili peppers) activates **TRPV1**, a receptor that responds to heat and painful stimuli. It literally triggers a pain response. Your nose "burns" because the trigeminal nerve is telling your brain that something hot and dangerous is happening [2].

**Mustard oil and wasabi** activate **TRPA1**, a receptor sensitive to a range of reactive chemicals. The sharp, eye-watering sting of wasabi is pure trigeminal stimulation [2].

**Ammonia, acetic acid (vinegar), and ethanol** all strongly stimulate trigeminal fibers. That sharp, stinging quality is the trigeminal at work.

:::callout
**A quick test:** If you hold your nose completely closed and sniff a substance, and it still produces a sensation (burning, cooling, stinging), the trigeminal nerve is doing the work. Pure olfactory stimuli require airflow through the nasal cavity, but trigeminal chemicals can reach the nerve endings even with reduced flow.
:::

## How Common Is Trigeminal Co-activation?

Very common. Most everyday "smells" are actually a combination of olfactory and trigeminal input.

**William S. Cain** and colleagues showed in the 1980s that approximately **70 percent of common odorants** co-activate both the olfactory and trigeminal systems [3]. When you smell vinegar, you're perceiving two things simultaneously: the sour odor (olfactory) and the sharp sting (trigeminal). The brain blends them into a single experience.

Only a few odorants are purely olfactory with no trigeminal component. Vanillin (vanilla) and phenylethyl alcohol (rose) are commonly used in research because they stimulate olfaction alone.

## Why Anosmics Can Still "Feel" Some Chemicals

People who have completely lost their sense of smell (anosmia) can still detect ammonia, menthol, and other strong chemicals. This is because the trigeminal system is intact and independent from the olfactory nerve.

This has clinical applications. Doctors sometimes use trigeminal stimulants as a control in smell tests. If a patient can detect ammonia but not rose, the olfactory nerve is likely the problem, not the nasal airway.

## An Underappreciated System

The trigeminal chemical sense doesn't get much attention. It doesn't have its own Nobel Prize or glamorous research history. But it plays a massive role in everyday experience. The "heat" of curry. The "freshness" of mint gum. The "bite" of a strong whisky. The eye-watering intensity of raw onion.

All trigeminal.

Without it, the world of scents would feel oddly flat. You'd smell things, but you wouldn't feel them.
  `,
    sources: [
        {
            title: "Chemesthesis: chemical touch in food and eating (Green & Lawless, 1991)",
            url: "https://doi.org/10.1016/0166-4328(91)90190-S"
        },
        {
            title: "TRP channels in chemesthesis (Jordt et al., 2004, Current Pharmaceutical Biotechnology)",
            url: "https://doi.org/10.2174/1389201043489509"
        },
        {
            title: "Contribution of trigeminal nerve to the perception of odors (Cain & Murphy, 1980, Chemical Senses)",
            url: "https://doi.org/10.1093/chemse/5.4.367"
        }
    ]
};
