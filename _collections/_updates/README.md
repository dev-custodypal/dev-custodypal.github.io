# Updates Directory

This directory contains all the quick updates for your blog. Each update is a separate markdown file.

## Creating a New Update

1. Create a new file in this directory (e.g., `exciting-news.md`)
2. Add the following front matter:

```yaml
---
title: "Your Update Title"
date: 2026-02-16
description: "A brief description of what's happening"
color: "teal"
icon: "weather"
---
```

3. Save the file - that's it! No content below the front matter is needed.

## Available Colors

- `teal` - Primary color (teal/cyan)
- `emerald` - Green
- `violet` - Purple
- `amber` - Orange/yellow
- `rose` - Pink
- `blue` - Blue
- `indigo` - Deep blue
- `red` - Red
- `gray` - Gray

## Available Icons

| Icon Name | Aliases | Use For |
|-----------|---------|---------|
| `weather` | `lightning` | Weather alerts, storm warnings |
| `location` | `map`, `pin` | New locations, ports, destinations |
| `camera` | `photo`, `image` | Photo galleries, new pictures |
| `clock` | `time` | Time-related updates, schedules |
| `anchor` | `port` | Port arrivals, anchoring |
| `sail` | `boat`, `ship` | Sailing updates, departures |
| `sun` | `sunny` | Good weather, sunny days |
| `heart` | `favorite` | Favorite places, special moments |
| `star` | - | Highlights, special events |
| `wrench` | `tool`, `maintenance` | Boat maintenance, repairs |
| `check` | `complete`, `done` | Completed tasks, achievements |
| `info` | `information` | General information |
| `alert` | `warning` | Important warnings, alerts |

## Examples

### Weather Update
```yaml
---
title: "Perfect Sailing Conditions"
date: 2026-02-16
description: "Light winds and clear skies forecast for the weekend"
color: "teal"
icon: "weather"
---
```

### New Location
```yaml
---
title: "Arrived in Santorini"
date: 2026-02-15
description: "Just anchored off the beautiful island of Santorini!"
color: "emerald"
icon: "location"
---
```

### Maintenance Complete
```yaml
---
title: "Engine Service Done"
date: 2026-02-14
description: "Completed full engine service and ready to go"
color: "amber"
icon: "wrench"
---
```

### Photo Update
```yaml
---
title: "New Photos Added"
date: 2026-02-13
description: "Added 50 stunning sunset photos from our latest voyage"
color: "violet"
icon: "camera"
---
```

## Tips

- **Date Format:** Always use `YYYY-MM-DD` format
- **Keep It Short:** Updates should be brief - just title and description
- **Use Descriptive Names:** Name your files descriptively (e.g., `arrived-malta.md`, `storm-warning.md`)
- **Order:** Updates are automatically sorted by date (newest first)
- **Time Ago:** The date automatically displays as "today", "2 days ago", etc.

## File Naming

Good file names:
- `weather-alert.md`
- `arrived-sicily.md`
- `maintenance-complete.md`
- `new-photos.md`

Avoid:
- `update1.md` (not descriptive)
- `2026-02-16.md` (date already in front matter)
- `Update!.md` (special characters)
