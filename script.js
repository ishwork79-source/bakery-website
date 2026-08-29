// ============================================================
// 📁 FILE STRUCTURE FOR IMAGES:
// ============================================================
// /assets/
//   /images/
//     /brownie/     - ❌ No images (using emojis)
//     /shakes/      - ✅ Add your images here
//     /bowl/        - ✅ Add your images here
//     /waffles/     - ✅ Add your images here (some)
//     /mini-cakes/  - ❌ No images (using emojis)
//     /cookie-tin/  - ✅ Add your images here
//     /extra/       - 🟡 Maybe add images if available
// ============================================================


// ============================================================
// 🍫 BROWNIE CARD DATA - ❌ No images available (Using emojis)
// ============================================================
// ⚠️ TODO: Replace emojis with actual image URLs if you get images later
const brownieItems = [
    {
        id: 'brownie-1',
        name: 'Chocolate Walnut Brownie',
        price: 100,
        // 📸 IMAGE: No image available
        // Using 🍫 emoji as placeholder
        // ⚠️ TODO: Replace with image path when available:
        // image: require('../assets/images/brownie/chocolate-walnut.jpg'),
        // OR if using web URLs:
        // image: 'https://your-image-url.com/brownie-chocolate-walnut.jpg',
        image: '🍫',
        description: 'Rich chocolate brownie with crunchy walnuts'
    },
    {
        id: 'brownie-2',
        name: 'Cookie Dough Brownie',
        price: 130,
        // 📸 IMAGE: No image available
        image: '🍪', // Emoji placeholder
        // ⚠️ TODO: Replace with image path when available
        description: 'Fudgy brownie with cookie dough chunks'
    }
];


// ============================================================
// 🥤 SHAKES CARD DATA - ✅ Has images for all items
// ============================================================
// ⚠️ TODO: Update image paths with your actual image URLs
const shakeItems = [
    {
        id: 'shake-1',
        name: 'Cold Coco',
        price: 100,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL:
        // image: require('../assets/images/shakes/cold-coco.jpg'),
        // OR if using web URLs:
        // image: 'https://your-image-url.com/shakes/cold-coco.jpg',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
        description: 'Refreshing cold cocoa drink'
    },
    {
        id: 'shake-2',
        name: 'Cold Coffee',
        price: 90,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400',
        description: 'Chilled coffee with a hint of sweetness'
    },
    {
        id: 'shake-3',
        name: 'Chocolate',
        price: 130,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
        description: 'Classic chocolate milkshake'
    },
    {
        id: 'shake-4',
        name: 'Oreo',
        price: 130,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400',
        description: 'Creamy shake with crushed Oreo cookies'
    },
    {
        id: 'shake-5',
        name: 'Nutty Nutella',
        price: 160,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400',
        description: 'Hazelnut Nutella shake with nuts'
    },
    {
        id: 'shake-6',
        name: 'Badam',
        price: 130,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400',
        description: 'Rich almond milk shake'
    },
    {
        id: 'shake-7',
        name: 'Choco Brownie',
        price: 160,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
        description: 'Decadent brownie blended in shake'
    },
    {
        id: 'shake-8',
        name: 'Kit Kat',
        price: 140,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400',
        description: 'Shake with Kit Kat chunks'
    },
    {
        id: 'shake-9',
        name: 'Mango',
        price: 120,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400',
        description: 'Fresh mango shake'
    },
    {
        id: 'shake-10',
        name: 'Banana',
        price: 110,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400',
        description: 'Creamy banana shake'
    },
    {
        id: 'shake-11',
        name: 'Strawberry',
        price: 120,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
        description: 'Fresh strawberry shake'
    }
];


