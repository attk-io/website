#!/usr/bin/env bash
# PreToolUse hook: block Write/Edit calls that introduce <style> tags into .astro files.
# Rationale: this project uses Tailwind utility classes exclusively. Styling needs
# that don't fit utilities should be discussed before being introduced as CSS.

set -euo pipefail

input=$(cat)
tool=$(printf '%s' "$input" | jq -r '.tool_name // ""')
path=$(printf '%s' "$input" | jq -r '.tool_input.file_path // ""')

case "$path" in
  *.astro) ;;
  *) exit 0 ;;
esac

case "$tool" in
  Write) payload=$(printf '%s' "$input" | jq -r '.tool_input.content // ""') ;;
  Edit) payload=$(printf '%s' "$input" | jq -r '.tool_input.new_string // ""') ;;
  *) exit 0 ;;
esac

if printf '%s' "$payload" | grep -q '<style'; then
  echo "BLOCKED: <style> tags are not allowed in .astro files in this project." >&2
  echo "Use Tailwind utility classes instead — including arbitrary variants like" >&2
  echo "  has-[>a]:, [&:first-of-type]:, [&_selector]:, etc." >&2
  echo "If a styling need truly cannot be expressed as utilities, raise it with the user before adding CSS." >&2
  exit 2
fi

exit 0
