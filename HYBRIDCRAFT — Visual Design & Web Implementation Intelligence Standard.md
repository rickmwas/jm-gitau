# HYBRIDCRAFT
## Visual Design & Web Implementation Intelligence Standard

**Version:** 1.0  
**Purpose:** Prevent unnecessary hardcoded visual recreation and establish a professional hybrid workflow between visual design tools, asset creation, frontend engineering, interaction design, accessibility, SEO, and performance.

---

# 1. Core Principle

When implementing a visually ambitious website, **do not assume every visual must be created with code**.

Before implementing any non-trivial visual element, determine:

> **What medium is most appropriate for achieving the intended visual with the highest quality, maintainability, responsiveness, accessibility, performance, and development efficiency?**

The available implementation mediums include:

- HTML
- CSS
- CSS gradients
- CSS masks
- CSS filters
- CSS blend modes
- SVG
- Figma
- Illustrator
- Photoshop
- raster assets
- WebP / AVIF
- Canvas
- WebGL
- Three.js
- animation libraries
- existing open-source assets
- generated/custom assets
- combinations of the above

The goal is **not maximum code**.

The goal is **maximum visual quality per unit of complexity**.

---

# 2. The HYBRIDCRAFT Mental Model

Treat every website as a composition of different layers.

```text
CONTENT
    ↓
HTML / CMS / DATA

LAYOUT
    ↓
CSS / GRID / FLEX / CONTAINER QUERIES

VISUAL LANGUAGE
    ↓
CSS / SVG / DESIGN ASSETS

COMPLEX ARTWORK
    ↓
FIGMA / ILLUSTRATOR / PHOTOSHOP / SVG / RASTER

INTERACTION
    ↓
JAVASCRIPT / MOTION / GSAP / CANVAS / WEBGL

DELIVERY
    ↓
NEXT.JS / CDN / IMAGE OPTIMIZATION / CACHING
```

Do not force one technology to perform another technology's job.

---

# 3. The Medium Selection Rule

For every requested visual, classify it before implementation.

## A. Use HTML when the element is content

Examples:

- headings
- paragraphs
- navigation
- buttons
- links
- forms
- prices
- product information
- campaign promises
- articles
- important labels

Important textual content should normally remain real HTML.

Never convert meaningful website copy into an image merely because it looks better.

---

# 4. Use CSS when the visual is computationally simple

CSS should generally handle:

- layout
- spacing
- positioning
- responsive behavior
- backgrounds
- gradients
- borders
- shadows
- simple shapes
- cards
- typography
- hover states
- basic decorative elements
- simple blur
- simple masking
- simple transitions

Example:

```css
background:
  radial-gradient(...),
  linear-gradient(...);
```

Do not export an image from Photoshop merely to reproduce a simple gradient that CSS can render efficiently.

---

# 5. Use SVG when the visual is vector-based

Prefer SVG for:

- logos
- icons
- line art
- illustrations
- geometric patterns
- decorative shapes
- contour lines
- maps
- brush strokes
- vector textures
- complex borders
- organic shapes
- abstract artwork

SVG is especially valuable when the asset needs to:

- scale cleanly
- remain transparent
- work at multiple resolutions
- be recolored
- be animated
- be masked
- remain relatively lightweight

SVG is a lossless vector format and is particularly suitable for responsive logos, icons and illustrations.

---

# 6. Use Photoshop when raster compositing is the correct tool

Photoshop should be used when the visual requires:

- photographic manipulation
- subject extraction
- image compositing
- realistic shadows
- photographic textures
- complex image treatment
- retouching
- advanced raster effects
- complex layered visual compositions
- artistic image manipulation

Example:

A campaign hero containing a person, photographic lighting, texture, atmospheric effects and a carefully composited background should not necessarily be recreated using thousands of CSS declarations.

Instead:

```text
PHOTOSHOP

Person cutout
      +
Image treatment
      +
Texture
      +
Complex visual effect
      ↓
Transparent WebP / AVIF
      ↓
Web implementation
```

The website then controls:

- position
- scale
- cropping
- layering
- responsiveness
- animation

---

# 7. Use Illustrator or equivalent vector tooling for complex vector artwork

Use vector design software for:

- custom campaign marks
- complex illustrations
- detailed patterns
- sophisticated geometric systems
- custom typography artwork
- vector logos
- elaborate decorative elements

