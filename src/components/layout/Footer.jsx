import Logo from '../common/Logo';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  const links = {
    company: [
      { label: 'Về Trà Bản Dao', href: '#cau-chuyen' },
      { label: 'Quy trình sản xuất', href: '#' },
      { label: 'Chính sách đổi trả', href: '#' },
      { label: 'Hướng dẫn mua hàng', href: '#' }
    ],
    products: [
      { label: 'Bộ quà biếu cao cấp', href: '#san-pham' },
      { label: 'Trà thưởng thức', href: '#san-pham' },
      { label: 'Phụ kiện trà đạo', href: '#' },
      { label: 'Voucher quà tặng', href: '#' }
    ]
  };

  const socials = [
    { icon: <Facebook size={20} />, href: '#' },
    { icon: <Instagram size={20} />, href: '#' },
    { icon: <Youtube size={20} />, href: '#' },
    { icon: <Mail size={20} />, href: 'mailto:hello@trabandao.vn' }
  ];

  return (
    <footer className="bg-[#0F2820] border-t border-[#2C4A3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo + Description */}
          <div className="md:col-span-2">
            <div className="mb-6 flex justify-center md:justify-start">
              <Logo size="small" />
            </div>
            <p 
              className="text-[#A8B3A6] leading-relaxed mb-6 max-w-md" 
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Trà Bản Dao mang đến tinh hoa trà Thái Nguyên trong những hộp quà sang trọng, 
              thể hiện tâm tình và phẩm vị của người tặng.
            </p>
            
            {/* Social */}
            <div className="flex gap-4">
              {socials.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 bg-[#1A3C34] rounded-full flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F2820] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 
              className="text-[#D4AF37] font-bold mb-4 uppercase text-sm tracking-wider" 
              style={{ fontFamily: '"Cinzel Decorative", cursive' }}
            >
              Về Chúng Tôi
            </h3>
            <ul className="space-y-3">
              {links.company.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="text-[#A8B3A6] hover:text-[#D4AF37] text-sm transition-colors"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 
              className="text-[#D4AF37] font-bold mb-4 uppercase text-sm tracking-wider" 
              style={{ fontFamily: '"Cinzel Decorative", cursive' }}
            >
              Sản Phẩm
            </h3>
            <ul className="space-y-3">
              {links.products.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="text-[#A8B3A6] hover:text-[#D4AF37] text-sm transition-colors"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2C4A3E] text-center">
          <p 
            className="text-[#A8B3A6] text-sm" 
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            © {new Date().getFullYear()} Trà Bản Dao. All rights reserved. | Designed with ❤️ in Thái Nguyên
          </p>
        </div>
      </div>
    </footer>
  );
}