📁 ANNA'S PORTFOLIO - QUICK START GUIDE
=========================================

## How The Folder System Works

Your photos are now organized by PROJECT/CATEGORY. When someone clicks any photo, they'll see ALL related photos from that same folder!

## Current Folders:
- **barrett-jackson/** - Barrett Jackson auction content
- **american-heart-association/** - AHA charity events
- **collector-cars/** - Premium collector vehicles
- **classic-cars/** - Vintage automobiles
- **events/** - Car shows and events
- **behind-the-scenes/** - Content creation footage
- **restaurant-marketing/** - The Brook Restaurant content
- **uncategorized/** - Unsorted photos

## How to Organize (SO EASY!):

### Example: American Heart Association Event

Let's say you have 8 photos from an AHA charity car show:

1. Open Finder and go to `AnnaPortfolio/photos/`
2. Select the 8 AHA photos
3. Drag them into the `american-heart-association` folder
4. Done! ✅

Now when ANYONE clicks on ANY of those 8 photos:
- They see the full-size image
- Below it shows thumbnails of ALL 8 related AHA photos
- They can browse through the entire AHA collection
- It tells a complete story!

## To Add Custom Text:

Open `config.js` and add entries like this:

```javascript
const customCaptions = {
    'american-heart-association/photo1.jpeg': {
        title: 'AHA Charity Show',
        description: 'Supporting heart health',
        details: 'Raised $50K for the American Heart Association through this collector car showcase...'
    },
};
```

## Need a New Category?

1. Create a new folder in `photos/` (like `photos/new-project/`)
2. Add the folder info to `config.js`:

```javascript
'new-project': {
    name: 'New Project Name',
    emoji: '🎯',
    description: 'Short description',
    defaultDetails: 'Longer description that shows in lightbox'
}
```

That's it! Non-technical, drag-and-drop easy! 🎉
