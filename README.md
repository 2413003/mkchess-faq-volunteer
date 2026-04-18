# Volunteer FAQ

This is a lightweight, static FAQ section built in plain HTML, CSS, and JavaScript so it can be hosted directly on GitHub Pages and embedded into Carrd.

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

Your live URL will usually look like:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

## Embed In Carrd

Use a Carrd `Embed` element with an iframe like this:

```html
<iframe
  src="https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/"
  title="Volunteer FAQ"
  style="width:100%; min-height:760px; border:0; background:transparent;"
  loading="lazy"
></iframe>
```

If you want more room for the open answer panel, increase the iframe height slightly inside Carrd.
