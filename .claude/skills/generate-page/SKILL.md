---
name: generate-page
description: Generate a complete data item page for a CAT011 data item. Creates the HTML page with bit diagrams, encoding tables, hex examples, and bilingual markup. Use when starting a new data item page.
argument-hint: "[item-id] e.g. I011-041"
allowed-tools: Read, Write, Edit, Glob, Grep, WebSearch, WebFetch
---

# Generate CAT011 Data Item Page

Generate a complete, production-ready HTML page for the specified CAT011 data item.

## Input

Item ID: $ARGUMENTS (e.g., "I011-041", "I011-170", "I011-000")

## Steps

### Step 1: Load Template (MANDATORY FIRST STEP)

**CRITICAL: Do NOT create HTML from scratch.**

1. **Read** an existing, complete data item page as template:
   ```
   /home/b920/Desktop/TBTK_B920/CAT011/src/pages/data-items/I011-000.html
   ```
   OR any other complete page (I011-010.html, I011-041.html, etc.)

2. **Extract and preserve:**
   - Complete sidebar navigation (lines ~11-88 in reference page)
   - Topbar structure with breadcrumb and language toggle
   - Main content wrapper structure
   - Footer (if present)
   - Script includes at end: i18n.js, nav.js

3. **Why this is critical:**
   - Sidebar must be IDENTICAL across all pages (user navigation consistency)
   - CSS classes must match (styling dependency)
   - JavaScript hooks rely on specific HTML structure
   - Language toggle mechanism requires exact data-attribute structure

### Step 2: Research

Look up the data item in the CAT011 specification:
- Official name and item number
- Format type (Fixed, Variable, Compound, Repetitive)
- Bit structure and field definitions
- Encoding rules (LSB, ranges, formulas)
- Related items

**Sources (in priority order):**
1. Official EUROCONTROL CAT011 Ed. 1.3 PDF
2. https://zoranbosnjak.github.io/asterix/ (if official unavailable)
3. Project rules: `.claude/rules/aviation-standards.md`

### Step 3: Generate Content (NOT Structure)

Using the template from Step 1, **replace ONLY content sections:**
- Update page title, breadcrumb
- Update main content area with the 9 required sections
- Keep sidebar UNCHANGED from template
- Keep header/footer structure UNCHANGED

### Step 4: Create Content Sections (9 Required Sections)

1. **Header**: Item ID and name (bilingual)
2. **Purpose**: 2-3 sentence explanation (bilingual)
3. **SVG Bit Structure Diagram**: Visual representation
4. **Fields Table**: All fields with bit positions, sizes, encoding
5. **Value Encoding**: Formulas with units (e.g., "LSB = 1 meter")
6. **Worked Hex Example**:
   - **CRITICAL:** Manually decode the hex BEFORE writing the walkthrough
   - Verify decoded values are realistic
   - Write step-by-step decode process
7. **Validation Rules**: Constraints, ranges, mandatory conditions
8. **Related Items**: Cross-references with links to actual pages
9. **Implementation Notes**: Practical tips, common pitfalls

### Step 5: Bilingual Markup

**IMPORTANT: At this stage, create ONLY English content.**

Wrap ALL user-visible text in `data-i18n-en` spans:
```html
<h2>
  <span data-i18n-en>Position in WGS-84 Coordinates</span>
  <span data-i18n-tr></span>  <!-- Leave empty - translator fills this -->
</h2>
```

**Do NOT attempt Turkish translation** — leave `data-i18n-tr` spans empty. The `translator` agent will fill these in a separate step.

**Why:**
- Translation requires specific Turkish language expertise
- Quality control is easier when translation is a separate step
- Prevents ASCII Turkish character errors in initial generation

### Step 6: Sidebar Consistency Verification

Before finishing, verify:
- [ ] Sidebar navigation is EXACTLY the same as the template page
- [ ] All sidebar links present (all 28+ data items)
- [ ] Sidebar translations match template (if any TR content present in template)
- [ ] Current page marked with `sidebar__link--active` class
- [ ] No broken links (href paths correct: relative `I011-XXX.html`)

### Step 7: Final Quality Checks

- [ ] Started from existing page template (not created from scratch)
- [ ] All 9 required sections present
- [ ] Hex example manually decoded and verified
- [ ] All formulas have units specified
- [ ] No placeholder text ("TODO", "Lorem Ipsum", "Example Value")
- [ ] All `data-i18n-en` spans filled
- [ ] All `data-i18n-tr` spans empty (ready for translator)
- [ ] Cross-references point to valid pages
- [ ] HTML valid (no unclosed tags)
- [ ] Technical content based ONLY on official specification (no hallucination)

## Output

A complete HTML file at: `src/pages/data-items/$ARGUMENTS.html`
