// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// PHOTO ORGANIZATION SYSTEM
// ==========================
// This system uses a tag-based approach where photos can have multiple categories

let allPhotos = [];
let photosByTag = {};

// Scan all photos from featured folders
async function loadPhotoStructure() {
    // Initialize tag collections based on categoryInfo
    photosByTag = {};
    if (typeof categoryInfo !== 'undefined') {
        Object.keys(categoryInfo).forEach(tag => {
            photosByTag[tag] = [];
        });
    }
    
    let photoId = 0;
    
    // Load from photoManifest
    if (typeof photoManifest !== 'undefined' && photoManifest.length > 0) {
        photoManifest.forEach(({ folder, file }) => {
            // Check if there's custom caption data
            const customData = (typeof customCaptions !== 'undefined' && customCaptions[file]) ? customCaptions[file] : null;
            
            // Get category info for this folder
            const folderInfo = (typeof categoryInfo !== 'undefined' && categoryInfo[folder]) ? categoryInfo[folder] : {
                name: 'Portfolio',
                emoji: '✨',
                description: 'Portfolio work',
                defaultDetails: 'Professional portfolio content.'
            };
            
            // Build photo object
            const photo = {
                id: photoId++,
                file: file,
                folder: folder,
                path: `photos/${folder}/${file}`,
                emoji: customData?.emoji || folderInfo.emoji,
                title: customData?.title || folderInfo.name,
                description: customData?.description || folderInfo.description,
                details: customData?.details || folderInfo.defaultDetails,
                tags: customData?.tags || [folder] // Default to just the folder as a tag
            };
            
            // Add to all tag collections
            photo.tags.forEach(tag => {
                if (!photosByTag[tag]) {
                    photosByTag[tag] = [];
                }
                photosByTag[tag].push(photo);
            });
            
            allPhotos.push(photo);
        });
    }
}

// Get photos with the same tags (related photos)
function getRelatedPhotos(photo) {
    const relatedSet = new Set();
    
    // Collect all photos that share at least one tag
    photo.tags.forEach(tag => {
        if (photosByTag[tag]) {
            photosByTag[tag].forEach(p => {
                if (p.id !== photo.id) { // Don't include the current photo
                    relatedSet.add(p);
                }
            });
        }
    });
    
    return Array.from(relatedSet);
}

// Get photos with the same tags (related photos)
function getRelatedPhotos(photo) {
    const relatedSet = new Set();
    
    // Collect all photos that share at least one tag
    photo.tags.forEach(tag => {
        if (photosByTag[tag]) {
            photosByTag[tag].forEach(p => {
                if (p.id !== photo.id) { // Don't include the current photo
                    relatedSet.add(p);
                }
            });
        }
    });
    
    return Array.from(relatedSet);
}

// Get category info
function getCategoryInfo(tags) {
    // Get the first tag's info
    const primaryTag = Array.isArray(tags) ? tags[0] : tags;
    
    if (categoryInfo && categoryInfo[primaryTag]) {
        return categoryInfo[primaryTag];
    }
    return {
        name: 'Automotive Content',
        emoji: '✨',
        description: 'Automotive showcase',
        defaultDetails: 'Automotive content and collector car coverage.'
    };
}

// Initialize and load photos
loadPhotoStructure();

// Sort photos to show featured categories first (2 from each featured folder)
if (typeof featuredCategories !== 'undefined' && featuredCategories.length > 0) {
    const featuredPhotos = [];
    const otherPhotos = [];
    
    // Collect photos from featured tags first
    featuredCategories.forEach(tagName => {
        if (photosByTag[tagName]) {
            featuredPhotos.push(...photosByTag[tagName].slice(0, 2)); // Take first 2 from each
        }
    });
    
    // Collect all other photos not already in featured
    const featuredIds = new Set(featuredPhotos.map(p => p.id));
    allPhotos.forEach(photo => {
        if (!featuredIds.has(photo.id)) {
            otherPhotos.push(photo);
        }
    });
    
    // Rebuild allPhotos with featured first
    allPhotos = [...featuredPhotos, ...otherPhotos];
}

// Gallery Grid
const galleryGrid = document.getElementById('galleryGrid');
const viewMoreBtn = document.getElementById('viewMoreBtn');
let showingAll = false;
const initialDisplayCount = 6; // Will show 3 category cards initially

// Create category cards for featured collections
if (typeof featuredCategories !== 'undefined' && featuredCategories.length > 0) {
    featuredCategories.forEach(categoryTag => {
        const categoryPhotos = photosByTag[categoryTag] || [];
        if (categoryPhotos.length === 0) return; // Skip empty categories
        
        const categoryData = categoryInfo[categoryTag] || {
            name: categoryTag,
            emoji: '✨',
            description: 'Portfolio collection'
        };
        
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item category-card';
        
        // Use first photo as background
        const firstPhoto = categoryPhotos[0];
        
        const img = document.createElement('img');
        img.src = firstPhoto.path;
        img.alt = categoryData.name;
        img.loading = 'lazy';
        
        // Hide gallery item if image fails to load
        img.onerror = function() {
            galleryItem.style.display = 'none';
        };
        
        galleryItem.innerHTML = `
            <div class="gallery-overlay">
                <div class="emoji">${categoryData.emoji}</div>
                <div class="title">${categoryData.name}</div>
                <div class="description">${categoryData.description}</div>
                <div class="photo-count">${categoryPhotos.length} photo${categoryPhotos.length !== 1 ? 's' : ''}</div>
            </div>
        `;
        galleryItem.insertBefore(img, galleryItem.firstChild);
        
        // Click opens lightbox with first photo from this category
        galleryItem.addEventListener('click', () => openCategoryLightbox(categoryTag));
        galleryGrid.appendChild(galleryItem);
    });
}

