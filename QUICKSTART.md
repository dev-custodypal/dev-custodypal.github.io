# Quick Start Guide

## What is Jekyll?

Jekyll is a static site generator that transforms your plain text into beautiful static websites and blogs. It's perfect for blogs because:
- No database needed
- Fast and secure
- Free hosting on GitHub Pages
- Write posts in simple Markdown

## Getting Started

### Step 1: Install Jekyll

**On Mac:**
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Ruby
brew install ruby

# Install Jekyll
gem install jekyll bundler
```

**On Windows:**
1. Download and install Ruby+Devkit from https://rubyinstaller.org/
2. Open a command prompt and run:
```bash
gem install jekyll bundler
```

**On Linux:**
```bash
sudo apt-get install ruby-full build-essential
gem install jekyll bundler
```

### Step 2: Navigate to Your Blog

```bash
cd sailing-blog
```

### Step 3: Install Dependencies

```bash
bundle install
```

### Step 4: Run Your Site Locally

```bash
bundle exec jekyll serve
```

Open your browser and go to: `http://localhost:4000`

## How to Use Your Blog

### Adding a New Blog Post

1. Create a new file in `_posts/` folder
2. Name it: `YYYY-MM-DD-title.md` (e.g., `2024-02-13-my-adventure.md`)
3. Add front matter and content:

```markdown
---
layout: post
title: My Amazing Sailing Trip
date: 2024-02-13
image: https://example.com/image.jpg
excerpt: A brief description of your post
---

Write your blog post here using Markdown...

## You can use headers

- And bullet points
- Like this

**Bold text** and *italic text* work too!
```

### Adding an Update

1. Open `_data/updates.yml`
2. Add a new entry at the top:

```yaml
- title: New Update
  description: What's new with your journey
  time: Just now
  color: blue
  icon: |
    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
```

### Changing Images

Replace the placeholder images in:
- `index.md` - for hero and profile images
- Blog posts - for post featured images
- Put your own images in `assets/images/` folder

### Customizing

- **Site Title**: Edit `_config.yml`
- **Navigation**: Edit `_includes/header.html`
- **Footer**: Edit `_includes/footer.html`
- **Colors/Styling**: Modify the Tailwind classes in the HTML files

## Deploying Your Blog

### Option 1: GitHub Pages (Free!)

1. Create a GitHub account at https://github.com
2. Create a new repository named `yourusername.github.io`
3. Push your blog to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

4. Your site will be live at `https://yourusername.github.io`

### Option 2: Netlify (Also Free!)

1. Sign up at https://netlify.com
2. Drag and drop your `sailing-blog` folder
3. Your site is live in seconds!

## Tips

- Write posts in Markdown (it's easy to learn!)
- Test locally before deploying with `bundle exec jekyll serve`
- Keep your images optimized for web (not too large)
- Write regularly to keep readers engaged

## Need Help?

- Jekyll Documentation: https://jekyllrb.com/docs/
- Markdown Guide: https://www.markdownguide.org/
- Tailwind CSS: https://tailwindcss.com/docs

Happy blogging! ⛵