// ============================================================
// 🥣 BOWL CARD DATA - ✅ Has images, 2 sizes (Small & Large)
// ============================================================
// ⚠️ TODO: Update image paths with your actual bowl images
const bowlItems = [
    {
        id: 'bowl-1',
        name: 'Dark',
        // 💰 PRICES: Small / Large
        smallPrice: 90,
        largePrice: 180,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
        description: 'Rich dark chocolate bowl'
    },
    {
        id: 'bowl-2',
        name: 'Double',
        smallPrice: 110,
        largePrice: 210,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
        description: 'Double chocolate bowl'
    },
    {
        id: 'bowl-3',
        name: 'Triple',
        smallPrice: 110,
        largePrice: 210,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
        description: 'Triple chocolate bowl'
    },
    {
        id: 'bowl-4',
        name: 'Nutella',
        smallPrice: 180,
        largePrice: 280,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
        description: 'Nutella hazelnut bowl'
    },
    {
        id: 'bowl-5',
        name: 'Oreo',
        smallPrice: 110,
        largePrice: 210,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
        description: 'Oreo cookie bowl'
    },
    {
        id: 'bowl-6',
        name: 'Biscoff',
        smallPrice: 190,
        largePrice: 290,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
        description: 'Biscoff cookie butter bowl'
    },
    {
        id: 'bowl-7',
        name: 'Kit Kat',
        smallPrice: 110,
        largePrice: 210,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
        description: 'Kit Kat chocolate bowl'
    },
    {
        id: 'bowl-8',
        name: 'Strawberry',
        smallPrice: 150,
        largePrice: 250,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
        description: 'Strawberry delight bowl'
    },
    {
        id: 'bowl-9',
        name: 'Mango',
        smallPrice: 180,
        largePrice: 280,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
        description: 'Mango tropical bowl'
    },
    {
        id: 'bowl-10',
        name: 'Kunafa',
        smallPrice: 180,
        largePrice: 280,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
        description: 'Kunafa middle eastern bowl'
    },
    {
        id: 'bowl-11',
        name: 'Blueberry',
        smallPrice: 190,
        largePrice: 290,
        // 📸 IMAGE: Update with your actual image path
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
        description: 'Blueberry burst bowl'
    }
];


// ============================================================
// 🧇 WAFFLES CARD DATA - 🔄 Toggle: Single Serve ↔ Sandwich Serve
// ============================================================
// ⚠️ TODO: Update image paths with your actual waffle images
const waffleItems = [
    {
        id: 'waffle-1',
        name: 'Dark Chocolate',
        // 🔄 TOGGLE PRICES: Single Serve ↔ Sandwich Serve
        singlePrice: 120,
        sandwichPrice: 130,
        // 📸 IMAGE: Has image available
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400',
        description: 'Dark chocolate waffle'
    },
    {
        id: 'waffle-2',
        name: 'Milk Chocolate',
        singlePrice: 130,
        sandwichPrice: 140,
        // 📸 IMAGE: Has image available
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400',
        description: 'Milk chocolate waffle'
    },
    {
        id: 'waffle-3',
        name: 'White Chocolate',
        singlePrice: 140,
        sandwichPrice: 150,
        // 📸 IMAGE: Has image available
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400',
        description: 'White chocolate waffle'
    },
    {
        id: 'waffle-4',
        name: 'Double Chocolate',
        singlePrice: 150,
        sandwichPrice: 140,
        // 📸 IMAGE: Has image available
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400',
        description: 'Double chocolate waffle'
    },
    {
        id: 'waffle-5',
        name: 'Triple Chocolate',
        singlePrice: 140,
        sandwichPrice: 140,
        // 📸 IMAGE: Has image available
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400',
        description: 'Triple chocolate waffle'
    },
    {
        id: 'waffle-6',
        name: 'Biscoff',
        singlePrice: 140,
        sandwichPrice: 160,
        // 📸 IMAGE: Has image available
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400',
        description: 'Biscoff cookie butter waffle'
    },
    {
        id: 'waffle-7',
        name: 'Oreo',
        singlePrice: 140,
        sandwichPrice: 140,
        // 📸 IMAGE: Has image available
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400',
        description: 'Oreo cookie waffle'
    },
    {
        id: 'waffle-8',
        name: 'Kit Kat',
        singlePrice: 140,
        sandwichPrice: 140,
        // 📸 IMAGE: Has image available
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400',
        description: 'Kit Kat waffle'
    },
    {
        id: 'waffle-9',
        name: 'Pistachio',
        singlePrice: 160,
        sandwichPrice: 160,
        // 📸 IMAGE: Has image available
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400',
        description: 'Pistachio waffle'
    },
    {
        id: 'waffle-10',
        name: 'Red Velvet',
        singlePrice: 140,
        sandwichPrice: 140,
        // 📸 IMAGE: Has image available
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400',
        description: 'Red velvet waffle'
    },
    {
        id: 'waffle-11',
        name: 'Ragi, Jaggery',
        singlePrice: 140,
        sandwichPrice: 140,
        // 📸 IMAGE: Has image available
        // ⚠️ TODO: Replace with your image URL
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400',
        description: 'Healthy ragi jaggery waffle'
    }
];


