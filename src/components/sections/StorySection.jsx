import { Leaf, Award, Users } from 'lucide-react';

export default function StorySection() {
  const highlights = [
    {
      icon: <Leaf size={32} />,
      title: "100% Tự Nhiên",
      desc: "Thu hái thủ công từ những cánh đồng chè cổ thụ trên 300 năm tuổi"
    },
    {
      icon: <Award size={32} />,
      title: "Thượng Hạng",
      desc: "Chỉ chọn lọc 1 tôm 2 lá non, sấy khô theo công nghệ hiện đại"
    },
    {
      icon: <Users size={32} />,
      title: "Tâm Huyết 3 Đời",
      desc: "Nghề trồng trà truyền thống của gia đình từ năm 1920"
    }
  ];

  return (
    <section id="cau-chuyen" className="py-24 bg-[#0F2820] relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text */}
          <div>
            <span 
              className="text-[#D4AF37] italic text-lg block mb-3 font-medium"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Từ Thái Nguyên
            </span>
            
            <h2 
              className="text-4xl md:text-5xl font-bold text-[#E0E0E0] mb-6 leading-tight" 
              style={{ fontFamily: '"Cinzel Decorative", cursive' }}
            >
              Hương Trà{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D786] via-[#D4AF37] to-[#996515]">
                Núi Rừng
              </span>
            </h2>
            
            <div className="space-y-4 text-[#A8B3A6] leading-relaxed" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              <p className="text-lg">
                Trà Bản Dao được sinh ra từ khát vọng gìn giữ tinh hoa trà Việt, nơi mỗi cánh trà 
                đều chứa đựng câu chuyện của núi rừng Tây Bắc.
              </p>
              <p>
                Từ những vườn chè cổ thụ trên cao nguyên Tân Cương, qua bàn tay tài hoa của nghệ nhân 
                lão thành, chúng tôi tạo nên những hộp quà tri ân – món quà không chỉ thể hiện phẩm vị 
                mà còn gửi gắm tâm tình sâu sắc.
              </p>
              <p className="italic text-[#D4AF37]">
                "Một chén trà thơm, ngàn lời bạn hữu."
              </p>
            </div>
          </div>

          {/* Right: Highlights */}
          <div className="space-y-6">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="flex gap-6 items-start bg-[#1A3C34]/30 p-6 rounded border border-[#2C4A3E] hover:border-[#D4AF37] transition-all duration-300 group"
              >
                <div className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 
                    className="text-xl font-bold text-[#E0E0E0] mb-2 group-hover:text-[#D4AF37] transition-colors" 
                    style={{ fontFamily: '"Cinzel Decorative", cursive' }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-[#A8B3A6] leading-relaxed" 
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}