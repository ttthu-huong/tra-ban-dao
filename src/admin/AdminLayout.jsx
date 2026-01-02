import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LayoutDashboard, ShoppingBag, Package, LogOut, Menu, X } from "lucide-react";
import Logo from "../components/common/Logo";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (confirm("Bạn có chắc muốn đăng xuất?")) {
      localStorage.removeItem("adminAuth");
      navigate("/admin/login");
    }
  };

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/admin" },
    { icon: <ShoppingBag size={20} />, label: "Đơn Hàng", path: "/admin/orders" },
    { icon: <Package size={20} />, label: "Sản Phẩm", path: "/admin/products" },
  ];

  return (
    <div className="min-h-screen bg-[#0A1F18] flex">
      {/* Sidebar */}
      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#0F2820] border-r border-[#2C4A3E] transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-[#2C4A3E] flex justify-between items-center">
          <Logo size="small" />
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden text-[#D4AF37]"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-[#A8B3A6] hover:bg-[#1A3C34] hover:text-[#D4AF37] rounded transition-all group"
            >
              <span className="group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#2C4A3E]">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-900/20 rounded transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium">Đăng Xuất</span>
          </button>
        </div>
      </aside>

      {/* Overlay (mobile) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-[#0F2820] border-b border-[#2C4A3E] px-6 py-4 flex items-center justify-between lg:justify-end">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden text-[#D4AF37]"
          >
            <Menu size={24} />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[#D4AF37] font-semibold text-sm">Admin Panel</p>
              <p className="text-[#A8B3A6] text-xs">Trà Bản Dao</p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

