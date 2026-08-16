import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { sanitizeInactiveAffiliateUrl } from "@/lib/affiliateData";
import App from "./App.tsx";
import "./index.css";
import "./i18n/config";

// Safety net for historical hard-coded partner links.
// While a partner is inactive, known legacy affiliate parameters are stripped
// immediately before navigation so no unknown account can receive a commission.
document.addEventListener(
  "click",
  (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const anchor = target.closest("a[href]");
    if (!(anchor instanceof HTMLAnchorElement)) return;

    const sanitizedUrl = sanitizeInactiveAffiliateUrl(anchor.href);
    if (sanitizedUrl !== anchor.href) {
      anchor.href = sanitizedUrl;
    }
  },
  true,
);

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
    <Analytics />
  </HelmetProvider>
);
