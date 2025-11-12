# TODO: Enhance Colors and Light/Dark Mode for Shiny, Enticing Design

## Current Analysis
- Colors are defined in HSL format in `frontend/src/index.css`.
- Light mode uses soft, earthy tones (greens, creams).
- Dark mode swaps backgrounds and foregrounds but keeps similar hues.
- Goal: Make light mode vibrant and inviting, dark mode rich and dramatic with better contrast and accents.

## Planned Changes
1. **Light Mode Enhancements:**
   - Increase saturation and lightness for primary/secondary to make them more vibrant (e.g., brighter greens).
   - Adjust muted and accent colors for better readability and appeal.
   - Ensure gold and custom colors pop against the light background.

2. **Dark Mode Enhancements:**
   - Deepen backgrounds and increase contrast for a luxurious feel.
   - Boost accent colors (e.g., gold) to shine in dark settings.
   - Fine-tune foreground and muted colors for better visibility and elegance.

3. **General Improvements:**
   - Add subtle gradients or ensure colors complement the fonts (Franklin Gothic for headings, Playfair for body).
   - Test for accessibility (contrast ratios).

## Steps to Implement
- [x] Review and update HSL values in :root (light mode).
- [x] Review and update HSL values in .dark (dark mode).
- [x] Add footer-specific color classes in tailwind.config.ts for better organization.
- [x] Update Footer.tsx to use the new footer color classes for consistent theming.
- [x] Create colors.ts file with hex code conversions for easier use.
- [ ] Test the changes in the browser for visual appeal.
- [ ] Ensure no breaking changes to existing components.

## Followup
- Run the app and check light/dark mode toggle.
- Gather user feedback on the new colors.
