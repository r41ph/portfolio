import { Route, Routes } from "react-router-dom";
import { Layout } from "./portfolio/Layout";
import { Work } from "./portfolio/Work";
import { Labs } from "./portfolio/Labs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Work />} />
        <Route path="/labs" element={<Labs />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
