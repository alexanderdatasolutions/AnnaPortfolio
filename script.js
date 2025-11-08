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
// This system automatically scans folders and organizes photos

let allPhotos = [];
let photosByCategory = {};

// Scan all photos from the main photos folder and subfolders
async function loadPhotoStructure() {
    // For now, we'll use the existing photos in the main folder
    // and demonstrate the folder system with example data
    
    // This will be populated by photos Anna organizes into folders
    photosByCategory = {
        'main': [], // Photos in the root photos/ folder
        'barrett-jackson': [],
        'american-heart-association': [],
        'collector-cars': [],
        'classic-cars': [],
        'events': [],
        'behind-the-scenes': [],
        'restaurant-marketing': [],
        'uncategorized': []
    };
    
    // All existing photos go into 'main' category for now
    // Anna can move them into category folders later
    const mainPhotos = [
        '003CF97E-3103-4B54-8EBC-F14FB12FBDCB_1_105_c.jpeg',
        '0159827D-25AA-4E12-8D1C-BBC3147D79F5_1_101_o.jpeg',
        '0204CE79-6708-4E9E-B82C-0208CED13006_4_5005_c.jpeg',
        '0619F3BF-0EC7-4FBA-970D-E4BAED307D77_1_201_a.jpeg',
        '062EC39F-E0B0-4687-8811-9A20A26BE5BA_1_101_o.jpeg',
        '0634506D-5452-49AB-9C2A-257B209CF521_4_5005_c.jpeg',
        '0804608F-6F53-4899-893B-052CCB0D0EB1.jpeg',
        '0CEC68B8-1E21-4022-B224-41A31048DBCB.jpeg',
        '0CF84D1B-6D1E-4BBC-AF0D-F710DBF28ADB.jpeg',
        '0EB8F31E-A0B0-4D44-BDB1-9CD67AE78DC6_1_105_c.jpeg',
        '1022E47A-FCA3-4A91-AFC0-4B2ED1D3D4A7_1_105_c.jpeg',
        '123ED9CE-5D28-4193-95B2-F4154D1CA909_1_105_c.jpeg',
        '12DC624E-9509-42B2-899A-4BEA20F351B1.jpeg',
        '13534111-92A2-44AC-9C41-E17AD6676BAF_1_105_c.jpeg',
        '13ACFA99-B1C9-4541-87D4-C47FD36B68E1_1_105_c.jpeg',
        '177910BB-59BB-471E-9F63-EECBD8394029_1_201_a.jpeg',
        '193335F5-1FA3-455D-8CB9-C27F62FA30C8_1_101_o.jpeg',
        '1AD7F9B7-C061-42F9-A0DF-FE44F69E6C14_1_105_c.jpeg',
        '1B9F9469-2234-4479-9490-EA4E565F85E9.jpeg',
        '1BDBF8AE-D263-40B8-BDEF-1C3A46522840_1_102_o.jpeg',
        '1CA4D024-AF9B-42E3-BDFD-F8B6BAA43CEB.jpeg',
        '22423463-F54B-4E32-985B-2DB9AE9ADCE4_1_105_c.jpeg',
        '25A9FB91-00AB-4323-8656-B6ADCFDA12A3_1_201_a.jpeg',
        '28572189-BB4E-489B-96C5-932590C1E8FB_4_5005_c.jpeg',
        '2A1C3070-C5D4-4ABF-9313-43BC23478199_1_105_c.jpeg',
        '2A6A8658-FEC7-4006-A1B0-4FCE312D0D4E_1_105_c.jpeg',
        '2C13B369-E1C4-4CA0-B7C1-A70D6DC7B8A5.jpeg',
        '2C65127D-95A3-496E-AF22-CBDDD83F6AA7.jpeg',
        '2EF15F16-ABD1-4C6B-A013-6C50375D22AA_4_5005_c.jpeg',
        '2FF4F658-79A5-4539-AC5D-CD6347417648_1_105_c.jpeg',
        '31541A05-9F91-4776-86C2-3F59C764D7E8_1_105_c.jpeg',
        '31F7F42B-E06C-499C-841B-A474B6F7DCCD_1_105_c.jpeg',
        '32C2972A-2A80-45B7-BEE2-4A9D002A9FB0_1_102_o.jpeg',
        '36812480-0E34-4E5E-A65B-006DA88646BB_1_105_c.jpeg',
        '381E43ED-5BC9-46EC-B13A-3DD2D0926966_4_5005_c.jpeg',
        '38ECCD9A-B445-46B8-8654-19475C10B6E9_1_105_c.jpeg',
        '39139BB3-7C1F-4A6A-B7D6-E31C49A45F72_4_5005_c.jpeg',
        '39554BA8-D1C4-4212-A5B1-C62D515400B5_1_105_c.jpeg',
        '448BA50C-0563-47CD-B9A7-E0360C07CD8A_1_102_o.jpeg',
        '45514044-B26F-4BC1-8EEB-8F23664A97A7_1_101_o.jpeg',
        '470AC6D6-EBBB-4529-9ADD-2C709CECACF5_1_105_c.jpeg',
        '493F04B1-F0FF-43EA-AA52-18B652B25876_1_105_c.jpeg',
        '4B063CF1-C0F5-4554-AAFF-A8C8A9617B04_4_5005_c.jpeg',
        '51364EC4-D689-4B9E-9C8A-D3033815FEEC_1_105_c.jpeg',
        '5259BF7B-C4D8-48E0-AF57-17AA8437E450.jpeg',
        '527ADCDB-759D-4600-9BCB-812F43E52976_1_102_o.jpeg',
        '55520173-741F-4EB0-AF33-613854CC7AD4.jpeg',
        '58BBA0AA-A342-47D3-8717-7C9C60A356C3.jpeg',
        '5A9262A9-BC4F-4FB0-AA78-0BE2047F7BA1_1_201_a.jpeg',
        '5C509F36-3564-450A-A36D-007D9373860F_4_5005_c.jpeg',
        '5D50BFF6-AB27-4C5F-8A65-AD8A00F430ED_1_102_o.jpeg',
        '630B217D-9219-42DC-8939-A29A987AEC7F.jpeg',
        '64F86913-E214-4E76-8080-A6633689FBA4.jpeg',
        '65F37986-6DDE-4429-B1BB-7719FCA8FB72_4_5005_c.jpeg',
        '6816C7BB-E44B-461A-A67A-7D3355784E6E_1_201_a.jpeg',
        '6845CB9C-5F12-4FD3-AA15-EEFE2C50F7FD_4_5005_c.jpeg',
        '6B643A48-FE17-4743-9164-EA57A4C05C28_1_101_o.jpeg',
        '6C691692-5368-4F66-9755-0BAE6F593163_4_5005_c.jpeg',
        '6F15F3AC-F7B1-4A4C-997C-610396352F0E_1_105_c.jpeg',
        '7238667F-5B8D-43A8-A900-4F0305F7DE91_4_5005_c.jpeg',
        '7686F6DB-F0AC-4907-8030-A9AE32B829EB_1_105_c.jpeg',
        '7D149AA5-7BB4-4555-886D-02C597EDAF0D_1_102_o.jpeg',
        '7D45FB28-3A18-4979-A59F-5921C0D3881B_1_105_c.jpeg',
        '7FC9B118-B214-4189-9815-E03253F25ACB.jpeg',
        '85A3FB58-0933-42D5-B4B3-5BDEC207FADE.jpeg',
        '85D8B34C-6409-4260-BB29-B726F14D2E90_1_102_o.jpeg',
        '8833846E-31DA-4B8B-B53E-C0B44450F53B.jpeg',
        '89B2B0CD-84D8-411F-BF7B-9E279470CE11_1_105_c.jpeg',
        '8AB69B77-7A3C-445F-9797-81DE409B8168.jpeg',
        '8ECC958E-4B8F-42CF-ACE6-F4637F22ABB8_1_102_o.jpeg',
        '921B7954-B883-43B5-8C4D-B56F59F4EDDF.jpeg',
        '961FBB70-DABD-4110-A68A-B167A938F4B1_1_105_c.jpeg',
        '99A799B2-D853-42EF-AAD8-A978D48B746E.jpeg',
        '9BE80AE0-CA56-42BF-8EF7-7623717DC0AB_1_102_o.jpeg',
        '9E49BF78-C5CD-41D2-9C50-1CD42F1CFF31_4_5005_c.jpeg',
        'A07E66ED-26C9-45DA-B2E9-A8392FEA6D15_4_5005_c.jpeg',
        'A1AEF0BE-43BB-4A21-8800-D28BDAD24411_1_105_c.jpeg',
        'A57EDE29-F84F-47F9-B44C-C6C5804AD5DF.jpeg',
        'A9D3E3A1-C595-4809-85A2-EFD7424A8E1E_1_105_c.jpeg',
        'AC4B81EC-C5A0-4667-9F57-5C4CDE1BD987_1_101_o.jpeg',
        'ACF0FB61-002E-4FA7-AF3D-0E1FFDD8E3DF_4_5005_c.jpeg',
        'AE623C00-8434-4AEA-BDAB-70B98A2E6381_1_102_o.jpeg',
        'AF738BBE-671D-438A-953E-40E30213F6A7.jpeg',
        'B09F5843-A0CD-44D3-92AF-839C5D03BC4E_1_105_c.jpeg',
        'B221907C-A4AA-4C46-BF55-9C37085227F7.jpeg',
        'B545DE11-89ED-434D-9363-94C2A8BE5678_1_201_a.jpeg',
        'B5CB7C20-2E2D-4D5F-BED5-35C836207FEF_1_102_o.jpeg',
        'B5D7418B-73C5-436A-8789-4C38DDB93266_4_5005_c.jpeg',
        'BA86BD56-4294-4075-93A8-00AAE22A09C9_1_105_c.jpeg',
        'BADC57DD-45F3-412A-930A-D7FB7B828893_1_101_o.jpeg',
        'BE0DE97C-2AB0-4AA0-AF21-8F58166817FF_4_5005_c.jpeg',
        'BE74D69E-F684-4D9C-9F59-7C9A119D70B2_1_102_a.jpeg',
        'C098BA90-598A-42A8-9655-040790BC181D.jpeg',
        'C09E2AAC-FB1E-4ED9-AE22-8BE834252200.jpeg',
        'C2A95D5C-9331-454F-B56B-838AB5B7312E_4_5005_c.jpeg',
        'C2F19A30-F10A-4357-9F3A-958BBE43CF5C.jpeg',
        'C4ECFE4A-9F9C-493B-9E48-12DAB5411638.jpeg',
        'C6A39283-68D3-4E8D-ADD6-BEFBA9113CBC_1_105_c.jpeg',
        'C6AC57EE-A834-493F-B131-5D0FDEC5ACEF_1_102_o.jpeg',
        'C6B26807-4F71-4CF6-916F-B1E6F7A66806_1_105_c.jpeg',
        'CB0AA374-9F6D-4BE3-B262-9685CBFA04BA_1_105_c.jpeg',
        'CECFF729-FB8C-4F03-853E-8B42C4B3214D_4_5005_c.jpeg',
        'D39AACF2-A56B-4C7C-A5EB-F5CE7DD6382F_1_105_c.jpeg',
        'D4263610-AC51-4084-A475-362ED867F18C_1_105_c.jpeg',
        'D5EE8B00-B521-4F57-859A-2DEA9087ECC7_1_105_c.jpeg',
        'D6D6CCA4-FB64-4116-B37E-8C261AD17C52.jpeg',
        'D829EB49-945A-41A3-8D80-4420F259B5ED_1_102_o.jpeg',
        'D89362CA-BA5D-4C8E-8DB7-D6DD5238EE23.jpeg',
        'DA7CF943-22A5-4024-B0EB-9C56416A3487_1_102_o.jpeg',
        'DAF00FC1-1C29-48B0-90F9-9DC1E1954489_1_105_c.jpeg',
        'DC7C2F39-7D60-4FA1-894F-E695AB1169B1.jpeg',
        'DCD89565-50A4-4B8F-9B0F-DBEEF7D4CE49.jpeg',
        'E134EF87-A9A7-44C1-AF37-C3F046E2B508_4_5005_c.jpeg',
        'E14F4C55-EA89-4154-BA98-739CB5917414_1_105_c.jpeg',
        'E5312356-A0F5-4FC9-9F97-FF443143B78C_1_105_c.jpeg',
        'E5E83136-9B62-4DA0-8238-C4E2E7AC7A23.jpeg',
        'E72EF9DB-1E14-415A-A6DD-905A4B1DC51D_4_5005_c.jpeg',
        'E8A3D477-32FC-4095-A28C-DC62486DF740_1_105_c.jpeg',
        'E917AB37-6FAB-4C4B-9280-0CDC4A542C20.jpeg',
        'EA71D144-5048-4C02-A424-558E9B3EA85F_4_5005_c.jpeg',
        'EBFD012B-8F7B-4514-9F83-1A004BBB0C9E_4_5005_c.jpeg',
        'ED28B126-3932-4034-A913-17E9BD442AF1_4_5005_c.jpeg',
        'F0BE1593-780F-4ED4-ADD8-B3E15F4D815E.jpeg',
        'F0F636B0-61C2-44CD-8A66-4E06DE8D895D_1_105_c.jpeg',
        'F2D333CD-E114-4579-B6BA-754B50C43A1A_1_105_c.jpeg',
        'F40689FF-9842-43E9-92A3-DD2732BD4D4C_1_105_c.jpeg',
        'F450C9F3-B3C0-4260-96ED-EF7CADC6A2AC.jpeg',
        'F57E52AA-8978-400E-933E-219F7A50B0A5_4_5005_c.jpeg',
        'F7018C2E-C7E0-4FE4-A697-49028DC63C50_1_105_c.jpeg',
        'F80B7915-B5C6-4E43-AA22-52A8FBCA4485_1_105_c.jpeg',
        'FA84BB2F-5D8D-4939-A2BD-8093DF8C33D5_4_5005_c.jpeg',
        'FC6ADE4C-6FBD-4C63-941C-98CA7364BEEA_1_201_a.jpeg'
    ];
    
    // Create photo objects for each main photo
    mainPhotos.forEach((filename, index) => {
        const photo = {
            id: index,
            file: filename,
            path: `photos/${filename}`,
            category: 'main',
            emoji: ['🚗', '🏁', '✨', '💎', '🔥', '⚡', '🏎️', '🎯'][index % 8],
            title: 'Automotive Content',
            description: 'Barrett Jackson & collector car showcase',
            details: 'Exclusive automotive content showcasing collector cars, Barrett Jackson events, and premium vehicle features.'
        };
        
        // Check for custom caption
        if (customCaptions && customCaptions[filename]) {
            Object.assign(photo, customCaptions[filename]);
        }
        
        photosByCategory['main'].push(photo);
        allPhotos.push(photo);
    });
}

