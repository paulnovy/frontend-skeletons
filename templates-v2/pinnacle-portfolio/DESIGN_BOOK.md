# Pinnacle Portfolio Design Book

Pinnacle Portfolio is a premium creative portfolio skeleton for independent designers, creative directors, studios, and senior makers who need to present a polished body of work with credible strategic depth.

## Visual Direction

- **Mood:** decisive, editorial, crisp, premium, and energetic.
- **Typography:** Manrope anchors expressive headings and Inter supports navigation, labels, forms, and compact UI.
- **Color system:** Cloud `#F6F8FC`, ink `#19212B`, indigo `#4F46E5`, cyan `#06B6D4`, lime `#A3E635`, and coral `#FB7185`.
- **Surface language:** soft cloud panels, restrained borders, dark ink contrast moments, and gradient project thumbnails that can be replaced with production imagery.

## Page Structure

1. Sticky top navigation with desktop links, mobile hamburger drawer, and clear CTA.
2. Hero with creator name, creative positioning, concise biography, profile image area, and status panel.
3. Filterable project gallery with hover and focus overlays.
4. Expandable case study detail covering problem, approach, result, and metrics.
5. Services grid with compact icon labels and client-ready descriptions.
6. Testimonial carousel with large quotes and accessible controls.
7. Skills and tools section with proficiency bars.
8. Contact section with contact channels and a form.
9. Footer with social links and visible credit.

## Interaction Notes

- The project filters are driven by `data-filter` and `data-category` attributes.
- Testimonial navigation uses previous and next controls with transform-based sliding.
- The mobile drawer supports Escape close, backdrop close, link close, and focus return.
- The contact form gives a local confirmation message and is ready to connect to an inbox, CRM, or form endpoint.

## Accessibility Notes

- Semantic landmarks are present: header, nav, main, section, aside, form, and footer.
- Focus-visible states are high contrast and use cyan.
- Reduced-motion preferences are respected.
- Interactive cards are keyboard focusable.
- The drawer maintains `aria-expanded` and `aria-hidden` state.

## Customization Guidance

- Replace the CSS-built profile composition with a real portrait while preserving the `portrait-panel` sizing.
- Replace gradient project thumbnails with real media when available.
- Update service descriptions to match the creator's offers.
- Connect the form submit handler to a production service.
- Keep the footer credit visible for template attribution.
