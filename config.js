// ANNA'S PORTFOLIO CONFIGURATION
// ================================
// Edit this file to customize your portfolio content!

// FEATURED CATEGORIES
// The homepage shows 2 photos from each of these 3 folders (6 total)
// Just drag your best 2 photos into each folder!
const featuredCategories = [
    '1-barrett-jackson-featured',
    '2-merchandise-featured', 
    '3-restaurant-featured'
];

// PHOTO MANIFEST
// List all photos in your featured folders here
// Format: { folder: 'folder-name', file: 'filename.jpg' }
// The system will auto-apply tags and settings based on folder and customCaptions
const photoManifest = [
    // Barrett Jackson Featured - TikToks first for main thumbnail
    { folder: '1-barrett-jackson-featured', file: 'tiktok-7329679072311790891', type: 'tiktok' },
    { folder: '1-barrett-jackson-featured', file: 'tiktok-7462436827949960494', type: 'tiktok' },
    { folder: '1-barrett-jackson-featured', file: 'carclips.jpeg' },
    { folder: '1-barrett-jackson-featured', file: 'carclips2.jpeg' },
    { folder: '1-barrett-jackson-featured', file: 'k10design.jpeg' },
    { folder: '1-barrett-jackson-featured', file: 'overallslookingback.jpeg' },
    
    // Merchandise Featured
    { folder: '2-merchandise-featured', file: 'barret_design.jpeg' },
    { folder: '2-merchandise-featured', file: 'bj_hoodie_back.jpeg' },
    { folder: '2-merchandise-featured', file: 'bj_k10_shirt_back.jpeg' },
    { folder: '2-merchandise-featured', file: 'bj_sleeveless_dress_back_type2.jpeg' },
    { folder: '2-merchandise-featured', file: 'bj_sleeveless_dress_back.jpeg' },
    { folder: '2-merchandise-featured', file: 'bj_sleeveless_dress_front.jpeg' },
    { folder: '2-merchandise-featured', file: 'car_design_polo_front.jpeg' },
    { folder: '2-merchandise-featured', file: 'Linen set_page-0005-imageonline.co-merged.jpg' },
    
    // Restaurant Featured
    { folder: '3-restaurant-featured', file: '70C1ECA8-661C-404A-BA0A-AB54393142F5.png' }
];

