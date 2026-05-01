import { Article } from './types';

export const bellChallenge1914: Article = {
    id: "bell-challenge-1914",
    title: "Alexander Graham Bell's Challenge to Smell Science",
    excerpt: "In 1914, the inventor of the telephone asked a question no one could answer: can you measure a smell?",
    category: "Fascinating History & Facts",
    readingTime: 4,
    publishDate: "2025-10-07",
    tags: ["Olfaction", "History", "Measurement"],
    author: "Liam Seungjin Lee",
    images: {
        "bell": {
            url: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Alexander_Graham_Bell_1895_NPG_77_363.jpg",
            caption: "Portrait photograph of Alexander Graham Bell (1847–1922), Scottish-born inventor and educator, best known for the invention of the telephone.",
            source: "Wikimedia Commons"
        }
    },
    content: `
**Alexander Graham Bell is remembered for the telephone. But did you know that in 1914, he posed a question that science still hasn't fully answered? It was about smell.**

## The Question Nobody Could Answer

In a short but provocative article published in *National Geographic Magazine*, Bell wrote:

"Can you measure the difference between one kind of smell and another? It is very obvious that we have very many different kinds of smells, all the way from the odour of violets and roses up to asafetida. But until you can measure their likeness and differences you can have no science of odour." [1]

:::image(bell)

Bell's point was simple. Science had instruments for light. It had instruments for sound. It had thermometers and barometers and scales. But for smell? Nothing. There was no way to objectively quantify an odor's intensity, quality, or character.

He went further. He suggested that until scientists could measure smell, they couldn't truly understand it.

## Why It Was (and Still Is) So Hard

Measuring smell is genuinely more difficult than measuring light or sound, for reasons that go to the heart of how olfaction works.

**Light** varies along a single physical dimension: wavelength. **Sound** varies along frequency. Both can be measured with instruments that don't need a human observer.

**Smell** is different. There is no single physical dimension that predicts how a molecule will smell. 
As discussed in our previous article on shape vs vibration debate, two structurally similar molecules can smell completely different and two unrelated molecules can smell nearly identical. The relationship between chemistry and perception is messy and nonlinear.

This means you can't build a "smell spectrometer" the way you build a light spectrometer. The only reliable detector for smell, even today, is a trained human nose.

## The Response (Eventually)

Bell's challenge went largely unanswered during his lifetime. He died in 1922. But the question he raised echoed through the century.

In the 1890s, Hendrik Zwaardemaker had already built his olfactometer. But it measured airflow and dilution, not the subjective experience of smell. The gap between physical stimulus and perception remained wide.

The first clinically validated smell test didn't arrive until **1984**, when Richard Doty at the University of Pennsylvania developed the **UPSIT** (University of Pennsylvania Smell Identification Test). It used 40 microencapsulated scratch-and-sniff odorants to produce a standardized score [2].

That was 70 years after Bell's challenge.

## Why This Still Matters

Even now, Bell's question hasn't been fully answered. We can identify smell *loss*. We can compare one person's score to another's. But we still can't describe the *quality* of a smell in objective, physical terms.

There is no "wavelength" for rose. No "frequency" for coffee. No way to transmit a smell electronically (yet). Bell would have found this both frustrating and fascinating.

`,
    sources: [
        {
            title: "Discovery and Invention (Bell, 1914, National Geographic Magazine)",
            url: "https://archive.org/details/discoveryinventi00bell/page/652/mode/2up"
        },
        {
            title: "University of Pennsylvania Smell Identification Test (Doty et al., 1984, Physiology & Behavior)",
            url: "https://doi.org/10.1016/0031-9384(84)90269-5"
        }
    ]
};