Then export appropriate assets, usually SVG where suitable.

---

# 8. Use Figma for composition and design systems

Figma should be used for:

- page composition
- layout exploration
- typography
- spacing
- component systems
- visual hierarchy
- responsive design exploration
- design tokens
- design documentation
- developer handoff

Do not treat Figma as a final screenshot generator.

Use it as the **design source of truth**.

Figma supports exporting layers, components and frames as SVG, PNG and other formats, and its developer handoff workflow is designed around inspectable layers, styles, components and exportable assets.

---

# 9. Use Canvas/WebGL when the visual is computational or interactive

Consider Canvas/WebGL/Three.js when the visual requires:

- real-time particles
- 3D
- shaders
- fluid simulations
- interactive distortion
- generative visuals
- thousands of moving elements
- advanced image displacement
- real-time graphical effects

Do not use WebGL simply because it looks impressive.

It introduces:

- complexity
- accessibility considerations
- performance concerns
- debugging overhead
- device compatibility concerns

Use it only when the visual benefit justifies the engineering cost.

Award-winning creative websites commonly combine technologies such as Next.js, GSAP, WebGL and a content layer rather than relying on one technology for everything.

---

# 10. The Complexity Escalation Ladder

Before writing complicated code, move through this ladder:

```text
LEVEL 1
Existing HTML/CSS
        ↓
LEVEL 2
CSS gradients / transforms / filters
        ↓
LEVEL 3
SVG
        ↓
LEVEL 4
Existing reusable asset
        ↓
LEVEL 5
Figma / Illustrator artwork
        ↓
LEVEL 6
Photoshop compositing
        ↓
LEVEL 7
Canvas / animation
        ↓
LEVEL 8
WebGL / Three.js / shaders
```

Do not jump to Level 8 because Level 1 was inconvenient.

Do not write 5,000 lines of CSS to avoid creating a 20 KB SVG.

---

# 11. The 15-Minute Complexity Test

When an agent encounters a complicated visual request, it must pause before implementation.

Ask:

### Question 1
Can CSS achieve this cleanly?

### Question 2
Can SVG achieve it more accurately?

### Question 3
Would a designed asset achieve it faster and better?

### Question 4
Does the visual need to change dynamically?

### Question 5
Does the visual need interaction?

### Question 6
Is the visual content or decoration?

### Question 7
Does it need to be accessible?

### Question 8
Does it need to be responsive?

### Question 9
Will generating it in code create excessive complexity?

### Question 10
Can an existing asset or technique be reused legally and efficiently?

If code would become disproportionately complex compared with the visual value, **stop coding and reconsider the medium**.

---

# 12. The 70,000-Line Rule

If a simple visual concept begins requiring absurd amounts of code, this is a warning signal.

For example:

> "Create a realistic hand-painted brush stroke."

If the proposed solution becomes:

```text
1,800 CSS declarations
+
multiple pseudo-elements
+
SVG path generated manually
+
custom gradients
+
dozens of transforms
```

the agent must reconsider.

A proper response should be:

```text
This is better represented as SVG artwork.
Create/export the brush stroke externally.
Implement it as a transparent responsive asset.
```

The purpose of engineering is not to prove that something *can* be coded.

The purpose is to build the best system.

---

# 13. External Design → Website Pipeline

When external design is selected, use this pipeline:

```text
IDEA
 ↓
VISUAL REFERENCE / RESEARCH
 ↓
ART DIRECTION
 ↓
FIGMA / PHOTOSHOP / ILLUSTRATOR
 ↓
ASSET EXTRACTION
 ↓
OPTIMIZATION
 ↓
WEB IMPLEMENTATION
 ↓
RESPONSIVE COMPOSITION
 ↓
ACCESSIBILITY
 ↓
SEO
 ↓
PERFORMANCE
 ↓
VISUAL QA
```

---

# 14. Asset Handoff Standard

Every external asset should have:

```text
name
purpose
format
dimensions
transparency requirement
responsive behavior
intended location
accessibility requirement
license/source
optimization status
```

Example:

```text
hero-person.webp

Purpose:
Hero foreground subject

Format:
WebP

Transparency:
Yes

Responsive:
Scale + reposition

Desktop:
Right / bottom

Tablet:
Center-right

Mobile:
Bottom / partially cropped

Accessibility:
Decorative if duplicated by semantic content

Source:
Campaign photography

Optimization:
Required
```

