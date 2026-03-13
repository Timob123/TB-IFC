import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "ifc-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-slate-200 shadow-lg p-4 md:p-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm text-[var(--color-slate)]">
          This site uses cookies for analytics and to improve your experience. By clicking Accept, you consent to our use of cookies.{" "}
          <Link to="/privacy" className="text-[var(--color-gold)] hover:underline underline-offset-2">
            Learn more in our privacy policy
          </Link>
          .
        </p>
        <div className="flex gap-3">
          <button
            onClick={accept}
            className="px-4 py-2 bg-[var(--color-navy)] text-white rounded-md text-sm font-medium hover:bg-[var(--color-navy-light)] transition-colors"
          >
            Accept
          </button>
          <button
            onClick={decline}
            className="px-4 py-2 border border-slate-300 text-[var(--color-navy)] rounded-md text-sm font-medium hover:bg-slate-50 transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
