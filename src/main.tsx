import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import logoUrl from "./assets/mavericks-logo.png";

// Dynamically set favicon from bundled asset
const ensureFavicon = () => {
  const setIcon = (rel: string) => {
    let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = rel;
      document.head.appendChild(link);
    }
    link.href = logoUrl;
  };

  setIcon("icon");
  setIcon("apple-touch-icon");
};

ensureFavicon();

createRoot(document.getElementById("root")!).render(<App />);
