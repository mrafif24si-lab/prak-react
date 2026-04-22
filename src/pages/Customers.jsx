import React, { useState } from 'react';
import PageHeader from "../components/PageHeader";
// Import icon tambahan untuk mempercantik UI
import { FaSearch, FaEllipsisV, FaUserCircle } from 'react-icons/fa';

// Generate 30 Data JSON Customer
const customersData = Array.from({ length: 30 }, (_, index) => ({
  id: `CUST-${(index + 1).toString().padStart(3, '0')}`,
  name: `Rafif Client ${index + 1}`,
  email: `client${index + 1}@mail.com`,
  phone: `081234567${(index % 10).toString().padStart(2, '0')}`,
  loyalty: index % 3 === 0 ? 'Gold' : index % 2 === 0 ? 'Silver' : 'Bronze',
}));

export default function Customers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Fungsi untuk mendapatkan warna inisial avatar secara acak/tetap
  const getAvatarColor = (name) => {
    const colors = ['bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-orange-500', 'bg-indigo-500'];
    const charCode = name.charCodeAt(0);
    return colors[charCode % colors.length];
  };

  return (
    <div id="customers-page" className="flex-1 w-full pb-10 bg-gray-50 min-h-screen p-4 md:p-8">
      
      <PageHeader title="Customers" breadcrumb={["Dashboard", "Customer List"]}>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-hijau text-white px-6 py-2.5 rounded-xl shadow-lg shadow-green-200 hover:bg-emerald-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-bold flex items-center gap-2"
        >
          <span className="text-xl">+</span> Add Customer
        </button>
      </PageHeader>

      {/* Kontainer Utama Tabel */}
      <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 mt-6">
        
        {/* Toolbar Atas: Search & Filter */}
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
              <FaSearch />
            </span>
            <input 
              type="text" 
              placeholder="Search customers..." 
              className="block w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-hijau transition-all outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="text-sm text-gray-400 font-medium">
            Showing <span className="text-gray-800 font-bold">30</span> Customers
          </div>
        </div>

        {/* Tabel */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 uppercase text-[11px] tracking-widest border-b border-gray-50">
                <th className="px-6 py-4 font-bold">Customer</th>
                <th className="px-6 py-4 font-bold">Contact Info</th>
                <th className="px-6 py-4 font-bold">Customer ID</th>
                <th className="px-6 py-4 font-bold text-center">Loyalty</th>
                <th className="px-6 py-4 font-bold text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {customersData.map((cust) => (
                <tr key={cust.id} className="group hover:bg-gray-50/50 transition-all duration-200">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar Bulat dengan Inisial */}
                      <div className={`w-10 h-10 rounded-full ${getAvatarColor(cust.name)} flex items-center justify-center text-white font-bold shadow-inner uppercase`}>
                        {cust.name.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-800 group-hover:text-hijau transition-colors">{cust.name}</span>
                        <span className="text-[11px] text-gray-400">Regular Member</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-600">{cust.email}</span>
                      <span className="text-xs text-gray-400">{cust.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <code className="bg-gray-100 px-2 py-1 rounded text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
                      {cust.id}
                    </code>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      cust.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-600 border border-yellow-200' :
                      cust.loyalty === 'Silver' ? 'bg-slate-100 text-slate-500 border border-slate-200' :
                      'bg-orange-100 text-orange-600 border border-orange-200'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                         cust.loyalty === 'Gold' ? 'bg-yellow-500' :
                         cust.loyalty === 'Silver' ? 'bg-slate-400' :
                         'bg-orange-500'
                      }`}></span>
                      {cust.loyalty}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-gray-300 hover:text-gray-600 transition-colors p-2 rounded-lg hover:bg-white shadow-none hover:shadow-sm">
                      <FaEllipsisV />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Dummy */}
        <div className="p-6 bg-gray-50/30 border-t border-gray-50 flex justify-between items-center">
          <span className="text-xs text-gray-400">Page 1 of 3</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white border border-gray-200 rounded text-xs text-gray-400 cursor-not-allowed">Prev</button>
            <button className="px-3 py-1 bg-white border border-gray-200 rounded text-xs text-hijau font-bold hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>

      {/* Modal Add Customer (Tetap sama seperti kodemu sebelumnya) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-40 backdrop-blur-sm transition-opacity p-4">
            <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md p-8 transform transition-all scale-100 animate-fade-in-up">
                <div className="flex justify-between items-center border-b border-gray-50 pb-5 mb-6">
                    <h2 className="text-2xl font-black text-gray-800">New Customer</h2>
                    <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors text-2xl font-bold">&times;</button>
                </div>
                
                <div className="space-y-5">
                    <div className="group">
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-hijau transition-colors">Full Name</label>
                        <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border-none rounded-2xl p-3.5 outline-none focus:ring-2 focus:ring-hijau transition-all" />
                    </div>
                    <div className="group">
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-hijau transition-colors">Email Address</label>
                        <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border-none rounded-2xl p-3.5 outline-none focus:ring-2 focus:ring-hijau transition-all" />
                    </div>
                    <div className="group">
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-hijau transition-colors">Phone</label>
                        <input type="text" placeholder="081234..." className="w-full bg-gray-50 border-none rounded-2xl p-3.5 outline-none focus:ring-2 focus:ring-hijau transition-all" />
                    </div>
                </div>

                <div className="flex justify-end gap-3 mt-10">
                    <button onClick={() => setIsModalOpen(false)} className="px-6 py-3 text-gray-400 font-bold hover:bg-gray-50 rounded-2xl transition-all">Discard</button>
                    <button onClick={() => setIsModalOpen(false)} className="px-8 py-3 bg-hijau text-white font-black rounded-2xl shadow-lg shadow-green-100 hover:shadow-xl hover:bg-emerald-600 transition-all active:scale-95">Save Customer</button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}