# Volunteer FAQ

This is a lightweight, static FAQ section built in plain HTML, CSS, and JavaScript so it can be hosted directly on GitHub Pages and embedded into Carrd.

Live site:

```text
https://2413003.github.io/mkchess-faq-volunteer/
```

## Files

- `index.html` contains the FAQ markup and SEO-friendly FAQ schema.
- `styles.css` contains the Apple-inspired styling and responsive layout.
- `script.js` powers the accordion interaction and chevron rotation.
- `.nojekyll` keeps GitHub Pages from running Jekyll processing.

## Deploy To GitHub Pages

1. Create a GitHub repository and upload these files to the root.
2. In GitHub, open `Settings` -> `Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select your main branch and the `/ (root)` folder, then save.
5. Wait for GitHub Pages to publish your site.

Your published URL is:

```text
https://2413003.github.io/mkchess-faq-volunteer/
```

## Embed In Carrd

1. In Carrd, add an `Embed` element where you want the FAQ to appear.
2. Choose `Type: Code`.
3. Paste this iframe snippet:

```html
<iframe
  src="https://2413003.github.io/mkchess-faq-volunteer/"
  title="Volunteer FAQ"
  style="width:100%; min-height:760px; border:0; background:transparent;"
  loading="lazy"
></iframe>
```

4. Publish your Carrd site.

If the open answers feel cramped, increase `min-height` to `820px` or higher.

If you want the FAQ to sit flush with the page, keep the Carrd embed container at full width and avoid adding extra padding around the iframe.
