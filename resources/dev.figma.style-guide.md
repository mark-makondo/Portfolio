# FIGMA STYLE GUIDE TO TAILWIND

## Base Config

- BASE: 16px
- RATIO: Tailwind Defaults (https://tailwindcss.com/docs/theme)  

| Text Size                    | Use Line Height |
| ---------------------------- | --------------- |
| **Tiny → Small (12–16px)**   | 1.4–1.6         |
| **Medium → Large (18–30px)** | 1.2–1.4         |
| **Headlines (30–48px)**      | 1.1–1.2         |
| **Display (48px–150px)**     | **1.0**         | 

## Tailwind Equivalent

| Role            | Tailwind Size  | Line-height | Weight            |
| --------------- | -------------- | ----------- | ----------------- |
| **Display XL**  | text-9xl       | lh-none     | **font-bold**     |
| **Display LG**  | text-8xl       | lh-none     | **font-bold**     |
| **Display MD**  | text-7xl       | lh-none     | **font-bold**     |
| **Display SM**  | text-6xl       | lh-none     | **font-bold**     |
| **Headline LG** | text-5xl       | lh-tight    | **font-semibold** |
| **Headline MD** | text-4xl       | lh-tight    | **font-semibold** |
| **Headline SM** | text-3xl       | lh-tight    | **font-semibold** |
| **Title LG**    | text-2xl       | lh-snug     | **font-medium**   |
| **Title MD**    | text-xl        | lh-snug     | **font-medium**   |
| **Title SM**    | text-lg        | lh-snug     | **font-medium**   |
| **Body LG**     | text-base (16) | lh-normal   | **font-normal**   |
| **Body MD**     | text-sm (14)   | lh-normal   | **font-normal**   |
| **Body SM**     | text-xs (12)   | lh-normal   | **font-normal**   |
| **Label LG**    | text-sm (14)   | lh-tight    | **font-medium**   |
| **Label SM**    | text-xs (12)   | lh-tight    | **font-medium**   |

## Figma Tailwind Lineheight 
- Formula: (fs*ratio = lh) or (12*1.25=15px)

| Font Size | Line Height (px) | Tailwind line-height |
| --------- | ---------------- | -------------------- |
| 12px      | 15px             | tight / 1.25         |
| 14px      | 21px             | normal / 1.5         |
| 16px      | 24px             | normal / 1.5         |
| 18px      | 24.75px          | snug / 1.375         |
| 20px      | 27.5px           | snug / 1.375         |
| 24px      | 33px             | snug / 1.375         |
| 30px      | 37.5px           | tight / 1.25         |
| 36px      | 45px             | tight / 1.25         |
| 48px      | 60px             | tight / 1.25         |
| 60px      | 60px             | none / 1             |
| 72px      | 72px             | none / 1             |
| 96px      | 96px             | none / 1             |
| 128px     | 128px            | none / 1             |

#### How line-height works differently
| Platform           | What happens when you set line-height |
| ------------------ | -------------------------------------------------- |
| **CSS / Tailwind** | A numeric value like `1.5` **scales automatically with font size**. If font-size changes, line-height is automatically `1.5 × font-size`. You can also use `px` values, but numeric ratios are dynamic.                                                                    |
| **Figma**          | Line-height is **fixed in pixels** when you use pixel values. Figma **does not scale line-height automatically** if you change the font size (unless you manually use % or “Auto” line height). A numeric “1.5” in Figma behaves differently — visually it can look tight. |


## Typography Roles Cheat Sheet

| Role         | Use                                               | Tailwind Size                 | Line-height               | Font-weight     |
| ------------ | ------------------------------------------------- | ----------------------------- | ------------------------- | --------------- |
| **Display**  | Hero, big headings, banners (usually single-line) | 60px+ (text-6xl → text-9xl)   | 1 (tight, single-line)    | Bold (700)      |
| **Headline** | Section headers, major headings                   | 30–48px (text-3xl → text-5xl) | 1.1–1.25 (slightly tight) | Semi-bold (600) |
| **Title**    | Card titles, modal headers, smaller headings      | 18–28px (text-xl → text-2xl)  | 1.25 (snug)               | Medium (500)    |
| **Body**     | Paragraphs, content text                          | 14–16px (text-sm → text-base) | 1.5 (comfortable reading) | Normal (400)    |
| **Label**    | Buttons, input labels, badges                     | 12–14px (text-xs → text-sm)   | 1.3 (slightly tight)      | Medium (500)    |

#### Rules of Thumb

- Display: Always tight → usually one line → bold → visual impact
- Headline: Slightly tighter than body → stands out in sections → semi-bold
- Title: Between headline and body → medium weight → works on cards/modals
- Body: Comfortable for reading → 1.5 line-height → normal weight
- Label: Small UI text → readable → medium weight → slightly tighter

#### TLDR;
“Bigger text = tighter line-height; smaller text = comfortable line-height for readability. Weight decreases from Display → Body, Label is medium for clarity in UI elements.”