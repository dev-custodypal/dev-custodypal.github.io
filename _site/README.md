# Freddy Friends Blog - Jekyll Edition

This is a Jekyll-powered sailing blog with a responsive design using Tailwind CSS.

## Directory Structure

```
freddy-friends-blog/
├── _config.yml           # Jekyll configuration
├── _layouts/             # Page templates
│   ├── default.html      # Base layout
│   └── post.html         # Blog post layout
├── _includes/            # Reusable components
│   ├── header.html       # Navigation bar
│   └── footer.html       # Footer
├── _collections/         # Collections directory
│   ├── _stories/         # Blog stories (Markdown files)
│   └── _updates/         # Update entries
├── _pages/               # Site pages
│   ├── about.html        # About us page
│   ├── location.md       # Current location page
│   ├── stories.html      # Stories archive page
│   └── updates.html      # Updates archive page
├── assets/
│   ├── images/           # Images (includes freddy_penguin.png)
│   └── fonts/            # Custom fonts (RileyFont.ttf)
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
cd freddy-friends-blog
bundle install
```

### 3. Run the Development Server

```bash
bundle exec jekyll serve
```

Your site will be available at `http://localhost:4000`

## Creating New Stories

Blog stories go in the `_collections/_stories` directory and must follow this naming convention:

```
YYYY-MM-DD-title-of-post.md
```

### Story Front Matter Example

```yaml
---
layout: post
title: "Your Story Title"
date: 2024-02-10
image: "path/to/image.jpg"
excerpt: "A brief description of your story"
---

Your story content here in Markdown format...
```

## Creating New Updates

Updates go in the `_collections/_updates` directory:

```yaml
---
title: "Update Title"
time: "2 hours ago"
description: "Update description"
color: "teal"  # Options: teal, emerald, violet, amber, red, etc.
icon: '<svg>...</svg>'  # SVG icon code
---
```

## Creating New Pages

To add a new standalone page (like Contact, Gallery, etc.):

1. Create a new file in the `_pages/` directory
2. Add front matter with layout and permalink:

```yaml
---
layout: default
title: "Your Page Title"
permalink: /your-page-url/
---

Your page content here...
```

The page will automatically be available at the permalink you specify.

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
- ✅ Custom favicon (Freddy the penguin)
- ✅ Dedicated pages for Stories, Updates, Location, and About Us
- ✅ Fully functional navigation menu with page links

## Pages

The blog includes the following pages:

- **Home** (`/`) - Landing page with featured stories and updates
- **Stories** (`/stories/`) - Archive of all blog posts
- **Updates** (`/updates/`) - Latest news and quick updates
- **Location** (`/location/`) - Current sailing location and recent ports
- **About Us** (`/about/`) - Information about the sailors and the boat

## License

This template is free to use for your own projects.