// ============================================================
// 🧁 MINI CAKES CARD DATA - ❌ No images (Using emojis)
// ============================================================
// ⚠️ TODO: Replace emojis with actual image URLs if you get images later
const miniCakeItems = [
    {
        id: 'mini-1',
        name: 'Cup Cake',
        price: 40,
        // 📸 IMAGE: No image available
        image: '🧁', // Emoji placeholder
        // ⚠️ TODO: Replace with image path when available
        description: 'Classic cupcake with buttercream'
    },
    {
        id: 'mini-2',
        name: 'Muffins Cake',
        price: 30,
        image: '🧁', // Emoji placeholder
        // ⚠️ TODO: Replace with image path when available
        description: 'Soft and fluffy muffin'
    },
    {
        id: 'mini-3',
        name: 'Chocolate mini-Cake',
        price: 100,
        image: '🍫', // Emoji placeholder
        // ⚠️ TODO: Replace with image path when available
        description: 'Mini chocolate cake'
    },
    {
        id: 'mini-4',
        name: 'Oreo mini-Cake',
        price: 110,
        image: '🍪', // Emoji placeholder
        // ⚠️ TODO: Replace with image path when available
        description: 'Mini Oreo cake'
    },
    {
        id: 'mini-5',
        name: 'Biscoff mini-Cake',
        price: 110,
        image: '🍪', // Emoji placeholder
        // ⚠️ TODO: Replace with image path when available
        description: 'Mini Biscoff cake'
    },
    {
        id: 'mini-6',
        name: 'Black / White Forest',
        price: 120,
        image: '🍰', // Emoji placeholder
        // ⚠️ TODO: Replace with image path when available
        description: 'Black or white forest mini cake'
    },
    {
        id: 'mini-7',
        name: 'Chocolate truffle mini-Cake',
        price: 130,
        image: '🍫', // Emoji placeholder
        // ⚠️ TODO: Replace with image path when available
        description: 'Rich chocolate truffle mini cake'
    },
    {
        id: 'mini-8',
        name: 'Ras Malai mini-Cake',
        price: 130,
        image: '🍮', // Emoji placeholder
        // ⚠️ TODO: Replace with image path when available
        description: 'Ras malai flavored mini cake'
    }
];


// ============================================================
// 🍪 COOKIE TIN CARD DATA - ✅ Has images
// ============================================================
// ⚠️ TODO: Update image paths with your actual cookie tin images
const cookieTinData = {
    // 📦 Size options for dropdown
    sizes: ['S', 'L'],
    // 🍫 Dark Chocolate percentage options for dropdown
    darkPercentages: ['45%', '70%'],
    // 💰 PRICE MAPPING: [size][percentage] = price
    prices: {
        'S-45%': 250,
        'S-70%': 400,
        'L-45%': 800,
        'L-70%': 1000,
    },
    // 📸 IMAGE: Has image available
    // ⚠️ TODO: Replace with your actual image URL
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400',
    description: 'Premium cookie tin with dark chocolate'
};


