// OpenStreetMap-based Flythrough Configuration
// No API tokens required - uses free OpenStreetMap tiles via Leaflet

var config = {
    // =============================================================================
    // MAP STYLE SETTINGS
    // =============================================================================
    
    // CURRENT STYLE: Positron Light (clean minimal style, perfect for data visualization)
    tileLayer: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    
    // OTHER OPTIONS (uncomment to use):
    // Standard OpenStreetMap: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    // Dark Positron: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    // Terrain: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
    
    // =============================================================================
    // COLOR SCALE SETTINGS (Choose one - Plotly inspired)
    // =============================================================================
    
    colorScale: 'RdYlGn',  // Options: 'RdYlGn' (Red-Yellow-Green) or 'Portland' (Blue-White-Red)
    
    // =============================================================================
    // PROJECT INFORMATION
    // =============================================================================
    
    title: 'JMU Campus Sentiment Journey',
    subtitle: 'A flythrough exploration of place-based emotions',
    byline: 'By [Student Names]',
    footer: 'Created for DS 101 Project 4',
    
    // =============================================================================
    // STORY CHAPTERS
    // Students: Add one object per view/chapter in your story
    // =============================================================================
    
    chapters: [
        {
            // CHAPTER SETTINGS
            id: 'intro',                    // Unique identifier (no spaces)
            title: 'Welcome to JMU\'s Emotional Geography',
            description: 'This flythrough explores how JMU students perceive and feel about different locations mentioned in Reddit posts.',
            image: './images/quad.jpg',     // Path to image (optional, leave empty if none)
            alignment: 'left',              // Options: 'left', 'right', 'center'
            duration: 2500,                 // How long to fly to this view (milliseconds)
            
            // LOCATION SETTINGS (Copy from your CSV)
            location: {
                name: 'JMU Campus Overview',
                latitude: 38.4347,          // Copy from CSV
                longitude: -78.8690,        // Copy from CSV
                zoom: 13,                   // How close: 10=far, 13=medium, 16=close, 18=very close
                postCount: null,            // Copy from CSV (or null for overview)
                robertaScore: null,         // Copy from CSV (or null for overview)
                isJMU: true                 // true for JMU locations, false for non-JMU
            },
            
            // DATA DISPLAY (What to show on map)
            showData: 'all_locations'       // Options: 'all_locations', 'jmu_locations', 'non_jmu_locations', 'individual', 'none'
        },
        
        {
            // Example: Individual location with data
            id: 'dhall',
            title: 'D-Hall: The Social Hub',
            description: 'D-Hall generates mixed emotions in student discussions. Our analysis shows both social connection (positive) and dining frustrations (negative).',
            image: './images/d_hall.jpg',
            alignment: 'right',
            duration: 2000,
            
            location: {
                name: 'D-Hall',
                latitude: 38.4335,          // Copy from CSV
                longitude: -78.8715,        // Copy from CSV  
                zoom: 17,
                postCount: 156,             // Copy from CSV
                robertaScore: -0.12,        // Copy from CSV (negative to positive scale)
                isJMU: true
            },
            
            showData: 'individual'          // Show only this location highlighted
        },
        
        {
            // Example: JMU locations overview
            id: 'campus-locations',
            title: 'JMU Campus Locations',
            description: 'A view of all locations on campus that students discussed in Reddit posts.',
            image: './images/arboretum.jpg',
            alignment: 'center',
            duration: 2000,
            
            location: {
                name: 'JMU Campus',
                latitude: 38.4365,
                longitude: -78.8705,
                zoom: 14,
                postCount: null,
                robertaScore: null,
                isJMU: true
            },
            
            showData: 'jmu_locations'       // Show all JMU locations
        },
        
        {
            // Example: Non-JMU locations (Harrisonburg area)
            id: 'harrisonburg',
            title: 'Beyond Campus: Harrisonburg',
            description: 'The broader Harrisonburg community shows how JMU students engage with their college town.',
            image: './images/art_gallery.jpg',
            alignment: 'left',
            duration: 2500,
            
            location: {
                name: 'Downtown Harrisonburg',
                latitude: 38.4496,
                longitude: -78.8689,
                zoom: 13,
                postCount: null,
                robertaScore: null,
                isJMU: false
            },
            
            showData: 'non_jmu_locations'   // Show all non-JMU locations
        }
        
        // ADD MORE CHAPTERS HERE - Copy the structure above
        
    ],
    
    // =============================================================================
    // ALL LOCATION DATA
    // Students: Add ALL locations from your CSV here (used for map visualization)
    // Copy entire rows from your CSV - this creates the data points shown on map
    // =============================================================================
    
    allLocations: [
        {
            name: 'JMU Quad',
            latitude: 38.4347,
            longitude: -78.8695,
            postCount: 42,
            robertaScore: 0.65,
            isJMU: true
        },
        {
            name: 'D-Hall',
            latitude: 38.4335,
            longitude: -78.8715,
            postCount: 156,
            robertaScore: -0.12,
            isJMU: true
        },
        {
            name: 'Carrier Library',
            latitude: 38.4365,
            longitude: -78.8705,
            postCount: 89,
            robertaScore: -0.25,
            isJMU: true
        },
        {
            name: 'Bridgeforth Stadium',
            latitude: 38.4390,
            longitude: -78.8620,
            postCount: 73,
            robertaScore: 0.78,
            isJMU: true
        },
        {
            name: 'Downtown Harrisonburg',
            latitude: 38.4496,
            longitude: -78.8689,
            postCount: 89,
            robertaScore: 0.42,
            isJMU: false
        },
        {
            name: 'Sheetz (Port Republic)',
            latitude: 38.4280,
            longitude: -78.8510,
            postCount: 34,
            robertaScore: 0.55,
            isJMU: false
        }
        
        // ADD ALL YOUR CSV LOCATIONS HERE
        // Copy the format above for each location in your dataset
        
    ]
};
