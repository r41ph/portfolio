import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TopBar } from "../../components/TopBar/TopBar";
import { NavigationItem } from "../../components/Navigation/NavigationItem";
import { NavigationLogo } from "../../components/Navigation/NavigationLogo";

const queryClient = new QueryClient();

export function Layout() {
  const location = useLocation();
  return (
    <QueryClientProvider client={queryClient}>
      <Header>
        <TopBar />
        {!location.pathname.includes("dashboard") && (
          <Navigation>
            <NavigationItem to="/" name="Work" />
            <NavigationLogo />
            <NavigationItem to="/labs" name="Labs" />
          </Navigation>
        )}
      </Header>
      <main className="max-w-5xl w-full mx-auto px-5 xl:px-0 relative z-50">
        <Outlet />
      </main>
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
