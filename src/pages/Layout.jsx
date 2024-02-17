import React, { useRef } from "react";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const bookingformRef = useRef();
  return (
    <div className=" lg:max-w-6xl mx-auto lg:px-4 bg-white">
      <header>
        <MainNavigation bookingformRef={bookingformRef} />
      </header>

      <main>
        <Outlet context={bookingformRef} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