Figma supports explicit export configurations for assets and recommends descriptive organization and meaningful layer/component naming to improve developer handoff.

---

# 15. Never Flatten the Entire Website

Do NOT turn:

```text
Hero
```

into:

```text
hero-final-final-v7.png
```

if the hero contains meaningful content.

Instead separate:

```text
CONTENT
    ↓
HTML

PHOTO
    ↓
WebP / AVIF

DECORATIVE ART
    ↓
SVG

BACKGROUND
    ↓
CSS / image

INTERACTION
    ↓
JS

COMPOSITION
    ↓
CSS
```

This preserves:

- SEO
- accessibility
- responsiveness
- maintainability
- performance
- animation
- content updates

---

# 16. Decorative vs Semantic Rule

Every visual asset must be classified as either:

### Semantic

It communicates information.

Example:

```text
A map showing project locations
```

This may require:

- accessible alternative
- supporting text
- structured content
- potentially interactive accessible controls

### Decorative

It improves visual presentation but does not communicate essential information.

Example:

```text
Brush stroke
grain
background blob
decorative contour
abstract shape
```

Decorative assets should not interfere with accessibility.

Use:

```html
aria-hidden="true"
```

where appropriate.

---

# 17. SEO Preservation Rule

A visually complex website must still have a boringly excellent semantic foundation.

Use:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
<h1>
<h2>
<p>
<a>
<img>
```

Important copy must remain actual text.

Images need appropriate `alt` treatment.

Decorative images should not become fake SEO content.

Visual complexity must never be used as an excuse to flatten content into images.

---

# 18. Responsive Art Direction Rule

Do not assume that desktop artwork simply scales down.

A visual asset can have different compositions at different breakpoints.

For example:

```text
DESKTOP

text ───────── person
        brush
             texture


MOBILE

text

person
brush
texture
CTA
```

The asset itself may remain identical while:

- position changes
- scale changes
- crop changes
- layering changes
- visibility changes

This is called **responsive art direction**.

---

# 19. Research Before Reinventing

For ambitious visual requests, the agent should determine whether the technique already exists.

Search for:

- exact visual effect
- implementation technique
- website examples
- case studies
- GitHub repositories
- CodePen examples
- SVG techniques
- CSS techniques
- WebGL implementations
- Three.js examples
- GSAP examples
- Figma workflows
- Photoshop/Illustrator workflows
- performance discussions
- browser compatibility

Search broadly.

Do not assume the model's existing knowledge is sufficient.

---

# 20. Research Protocol

For a complex visual request, search using multiple angles.

Example request:

> "I want an animated liquid brush stroke around a photograph."

Search:

```text
"animated SVG brush stroke website"
"SVG brush stroke mask CSS animation"
"liquid brush animation web"
"interactive SVG distortion website"
"GSAP SVG path animation"
"WebGL liquid distortion image"
"site:github.com SVG brush animation"
"site:codepen.io SVG brush stroke"
```

Then determine:

```text
What has already been done?
How was it implemented?
What libraries were used?
Can we reuse it?
What license does it have?
What are its performance implications?
What browsers/devices does it support?
Can we simplify it?
```

---

# 21. Reuse Before Rebuild

Before creating a complex visual system from scratch, search for reusable:

- open-source libraries
- SVG assets
- icon sets
- animation libraries
- shaders
- Three.js examples
- design resources
- existing internal components

But never blindly copy.

Verify:

```text
LICENSE
SOURCE
MAINTENANCE
DEPENDENCIES
SECURITY
PERFORMANCE
COMPATIBILITY
```

Reusing a good implementation is engineering.

Reinventing everything is not automatically craftsmanship.

---

# 22. Never Copy a Design Blindly

When researching an existing website:

Do not reproduce:

- proprietary artwork
- copyrighted illustrations
- distinctive branding
- proprietary code without permission
- private assets

Instead identify:

> **What principle or technique makes this work?**

Then create an original implementation appropriate for the project.

---

# 23. Visual Technique Report

For every unusually ambitious visual, the agent should be able to produce:

```text
VISUAL:
Animated paint stroke around hero subject

RECOMMENDED MEDIUM:
SVG + CSS/GSAP

WHY:
Vector shape + path animation

ALTERNATIVES:
Canvas
WebGL

NOT RECOMMENDED:
Pure CSS

