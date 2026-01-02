import { Award, Leaf, Gift } from "lucide-react";
import Hero from "../components/sections/Hero";
import ProductSection from "../components/sections/ProductSection";
import StorySection from "../components/sections/StorySection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/layout/Footer";

export default function Home({ onAddToCart }) {
  return (
    <>
      <Hero />
      
      {/* Features Section */}
      <div className="bg-[#0F2820] py-20 border-b border-[#2C4A3E]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: Award, title: "Đệ Nhất Danh Trà", desc: "Tuyển chọn từ vùng chè Tân Cương trứ danh." },
            { icon: Leaf, title: "100% Organic", desc: "Canh tác hữu cơ, sao tay thủ công truyền thống." },
            { icon: Gift, title: "Quà Tặng Đẳng Cấp", desc: "Thiết kế hộp sơn mài, gỗ quý sang trọng." }
          ].map((f, i) => (
            <div key={i} className="p-8 border border-[#2C4A3E] hover:border-[#D4AF37] transition duration-700 group bg-[#132f26]">
              <div className="w-16 h-16 bg-[#1A3C34] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D4AF37] transition shadow-lg">
                <f.icon size={32} className="text-[#D4AF37] group-hover:text-[#0F2820]" />
              </div>
              <h3 className="text-[#E0E0E0] font-bold text-lg uppercase tracking-wider mb-3" style={{ fontFamily: '"Cormorant Garamond", serif' }}>{f.title}</h3>
              <p className="text-[#A8B3A6] text-sm font-light leading-relaxed" style={{ fontFamily: '"Cormorant Garamond", serif' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <ProductSection onAddToCart={onAddToCart} />
      <StorySection />
      <ContactSection />
      <Footer />
    </>
  );
}