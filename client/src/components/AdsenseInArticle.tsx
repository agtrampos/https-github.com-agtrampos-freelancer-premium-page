import { useEffect } from "react";

export default function AdsenseInArticle() {
  useEffect(() => {
    try {
      const w = window as any;
      if (w.adsbygoogle && Array.isArray(w.adsbygoogle)) {
        w.adsbygoogle.push({});
      }
    } catch {}
  }, []);
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", textAlign: "center" }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-3760584892452822"
      data-ad-slot="5945627097"
    />
  );
}
