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
- **JS Pattern**: IIFE (file:// protocol CORS compatibility — not ES6 modules)

## Directory Structure

```
CAT011/                               # Project root
├── index.html                        # Landing page with 30 data item cards
├── css/
│   └── style.css                     # Global styles (BEM, dark/light, responsive)
├── js/
│   ├── i18n.js                       # Language switching engine (EN/TR toggle)
│   ├── nav.js                        # Sidebar navigation, active link, mobile menu
│   └── main.js                       # Theme management, initialization
├── pages/
│   ├── overview.html                 # CAT011 genel bakis / overview
│   ├── message-types.html            # 7 message types
│   ├── uap.html                      # UAP structure
│   └── data-items/
│       ├── I011-000.html             # Message Type               ✅
│       ├── I011-010.html             # Data Source Identifier      ✅
│       ├── I011-015.html             # Service Identification      ✅
│       ├── I011-041.html             # Position in WGS-84          ✅
│       ├── I011-042.html             # Cartesian Position          ✅
│       ├── I011-060.html             # Mode-3/A Code
│       ├── I011-090.html             # Measured Flight Level
│       ├── I011-092.html             # Geometric Altitude
│       ├── I011-093.html             # Barometric Altitude
│       ├── I011-140.html             # Time of Track               ✅
│       ├── I011-161.html             # Track Number
│       ├── I011-170.html             # Track Status
│       ├── I011-202.html             # Cartesian Velocity          ✅
│       ├── I011-210.html             # Acceleration
│       ├── I011-215.html             # Climb/Descent Rate
│       ├── I011-245.html             # Target Identification
│       ├── I011-270.html             # Target Size/Orientation
│       ├── I011-290.html             # Update Ages
│       ├── I011-300.html             # Vehicle Fleet ID
│       ├── I011-310.html             # Pre-programmed Message
│       ├── I011-380.html             # Mode-S / ADS-B Data
│       ├── I011-390.html             # Flight Plan Data
│       ├── I011-430.html             # Phase of Flight
│       ├── I011-500.html             # Estimated Accuracies
│       ├── I011-600.html             # Alert Messages
│       ├── I011-605.html             # Tracks in Alert
│       ├── I011-610.html             # Holdbar Status
│       ├── I011-SP.html              # Special Purpose Field
│       └── I011-RE.html              # Reserved Expansion
├── assets/
│   └── diagrams/                     # SVG diagram assets (reserved)
├── plans/
│   └── GOREV_DURUMU.md               # Task status tracking (Turkish)
├── .claude/
│   ├── agents/
│   │   ├── documentation-writer/     # EN technical content creator (Sonnet)
│   │   ├── translator/               # EN→TR translator (Sonnet)
│   │   ├── quality-checker/          # Translation QA reviewer (Sonnet, read-only)
│   │   └── technical-reviewer/       # Spec validator (Opus, final gate)
│   ├── skills/
│   │   ├── generate-page/            # /generate-page [item-id]
│   │   ├── translate-content/        # /translate-content [file]
│   │   └── validate-spec/            # /validate-spec [file]
│   ├── rules/
│   │   ├── documentation.md          # 9-section page template rules
│   │   ├── translation.md            # EN→TR glossary (50+ terms) + rules
│   │   ├── aviation-standards.md     # ASTERIX/CAT011 technical constants
│   │   └── code-style.md             # Clean Code, BEM, ES6+ standards
│   ├── hooks/
│   │   └── validate-html.sh          # Post-edit: EN/TR span count check
│   ├── settings.json                 # Permissions and env vars
│   └── settings.local.json           # Local MCP tool permissions
└── CLAUDE.md                         # This file
```

## Progress Status

- **Block 1 — Core**: 7/7 complete (I011-010, 000, 015, 140, 041, 042, 202)
- **Block 2 — Identity**: 7/7 complete (I011-060, 210, 245, 380, 161, 170, 290)
- **Block 3 — Altitude**: 6/7 complete (I011-430, 090, 093, 092, 215, 270), pending (390)
- **Block 4 — Alerts**: 0/8 pending (I011-300, 310, 500, 600, 605, 610, SP, RE)
- **Overall**: 20/29 data items (69%)

## Reference Specification

- **Standard**: EUROCONTROL ASTERIX
- **Category**: 011 (Part 8)
- **Edition**: 1.3 (11 May 2020)
- **Purpose**: Transmission of A-SMGCS surveillance and flight plan data
- **Local Specs (PREFERRED)**: `docs/` folder (gitignored, not pushed to remote)
  - `docs/eurocontrol-cat011-pt8-ed1-3.pdf` — CAT011 Ed. 1.3
  - `docs/eurocontrol-specification-a-smgcs-v-2-0.pdf` — A-SMGCS v2.0
- **Official PDF**: https://www.eurocontrol.int/sites/default/files/2020-05/eurocontrol-cat011-pt8-ed1-3.pdf
- **Fallback Reference**: https://zoranbosnjak.github.io/asterix/

## Coding Standards

- **HTML**: Semantic HTML5, accessible (ARIA labels), no inline styles
- **CSS**: BEM naming convention, CSS custom properties for theming
- **JS**: IIFE pattern (file:// CORS compatibility), no global state, pure functions
- **Files**: One responsibility per file, descriptive naming
- **Comments**: Only where logic is not self-evident
- **i18n**: All user-visible text stored in data attributes: `data-i18n-en` and `data-i18n-tr`

## Bilingual Content Rules

- Every text element must have both EN and TR versions
- Technical terms (ASTERIX, CAT011, WGS-84, Mode-S, etc.) are NOT translated
- Aviation abbreviations keep their original form with Turkish explanation in parentheses on first use
- TR translations must be natural Turkish, not word-by-word translations
- Turkish characters (ç, ş, ğ, ı, ö, ü, İ) are MANDATORY — ASCII approximations are NEVER acceptable
- Terminology must follow the glossary in `.claude/rules/translation.md`

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

When creating content, the team works in this 4-stage pipeline:

1. **documentation-writer** (Sonnet) creates the English technical content
   - Must read an existing page as template before creating new ones
   - Must independently verify hex examples before writing walkthroughs
   - Sources: Official spec PDF → zoranbosnjak.github.io → project rules

2. **translator** (Sonnet) produces the Turkish version
   - Turkish characters (ç, ş, ğ, ı, ö, ü, İ) are non-negotiable
   - Must follow glossary in `.claude/rules/translation.md`
   - Must produce natural Turkish, not literal translation

3. **quality-checker** (Sonnet, read-only) verifies translation quality
   - Checks: completeness, Turkish characters, glossary compliance, cross-page consistency
   - Reports issues as CRITICAL / WARNING / INFO

4. **technical-reviewer** (Opus, final gate) validates against CAT011 specification
   - Must independently decode hex examples BEFORE reading walkthroughs
   - Validates: bit structures, encoding formulas, value ranges, cross-references
   - Also checks Turkish translation quality as part of review

## Common Workflows

- `/generate-page [item-id]` — Generate a complete data item page
- `/translate-content [file]` — Translate page content EN→TR
- `/validate-spec [file]` — Validate technical accuracy against CAT011 spec
