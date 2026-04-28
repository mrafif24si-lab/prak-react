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

import React, { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/tailwind.css";

// import Dashboard from "./pages/Dashboard";
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
// import Orders from "./pages/Orders";
const Orders = React.lazy(() => import("./pages/Orders"))
// import Customers from "./pages/Customers";
const Customers = React.lazy(() => import("./pages/Customers"))
// import ErrorDisplay from "./pages/ErrorDisplay"; 
const ErrorDisplay = React.lazy(() => import("./pages/ErrorDisplay"))
// import MainLayout from "./layouts/MainLayout";
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
// import AuthLayout from "./layouts/AuthLayout";
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
// import Login from "./pages/Auth/Login";
const Login = React.lazy(() => import("./pages/Auth/Login"))
// import Register from "./pages/Auth/Register";
const Register = React.lazy(() => import("./pages/Auth/Register"))
// import Forgot from "./pages/Auth/Forget";
const Forgot = React.lazy(() => import("./pages/Auth/Forget"))

function App() {
  const [count, setCount] = useState(0);

  
  return (
    <Suspense fallback={<Loading />}>

          <Routes>
            <Route element={<MainLayout/>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/customers" element={<Customers/>} />
            <Route path="/error/:code" element={<ErrorDisplay />} />
            <Route path="*" element={<ErrorDisplay />} />
            </Route>
            <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
            </Route>
          </Routes>
          </Suspense>
          
       
  )
}

export default App;