"use client";

import CookieConsent, { Cookies } from "react-cookie-consent";
import { useLanguage } from "@/context/LanguageContext";

declare function gtag(...args: unknown[]): void;

function updateConsent(granted: boolean) {
  if (typeof gtag !== "undefined") {
    gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
      ad_storage: "denied", // always denied — we don't run ads
    });
  }
}

export default function CookieBanner() {
  const { language } = useLanguage();

  const text =
    language === "fr"
      ? "Ce site utilise Google Analytics pour analyser le trafic. Ces données nous aident à améliorer votre expérience."
      : "This site uses Google Analytics to analyze traffic. This data helps us improve your experience.";

  const acceptLabel = language === "fr" ? "Accepter" : "Accept";
  const declineLabel = language === "fr" ? "Refuser" : "Decline";

  return (
    <CookieConsent
      location="bottom"
      cookieName="ga_consent"
      enableDeclineButton
      buttonText={acceptLabel}
      declineButtonText={declineLabel}
      onAccept={() => updateConsent(true)}
      onDecline={() => updateConsent(false)}
      expires={365}
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
