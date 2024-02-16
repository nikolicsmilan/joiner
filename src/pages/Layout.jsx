import React from "react";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" lg:max-w-6xl mx-auto lg:px-4 bg-white">
      <hedaer>
        <MainNavigation />
      </hedaer>

      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