// Get photos from the same category
function getRelatedPhotos(photo) {
    return photosByCategory[photo.category] || [];
}

// Get category info
function getCategoryInfo(categoryName) {
    if (categoryInfo && categoryInfo[categoryName]) {
        return categoryInfo[categoryName];
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

// Gallery Grid
const galleryGrid = document.getElementById('galleryGrid');
const viewMoreBtn = document.getElementById('viewMoreBtn');
let showingAll = false;
const initialDisplayCount = 6; // 2 rows of 3

// Create gallery items
allPhotos.forEach((photo, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    
    // Hide items after the initial count
    if (index >= initialDisplayCount) {
        galleryItem.classList.add('hidden');
    }
    
    galleryItem.innerHTML = `
        <img src="${photo.path}" alt="${photo.title}" loading="lazy">
        <div class="gallery-overlay">
            <div class="emoji">${photo.emoji}</div>
            <div class="title">${photo.title}</div>
            <div class="description">${photo.description}</div>
        </div>
    `;
    galleryItem.addEventListener('click', () => openLightbox(photo.id));
    galleryGrid.appendChild(galleryItem);
});

// View More button functionality
viewMoreBtn.addEventListener('click', () => {
    if (!showingAll) {
        // Show all photos
        document.querySelectorAll('.gallery-item.hidden').forEach(item => {
            item.classList.remove('hidden');
        });
        viewMoreBtn.textContent = 'Show Less';
        showingAll = true;
    } else {
        // Hide photos after initial count
        document.querySelectorAll('.gallery-item').forEach((item, index) => {
            if (index >= initialDisplayCount) {
                item.classList.add('hidden');
            }
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
    lightboxDetails.textContent = photo.details || getCategoryInfo(photo.category).defaultDetails;
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
        thumb.innerHTML = `<img src="${photo.path}" alt="${photo.title}">`;
        thumb.addEventListener('click', () => {
            currentPhoto = photo;
            showImage(photo);
            // Update active state
            document.querySelectorAll('.related-thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
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
