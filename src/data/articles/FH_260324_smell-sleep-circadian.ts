import { Article } from './types';

export const smellSleepCircadian: Article = {
    id: "smell-sleep-circadian",
    title: "Smell While You Sleep? Olfaction and the Circadian Rhythm",
    excerpt: "Your sense of smell has a daily rhythm. It's sharpest in the evening and weakest in the morning. And during sleep, it might still be learning.",
    category: "Fascinating History & Facts",
    readingTime: 4,
    publishDate: "2026-03-24",
    tags: ["Olfaction", "Sleep", "Circadian Rhythm", "Fascinating History"],
    author: "Liam Seungjin Lee",
    content: `
**You probably haven't noticed, but your sense of smell changes throughout the day. And at night, while you're asleep, your nose continues to process odors in ways that surprised even sleep researchers.**

## The Daily Rhythm

Olfactory sensitivity is not constant across the 24-hour day. Several studies have shown that it follows a **circadian rhythm**, with peak sensitivity in the late afternoon and evening and lowest sensitivity in the early morning [1].

This pattern has been documented using odor detection threshold tests conducted at multiple time points. The differences are not trivial. Sensitivity can vary by a factor of two or more between the morning low and the evening peak [1].

The mechanism isn't entirely clear. It may involve circadian fluctuations in the olfactory epithelium itself (changes in mucus composition, neuronal excitability), in the olfactory bulb, or in cortical processing of olfactory input. Circadian clock genes have been identified in the olfactory epithelium, suggesting that the tissue has its own internal clock [2].

:::callout
**A practical implication.** If you're testing someone's sense of smell clinically, the time of day matters. A test administered at 8 AM might give a different result than the same test at 6 PM. Most standardized smell tests don't account for this, though the effect is recognized in the research literature.
:::

## Why You Don't Wake Up to Smells

Here's a puzzle. Sounds can wake you from sleep. Light can wake you. A touch or vibration can wake you. But smells generally don't.

Smoke, gas leaks, burning food. In most studies, odors presented during sleep do **not reliably cause awakening**. This is one of the main reasons smoke detectors use auditory alarms rather than scent-based warnings [3].

The explanation appears to be that olfactory processing is significantly reduced during sleep. The thalamic relay that gates other sensory information to the cortex may dampen olfactory input during deep sleep. And the active sniffing behavior that normally optimizes odor delivery to the epithelium stops during sleep. You breathe passively, and little air reaches the olfactory region.

## But the Nose Isn't Completely Off

Here's where it gets interesting. In a **2012 study published in *Nature Neuroscience***, **Anat Arzi** and colleagues at the Weizmann Institute demonstrated that **odor-conditioning can occur during sleep** [4].

Their experiment was clever. They presented sleeping subjects with pleasant odors (like shampoo) paired with a tone, and unpleasant odors (like rotten fish) paired with a different tone. During sleep, subjects wouldn't consciously smell anything. But their sniff responses changed.

When the "pleasant" tone was played alone, subjects inhaled more deeply. When the "unpleasant" tone was played alone, they inhaled less. This conditioned response persisted **even after the subjects woke up**, demonstrating that some associative learning had taken place during sleep, without any conscious awareness [4].

:::callout
**What this means:** The olfactory system during sleep isn't processing odors in the same way it does during wakefulness. You won't identify a smell or wake up because of one. But the brain can still form associations between odors and other stimuli during sleep. It's a reduced, unconscious form of olfactory processing. Enough to learn from, but not enough to wake you.
:::

## Sleep, Learning, and Olfactory Memory

There's also evidence that sleep plays a role in **consolidating olfactory memories** formed during the day. Studies have shown that odor discrimination improves after a night of sleep compared to an equivalent period of wakefulness [5].

This is consistent with the broader role of sleep in memory consolidation. The olfactory cortex (particularly the piriform cortex) may undergo synaptic reorganization during sleep that sharpens and stabilizes odor representations learned during the day.

## A Sense That Follows the Clock

Your sense of smell is not a constant. It rises and falls with the sun. It partially shuts down during sleep but never fully disengages. And it may use the downtime of sleep to consolidate what it learned during the day.

The next time you notice that your morning coffee smells different from your evening tea, it might not be the beverages. It might be your nose.
  `,
    sources: [
        {
            title: "Circadian variation of olfactory function (Nordin et al., 2003, Acta Oto-Laryngologica)",
            url: "https://doi.org/10.1080/003655402/000028065"
        },
        {
            title: "Clock genes in the olfactory system (Granados-Fuentes et al., 2006, Journal of Neuroscience)",
            url: "https://doi.org/10.1523/JNEUROSCI.5440-05.2006"
        },
        {
            title: "Olfactory stimuli and arousal from sleep (Carskadon & Herz, 2004, International Journal of Psychophysiology)",
            url: "https://doi.org/10.1016/j.ijpsycho.2004.01.008"
        },
        {
            title: "Humans can learn new information during sleep (Arzi et al., 2012, Nature Neuroscience)",
            url: "https://doi.org/10.1038/nn.3193"
        },
        {
            title: "Sleep-dependent consolidation of odor recognition memory (Barnes & Wilson, 2014, Frontiers in Behavioral Neuroscience)",
            url: "https://doi.org/10.3389/fnbeh.2014.00199"
        }
    ]
};
