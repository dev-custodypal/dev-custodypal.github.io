# Pages Directory

This directory contains all the standalone pages for your site.

## Current Pages

- **about.html** - About Us page (`/about/`)
- **location.md** - Current Location page (`/location/`)
- **stories.html** - Stories archive page (`/stories/`)
- **updates.html** - Updates archive page (`/updates/`)

## Adding a New Page

To create a new page:

1. Create a new `.html` or `.md` file in this directory
2. Add front matter at the top:

```yaml
---
layout: default
title: "Your Page Title"
permalink: /your-url/
---

Your content here...
```

3. The page will automatically be available at the permalink you specified

## Important Notes

- Each page must have a unique `permalink`
- Pages use the `default` layout by default (can be changed in front matter)
- For Markdown pages (`.md`), use Markdown syntax for content
- For HTML pages (`.html`), use HTML directly
