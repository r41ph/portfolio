import { createContext, useReducer } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { Header } from "./Header";
import { DarkMode } from "../components/DarkMode/DarkMode";
import { Navigation } from "../components/Navigation/Navigation";
import {
  AppContextType,
  AppState,
  AppAction,
  ActionType,
  isProjectAction,
  isLabAction,
} from "../../types/types";

const initialState: AppState = { projects: [], labs: [] };

const reducer = (state: AppState, action: AppAction): AppState => {
  if (action.type === ActionType.SET_PROJECT && isProjectAction(action)) {
    return { ...state, projects: action.payload };
  }
  if (action.type === ActionType.SET_LAB && isLabAction(action)) {
    return { ...state, labs: action.payload };
  }
  return state;
};

export const AppContext = createContext<AppContextType>({
  state: initialState,
  setState: () => null,
});

export function Layout() {
  const [state, setState] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, setState }}>
      <Header>
        <Navigation />
      </Header>
      <main className="max-w-5xl mx-auto px-5 xl:px-0 relative z-50">
        <Outlet />
      </main>
      <Footer />
      {state?.labs?.length || (state?.projects?.length && <DarkMode />)}
    </AppContext.Provider>
  );
}
