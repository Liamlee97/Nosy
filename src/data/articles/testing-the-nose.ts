import { Article } from './types';

export const testingTheNose: Article = {
    id: "testing-the-nose",
    title: "Testing the Nose 🧪: How Smell Became Measurable in the Clinic",
    excerpt: "From scratch-and-sniff booklets to pen-like odor tools, clinicians finally found reliable ways to measure the human sense of smell.",
    category: "Fascinating History",
    readingTime: 4,
    publishDate: "2025-07-01",
    tags: ["Olfaction", "Clinical Testing", "History", "ENT"],
    author: "Dr. Liam Lee",
    images: {
        "upsit": {
            url: "https://upload.wikimedia.org/wikipedia/commons/a/a8/UPSIT_-_Smell_Identification_Test%2C_German_edition_%28102%29.jpg",
            caption: "UPSIT - Smell Identification Test, German edition.",
            source: "Wikimedia Commons"
        }
    },
    content: `
**How do you measure something as subjective as smell? For decades, clinicians relied on vague descriptions and patient anecdotes. The turning point came when smell testing became standardized, portable, and quantifiable — allowing the nose to be examined with the same rigor as vision or hearing.**

## Before Tests, There Were Only Complaints

Until the late 20th century, olfactory loss was notoriously difficult to assess. Patients could say their smell was “gone” or “reduced,” but clinicians had few tools to verify or quantify the deficit. Unlike eyesight or hearing, there was no chart on the wall, no tone generator, no simple reference point.

This lack of standardization made large studies nearly impossible. It also meant that smell loss — despite its importance for safety, nutrition, and quality of life — was often dismissed as subjective or secondary.

## The Scratch-and-Sniff Breakthrough (1984)

That changed in **1984**, when **Richard Doty** and colleagues at the University of Pennsylvania introduced the **University of Pennsylvania Smell Identification Test (UPSIT)**.

UPSIT was deceptively simple:  
a booklet containing **40 microencapsulated odors**, each released by scratching the page. For every smell, the subject chose one answer from four options.

What made UPSIT revolutionary was not novelty, but **standardization**:

- Every patient received the same odors in the same order.  
- Results could be scored objectively.  
- Performance could be compared across age, sex, disease, and geography.

UPSIT quickly proved reliable, reproducible, and easy to administer. It transformed smell from a vague symptom into a measurable clinical parameter — and enabled the first large-scale epidemiological studies of olfactory dysfunction.

:::image(upsit)

## Beyond Identification: Measuring Sensitivity and Discrimination

While UPSIT quantified **odor identification**, it left other questions unanswered.  
Could a patient detect faint smells but fail to name them?  
Could they tell two odors apart even if they couldn’t identify either?

These questions mattered, especially for distinguishing peripheral from central causes of smell loss.

## Sniffin’ Sticks and a More Complete Smell Profile (1997)

In **1997**, **Thomas Hummel** and colleagues introduced a new approach: **Sniffin’ Sticks**.

Instead of paper booklets, this test used **pen-like odor dispensers**, allowing controlled delivery of smells at different concentrations. Sniffin’ Sticks assessed three distinct dimensions of olfaction:

- **Threshold** – the lowest concentration a person can detect  
- **Discrimination** – the ability to tell smells apart  
- **Identification** – naming the odor correctly  

Together, these scores formed the now-famous **TDI score**, offering a multidimensional profile of olfactory function.

This approach allowed clinicians to pinpoint *how* smell was impaired, not just *whether* it was impaired.

## Why These Tests Changed Clinical Practice

With UPSIT and Sniffin’ Sticks, smell testing finally became:

- **Scalable**, enabling population-level studies  
- **Comparable**, across clinics and countries  
- **Clinically actionable**, supporting diagnosis and follow-up  

These tools helped establish smell loss as an early marker in conditions such as Parkinson’s disease, Alzheimer’s disease, post-viral anosmia, and sinonasal disorders. They also made it possible to track recovery — or lack thereof — over time.

## The Legacy of Measuring the Invisible

Today, smell testing is routine in research and increasingly recognized in clinical practice. What once relied on patient description alone can now be quantified, compared, and followed longitudinally.

By turning odors into data, UPSIT and Sniffin’ Sticks gave clinicians something they had long lacked: a reliable way to listen to what the nose was telling them.
  `,
    sources: [
        {
            title: "University of Pennsylvania Smell Identification Test: a rapid quantitative olfactory function test for the clinic",
            url: "https://doi.org/10.1288/00005537-198402000-00004"
        },
        {
            title: "Sniffin’ Sticks: Olfactory performance assessed by the combined testing of odor identification, odor discrimination and olfactory threshold",
            url: "https://doi.org/10.1093/chemse/22.1.39"
        }
    ]
};
