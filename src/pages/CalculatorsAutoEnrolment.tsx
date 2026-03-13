import { useEffect } from "react";
import { SITE } from "@/content/site";

export function CalculatorsAutoEnrolment() {
  useEffect(() => {
    window.location.href = SITE.externalLinks.autoEnrolment;
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <p className="text-[var(--color-slate)]">Redirecting to the Auto Enrolment Calculator...</p>
      <a
        href={SITE.externalLinks.autoEnrolment}
        className="mt-4 inline-block text-[var(--color-gold)] hover:underline"
      >
        Click here if you are not redirected
      </a>
    </div>
  );
}
