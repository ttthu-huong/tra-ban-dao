import { X, ShoppingBag, Gift, Plus, Minus, Trash2 } from "lucide-react";

export default function CartDrawer({ isOpen, onClose, cart, onRemove, onUpdateQty, onCheckout }) {
  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#0F2820] border-l border-[#D4AF37]/30 z-[70] shadow-2xl transform transition-transform duration-300 flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 border-b border-[#2C4A3E] flex justify-between items-center bg-[#16362D]">
          <h2 className="text-[#D4AF37] font-serif font-bold text-xl uppercase tracking-wider">Giỏ Quà ({cart.length})</h2>
          <button onClick={onClose} className="text-[#A8B3A6] hover:text-[#D4AF37]"><X size={24}/></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center text-[#A8B3A6] mt-20">
              <ShoppingBag size={48} className="mx-auto mb-4 opacity-30" />
              <p>Chưa có phẩm trà nào.</p>
              <button onClick={onClose} className="mt-4 text-[#D4AF37] border-b border-[#D4AF37] pb-1 text-sm uppercase tracking-wider">Tiếp tục xem</button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 bg-[#1A3C34]/50 p-3 rounded border border-[#2C4A3E]">
                <div className={`w-20 h-20 ${item.imageColor} flex items-center justify-center rounded shrink-0`}>
                  <Gift size={24} className="text-[#D4AF37]/60" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#E0E0E0] font-serif font-bold text-sm mb-1">{item.name}</h3>
                  <p className="text-[#D4AF37] text-sm mb-2">{item.price.toLocaleString()} đ</p>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-[#2C4A3E] rounded">
                      <button onClick={() => onUpdateQty(item.id, -1)} className="px-2 py-1 text-[#A8B3A6] hover:text-white"><Minus size={12}/></button>
                      <span className="px-2 text-[#E0E0E0] text-sm">{item.quantity}</span>
                      <button onClick={() => onUpdateQty(item.id, 1)} className="px-2 py-1 text-[#A8B3A6] hover:text-white"><Plus size={12}/></button>
                    </div>
                    <button onClick={() => onRemove(item.id)} className="text-red-400/70 hover:text-red-400 ml-auto"><Trash2 size={16}/></button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-[#16362D] border-t border-[#D4AF37]/30">
            <div className="flex justify-between items-center mb-4 text-[#E0E0E0] font-serif">
              <span>Tổng cộng:</span>
              <span className="text-[#D4AF37] text-xl font-bold">{total.toLocaleString()} VND</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-[#D4AF37] text-[#0F2820] py-3 font-bold uppercase tracking-widest hover:bg-[#F3E5AB] transition shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              Đặt Hàng Ngay
            </button>
          </div>
        )}
      </div>
    </>
  );
}