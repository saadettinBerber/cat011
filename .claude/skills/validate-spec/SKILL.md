---
name: validate-spec
description: Validate a data item page against the official CAT011 Edition 1.3 specification. Checks bit structures, encoding formulas, hex examples, field names, and cross-references for technical accuracy.
argument-hint: "[file-path] e.g. src/pages/data-items/I011-041.html"
allowed-tools: Read, Grep, Glob, WebSearch, WebFetch
---

# Validate Data Item Page Against CAT011 Specification

Perform a comprehensive technical validation of the specified page.

## Input

File path: $ARGUMENTS

## Validation Steps

### 1. Specification Compliance
- Extract the data item number from the page
- Look up the official specification for this item
  - **Primary:** EUROCONTROL CAT011 Edition 1.3 PDF
  - **Fallback:** https://zoranbosnjak.github.io/asterix/ (if official PDF unavailable)
- Verify: item name, format type, mandatory/optional status
- **Red Flag:** Any content that cannot be traced back to the specification

### 2. Bit Structure Accuracy
- Count total bits — must match specification EXACTLY
- Verify field positions (MSB to LSB)
- Check spare bit locations
- Verify FX (extension) bit handling for variable-length items
- Confirm compound/repetitive structure if applicable
- **Critical Check:** Bit numbering matches spec (bit 1 = MSB or LSB? Verify convention)

### 3. Encoding Correctness
- Verify LSB values against specification (character-perfect match)
- Check conversion formulas mathematically
  - Example: "Value = Raw × (180/2^31) degrees" — verify exponent, units
- Validate value ranges (min, max)
- Confirm signed/unsigned encoding type
- Check two's complement where applicable
- **Formula Verification:** Apply formula to boundary values (0, max, -1) — make sense?

### 4. Hex Example Verification (INDEPENDENT DECODE MANDATORY)

**Critical Process — DO NOT SKIP:**

1. **Extract ONLY the hex bytes** from the page (ignore the walkthrough)
2. **Decode independently** using bit structure and formulas from the page
3. **Record YOUR decoded values** separately
4. **THEN read the page's walkthrough**
5. **Compare:** Do your values match the walkthrough EXACTLY?

**Validation Checklist:**
- [ ] Independent decode completed before reading walkthrough
- [ ] All decoded values match walkthrough
- [ ] Decoded values are realistic:
  - Latitude: -90° ≤ value ≤ +90°
  - Longitude: -180° ≤ value ≤ +180°
  - FL: 0-660 (realistic: 10-450)
  - Cartesian position: realistic for airport (±10000m typical)
  - Velocity: 0-100 m/s ground, 0-300 m/s aircraft
  - Time: 0-86399 seconds
  - Track number: 0-4095
- [ ] Byte order correct (MSB first unless noted)
- [ ] All fields accounted for in example
- [ ] Two's complement handled correctly (signed fields)

**If Mismatch:** Report CRITICAL error with both decode results

### 5. Translation Quality Validation

As part of technical review, verify Turkish translation basics:

**Turkish Character Check (CRITICAL):**
- [ ] Scan all `data-i18n-tr` for ASCII approximations:
  - Search for: "Kaynagi", "Yapisi", "Guncelleme", "Yaslari", "Ucus", "Fazi", "Zamani", "Dogruluk"
  - All should have proper Turkish characters: ç, ş, ğ, ı, ö, ü, İ
- [ ] No instances of c/s/g/o/u used where ç/ş/ğ/ö/ü required

**Sidebar Consistency Check:**
- [ ] Compare sidebar translations with another completed page
- [ ] All navigation labels identical across pages
- [ ] No variation in terminology

**Technical Term Consistency:**
- [ ] Check against `.claude/rules/translation.md` glossary
- [ ] Terms translated consistently throughout page
- [ ] No translation of terms on "never translate" list

**Completeness:**
- [ ] Every `data-i18n-en` has matching `data-i18n-tr`
- [ ] No empty `data-i18n-tr` spans
- [ ] No English text in TR spans (except approved technical terms)

### 6. Cross-Reference Check
- Verify related items actually exist (file present in data-items/)
- Check UAP position number matches spec
- Validate message type associations

### 7. Completeness Check
- All 9 sections present (Header, Purpose, Bit Diagram, Fields, Encoding, Example, Validation, Related, Notes)
- Both EN and TR content present
- No placeholder text remaining ("TODO", "Lorem Ipsum", "Example")

## Output

A comprehensive validation report:

```
VALIDATION REPORT: [Item ID] — [Item Name]
Date: [current date]
File: [file path]
Validator: [Agent name]

========================================
TECHNICAL VALIDATION
========================================

SPECIFICATION COMPLIANCE: PASS / FAIL
  - Item name matches spec: ✓ / ✗
  - Format type correct: ✓ / ✗
  - Field count matches: ✓ / ✗

BIT STRUCTURE: PASS / FAIL
  - Total bits: [expected] vs [actual]
  - Field positions verified: ✓ / ✗
  - Spare bits correct: ✓ / ✗

ENCODING: PASS / FAIL
  - LSB values match spec: ✓ / ✗
  - Formulas mathematically correct: ✓ / ✗
  - Value ranges accurate: ✓ / ✗

HEX EXAMPLE (INDEPENDENT DECODE): PASS / FAIL
  - Independent decode completed: ✓ / ✗
  - Values match walkthrough: ✓ / ✗
  - Realistic values: ✓ / ✗
  [If FAIL: Show both decode results]

CROSS-REFERENCES: PASS / FAIL
  - Related items exist: ✓ / ✗
  - UAP position correct: ✓ / ✗

COMPLETENESS: PASS / FAIL
  - All 9 sections present: ✓ / ✗
  - No placeholder text: ✓ / ✗

========================================
TRANSLATION VALIDATION
========================================

TURKISH CHARACTERS: PASS / FAIL
  - No ASCII approximations found: ✓ / ✗
  [If FAIL: List specific instances]

SIDEBAR CONSISTENCY: PASS / FAIL
  - Navigation labels match other pages: ✓ / ✗
  [If FAIL: Show inconsistencies]

TECHNICAL TERMS: PASS / FAIL
  - Glossary compliance: ✓ / ✗
  - Consistent throughout page: ✓ / ✗

BILINGUAL COMPLETENESS: PASS / FAIL
  - All EN spans have TR spans: ✓ / ✗
  - No empty TR spans: ✓ / ✗

========================================
ISSUES FOUND
========================================

[CRITICAL Issues - must fix]
- [Description with specific location]

[WARNING Issues - should fix]
- [Description]

[INFO Issues - nice to fix]
- [Description]

========================================
OVERALL VERDICT
========================================

Status: APPROVED / NEEDS REVISION
Confidence: HIGH / MEDIUM / LOW

[Summary and recommended actions]
```
