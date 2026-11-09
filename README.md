# Meblopan

Responsive static furniture website in Macedonian and English. No build step or package installation required.

Run locally from this directory:

```sh
python3 -m http.server 3000 --bind 0.0.0.0
```

Deploy `index.html`, `style.css`, `script.js`, and `assets/` to any static web host. All photography is stored locally, with no external image requests. The optional Manrope font loads from Google Fonts with a system font fallback. Photos are labeled as design inspiration; replace them with Meblopan project photography when available. See [photo sources](assets/PHOTO-SOURCES.md).

Language choice is remembered in local storage. Contact links use phone and email applications; no backend or credentials are needed.

## Free hosting with GitHub Pages

In the GitHub repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose **main** and **/ (root)**, then **Save**.

The expected site address is https://ilievskif.github.io/meblopan/ once GitHub completes the deployment. Later pushes to `main` automatically update the site.
