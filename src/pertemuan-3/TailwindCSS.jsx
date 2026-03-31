// export default function TailwindCSS(){
//     return (
//         <div>
//             <FlexboxGrid/>
//             <h1 class="border m-4">Belajar Tailwind CSS 4</h1>
//             <button className="bg-blue-500 text-white px-4 py-2 mx-4 rounded shadow-lg">Click Me</button>
//             <Spacing title="Judul Card" content="Ini Merupakan isi Card Spacing"/>
//             <Spacing title="Judul Card" content="Ini Merupakan isi Card Spacing"/>
//             <Typography/>
//             <BorderRadius/>
//             <BackgroundColors/>
//             <ShadowEffects/>
//         </div>
//     )
// }

// function Spacing(props){
//     return (
//         <div className="bg-gray-500 shadow-lg p-5 m-4 rounded-lg">
//             <h2 className="text-lg font-semibold">{props.title}</h2>
//             <p className="mt-2 text-white">{props.content}</p>
//         </div>
//     )
// }

// function Typography(){
//     return (
//         <div className="ml-4 underline">
//             <h1 className="text-3xl font-bold text-blue-900">Tailwind Typography</h1>
//             <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
//         </div>
//     )
// }

// function BorderRadius(){
//     return (
//         <div>
//             <button className="m-4 border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-lg"> Klik Saya </button>
//             <button className="m-4 border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-lg"> Klik Saya </button>
//         </div>
//     )
// }

// function BackgroundColors(){
//     return(
//         <div className="m-4 bg-blue-500 text-white p-6 rounded-lg hover:bg-blue-700 ">
//             <h3 className="text-xl font-bold">Tailwind Colors</h3>
//             <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
//         </div>
//     )
// }

// function FlexboxGrid(){
//     return (
//         <nav className="flex justify-between bg-gray-800 p-4 text-white">
//             <h1 className="text-lg font-bold">MyWebsite</h1>
//             <ul className="flex space-x-4">
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">About</a></li>
//                 <li><a href="#">Contact</a></li>
//             </ul>
//             <h1 className="text-lg font-bold">Login</h1>
//         </nav>
//     )
// }

// function ShadowEffects(){
//     return (
//         <div className="m-4 bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
//             <h3 className="text-xl font-semibold">Hover me!</h3>
//             <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
//         </div>
//     )
// }
import React from 'react';

export default function TravelApp() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
            <Navbar />
            
            {/* Hero Section with Search Box */}
            <div className="bg-blue-500 pt-12 pb-32 px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Dari Asia Tenggara Ke Dunia
                    </h1>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
                        Temukan harga terbaik untuk tiket pesawat, hotel, dan atraksi wisata. Semua dalam satu aplikasi.
                    </p>
                </div>
            </div>

            {/* Floating Search Box (Overlapping Hero) */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 mb-16">
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <div className="flex flex-wrap gap-4 mb-6 border-b border-gray-100 pb-4">
                        <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-2 px-2 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Pesawat
                        </button>
                        <button className="text-gray-500 font-medium hover:text-blue-500 pb-2 px-2 flex items-center gap-2 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            Hotel
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-500 mb-1">Tujuan / Destinasi</label>
                            <input type="text" placeholder="Mau ke mana?" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Tanggal Pergi</label>
                            <input type="date" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                        </div>
                        <div className="flex items-end">
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                Cari
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Promo Destinations Section */}
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Destinasi Populer</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <DestinationCard 
                        title="Eksplorasi Bali" 
                        price="Mulai dari Rp 650.000"
                        content="Nikmati pantai pasir putih dan budaya yang kental. Tersedia diskon hotel hingga 30%."
                        icon="beach"
                    />
                    <DestinationCard 
                        title="Liburan ke Tokyo" 
                        price="Mulai dari Rp 4.500.000"
                        content="Jelajahi keindahan musim semi di Jepang. Pesan tiket pesawat dan hotel sekaligus lebih hemat."
                        icon="city"
                    />
                </div>

                {/* Value Proposition Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
                    <ValueProposition />
                </div>

                {/* Call to Action Buttons */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-900">Kelola Pesanan Anda</h3>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <ActionButtons />
                    </div>
                </div>

                {/* Promo Banner & Feature */}
                <div className="grid md:grid-cols-2 gap-6">
                    <DiscountBanner />
                    <FeatureCard />
                </div>
            </div>
        </div>
    )
}

function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-2 cursor-pointer">
                        {/* Logo Mockup */}
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                        </div>
                        <span className="text-2xl font-black text-blue-500 tracking-tight">
                            traveloka
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        {['Promo', 'Pesanan Saya', 'Simpanan', 'Bantuan'].map((item) => (
                            <a key={item} href="#" className="text-sm text-gray-600 hover:text-blue-500 font-medium transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="text-blue-600 font-semibold px-4 py-2 text-sm hover:bg-blue-50 rounded-lg transition-colors">
                            Log In
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 text-sm rounded-lg shadow-sm transition-colors">
                            Daftar
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

function DestinationCard({ title, content, price, icon }) {
    return (
        <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                        {icon === 'beach' ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        )}
                    </div>
                    <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded-md">PROMO</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {content}
                </p>
            </div>
            <div className="mt-auto">
                <span className="text-orange-500 font-black text-lg">{price}</span>
            </div>
        </div>
    )
}

function ValueProposition() {
    return (
        <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Kenapa Pesan di Sini?</h2>
                <p className="text-gray-600 leading-relaxed">
                    Kami menjamin kenyamanan dan keamanan transaksi Anda. Dapatkan harga jujur tanpa biaya tersembunyi, serta layanan pelanggan yang siap membantu 24/7 di mana pun Anda berada.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                    {['Bebas Khawatir', 'Harga Jujur', 'Smart Algorithm'].map((tag) => (
                        <span key={tag} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="hidden md:block w-32 h-32 opacity-20">
                <svg fill="currentColor" className="text-blue-500" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </div>
        </div>
    )
}

function ActionButtons() {
    return (
        <>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-lg shadow-md transition-all">
                Cek E-Tiket Saya
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 font-semibold px-6 py-2.5 rounded-lg transition-all">
                Reschedule Jadwal
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 font-semibold px-6 py-2.5 rounded-lg transition-all">
                Refund Transaksi
            </button>
        </>
    )
}

function DiscountBanner() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 text-white p-8 rounded-2xl shadow-lg">
            <div className="relative z-10">
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block shadow-sm">
                    PAYDAY PROMO
                </span>
                <h3 className="text-2xl font-black mb-2">Diskon s.d 50%</h3>
                <p className="text-blue-50 mb-6 text-sm">
                    Pesan hotel & tiket pesawat pakai PayLater. Bebas bunga cicilan bulan pertama!
                </p>
                <button className="bg-white text-blue-600 font-bold px-5 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                    Klaim Kupon
                </button>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full border-4 border-white/20"></div>
            <div className="absolute bottom-0 right-10 -mb-4 w-16 h-16 rounded-full bg-white/10"></div>
        </div>
    )
}

function FeatureCard() {
    return (
        <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                    Traveloka PayLater
                </h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Liburan sekarang, bayar nanti. Proses pendaftaran cepat, aman, dan langsung bisa dipakai untuk semua produk di aplikasi.
            </p>
            <a href="#" className="text-blue-500 font-semibold text-sm flex items-center gap-1 hover:text-blue-700">
                Pelajari Selengkapnya 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>
        </div>
    )
}