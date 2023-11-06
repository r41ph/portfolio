import { Route, Routes } from "react-router-dom";
import { Layout } from "./portfolio/Layout/Layout";
import { Work } from "./portfolio/Work/Work";
import { Labs } from "./portfolio/Labs/Labs";
import { NotFound } from "./portfolio/Not-found/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Work />} />
        <Route path="/labs" element={<Labs />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
