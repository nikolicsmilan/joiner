import React, { useRef, useState } from "react";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { motion, AnimatePresence } from "framer-motion";
import { myAnimation } from "../config/motion";
const Layout = () => {
  const [toggle, setToggle] = useState(false);
  const bookingformRef = useRef();
  return (
    <div className=" lg:max-w-6xl mx-auto lg:px-4 bg-white">
      <header>
        <MainNavigation bookingformRef={bookingformRef} toggle={toggle} setToggle={setToggle} />
      </header>

      <AnimatePresence>
        {toggle && (
          <motion.aside
            {...myAnimation("left")}
            className=" lg:hidden bg-stone-600 opacity-90 w-80 h-full z-50 absolute top-0 left-0"
          >
            <SideBar />
          </motion.aside>
        )}
      </AnimatePresence>

      <main className="z-40">
        <Outlet context={bookingformRef} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;