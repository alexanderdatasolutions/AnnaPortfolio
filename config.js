// ANNA'S PORTFOLIO CONFIGURATION
// ================================
// Edit this file to customize your portfolio content!

// CATEGORY/FOLDER SETTINGS
// Each folder in photos/ becomes an automatic collection
// When someone clicks a photo, they see all photos from the same folder
const categoryInfo = {
    'barrett-jackson': {
        name: 'Barrett Jackson',
        emoji: '🏁',
        description: 'Premier collector car auction coverage',
        defaultDetails: 'Exclusive coverage from Barrett Jackson auctions, showcasing world-class collector vehicles and the energy of the auction floor.'
    },
    'american-heart-association': {
        name: 'American Heart Association',
        emoji: '❤️',
        description: 'Charity events and community impact',
        defaultDetails: 'Supporting the American Heart Association through automotive events and fundraising campaigns that make a difference in our community.'
    },
    'collector-cars': {
        name: 'Collector Cars',
        emoji: '💎',
        description: 'Premium automotive excellence',
        defaultDetails: 'High-end collector vehicles representing automotive history and craftsmanship. Each piece tells a unique story.'
    },
    'classic-cars': {
        name: 'Classic Cars',
        emoji: '🚗',
        description: 'Vintage automotive beauty',
        defaultDetails: 'Classic automobiles that define generations of automotive design and engineering excellence.'
    },
    'events': {
        name: 'Events',
        emoji: '🎪',
        description: 'Car shows and automotive gatherings',
        defaultDetails: 'Coverage from car shows, auctions, and automotive events that bring the community together.'
    },
    'behind-the-scenes': {
        name: 'Behind The Scenes',
        emoji: '🎬',
        description: 'Content creation process',
        defaultDetails: 'A look behind the camera at how viral automotive content is created, from concept to final post.'
    },
    'restaurant-marketing': {
        name: 'Restaurant Marketing',
        emoji: '🍽️',
        description: 'The Brook Restaurant & Bar',
        defaultDetails: 'Marketing campaigns and social media content for The Brook Restaurant & Bar, driving engagement and foot traffic.'
    },
    'uncategorized': {
        name: 'Automotive Content',
        emoji: '✨',
        description: 'Various automotive content',
        defaultDetails: 'Diverse automotive content showcasing cars, events, and the culture that drives engagement.'
    }
};

// CUSTOM PHOTO CAPTIONS
// Add specific captions for individual photos here
// Format: 'folder/filename.jpg': { title: '...', description: '...', details: '...' }
const customCaptions = {
    // Example - you can add specific captions for individual photos:
    // 'barrett-jackson/photo1.jpeg': {
    //     title: 'Custom Title',
    //     description: 'Custom short description',
    //     details: 'Custom detailed description that shows in lightbox'
    // },
};

// HERO SLIDESHOW IMAGES
// These appear in the rotating background of the top section
// Just add the path to any 3 photos you want featured
const heroImages = [
    'photos/0619F3BF-0EC7-4FBA-970D-E4BAED307D77_1_201_a.jpeg',
    'photos/B545DE11-89ED-434D-9363-94C2A8BE5678_1_201_a.jpeg',
    'photos/FC6ADE4C-6FBD-4C63-941C-98CA7364BEEA_1_201_a.jpeg'
];

// Don't edit below this line unless you know what you're doing!
// ================================================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { categoryInfo, customCaptions, heroImages };
}
