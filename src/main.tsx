import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { useLocation } from "react-router-dom"; // ya está importado arriba...

createRoot(document.getElementById("root")!).render(<App />);

const MainContent = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <main className={`flex-grow px-4 ${isHome ? "" : "pt-32"}`}>
      {children}
    </main>
  );
};
