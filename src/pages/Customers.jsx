import React from 'react';
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PageHeader from "../components/PageHeader";

// // Data dummy untuk grafik
// const dataGrafik = [
//   { name: 'Mon', revenue: 4000, orders: 24 },
//   { name: 'Tue', revenue: 3000, orders: 13 },
//   { name: 'Wed', revenue: 5000, orders: 38 },
//   { name: 'Thu', revenue: 2780, orders: 20 },
//   { name: 'Fri', revenue: 6890, orders: 48 },
//   { name: 'Sat', revenue: 5390, orders: 38 },
//   { name: 'Sun', revenue: 7490, orders: 53 },
// ];

export default function Customers() {
    return (
        <div id="dashboard-container" className="flex-1 w-full pb-10">
            
            <PageHeader title="Customers" />
            <p> Ini Halaman Customer</p>

            
        </div>
    );
}