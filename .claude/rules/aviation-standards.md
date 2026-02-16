---
paths:
  - "**/*"
---

# Aviation & CAT011 Standards

## ASTERIX Protocol Context

- ASTERIX = All Purpose Structured EUROCONTROL Surveillance Information Exchange
- CAT011 = Category 011, Part 8 of the ASTERIX specification
- Current edition: 1.3 (11 May 2020)
- Purpose: Transmission of A-SMGCS surveillance and flight plan data

## A-SMGCS System

A-SMGCS fuses data from multiple sensor types:
- **SMR** (Surface Movement Radar) — outputs CAT010
- **MLAT** (Multilateration) — outputs CAT010/CAT020
- **ADS-B** (Automatic Dependent Surveillance - Broadcast) — outputs CAT021
- **SSR/PSR** (Secondary/Primary Surveillance Radar) — outputs CAT001/CAT048

CAT011 is the **fused output** — the final, combined, tracked result.

## Data Item Numbering

- Format: I011/XXX where XXX is a 3-digit number
- Example: I011/041 = Position in WGS-84 Coordinates
- Total: ~28 data items + SP (Special Purpose) + RE (Reserved Expansion)

## Message Types (I011/000)

| Type | Description |
|------|-------------|
| 1 | Target Report + Flight Plan Data + Alerts |
| 2 | Manual Flight Plan Attachment |
| 3 | Manual Flight Plan Detachment |
| 4 | Flight Plan Data Insertion |
| 5 | Flight Plan Data Suppression |
| 6 | Flight Plan Data Modification |
| 7 | Holdbar Status |

## UAP Block Order

```
Block 1: I011/010, I011/000, I011/015, I011/140, I011/041, I011/042, I011/202
Block 2: I011/210, I011/060, I011/245, I011/380, I011/161, I011/170, I011/290
Block 3: I011/430, I011/090, I011/093, I011/092, I011/215, I011/270, I011/390
Block 4: I011/300, I011/310, I011/500, I011/600, I011/605, I011/610, I011/SP
Block 5: I011/RE
```

## Technical Constants

- WGS-84 position LSB: 180/2^31 degrees
- Cartesian position LSB: 1 meter
- Time LSB: 1/128 second
- Flight level LSB: 1/4 FL
- Velocity LSB: 1/4 m/s (0.25 m/s)
- Acceleration LSB: 1/4 m/s^2 (0.25 m/s^2)

## Terms That Must NOT Be Translated

ASTERIX, CAT011, A-SMGCS, WGS-84, Mode-S, Mode-3/A, ADS-B, MLAT, SMR,
SSR, PSR, ICAO, SAC, SIC, UAP, FSPEC, FX, MSB, LSB, UTC, QNH, FL,
callsign, track, transponder, squawk, holdbar
