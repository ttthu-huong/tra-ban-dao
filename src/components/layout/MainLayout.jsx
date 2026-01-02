import Navbar from "./Navbar";
import CartDrawer from "../cart/CartDrawer";

export default function MainLayout({ 
  children, 
  cart, 
  cartCount, 
  isCartOpen, 
  onOpenCart, 
  onCloseCart,
  onRemove,
  onUpdateQty,
  onCheckout
}) {
  return (
    <div className="bg-[#0A1F18] min-h-screen">
      <Navbar cartCount={cartCount} onOpenCart={onOpenCart} />
      {children}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={onCloseCart}
        cart={cart}
        onRemove={onRemove}
        onUpdateQty={onUpdateQty}
        onCheckout={onCheckout}
      />
    </div>
  );
}
