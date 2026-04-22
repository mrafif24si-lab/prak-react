// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./assets/tailwind.css";
// import Sidebar from "./layouts/Sidebar";
// import Header from "./layouts/Header";
// import Dashboard from "./pages/Dashboard";
// import { Route, Routes } from "react-router-dom";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customers";
// import NotFound from "./pages/NotFound";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div id="app-container" className="bg-latar min-h-screen flex font-barlow">
//       {/* Wrapper untuk Sidebar dan Main Content */}
//       <div id="layout-wrapper" className="flex flex-row flex-1">
//         <Sidebar />

//         <div
//           id="main-content"
//           className="flex-1 flex flex-col h-screen overflow-y-auto">
//           <Header />
//           <Routes>
//              <Route path="*" element={<NotFound />} />
//             <Route path="/"element={<Dashboard />} />
//             <Route path="/orders" element={<Orders/>} />
//             <Route path="/customers" element={<Customers/>} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ErrorDisplay from "./pages/ErrorDisplay"; // Import ErrorDisplay

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="app-container" className="bg-latar min-h-screen flex font-barlow">
      {/* Wrapper untuk Sidebar dan Main Content */}
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />

        <div
          id="main-content"
          className="flex-1 flex flex-col h-screen overflow-y-auto">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/customers" element={<Customers/>} />
            
            {/* Route dinamis untuk berbagai kode error */}
            <Route path="/error/:code" element={<ErrorDisplay />} />
            
            {/* Catch-all 404 menggunakan ErrorDisplay */}
            <Route path="*" element={<ErrorDisplay />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;