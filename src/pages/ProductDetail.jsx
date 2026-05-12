import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaTag, FaBox, FaMoneyBillWave, FaStar } from "react-icons/fa";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (response.status !== 200) {
          setError("Gagal mengambil data");
          return;
        }
        setProduct(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]);

  if (error) return <div className="p-8 text-red-600 font-bold bg-red-50 rounded-xl m-8">Error: {error}</div>;
  if (!product) return (
    <div className="p-8 flex flex-col items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-hijau"></div>
      <p className="mt-4 text-gray-500 font-medium">Memuat detail produk...</p>
    </div>
  );

  return (
    <div className="p-6 lg:p-10 bg-latar min-h-screen font-barlow">
      {/* Tombol Kembali yang lebih elegan */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-400 hover:text-hijau mb-8 font-bold transition-all group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
        <span>Kembali ke Daftar Produk</span>
      </button>

      <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        
        {/* Sisi Kiri: Gambar Produk dengan Background Soft */}
        <div className="md:w-1/2 bg-gray-50/50 p-8 flex items-center justify-center border-r border-gray-50">
          <img 
            src={product.thumbnail} 
            alt={product.title} 
            className="w-full max-w-[350px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Sisi Kanan: Detail Informasi */}
        <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          {/* Badge Kategori */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-green-100 text-hijau rounded-full text-[10px] font-black uppercase tracking-widest">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-500">
              <FaStar className="text-xs" />
              <span className="text-xs font-bold text-gray-600">{product.rating}</span>
            </div>
          </div>
          
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">{product.title}</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l-4 border-gray-100 pl-4">
            {product.description}
          </p>

          {/* Grid Atribut */}
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100/50">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm text-blue-500 flex items-center justify-center">
                <FaTag />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Brand Resmi</p>
                <p className="text-sm font-extrabold text-gray-700">{product.brand || "No Brand"}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-green-50/50 rounded-2xl border border-green-100/50">
              <div className="w-10 h-10 rounded-xl bg-hijau text-white flex items-center justify-center shadow-md shadow-green-200">
                <FaMoneyBillWave />
              </div>
              <div>
                <p className="text-[10px] font-black text-hijau uppercase tracking-tighter">Harga Spesial</p>
                <p className="text-2xl font-black text-gray-900">
                  Rp {(product.price * 15000).toLocaleString('id-ID')}
                </p>
              </div>
            </div>
          </div>

          {/* Action Button (Opsional) */}
          <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-hijau transition-colors shadow-lg shadow-gray-200">
            Edit Data Produk
          </button>
        </div>
      </div>
    </div>
  );
}