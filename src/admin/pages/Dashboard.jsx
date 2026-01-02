import { ShoppingBag, TrendingUp, Package, DollarSign } from "lucide-react";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalProducts: 6,
    recentOrders: []
  });

  useEffect(() => {
    // Lấy dữ liệu từ localStorage
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);

    setStats({
      totalOrders: orders.length,
      totalRevenue,
      totalProducts: 6,
      recentOrders: orders.slice(-5).reverse()
    });
  }, []);

  const StatCard = ({ icon, label, value, color }) => (
    <div className="bg-[#0F2820] border border-[#D4AF37]/30 rounded-lg p-6 hover:border-[#D4AF37] transition-all">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[#A8B3A6] text-sm mb-2">{label}</p>
          <p className={`text-3xl font-bold ${color}`}>{value}</p>
        </div>
        <div className="bg-[#1A3C34] p-3 rounded-lg text-[#D4AF37]">
          {icon}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 
          className="text-4xl font-bold text-[#D4AF37] mb-2" 
          style={{ fontFamily: '"Cinzel Decorative", cursive' }}
        >
          Dashboard
        </h1>
        <p className="text-[#A8B3A6]">Tổng quan kinh doanh Trà Bản Dao</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<ShoppingBag size={24} />}
          label="Tổng Đơn Hàng"
          value={stats.totalOrders}
          color="text-[#D4AF37]"
        />
        <StatCard
          icon={<DollarSign size={24} />}
          label="Tổng Doanh Thu"
          value={`${(stats.totalRevenue / 1000000).toFixed(1)}M`}
          color="text-green-400"
        />
        <StatCard
          icon={<Package size={24} />}
          label="Tổng Sản Phẩm"
          value={stats.totalProducts}
          color="text-blue-400"
        />
        <StatCard
          icon={<TrendingUp size={24} />}
          label="Trung Bình Đơn"
          value={stats.totalOrders > 0 ? `${Math.round(stats.totalRevenue / stats.totalOrders / 1000)}K` : "0"}
          color="text-purple-400"
        />
      </div>

      {/* Recent Orders */}
      <div className="bg-[#0F2820] border border-[#D4AF37]/30 rounded-lg overflow-hidden">
        <div className="p-6 border-b border-[#2C4A3E]">
          <h2 
            className="text-2xl font-bold text-[#D4AF37]" 
            style={{ fontFamily: '"Cinzel Decorative", cursive' }}
          >
            Đơn Hàng Gần Đây
          </h2>
        </div>

        {stats.recentOrders.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#1A3C34] border-b border-[#2C4A3E]">
                <tr>
                  <th className="px-6 py-4 text-left text-[#D4AF37] text-sm uppercase">Đơn Hàng</th>
                  <th className="px-6 py-4 text-left text-[#D4AF37] text-sm uppercase">Khách Hàng</th>
                  <th className="px-6 py-4 text-left text-[#D4AF37] text-sm uppercase">Số Tiền</th>
                  <th className="px-6 py-4 text-left text-[#D4AF37] text-sm uppercase">Ngày Tạo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C4A3E]">
                {stats.recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-[#1A3C34] transition-colors">
                    <td className="px-6 py-4 text-[#E0E0E0] text-sm">#{order.id.toString().slice(-6)}</td>
                    <td className="px-6 py-4 text-[#E0E0E0]">{order.name}</td>
                    <td className="px-6 py-4 text-[#D4AF37] font-semibold">{order.total.toLocaleString()}₫</td>
                    <td className="px-6 py-4 text-[#A8B3A6] text-sm">
                      {new Date(order.date).toLocaleDateString("vi-VN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center">
            <p className="text-[#A8B3A6] mb-4">Chưa có đơn hàng nào</p>
            <p className="text-[#587a6b] text-sm">Đơn hàng sẽ xuất hiện ở đây khi khách hàng đặt hàng</p>
          </div>
        )}
      </div>
    </div>
  );
}