EXTERNAL DESIGN:
Create SVG stroke in Illustrator/Figma

WEB IMPLEMENTATION:
Import SVG
Animate path
Position using CSS

SEO IMPACT:
None if decorative

ACCESSIBILITY:
aria-hidden

PERFORMANCE:
Low

COMPLEXITY:
Low–Medium
```

This makes the reasoning explicit.

---

# 24. Design-to-Code Decision Matrix

| Requirement | Preferred medium |
|---|---|
| Typography | HTML + CSS |
| Layout | CSS |
| Gradient | CSS |
| Simple blob | CSS |
| Complex blob | SVG |
| Logo | SVG |
| Icon | SVG |
| Illustration | SVG |
| Brush stroke | SVG / raster |
| Photograph | WebP / AVIF |
| Cut-out person | WebP / AVIF |
| Complex photo manipulation | Photoshop |
| Complex vector illustration | Illustrator |
| Page composition | Figma |
| Animation | CSS / Motion / GSAP |
| Complex SVG animation | SVG + GSAP |
| Particle system | Canvas |
| 3D | WebGL / Three.js |
| Shader effect | WebGL |
| Dynamic data | HTML / React |
| Important text | HTML |
| Decorative texture | Raster / SVG |
| Complex image mask | SVG / CSS mask |
| Interactive map | SVG / Canvas / WebGL |
| Static visual background | CSS / optimized asset |

This is guidance, not a rigid law.

---

# 25. The Hybrid Composition Principle

A high-end website should often look like:

```text
┌───────────────────────────────────┐
│                                   │
│ HTML CONTENT                      │
│                                   │
│        SVG ARTWORK                │
│             ╲                     │
│              ╲    PHOTO          │
│               ╲                  │
│         CSS GRADIENT             │
│                                   │
│       MOTION / INTERACTION        │
│                                   │
└───────────────────────────────────┘
```

Not:

```text
ONE GIANT PNG
```

And not:

```text
70,000 LINES OF CSS
```

---

# 26. Design System Before Page System

For ambitious projects, establish:

```text
TYPOGRAPHY
COLORS
GRID
SPACING
RADII
SHADOWS
MOTION
IMAGE TREATMENT
GRAPHIC LANGUAGE
ICONOGRAPHY
```

Then pages consume the system.

Do not create every page as an isolated visual experiment.

---

# 27. Asset Library Standard

Projects should maintain:

```text
/assets
    /brand
    /photos
    /illustrations
    /svg
    /textures
    /patterns
    /icons
    /video
```

Assets should be named meaningfully.

Avoid:

```text
final2.svg
new-final.svg
brush-new2.svg
IMG_9283.png
thing-final-final.png
```

Prefer:

```text
hero-brush-primary.svg
hero-subject-jm.webp
naivasha-contour.svg
campaign-grain.webp
community-forum-01.webp
```

---

# 28. Performance Is Part of Design

A beautiful asset that destroys performance is not a successful design.

Before shipping, inspect:

- file size
- image dimensions
- format
- lazy loading
- loading priority
- responsive image sizing
- video size
- animation cost
- DOM complexity
- GPU usage
- JavaScript bundle size

Prefer the smallest representation that preserves the intended quality.

---

# 29. The Agent Must Challenge the Prompt

When given a task, do not blindly obey its implementation assumptions.

If the prompt says:

> "Create a CSS brush stroke."

The agent should evaluate whether CSS is actually the correct medium.

If not, say:

> "A custom SVG asset would produce a cleaner and substantially more maintainable result. I recommend creating the stroke externally and integrating it as a responsive decorative asset."

Likewise:

If asked:

> "Build this 3D effect."

The agent should determine whether:

```text
CSS
SVG
Canvas
WebGL
Three.js
```

is actually appropriate.

The agent's responsibility is **solution quality**, not literal obedience to an inefficient implementation path.

---

# 30. The Agent's Pre-Implementation Protocol

Before implementing a visually significant feature:

```text
1. Understand the desired visual outcome.

2. Identify whether the element is:
   content / layout / decoration / interaction.

3. Identify candidate mediums.

4. Evaluate CSS feasibility.

5. Evaluate SVG feasibility.

6. Evaluate external design asset feasibility.

7. Search the web for prior implementations.

8. Search for reusable techniques/libraries/assets.

9. Check licensing where reuse is considered.

