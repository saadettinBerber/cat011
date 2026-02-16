---
paths:
  - "src/**/*.html"
---

# Translation Rules (EN ↔ TR)

## General Principles

- Translations must be natural Turkish, NOT word-by-word literal translations
- Maintain the same technical precision as the English version
- Keep the same sentence structure complexity — don't oversimplify or overcomplicate
- Preserve all formatting (bold, italic, code blocks) in translations

## Terminology Glossary

| English | Turkish | Notes |
|---------|---------|-------|
| Surveillance | Gözetim / Gözetleme | Context-dependent |
| Target | Hedef | In radar context |
| Track | İz / Track | "Track" is acceptable in technical context |
| Flight Level | Uçuş Seviyesi | Can also keep "FL" abbreviation |
| Altitude | İrtifa | Standard aviation term |
| Latitude | Enlem | |
| Longitude | Boylam | |
| Cartesian | Kartezyen | |
| Velocity | Hız | |
| Acceleration | İvme | |
| Encoding | Kodlama | |
| Bit / Byte | Bit / Bayt | Keep original forms |
| Resolution | Çözünürlük | |
| Precision | Hassasiyet | |
| Data Item | Veri Öğesi | |
| Field | Alan | In data structure context |
| Octal | Sekizlik (Oktal) | |
| Identifier | Tanımlayıcı | |
| Timestamp | Zaman Damgası | |
| Alert | Alarm / Uyarı | Context-dependent |
| Surface Movement | Yüzey Hareketi | |
| Runway | Pist | |
| Taxiway | Taksi Yolu | |
| Apron | Apron | Keep original |
| Stand | Park Pozisyonu | |
| Pushback | Pushback / Geri İtiş | Both acceptable |
| Wake Turbulence | Kuyruk Türbülansı | |
| Fusion | Füzyon / Birleştirme | Both acceptable |
| Sensor | Sensör | Keep original |
| Transponder | Transponder | Keep original |

## Rules for Technical Terms

1. Terms in the "Must NOT translate" list (see aviation-standards.md) stay in English
2. On first use of an abbreviation, provide Turkish explanation in parentheses:
   - "A-SMGCS (Gelişmiş Yüzey Hareketi Rehberlik ve Kontrol Sistemi)"
3. After first use, just use the abbreviation
4. Mathematical formulas and hex values are never translated
5. Unit names follow Turkish convention: "metre", "saniye", "derece"

## Quality Checklist

- [ ] All visible text has TR version
- [ ] No untranslated sentences remain
- [ ] Technical terms are consistent with glossary
- [ ] Abbreviations explained on first use
- [ ] Natural-sounding Turkish (read aloud test)
- [ ] Same information density as English version
- [ ] No grammatical errors
- [ ] Proper Turkish characters used (ç, ş, ğ, ı, ö, ü, İ)
