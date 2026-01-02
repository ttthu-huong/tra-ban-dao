import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import Logo from "../../components/common/Logo";

export default function Login() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const ADMIN_PIN = "2025"; // Mã PIN admin (có thể thay đổi)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (pin === ADMIN_PIN) {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin");
    } else {
      setError("Mã PIN không chính xác");
      setPin("");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1F18] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo size="normal" />
        </div>

        {/* Login Card */}
        <div className="bg-[#0F2820] border border-[#D4AF37] rounded-lg p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1A3C34] rounded-full mb-4">
              <Lock size={32} className="text-[#D4AF37]" />
            </div>
            <h1 
              className="text-3xl font-bold text-[#D4AF37] mb-2" 
              style={{ fontFamily: '"Cinzel Decorative", cursive' }}
            >
              Admin Panel
            </h1>
            <p className="text-[#A8B3A6]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Nhập mã PIN để truy cập
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#D4AF37] text-sm mb-2 uppercase tracking-wider">
                Mã PIN
              </label>
              <input
                type="password"
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setError("");
                }}
                maxLength={4}
                placeholder="••••"
                className="w-full bg-[#1A3C34] border border-[#2C4A3E] rounded p-4 text-[#E0E0E0] text-center text-2xl tracking-widest focus:border-[#D4AF37] focus:outline-none transition-colors"
                autoFocus
              />
              {error && (
                <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0F2820] rounded py-4 font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              Đăng Nhập
            </button>
          </form>

          <div className="mt-6 text-center">
            <a 
              href="/" 
              className="text-[#A8B3A6] hover:text-[#D4AF37] text-sm transition-colors"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              ← Quay về trang chủ
            </a>
          </div>
        </div>

        {/* Hint (chỉ để dev test, xóa khi production) */}
        <div className="mt-4 text-center text-[#587a6b] text-sm">
          Dev hint: PIN = 2025
        </div>
      </div>
    </div>
  );
}
