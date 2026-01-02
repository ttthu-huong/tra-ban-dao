import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import MainLayout from "./components/layout/MainLayout";
import AdminLayout from "./admin/AdminLayout";
import Home from "./pages/Home";
import Dashboard from "./admin/pages/Dashboard";
import Login from "./admin/pages/Login";
import ProtectedRoute from "./admin/components/ProtectedRoute";
import CheckoutModal from "./components/CheckoutModal";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleSubmitOrder = (orderInfo) => {
    const order = {
      id: Date.now(),
      date: new Date().toISOString(),
      ...orderInfo,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    };
    
    // Lưu vào localStorage
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    localStorage.setItem("orders", JSON.stringify([...orders, order]));
    
    alert("Cảm ơn quý khách. Đơn hàng đã được gửi!");
    setCart([]);
    setIsCartOpen(false);
    setIsCheckoutOpen(false);
  };

  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <BrowserRouter>
      <Routes>
        {/* Trang khách */}
        <Route
          path="/"
          element={
            <MainLayout 
              cart={cart}
              cartCount={cartCount}
              isCartOpen={isCartOpen}
              onOpenCart={() => setIsCartOpen(true)}
              onCloseCart={() => setIsCartOpen(false)}
              onAddToCart={handleAddToCart}
              onRemove={handleRemove}
              onUpdateQty={handleUpdateQty}
              onCheckout={handleCheckout}
            >
              <Home onAddToCart={handleAddToCart} />
            </MainLayout>
          }
        />

        {/* Trang admin login */}
        <Route path="/admin/login" element={<Login />} />

        {/* Trang admin (protected) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <CheckoutModal 
          cartItems={cart}
          onClose={() => setIsCheckoutOpen(false)}
          onSubmit={handleSubmitOrder}
        />
      )}
    </BrowserRouter>
  );
}

export default App;