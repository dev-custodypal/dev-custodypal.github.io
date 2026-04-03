# Gallery Directory

This directory contains all the photos and videos for your gallery page. Media is organized into chapters.

## Adding a New Photo

1. Create a new file in this directory (e.g., `sunset-malta.md`)
2. Add the following front matter:

```yaml
---
chapter: "Mediterranean Adventure"
image: "https://example.com/path/to/image.jpg"
caption: "Beautiful sunset in Malta"
date: 2024-06-15
---
```

3. Save the file - that's it!

## Adding a New Video

1. Create a new file in this directory (e.g., `sailing-video.md`)
2. Add the following front matter:

```yaml
---
chapter: "Mediterranean Adventure"
type: "video"
video_url: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
thumbnail: "https://example.com/path/to/thumbnail.jpg"
caption: "Sailing through the Greek islands"
date: 2024-06-15
---
```

3. Save the file!

### Getting YouTube Embed URLs

1. Go to your YouTube video
2. Click "Share" → "Embed"
3. Copy the URL from the `src` attribute
4. Example: `https://www.youtube.com/embed/dQw4w9WgXcQ`

### Supported Video Platforms

- **YouTube**: `https://www.youtube.com/embed/VIDEO_ID`
- **Vimeo**: `https://player.vimeo.com/video/VIDEO_ID`
- **Other**: Any embeddable video URL

## Fields Explained

### For Photos:
- **chapter** - The chapter/section name
- **image** - Full URL to the image
- **caption** - Optional description
- **date** - Date taken (YYYY-MM-DD format)

### For Videos:
- **chapter** - The chapter/section name
- **type** - Must be `"video"`
- **video_url** - Embed URL for the video
- **thumbnail** - Image to show as preview (before clicking)
- **caption** - Optional description
- **date** - Date taken (YYYY-MM-DD format)

## Organizing by Chapters

Photos are automatically grouped by their `chapter` field. All photos with the same chapter name will appear together in the gallery.

### Example Chapters

```yaml
chapter: "Mediterranean Adventure"
chapter: "Caribbean Dreams"
chapter: "Atlantic Crossing"
chapter: "Greek Islands"
chapter: "Northern Europe"
chapter: "Learning to Sail"
```

## Using Local Images

If you want to use your own images instead of external URLs:

1. Add your images to `assets/images/gallery/`
2. Reference them in the front matter:

```yaml
image: "/assets/images/gallery/my-photo.jpg"
```

## Complete Example

**Photo:**
```yaml
---
chapter: "Caribbean Dreams"
image: "/assets/images/gallery/turquoise-waters.jpg"
caption: "Crystal clear waters off the coast of Barbados"
date: 2024-03-15
---
```

**Video:**
```yaml
---
chapter: "Caribbean Dreams"
type: "video"
video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
thumbnail: "/assets/images/gallery/snorkeling-thumb.jpg"
caption: "Snorkeling with sea turtles in Barbados"
date: 2024-03-16
---
```

## Tips

- **Chapter Names**: Use consistent capitalization (e.g., always "Mediterranean Adventure", not "mediterranean adventure")
- **Image Quality**: Use high-quality images (at least 1200px wide recommended)
- **File Naming**: Use descriptive filenames like `sunset-santorini.md`, `dolphins-sighting.md`
- **Sorting**: Photos within each chapter are sorted by date (oldest to newest)
- **Captions**: Keep captions concise but descriptive

## Image Sources

You can use images from:
- Your own photos uploaded to `assets/images/gallery/`
- External image hosting (Imgur, Flickr, etc.)
- Unsplash, Pexels (for placeholders during development)

## Gallery Features

- **Chapters**: Photos and videos are organized into collapsible sections
- **Mixed Media**: Combine photos and videos in the same chapter
- **Thumbnails**: Grid layout with hover effects
- **Video Indicator**: Play button overlay on video thumbnails
- **Lightbox**: Click any photo to view full-screen, or any video to watch in an embedded player
- **Responsive**: Works on mobile, tablet, and desktop
- **Captions**: Show below thumbnails and in lightbox view
- **Auto-stop**: Videos stop playing when you close the lightbox
