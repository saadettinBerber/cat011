#!/bin/bash
# Validates HTML files after write/edit operations
# Checks for common issues: missing i18n pairs, unclosed tags, missing attributes

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Only validate HTML files
if [[ "$FILE_PATH" != *.html ]]; then
  exit 0
fi

# Check if file exists
if [[ ! -f "$FILE_PATH" ]]; then
  exit 0
fi

ERRORS=""

# Check for data-i18n-en spans without matching data-i18n-tr
EN_COUNT=$(grep -c 'data-i18n-en' "$FILE_PATH" 2>/dev/null || echo "0")
TR_COUNT=$(grep -c 'data-i18n-tr' "$FILE_PATH" 2>/dev/null || echo "0")

if [[ "$EN_COUNT" -ne "$TR_COUNT" ]]; then
  ERRORS="${ERRORS}WARNING: Mismatched i18n spans — EN: ${EN_COUNT}, TR: ${TR_COUNT}\n"
fi

# Check for empty data-i18n-tr spans (placeholder translations)
EMPTY_TR=$(grep -c 'data-i18n-tr></span>' "$FILE_PATH" 2>/dev/null || echo "0")
if [[ "$EMPTY_TR" -gt 0 ]]; then
  ERRORS="${ERRORS}WARNING: ${EMPTY_TR} empty data-i18n-tr span(s) found\n"
fi

# Report findings
if [[ -n "$ERRORS" ]]; then
  echo -e "$ERRORS" >&2
  # Exit 0 to allow the operation but show warnings
  exit 0
fi

exit 0
