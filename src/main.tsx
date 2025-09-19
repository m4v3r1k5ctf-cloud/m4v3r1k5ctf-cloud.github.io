import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Dynamically set favicon from public asset for reliability on GitHub Pages
const ensureFavicon = () => {
  const iconUrl = "/mavericks-favicon.png";
  const setIcon = (rel: string) => {
    let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = rel;
      document.head.appendChild(link);
    }
    link.href = iconUrl;
  };

  setIcon("icon");
  setIcon("apple-touch-icon");
};

ensureFavicon();

createRoot(document.getElementById("root")!).render(<App />);
