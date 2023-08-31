import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { Header } from "./Header";
import { DarkMode } from "../components/DarkMode/DarkMode";

export function Layout() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-5 xl:px-0 relative z-50">
        <Outlet />
      </main>
      <Footer />
      <DarkMode />
    </>
  );
}
