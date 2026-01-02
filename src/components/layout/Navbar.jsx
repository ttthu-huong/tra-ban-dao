import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import Logo from '../common/Logo';

const Navbar = ({ cartCount = 0, onOpenCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Trang chủ', href: '#' },
    { label: 'Bộ Quà Tặng', href: '#san-pham' },
    { label: 'Ký Ức Trà', href: '#cau-chuyen' },
    { label: 'Liên hệ', href: '#lien-he' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      scrolled 
        ? 'bg-[#0F2820]/95 backdrop-blur-md border-b border-[#D4AF37]/30 py-2 shadow-2xl' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-[#D4AF37] hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Menu Left */}
          <div className="hidden md:flex flex-1 justify-end pr-12 space-x-12">
            {menuItems.slice(0, 2).map(item => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-[#E0E0E0] hover:text-[#D4AF37] uppercase text-[11px] tracking-[0.25em] transition-colors duration-300 relative group"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Logo giữa */}
          <div className={`flex-shrink-0 mx-6 transition-all duration-500 ${
            scrolled ? 'scale-75' : 'scale-100'
          }`}>
            <Logo size={scrolled ? "small" : "normal"} />
          </div>

          {/* Desktop Menu Right */}
          <div className="hidden md:flex flex-1 justify-start pl-12 space-x-12">
            {menuItems.slice(2).map(item => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-[#E0E0E0] hover:text-[#D4AF37] uppercase text-[11px] tracking-[0.25em] transition-colors duration-300 relative group"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Cart Icon */}
          <div className="flex items-center text-[#D4AF37]">
            <div 
              className="relative group cursor-pointer" 
              onClick={onOpenCart}
            >
              <ShoppingBag 
                size={20} 
                className="group-hover:text-white transition-colors duration-300" 
              />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#8B1E1E] text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0F2820]/98 backdrop-blur-lg border-t border-[#2C4A3E] shadow-2xl animate-fade-in">
          <div className="p-6 space-y-4">
            {menuItems.map(item => (
              <a 
                key={item.label} 
                href={item.href} 
                className="block text-[#E0E0E0] uppercase text-sm tracking-wider hover:text-[#D4AF37] py-3 border-b border-[#2C4A3E]/50 last:border-0 transition-colors duration-300"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;