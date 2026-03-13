import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE } from "@/content/site";
import { IMAGES } from "@/content/images";

export function Contact() {
  return (
    <>
      <Hero
        title="Contact IFC Finance"
        subtitle="Established Financial Advisors"
        variant="compact"
        backgroundImage={IMAGES.dublinRiver}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-navy)] mb-4">
                Get in Touch
              </h2>
              <p className="text-[var(--color-slate)] mb-6">
                {SITE.name} are a long-established firm of Financial Advisors operating in Dublin and regulated by the Central Bank of Ireland. Please complete our Online Contact Form below or call us directly.
              </p>

              <div className="mb-8">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-navy)] mb-2">
                  Call us
                </h3>
                <a
                  href={`tel:${SITE.contact.phoneRaw}`}
                  className="text-2xl font-bold text-[var(--color-gold)] hover:text-[var(--color-gold-light)]"
                >
                  {SITE.contact.phone}
                </a>
              </div>

              <div className="mb-8">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-navy)] mb-2">
                  Contact Details
                </h3>
                <address className="not-italic text-[var(--color-slate)]">
                  <p>{SITE.name}</p>
                  <p>{SITE.contact.address}</p>
                  <p>{SITE.contact.city} {SITE.contact.postcode}</p>
                  <p>Tel: {SITE.contact.phone}</p>
                  <p>Fax: {SITE.contact.fax}</p>
                  <p>Email: <a href={`mailto:${SITE.contact.email}`} className="text-[var(--color-gold)] hover:underline">{SITE.contact.email}</a></p>
                  <p>Web: {SITE.contact.website}</p>
                </address>
              </div>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-navy)] mb-4">
                Send a Message
              </h3>
              <p className="text-[var(--color-slate)] mb-6">
                Please use the form below to contact us. All fields are required.
              </p>
              <ContactForm />
            </div>
          </div>

          <div className="mt-16">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="flex-1 rounded-lg overflow-hidden shadow-md aspect-video md:aspect-[16/9]">
                <img
                  src={IMAGES.dublinBridge}
                  alt="Dublin - Fitzwilliam Square area"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 rounded-lg overflow-hidden shadow-md aspect-video md:aspect-[16/9]">
                <img
                  src={IMAGES.irishGreenField}
                  alt="Irish countryside"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-navy)] mb-4">
              Find Us
            </h3>
            <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden">
              <iframe
                title="IFC Finance location - 4 Fitzwilliam Square East, Dublin 2"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-6.255%2C53.338%2C-6.242%2C53.345&layer=mapnik&marker=53.3415,-6.2485"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
