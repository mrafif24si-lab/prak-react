import React from 'react';
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaArrowUp, FaArrowDown } from "react-icons/fa";
// Import komponen dari library Recharts
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PageHeader from "../components/PageHeader";

// Data dummy untuk grafik
const dataGrafik = [
  { name: 'Mon', revenue: 4000, orders: 24 },
  { name: 'Tue', revenue: 3000, orders: 13 },
  { name: 'Wed', revenue: 5000, orders: 38 },
  { name: 'Thu', revenue: 2780, orders: 20 },
  { name: 'Fri', revenue: 6890, orders: 48 },
  { name: 'Sat', revenue: 5390, orders: 38 },
  { name: 'Sun', revenue: 7490, orders: 53 },
];

export default function Dashboard() {
    return (
        <div id="dashboard-container" className="flex-1 w-full pb-10">
            
            <PageHeader title="Dasboard" />

            {/* Grid untuk 4 Card Statistik */}
            <div id="dashboard-grid" className="px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                
                {/* Card 1 */}
                <div className="relative overflow-hidden flex items-center bg-white rounded-xl shadow-sm p-6 border border-gray-100 group hover:shadow-md transition">
                    <div className="bg-hijau rounded-full p-4 mr-5 group-hover:scale-110 transition duration-300">
                        <FaShoppingCart className="text-3xl text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold text-gray-800">75</span>
                        <span className="text-gray-400 font-medium text-sm">Total Orders</span>
                    </div>
                    {/* IMPROVISASI: Trend Badge */}
                    <div className="absolute top-4 right-4 flex items-center text-green-500 bg-green-50 px-2 py-1 rounded-md text-xs font-bold">
                        <FaArrowUp className="mr-1 text-[10px]"/> 4%
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative overflow-hidden flex items-center bg-white rounded-xl shadow-sm p-6 border border-gray-100 group hover:shadow-md transition">
                    <div className="bg-biru rounded-full p-4 mr-5 group-hover:scale-110 transition duration-300">
                        <FaTruck className="text-3xl text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold text-gray-800">175</span>
                        <span className="text-gray-400 font-medium text-sm">Total Delivered</span>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center text-green-500 bg-green-50 px-2 py-1 rounded-md text-xs font-bold">
                        <FaArrowUp className="mr-1 text-[10px]"/> 12%
                    </div>
                </div>

                {/* Card 3 */}
                <div className="relative overflow-hidden flex items-center bg-white rounded-xl shadow-sm p-6 border border-gray-100 group hover:shadow-md transition">
                    <div className="bg-merah rounded-full p-4 mr-5 group-hover:scale-110 transition duration-300">
                        <FaBan className="text-3xl text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold text-gray-800">65</span>
                        <span className="text-gray-400 font-medium text-sm">Total Canceled</span>
                    </div>
                    {/* Badge Merah untuk hal negatif */}
                    <div className="absolute top-4 right-4 flex items-center text-red-500 bg-red-50 px-2 py-1 rounded-md text-xs font-bold">
                        <FaArrowDown className="mr-1 text-[10px]"/> 2%
                    </div>
                </div>

                {/* Card 4 */}
                <div className="relative overflow-hidden flex items-center bg-white rounded-xl shadow-sm p-6 border border-gray-100 group hover:shadow-md transition">
                    <div className="bg-kuning rounded-full p-4 mr-5 group-hover:scale-110 transition duration-300">
                        <FaDollarSign className="text-3xl text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold text-gray-800">$128</span>
                        <span className="text-gray-400 font-medium text-sm">Total Revenue</span>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center text-green-500 bg-green-50 px-2 py-1 rounded-md text-xs font-bold">
                        <FaArrowUp className="mr-1 text-[10px]"/> 8%
                    </div>
                </div>

            </div>

            {/* IMPROVISASI UTAMA: Grafik Data Interaktif */}
            <div className="px-4 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Revenue Overview</h3>
                            <p className="text-sm text-gray-400 mt-1">Weekly statistics of your restaurant</p>
                        </div>
                        <select className="border border-gray-200 text-gray-600 rounded-lg p-2 text-sm outline-none focus:ring-1 focus:ring-hijau">
                            <option>This Week</option>
                            <option>Last Week</option>
                        </select>
                    </div>
                    
                    {/* Area Grafik */}
                    <div className="w-full h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={dataGrafik} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#00B074" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="#00B074" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                                <Tooltip 
                                    contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                    cursor={{ stroke: '#00B074', strokeWidth: 1, strokeDasharray: '3 3' }}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="#00B074" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

        </div>
    );
}