// ============================================================
// 🎁 EXTRA VARIETIES CARD DATA - 🟡 Maybe has images
// ============================================================
// ⚠️ TODO: Add image URLs if available, otherwise emojis will be used
const extraVarietyItems = [
    {
        id: 'extra-1',
        name: 'Cheese Cake Cup',
        price: 80,
        // 📸 IMAGE: Maybe available
        // ⚠️ TODO: Replace with your image URL if available
        image: '🧀', // Emoji placeholder (replace if image available)
        description: 'Creamy cheesecake cup'
    },
    {
        id: 'extra-2',
        name: 'Khunafa Chocolate (L)',
        price: 25,
        // 📸 IMAGE: Maybe available
        // ⚠️ TODO: Replace with your image URL if available
        image: '🍫', // Emoji placeholder (replace if image available)
        description: 'Large Khunafa chocolate'
    },
    {
        id: 'extra-3',
        name: 'Khunafa Chocolate (S)',
        price: 80,
        // 📸 IMAGE: Maybe available
        // ⚠️ TODO: Replace with your image URL if available
        image: '🍫', // Emoji placeholder (replace if image available)
        description: 'Small Khunafa chocolate'
    },
    {
        id: 'extra-4',
        name: 'London Strawberry',
        price: 70,
        // 📸 IMAGE: Maybe available
        // ⚠️ TODO: Replace with your image URL if available
        image: '🍓', // Emoji placeholder (replace if image available)
        description: 'London style strawberry dessert'
    }
];


// ============================================================
// 📋 MAIN MENU CARDS (These are the main category cards shown on the menu page)
// ============================================================
// ⚠️ TODO: Each card represents a category that opens a detailed popup
const menuCards = [
    {
        id: 'brownie',
        name: 'Brownie',
        // 📸 IMAGE: No image for category card, using emoji
        image: '🍫',
        description: 'Fudgy, rich, and perfectly baked brownies',
        // Reference to detailed items
        items: brownieItems,
        // Type determines how items are displayed in popup
        type: 'normal' // normal, shake, bowl, waffle, mini-cake, cookie-tin, extra
    },
    {
        id: 'shakes',
        name: 'Shakes',
        // 📸 IMAGE: Category card image
        // ⚠️ TODO: Replace with your category image
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
        description: 'Refreshing and creamy shakes',
        items: shakeItems,
        type: 'shake'
    },
    {
        id: 'bowl',
        name: 'Bowl',
        // 📸 IMAGE: Category card image
        // ⚠️ TODO: Replace with your category image
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
        description: 'Delicious bowls with two sizes (S/L)',
        items: bowlItems,
        type: 'bowl'
    },
    {
        id: 'waffles',
        name: 'Waffles',
        // 📸 IMAGE: Category card image
        // ⚠️ TODO: Replace with your category image
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400',
        description: 'Crispy waffles with single/sandwich serve',
        items: waffleItems,
        type: 'waffle'
    },
    {
        id: 'mini-cakes',
        name: 'Mini Cakes',
        // 📸 IMAGE: No image for category card, using emoji
        image: '🧁',
        description: 'Bite-sized cakes for every occasion',
        items: miniCakeItems,
        type: 'normal'
    },
    {
        id: 'cookie-tin',
        name: 'Cookie Tin',
        // 📸 IMAGE: Category card image
        // ⚠️ TODO: Replace with your category image
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400',
        description: 'Premium cookies with size & dark% options',
        items: null, // Special handling for cookie tin
        type: 'cookie-tin',
        // Special data for cookie tin
        cookieData: cookieTinData
    },
    {
        id: 'extra',
        name: 'Extra Varieties',
        // 📸 IMAGE: Category card image
        // ⚠️ TODO: Replace with your category image
        image: '🎁',
        description: 'Special dessert varieties',
        items: extraVarietyItems,
        type: 'normal'
    }
];


