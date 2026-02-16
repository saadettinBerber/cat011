---
name: translate-content
description: Translate the English content of a page to Turkish. Reads all data-i18n-en spans and creates/updates corresponding data-i18n-tr spans with natural Turkish translations. Use after documentation-writer creates a page.
argument-hint: "[file-path] e.g. src/pages/data-items/I011-041.html"
allowed-tools: Read, Edit, Grep
---

# Translate Page Content (EN → TR)

Translate all English content in the specified file to Turkish.

## Input

File path: $ARGUMENTS

## Process

### Step 1: Read and Prepare
1. **Read** the file and identify all `data-i18n-en` spans
2. **Load** the terminology glossary from `.claude/rules/translation.md`
3. **Load** the translation agent guidelines for Turkish grammar rules

### Step 2: Translate with Quality Checks

For EACH text block to translate:

1. **Read** the English content thoroughly
2. **Check glossary** for standard term translations
3. **Translate** to natural Turkish:
   - Follow glossary terms exactly
   - Maintain technical precision
   - Use natural Turkish sentence structure (not word-by-word)
   - Apply correct isim tamlaması (possessive) suffixes
   - Preserve HTML formatting within spans
4. **IMMEDIATELY self-check**:
   - Count the Turkish characters in your translation
   - Are there ANY instances of: c (should be ç?), s (should be ş?), g (should be ğ?), o (should be ö?), u (should be ü?)
   - Do possessive constructions have suffixes? ("Veri Kaynağı Kimliği" NOT "Kimlik")
   - Does the sentence sound natural in Turkish?

### Step 3: Write Translation
- **Write** the Turkish text into corresponding `data-i18n-tr` spans

### Step 4: Final Verification (MANDATORY)

Run these checks BEFORE submitting:

**Turkish Character Scan:**
- [ ] Search entire file for known error patterns:
  - "Kaynagi" → should be "Kaynağı"
  - "Yapisi" → should be "Yapısı"
  - "Guncelleme" → should be "Güncelleme"
  - "Yaslari" → should be "Yaşları"
  - "Ucus" → should be "Uçuş"
  - "Fazi" → should be "Fazı"
  - "Zamani" → should be "Zamanı"
  - "Dogruluk" → should be "Doğruluk"
- [ ] No ASCII approximations found

**Completeness:**
- [ ] Every `data-i18n-en` has a matching `data-i18n-tr`
- [ ] No English text left in TR spans
- [ ] No empty `data-i18n-tr` spans

**Grammar:**
- [ ] All isim tamlaması have possessive suffixes
- [ ] Vowel harmony maintained in all suffixes
- [ ] Technical terms from glossary used consistently

## Translation Rules

### Critical Turkish Character Requirement

**NON-NEGOTIABLE RULE: Every Turkish character MUST be authentic.**

Before even starting translation, commit to memory:
- ç NOT c (Kaynağı NOT Kaynagi)
- ş NOT s (Yapısı NOT Yapisi)
- ğ NOT g (Doğruluk NOT Dogruluk)
- ı NOT i (Fazı NOT Fazi)
- ö NOT o (Ölçülen NOT Olculen)
- ü NOT u (Güncelleme NOT Guncelleme)
- İ NOT I (İz NOT Iz with capital)

Any ASCII approximation is a CRITICAL ERROR that MUST be caught before submission.

### Content Rules

- Technical terms from the "never translate" list stay in English
- First occurrence of abbreviations: add Turkish explanation in parentheses
  - Example: "A-SMGCS (Gelişmiş Yüzey Hareketi Rehberlik ve Kontrol Sistemi)"
- Mathematical formulas, hex values, and code are NOT translated
- Table headers must be translated
- Alt text and ARIA labels must be translated
- Navigation labels must match other pages EXACTLY

### Anti-Pattern Examples (Study Before Translating)

| NEVER DO THIS | ALWAYS DO THIS | Error Type |
|---------------|----------------|------------|
| Veri Kaynagi Kimlik | Veri Kaynağı Kimliği | Missing ğ and ı, missing suffix |
| UAP Yapisi | UAP Yapısı | Missing ı |
| Guncelleme Yaslari | Güncelleme Yaşları | Missing ü and ş |
| Ucus Fazi | Uçuş Fazı | Missing ç, ş, ı |
| Iz Zamani | İz Zamanı | Missing İ and ı |
| Kartezyen Konumu | Kartezyen Konum | Unnecessary suffix (sıfat tamlaması) |
| Mesaj tipi hedef raporunu icermektedir | Bu mesaj tipi, hedef raporlarını içerir | Unnatural word order, missing ç |

## Output

The same file, updated with complete, high-quality Turkish translations in all `data-i18n-tr` spans.

**Quality Promise:**
- Every Turkish character is authentic (no ASCII approximations)
- All isim tamlaması constructions have correct possessive suffixes
- Natural Turkish sentence structure (not word-by-word literal translation)
- Glossary terms used consistently
- All content translated (no empty spans)
