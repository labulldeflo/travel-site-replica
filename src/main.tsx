import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import {
  getPartnerAffiliateState,
  sanitizeInactiveAffiliateUrl,
} from "@/lib/affiliateData";
import App from "./App.tsx";
import "./index.css";
import "./i18n/config";

const normalizePartnerAnchor = (anchor: HTMLAnchorElement) => {
  const sanitizedUrl = sanitizeInactiveAffiliateUrl(anchor.href);
  if (sanitizedUrl !== anchor.href) {
    anchor.href = sanitizedUrl;
  }

  const affiliateState = getPartnerAffiliateState(anchor.href);
  if (affiliateState !== false) return;

  const relTokens = new Set(
    anchor.rel
      .split(/\s+/)
      .map((token) => token.trim())
      .filter(Boolean),
  );

  relTokens.delete("sponsored");
  relTokens.add("noopener");
  if (anchor.target === "_blank") relTokens.add("noreferrer");

  const normalizedRel = Array.from(relTokens).join(" ");
  if (anchor.rel !== normalizedRel) {
    anchor.rel = normalizedRel;
  }
};

const normalizePartnerLinks = (root: ParentNode = document) => {
  root.querySelectorAll<HTMLAnchorElement>("a[href]").forEach(normalizePartnerAnchor);
};

// Safety net for historical hard-coded partner links and rel="sponsored" values.
// Inactive partners are normalized after React renders and again when the DOM changes.
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (!(node instanceof Element)) return;
      if (node instanceof HTMLAnchorElement && node.hasAttribute("href")) {
        normalizePartnerAnchor(node);
      }
      normalizePartnerLinks(node);
    });
  });
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true,
});

document.addEventListener(
  "click",
  (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const anchor = target.closest("a[href]");
    if (!(anchor instanceof HTMLAnchorElement)) return;
    normalizePartnerAnchor(anchor);
  },
  true,
);

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
    <Analytics />
  </HelmetProvider>
);

queueMicrotask(() => normalizePartnerLinks());
