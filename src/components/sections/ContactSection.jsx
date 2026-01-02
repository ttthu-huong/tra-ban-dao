import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Địa chỉ",
      content: "Thôn Bản Giao, Xã Tân Cương, Thành phố Thái Nguyên"
    },
    {
      icon: <Phone size={24} />,
      title: "Hotline",
      content: "0987 654 321"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "hello@trabangiao.vn"
    },
    {
      icon: <Clock size={24} />,
      title: "Giờ làm việc",
      content: "8:00 - 18:00 (Thứ 2 - Thứ 7)"
    }
  ];

  return (
    <section id="lien-he" className="py-24 bg-[#0A1F18] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span 
            className="text-[#D4AF37] italic text-xl block mb-2 font-medium"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Kết Nối
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#E0E0E0] mb-4" 
            style={{ fontFamily: '"Cinzel Decorative", cursive' }}
          >
            Liên Hệ Chúng Tôi
          </h2>
          <p className="text-[#A8B3A6] max-w-2xl mx-auto" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            Đội ngũ tư vấn của Trà Bản Dao luôn sẵn sàng giúp bạn chọn món quà ý nghĩa nhất.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((item, idx) => (
            <div 
              key={idx}
              className="text-center p-6 bg-[#0F2820] border border-[#2C4A3E] rounded hover:border-[#D4AF37] transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1A3C34] rounded-full mb-4 text-[#D4AF37] group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 
                className="text-[#E0E0E0] font-bold mb-2 text-sm uppercase tracking-wider" 
                style={{ fontFamily: '"Cinzel Decorative", cursive' }}
              >
                {item.title}
              </h3>
              <p 
                className="text-[#A8B3A6] text-sm leading-relaxed" 
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="tel:0987654321"
            className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0F2820] px-12 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:brightness-110 transition shadow-[0_0_25px_rgba(212,175,55,0.4)]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Gọi Ngay Để Được Tư Vấn
          </a>
        </div>
      </div>
    </section>
  );
}