// ============================================================
// 🏷️ SPECIALITY DATA - Keep as is
// ============================================================
const specialityItems = [
    {
        id: 101,
        name: 'Signature Red Velvet',
        price: '₹8.00',
        description: 'Our most-loved cake with cream cheese frosting',
        badge: '⭐ Bestseller',
        image: 'https://images.unsplash.com/photo-1586788224331-947f68671cf1?w=400'
    },
    {
        id: 102,
        name: 'Artisan Croissant Platter',
        price: '₹12.00',
        description: 'Assorted croissants with house-made jams',
        badge: '🥐 Chef\'s Choice',
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400'
    },
    {
        id: 103,
        name: 'Honey Lavender Cake',
        price: '₹9.00',
        description: 'Delicate, floral, and perfectly sweet',
        badge: '🌸 Seasonal',
        image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=400'
    }
];


// ============================================================
// 🖥️ RENDER MENU CARDS
// ============================================================
function renderMenu() {
    const grid = document.getElementById('menuGrid');
    if (!grid) return;
    
    grid.innerHTML = menuCards.map(card => `
        <div class="menu-item" data-id="${card.id}" data-type="${card.type}">
            ${typeof card.image === 'string' && card.image.startsWith('http') ? 
                `<img src="${card.image}" alt="${card.name}" />` :
                `<div class="menu-item-emoji">${card.image}</div>`
            }
            <h4>${card.name}</h4>
            <p class="description">${card.description}</p>
            <button class="view-details-btn" data-id="${card.id}">View Details →</button>
        </div>
    `).join('');

    // 🎯 Add click listeners to view details buttons
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const cardId = this.dataset.id;
            const card = menuCards.find(c => c.id === cardId);
            if (card) {
                openMenuModal(card);
            }
        });
    });

    // Also make the whole card clickable
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            const cardId = this.dataset.id;
            const card = menuCards.find(c => c.id === cardId);
            if (card) {
                openMenuModal(card);
            }
        });
    });
}


// ============================================================
// 🖥️ RENDER SPECIALITY
// ============================================================
function renderSpeciality() {
    const grid = document.getElementById('specialityGrid');
    if (!grid) return;
    
    grid.innerHTML = specialityItems.map(item => `
        <div class="speciality-item" data-name="${item.name.toLowerCase()}">
            <span class="badge">${item.badge}</span>
            <img src="${item.image}" alt="${item.name}" />
            <h4>${item.name}</h4>
            <p class="description">${item.description}</p>
            <p class="price">${item.price}</p>
        </div>
    `).join('');
}


// ============================================================
// 🎯 MENU MODAL - Popup for detailed menu items
// ============================================================
// ⚠️ TODO: This function opens the modal with detailed items for each category

// State for waffle toggle
let isSingleServe = true; // true = Single Serve, false = Sandwich Serve
function openMenuModal(card) {
    const modal = document.getElementById('menuModalOverlay');
    const modalContent = document.querySelector('.menu-modal'); // Get the modal container
    const title = document.getElementById('menuModalTitle');
    const content = document.getElementById('menuModalContent');
    
    title.textContent = card.name;
    
    let html = '';
    
    // 🔄 Different rendering based on card type
    switch(card.type) {
        case 'normal':
            html = renderNormalItems(card.items);
            break;
            
        case 'shake':
            html = renderShakeItems(card.items);
            break;
            
        case 'bowl':
            html = renderBowlItems(card.items);
            break;
            
        case 'waffle':
            html = renderWaffleItems(card.items);
            break;
            
        case 'cookie-tin':
            html = renderCookieTin(card.cookieData);
            break;
            
        default:
            html = '<p>No items available</p>';
    }
    
    content.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // 🎯 SCROLL TO TOP OF MODAL
    // This ensures the popup always opens from the top
    if (modalContent) {
        modalContent.scrollTop = 0;
    }
    
    // 🔄 Setup waffle toggle if it's a waffle card
    if (card.type === 'waffle') {
        setupWaffleToggle(card.items);
    }
    
    // 🍪 Setup cookie tin dropdowns if it's a cookie tin card
    if (card.type === 'cookie-tin') {
        setupCookieTin(card.cookieData);
    }
}


