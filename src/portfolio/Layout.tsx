import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "twin.macro";

export function Layout() {
  return (
    <>
      <Header></Header>
      <main tw="max-w-5xl mx-auto px-5 xl:px-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
