import { Article } from './types';

export const smellSleepCircadian: Article = {
    id: "smell-sleep-circadian",
    title: "Are You Aware of Your Sense of Smell While You Sleep?",
    excerpt: "Your sense of smell can change across the day. During sleep, odors are poor alarm signals. But the sleeping brain can still form limited odor-related associations.",
    category: "Fascinating History & Facts",
    readingTime: 5,
    publishDate: "2026-04-13",
    tags: ["Olfaction", "Sleep", "Circadian Rhythm", "Fascinating History"],
    author: "Liam Seungjin Lee",
    content: `
**Your sense of smell is not necessarily the same from morning to night. Research suggests that odor sensitivity follows an internal daily rhythm. Yet, the brain can still respond to odors in limited and surprising ways.**

## The Daily Rhythm

Olfactory sensitivity is not a fixed trait across the 24-hour day. In a controlled human study, odor-detection threshold changed significantly with circadian phase. On average, participants were most sensitive shortly after the onset of melatonin production (around 9 PM) but the timing varied substantially between individuals [1].

That means an evening peak is a useful general pattern, not a universal rule. In the same study, peak olfactory acuity never occurred during the early-morning interval studied, but each participant's best time was different [1]. Other human work has also reported higher olfactory sensitivity in the evening than in the morning [2].

The mechanism is still being worked out. Animal studies show that the olfactory bulb contains a local circadian clock that can regulate daily changes in olfactory responsiveness [3]. Those findings provide a biological explanation for why smell may vary over the day, but the exact contribution of the nasal lining, olfactory bulb, brain, sleep, and behavior to everyday human smell perception remains uncertain.

:::callout
**Implications for research:** Time of day is a potential source of biologic variation in olfactory research. Whether routine clinical smell testing needs time-of-day standardization is not yet clear, but researchers should consider recording testing time, especially in longitudinal studies.
:::

## Why Smells Are Poor Alarms

Sounds reliably wake people from sleep. Odors generally do not.

This matters for safety. Smoke alarms use sound because smell alone is an unreliable warning signal during sleep. In sleep-laboratory studies, odor responses varied by sleep stage and odor type, but tones produced behavioral responses much more consistently [4]. Another study found that even high concentrations of a strong, selective olfactory stimulus did not increase arousal frequency during nocturnal sleep [5].

That does not mean the sleeping brain is completely disconnected from smell. Odors can still produce physiologic or behavioral responses, particularly in lighter sleep. The key point is that they are unreliable for waking a person—far less dependable than auditory alerts [4].

The reason is not fully settled. Olfactory processing of external odors appears to be reduced during sleep, and sleep alters how sensory signals are evaluated by the brain. Unlike vision and hearing, the primary olfactory pathway does not first pass through an obligatory thalamic relay before reaching olfactory cortex, so simple comparisons with the sensory “gating” of other systems can be misleading.

## But the Sleeping Brain Can Still Learn

In a landmark 2012 study published in *Nature Neuroscience*, Anat Arzi and colleagues showed that sleeping people could form a limited, unconscious association between tones and odors [6].

Participants heard one tone paired with pleasant odors and another paired with unpleasant odors while asleep. Later, when the tones were played alone, the participants changed the depth of their inhalations: tones associated with pleasant odors prompted deeper sniffs, whereas tones associated with unpleasant odors prompted shallower sniffs [6].

Remarkably, this conditioned sniff response persisted after participants woke up. The study did not show that people can learn complex facts, languages, or skills in their sleep. Instead, it demonstrated a specific form of implicit associative learning: the sleeping brain linked a sound to the positive or negative quality of an odor without participants later reporting awareness of having learned it [6].

So sleep does not switch smell processing completely off. Odors are poor signals for waking us, but the brain can still register enough odor-related information to form limited, unconscious associations under controlled conditions.

## Sleep and Odor Memory

Sleep may also help stabilize odor memories formed during wakefulness. In one human study, adults recognized previously encountered odors better after a sleep interval than after a comparable period awake; this benefit was not seen in children in the same experiment [7].

Mechanistic work in rodents provides a possible explanation. During slow-wave sleep, patterns of activity in olfactory cortical circuits can be replayed, and this replay appears to contribute to the strength and precision of odor memories [8]. These animal findings are important, but they should not be treated as direct proof of the same mechanism in humans.

Together, the findings fit a broader principle of sleep biology: sleep may not only protect memories from interference, but also help refine how the brain represents sensory information.

## A Sense That Follows the Clock

Smell is neither fixed throughout the day nor fully absent during sleep. Human odor sensitivity appears to change with circadian timing, often favoring the evening or early biological night. During sleep, odors are poor alarm signals, yet the brain can still form limited unconscious odor-related associations and may consolidate aspects of odor memory.

So if morning coffee seems less aromatic than an evening meal, the difference may reflect more than the coffee itself. Circadian timing, nasal physiology, sleep, attention, and the brain's changing treatment of smell may all play a role.
  `,
    sources: [
        {
            title: "The Influence of Circadian Timing on Olfactory Sensitivity (Herz et al., 2018, Chemical Senses)",
            url: "https://doi.org/10.1093/chemse/bjx067"
        },
        {
            title: "Variations of olfactory function with circadian timing and chronotype (Mai et al., 2023, Rhinology)",
            url: "https://pubmed.ncbi.nlm.nih.gov/37506378/"
        },
        {
            title: "A Circadian Clock in the Olfactory Bulb Controls Olfactory Responsivity (Granados-Fuentes et al., 2006, Journal of Neuroscience)",
            url: "https://doi.org/10.1523/JNEUROSCI.3445-06.2006"
        },
        {
            title: "Minimal olfactory perception during sleep: Why odor alarms will not work for humans (Carskadon & Herz, 2004, Sleep)",
            url: "https://pubmed.ncbi.nlm.nih.gov/15164891/"
        },
        {
            title: "Arousal Responses to Olfactory or Trigeminal Stimulation During Sleep (Stuck et al., 2007, Sleep)",
            url: "https://doi.org/10.1093/sleep/30.4.506"
        },
        {
            title: "Humans Can Learn New Information during Sleep (Arzi et al., 2012, Nature Neuroscience)",
            url: "https://doi.org/10.1038/nn.3193"
        },
        {
            title: "Sleep Supports Memory of Odors in Adults but Not in Children (Prehn-Kristensen et al., 2015, PLOS ONE)",
            url: "https://doi.org/10.1371/journal.pone.0139069"
        },
        {
            title: "Sleep and Olfactory Cortical Plasticity (Barnes & Wilson, 2014, Frontiers in Behavioral Neuroscience)",
            url: "https://doi.org/10.3389/fnbeh.2014.00134"
        }
    ]
};