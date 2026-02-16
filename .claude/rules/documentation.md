---
paths:
  - "src/**/*.html"
  - "src/**/*.md"
---

# Documentation Rules

## Page Structure

Every data item page follows this exact structure:

1. **Header Section**: Item ID (e.g., I011/041), full name in both languages
2. **Purpose Section**: 2-3 sentence explanation of why this item exists
3. **Bit Structure Diagram**: SVG-based visual showing byte and bit layout
4. **Fields Table**: Each field with name, bit position, size, encoding, description
5. **Value Encoding**: Formulas, LSB values, conversion examples
6. **Worked Example**: Real hexadecimal data decoded step-by-step
7. **Validation Rules**: Constraints, ranges, mandatory conditions
8. **Related Items**: Links to connected data items
9. **Implementation Notes**: Practical tips and common pitfalls

## Writing Style

- Use clear, direct sentences
- Explain before showing — context first, then the technical detail
- Every hex example must have a human-readable walkthrough
- Tables are preferred over long paragraphs for structured data
- Use consistent terminology across all pages

## Bilingual Content

- All visible text must exist in both EN and TR
- Use `data-i18n-en` and `data-i18n-tr` attributes for toggling
- The language toggle must switch ALL content — headings, paragraphs, tables, tooltips
- Default language on page load: English

## Diagram Standards

- Bit layout diagrams: show MSB on left, LSB on right
- Use consistent color coding: header bytes = blue, data bytes = green, spare bits = gray
- Label every field inside the diagram
- Include bit numbering above the diagram
