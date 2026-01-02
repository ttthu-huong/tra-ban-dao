import { useState } from "react";
import { X } from "lucide-react";

export default function CheckoutModal({ cartItems = [], onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = () => {
    if (!name || !phone || !address) {
      return alert("Vui lòng điền đầy đủ thông tin: Tên, Số điện thoại và Địa chỉ");
    }
    onSubmit({ name, phone, address, note, items: cartItems });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#0F2820] border border-[#D4AF37] rounded-lg w-full max-w-md shadow-2xl overflow-hidden animate-fade-in-up">
        
        {/* Header */}
        <div className="bg-[#1A3C34] border-b border-[#D4AF37]/30 p-6 flex justify-between items-center">
          <h2 
            className="text-2xl font-bold text-[#D4AF37]" 
            style={{ fontFamily: '"Cinzel Decorative", cursive' }}
          >
            Thông Tin Đặt Hàng
          </h2>
          <button 
            onClick={onClose}
            className="text-[#D4AF37] hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-[#D4AF37] text-sm mb-2 uppercase tracking-wider">
              Họ và Tên <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full bg-[#1A3C34] border border-[#2C4A3E] rounded p-3 text-[#E0E0E0] focus:border-[#D4AF37] focus:outline-none transition-colors"
              placeholder="Nguyễn Văn A"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-[#D4AF37] text-sm mb-2 uppercase tracking-wider">
              Số Điện Thoại <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full bg-[#1A3C34] border border-[#2C4A3E] rounded p-3 text-[#E0E0E0] focus:border-[#D4AF37] focus:outline-none transition-colors"
              placeholder="0987 654 321"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-[#D4AF37] text-sm mb-2 uppercase tracking-wider">
              Địa Chỉ Nhận Hàng <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full bg-[#1A3C34] border border-[#2C4A3E] rounded p-3 text-[#E0E0E0] focus:border-[#D4AF37] focus:outline-none transition-colors"
              placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành phố"
              rows={3}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-[#D4AF37] text-sm mb-2 uppercase tracking-wider">
              Ghi Chú (Tuỳ chọn)
            </label>
            <textarea
              className="w-full bg-[#1A3C34] border border-[#2C4A3E] rounded p-3 text-[#E0E0E0] focus:border-[#D4AF37] focus:outline-none transition-colors"
              placeholder="Lời nhắn, yêu cầu đặc biệt..."
              rows={2}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          {/* Summary */}
          <div className="bg-[#1A3C34] border border-[#D4AF37]/30 rounded p-4 mt-6">
            <div className="flex justify-between items-center text-[#E0E0E0] mb-2">
              <span>Số lượng sản phẩm:</span>
              <span className="font-semibold">{cartItems.length}</span>
            </div>
            <div className="flex justify-between items-center text-lg font-bold">
              <span className="text-[#D4AF37]">Tổng cộng:</span>
              <span className="text-[#D4AF37]">
                {total.toLocaleString()}₫
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6">
            <button 
              className="flex-1 bg-[#2C4A3E] text-[#E0E0E0] rounded py-3 hover:bg-[#1A3C34] transition-colors font-semibold"
              onClick={onClose}
            >
              Huỷ
            </button>
            <button 
              className="flex-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0F2820] rounded py-3 hover:brightness-110 transition-all font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              onClick={handleSubmit}
            >
              Xác Nhận Đặt Hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}