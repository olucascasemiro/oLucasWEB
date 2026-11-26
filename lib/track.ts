declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export function track(event: string, params?: Record<string, string | number | boolean>) {
  if (!GA_ID || typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", event, params);
}
