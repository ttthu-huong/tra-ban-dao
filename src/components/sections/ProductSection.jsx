import { useState } from "react";
import { Gift, ShoppingBag } from "lucide-react";
import { PRODUCTS_DB } from "../../data/products";

export default function ProductSection({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS_DB
      : PRODUCTS_DB.filter((p) => p.category === activeCategory);

  const categories = [
    { id: "all", label: "Tất cả" },
    { id: "gift", label: "Set Quà Biếu" },
    { id: "tea", label: "Trà Thưởng Thức" },
  ];

  return (
    <section id="san-pham" className="py-24 bg-[#0F2820] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header (giữ nguyên) */}
        <div className="text-center mb-12">
          <span
            className="text-[#D4AF37] italic text-xl block mb-2 font-medium"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Bộ Sưu Tập 2024
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#E0E0E0] mb-8"
            style={{ fontFamily: '"Cinzel Decorative", cursive' }}
          >
            Quà Biếu Thượng Hạng
          </h2>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 uppercase text-xs tracking-widest transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? "bg-[#D4AF37] text-[#0F2820] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    : "text-[#D4AF37] border-[#D4AF37]/30 hover:border-[#D4AF37]"
                }`}
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#122b22] border border-[#2C4A3E] hover:border-[#D4AF37] transition-all duration-500 overflow-hidden relative shadow-lg"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0F2820] text-[10px] font-bold px-4 py-1.5 uppercase tracking-wider z-10 shadow-md">
                  {product.badge}
                </div>
              )}

              {/* Image Area */}
              <div
                className={`h-72 ${product.imageColor} relative flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500"></div>
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>
                <Gift
                  size={80}
                  className="text-[#D4AF37]/60 group-hover:scale-110 group-hover:text-[#D4AF37] transition duration-700 drop-shadow-2xl"
                />

                {/* Add to Cart Button */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 w-3/4">
                  <button
                    onClick={() => onAddToCart(product)}
                    className="w-full bg-white/95 backdrop-blur text-[#0F2820] py-3 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-[#D4AF37] shadow-xl flex items-center justify-center gap-2"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    <ShoppingBag size={14} /> Thêm vào giỏ
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <h3
                  className="text-xl font-bold text-[#E0E0E0] mb-4 group-hover:text-[#D4AF37] transition cursor-pointer leading-tight"
                  style={{ fontFamily: '"Cinzel Decorative", cursive' }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-[#A8B3A6] text-sm mb-6 line-clamp-3 leading-relaxed font-light"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  {product.desc}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span
                    className="text-[#D4AF37] font-bold text-xl"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {product.price.toLocaleString("vi-VN")}
                  </span>
                  <span className="text-[10px] text-[#A8B3A6] uppercase tracking-wider">
                    VND
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}