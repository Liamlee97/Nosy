import { Article } from './types';

export const joyMilneParkinsons: Article = {
    id: "joy-milne-parkinsons",
    title: "The Woman Who Could Smell Parkinson's Disease",
    excerpt: "Joy Milne noticed her husband smelled different years before his diagnosis. Scientists confirmed she was right and it may change how we detect disease.",
    category: "Fascinating History & Facts",
    readingTime: 5,
    publishDate: "2025-10-21",
    tags: ["Olfaction", "Parkinson's Disease", "Diagnosis", "History"],
    author: "Liam Seungjin Lee",
    images: {
        "parkinsons": {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Paralysis_agitans_%28Sir_William_Richard_Gowers%29.jpg",
            caption: "Illustration of Parkinson's disease from Sir William Richard Gowers' 'A Manual of Diseases of the Nervous System' (1886).",
            source: "Wikimedia Commons"
        }
    },
    content: `
**In the early 1980s, a retired nurse in Perth, Scotland, noticed something odd about her husband Les. His smell had changed, with a musky, oily scent she couldn't quite place. She mentioned it. He dismissed it. Twelve years later, he was diagnosed with Parkinson's disease.**

## The Nose Knew First

Joy Milne didn't think much of it at the time. But years after Les's diagnosis, she attended a Parkinson's UK support group and noticed the same distinctive smell on other patients. It wasn't a hygiene issue. It was something deeper, a subtle change in body chemistry that her nose, apparently, could detect.

When she mentioned this to researchers, most were skeptical. But one scientist took her seriously.

## The T-Shirt Test

**Tilo Kunath**, a Parkinson's researcher at the University of Edinburgh, arranged a simple experiment. He gave Joy T-shirts worn by six Parkinson's patients and six healthy controls, all unidentified.

Joy correctly identified 11 out of 12, but she also flagged one "control" as having Parkinson's. The researchers marked this as an error [1].

:::callout
**Fun Fact:** Eight months later, that "control" volunteer contacted the researchers. He had just been diagnosed with Parkinson's disease. Joy hadn't been wrong — she had detected the disease before the doctors did.
:::

## What She Was Smelling

Joy's extraordinary claim attracted the attention of **Perdita Barran**, an analytical chemist at the University of Manchester. Barran's team set out to identify the actual molecules responsible for the smell.

Using mass spectrometry on sebum (the oily secretion from skin glands) collected from Parkinson's patients, Barran's group identified specific volatile compounds, including **hippuric acid**, **eicosane**, and **octadecanal**, that were elevated in Parkinson's patients compared to controls [2].

The key finding: these molecules were concentrated in the **sebaceous-rich areas** of the upper back, an area where Parkinson's patients often show increased sebum production. The disease was literally changing the chemistry of the skin.

## From One Woman to a Potential Diagnostic Tool

Barran's team went on to develop a **sebum-based diagnostic test** that could potentially identify Parkinson's from a simple skin swab. As of the mid-2020s, this work is progressing toward clinical validation, with the aim of detecting Parkinson's at its earliest, most treatable stage [2].

Meanwhile, Joy Milne has participated in further research and public awareness campaigns. Les Milne passed away in 2015, but the discovery that began with Joy's nose may ultimately benefit millions of patients worldwide.

  `,
    sources: [
        {
            title: "The woman who can smell Parkinson's disease (BBC News, 2015)",
            url: "https://www.bbc.co.uk/news/uk-scotland-34583642"
        },
        {
            title: "Discovery of volatile biomarkers of Parkinson's disease from sebum (Trivedi et al., 2019, ACS Central Science)",
            url: "https://doi.org/10.1021/acscentsci.8b00879"
        }
    ]
};
