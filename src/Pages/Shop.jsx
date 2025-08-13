import { useRef, useState, useEffect } from "react";

export default function Shop() {
  const sectionsRef = useRef([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const setRefs = (el, i) => {
    sectionsRef.current[i] = el;
  };

  // Comprehensive product data
  const products = [
    // Living Room Furniture
    {
      id: 1,
      name: "Modern Sectional Sofa",
      category: "furniture",
      subcategory: "living-room",
      price: 1299,
      originalPrice: 1599,
      rating: 4.8,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
      badge: "Best Seller",
      description: "Comfortable 3-seater sectional sofa with premium fabric upholstery"
    },
    {
      id: 2,
      name: "Coffee Table Set",
      category: "furniture",
      subcategory: "living-room",
      price: 450,
      rating: 4.5,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=600&q=80",
      description: "Elegant wooden coffee table with matching side tables"
    },
    {
      id: 3,
      name: "Accent Armchair",
      category: "furniture",
      subcategory: "living-room",
      price: 680,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80",
      badge: "New Arrival",
      description: "Stylish velvet accent chair perfect for any modern living space"
    },

    // Bedroom Furniture
    {
      id: 4,
      name: "Platform Bed Frame",
      category: "furniture",
      subcategory: "bedroom",
      price: 850,
      rating: 4.6,
      reviews: 198,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80",
      description: "Minimalist platform bed with built-in nightstands"
    },
    {
      id: 5,
      name: "Wooden Dresser",
      category: "furniture",
      subcategory: "bedroom",
      price: 520,
      rating: 4.4,
      reviews: 76,
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?auto=format&fit=crop&w=600&q=80",
      description: "6-drawer solid wood dresser with elegant brass handles"
    },

    // Kitchen & Dining
    {
      id: 6,
      name: "Dining Table Set",
      category: "furniture",
      subcategory: "dining",
      price: 950,
      rating: 4.7,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=600&q=80",
      badge: "Popular",
      description: "4-seater dining table with matching chairs in oak finish"
    },
    {
      id: 7,
      name: "Bar Stool Set",
      category: "furniture",
      subcategory: "dining",
      price: 320,
      rating: 4.3,
      reviews: 92,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
      description: "Adjustable height bar stools with backrest - Set of 2"
    },

    // Wall Decor
    {
      id: 8,
      name: "Abstract Canvas Art",
      category: "decor",
      subcategory: "wall-art",
      price: 180,
      rating: 4.5,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=600&q=80",
      description: "Large abstract painting perfect for modern interiors"
    },
    {
      id: 9,
      name: "Decorative Mirror",
      category: "decor",
      subcategory: "wall-art",
      price: 240,
      rating: 4.8,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=600&q=80",
      badge: "Editor's Choice",
      description: "Round sunburst mirror with golden metallic frame"
    },
    {
      id: 10,
      name: "Gallery Wall Set",
      category: "decor",
      subcategory: "wall-art",
      price: 120,
      rating: 4.4,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=600&q=80",
      description: "Set of 6 framed botanical prints for gallery wall display"
    },

    // Home Accessories
    {
      id: 11,
      name: "Ceramic Vase Collection",
      category: "accessories",
      subcategory: "decorative",
      price: 85,
      rating: 4.6,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80",
      description: "Set of 3 modern ceramic vases in neutral tones"
    },
    {
      id: 12,
      name: "Throw Pillow Set",
      category: "accessories",
      subcategory: "textiles",
      price: 65,
      rating: 4.5,
      reviews: 178,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
      description: "Luxury velvet throw pillows - Set of 4 in assorted colors"
    },
    {
      id: 13,
      name: "Woven Area Rug",
      category: "accessories",
      subcategory: "textiles",
      price: 280,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
      badge: "Trending",
      description: "Hand-woven area rug with geometric pattern - 8x10 ft"
    },

    // Lighting
    {
      id: 14,
      name: "Pendant Light Fixture",
      category: "lighting",
      subcategory: "ceiling",
      price: 195,
      rating: 4.4,
      reviews: 94,
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=600&q=80",
      description: "Modern brass pendant light with glass shade"
    },
    {
      id: 15,
      name: "Floor Lamp",
      category: "lighting",
      subcategory: "floor",
      price: 165,
      rating: 4.6,
      reviews: 112,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      description: "Minimalist arc floor lamp with marble base"
    },
    {
      id: 16,
      name: "Table Lamp Set",
      category: "lighting",
      subcategory: "table",
      price: 125,
      rating: 4.5,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80",
      description: "Ceramic table lamps with linen shades - Set of 2"
    },

    // Outdoor & Patio
    {
      id: 17,
      name: "Patio Dining Set",
      category: "outdoor",
      subcategory: "furniture",
      price: 750,
      rating: 4.5,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
      badge: "Weather Resistant",
      description: "4-piece outdoor dining set with weather-resistant finish"
    },
    {
      id: 18,
      name: "Outdoor Lounge Chair",
      category: "outdoor",
      subcategory: "furniture",
      price: 380,
      rating: 4.6,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=600&q=80",
      description: "Comfortable rattan lounge chair with weather-resistant cushions"
    }
  ];

  const categories = [
    { name: "All Products", value: "all", icon: "🏠", count: products.length },
    { name: "Furniture", value: "furniture", icon: "🛋️", count: products.filter(p => p.category === 'furniture').length },
    { name: "Decor", value: "decor", icon: "🎨", count: products.filter(p => p.category === 'decor').length },
    { name: "Accessories", value: "accessories", icon: "🏺", count: products.filter(p => p.category === 'accessories').length },
    { name: "Lighting", value: "lighting", icon: "💡", count: products.filter(p => p.category === 'lighting').length },
    { name: "Outdoor", value: "outdoor", icon: "🌿", count: products.filter(p => p.category === 'outdoor').length }
  ];

  const sortOptions = [
    { name: "Featured", value: "featured" },
    { name: "Price: Low to High", value: "price-asc" },
    { name: "Price: High to Low", value: "price-desc" },
    { name: "Highest Rated", value: "rating" },
    { name: "Most Reviews", value: "reviews" }
  ];

  useEffect(() => {
    // Filter and sort products
    let filtered = activeCategory === 'all' 
      ? products 
      : products.filter(product => product.category === activeCategory);

    // Apply price filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Apply sorting
    switch(sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        // Featured - keep original order
        break;
    }

    setFilteredProducts(filtered);

    // Animate sections on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [activeCategory, sortBy, priceRange]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="bg-[#F8F5F0] min-h-screen">
      {/* Hero Section */}
      <section ref={(el) => setRefs(el, 0)} className="relative py-20 bg-gradient-to-r from-[#8B5E3C] to-[#C19A6B] text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Shop Our Collection
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
            Discover handpicked furniture, decor items, and accessories that transform any space into your dream home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-sm font-medium">🚚 Free shipping on orders over $500</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-sm font-medium">↩️ 30-day return policy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Sort Bar */}
      <section ref={(el) => setRefs(el, 1)} className="sticky top-20 bg-white shadow-md z-40 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-4">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => handleCategoryChange(category.value)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-md ${
                  activeCategory === category.value
                    ? 'bg-[#8B5E3C] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-[#C19A6B] hover:text-white'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Sort & Price Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-600 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-600 font-medium">Price Range:</span>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-24"
                />
                <span className="text-sm text-gray-600 whitespace-nowrap">
                  $0 - ${priceRange[1]}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 text-gray-600">
            Showing {filteredProducts.length} products
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={(el) => setRefs(el, 2)} className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Badges */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-[#8B5E3C] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.badge}
                    </div>
                  )}
                  
                  {product.originalPrice && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      SALE
                    </div>
                  )}

                  {/* Quick Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <button className="bg-white text-[#8B5E3C] p-3 rounded-full hover:bg-[#8B5E3C] hover:text-white transition-colors">
                        👁️
                      </button>
                      <button className="bg-white text-[#8B5E3C] p-3 rounded-full hover:bg-[#8B5E3C] hover:text-white transition-colors">
                        🤍
                      </button>
                      <button className="bg-[#8B5E3C] text-white p-3 rounded-full hover:bg-[#C19A6B] transition-colors">
                        🛒
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#2E2E2E] mb-2 group-hover:text-[#8B5E3C] transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(product.rating) ? "★" : "☆"}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-[#8B5E3C]">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <button className="bg-gradient-to-r from-[#8B5E3C] to-[#C19A6B] text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-white border-2 border-[#8B5E3C] text-[#8B5E3C] px-8 py-3 rounded-full font-bold hover:bg-[#8B5E3C] hover:text-white transition-all duration-300 transform hover:scale-105">
              Load More Products
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={(el) => setRefs(el, 3)} className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center text-[#2E2E2E] mb-12">
            Why Shop With DECORE?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: "🚚",
                title: "Free Shipping",
                description: "Free delivery on orders over $500 nationwide"
              },
              {
                icon: "💯",
                title: "Quality Guarantee",
                description: "Premium materials and craftsmanship in every piece"
              },
              {
                icon: "↩️",
                title: "Easy Returns",
                description: "30-day hassle-free return policy on all items"
              },
              {
                icon: "🎨",
                title: "Design Consultation",
                description: "Free design consultation with your purchases"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#8B5E3C] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section ref={(el) => setRefs(el, 4)} className="py-16 bg-gradient-to-r from-[#8B5E3C] to-[#C19A6B] text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Stay Updated with DECORE
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get exclusive access to new arrivals, sales, and design inspiration
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-[#8B5E3C] px-6 py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm mt-4 opacity-75">
            By subscribing, you agree to receive marketing emails from DECORE. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}