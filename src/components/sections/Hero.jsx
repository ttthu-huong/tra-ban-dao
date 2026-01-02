export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 bg-[#0A1F18] min-h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'radial-gradient(#D4AF37 0.5px, transparent 0.5px)', 
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#0A1F18]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto mt-10">
        {/* Badge */}
        <span className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.2)] mb-8 inline-block"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}>
          Tinh Hoa Trà Việt Since 1920
        </span>
        
        {/* Main Title */}
        <h1 
          className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl" 
          style={{ fontFamily: '"Cinzel Decorative", cursive' }}
        >
          Thức Quà{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D786] via-[#D4AF37] to-[#996515]">
            Tri Kỷ
          </span>
          <br />
          Gắn Kết{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D786] via-[#D4AF37] to-[#996515]">
            Thâm Tình
          </span>
        </h1>
        
        {/* Subtitle */}
        <p 
          className="text-[#A8B3A6] text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed italic" 
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          "Bán dạ tam bôi tửu, Bình minh nhất trản trà."
          <br />
          Gói trọn hương vị núi rừng Thái Nguyên trong những hộp quà sơn mài đẳng cấp.
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center gap-6">
          <button 
            onClick={() => document.getElementById('san-pham')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0F2820] px-10 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:brightness-110 transition shadow-[0_0_25px_rgba(212,175,55,0.4)]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Chọn Quà Biếu
          </button>
        </div>
      </div>
    </section>
  );
}