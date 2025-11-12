# Website Customization Guide

## Overview
This website includes:
- **Home page** (index.html) - Landing page with project overview
- **Team page** (team.html) - Team member profiles
- **Interactive Tour** (flythrough_template.html) - Scrollytelling map
- **Whitepaper** (whitepaper.html) - Technical documentation

## Quick Start

1. Open `index.html` in your web browser (or view on GitHub Pages)
2. Use the navigation menu to explore different pages

## Customizing Your Website

### 1. Update Team Information
Edit `team_data.json`:

```json
{
    "name": "Your Name",
    "major": "Your Major",
    "role": "Your Project Role",
    "github": "https://github.com/yourusername"
}
```

Leave `"github": ""` if you don't have one.

### 2. Customize Home Page Content
Edit `index.html`:
- Update project overview (search for "Project Overview")
- Modify statistics (search for "stat-card")
- Update key findings (search for "finding-card")

### 3. Update Flythrough Chapters
Edit `flythrough_config.js`:
- Change chapter titles and descriptions
- Update image filenames
- Modify map locations

Replace placeholder images with your actual photos.

### 4. Change Colors/Styling
Edit `styles.css`:
- JMU purple: `#450084`
- JMU gold: `#ffb400`

## File Structure

```
├── index.html               # Landing page ← START HERE
├── team.html                # Team profiles
├── team_data.json          # Team member data ← EDIT THIS
├── flythrough_template.html # Interactive map
├── flythrough_config.js    # Map content ← EDIT THIS
├── styles.css              # Website styling
└── whitepaper.html         # Technical docs
```

## Navigation
All pages have the same menu:
- **Home** → Landing page
- **Team** → Your team
- **Interactive Tour** → Scrollable map
- **Whitepaper** → Full documentation

## Tips

1. **Preview changes**: Just refresh your browser after editing
2. **No server needed**: Open HTML files directly
3. **GitHub Pages**: Will automatically use index.html as homepage
4. **Test on mobile**: Responsive design works on all screen sizes

---

For project setup instructions, see README.md