// View More button functionality - shows all individual photos
viewMoreBtn.addEventListener('click', () => {
    if (!showingAll) {
        // Clear grid and show all individual photos
        galleryGrid.innerHTML = '';
        
        allPhotos.forEach((photo) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = photo.path;
            img.alt = photo.title;
            img.loading = 'lazy';
            
            // Hide gallery item if image fails to load
            img.onerror = function() {
                galleryItem.style.display = 'none';
            };
            
            galleryItem.innerHTML = `
                <div class="gallery-overlay">
                    <div class="emoji">${photo.emoji}</div>
                    <div class="title">${photo.title}</div>
                    <div class="description">${photo.description}</div>
                </div>
            `;
            galleryItem.insertBefore(img, galleryItem.firstChild);
            galleryItem.addEventListener('click', () => openLightbox(photo.id));
            galleryGrid.appendChild(galleryItem);
        });
        
        viewMoreBtn.textContent = 'Show Categories';
        showingAll = true;
    } else {
        // Clear grid and show category cards again
        galleryGrid.innerHTML = '';
        
        featuredCategories.forEach(categoryTag => {
            const categoryPhotos = photosByTag[categoryTag] || [];
            if (categoryPhotos.length === 0) return;
            
            const categoryData = categoryInfo[categoryTag] || {
                name: categoryTag,
                emoji: '✨',
                description: 'Portfolio collection'
            };
            
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item category-card';
            
            const firstPhoto = categoryPhotos[0];
            
            const img = document.createElement('img');
            img.src = firstPhoto.path;
            img.alt = categoryData.name;
            img.loading = 'lazy';
            
            img.onerror = function() {
                galleryItem.style.display = 'none';
            };
            
            galleryItem.innerHTML = `
                <div class="gallery-overlay">
                    <div class="emoji">${categoryData.emoji}</div>
                    <div class="title">${categoryData.name}</div>
                    <div class="description">${categoryData.description}</div>
                    <div class="photo-count">${categoryPhotos.length} photo${categoryPhotos.length !== 1 ? 's' : ''}</div>
                </div>
            `;
            galleryItem.insertBefore(img, galleryItem.firstChild);
            galleryItem.addEventListener('click', () => openCategoryLightbox(categoryTag));
            galleryGrid.appendChild(galleryItem);
        });
        
        viewMoreBtn.textContent = 'View Full Gallery';
        showingAll = false;
        
        // Scroll back to gallery section
        document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
    }
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxEmoji = document.getElementById('lightbox-emoji');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDescription = document.getElementById('lightbox-description');
const lightboxDetails = document.getElementById('lightbox-details');
const relatedPhotosSection = document.getElementById('related-photos');
const relatedGrid = document.getElementById('related-grid');
const closeLightbox = document.querySelector('.close-lightbox');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentPhoto = null;
let currentRelatedPhotos = [];

function openCategoryLightbox(categoryTag) {
    // Get all photos in this category
    const categoryPhotos = photosByTag[categoryTag] || [];
    if (categoryPhotos.length === 0) return;
    
    // Open first photo and set related photos to all in category
    currentPhoto = categoryPhotos[0];
    currentRelatedPhotos = categoryPhotos;
    showImage(currentPhoto);
    showRelatedPhotos();
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function openLightbox(photoId) {
    currentPhoto = allPhotos.find(p => p.id === photoId);
    if (!currentPhoto) return;
    
    currentRelatedPhotos = getRelatedPhotos(currentPhoto);
    showImage(currentPhoto);
    showRelatedPhotos();
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function showImage(photo) {
    lightboxImg.src = photo.path;
    lightboxEmoji.textContent = photo.emoji;
    lightboxTitle.textContent = photo.title;
    lightboxDescription.textContent = photo.description;
    lightboxDetails.textContent = photo.details || getCategoryInfo(photo.tags).defaultDetails;
}

function showRelatedPhotos() {
    relatedGrid.innerHTML = '';
    
    if (currentRelatedPhotos.length <= 1) {
        relatedPhotosSection.style.display = 'none';
        return;
    }
    
    relatedPhotosSection.style.display = 'block';
    
    currentRelatedPhotos.forEach(photo => {
        const thumb = document.createElement('div');
        thumb.className = 'related-thumb';
        if (photo.id === currentPhoto.id) {
            thumb.classList.add('active');
        }
        
        const img = document.createElement('img');
        img.src = photo.path;
        img.alt = photo.title;
        
        // Only add the thumbnail if the image loads successfully
        img.onerror = function() {
            thumb.remove(); // Remove if image fails to load
        };
        
        thumb.appendChild(img);
        thumb.addEventListener('click', () => {
            currentPhoto = photo;
            showImage(photo);
            showRelatedPhotos();
        });
        relatedGrid.appendChild(thumb);
    });
}

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
});

prevBtn.addEventListener('click', () => {
    const currentIndex = currentRelatedPhotos.findIndex(p => p.id === currentPhoto.id);
    const prevIndex = (currentIndex - 1 + currentRelatedPhotos.length) % currentRelatedPhotos.length;
    currentPhoto = currentRelatedPhotos[prevIndex];
    showImage(currentPhoto);
    showRelatedPhotos();
});

nextBtn.addEventListener('click', () => {
    const currentIndex = currentRelatedPhotos.findIndex(p => p.id === currentPhoto.id);
    const nextIndex = (currentIndex + 1) % currentRelatedPhotos.length;
    currentPhoto = currentRelatedPhotos[nextIndex];
    showImage(currentPhoto);
    showRelatedPhotos();
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'block') {
        if (e.key === 'Escape') {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        } else if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe gallery items and metric cards
document.querySelectorAll('.gallery-item, .metric-card, .experience-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