10. Estimate implementation complexity.

11. Evaluate performance.

12. Evaluate accessibility.

13. Evaluate SEO implications.

14. Select the simplest medium that achieves the desired quality.

15. Implement.

16. Compare against the intended visual.

17. Optimize.

18. Document the decision.
```

---

# 31. Complexity Budget

Every visual feature has a complexity budget.

Use:

```text
LOW
CSS / existing component

MEDIUM
SVG / asset / animation

HIGH
custom SVG / GSAP / Canvas

VERY HIGH
WebGL / Three.js / shader / custom rendering
```

A high-complexity technique must have a clear visual justification.

Do not introduce WebGL to make a circle move.

Do not create a 300-line SVG to reproduce a CSS gradient.

Do not create 2,000 CSS rules to reproduce artwork that Photoshop can produce as a 40 KB asset.

---

# 32. Visual Fidelity Rule

When an external design and the browser implementation differ, do not immediately add CSS hacks.

First determine:

```text
Is the asset wrong?
Is the crop wrong?
Is the typography wrong?
Is the spacing wrong?
Is the composition wrong?
Is the color profile wrong?
Is the implementation medium wrong?
```

Fix the root cause.

Avoid accumulating:

```text
!important
magic numbers
negative margins
random transforms
arbitrary z-index values
```

as visual patches.

---

# 33. Magic Number Warning

A small amount of precise positioning is normal.

But if a component starts looking like:

```css
top: 137px;
left: 481px;
transform: translate(-37px, 19px);
margin-left: -83px;
z-index: 47;
```

and these values exist only to compensate for previous values, stop.

Reconsider:

- layout model
- asset dimensions
- SVG viewBox
- composition
- positioning strategy
- breakpoint strategy

The solution should be structurally understandable.

---

# 34. External Design Is Not Failure

Creating an asset in Photoshop, Illustrator or Figma is **not cheating**.

It is choosing the appropriate production medium.

Professional web experiences routinely combine art direction, custom graphics and engineering. Case studies of high-end creative sites demonstrate this hybrid approach, including combinations of custom visual direction, motion, WebGL and modern web frameworks.

---

# 35. The Final Quality Gate

Before considering a visually ambitious feature complete, ask:

### Design

- Does it look intentional?
- Does it have a visual concept?
- Does it avoid generic AI-generated aesthetics?
- Does it fit the brand?

### Implementation

- Is the medium appropriate?
- Is the code maintainable?
- Did we avoid unnecessary complexity?

### Content

- Is important content real HTML?
- Is the hierarchy semantic?

### Accessibility

- Are decorative assets ignored by assistive technology?
- Are meaningful visuals accessible?
- Is contrast sufficient?
- Can the experience work without motion?

### SEO

- Is content crawlable?
- Are headings semantic?
- Are images appropriately described?
- Are navigation and links real HTML?

### Performance

- Are images optimized?
- Are assets appropriately sized?
- Are animations efficient?
- Is JavaScript justified?

### Responsive

- Does the composition work on mobile?
- Does artwork reposition intelligently?
- Does typography remain intentional?

### Research

- Did we check whether this technique already exists?
- Did we evaluate reuse?
- Did we check licenses?
- Did we understand the constraints?

---

# 36. The HYBRIDCRAFT Golden Rule

> **If the browser is the best tool, code it.**
>
> **If a design tool is the best tool, design it.**
>
> **If both are required, combine them.**
>
> **Never write complex code merely because you can.**
>
> **Never export an image merely because coding it is difficult.**
>
> **Choose the medium that produces the best overall result.**

---

# 37. Agent Instruction

Whenever this standard is invoked, the agent must operate as:

**Designer + Frontend Engineer + Creative Technologist + Performance Engineer**

rather than acting solely as a code generator.

The agent must be willing to say:

> **"This should not be coded from scratch."**

when appropriate.

It must also be willing to say:

> **"This should not be an image."**

when semantic HTML/CSS/SVG is clearly better.

The objective is not to maximize code.

The objective is:

```text
DESIGN QUALITY
        +
ENGINEERING QUALITY
        +
PERFORMANCE
        +
ACCESSIBILITY
        +
SEO
        +
MAINTAINABILITY
        =
PRODUCTION-QUALITY DIGITAL EXPERIENCE
```

**HYBRIDCRAFT exists to make that decision deliberately.**