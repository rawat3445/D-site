import { useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Heart,
  Share2,
  Eye,
  Palette,
  Home,
  Lightbulb,
  Sofa,
  Search,
  Filter,
  Star,
  SlidersHorizontal,
  Mail,
  Download,
} from "lucide-react";

/**
 * Interior Ideas – Expanded, Long-Scroll Experience with Quiz
 * - Bigger dataset (30 items)
 * - Category overview with counts
 * - Search + sort + filters
 * - Load more pagination for long scroll
 * - Favorites persisted to localStorage
 * - Card details drawer + share
 * - Tips & Insights section
 * - Before/After slider
 * - Style Quiz with scored result + recommendations
 * - Newsletter CTA + downloadable guide placeholder
 */

export default function Interior() {
  const pageRef = useRef(null);

  // --- Favorites persisted ---
  const [favorites, setFavorites] = useState(() => {
    try {
      const raw = localStorage.getItem("interior_favs");
      return new Set(raw ? JSON.parse(raw) : []);
    } catch (e) {
      return new Set();
    }
  });
  useEffect(() => {
    localStorage.setItem("interior_favs", JSON.stringify([...favorites]));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  // --- Data ---
  const ideas = useMemo(
    () => [
      // Colors
      {
        id: 1,
        title: "Color Drenching",
        category: "color",
        description:
          "Immerse entire rooms in a single color palette for dramatic, cohesive impact.",
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
        trending: true,
        views: 2300,
        difficulty: "Medium",
        budget: "$$",
        tips: ["Choose one hue, vary saturation", "Keep trim + ceiling same tone"],
      },
      {
        id: 2,
        title: "Earthy Brown Tones",
        category: "color",
        description:
          "Warm, grounding browns creating cozy and sophisticated spaces.",
        image:
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&h=900&fit=crop",
        trending: true,
        views: 5200,
        difficulty: "Easy",
        budget: "$",
        tips: ["Pair with linen + jute", "Use warm white lighting"],
      },
      {
        id: 3,
        title: "Bold Accent Walls",
        category: "color",
        description:
          "Statement walls with vibrant colors or dramatic patterns.",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=900&fit=crop",
        trending: true,
        views: 4600,
        difficulty: "Easy",
        budget: "$",
        tips: ["Test swatches at night", "Balance with neutrals around"],
      },

      // Style
      {
        id: 4,
        title: "Quiet Luxury",
        category: "style",
        description:
          "Understated elegance with premium materials and subtle sophistication.",
        image:
          "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=1200&h=900&fit=crop",
        trending: true,
        views: 4100,
        difficulty: "Medium",
        budget: "$$$",
        tips: ["Limit palette", "Invest in 1–2 hero pieces"],
      },
      {
        id: 5,
        title: "Textured Maximalism",
        category: "style",
        description:
          "Layered textures and patterns for rich, tactile environments.",
        image:
          "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&h=900&fit=crop",
        trending: true,
        views: 2800,
        difficulty: "Hard",
        budget: "$$",
        tips: ["Repeat colors", "Balance large/small patterns"],
      },
      {
        id: 6,
        title: "Vintage Modern Mix",
        category: "style",
        description:
          "Blend nostalgic pieces with contemporary elements for unique character.",
        image:
          "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1200&h=900&fit=crop",
        trending: false,
        views: 2100,
        difficulty: "Medium",
        budget: "$",
        tips: ["One era per room", "Reupholster to unify palette"],
      },

      // Materials
      {
        id: 7,
        title: "Natural Stone Features",
        category: "materials",
        description:
          "Travertine, marble, and natural textures taking center stage.",
        image:
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=900&fit=crop",
        trending: true,
        views: 3700,
        difficulty: "Medium",
        budget: "$$$",
        tips: ["Seal stone", "Mix honed + polished finishes"],
      },
      {
        id: 8,
        title: "Artisanal Textures",
        category: "materials",
        description:
          "Handcrafted elements like woven baskets, ceramics, and natural fibers.",
        image:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=900&fit=crop",
        trending: true,
        views: 3300,
        difficulty: "Easy",
        budget: "$",
        tips: ["Mix 3 textures", "Add one sculptural piece"],
      },

      // Wellness
      {
        id: 9,
        title: "Sanctuary Spaces",
        category: "wellness",
        description:
          "Create peaceful retreat areas for mental well‑being and relaxation.",
        image:
          "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=1200&h=900&fit=crop",
        trending: true,
        views: 6100,
        difficulty: "Easy",
        budget: "$",
        tips: ["Add sound dampening", "Warm dimmable lights"],
      },
      {
        id: 10,
        title: "Biophilic Design",
        category: "wellness",
        description:
          "Integrate nature through plants, natural light, and organic materials.",
        image:
          "https://images.unsplash.com/photo-1493663284031-b7e3aaa4cab7?w=1200&h=900&fit=crop",
        trending: false,
        views: 3400,
        difficulty: "Easy",
        budget: "$",
        tips: ["Cluster plants", "Use sheer curtains for light"],
      },

      // Furniture
      {
        id: 11,
        title: "Curved Furniture",
        category: "furniture",
        description:
          "Soft, organic shapes bringing warmth and flow to modern interiors.",
        image:
          "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200&h=900&fit=crop",
        trending: false,
        views: 1900,
        difficulty: "Easy",
        budget: "$$",
        tips: ["Contrast with angular tables", "Keep circulation clear"],
      },
      {
        id: 12,
        title: "Low‑Profile Seating",
        category: "furniture",
        description:
          "Create loungey silhouettes that emphasize horizontal lines and calm.",
        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=900&fit=crop",
        trending: true,
        views: 2500,
        difficulty: "Easy",
        budget: "$$",
        tips: ["Use plush rugs", "Add layered cushions"],
      },

      // Functionality
      {
        id: 13,
        title: "Smart Storage Solutions",
        category: "functionality",
        description:
          "Hidden storage that maintains clean aesthetics while maximizing space.",
        image:
          "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=1200&h=900&fit=crop",
        trending: false,
        views: 1700,
        difficulty: "Medium",
        budget: "$$",
        tips: ["Toe‑kick drawers", "Lift‑up coffee tables"],
      },
      {
        id: 14,
        title: "Modular Partitions",
        category: "functionality",
        description:
          "Flexible room dividers to zone spaces without permanent walls.",
        image:
          "https://images.unsplash.com/photo-1616596876678-2a6323a3e3bd?w=1200&h=900&fit=crop",
        trending: true,
        views: 2800,
        difficulty: "Medium",
        budget: "$$",
        tips: ["Use translucent screens", "Add ceiling tracks"],
      },

      // Extra to extend length
      {
        id: 15,
        title: "Statement Lighting",
        category: "materials",
        description:
          "Sculptural pendants and oversized floor lamps as focal points.",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=900&fit=crop",
        trending: true,
        views: 3100,
        difficulty: "Medium",
        budget: "$$$",
        tips: ["Dimmer switches", "Layer ambient + task"],
      },
      {
        id: 16,
        title: "Japandi Calm",
        category: "style",
        description:
          "Scandi minimalism meets Japanese warmth and natural materials.",
        image:
          "https://images.unsplash.com/photo-1600585154340-1e4d4f9941cc?w=1200&h=900&fit=crop",
        trending: true,
        views: 3900,
        difficulty: "Medium",
        budget: "$$",
        tips: ["Light woods", "Muted earthy palette"],
      },
      {
        id: 17,
        title: "Micro‑Gallery Walls",
        category: "style",
        description:
          "Tight arrangements of small art for visual rhythm in compact spaces.",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=900&fit=crop",
        trending: false,
        views: 1400,
        difficulty: "Easy",
        budget: "$",
        tips: ["Trace frames on paper first", "Keep equal spacing"],
      },
      {
        id: 18,
        title: "Limewash Walls",
        category: "materials",
        description:
          "Matte, cloud‑like finish that adds depth and old‑world character.",
        image:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&h=900&fit=crop",
        trending: true,
        views: 2650,
        difficulty: "Medium",
        budget: "$",
        tips: ["Cross‑hatch strokes", "Finish with wax if needed"],
      },
      {
        id: 19,
        title: "Indoor/Outdoor Blur",
        category: "functionality",
        description:
          "Continuity of materials and thresholds between living and balcony.",
        image:
          "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=1200&h=900&fit=crop",
        trending: false,
        views: 2200,
        difficulty: "Hard",
        budget: "$$$",
        tips: ["Same flooring tone", "Planter clusters at boundary"],
      },
      {
        id: 20,
        title: "Renter‑Friendly Peel & Stick",
        category: "functionality",
        description:
          "Temporary wallpapers and tiles to transform without renovation.",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=900&fit=crop",
        trending: true,
        views: 3050,
        difficulty: "Easy",
        budget: "$",
        tips: ["Prime walls", "Heat gently for clean removal"],
      },
      {
        id: 21,
        title: "Arches & Soft Doorways",
        category: "materials",
        description:
          "Introduce curves architecturally with paint or false framing.",
        image:
          "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?w=1200&h=900&fit=crop",
        trending: false,
        views: 1750,
        difficulty: "Medium",
        budget: "$$",
        tips: ["Painted faux‑arch first", "Match radius to room"],
      },
      {
        id: 22,
        title: "Tonal Rugs Layering",
        category: "materials",
        description:
          "Layer different pile heights in one color family for plush depth.",
        image:
          "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&h=900&fit=crop",
        trending: true,
        views: 1980,
        difficulty: "Easy",
        budget: "$$",
        tips: ["Bigger base rug first", "Offset edges slightly"],
      },
      {
        id: 23,
        title: "Hidden Tech Aesthetics",
        category: "functionality",
        description:
          "Conceal cables, routers, and devices for a serene visual field.",
        image:
          "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?w=1200&h=900&fit=crop",
        trending: false,
        views: 1620,
        difficulty: "Easy",
        budget: "$",
        tips: ["Cable raceways", "Router behind slatted door"],
      },
      {
        id: 24,
        title: "Sculptural Greenery",
        category: "wellness",
        description:
          "Use a few large architectural plants instead of many small ones.",
        image:
          "https://images.unsplash.com/photo-1478118330274-ff72cf1161a7?w=1200&h=900&fit=crop",
        trending: true,
        views: 2440,
        difficulty: "Easy",
        budget: "$",
        tips: ["Match pot to palette", "Rotate for even growth"],
      },
      {
        id: 25,
        title: "Gallery‑Style Lighting",
        category: "materials",
        description:
          "Picture lights and track to highlight art + textures.",
        image:
          "https://images.unsplash.com/photo-1521783988139-893ce0b7d1b8?w=1200&h=900&fit=crop",
        trending: false,
        views: 1420,
        difficulty: "Medium",
        budget: "$$",
        tips: ["CRI > 90", "Aim for 30° angle to art"],
      },
      {
        id: 26,
        title: "Desert Neutrals",
        category: "color",
        description:
          "Sandy taupes, terracotta, and sun‑baked pinks for warmth.",
        image:
          "https://images.unsplash.com/photo-1554995207-87da98a4a1e2?w=1200&h=900&fit=crop",
        trending: false,
        views: 2060,
        difficulty: "Easy",
        budget: "$",
        tips: ["Terrazzo accents", "Sheer drapes for glow"],
      },
      {
        id: 27,
        title: "Checkerboard Floors",
        category: "materials",
        description:
          "Classic pattern in muted tones for kitchens and entries.",
        image:
          "https://images.unsplash.com/photo-1512914890250-52dc2e1e82dc?w=1200&h=900&fit=crop",
        trending: true,
        views: 3180,
        difficulty: "Medium",
        budget: "$$",
        tips: ["Use 45° angle in small rooms", "Matte finish to reduce glare"],
      },
      {
        id: 28,
        title: "Monochrome Shelf Styling",
        category: "style",
        description:
          "Curate shelves in one color family for calm cohesion.",
        image:
          "https://images.unsplash.com/photo-1493663284031-b7e3aaa4cab7?w=1200&h=900&fit=crop",
        trending: false,
        views: 1220,
        difficulty: "Easy",
        budget: "$",
        tips: ["Rule of thirds", "Stack + lean combo"],
      },
      {
        id: 29,
        title: "Warm Metal Mix",
        category: "materials",
        description:
          "Brass, bronze, and blackened steel in controlled ratios.",
        image:
          "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=1200&h=900&fit=crop",
        trending: true,
        views: 2810,
        difficulty: "Medium",
        budget: "$$$",
        tips: ["60/30/10 rule", "Repeat in 3 spots"],
      },
      {
        id: 30,
        title: "Ceiling as Fifth Wall",
        category: "color",
        description:
          "Paint or paper the ceiling to wrap the room and add drama.",
        image:
          "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&h=900&fit=crop",
        trending: true,
        views: 3560,
        difficulty: "Medium",
        budget: "$",
        tips: ["Go 1–2 tones darker", "Keep trims crisp"],
      },
    ],
    []
  );

  const categories = [
    { id: "all", label: "All Ideas", icon: Home },
    { id: "color", label: "Colors", icon: Palette },
    { id: "style", label: "Styles", icon: Lightbulb },
    { id: "materials", label: "Materials", icon: Sofa },
    { id: "wellness", label: "Wellness", icon: Heart },
    { id: "furniture", label: "Furniture", icon: Sofa },
    { id: "functionality", label: "Function", icon: Home },
  ];

  // --- Search / Filter / Sort ---
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("trending"); // trending | views | title

  const filtered = useMemo(() => {
    let res = ideas;
    if (activeCategory !== "all") {
      res = res.filter((i) => i.category === activeCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      res = res.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q)
      );
    }
    if (sort === "trending") {
      res = [...res].sort((a, b) => Number(b.trending) - Number(a.trending));
    } else if (sort === "views") {
      res = [...res].sort((a, b) => b.views - a.views);
    } else if (sort === "title") {
      res = [...res].sort((a, b) => a.title.localeCompare(b.title));
    }
    return res;
  }, [ideas, activeCategory, query, sort]);

  // --- Load more to extend page length ---
  const [visible, setVisible] = useState(12);
  const shown = filtered.slice(0, visible);
  const canLoadMore = visible < filtered.length;

  const trendingCount = ideas.filter((i) => i.trending).length;

  const countsByCategory = useMemo(() => {
    const map = ideas.reduce((acc, i) => {
      acc[i.category] = (acc[i.category] || 0) + 1;
      return acc;
    }, {});
    return map;
  }, [ideas]);

  return (
    <section
      ref={pageRef}
      className="min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#F8F5F0] to-[#F5F1EC] text-[#2D1810]"
    >
      {/* Hero */}
      <div className="px-6 sm:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B5E3C] to-[#A06B3E] text-white px-4 py-2 rounded-full text-sm font-medium mb-5 shadow-lg">
              <Lightbulb className="w-4 h-4" />
              {trendingCount} Trending Ideas
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#8B5E3C] mb-4 tracking-tight">
              Interior <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5E3C] to-[#A0786B]">Ideas</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#5B4636] max-w-3xl mx-auto leading-relaxed">
              Discover the latest trends shaping interior design in 2025. From color drenching to quiet luxury,
              explore fresh concepts that will transform your space.
            </p>
          </div>

          {/* Category Overview / Chips */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-10">
            <div className="flex-1 overflow-x-auto no-scrollbar">
              <div className="flex gap-2 sm:gap-3 w-max">
                {categories.map((c) => {
                  const Icon = c.icon;
                  const count = c.id === "all" ? ideas.length : countsByCategory[c.id] || 0;
                  const active = activeCategory === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setActiveCategory(c.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-medium border ${
                        active
                          ? "bg-[#8B5E3C] border-[#8B5E3C] text-white shadow-lg scale-105"
                          : "bg-white border-white text-[#5B4636] hover:bg-[#8B5E3C] hover:text-white hover:shadow-lg"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="capitalize">{c.label}</span>
                      <span className={`text-xs ${active ? "bg-white/20" : "bg-[#8B5E3C]/10"} px-2 py-0.5 rounded-full`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search + Sort */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8B5E3C]" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search ideas..."
                  className="pl-9 pr-3 py-2 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
                />
              </div>
              <div className="relative">
                <SlidersHorizontal className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8B5E3C]" />
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none pl-9 pr-8 py-2 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
                >
                  <option value="trending">Sort: Trending</option>
                  <option value="views">Sort: Most Viewed</option>
                  <option value="title">Sort: A → Z</option>
                </select>
                <ChevronRight className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#8B5E3C] rotate-90 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Ideas Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {shown.map((idea) => (
              <IdeaCard key={idea.id} idea={idea} toggleFavorite={toggleFavorite} isFav={favorites.has(idea.id)} />
            ))}
          </div>

          {/* Load More */}
          {canLoadMore && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setVisible((v) => v + 12)}
                className="px-6 py-3 rounded-full bg-white text-[#8B5E3C] border border-[#8B5E3C]/30 font-semibold hover:bg-[#8B5E3C] hover:text-white transition-all shadow"
              >
                Load 12 more
              </button>
            </div>
          )}

          {/* Tips & Insights */}
          <TipsAndInsights />

          {/* Before / After */}
          <BeforeAfter />

          {/* Style Quiz */}
          <StyleQuiz ideas={ideas} />

          {/* Newsletter + Guide CTA */}
          <CTA />
        </div>
      </div>
    </section>
  );
}

function IdeaCard({ idea, toggleFavorite, isFav }) {
  const [open, setOpen] = useState(false);

  const shareIdea = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = `Check out this interior idea: ${idea.title} — ${url}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: idea.title, text, url });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        alert("Link copied to clipboard ✅");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={idea.image}
          alt={idea.title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {idea.trending && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
            🔥 Trending
          </div>
        )}

        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => toggleFavorite(idea.id)}
            className={`p-2 rounded-full backdrop-blur-md transition-all ${
              isFav ? "bg-red-500 text-white" : "bg-white/20 text-white hover:bg-white/30"
            }`}
            aria-label="Add to favorites"
          >
            <Heart className={`w-4 h-4 ${isFav ? "fill-current" : ""}`} />
          </button>
          <button
            onClick={shareIdea}
            className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-md transition-all"
            aria-label="Share"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm">
          <Eye className="w-3 h-3" />
          {Intl.NumberFormat().format(idea.views)}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#8B5E3C]/10 text-[#8B5E3C] capitalize">
            {idea.category}
          </span>
          <div className="text-xs text-[#5B4636]/70">{idea.difficulty} • {idea.budget}</div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-[#2D1810] mb-2 group-hover:text-[#8B5E3C] transition-colors">
          {idea.title}
        </h3>

        <p className="text-[#5B4636] text-sm leading-relaxed mb-3">{idea.description}</p>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2 text-[#8B5E3C] font-semibold text-sm hover:gap-3 transition-all"
        >
          {open ? (
            <>
              <ChevronLeft className="w-4 h-4" /> Hide details
            </>
          ) : (
            <>
              Explore Idea <ChevronRight className="w-4 h-4" />
            </>
          )}
        </button>

        {open && (
          <div className="mt-4 rounded-xl bg-[#F5F1EC] p-4 text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <div className="font-semibold mb-1">Where it shines</div>
                <ul className="list-disc list-inside space-y-1 text-[#5B4636]">
                  <li>Living rooms</li>
                  <li>Bedrooms</li>
                  <li>Entryways</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-1">Pair with</div>
                <ul className="list-disc list-inside space-y-1 text-[#5B4636]">
                  {idea.tips?.slice(0, 2).map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                  <li>Neutral base + hero accent</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-1">Pro tip</div>
                <p className="text-[#5B4636]">
                  Take a phone photo and convert to grayscale—if contrast still reads, the composition will work.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TipsAndInsights() {
  const items = [
    {
      title: "Choosing a Color Palette",
      points: [
        "Pick a dominant color, a support color, and an accent (60/30/10).",
        "Test swatches in morning + evening light.",
        "Keep undertones (warm/cool) consistent across surfaces.",
      ],
    },
    {
      title: "Balancing Light & Texture",
      points: [
        "Layer ambient, task, and accent lighting.",
        "Mix matte + gloss finishes for depth.",
        "Use sheer curtains to soften harsh daylight.",
      ],
    },
    {
      title: "Small Space Optimization",
      points: [
        "Go vertical with storage and mirrors.",
        "Choose raised‑leg furniture to expose floor area.",
        "Use sliding doors or curtains as partitions.",
      ],
    },
    {
      title: "Texture Strategy",
      points: [
        "Combine 3 textures per vignette: soft, hard, and natural.",
        "Repeat textures in 3 places for cohesion.",
        "Add one tactile surprise—bouclé, rattan, or plaster.",
      ],
    },
    {
      title: "Budget Wins",
      points: [
        "Paint, lighting, and textiles = biggest ROI.",
        "Swap hardware to upgrade cabinets and dressers.",
        "Use peel‑and‑stick for renters.",
      ],
    },
  ];

  return (
    <div className="mt-16">
      <div className="bg-gradient-to-r from-[#8B5E3C]/10 to-[#A0786B]/10 rounded-3xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#8B5E3C] mb-6">Design Tips & Insights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 shadow">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-[#8B5E3C]" />
                <h3 className="font-semibold">{it.title}</h3>
              </div>
              <ul className="list-disc list-inside text-[#5B4636] space-y-1 text-sm">
                {it.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BeforeAfter() {
  const containerRef = useRef(null);
  const [pos, setPos] = useState(50); // percentage mask

  return (
    <div className="mt-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#8B5E3C] mb-4">Before & After: Impact in Seconds</h2>
      <p className="text-[#5B4636] mb-6 max-w-3xl">Drag the slider to see how color, lighting, and texture can completely change the mood of a space.</p>
      <div
        ref={containerRef}
        className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-lg bg-white"
      >
        <img
          src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1600&h=1200&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Before"
        />
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&h=1200&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          alt="After"
        />
        <div
          className="absolute top-0 bottom-0"
          style={{ left: `${pos}%` }}
        >
          <div className="w-0.5 h-full bg-white/70" />
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow">
            <ChevronLeft className="w-4 h-4 inline" />
            <ChevronRight className="w-4 h-4 inline" />
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute w-full bottom-4 left-0 right-0"
        />
      </div>
    </div>
  );
}

function StyleQuiz({ ideas }) {
  const questions = [
    {
      key: "mood",
      q: "What mood do you want your home to have?",
      options: [
        { label: "Cozy", scores: { color: 2, wellness: 2 } },
        { label: "Minimal", scores: { style: 2, functionality: 1 } },
        { label: "Bold", scores: { color: 2, materials: 1 } },
        { label: "Elegant", scores: { style: 2, materials: 2 } },
      ],
    },
    {
      key: "material",
      q: "Which material draws you the most?",
      options: [
        { label: "Wood", scores: { wellness: 1, style: 1 } },
        { label: "Marble", scores: { materials: 2, style: 1 } },
        { label: "Metal", scores: { materials: 2, functionality: 1 } },
        { label: "Linen", scores: { wellness: 2, color: 1 } },
      ],
    },
    {
      key: "palette",
      q: "Your preferred color temperature?",
      options: [
        { label: "Warm", scores: { color: 2, style: 1 } },
        { label: "Cool", scores: { color: 2, functionality: 1 } },
        { label: "Neutral", scores: { color: 1, materials: 1 } },
        { label: "Vibrant", scores: { color: 2 } },
      ],
    },
    {
      key: "lifestyle",
      q: "What matters most day‑to‑day?",
      options: [
        { label: "Storage", scores: { functionality: 2 } },
        { label: "Comfort", scores: { wellness: 2 } },
        { label: "Aesthetics", scores: { style: 2 } },
        { label: "Durability", scores: { materials: 2 } },
      ],
    },
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]); // store option indices
  const total = questions.length;

  const progress = Math.round(((step) / total) * 100);
  const finished = step >= total;

  const handleSelect = (idx) => {
    setAnswers((a) => {
      const next = [...a];
      next[step] = idx;
      return next;
    });
  };

  const next = () => setStep((s) => Math.min(s + 1, total));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const result = useMemo(() => {
    if (!finished) return null;
    const score = { color: 0, style: 0, materials: 0, wellness: 0, furniture: 0, functionality: 0 };
    answers.forEach((ans, i) => {
      const opt = questions[i].options[ans];
      Object.entries(opt.scores).forEach(([k, v]) => (score[k] += v));
    });
    // find top two
    const ranked = Object.entries(score).sort((a, b) => b[1] - a[1]);
    const top = ranked[0][0];
    const second = ranked[1][0];

    const personaMap = {
      color: {
        title: "Vivid Storyteller",
        blurb: "You paint with mood. Bold hues and tonal layering thrill you.",
      },
      style: {
        title: "Curated Minimalist",
        blurb: "You prefer restraint with a few sculptural statements.",
      },
      materials: {
        title: "Tactile Collector",
        blurb: "Stone, metal, and textured finishes ground your spaces.",
      },
      wellness: {
        title: "Sanctuary Seeker",
        blurb: "Comfort, plants, and soft light define your home.",
      },
      furniture: {
        title: "Soft‑Form Enthusiast",
        blurb: "Curves and comfort shape your layouts.",
      },
      functionality: {
        title: "Practical Visionary",
        blurb: "Smart storage and flexible zones keep life flowing.",
      },
    };

    const persona = personaMap[top];

    const recs = ideas
      .filter((i) => i.category === top || i.category === second)
      .slice(0, 6);

    return { score, top, second, persona, recs };
  }, [answers, finished, ideas]);

  return (
    <div className="mt-16">
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#8B5E3C]">Find Your Style</h2>
          <div className="text-sm text-[#5B4636]">{finished ? "Complete" : `Step ${step + 1} / ${total}`}</div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-2 bg-[#F5F1EC] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#8B5E3C] to-[#A0786B]"
            style={{ width: `${finished ? 100 : progress}%` }}
          />
        </div>

        {!finished ? (
          <div className="mt-6">
            <div className="text-lg font-semibold mb-4 text-[#2D1810]">
              {questions[step].q}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {questions[step].options.map((opt, idx) => {
                const selected = answers[step] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    className={`text-left p-4 rounded-2xl border transition-all ${
                      selected
                        ? "border-[#8B5E3C] bg-[#8B5E3C]/10"
                        : "border-transparent bg-[#F5F1EC] hover:bg-[#8B5E3C]/10"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
            <div className="mt-5 flex items-center justify-between">
              <button
                onClick={back}
                disabled={step === 0}
                className="px-4 py-2 rounded-full border border-[#8B5E3C]/30 text-[#8B5E3C] disabled:opacity-40"
              >
                Back
              </button>
              <button
                onClick={answers[step] == null ? undefined : next}
                className={`px-6 py-2 rounded-full font-semibold text-white transition ${
                  answers[step] == null
                    ? "bg-[#8B5E3C]/40 cursor-not-allowed"
                    : "bg-[#8B5E3C] hover:brightness-110"
                }`}
              >
                {step === total - 1 ? "See Results" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <div className="bg-[#F5F1EC] rounded-2xl p-5 mb-6">
              <div className="text-sm uppercase tracking-wider text-[#8B5E3C] mb-1">
                Your Style Persona
              </div>
              <div className="text-2xl font-bold mb-2">{result.persona.title}</div>
              <p className="text-[#5B4636]">{result.persona.blurb}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Recommended Ideas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {result.recs.map((r) => (
                  <div key={r.id} className="bg-white rounded-xl border p-4">
                    <div className="relative h-36 rounded-lg overflow-hidden mb-3">
                      <img src={r.image} alt={r.title} className="w-full h-full object-cover" />
                      {r.trending && (
                        <div className="absolute top-2 left-2 text-xs bg-black/60 text-white px-2 py-0.5 rounded-full">Trending</div>
                      )}
                    </div>
                    <div className="text-sm uppercase tracking-wide text-[#8B5E3C]">{r.category}</div>
                    <div className="font-semibold">{r.title}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <a href="#top" className="text-[#8B5E3C] font-semibold inline-flex items-center gap-2">
                  Explore more ideas <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CTA() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMsg("Please enter a valid email.");
      return;
    }
    setMsg("You're in! Check your inbox for the first guide.");
    setEmail("");
  };

  const downloadGuide = () => {
    // Placeholder – can be wired to real file
    setMsg("Downloading starter guide...");
  };

  return (
    <div className="mt-16 text-center">
      <div className="bg-gradient-to-r from-[#8B5E3C] to-[#A0786B] rounded-3xl p-8 text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Ready to Transform Your Space?</h2>
        <p className="text-base sm:text-lg mb-6 opacity-90">
          Get personalized design recommendations and weekly inspiration.
        </p>
        <form
          onSubmit={submit}
          className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto"
        >
          <div className="relative flex-1">
            <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8B5E3C]" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full pl-9 pr-3 py-3 rounded-full text-[#2D1810]"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-white text-[#8B5E3C] font-semibold hover:bg-gray-100"
          >
            Subscribe
          </button>
          <button
            type="button"
            onClick={downloadGuide}
            className="px-6 py-3 rounded-full border-2 border-white font-semibold hover:bg-white hover:text-[#8B5E3C] inline-flex items-center gap-2 justify-center"
          >
            <Download className="w-4 h-4" /> Download Guide
          </button>
        </form>
        {msg && <div className="mt-3 text-sm">{msg}</div>}
      </div>
    </div>
  );
}
