import Lenis from "lenis";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if the window width is above a certain threshold (typically around 1024px for laptops/desktops)
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 1024); // You can adjust the width threshold as needed
    };

    // Run on initial load
    checkDevice();

    // Add resize event listener to handle window resizing
    window.addEventListener("resize", checkDevice);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  useEffect(() => {
    if (isDesktop) {
      scrollTo(0, 0);
      const lenis = new Lenis();
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }, [isDesktop]);

  return (
    <>
      {/* <Cursor /> */}
      <Header />
      <div className="">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
}
