import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { DarkMode } from "../../components/DarkMode/DarkMode";
import { Navigation } from "../../components/Navigation/Navigation";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header>
        <Navigation />
      </Header>
      <main className="max-w-5xl mx-auto px-5 xl:px-0 relative z-50">
        <Outlet />
      </main>
      <Footer />
      <DarkMode />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
