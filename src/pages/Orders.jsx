import React, { useState } from 'react';
import PageHeader from "../components/PageHeader";
// Import icon untuk memperkuat visual dashboard
import { FaSearch, FaFilter, FaFileDownload, FaEllipsisV, FaShoppingBag } from 'react-icons/fa';

// Generate 30 Data JSON Order
const ordersData = Array.from({ length: 30 }, (_, index) => {
  const statuses = ['Completed', 'Pending', 'Cancelled'];
  return {
    id: `ORD-${(index + 1).toString().padStart(4, '0')}`,
    customerName: `Customer ${Math.floor(Math.random() * 30) + 1}`,
    status: statuses[index % 3],
    totalPrice: (Math.floor(Math.random() * 50) + 10) * 10000, // Simpan dalam angka untuk formatting
    orderDate: `2026-04-${(index % 28 + 1).toString().padStart(2, '0')}`,
  };
});

export default function Orders() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Fungsi untuk format Rupiah
  const formatIDR = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div id="orders-page" className="flex-1 w-full pb-10 bg-gray-50 min-h-screen p-4 md:p-8">
      
      <PageHeader title="Orders" breadcrumb={["Dashboard", "Order Management"]}>
        <div className="flex gap-3">
          {/* Tombol Export - Tambahan agar terlihat lebih Pro */}
          <button className="hidden md:flex items-center gap-2 bg-white text-gray-600 px-4 py-2.5 rounded-xl border border-gray-200 font-bold text-sm hover:bg-gray-50 transition-all">
            <FaFileDownload /> Export
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-hijau text-white px-6 py-2.5 rounded-xl shadow-lg shadow-green-200 hover:bg-emerald-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-bold flex items-center gap-2 text-sm"
          >
            <span className="text-xl">+</span> Add Orders
          </button>
        </div>
      </PageHeader>

      {/* Tabel Kontainer */}
      <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 mt-6">
        
        {/* Toolbar: Search & Filter */}
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
              <FaSearch />
            </span>
            <input 
              type="text" 
              placeholder="Search by Order ID or Customer..." 
              className="block w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-hijau transition-all outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 text-gray-500 bg-gray-100 px-4 py-2 rounded-xl text-xs font-bold hover:bg-gray-200 transition-all">
            <FaFilter /> Filter Status
          </button>
        </div>

        {/* Area Tabel */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 uppercase text-[11px] tracking-widest border-b border-gray-50">
                <th className="px-6 py-4 font-bold">Order ID</th>
                <th className="px-6 py-4 font-bold">Customer Name</th>
                <th className="px-6 py-4 font-bold">Order Date</th>
                <th className="px-6 py-4 font-bold">Total Amount</th>
                <th className="px-6 py-4 font-bold text-center">Status</th>
                <th className="px-6 py-4 font-bold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {ordersData.map((order) => (
                <tr key={order.id} className="group hover:bg-gray-50/50 transition-all duration-200">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center text-xs">
                        <FaShoppingBag />
                      </div>
                      <span className="text-sm font-black text-gray-800 tracking-tight">{order.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-600">{order.customerName}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs text-gray-400 font-medium">{order.orderDate}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-black text-gray-800">{formatIDR(order.totalPrice)}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-600 border border-green-200' :
                      order.status === 'Pending' ? 'bg-amber-100 text-amber-600 border border-amber-200' :
                      'bg-red-100 text-red-600 border border-red-200'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                         order.status === 'Completed' ? 'bg-green-500' :
                         order.status === 'Pending' ? 'bg-amber-500' :
                         'bg-red-500'
                      }`}></span>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-gray-300 hover:text-gray-600 p-2 rounded-lg transition-all">
                      <FaEllipsisV />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Tabel */}
        <div className="p-6 bg-gray-50/30 border-t border-gray-50 flex justify-between items-center">
          <span className="text-xs text-gray-400 font-medium">Showing top 30 transactions for April 2026</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-xs font-bold text-hijau hover:shadow-md transition-all">View All Orders</button>
          </div>
        </div>
      </div>

      {/* Modal Add Order - Dipercantik */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md p-8 transform animate-fade-in-up">
            <div className="flex justify-between items-center border-b border-gray-50 pb-5 mb-6">
              <h2 className="text-2xl font-black text-gray-800">Create New Order</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-red-500 text-2xl font-bold transition-colors">&times;</button>
            </div>
            
            <div className="space-y-5">
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Customer Name</label>
                <input type="text" placeholder="Search customer name..." className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-hijau" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Total Amount (IDR)</label>
                <input type="number" placeholder="50000" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-hijau" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Order Status</label>
                <select className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-hijau appearance-none">
                  <option>Pending</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-10">
              <button onClick={() => setIsModalOpen(false)} className="w-full py-4 bg-hijau text-white font-black rounded-2xl shadow-lg shadow-green-100 hover:bg-emerald-600 transition-all active:scale-95">Confirm & Save Order</button>
              <button onClick={() => setIsModalOpen(false)} className="w-full py-3 text-gray-400 font-bold hover:text-gray-600 transition-all">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}