import { Article } from './types';

export const brocaOlfactoryBrain: Article = {
    id: "broca-olfactory-brain",
    title: "Paul Broca and His Misconception of Olfaction",
    excerpt: "In the 1870s, a French surgeon decided humans had evolved past their sense of smell. His views likely influenced many away from the study of olfaction.",
    category: "Fascinating History & Facts",
    readingTime: 5,
    publishDate: "2026-01-13",
    tags: ["Olfaction", "History", "Neuroscience", "Evolution"],
    author: "Liam Seungjin Lee",
    images: {
        "broca": {
            url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Portrait_of_Pierre-Paul_Broca_Wellcome_M0010155.jpg",
            caption: "Portrait of Pierre-Paul Broca",
            source: "Wikimedia Commons, Wellcome Collection"
        },
        "limbic-lobe": {
            url: "https://upload.wikimedia.org/wikipedia/commons/0/00/Limbic_System.png",
            caption: "The limbic system",
            source: "Wikimedia Commons"
        },
        "dog-sniffing": {
            url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/New_Guinea_Singing_Dog_sniffing_the_ground.jpg",
            caption: "New Guinea Singing Dog sniffing the ground",
            source: "Wikimedia Commons"
        }
    },
    content: `
**Paul Broca is one of the most important figures in the history of neuroscience. He's best known for localizing speech in the left frontal lobe, named after him as Broca's area. But he also made a declaration about smell that turned out to be spectacularly wrong.**

## The Classification

In the 1870s, Broca was studying the anatomy of mammalian brains. He noticed that a ring of deep brain structures, which he called **le grand lobe limbique** (the great limbic lobe), was proportionally much larger in animals known for their keen sense of smell [1].

:::image(limbic-lobe)

He made a simple classification. Mammals with large olfactory structures relative to their brain size were **"osmatic"** (smell-dominant). Mammals with smaller olfactory structures were **"anosmatic"** (smell-reduced). He placed humans firmly in the anosmatic category [1].

Broca went a bit further. He didn't just say humans had smaller olfactory systems. He argued that this reduction was *necessary* for higher intelligence. In his view, the expansion of the frontal lobes (responsible for reason, planning, and speech) came at the expense of the "primitive" olfactory brain [2].

:::image(broca)

## The Label That Stuck

Broca's classification was enormously influential. The idea that humans have a "poor" sense of smell compared to other mammals became conventional wisdom.

The very term **rhinencephalon** ("nose brain") was used to describe the limbic structures in the human brain. This name implied that these regions were evolutionary leftovers from a smell-dominated past. As evidenced by an example of a neuro anatomy textbook from 1957, "The smell brain to important physiologically in lower ammals, becomes overshadowed by other functions during the process of evolution and in man eventually becomes buried deeply within the confines of the temporal lobe" [3].

:::callout
**Fun Fact:** Broca's ideas were picked up by Sigmund Freud, who argued that walking upright moved humans' noses away from the ground, causing smell to become repressed. Freud saw olfaction as a primitive, animal sense incompatible with civilization [4]. These ideas, directly traceable to Broca, shaped scientific and cultural attitudes about smell for over 100 years.
:::

## What Was Wrong

The problems with Broca's argument are now well understood.

**The anatomy was misleading.** Broca measured the *relative* size of olfactory structures. But relative size doesn't tell you about function. The human olfactory bulb is small compared to the frontal lobe, but it still contains sophisticated circuitry. And the olfactory cortex, while proportionally small, is densely connected to many brain regions.

**The genetics told a different story.** Humans have roughly 400 functional olfactory receptor genes. That's fewer than mice (about 1,000) or dogs (about 800), but it's still a very large gene family. And the receptors we do have are functional and diverse.

**The behavioral data surprised everyone.** When researchers actually tested human olfactory performance (rather than assuming it was poor), the results were impressive. Humans can detect some odorants at concentrations of just a few parts per trillion. Trained humans can distinguish thousands of odors. And in some specific tasks, like trailing a 10‑meter-long path of chocolate oil using smell alone when visual and other cues were blocked, humans perform comparably to dogs [5].

:::image(dog-sniffing)

## The Debunking

Citated already in this article, in **2017** **John McGann**, a neuroscientist at Rutgers University, published a paper in *Science* titled **"Poor human olfaction is a 19th-century myth"** [2]. It was a systematic takedown of Broca's legacy.

McGann traced the myth from Broca through Freud and into modern textbooks. He showed that the claim had been repeated so often that it was treated as settled fact, even though it had never been rigorously tested.

His central point: humans don't have a poor sense of smell. We have a *different* sense of smell. Our olfactory system is optimized for different tasks than a dog's or a mouse's. But within its domain, it works remarkably well.

## Why It Matters

Broca's error is a cautionary tale about how an influential claim, not backed by rigorous evidence, can shape an entire field for generations. The "poor human olfaction" narrative discouraged research, reduced clinical attention to smell disorders, and gave people the impression that their noses weren't worth studying.

  `,
    sources: [
        {
            title: "From Paul Broca’s great limbic lobe to the limbic system (Pessoa & Hof, 2015, The Journal of comparative neurology)",
            url: "https://doi.org/10.1002/cne.23840"
        },
        {
            title: "Poor human olfaction is a 19th-century myth (McGann, 2017, Science)",
            url: "https://doi.org/10.1126/science.aam7263"
        },
        {
            title: "The Human Brain From Primitive To Modern (Lassek, 1957, Charles C Thomas Springfield)",
            url: "https://ia801502.us.archive.org/11/items/in.ernet.dli.2015.108923/2015.108923.The-Human-Brain-From-Primitive-To-Modern_text.pdf"
        },
        {
            title: "Human olfactory communication: current challenges and future prospects (Roberts et al., 2020, The Philosophical Transactions of the Royal Society of London)",
            url: "https://doi.org/10.1098/rstb.2019.0258"
        },
        {
            title: "Mechanisms of scent-tracking in humans (Porter et al., 2006, Nature Neuroscience)",
            url: "https://doi.org/10.1038/nn1819"
        }
    ]
};
