# Free Flythrough Instructions (No API Tokens Required!)

## Overview
This version uses **OpenStreetMap** and **Leaflet** instead of Mapbox, so you don't need any API tokens or accounts. Everything is completely free!

## Quick Start

### Files You Need:
1. `flythrough_config_free.js` - Your story configuration 
2. `flythrough_template_free.html` - The interactive map template
3. Your processed sentiment data (as GeoJSON)
4. Images for your story (optional)

### Immediate Setup:
1. **Open** `flythrough_template_free.html` in any web browser
2. **It works instantly** - no API keys needed!
3. **Customize** the `flythrough_config_free.js` file for your data

## Key Differences from Mapbox Version

### ✅ Advantages:
- **No API tokens required**
- **No usage limits** 
- **No credit card needed**
- **Works offline** (once loaded)
- **Multiple free map styles** available

### ⚠️ Limitations:
- No 3D terrain (flat maps only)
- Fewer satellite imagery options
- No custom vector styling
- Slightly less smooth animations

## Customizing Your Flythrough

### 1. Edit Basic Information
In `flythrough_config_free.js`, update these sections:

```javascript
// Change the title and description
title: 'Your University Sentiment Journey',
subtitle: 'Exploring emotional geography of your campus',
byline: 'By [Your Names Here]',

// Update the chapters array with your locations
chapters: [
    {
        id: 'your-first-location',
        title: 'Your Location Title',
        description: 'Your description here...',
        location: {
            center: [latitude, longitude], // Your coordinates
            zoom: 15,
            duration: 2000
        }
        // ... more settings
    }
    // Add more chapters...
]
```

### 2. Find Your Coordinates
**Easy Method - Google Maps:**
1. Go to [maps.google.com](https://maps.google.com)
2. Right-click on any location
3. Click the coordinates that appear
4. Copy the numbers (first is latitude, second is longitude)
5. Use as `[latitude, longitude]` in your config

**Alternative - OpenStreetMap:**
1. Go to [openstreetmap.org](https://openstreetmap.org)
2. Navigate to your location
3. Right-click and choose "Show address"
4. Use the coordinates shown

### 3. Change Map Style
In `flythrough_config_free.js`, you can change the `tileLayer` to different free options:

```javascript
// Standard OpenStreetMap (default)
tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',

// Satellite imagery (free!)
tileLayer: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',

// Terrain map
tileLayer: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',

// Light/minimal style
tileLayer: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',

// Dark style
tileLayer: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
```

### 4. Add Your Sentiment Data

Replace the `sampleSentimentData` in the config file with your processed data:

```javascript
var sampleSentimentData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "place_name": "Your Location Name",
                "sentiment": 0.65, // -1 to 1 scale
                "post_count": 42,
                "place_type": "campus", // or "dining", "residential", etc.
                "avg_sentiment": "positive",
                "description": "Brief description"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [longitude, latitude] // NOTE: Longitude first for GeoJSON!
            }
        }
        // Add more locations...
    ]
}
```

**⚠️ Important:** GeoJSON uses `[longitude, latitude]` order, while Leaflet map centers use `[latitude, longitude]`!

### 5. Customize Data Visualization

Edit the `dataLayers` section to match your data categories:

```javascript
dataLayers: {
    'your-category-name': {
        color: '#10b981',        // Hex color code
        radius: 8,               // Circle size
        opacity: 0.8,            // Transparency
        filter: (feature) => feature.properties.your_field === 'your_value'
    }
}
```

## Converting Your CSV Data to GeoJSON

If you have CSV data with coordinates, here's a simple Python script:

```python
import pandas as pd
import json

# Read your CSV
df = pd.read_csv('your_sentiment_data.csv')

# Create GeoJSON structure
geojson = {
    "type": "FeatureCollection",
    "features": []
}

# Convert each row
for _, row in df.iterrows():
    feature = {
        "type": "Feature",
        "properties": {
            "place_name": row['place_name'],
            "sentiment": row['sentiment_score'],
            "post_count": row['post_count'],
            "place_type": row['category'],
            # Add other fields as needed
        },
        "geometry": {
            "type": "Point",
            "coordinates": [row['longitude'], row['latitude']]  # lng, lat order!
        }
    }
    geojson["features"].append(feature)

# Save as JavaScript file
with open('your_data.js', 'w') as f:
    f.write(f'var sampleSentimentData = {json.dumps(geojson, indent=2)};')
```

## Adding Images

1. **Create an `images` folder** in the same directory as your HTML file
2. **Add your photos** (JPG, PNG, GIF supported)
3. **Reference them** in your config:

```javascript
chapters: [
    {
        id: 'chapter-1',
        title: 'Your Location',
        image: './images/your-photo.jpg',  // Relative path
        description: '...',
        // ... rest of chapter config
    }
]
```

## Testing Your Flythrough

### Local Testing:
1. **Open** `flythrough_template_free.html` in your web browser
2. **Check the browser console** (F12) for any errors
3. **Scroll down** to navigate through your story

### Common Issues:

**Map doesn't load:**
- Check browser console for errors
- Ensure internet connection (tiles load from web)

**Data points don't appear:**
- Verify your GeoJSON format
- Check coordinate order (longitude, latitude for GeoJSON)
- Look for JavaScript errors in console

**Images don't show:**
- Check file paths are correct
- Ensure images exist in specified location
- Verify image file extensions match

## Deployment Options

### GitHub Pages (Free!):
1. Create a GitHub repository
2. Upload all your files
3. Go to Settings → Pages
4. Select "Deploy from a branch" → main
5. Your flythrough will be live at `username.github.io/repository-name`

### Alternative Free Hosting:
- **Netlify:** Drag and drop your folder
- **Vercel:** Connect your GitHub repo
- **Surge.sh:** Command line deployment

## Educational Integration

### For Different Universities:
Simply change the coordinates and location names:

```javascript
// For ODU
center: [36.8815, -76.3034],

// For UVA  
center: [38.0336, -78.5080],

// For VCU
center: [37.5407, -77.4360],

// For Virginia Tech
center: [37.2284, -80.4234],
```

### Multi-Institution Comparison:
Create chapters that fly between different campuses to compare sentiment patterns across universities.

### Data Integration:
Use the same processed sentiment data from your Python notebooks - just convert to GeoJSON format.

## Troubleshooting

### JavaScript Errors:
1. Open browser console (F12)
2. Look for red error messages
3. Most common issues:
   - Missing comma in config file
   - Incorrect coordinate format
   - Missing image files

### Map Display Issues:
- Clear browser cache
- Check internet connection
- Try different tile layer URLs

### Performance Tips:
- Limit data points to <1000 for smooth performance
- Optimize images (compress to <500KB each)
- Test on different devices/browsers

## Advanced Customization

### Custom Styling:
Edit the CSS in the HTML template to change colors, fonts, and layout.

### Animation Speed:
Adjust `animationDuration` in config for faster/slower transitions.

### Mobile Optimization:
The template includes responsive design, but you can adjust breakpoints in the CSS.

## Support Resources

- **Leaflet Documentation:** [leafletjs.com](https://leafletjs.com)
- **OpenStreetMap:** [openstreetmap.org](https://openstreetmap.org)
- **GeoJSON Format:** [geojson.org](https://geojson.org)
- **Free Tile Providers:** [leaflet-extras.github.io/leaflet-providers/](https://leaflet-extras.github.io/leaflet-providers/)

---

**🎉 Congratulations!** You now have a completely free, token-less flythrough system that showcases your sentiment analysis data with beautiful interactive maps!