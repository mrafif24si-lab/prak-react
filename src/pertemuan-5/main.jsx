    import React from "react";
    import ReactDOM from "react-dom/client";
    import Sidebar from "./layouts/Sidebar";
    import Header from "./layouts/Header";
    import Dashboard from "./pages/Dashboard"; 
    import "./assets/tailwind.css"; 

    ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* App Container */}
        <div id="app-container" className="bg-latar min-h-screen flex font-barlow">
        
        {/* Wrapper untuk Sidebar dan Main Content */}
        <div id="layout-wrapper" className="flex flex-row flex-1">
            
            <Sidebar />
            
            <div id="main-content" className="flex-1 flex flex-col h-screen overflow-y-auto">
            <Header />
            <Dashboard />
            </div>
            
        </div>

        </div>
    </React.StrictMode>
    );