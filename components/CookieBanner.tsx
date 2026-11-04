"use client";

import { useEffect } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { useLanguage } from "@/context/LanguageContext";

const CONSENT_COOKIE = "ga_consent";

type GtagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

/**
 * Charge Google Analytics UNIQUEMENT après consentement explicite (RGPD / CNIL).
 * Avant l'acceptation, aucun script Google n'est chargé et aucune requête
 * n'est envoyée : rien n'est collecté.
 */
function loadAnalytics(gaId: string) {
  const w = window as GtagWindow;
  if (w.gtag) {
    w.gtag("consent", "update", { analytics_storage: "granted" });
    return;
  }

  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };
  // Consentement par défaut refusé, puis accordé uniquement pour la mesure d'audience.
  w.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  w.gtag("consent", "update", { analytics_storage: "granted" });
  w.gtag("js", new Date());
  w.gtag("config", gaId, { anonymize_ip: true });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
  document.head.appendChild(script);
}

function revokeAnalytics() {
  const w = window as GtagWindow;
  if (w.gtag) {
    w.gtag("consent", "update", { analytics_storage: "denied" });
  }
}

export default function CookieBanner({ gaId }: { gaId: string }) {
  const { language } = useLanguage();

  // Visiteur ayant déjà accepté lors d'une visite précédente.
  useEffect(() => {
    if (Cookies.get(CONSENT_COOKIE) === "true") {
      loadAnalytics(gaId);
    }
  }, [gaId]);

  const text =
    language === "fr"
      ? "Ce site utilise Google Analytics pour mesurer l'audience, uniquement si vous l'acceptez."
      : "This site uses Google Analytics to measure traffic, only if you accept.";

  const acceptLabel = language === "fr" ? "Accepter" : "Accept";
  const declineLabel = language === "fr" ? "Refuser" : "Decline";

  return (
    <CookieConsent
      location="bottom"
      cookieName={CONSENT_COOKIE}
      enableDeclineButton
      buttonText={acceptLabel}
      declineButtonText={declineLabel}
      onAccept={() => loadAnalytics(gaId)}
      onDecline={revokeAnalytics}
      expires={180}
      containerClasses="!bg-gray-900/95 !backdrop-blur-md border-t border-white/10"
      contentClasses="!text-gray-300 !text-sm"
      buttonClasses="!bg-orange-600 hover:!bg-orange-500 !text-white !text-sm !font-medium !rounded-lg !px-5 !py-2 !transition-colors"
      declineButtonClasses="!bg-transparent !border !border-white/20 hover:!border-white/40 !text-gray-400 hover:!text-white !text-sm !font-medium !rounded-lg !px-5 !py-2 !transition-colors"
      style={{ alignItems: "center" }}
      buttonWrapperClasses="!flex !gap-2 !items-center"
    >
      {text}
    </CookieConsent>
  );
}
