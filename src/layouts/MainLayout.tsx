import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Cursor from "../components/Cursor";
import { useEffect } from "react";
import Lenis from "lenis";
import Footer from "../components/Footer";

export default function MainLayout() {
  useEffect(() => {
    scrollTo(0, 0);
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Cursor />
      <Header />
      <div className="space-mono">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