// ============================================================
// 📋 RENDER NORMAL ITEMS (Brownie, Mini Cakes, Extra Varieties)
// ============================================================
function renderNormalItems(items) {
    if (!items || items.length === 0) return '<p>No items available</p>';
    
    return `
        <div class="modal-items-grid">
            ${items.map(item => `
                <div class="modal-item">
                    ${typeof item.image === 'string' && item.image.startsWith('http') ? 
                        `<img src="${item.image}" alt="${item.name}" class="modal-item-img" />` :
                        `<div class="modal-item-emoji">${item.image || '🍰'}</div>`
                    }
                    <div class="modal-item-info">
                        <h4>${item.name}</h4>
                        <p class="modal-item-desc">${item.description || ''}</p>
                        <p class="modal-item-price">₹${item.price}/-</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}


// ============================================================
// 🥤 RENDER SHAKE ITEMS
// ============================================================
function renderShakeItems(items) {
    if (!items || items.length === 0) return '<p>No items available</p>';
    
    return `
        <div class="modal-items-grid">
            ${items.map(item => `
                <div class="modal-item">
                    ${typeof item.image === 'string' && item.image.startsWith('http') ? 
                        `<img src="${item.image}" alt="${item.name}" class="modal-item-img" />` :
                        `<div class="modal-item-emoji">${item.image || '🥤'}</div>`
                    }
                    <div class="modal-item-info">
                        <h4>${item.name}</h4>
                        <p class="modal-item-desc">${item.description || ''}</p>
                        <p class="modal-item-price">₹${item.price}/-</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}


// ============================================================
// 🥣 RENDER BOWL ITEMS (with S/L sizes)
// ============================================================
function renderBowlItems(items) {
    if (!items || items.length === 0) return '<p>No items available</p>';
    
    return `
        <div class="modal-items-grid">
            ${items.map(item => `
                <div class="modal-item">
                    ${typeof item.image === 'string' && item.image.startsWith('http') ? 
                        `<img src="${item.image}" alt="${item.name}" class="modal-item-img" />` :
                        `<div class="modal-item-emoji">${item.image || '🥣'}</div>`
                    }
                    <div class="modal-item-info">
                        <h4>${item.name}</h4>
                        <p class="modal-item-desc">${item.description || ''}</p>
                        <div class="modal-item-sizes">
                            <span class="size-tag">S: ₹${item.smallPrice}/-</span>
                            <span class="size-tag">L: ₹${item.largePrice}/-</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}


// ============================================================
// 🧇 RENDER WAFFLE ITEMS (with toggle)
// ============================================================
// ⚠️ TODO: The toggle switches between Single Serve and Sandwich Serve prices
function renderWaffleItems(items) {
    if (!items || items.length === 0) return '<p>No items available</p>';
    
    // 🔄 Toggle HTML at the top
    const toggleHtml = `
        <div class="waffle-toggle-container">
            <span class="toggle-label ${isSingleServe ? 'active' : ''}" id="singleLabel">Single Serve</span>
            <label class="toggle-switch">
                <input type="checkbox" id="waffleToggle" ${isSingleServe ? '' : 'checked'} />
                <span class="toggle-slider"></span>
            </label>
            <span class="toggle-label ${!isSingleServe ? 'active' : ''}" id="sandwichLabel">Sandwich Serve</span>
        </div>
        <div class="modal-items-grid" id="waffleItemsGrid">
            ${items.map(item => `
                <div class="modal-item waffle-item" data-id="${item.id}">
                    ${typeof item.image === 'string' && item.image.startsWith('http') ? 
                        `<img src="${item.image}" alt="${item.name}" class="modal-item-img" />` :
                        `<div class="modal-item-emoji">${item.image || '🧇'}</div>`
                    }
                    <div class="modal-item-info">
                        <h4>${item.name}</h4>
                        <p class="modal-item-desc">${item.description || ''}</p>
                        <p class="modal-item-price" data-single="${item.singlePrice}" data-sandwich="${item.sandwichPrice}">
                            ₹${isSingleServe ? item.singlePrice : item.sandwichPrice}/-
                        </p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    return toggleHtml;
}


