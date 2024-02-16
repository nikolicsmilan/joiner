/*import React from 'react';
import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom'
const Root = () => {
  return (
    <div className=''>
        <MainNavigation/>
        <div className=' bg-gray-400 mx-auto px-4'>
        semmi
        </div>
        <div className='2xl:container bg-orange-400 mx-auto px-4'>
       2xl
        </div>
        <div className='xl:container bg-lime-400 mx-auto px-4'>
       xl
        </div>
        <div className='lg:container bg-red-400 mx-auto px-4'>
       lg
        </div>
        <div className='md:container bg-sky-400 mx-auto px-4'>
       md
        </div>
        <div className='sm:container bg-purple-400 mx-auto px-4'>
       sm
        </div>
      
        <Outlet/>
    </div>
  )
}

export default Root*/
//lg:container mx-auto px-4

import React, { useRef, useEffect, useState } from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

const Root = () => {
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
    <div className="">
      <MainNavigation />
      <div
        ref={(el) => (divRefs.current["div1"] = el)}
        className=" bg-gray-400 mx-auto px-4 text-center"
      >
        semmi - Az elem szélessége: {divWidths["div1"]}px
      </div>
      <div
        ref={(el) => (divRefs.current["div2"] = el)}
        className="2xl:container bg-orange-400 mx-auto px-4 text-center"
      >
        2xl Az elem szélessége: {divWidths["div2"]}px
      </div>
      <div
        ref={(el) => (divRefs.current["div3"] = el)}
        className="xl:container bg-lime-400 mx-auto px-4 text-center"
      >
        xl Az elem szélessége: {divWidths["div3"]}px
      </div>
      <div
        ref={(el) => (divRefs.current["div4"] = el)}
        className="lg:container bg-red-400 mx-auto px-4 text-center"
      >
        lg Az elem szélessége: {divWidths["div4"]}px
      </div>
      <div
        ref={(el) => (divRefs.current["div5"] = el)}
        className="md:container bg-sky-400 mx-auto px-4 text-center"
      >
        md Az elem szélessége: {divWidths["div5"]}px
      </div>
      <div
        ref={(el) => (divRefs.current["div6"] = el)}
        className="sm:container bg-purple-400 mx-auto px-4 text-center"
      >
        sm Az elem szélessége: {divWidths["div6"]}px
      </div>
      <div
        ref={(el) => (divRefs.current["div7"] = el)}
        className="container bg-pink-400 mx-auto px-4 text-center"
      >
        sima container Az elem szélessége: {divWidths["div7"]}px
      </div>
      <Outlet />
      <div  ref={(el) => (divRefs.current["div8"] = el)} className="max-w-6xl mx-auto px-10 bg-red-400">
      <p className="my-5 text-lg leading-relaxed">
      Az elem szélessége: {divWidths["div8"]}px
        Szélesség: A tartalomszélességnek maximum 1200 pixelnek kell lennie. Ez biztosítja, hogy a tartalom kényelmesen olvasható legyen a legtöbb asztali számítógépen.
      </p>
      <p className="mb-5">Margó: A tartalom körül legalább 20 pixel margót kell hagyni. Ez segít a tartalom kiemelésében és a zsúfoltság elkerülésében.</p>
      <p className="mb-5 text-lg">Betűméret: A betűméretnek legalább 16 pixelnek kell lennie. Ez biztosítja, hogy a szöveg kényelmesen olvasható legyen a legtöbb ember számára.</p>
    </div>
    <div ref={(el) => (divRefs.current["div12"] = el)} className="mx-auto max-w-1120 bg-lime-300">
    Az elem szélessége: {divWidths["div12"]}px
</div>
    <div ref={(el) => (divRefs.current["div9"] = el)} class="max-w-3xl mx-auto bg-green-300">
 -- Ide helyezd el a tartalmadat  Az elem szélessége: {divWidths["div9"]}px
</div>

<div className="max-w-screen-lg mx-auto bg-orange-700" ref={(el) => (divRefs.current["div10"] = el)}>
 - Ide helyezd el a tartalmadat 2  Az elem szélessége: {divWidths["div10"]}px
</div>
<div ref={(el) => (divRefs.current["div11"] = el)} className="xl:container mx-auto px-4 bg-orange-300">
Az elem szélessége: {divWidths["div11"]}px
</div>
    </div>
  );
};

export default Root;