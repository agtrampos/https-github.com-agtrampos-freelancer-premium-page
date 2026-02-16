import { useEffect } from "react";
import { useLocation } from "wouter";

export default function AdsenseAutoRelaxed() {
  const [pathname] = useLocation();
  useEffect(() => {
    try {
      const w = window as any;
      if (w.adsbygoogle && Array.isArray(w.adsbygoogle)) {
        w.adsbygoogle.push({});
      }
    } catch {}
  }, [pathname]);
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-format="autorelaxed"
      data-ad-client="ca-pub-3760584892452822"
      data-ad-slot="3783856394"
    />
  );
}