// ============================================================
// 🔄 SETUP WAFFLE TOGGLE
// ============================================================
function setupWaffleToggle(items) {
    const toggle = document.getElementById('waffleToggle');
    if (!toggle) return;
    
    toggle.addEventListener('change', function() {
        isSingleServe = !this.checked;
        
        // Update labels
        const singleLabel = document.getElementById('singleLabel');
        const sandwichLabel = document.getElementById('sandwichLabel');
        if (singleLabel) singleLabel.classList.toggle('active', isSingleServe);
        if (sandwichLabel) sandwichLabel.classList.toggle('active', !isSingleServe);
        
        // Update all prices
        const priceElements = document.querySelectorAll('.waffle-item .modal-item-price');
        priceElements.forEach(el => {
            const singlePrice = el.dataset.single;
            const sandwichPrice = el.dataset.sandwich;
            el.textContent = `₹${isSingleServe ? singlePrice : sandwichPrice}/-`;
        });
    });
}


// ============================================================
// 🍪 RENDER COOKIE TIN (with dropdowns)
// ============================================================
function renderCookieTin(data) {
    if (!data) return '<p>No data available</p>';
    
    // Get initial price
    const defaultSize = data.sizes[0]; // 'S'
    const defaultDark = data.darkPercentages[0]; // '45%'
    const initialPrice = data.prices[`${defaultSize}-${defaultDark}`] || 0;
    
    return `
        <div class="cookie-tin-container">
            <div class="cookie-tin-image-wrapper">
                <img src="${data.image}" alt="Cookie Tin" class="cookie-tin-main-img" />
                <p class="cookie-tin-desc">${data.description || ''}</p>
            </div>
            <div class="cookie-tin-controls">
                <div class="cookie-tin-dropdown-group">
                    <label for="cookieSize">📦 Size:</label>
                    <select id="cookieSize" class="cookie-tin-select">
                        ${data.sizes.map(size => `
                            <option value="${size}">${size}</option>
                        `).join('')}
                    </select>
                </div>
                <div class="cookie-tin-dropdown-group">
                    <label for="cookieDark">🍫 Dark %:</label>
                    <select id="cookieDark" class="cookie-tin-select">
                        ${data.darkPercentages.map(dark => `
                            <option value="${dark}">${dark}</option>
                        `).join('')}
                    </select>
                </div>
                <div class="cookie-tin-price-display">
                    <p class="cookie-tin-total-price">₹${initialPrice}/-</p>
                    <p class="cookie-tin-price-label">Selected Price</p>
                </div>
            </div>
        </div>
    `;
}


// ============================================================
// 🍪 SETUP COOKIE TIN DROPDOWNS
// ============================================================
function setupCookieTin(data) {
    const sizeSelect = document.getElementById('cookieSize');
    const darkSelect = document.getElementById('cookieDark');
    const priceDisplay = document.querySelector('.cookie-tin-total-price');
    
    if (!sizeSelect || !darkSelect || !priceDisplay) return;
    
    function updatePrice() {
        const size = sizeSelect.value;
        const dark = darkSelect.value;
        const price = data.prices[`${size}-${dark}`] || 0;
        priceDisplay.textContent = `₹${price}/-`;
    }
    
    sizeSelect.addEventListener('change', updatePrice);
    darkSelect.addEventListener('change', updatePrice);
}


// ============================================================
// 🔍 SEARCH FUNCTIONALITY (Updated to search new items)
// ============================================================
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// 📊 Combine ALL items for search
// ⚠️ TODO: Add new categories here if you add more
const allSearchItems = [
    ...brownieItems.map(i => ({ ...i, category: 'Brownie' })),
    ...shakeItems.map(i => ({ ...i, category: 'Shakes' })),
    ...bowlItems.map(i => ({ ...i, category: 'Bowl' })),
    ...waffleItems.map(i => ({ ...i, category: 'Waffles' })),
    ...miniCakeItems.map(i => ({ ...i, category: 'Mini Cakes' })),
    ...extraVarietyItems.map(i => ({ ...i, category: 'Extra Varieties' })),
    ...specialityItems.map(i => ({ ...i, category: 'Speciality' }))
];