// CATEGORY/FOLDER SETTINGS
// Each folder in photos/ becomes an automatic collection (tags)
// Photos can be in MULTIPLE folders - they're like hashtags!
// When someone clicks a photo, they see all photos from the same folder
const categoryInfo = {
    '1-barrett-jackson-featured': {
        name: 'Barrett Jackson',
        emoji: '🏁',
        description: 'Premier collector car auction coverage',
        defaultDetails: 'Exclusive coverage from Barrett Jackson auctions, showcasing world-class collector vehicles and the energy of the auction floor.'
    },
    '2-merchandise-featured': {
        name: 'Merchandise & Design',
        emoji: '👕',
        description: 'Custom clothing and branded merchandise',
        defaultDetails: 'Custom merchandise design including Barrett Jackson apparel, branded clothing, and creative graphic design work.'
    },
    '3-restaurant-featured': {
        name: 'Restaurant Marketing',
        emoji: '�️',
        description: 'The Brook Restaurant & Bar',
        defaultDetails: 'Marketing campaigns and social media content for The Brook Restaurant & Bar, driving engagement and foot traffic.'
    },
    'featured-showcase': {
        name: 'Featured Work',
        emoji: '⭐',
        description: 'Best of Barrett Jackson, merchandise design, and marketing',
        defaultDetails: 'Showcasing the best work across automotive content creation, custom merchandise design, and marketing campaigns.'
    },
    'merchandise-design': {
        name: 'Merchandise & Design',
        emoji: '👕',
        description: 'Custom clothing and branded merchandise',
        defaultDetails: 'Custom merchandise design including Barrett Jackson apparel, branded clothing, and creative graphic design work.'
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
// Add your photos here with their details and tags!
// Format: 'filename.jpg': { emoji, title, description, details, tags: [...] }
// Tags can be multiple! ['barrett-jackson', 'merchandise-design']
const customCaptions = {
    // Barrett Jackson Featured
    'carclips.jpeg': {
        emoji: '👕',
        title: 'Barrett Jackson Merchandise Content',
        description: 'Branded apparel showcase',
        details: 'Social media content showcasing Barrett Jackson branded merchandise and apparel.',
        tags: ['1-barrett-jackson-featured', '2-merchandise-featured', 'barrett-jackson', 'merchandise-design', 'events']
    },
    'carclips2.jpeg': {
        emoji: '👕',
        title: 'Barrett Jackson Apparel Display',
        description: 'Collector merchandise collection',
        details: 'Showcasing Barrett Jackson branded apparel and collector merchandise at auction events.',
        tags: ['1-barrett-jackson-featured', '2-merchandise-featured', 'barrett-jackson', 'merchandise-design', 'collector-cars']
    },
    'k10design.jpeg': {
        emoji: '👕',
        title: 'K10 Truck Shirt Design',
        description: 'Barrett Jackson classic truck apparel',
        details: 'Custom K10 truck shirt design for Barrett Jackson, featuring classic truck graphics.',
        tags: ['1-barrett-jackson-featured', '2-merchandise-featured', 'barrett-jackson', 'merchandise-design', 'classic-cars']
    },
    'overallslookingback.jpeg': {
        emoji: '🏁',
        title: 'Barrett Jackson Overalls',
        description: 'Anna in branded Barrett Jackson apparel',
        details: 'Behind-the-scenes content featuring Barrett Jackson branded overalls at auction events.',
        tags: ['1-barrett-jackson-featured', '2-merchandise-featured', 'barrett-jackson', 'merchandise-design', 'behind-the-scenes', 'events']
    },
    'tiktok-7329679072311790891': {
        emoji: '🎥',
        title: 'Barrett Jackson Viral Video',
        description: 'Viral TikTok content',
        details: 'Viral TikTok video showcasing Barrett Jackson auction highlights and collector cars.',
        tags: ['1-barrett-jackson-featured', 'barrett-jackson', 'events', 'collector-cars'],
        tiktokId: '7329679072311790891'
    },
    'tiktok-7462436827949960494': {
        emoji: '🎥',
        title: 'Barrett Jackson Coverage',
        description: 'Exclusive auction content',
        details: 'Behind-the-scenes TikTok coverage from Barrett Jackson featuring exclusive collector car content.',
        tags: ['1-barrett-jackson-featured', 'barrett-jackson', 'events', 'behind-the-scenes'],
        tiktokId: '7462436827949960494'
    },
    
    // Merchandise Featured
    'barret_design.jpeg': {
        emoji: '👕',
        title: 'Barrett Jackson Apparel Design',
        description: 'Custom branded merchandise',
        details: 'Custom Barrett Jackson merchandise design showcasing branded apparel for collectors and enthusiasts.',
        tags: ['2-merchandise-featured', '1-barrett-jackson-featured', 'merchandise-design', 'barrett-jackson']
    },
    'bj_hoodie_back.jpeg': {
        emoji: '👕',
        title: 'Barrett Jackson Hoodie',
        description: 'Premium branded hoodie design',
        details: 'Custom hoodie featuring Barrett Jackson branding with bold back design.',
        tags: ['2-merchandise-featured', '1-barrett-jackson-featured', 'merchandise-design', 'barrett-jackson']
    },
    'bj_k10_shirt_back.jpeg': {
        emoji: '👕',
        title: 'Barrett Jackson K10 Shirt',
        description: 'Classic truck apparel design',
        details: 'Custom shirt design featuring the iconic K10 truck with Barrett Jackson branding.',
        tags: ['2-merchandise-featured', '1-barrett-jackson-featured', 'merchandise-design', 'barrett-jackson', 'classic-cars']
    },
    'bj_sleeveless_dress_back_type2.jpeg': {
        emoji: '👗',
        title: 'Barrett Jackson Dress Design',
        description: 'Elegant collector apparel',
        details: 'Sleeveless dress design with Barrett Jackson branding for car show events.',
        tags: ['2-merchandise-featured', '1-barrett-jackson-featured', 'merchandise-design', 'barrett-jackson']
    },
    'bj_sleeveless_dress_back.jpeg': {
        emoji: '👗',
        title: 'Barrett Jackson Event Dress',
        description: 'Premium event apparel',
        details: 'Custom dress design featuring Barrett Jackson branding, perfect for auction events.',
        tags: ['2-merchandise-featured', '1-barrett-jackson-featured', 'merchandise-design', 'barrett-jackson', 'events']
    },
    'bj_sleeveless_dress_front.jpeg': {
        emoji: '👗',
        title: 'Barrett Jackson Dress Collection',
        description: 'Exclusive collector apparel',
        details: 'Elegant dress design featuring Barrett Jackson branding for enthusiasts and collectors.',
        tags: ['2-merchandise-featured', '1-barrett-jackson-featured', 'merchandise-design', 'barrett-jackson']
    },
    'car_design_polo_front.jpeg': {
        emoji: '👕',
        title: 'Barrett Jackson Polo Design',
        description: 'Classic automotive enthusiast apparel',
        details: 'Premium polo shirt design featuring Barrett Jackson automotive graphics and branding.',
        tags: ['2-merchandise-featured', '1-barrett-jackson-featured', 'merchandise-design', 'barrett-jackson', 'classic-cars']
    },
    'linen_email_design.png': {
        emoji: '📧',
        title: 'Linen Set Email Campaign',
        description: 'Email marketing design',
        details: 'Custom email design showcasing product photography and promotional content for merchandise campaigns.',
        tags: ['2-merchandise-featured', 'merchandise-design']
    },
    'Linen set_page-0005-imageonline.co-merged.jpg': {
        emoji: '📧',
        title: 'Linen Set Email Campaign',
        description: 'Email marketing design',
        details: 'Custom email design showcasing product photography and promotional content for merchandise campaigns. Full scrollable email layout demonstrating design skills.',
        tags: ['2-merchandise-featured', 'merchandise-design']
    },
    
    // Restaurant Featured
    '70C1ECA8-661C-404A-BA0A-AB54393142F5.png': {
        emoji: '🍽️',
        title: 'The Brook Restaurant Marketing',
        description: 'Restaurant & bar promotion',
        details: 'Social media marketing content for The Brook Restaurant & Bar, driving engagement and foot traffic.',
        tags: ['3-restaurant-featured', 'restaurant-marketing']
    }
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
    module.exports = { categoryInfo, customCaptions, heroImages, featuredCategories, photoManifest };
}
