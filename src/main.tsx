import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GalleryPage } from "./components/GalleryPage.tsx";
import { Navigation } from "./components/Navigation.tsx";
import { Footer } from "./components/Footer.tsx";
import "./index.css";

const path = window.location.pathname;
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {path === "/gallery" ? (
      <div className="font-sans text-gray-800 antialiased overflow-x-hidden">
        <Navigation />
        <GalleryPage />
        <Footer />
      </div>
    ) : (
      <App />
    )}
  </StrictMode>
);
