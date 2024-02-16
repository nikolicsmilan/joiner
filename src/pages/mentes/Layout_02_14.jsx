

import React, { useRef, useEffect, useState } from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const divRefs = useRef({});
  const [divWidths, setDivWidths] = useState({});

  useEffect(() => {
    const handleResize = () => {
      const newWidths = {};
      Object.keys(divRefs.current).forEach((key) => {
        if (divRefs.current[key]) {
          newWidths[key] = divRefs.current[key].offsetWidth;
        } else {
          newWidths[key] = 0;
        }
      });
      setDivWidths(newWidths);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [divRefs]);

  return (
    <div className=" lg:max-w-6xl mx-auto lg:px-4 bg-white">
      <MainNavigation />
      <main>
      <Outlet />
      </main>
    
    </div>
  );
};

export default Layout;
/*
backgroundImage: theme => ({
  'image-small': "url('../../assets/images/background-image-small.jpg')",
  'image-medium': "url('../../assets/images/background-image-medium.jpg')",
  'image-large': "url('../../assets/images/background-image-large.jpg')",
}),

*/