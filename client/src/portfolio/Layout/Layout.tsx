import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { DarkMode } from "../../components/DarkMode/DarkMode";
import { Navigation } from "../../components/Navigation/Navigation";

export function Layout() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main className="max-w-5xl mx-auto px-5 xl:px-0 relative z-50">
        <Outlet />
      </main>
      <Footer />
      <DarkMode />
    </>
  );
}
