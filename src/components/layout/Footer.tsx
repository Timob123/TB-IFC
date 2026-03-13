import { Link } from "react-router-dom";
import { SITE } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-4">About {SITE.name}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {SITE.name} are a long-established firm of Financial Advisors operating in Dublin and regulated by the Central Bank of Ireland.
            </p>
            <Link to="/about" className="inline-block mt-4 text-[var(--color-gold)] hover:text-[var(--color-gold-light)] text-sm font-medium">
              Read more
            </Link>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white">Contact Us</Link>
              </li>
              <li>
                <Link to="/about/charges" className="text-slate-300 hover:text-white">Charges</Link>
              </li>
              <li>
                <a href={SITE.externalLinks.groupRisk} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">
                  Group Risk
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-slate-300 text-sm space-y-2">
              <p>{SITE.contact.address}</p>
              <p>{SITE.contact.city} {SITE.contact.postcode}</p>
              <p>
                <a href={`tel:${SITE.contact.phoneRaw}`} className="hover:text-white">{SITE.contact.phone}</a>
              </p>
              <p>
                <a href={`mailto:${SITE.contact.email}`} className="hover:text-white">{SITE.contact.email}</a>
              </p>
            </address>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-md">
              <svg className="w-5 h-5 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Regulated by the {SITE.regulator}</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-slate-400 text-sm">
          <p>IFC Advisors Limited T/As IFC Finance & T/As Group Risk is regulated by the Central Bank of Ireland.</p>
          <p className="mt-2">Copyright © {SITE.name}</p>
        </div>
      </div>
    </footer>
  );
}
