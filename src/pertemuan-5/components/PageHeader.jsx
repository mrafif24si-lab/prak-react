import React from 'react';

export default function PageHeader() {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4 mb-2">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-2xl font-bold text-gray-800">
                    Dashboard
                </span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-1 mt-1 text-xs text-gray-400">
                    <span className="cursor-pointer hover:text-hijau">Home</span>
                    <span>/</span>
                    <span className="cursor-pointer hover:text-hijau">Home Detail</span>
                    <span>/</span>
                    <span>Home Very Detail</span>
                </div>
            </div>
        </div>
    );
}