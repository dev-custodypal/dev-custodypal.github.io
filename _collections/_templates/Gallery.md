{% assign chapter = "Caribbean Dreams" %}
{% assign caption = "Snorkeling with sea turtles in the Caribbean" %}


{% assign slug = chapter | slugify %}
---
chapter: "{{ chapter }}"
image: "/assets/images/gallery/{{ slug }}.jpg"
type: "video"
video_url: "/assets/images/gallery/{{ slug }}"
thumbnail: "/assets/images/gallery/{{ slug }}"
caption: "{{ caption }}"
date: {{date}}
---