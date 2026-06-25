import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const KEY = "bw_cookies_v1";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    try { if (!localStorage.getItem(KEY)) setShow(true); } catch {}
  }, []);
  if (!show) return null;
  const accept = (v: "all" | "essential") => {
    try { localStorage.setItem(KEY, v); } catch {}
    setShow(false);
  };
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-7 md:right-auto md:max-w-md z-40 bg-paper border border-border shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] p-5">
      <p className="text-[13px] leading-[1.6] text-graphite">
        Usamos cookies para entender como você navega e melhorar sua experiência. Leia nossa{" "}
        <Link to="/cookies" className="underline">Política de Cookies</Link>.
      </p>
      <div className="mt-4 flex gap-3">
        <button onClick={() => accept("all")} className="btn-solid !py-2 !px-4 text-[10px]">Aceitar</button>
        <button onClick={() => accept("essential")} className="btn-outline !py-2 !px-4 text-[10px]">Somente essenciais</button>
      </div>
    </div>
  );
}
