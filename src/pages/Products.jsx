import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Import ini di bagian atas
import PageHeader from "../components/PageHeader";
import {
  FaSearch,
  FaFilter,
  FaFileDownload,
  FaEllipsisV,
  FaBoxOpen,
} from "react-icons/fa";

// 1. Persiapan 30 Data JSON Produk sesuai ketentuan dosen
const productsData = Array.from({ length: 30 }, (_, index) => {
  const categories = ["Electronics", "Furniture", "Apparel", "Food & Beverage"];
  const brands = ["Samsung", "IKEA", "Nike", "Nestle", "Apple", "Logitech"];

  return {
    id: index + 1,
    code: `PRD-${(index + 1).toString().padStart(4, "0")}`,
    title: `Product Item ${index + 1}`,
    category: categories[index % categories.length],
    brand: brands[index % brands.length],
    price: (Math.floor(Math.random() * 100) + 5) * 10000,
    stock: Math.floor(Math.random() * 100) + 1,
  };
});

export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Fungsi format Rupiah
  const formatIDR = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div
      id="products-page"
      className="flex-1 w-full pb-10 bg-gray-50 min-h-screen p-4 md:p-8"
    >
      <PageHeader
        title="Products"
        breadcrumb={["Dashboard", "Product Management"]}
      >
        <div className="flex gap-3">
          <button className="hidden md:flex items-center gap-2 bg-white text-gray-600 px-4 py-2.5 rounded-xl border border-gray-200 font-bold text-sm hover:bg-gray-50 transition-all">
            <FaFileDownload /> Export Data
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-hijau text-white px-6 py-2.5 rounded-xl shadow-lg shadow-green-200 hover:bg-emerald-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-bold flex items-center gap-2 text-sm"
          >
            <span className="text-xl">+</span> Add Product
          </button>
        </div>
      </PageHeader>

      <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 mt-6">
        {/* Toolbar */}
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search by product name or code..."
              className="block w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-hijau transition-all outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 text-gray-500 bg-gray-100 px-4 py-2 rounded-xl text-xs font-bold hover:bg-gray-200 transition-all">
            <FaFilter /> All Categories
          </button>
        </div>

        {/* Tabel Area */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 uppercase text-[11px] tracking-widest border-b border-gray-50">
                <th className="px-6 py-4 font-bold">Product Info</th>
                <th className="px-6 py-4 font-bold">Category</th>
                <th className="px-6 py-4 font-bold">Brand</th>
                <th className="px-6 py-4 font-bold">Price</th>
                <th className="px-6 py-4 font-bold text-center">Stock</th>
                <th className="px-6 py-4 font-bold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {productsData.map((product) => (
                <tr
                  key={product.id}
                  className="group hover:bg-gray-50/50 transition-all duration-200"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-green-50 text-hijau flex items-center justify-center text-lg">
                        <FaBoxOpen />
                      </div>
                      <div className="flex flex-col">
                        {/* Ubah ini menjadi Link */}
                        <Link
                          to={`/products/${product.id}`}
                          className="text-sm font-black text-hijau hover:text-emerald-700 hover:underline transition-all"
                        >
                          {product.title}
                        </Link>
                        <span className="text-[10px] text-gray-400 font-bold tracking-wider">
                          {product.code}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-600">
                    {product.brand}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-black text-gray-800">
                      {formatIDR(product.price)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`text-sm font-bold ${product.stock < 10 ? "text-red-500" : "text-gray-600"}`}
                    >
                      {product.stock} pcs
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

        {/* Footer */}
        <div className="p-6 bg-gray-50/30 border-t border-gray-50 flex justify-between items-center">
          <span className="text-xs text-gray-400 font-medium">
            Total Inventory: {productsData.length} items
          </span>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-xs font-bold text-hijau hover:shadow-md transition-all">
              Next Page
            </button>
          </div>
        </div>
      </div>

      {/* Modal Add Product (Sesuai gaya Orders) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md p-8">
            <div className="flex justify-between items-center border-b border-gray-50 pb-5 mb-6">
              <h2 className="text-2xl font-black text-gray-800">New Product</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-red-500 text-2xl font-bold"
              >
                &times;
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                  Product Title
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-hijau"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                    Category
                  </label>
                  <select className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm outline-none">
                    <option>Electronics</option>
                    <option>Furniture</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                    Price
                  </label>
                  <input
                    type="number"
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-10">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full py-4 bg-hijau text-white font-black rounded-2xl hover:bg-emerald-600 transition-all"
              >
                Save Product
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full py-3 text-gray-400 font-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