function performSearch(query) {
    const trimmed = query.trim().toLowerCase();
    
    if (!trimmed) {
        searchResults.innerHTML = '<p class="no-results">Start typing to search for items...</p>';
        return;
    }
    
    const results = allSearchItems.filter(item => 
        item.name.toLowerCase().includes(trimmed) ||
        (item.description && item.description.toLowerCase().includes(trimmed)) ||
        (item.category && item.category.toLowerCase().includes(trimmed))
    );
    
    if (results.length === 0) {
        searchResults.innerHTML = `
            <p class="no-results">😕 No items found for "<strong>${query}</strong>"</p>
            <p class="no-results" style="font-size:0.9rem;">Try searching for cake, shake, waffle, or a specific name</p>
        `;
        return;
    }
    
    searchResults.innerHTML = results.map(item => `
        <div class="search-result-item" data-name="${item.name}" data-category="${item.category}">
            <h4>${item.name}</h4>
            <p>${item.description || ''} — ${item.price ? '₹' + item.price : ''}</p>
            <p style="font-size:0.8rem;color:#E8A87C;">${item.category || ''}</p>
        </div>
    `).join('');
    
    // Add click to scroll to menu section
    document.querySelectorAll('.search-result-item').forEach(el => {
        el.addEventListener('click', function() {
            const name = this.dataset.name;
            closeSearch();
            
            // Scroll to menu section
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
            
            // Try to find and highlight the menu card
            setTimeout(() => {
                const menuItems = document.querySelectorAll('.menu-item');
                menuItems.forEach(item => {
                    const itemName = item.querySelector('h4')?.textContent;
                    const card = menuCards.find(c => c.name === itemName);
                    if (card && card.items) {
                        const found = card.items.some(i => i.name === name);
                        if (found) {
                            item.style.transition = 'all 0.3s ease';
                            item.style.boxShadow = '0 0 0 3px #E8A87C, 0 8px 30px rgba(232,168,124,0.3)';
                            setTimeout(() => {
                                item.style.boxShadow = '';
                            }, 3000);
                            // Open the modal for this card
                            openMenuModal(card);
                        }
                    }
                });
            }, 500);
        });
    });
}

// Search with debounce
let searchTimeout;
searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        performSearch(this.value);
    }, 300);
});

// Open search
searchBtn.addEventListener('click', function() {
    searchOverlay.classList.add('active');
    searchInput.value = '';
    searchResults.innerHTML = '<p class="no-results">Start typing to search for items...</p>';
    setTimeout(() => searchInput.focus(), 100);
    document.body.style.overflow = 'hidden';
});

// Close search
function closeSearch() {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

searchClose.addEventListener('click', closeSearch);
searchOverlay.addEventListener('click', function(e) {
    if (e.target === this) closeSearch();
});

// Close on Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeSearch();
});


// ============================================================
// 🔗 MODAL CLOSE FUNCTIONALITY
// ============================================================
const modalOverlay = document.getElementById('menuModalOverlay');
const modalClose = document.getElementById('menuModalClose');

function closeMenuModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (modalClose) {
    modalClose.addEventListener('click', closeMenuModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === this) closeMenuModal();
    });
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMenuModal();
        closeSearch();
    }
});


// ============================================================
// 🔗 SMOOTH SCROLL FOR NAV LINKS
// ============================================================
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            document.getElementById('navLinks').classList.remove('open');
        }
    });
});


// ============================================================
// 📱 MOBILE HAMBURGER
// ============================================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});


// ============================================================
// 📧 CONTACT FORM
// ============================================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We\'ll get back to you soon. 🧁');
        this.reset();
    });
}


// ============================================================
// 🚀 INITIALIZE
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    renderMenu();
    renderSpeciality();
    console.log('🍰 Just Yummy Bakery — Baked with love!');
    console.log('📸 TIP: Replace image URLs in the data arrays above');
    console.log('📝 Each category has TODO comments for image updates');
});