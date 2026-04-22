import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ kodeError = "404", deskripsiError, gambarError }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#D6E2D5] font-sans p-6 overflow-hidden">
      
      {/* Efek Floating Animation untuk seluruh area konten */}
      <div className="animate-bounce-slow flex flex-col items-center">
        
        {/* Judul Atas dengan bayangan retro */}
        <h1 className="text-6xl font-black text-[#4A5946] mb-12 tracking-tighter drop-shadow-[4px_4px_0px_rgba(0,0,0,0.1)]">
          ERROR
        </h1>

        {/* Area 404 Interaktif */}
        <div className="flex items-center space-x-6">
          {/* Angka Pertama */}
          <span className="text-[140px] font-mono font-bold text-[#EF9365] leading-none select-none drop-shadow-[6px_6px_0px_rgba(74,89,70,0.2)]">
            {kodeError.charAt(0)}
          </span>
          
          {/* Wajah Pixel Sedih yang Interaktif */}
          <div className="relative group">
            <div className="w-28 h-28 bg-[#EF9365] flex flex-col items-center justify-center rounded-sm shadow-[8px_8px_0px_0px_rgba(74,89,70,1)] transform transition-transform group-hover:scale-110 group-hover:-rotate-3 duration-300">
              {/* Mata dengan animasi berkedip otomatis */}
              <div className="flex justify-between w-14 mb-5">
                <div className="w-4 h-4 bg-[#D6E2D5] animate-blink"></div>
                <div className="w-4 h-4 bg-[#D6E2D5] animate-blink"></div>
              </div>
              {/* Mulut Sedih */}
              <div className="w-12 h-3 bg-[#D6E2D5]"></div>
            </div>
          </div>

          {/* Angka Terakhir */}
          <span className="text-[140px] font-mono font-bold text-[#EF9365] leading-none select-none drop-shadow-[6px_6px_0px_rgba(74,89,70,0.2)]">
            {kodeError.charAt(2) || kodeError.charAt(1)}
          </span>
        </div>
      </div>

      {/* Deskripsi Teks */}
      <p className="mt-12 text-xl text-[#4A5946] font-bold text-center max-w-md leading-relaxed animate-fade-in">
        {deskripsiError || "We can't seem to find the page you are looking for!"}
      </p>

      {/* Tombol Home dengan Efek Tekan 3D */}
      <Link
        to="/"
        className="mt-10 px-12 py-3 bg-[#4A5946] text-[#D6E2D5] font-black text-lg rounded shadow-[0_6px_0_0_#2D362C] active:shadow-none active:translate-y-[6px] transition-all duration-150 uppercase tracking-widest"
      >
        Home
      </Link>

      {/* Tambahkan CSS Animasi Custom */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blink {
          0%, 90%, 100% { height: 16px; }
          95% { height: 2px; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-blink { animation: blink 4s infinite; }
        .animate-bounce-slow { animation: bounce-slow 5s ease-in-out infinite; }
        .animate-fade-in { animation: fadeIn 1.5s ease-out; }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </div>
  );
};

export default ErrorPage;