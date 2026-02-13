# Sailing Adventures Blog - Jekyll Edition

This is a Jekyll-powered sailing blog with a responsive design using Tailwind CSS.

## Directory Structure

```
sailing-blog/
├── _config.yml           # Jekyll configuration
├── _layouts/             # Page templates
│   ├── default.html      # Base layout
│   └── post.html         # Blog post layout
├── _includes/            # Reusable components
│   ├── header.html       # Navigation bar
│   └── footer.html       # Footer
├── _posts/               # Blog posts (Markdown files)
├── _updates/             # Update entries
├── assets/
│   └── images/           # Images (includes freddy_penguin.png)
├── index.html            # Homepage
├── Gemfile               # Ruby dependencies
└── README.md             # This file
```

## Setup Instructions

### 1. Install Dependencies

First, make sure you have Ruby installed. Then install Jekyll and Bundler:

```bash
gem install jekyll bundler
```

### 2. Install Project Dependencies

Navigate to the project directory and run:

```bash
cd sailing-blog
bundle install
```

### 3. Run the Development Server

```bash
bundle exec jekyll serve
```

Your site will be available at `http://localhost:4000`

## Creating New Blog Posts

Blog posts go in the `_posts` directory and must follow this naming convention:

```
YYYY-MM-DD-title-of-post.md
```

### Post Front Matter Example

```yaml
---
layout: post
title: "Your Post Title"
date: 2024-02-10
image: "path/to/image.jpg"
excerpt: "A brief description of your post"
---

Your post content here in Markdown format...
```

## Creating New Updates

Updates go in the `_updates` directory:

```yaml
---
title: "Update Title"
time: "2 hours ago"
description: "Update description"
color: "blue"  # Options: blue, green, purple, orange, red, etc.
icon: '<svg>...</svg>'  # SVG icon code
---
```

## Customization

### Change Site Title and Description

Edit `_config.yml`:

```yaml
title: Your Blog Name
description: Your blog description
url: "http://yourdomain.com"
```

### Add Your Own Logo

Replace `assets/images/freddy_penguin.png` with your own logo image.

### Modify Colors and Styling

The site uses Tailwind CSS loaded from CDN. To customize colors, edit the Tailwind classes in the template files.

### Navigation Menu

Edit `_includes/header.html` to modify navigation links.

## Deployment

### GitHub Pages

1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Your site will be live at `https://username.github.io/repository-name`

### Other Hosting

Build the static site:

```bash
bundle exec jekyll build
```

Upload the contents of the `_site` directory to your web host.

## Features

- ✅ Responsive design with mobile hamburger menu
- ✅ Blog post system with Markdown support
- ✅ Updates section for quick announcements
- ✅ Beautiful hero image with profile overlay
- ✅ Story cards with images
- ✅ Tailwind CSS styling
- ✅ SEO-friendly structure

## License

This template is free to use for your own projects.
