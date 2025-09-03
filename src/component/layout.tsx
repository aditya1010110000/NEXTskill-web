import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Navbar />

      <main className="flex-grow pt-20 pb-40">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;