import { useEffect, useRef, useState } from "react";

function Collections() {
    const sectionsRef = useRef([]);
    const filterRef = useRef([]);
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredCollections, setFilteredCollections] = useState([]); // Start empty

    const setRefs = (el, i) => {
        sectionsRef.current[i] = el;
    };

    const setFilterRefs = (el, i) => {
        filterRef.current[i] = el;
    };

    // Collections data organized by categories
    const collections = [
        // Living Room Collection
        {
            id: 1,
            category: 'living',
            title: 'Cozy Sanctuary',
            subtitle: 'Modern Living Collection',
            description: 'Transform your living space into a warm, inviting sanctuary with plush textures and earthy tones.',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            items: ['Sectional Sofas', 'Coffee Tables', 'Area Rugs', 'Floor Lamps'],
            style: 'Contemporary'
        },
        {
            id: 2,
            category: 'living',
            title: 'Maximalist Joy',
            subtitle: 'Bold Living Collection',
            description: 'Embrace vibrant patterns and rich textures for a living room that celebrates your personality.',
            image: 'https://images.unsplash.com/photo-1631889993959-41b4f2746ddf?auto=format&fit=crop&w=800&q=80',
            items: ['Statement Chairs', 'Gallery Walls', 'Patterned Pillows', 'Vintage Accents'],
            style: 'Maximalist'
        },
        
        // Bedroom Collection
        {
            id: 3,
            category: 'bedroom',
            title: 'Serene Retreat',
            subtitle: 'Bedroom Sanctuary Collection',
            description: 'Create a peaceful bedroom oasis with natural materials and calming color palettes.',
            image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
            items: ['Platform Beds', 'Organic Bedding', 'Nightstands', 'Reading Nooks'],
            style: 'Biophilic'
        },
        {
            id: 4,
            category: 'bedroom',
            title: 'Vintage Romance',
            subtitle: 'Classic Bedroom Collection',
            description: 'Timeless elegance meets modern comfort in this vintage-inspired bedroom collection.',
            image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
            items: ['Ornate Headboards', 'Antique Mirrors', 'Velvet Curtains', 'Crystal Chandeliers'],
            style: 'Vintage'
        },

        // Kitchen Collection
        {
            id: 5,
            category: 'kitchen',
            title: 'Chef\'s Paradise',
            subtitle: 'Modern Kitchen Collection',
            description: 'Functional meets beautiful in this contemporary kitchen collection designed for culinary enthusiasts.',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
            items: ['Kitchen Islands', 'Pendant Lighting', 'Bar Stools', 'Storage Solutions'],
            style: 'Contemporary'
        },
        {
            id: 6,
            category: 'kitchen',
            title: 'Rustic Charm',
            subtitle: 'Farmhouse Kitchen Collection',
            description: 'Bring warmth and character to your kitchen with rustic elements and natural textures.',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
            items: ['Wooden Cabinets', 'Farmhouse Sinks', 'Open Shelving', 'Mason Jar Lighting'],
            style: 'Rustic'
        },

        // Bathroom Collection
        {
            id: 7,
            category: 'bathroom',
            title: 'Spa Sanctuary',
            subtitle: 'Luxury Bathroom Collection',
            description: 'Transform your bathroom into a spa-like retreat with premium fixtures and calming elements.',
            image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80',
            items: ['Freestanding Tubs', 'Rain Showers', 'Natural Stone', 'Ambient Lighting'],
            style: 'Modern Luxury'
        },
        {
            id: 8,
            category: 'bathroom',
            title: 'Minimal Zen',
            subtitle: 'Minimalist Bathroom Collection',
            description: 'Clean lines and natural materials create a serene, clutter-free bathroom experience.',
            image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80',
            items: ['Floating Vanities', 'Vessel Sinks', 'Bamboo Accents', 'Soft Textiles'],
            style: 'Minimalist'
        },

        // Outdoor Collection
        {
            id: 9,
            category: 'outdoor',
            title: 'Garden Paradise',
            subtitle: 'Outdoor Living Collection',
            description: 'Extend your living space outdoors with weather-resistant furniture and natural elements.',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
            items: ['Patio Sets', 'Fire Features', 'Outdoor Rugs', 'Garden Planters'],
            style: 'Outdoor Living'
        }
    ];

    const categories = [
        { name: 'All Collections', value: 'all', icon: '🏠' },
        { name: 'Living Room', value: 'living', icon: '🛋️' },
        { name: 'Bedroom', value: 'bedroom', icon: '🛏️' },
        { name: 'Kitchen', value: 'kitchen', icon: '🍳' },
        { name: 'Bathroom', value: 'bathroom', icon: '🛁' },
        { name: 'Outdoor', value: 'outdoor', icon: '🌿' }
    ];

    useEffect(() => {
        // Page load sequence animation
        const animatePageLoad = async () => {
            // Step 1: Show categories first (with delay between each)
            for (let i = 0; i < filterRef.current.length; i++) {
                const button = filterRef.current[i];
                if (button) {
                    button.style.opacity = '0';
                    button.style.transform = 'translateY(-30px)';
                    button.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                    
                    setTimeout(() => {
                        button.style.opacity = '1';
                        button.style.transform = 'translateY(0)';
                    }, i * 150); // 150ms delay between each category
                }
            }

            // Step 2: Wait for categories to finish, then show collections
            const categoriesAnimationDuration = filterRef.current.length * 150 + 600; // Total category animation time
            
            setTimeout(() => {
                setFilteredCollections(collections);
                
                // Animate collection cards with stagger
                setTimeout(() => {
                    const cards = document.querySelectorAll('.collection-card');
                    cards.forEach((card, index) => {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(60px)';
                        card.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                        
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 100); // 100ms delay between each card
                    });
                }, 100);
            }, categoriesAnimationDuration);

            // Step 3: Setup scroll animations for other sections after initial load
            setTimeout(() => {
                const observerOptions = {
                    threshold: 0.1,
                    rootMargin: '0px 0px -20px 0px'
                };

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }
                    });
                }, observerOptions);

                // Observe sections (excluding the collections section which is already animated)
                sectionsRef.current.forEach((section, index) => {
                    if (section && index !== 2) { // Skip collections section (index 2)
                        section.style.opacity = '0';
                        section.style.transform = 'translateY(60px)';
                        section.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out';
                        observer.observe(section);
                    }
                });

                return () => observer.disconnect();
            }, categoriesAnimationDuration + 500);
        };

        animatePageLoad();
    }, []);

    const handleFilterChange = (category) => {
        setActiveFilter(category);
        
        // Filter collections
        const filtered = category === 'all' 
            ? collections 
            : collections.filter(collection => collection.category === category);
        
        // CSS animation for collection cards
        const cards = document.querySelectorAll('.collection-card');
        cards.forEach((card, index) => {
            card.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
        });

        setTimeout(() => {
            setFilteredCollections(filtered);
            
            setTimeout(() => {
                const newCards = document.querySelectorAll('.collection-card');
                newCards.forEach((card, index) => {
                    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }, 50);
        }, 300);
    };

    return (
        <div className="bg-[#F8F5F0] min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section ref={(el) => setRefs(el, 0)} className="relative min-h-screen bg-gradient-to-br from-[#8B5E3C] via-[#A67C52] to-[#C19A6B] flex items-center justify-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full" style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, white 2px, transparent 2px),
                                        radial-gradient(circle at 70% 20%, white 1px, transparent 1px),
                                        radial-gradient(circle at 80% 80%, white 1px, transparent 1px)`,
                        backgroundSize: '100px 100px, 150px 150px, 120px 120px'
                    }}></div>
                </div>

                {/* Main Content */}
                <div className="relative text-center text-white z-10 max-w-6xl mx-auto px-6">
                    <div className="mb-8">
                        <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium mb-6">
                            ✨ Premium Interior Collections
                        </span>
                        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                            Curated
                            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                                Collections
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed opacity-90">
                            Discover handpicked design collections that transform every corner of your home into a masterpiece of style and comfort
                        </p>
                    </div>

                    {/* Stats or Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <div className="text-sm uppercase tracking-wider opacity-80">Unique Collections</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">5</div>
                            <div className="text-sm uppercase tracking-wider opacity-80">Room Categories</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">∞</div>
                            <div className="text-sm uppercase tracking-wider opacity-80">Design Possibilities</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-[#8B5E3C] px-8 py-4 rounded-full font-bold hover:bg-white/90 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            Explore Collections
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#8B5E3C] transition-all duration-300">
                            View Inspiration
                        </button>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 md:left-20">
                    <div className="w-20 h-20 md:w-32 md:h-32 border-2 border-white/30 rounded-full animate-pulse"></div>
                    <div className="w-12 h-12 md:w-20 md:w-20 bg-white/10 rounded-full absolute top-2 left-2 animate-bounce"></div>
                </div>
                
                <div className="absolute bottom-20 right-10 md:right-20">
                    <div className="w-16 h-16 md:w-24 md:h-24 border-2 border-white/20 rounded-full animate-pulse delay-1000"></div>
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-white/10 rounded-full absolute top-1 left-1 animate-bounce delay-500"></div>
                </div>

                <div className="absolute top-1/3 right-10 md:right-32">
                    <div className="w-6 h-6 md:w-10 md:h-10 bg-white/20 rotate-45 animate-spin delay-700" style={{animationDuration: '8s'}}></div>
                </div>

                <div className="absolute bottom-1/3 left-10 md:left-32">
                    <div className="w-8 h-8 md:w-14 md:h-14 border-2 border-white/25 rotate-45 animate-pulse delay-300"></div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
                    <div className="flex flex-col items-center">
                        <span className="text-sm mb-2">Scroll to explore</span>
                        <div className="w-6 h-10 border-2 border-white/50 rounded-full relative">
                            <div className="w-1 h-3 bg-white/70 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
                        </div>
                    </div>
                </div>

                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
            </section>

            {/* Filter Navigation */}
            <section ref={(el) => setRefs(el, 1)} className="py-12 px-6 md:px-12 sticky top-20 bg-[#F8F5F0]/95 backdrop-blur-sm z-40 border-b-2 border-[#C19A6B]/20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category, index) => (
                            <button
                                key={category.value}
                                ref={(el) => setFilterRefs(el, index)}
                                onClick={() => handleFilterChange(category.value)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                                    activeFilter === category.value
                                        ? 'bg-[#8B5E3C] text-white shadow-lg'
                                        : 'bg-white text-[#8B5E3C] hover:bg-[#C19A6B] hover:text-white'
                                }`}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Collections Grid */}
            <section ref={(el) => setRefs(el, 2)} className="py-16 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCollections.map((collection, index) => (
                            <div
                                key={collection.id}
                                className="collection-card group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={collection.image}
                                        alt={collection.title}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute top-4 right-4 bg-[#8B5E3C] text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {collection.style}
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <div className="mb-3">
                                        <h3 className="text-2xl font-bold text-[#2E2E2E] mb-1">
                                            {collection.title}
                                        </h3>
                                        <p className="text-[#8B5E3C] font-medium">
                                            {collection.subtitle}
                                        </p>
                                    </div>
                                    
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {collection.description}
                                    </p>
                                    
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-[#8B5E3C] mb-2">
                                            Featured Items:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {collection.items.map((item, itemIndex) => (
                                                <span
                                                    key={itemIndex}
                                                    className="bg-[#F8F5F0] text-[#2E2E2E] px-3 py-1 rounded-full text-sm"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <button className="w-full bg-gradient-to-r from-[#8B5E3C] to-[#C19A6B] text-white py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                        Explore Collection
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Inspiration Section */}
            <section ref={(el) => setRefs(el, 3)} className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-4xl font-bold text-[#2E2E2E] mb-4">
                        Design Inspiration
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        Get inspired by the latest trends in interior design and discover how our collections can transform your space
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                trend: "Biophilic Design",
                                description: "Bringing nature indoors with organic materials and natural elements",
                                image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=600&q=80"
                            },
                            {
                                trend: "Maximalist Decor",
                                description: "Bold patterns and rich textures that celebrate personal style",
                                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80"
                            },
                            {
                                trend: "Vintage Revival",
                                description: "Ornate details and antique pieces for timeless elegance",
                                image: "https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&w=600&q=80"
                            }
                        ].map((inspiration, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative rounded-2xl overflow-hidden mb-4">
                                    <img
                                        src={inspiration.image}
                                        alt={inspiration.trend}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>
                                <h3 className="text-xl font-bold text-[#8B5E3C] mb-2">
                                    {inspiration.trend}
                                </h3>
                                <p className="text-gray-600">
                                    {inspiration.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section ref={(el) => setRefs(el, 4)} className="py-16 bg-gradient-to-r from-[#8B5E3C] to-[#C19A6B] text-white text-center">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <h2 className="text-4xl font-bold mb-4">
                        Ready to Transform Your Space?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Let our design experts help you create the perfect look with our curated collections
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-[#8B5E3C] px-8 py-4 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            Schedule Consultation
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#8B5E3C] transition-all duration-300">
                            Browse All Products
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Collections;