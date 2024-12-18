import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { History } from "./pages/History/History";
import { DefaultLayout } from "./layouts/defaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<History />} />
      </Route>
    </Routes>
  );
}
