# Website Customization Guide

## Overview
This website includes:
- **Home page** (index.html) - Landing page with project overview
- **Team page** (team.html) - Team member profiles with photos/initials
- **Interactive Tour** (flythrough_template.html) - Scrollytelling map flythrough
- **Whitepaper** (whitepaper.html) - Technical documentation

## Quick Start

1. Open `index.html` in your web browser (or view on GitHub Pages)
2. Use the navigation menu to explore different pages
3. Customize the three main files (see below)

## Three Files to Customize

### 1. Team Information (`team_data.json`)
Add your team members:

```json
{
    "team": [
        {
            "name": "Your Name",
            "major": "Your Major",
            "role": "Your Project Role",
            "github": "https://github.com/yourusername",
            "headshot": ""
        }
    ]
}
```

**Tips:**
- Leave `"github": ""` if you don't have one
- Add headshot image path like `"images/yourname.jpg"` or leave blank for initials
- Initials are automatically generated from your name

### 2. Home Page Content (`index.html`)
Replace the lorem ipsum text:
- Find the "Project Overview" section
- Replace the three paragraphs with your actual project description
- Keep it concise and engaging

### 3. Interactive Flythrough (`flythrough_config.js`)
This is your main customization task. The file has 10 pre-structured chapters:

**Map Style** (lines ~10-20):
- Uncomment your preferred map style
- Default is Positron Light (clean and minimal)

**Color Scale** (line ~28):
- Choose `'RdYlGn'` (Red→Yellow→Green) or `'Portland'` (Blue→White→Red)

**Chapters** (lines ~35-250):
Each chapter needs:
- `title`: Your location name
- `description`: Your analysis (supports HTML formatting!)
- `image`: Path to image in `./images/` folder
- `camera`: Where the map flies (latitude, longitude, zoom)
- `location`: Data to display (only for individual locations, not overviews)
- `showData`: What markers to show on map

**Example Individual Location:**
```javascript
{
    id: 'dhall',
    title: 'D-Hall: <em>The Social Hub</em>',
    description: 'Students report <strong>mixed emotions</strong> about D-Hall.',
    image: './images/dhall.jpg',
    duration: 2000,
    
    camera: {
        latitude: 38.4335,    // From your CSV
        longitude: -78.8715,
        zoom: 17
    },
    
    location: {
        name: 'D-Hall',
        latitude: 38.4335,    // Same as camera
        longitude: -78.8715,
        postCount: 156,       // From your CSV
        robertaScore: -0.12,  // From your CSV
        isJMU: true
    },
    
    showData: 'individual'
}
```

**Example Overview (No Marker):**
```javascript
{
    id: 'intro',
    title: 'Campus Overview',
    description: 'Exploring sentiment across campus...',
    image: './images/quad.jpg',
    duration: 3000,
    
    camera: {
        latitude: 38.4365,
        longitude: -78.8705,
        zoom: 14
    },
    
    showData: 'all_locations'  // No location object = no marker
}
```

## Important Concepts

### showData Options
- `'all_locations'` - Show all location markers
- `'jmu_locations'` - Show only JMU markers (where `isJMU: true`)
- `'non_jmu_locations'` - Show only UNC markers (where `isJMU: false`)
- `'individual'` - Highlight only the current chapter's location

### Camera vs Location
- **camera**: Where the map flies to (all chapters need this)
- **location**: Data point to display (only include for chapters showing specific locations)
- For overviews/intros, use camera only
- For individual locations, use both with matching coordinates

### Zoom Levels
- `6-8`: Regional view (multiple cities)
- `12-14`: Campus overview
- `16-18`: Individual building close-up

### Where to Find Your Data
**From your CSV file:**
- `latitude` and `longitude` columns → use for `camera` and `location` coordinates

**From your whitepaper visualizations:**
- Check your maps and charts for each location's data
- Find `postCount` (number of Reddit posts mentioning this location)
- Find `robertaScore` (sentiment score, typically between -1 and 1)
- Enter these values in the `location` object for each chapter

## File Structure

```
├── index.html                  # Landing page (edit lorem ipsum)
├── team.html                   # Team profiles (auto-loads from JSON)
├── team_data.json             # Team member data ← EDIT THIS
├── flythrough_template.html    # Interactive map (don't edit)
├── flythrough_config.js       # Map content ← EDIT THIS
├── styles.css                  # Shared styling (matches all pages)
├── whitepaper.html            # Technical docs
└── images/                     # Your photos go here
    ├── quad.jpg
    ├── dhall.jpg
    └── ...
```

## Adding Images

1. **Add photos** to the `images/` folder
2. **Reference them** in config: `image: './images/yourphoto.jpg'`
3. **Supported formats**: JPG, PNG, GIF
4. **Recommended size**: Compress to <500KB each

## Testing Your Changes

### Local Preview:
1. Make edits to JSON/JS/HTML files
2. Refresh browser to see changes
3. Use F12 Developer Tools to check for errors

### Common Issues:
- **Map doesn't fly**: Check for missing commas in config
- **Markers don't show**: Ensure `postCount` is a number (not null) for data chapters
- **Images broken**: Verify file paths and that images exist in `images/` folder
- **Page layout broken**: Check that all HTML tags are properly closed

## Deployment to GitHub Pages

1. Create a GitHub repository
2. Upload all files (keep folder structure intact)
3. Go to Settings → Pages
4. Select "Deploy from a branch" → main
5. Your site will be at `username.github.io/repository-name`

**Important**: GitHub Pages automatically uses `index.html` as the homepage.

## Quick Checklist

Before presenting your project, make sure you've:

- [ ] Updated `team_data.json` with all team members
- [ ] Replaced lorem ipsum in `index.html` with your project overview
- [ ] Filled in all 10 chapters in `flythrough_config.js` with real data
- [ ] Added actual images to `images/` folder
- [ ] Tested the flythrough by scrolling through all chapters
- [ ] Checked for JavaScript errors in browser console (F12)
- [ ] Previewed on mobile/different screen sizes
- [ ] Deployed to GitHub Pages

## Need More Help?

See `FLYTHROUGH_INSTRUCTIONS.md` for detailed flythrough customization guide.

---

**Good luck with your project! 🎓**