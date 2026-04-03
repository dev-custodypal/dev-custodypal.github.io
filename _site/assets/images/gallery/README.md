# Gallery Images Organization Guide

This folder (`assets/images/gallery/`) is where you should store all your actual photo files.

## Recommended Folder Structure

### Option 1: Organize by Chapter (Recommended)
```
assets/images/gallery/
├── mediterranean/
│   ├── sunset-santorini.jpg
│   ├── amalfi-coast.jpg
│   └── greek-islands.jpg
├── caribbean/
│   ├── turquoise-waters.jpg
│   ├── snorkeling.jpg
│   └── beach-barbados.jpg
├── atlantic/
│   ├── day-10-crossing.jpg
│   └── storm-clouds.jpg
└── learning-to-sail/
    ├── first-lesson.jpg
    └── tied-knots.jpg
```

### Option 2: Organize by Date
```
assets/images/gallery/
├── 2024-02/
│   ├── atlantic-crossing-1.jpg
│   └── atlantic-crossing-2.jpg
├── 2024-03/
│   ├── caribbean-1.jpg
│   └── caribbean-2.jpg
└── 2024-06/
    ├── mediterranean-1.jpg
    └── mediterranean-2.jpg
```

### Option 3: Keep Everything Flat (Simple but harder to manage)
```
assets/images/gallery/
├── 2024-02-10-atlantic-crossing.jpg
├── 2024-03-15-caribbean-beach.jpg
├── 2024-06-18-santorini-sunset.jpg
└── 2024-06-20-greek-islands.jpg
```

## Recommended Approach

**Use Option 1 (organize by chapter)** - it's the easiest to manage as your gallery grows!

## How to Reference Photos in Gallery Files

Once your photos are in this folder, reference them in your gallery markdown files:

### Example: Photo in a Subfolder
```yaml
---
chapter: "Mediterranean Adventure"
image: "/assets/images/gallery/mediterranean/sunset-santorini.jpg"
caption: "Sunset in Santorini"
date: 2024-06-18
---
```

### Example: Photo in Root Gallery Folder
```yaml
---
chapter: "Caribbean Dreams"
image: "/assets/images/gallery/caribbean-beach.jpg"
caption: "Paradise beach in Barbados"
date: 2024-03-15
---
```

## Image Best Practices

### File Naming
- Use lowercase letters
- Use hyphens instead of spaces
- Be descriptive: `sunset-santorini.jpg` not `IMG_1234.jpg`
- Include location or subject: `snorkeling-sea-turtles.jpg`

### Image Sizes
- **Recommended width**: 1200-2000px wide
- **Maximum file size**: Keep under 2MB per image
- **Format**: Use .jpg for photos, .png for graphics with transparency

### Optimization Tips
1. Resize large images before uploading (don't use 5000px images!)
2. Use online tools to compress:
   - [TinyPNG](https://tinypng.com/) - Great compression
   - [Squoosh](https://squoosh.app/) - More control
   - [ImageOptim](https://imageoptim.com/) (Mac only)
3. Target: High quality but under 500KB per image

## Adding Your Photos

### Step 1: Add Image Files
Put your photos in this folder (or subfolders you create):
```
assets/images/gallery/mediterranean/sunset-santorini.jpg
```

### Step 2: Create Gallery Entry
Create a markdown file in `_collections/_gallery/`:
```yaml
---
chapter: "Mediterranean Adventure"
image: "/assets/images/gallery/mediterranean/sunset-santorini.jpg"
caption: "Beautiful sunset in Santorini"
date: 2024-06-18
---
```

### Step 3: Build and View
Run `bundle exec jekyll serve` and visit `/gallery/`

## Video Thumbnails

If you're adding videos, you can store their thumbnail images here too:

```
assets/images/gallery/thumbnails/
├── sailing-video-thumb.jpg
├── snorkeling-video-thumb.jpg
└── storm-video-thumb.jpg
```

Then reference in your video gallery entry:
```yaml
---
chapter: "Mediterranean Adventure"
type: "video"
video_url: "https://www.youtube.com/embed/VIDEO_ID"
thumbnail: "/assets/images/gallery/thumbnails/sailing-video-thumb.jpg"
caption: "Sailing through the Greek islands"
date: 2024-06-20
---
```

## Quick Reference

**Path format in gallery markdown files:**
```yaml
image: "/assets/images/gallery/your-photo.jpg"
image: "/assets/images/gallery/mediterranean/your-photo.jpg"
image: "/assets/images/gallery/2024-06/your-photo.jpg"
```

**Always start with `/assets/images/gallery/`** - this is the absolute path from your site root.

## Tips for Success

1. **Create folders before adding photos** - decide on your organization scheme first
2. **Be consistent** - stick to one naming convention
3. **Backup originals** - keep high-res originals elsewhere, upload optimized versions here
4. **Test locally** - always run `bundle exec jekyll serve` to verify images load correctly
5. **Use descriptive names** - you'll thank yourself later when you have 100+ photos

## Example Workflow

1. Take photos during your sailing trip
2. Download to computer
3. Resize/optimize (make 1200-1600px wide, compress to <500KB)
4. Name descriptively: `sunset-santorini.jpg`, `dolphins-sighting.jpg`
5. Put in appropriate subfolder: `assets/images/gallery/mediterranean/`
6. Create gallery entry in `_collections/_gallery/santorini-sunset.md`
7. Build site and enjoy!
