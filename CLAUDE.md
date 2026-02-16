# ASTERIX CAT011 Documentation Project

## Project Overview

This project creates a comprehensive, interactive, bilingual (EN/TR) web documentation site for EUROCONTROL's ASTERIX Category 011 specification — the standard for transmitting A-SMGCS (Advanced Surface Movement Guidance and Control System) data at airports.

The goal is to transform the dry, technical PDF specification into a visually rich, developer-friendly, multi-page web reference.

## Architecture

- **Type**: Multi-page static web documentation site
- **Language**: HTML5 + CSS3 + Vanilla JavaScript (no frameworks)
- **Structure**: Clean Code principles — each data item has its own page
- **i18n**: Client-side TR/EN language toggle (no page reload)
- **Design**: Aviation-themed, dark/light mode, responsive
- **Diagrams**: SVG-based bit layout diagrams, flow charts, structure visualizations

## Directory Structure

```
src/
├── index.html                    # Landing page with navigation
├── css/
│   └── style.css                 # Global styles
├── js/
│   ├── i18n.js                   # Language switching engine
│   ├── nav.js                    # Navigation logic
│   └── diagrams.js               # SVG diagram generators
└── pages/
    ├── overview.html             # CAT011 genel bakis / overview
    ├── message-types.html        # 7 message types
    ├── uap.html                  # UAP structure
    └── data-items/
        ├── I011-000.html         # Message Type
        ├── I011-010.html         # Data Source Identifier
        ├── I011-015.html         # Service Identification
        ├── I011-041.html         # Position in WGS-84
        ├── I011-042.html         # Cartesian Position
        ├── I011-060.html         # Mode-3/A Code
        ├── I011-090.html         # Measured Flight Level
        ├── I011-092.html         # Geometric Altitude
        ├── I011-093.html         # Barometric Altitude
        ├── I011-140.html         # Time of Track
        ├── I011-161.html         # Track Number
        ├── I011-170.html         # Track Status
        ├── I011-202.html         # Cartesian Velocity
        ├── I011-210.html         # Acceleration
        ├── I011-215.html         # Climb/Descent Rate
        ├── I011-245.html         # Target Identification
        ├── I011-270.html         # Target Size/Orientation
        ├── I011-290.html         # Update Ages
        ├── I011-300.html         # Vehicle Fleet ID
        ├── I011-310.html         # Pre-programmed Message
        ├── I011-380.html         # Mode-S / ADS-B Data
        ├── I011-390.html         # Flight Plan Data
        ├── I011-430.html         # Phase of Flight
        ├── I011-500.html         # Estimated Accuracies
        ├── I011-600.html         # Alert Messages
        ├── I011-605.html         # Tracks in Alert
        ├── I011-610.html         # Holdbar Status
        ├── I011-SP.html          # Special Purpose Field
        └── I011-RE.html          # Reserved Expansion
```

## Reference Specification

- **Standard**: EUROCONTROL ASTERIX
- **Category**: 011 (Part 8)
- **Edition**: 1.3 (11 May 2020)
- **Purpose**: Transmission of A-SMGCS surveillance and flight plan data
- **Official PDF**: https://www.eurocontrol.int/sites/default/files/2020-05/eurocontrol-cat011-pt8-ed1-3.pdf

## Coding Standards

- **HTML**: Semantic HTML5, accessible (ARIA labels), no inline styles
- **CSS**: BEM naming convention, CSS custom properties for theming
- **JS**: ES6+ modules, no global state, pure functions where possible
- **Files**: One responsibility per file, descriptive naming
- **Comments**: Only where logic is not self-evident
- **i18n**: All user-visible text stored in data attributes: `data-i18n-en` and `data-i18n-tr`

## Bilingual Content Rules

- Every text element must have both EN and TR versions
- Technical terms (ASTERIX, CAT011, WGS-84, Mode-S, etc.) are NOT translated
- Aviation abbreviations keep their original form with Turkish explanation in parentheses on first use
- TR translations must be natural Turkish, not word-by-word translations

## Data Item Documentation Standard

Each data item page must include:
1. **Header**: Item number + name (EN/TR)
2. **Purpose**: Why this item exists
3. **Bit Structure Diagram**: Visual SVG showing byte/bit layout
4. **Field Descriptions Table**: Each field with encoding, size, meaning
5. **Value Encoding**: How values are calculated (LSB, formulas)
6. **Example**: Real hex data with step-by-step decode walkthrough
7. **Validation Rules**: Constraints and edge cases
8. **Related Items**: Cross-references to other data items
9. **Notes**: Implementation tips, common pitfalls

## Agent Team Workflow

When creating content, the team works in this pipeline:
1. **documentation-writer** creates the English technical content
2. **translator** produces the Turkish version
3. **quality-checker** verifies translation quality and consistency
4. **technical-reviewer** (Opus) validates against CAT011 specification

## Common Workflows

- `/generate-page [item-id]` — Generate a complete data item page
- `/translate-content [file]` — Translate page content EN→TR
- `/validate-spec [file]` — Validate technical accuracy
