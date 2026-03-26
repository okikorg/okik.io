import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { AxisPage } from "./pages/AxisPage";
import { AxisPrivacyPage } from "./pages/AxisPrivacyPage";
import { AxisSupportPage } from "./pages/AxisSupportPage";
import { BrainDumpPage } from "./pages/BrainDumpPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Analytics />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/axis" element={<AxisPage />} />
          <Route path="/products/axis/privacy" element={<AxisPrivacyPage />} />
          <Route path="/products/axis/support" element={<AxisSupportPage />} />
          <Route path="/products/brain-dump" element={<BrainDumpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
